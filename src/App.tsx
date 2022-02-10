import { useState } from 'react';

const data = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const categories = ['all', ...new Set(data.map((el) => el.category))];

function App() {
  const [manuData, setMenuData] = useState(data);

  const filter = (category: string) => {
    if (category === 'all') {
      setMenuData(data);
    } else {
      setMenuData(data.filter((el) => el.category === category));
    }
  };

  return (
    <main>
      <section className='mx-auto w-[90vw] max-w-[1170px] py-20'>
        <div className='flex flex-col items-center justify-center mb-[2rem]'>
          <h1 className='text-3xl font-bold tracking-wider mb-3'>Our Menu</h1>
          <div className='w-[5rem] h-1 bg-[#c59d5f]'></div>
        </div>
        <div className='mb-16 flex justify-center flex-wrap items-center text-[#c59d5f]'>
          {categories.map((cat, inx) => (
            <div key={inx}>
              <button
                type='button'
                className='transition-all	mx-[0.5rem] py-[0.375rem] px-[0.75rem] hover:bg-[#c59d5f] hover:rounded hover:text-white duration-500 capitalize'
                onClick={filter.bind(null, cat)}>
                {cat}
              </button>
            </div>
          ))}
        </div>
        <div className='flex flex-col w-[90vw] mx-auto max-w-[1170px] items-center justify-center'>
          {manuData.map((menu) => {
            return (
              <div key={menu.id}>
                <article className='flex flex-col  md:flex-row justify-between max-w-[25rem] md:max-w-[40rem] mb-10'>
                  <img
                    src={menu.img}
                    alt={menu.title}
                    className='h-[200px] md:h-[175px] md:w-[250px] md:min-w-[250px] w-full object-cover border-4 border-[#c59d5f]'
                  />
                  <div className='md:ml-4'>
                    <header className='flex justify-between border-b border-dotted border-[#617d98]'>
                      <h4 className='capitalize font-bold my-2 tracking-wider'>
                        {menu.title}
                      </h4>
                      <h4 className='text-[#c59d5f] my-2 font-bold'>
                        ${menu.price}
                      </h4>
                    </header>
                    <p className='pt-4 text-[#617d98] text-sm'>{menu.desc}</p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
