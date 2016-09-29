# Hello

This README was created to compliment a presentation given for UOHack in fall 2016. It is by no means the most technically accurate or thorough explanation of web development topics, but it should offer a basic introduction to web development topics to those who are new to the field.

I do not claim to be an expert. This is simply a gentle introduction to some complex topics. If anything doesn't make sense, I implore you to go out and learn more from much better sources than myself. The [Mozilla Developer Network](https://developer.mozilla.org/en-US/) is a fantastic resource and they even have their own ["Learning web development" documentation](https://developer.mozilla.org/en-US/docs/Learn).

My goal with this presentation and complimentary document is to shatter the idea that learning about the web is impossibly hard and time-consuming. On the contrary, the vast majority of web developers I know are self-taught (especially in media). 

I doubt I will be able to cover all of these topics in detail during the presentation so please feel free to come back and read up on some of the things that interest you.

# Table of contents

* [What is the internet?](#what-is-the-internet)
* [HTML](#html-hypertext-markup-language)
  * [Tags](#tags)
  * [HTML5](#html5)
* [CSS](#css-cascading-style-sheets)
  * [IDs and classes](#ids-and-classes)
  * [Responsive design (Media queries)](#responsive-design-media-queries)
  * [Inspecting a page](#inspecting-a-page)
* [JavaScript](#javascript)
  * [A word on jQuery](#a-word-on-jquery)
  * [A word on node.js](#a-word-on-nodejs)
* [Wrap up](#lets-wrap-this-up-i-want-to-go-eat-a-burrito)
* [More fun stuff](#more-fun-stuff)
  * [Text editors](#text-editors)
  * [Stack Overflow](#stack-overflow)
  * [Version control](#version-control)

# What is the internet?

That's a big question. Like, what is the universe? We can loosely define the internet as a network of connected computers. My computer is connected, your computer is connected and we're connected to the internet.

In addition to millions of consumer computers, there are also specialized computers called servers. Servers host and serve up documents, images and other assets that make up your website.

Whenever you go to a website, you basically download a copy of the site's documents and other assets to your machine and the website is rendered in your browser. 

There are many types of documents that may assist in serving a website (for example, PHP drives WordPress sites) but today we will only be talking about the three most fundamental document types: **HTML, CSS and JavaScript**.

*Note: The Associated Press Stylebook recently lowercased internet.*

*Note: There is definitely a difference between the internet and the world wide web but for the purposes of this class, I'm going to use them interchangeably. I know, I'm the worst. But it just makes it easier during a one-hour primer on web development. If you want more info on the difference, you can find more via [Google](https://www.google.com/search?q=internet+vs+www).*

# HTML (HyperText Markup Language)

Let's begin with HTML documents. 

HTML documents have a .html extension, just like JPEG images have a .jpg extension or Word documents have a .doc extension.

In fact, you can start coding in HTML right now! No special apps are required. First, open up a text document using Notepad on a PC or TextEdit on a Mac. Next, type "Hello world!" and save the file to your desktop as hello.html. Lastly, open up that file in your favorite browser and take a look at your handy work. You just created and viewed your first HTML document.

In HTML documents are simply structured text documents where you put the content of your website, like headlines and paragraphs. HTML is called a structured language because you wrap all of your content in tags. 

### Tags

Tags are simply opening and closing words that tell computers, "Hey, this is the start of this block," and "Hey, this is the end of this block." Look at the following example for a better idea of how tags work in the wild.

```html
<h1>This is a headline</h1>
<p>This is a paragraph. Notice how the headline is wrapped in those h1 tags? And this paragraph is wrapped in p tags? Pretty simple.</p>
<p>Just make sure you close every tag that you open. Things can get crazy when you have a few hundred lines of HTML and everything gets messed up when you forget to close a tag.</p>
```

There are **a lot** of different types of tags. There's one for images (`<img/>`) and there's one for dividing out sections of a page (`<div>...</div>`).

You might have noticed that I didn't put a closing tag with `<img/>`. Well, that's because there are a few (only a handful) [self-closing tags](http://blog.teamtreehouse.com/to-close-or-not-to-close-tags-in-html5). In other words, they're only a single element, without any interior content so they can close themselves. Let's look at a bigger example of a full HTML document.

```html
<html>
	<head>
		<title>Page title - Think about what the tab says</title>
		<!-- Meta data -->
		<meta charset="utf-8">
		<meta name="description" content="This is a simple example page.">
		<!-- More stuff could go here... -->
	</head>
	<body>
		<h1>This is the page headline</h1>
		<p><a href="http://saganipsum.com/">Sagan Ipsum</a> (lorem ipsum with a dash of Carl Sagan). Rogue galaxies, as a patch of light. Trillion, of brilliant syntheses stirred by starlight brain is the seed of intelligence!</p>
		<!-- See that link in the last paragraph? <a href=""> is how we set up links (I have no idea why that is the tag for link but go with it). Then the words "Sagan Ipsum" are inside the a tags so those two words are hyperlinks! -->
		<p>Great turbulent clouds, across the centuries two ghostly white figures in coveralls and helmets are soflty dancing a billion trillion vanquish the impossible, hundreds of thousands network of wormholes Orion's sword. Cosmic ocean globular star cluster inconspicuous motes of rock and gas the carbon in our apple pies birth kindling the energy hidden in matter.</p>
		<img src="http://orig06.deviantart.net/3f51/f/2013/231/4/4/dats_my_world___internet__space_and_carl_sagan_xd_by_thechameleon11-d6itbr3.jpg" width="100%">
		<!-- This is the self-closing image tag. The src="" is setting the source of the image. It has to be hosted on a server to be seen on the internet. In this case, I found a sweet Sagan pic and just pasted in it's URL. Generally, you only want to use your own photos, but this is for educational purposes so free use! --> 
		<p>Orion's sword extra-planetary shores of the cosmic ocean, dream of the mind's eye globular star cluster rogue. Trillion radio telescope encyclopaedia galactica trillion with pretty stories for which there's little good evidence.</p>
		<p>Star stuff harvesting star light vastness is bearable only through love the carbon in our apple pies, vanquish the impossible. Gathered by gravity? Vangelis encyclopaedia galactica!</p>
		<!-- You might be wondering what these tags with exclamation points are. Well, these are comments. They do not show up in your page (except the source code) and are simply here to help you read the code better. I highly recommend you comment your code because when you come back to it after six months it's super helpful. -->
	</body>
</html>
```

**PAUSE:** If this code seems overwhelming that's totally normal. Take a deep breath and go line by line. Take a look below at what it renders out as. Can you match up the major elements like the headline, paragraphs and image?

![rendered code](https://cloud.githubusercontent.com/assets/4853944/18861943/962a2ef8-843d-11e6-84ca-176015fecbf6.png)

If that makes sense, you can see a similar, but slightly more advanced example of this code served up at [uohack.com/web-basics/example/](http://uohack.com/web-basics/example/) and the source code of that particular page [here](https://github.com/uohack/web-basics/blob/gh-pages/example/index.html). Take a look if you want. Try to identify the similar elements. If you don't feel up to it, no worries! You can keep reading below and continue to learn new things.

### HTML5

As you start searching the web for resources on HTML development, you'll sure to stumble across documents on HTML5 (maybe you already have!). HTML5 and HTML are the same thing, HTML5 is just the newest version of HTML. HTML5 is good and has fun things like the video tag. I would highly recommend [learning more about HTML5](http://diveintohtml5.info/) because it's good to always be learning.

### Introducing: A metaphor

Ok, so, everyone has their own metaphor for web development. I like the house metaphor. If it works for you, go with it, if not, don't worry about it.

In this metaphor, a website is a house and HTML is the bare bones of the house. We're talking studs and drywall. No sink, maybe a front door, no carpet. Really just the structure, enough to say, "Ya, that's kind of like a house."

As you saw in the examples, HTML is just the bare bones of a website. There's no design, no decoration, no fun buttons or animations. It's just the structured content in Times New Roman. Sure the headlines may be bigger, but that doesn't mean it looks good. The drywall in a house is clean but it still needs some decorations to look good. Now, let's take a look about getting some decorations on the walls with CSS. 

# CSS (Cascading Style Sheets)

HTML is great and all but let's get into styling the site. CSS controls the  majority of design in a web page. We're talking fonts, colors, size, shape, etc.

*Note: Without any HTML, CSS is worthless. And without any CSS, HTML is pretty worthless. The two work together to provide a positive user experience.*

Let's jump right into some code.

```css
/* Remember the HTML comments (<!-- -->)? Well, CSS comments are created by a slash-star and star-slash.
And the comments can even go to multiple lines!
CSS works by targeting specific elements of the page.
The simplest way to do this is to target the HTML tags,
like <h1> or <p> */

h1 {
	/* Let's start by setting the font family of the h1 */
	font-family: Helvetica;
	/* While that might work well on modern computers, it's important to provide fallbacks for older computers. Let's set that font again with fallbacks */
	font-family: Helvetica, Arial, sans-serif;
	/* Now, let's set the font size. */
	font-size: 24px;
	/* Let's change the headline color to Emerald green */
	color: #9fcc3b;
	/* Let's center the text and make the background Emerald gray */
	text-align: center;
	background: #3a3a3a;
	/* You know what, I kind of want this to be your Emerald font, let's set that instead. */
	font-family: Exo, Arial, sans-serif;
	/* Be careful with custom fonts, there are only a few fonts that are widely available (like Times New Roman and Arial), any custom font will need to be hosted on your servers just like any other asset. */
}

p {
	/* Let's change the line-height (AKA leading) for paragraphs */
	line-height: 18px;
	/* You can do kerning too! */
	letter-spacing: 1.5px;
}
```

**PAUSE:** Again, this might seem overwhelming at first but break it down one line at a time. I've added a ton of comments to explain exactly what's going on. To explain it really simply, you have some HTML element you want to create a rule for and you explicitly define what you want that rule to say. for instance, with the `<p>` element, we're saying that we want to change the line-height and letter-spacing (leading and kerning to my print peeps out there) and we define the values for those attributes.

I don't want to get bogged down in the syntax or all of the different ways you can design stuff with CSS but this should start to give you a sense of what CSS is like.

Once again, I **strongly** urge you to comment out your code as you build your sites, whether it be HTML, CSS or any other language. You don't have to be as verbose as I am above, but make sure your comment makes sense. If it's too cryptic you're not doing anyone any favors.

### IDs and classes

Before I explain what IDs and classes are, you need to know that IDs are unique. They can only be used once. IDs are not to be used multiple times. If you want more than one you need to make a class. Classes can be used as many times as you want. 

ID = once
Class = as many as you want

Ok, let's discuss what these things are.

Sometimes you need to target more than just h1 or p. You may have more than one h1 style. Or you may have some p tags that are captions and some that are stories. Surely you don't want the captions to look the same as the stories. Classes and IDs offer you the opportunity to target HTML elements much more granularly.

Since an ID can only be used once in an HTML document, you want to save that for only really specific stuff like the newspaper flag in the header. For instance:

```html
<html>
	...
	<body>
		<header>
			<h1 id="flag">Daily Emerald</h1>
		</header>
		...
	</body>
</html>
```

You're going to use the h1 tag more than once in that page, probably for the headline of the article as well. But you only want the flag to be big and green. Well, you can use an ID to target **only** the element with the `#flag` ID. How do you do that? Well, in your CSS you add a rule for IDs using the pound sign before the name of the ID.

```css
#flag {
	color: #9fcc3b; /* Emerald green */
	font-size: 48px; /* Make the flag BIG */
}
```

Classes are similar, but you use `class="related"` and `.related` instead of `id="related"` and `#related`. Let's say you have a list of related stories and you want them to be slightly smaller than the other list items.

```html
<!-- Let's create an unordered list -->
<ul>
	<!-- Each li is a list item -->
	<li class="related">This is related story one</li>
	<li class="related">This is related story two</li>
	<li class="related">This is related story three</li>
</ul>
```

And the CSS would look like:

```css
li {
	font-size: 18px; /* Normal list item */
}
li .related{
	font-size: 12px; /* Related stories list item */
}
```

Now, wait a minute. That's a bunch of new stuff. I know, I know. But if you're going to get good at creating websites you're going to have to get good at reading other people's code and figuring out what it's doing.

In this case I have an unordered list (think bullets, as opposed to an ordered list `<ol>` which would be numbers) that has three list items that are headlines. Each list item has the class of "related". We target list items with the class of "related" in the CSS and set the font size to 12px. This is smaller than the usual list item which is set for 18px.


### Responsive design (Media queries)

Responsive web design is a topic large enough for its own hour-long presentation (as are most of these subjects), but I feel the need to mention it here. This idea really caught on in 2010 as smart phones became ubiquitous. The general idea here is that you want to produce one web page that looks good on a desktop (large screen), laptop (smaller screen), tablet (large mobile screen) and smart phone (small mobile screen). The alternative is to create two separate websites, one for desktop and one for mobile. I'm sure you've come across websites where the URL is prefixed with "m." or "mobile." like "[mobile.nytimes.com](http://mobile.nytimes.com)" versus the regular "[nytimes.com](http://nytimes.com)".

If you build a responsive web site you only have one set of code to maintain. That's the upside. The downside is you have to craft one website that degrades gracefully from a BIG desktop screen down to a mobile phone.

I don't want to brag but [The Register-Guard](http://registerguard.com) had one of the first, most elegant responsive websites in the media industry. That's part of the reason I wanted to go work there. So what does this look like in the real world?

Go to [registerguard.com](http://registerguard.com) on a desktop or laptop and re-size the screen from full-width down to a very narrow display. Can you see the site break down from four columns to three columns to one column?

This sort of effect is achieved by utilizing CSS media queries. The simplest way I can describe media queries is to try and expand on our house metaphor (oh, yes, that will continue throughout this document).

Let's say you own one square mile of land. You can build a sprawling mansion on this land with gardens and fountains and a whole bunch of stuff because you have so much room. That's like a large desktop display. But if you buy a plot of land where a row house used to be in San Francisco. In this case (mobile phone), you have very little land to work with. In order to build a house with the same amount of rooms as that mansion you would have to build a really tall row house.

We write this in CSS by defining different CSS rules for different screen sizes.

```css
/* Let's start by defining some defaults */
h1{
	/* By default your headlines will be black */
	color: black; 
}

/* Let's assume your defaults are set for mobile screens,
this mobile-first design theory is pretty useful
because if stuff breaks it will always work,
it may just display as it would on mobile */

/* This media query will be for screens between
600px and 899px wide */
@media (min-width: 600px) and (max-width: 899px){
	h1{
		/*These headlines will be green */
		color: green;
	}
}

/* This media query will be for screens larger than 900px */
@media (min-width: 900px){
	h1{
		/*These headlines will be green */
		color: red;
	}
}
```

**PAUSE:** Ok so this topic is a bit advanced and it's totally fine if this doesn't make sense. Click [here](http://uohack.com/web-basics/example/media-queries/) to see an example. The source code of that page can be seen [here](https://github.com/uohack/web-basics/tree/gh-pages/media-queries/index.html).

There is a lot of writing out there on responsive web design that is a lot better than anything I can put up here so I'll let you go look for some of those if you want to learn more. Just make sure to start with this [A List Apart](http://alistapart.com/article/responsive-web-design) article, it's definitely **the** definitive manifesto for responsive design.

### Inspecting a page

I want to pause a second to introduce you to an invaluable tool to web developers. Every major browser has their own version and each is slightly different, but all have the same basic function: allowing developers to inspect the source code for web sites.

**Browser developer tools** help web developers debug problems, inspect styles and see what assets are loading, among numerous other things.

Long-story short, in your browser of choice, right click (or control-click) somewhere on a web page and click on "Inspect". This should pop open your developer tools.

There's a lot in there and this is definitely not a course on how to use developer tools. Just know that they're there for later on in your dev career. If you want to learn more, Google around for your favorite browser and "dev tools". Here is the documentation for [Getting started with Chrome dev tools](https://developers.google.com/web/tools/setup/?hl=en).

### Back to the house metaphor!!!

CSS is the paint. CSS is the hanging picture on the wall. CSS is shag carpeting and wood-paneled walls in my college apartment. CSS is the interior design. It sets the tone.

Of course, you don't *have* to decorate your house or use CSS, but your website would be extremely bland and would certainly lack any personality.

Please remember though, a good design is only as good as the structure it inhabits. If the walls are falling in, you probably don't want to hang that priceless Picasso on the wall. So make sure you have solid, sturdy HTML before you start decorating it. 

### Wait, you never explained what CSS stands for

Oh yes, well, that's a bit complicated. As it turns out, you can put CSS in a number of places. Those include:

* In a separate CSS document
* In the `<head>` portion of the HTML document, as long as they're wrapped in `<style>` tags
* In HTML tags, for example, `<h1 style="font-size:18px;">...</h1>`

Generally speaking, it's bad practice to have CSS in your HTML document at all. So, you should always create a separate CSS document to house your CSS. That way you can change one CSS document and it will affect multiple HTML pages.

### Whoa, whoa, whoa. You **still** didn't answer the question

Yes, sorry, it's getting late and I still have to get through JavaScript.

Ok, so your browser will apply the style that is closest to the HTML tag. That's the cascading part. Say in your styles.css file you set `h1{ font-size: 24px; }` and in the head of your HTML document you set `h1{ font-size: 18px; }` and in the tag you set `style="font-size:12px;"`. What size do you think your h1 will be?

If you answered 12px you would be correct. That's because your styles will cascade and the closest one to the HTML tag will be deemed the most important. This opens up the door for some super hacky in-line CSS which is bad.

Always try to keep your CSS contained in that separate stylesheet.

# JavaScript

### Java

Ok, so let's get this out of the way right from the get go. There **is** a programming language named Java. It has **nothing** to do with JavaScript. Anyone who tells you otherwise is lying.

Why are their names so similar? It's my understanding that Java was super hot when JavaScript was being conceived and it was a marketing decision to try and ride the coattails of Java's success. I don't know if that's correct but that's what I'm going with.

### Back to JavaScript

JavaScript provides added functionality to your website. Generally speaking, JS requires some sort of input (a click maybe, or a scroll) to change the site in some way. 

Like CSS, JavaScript can be in an external document of in the HTML document. Unlike CSS, sometimes you are required to include JavaScript in the HTML document. It all depends on what you're trying to accomplish.

### Jumping straight to the house metaphor

This is where the house metaphor starts to break down a bit. Let's see if I can save it...

JavaScript is equivalent to a light switch, water facet or garbage disposal in some regards. These things require some input, are built in and are super reliable. They make your life easier but they're built in to the house so they can be hard to work with if you're not a plumber or electrician.

JavaScript can also be like a dryer or refrigerator. These are more of the big external JS libraries where you include a big JavaScript file that someone else wrote to gain some sort of functionality on your site. For instance, I'm using someone else's JS to make [this web page](http://uohack.com/web-basics/) into a slide deck for the presentation. It works really well but I have no idea how it works. Just like a washing machine. It does a really good job on one specific task but I have no idea how my washing machine works beyond the basic controls that are made available to me.

*Note: Compare that [web page](http://uohack.com/web-basics/) to the same HTML without any CSS or JS included [here](http://uohack.com/web-basics/no-js/). Can you notice the similarities?*

### A word on jQuery

jQuery is one of those big JavaScript libraries that does a lot for you **if** you need it. There has been a big push recently (every six months or so) to get away from jQuery because you can do a lot of that in plain, old [vanilla JavaScript](http://www.vanillalist.com/). But it's harder because jQuery does the heavy lifting for you and there are [so many](http://stackoverflow.com/questions/tagged/jquery) Stack Overflow answers that include jQuery. It's easy to become convinced that you need jQuery but you rarely do.

The release of [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) has introduced a number of cool [animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) that a lot of people used jQuery to easily accomplish. Since these are built into CSS3, you may not need jQuery as much as you think. 

What I'm trying to say is this: jQuery is great and all, but chances are you don't **really** need it. Especially not early on in your dev career. So think long and hard about what you're trying to accomplish and do some research on [vanilla JS alternatives](http://youmightnotneedjquery.com/) before blindly including jQuery.

### A word on node.js

There's a lot of cool stuff happening right now in the world of JavaScript, specifically with [node.js](https://nodejs.org/en/about/). This is extremely advanced stuff for where you're at. Avoid reading about node because it will probably only confuse you more. Stick to learning about the basics of JavaScript.

### Wait, is that it? Where's the code?

Yes. There's a ton I could say on JavaScript but I honestly don't think it's worth your time. If today was the first time you have read about HTML and CSS then you're not ready for JavaScript. Go out and build an HTML/CSS website. Or two. Or three.

Then, when you start realizing that you need some added muscle, start teaching yourself about vanilla JavaScript. Once you have a basic understanding of that, you can start using jQuery, if you need it.

# Let's wrap this up, I want to go eat a burrito

Check out my [example directory](https://github.com/uohack/web-basics/tree/gh-pages/example) for a basic website setup. 

A generic directory tree might look something like this:

* site
  * index.html
  * styles
    * styles.css
  * js
    * script.js
  * assets
    * image.jpg
    * animated.gif
    * font.woff        //font
    * font.eot         //font

*Note that a basic web page like the Daily Emerald homepage can be made up of hundreds of documents. At last check, the Emerald homepage required 140 documents to render. This includes HTML, CSS, JS, images, fonts, tracking software (Chartbeat, Google Analytics, etc.) and ad software (DFP, OpenX, etc.).*

While you're still getting started be careful, back stuff up and don't ever make a change on the production servers.

Some final thoughts:

* Simple is always better
* This stuff takes time and practice to get better (start with your own personal website)
* Technologies are constantly changing so **never stop learning**

# More fun stuff

These are some tools and tricks that I've learned over the years. They don't really fit into the presentation but some of you might be interested.

### Text editors

Earlier in this document I suggested you open Notepad on PCs or TextEdit on Macs to create some HTML code. There's nothing wrong with these text editors but they are **very** bare bones compared to others like. Below is a list of popular text editors that I have used over the years.

* [TextWrangler](http://www.barebones.com/products/textwrangler/): This is the typical my-first-editor for many students. It works well, is very simple, and is hard to mess up. There are no frills but that's totally fine when you're first learning about web development. And it's free. If you're not sure which text editor to download, this is probably the one for you.
* [Sublime Text](https://www.sublimetext.com/): This is a freemium text editor that I graduated to after TextWrangler. For whatever reason it just felt more authentic than TextWrangler but it was still pretty simple. You can install **a lot** of plugins to Sublime to make your life easier but you really don't need them when your getting started. The only downside to Sublime is that if you use the free download it will prompt you to register and pay for a license. You don't have to, you can hit cancel every time but it does get kind of annoying. I bought the license at one point and I remember being surprised by how cheap it was.
* [BBEdit](http://www.barebones.com/products/bbedit/demo.html): BBEdit is the paid-for version of TextWrangler and offers a lot of great features, such as comparing two files for differences and searching through directories. I use this at work for most of my development work. For whatever reason it doesn't tab as well as Sublime does but that's something I can deal with. If you're willing to pay for a nice text editor, this is a good option.
* [Atom](https://atom.io/): A few years ago there was a big effort by Github to make a text editor for the cool kids. It feels like a pro-level version of Sublime Text with a lot of built in features, specifically related to Github. I used it a little. The biggest perk was a live MarkDown preview and it's free.

### Stack Overflow

When you first start doing web development Google will be your best friend. And 9 times out of ten StackOverflow will be the first few results. StackOverflow is a forum (?) where you can ask any question about code and someone will answer it. But better than that, chances are someone has already asked a question about the issue you're having so the answer is sitting there waiting for you!

While many of your questions will already be answered, don't be afraid to ask questions too. They'll tell you if your question has already been answered or have an answer for you in a few hours. 

*Note: Etiquette dictates that you simplify your code as much as possible before asking your question. Before you post a question, make sure you've boiled down your issue to the root cause and never post the entirety of your code in a question. This technique has an added benefit: When you break down the problem into smaller parts it's common to find a solution before you ever ask the question.*

### Version control

While version control is vastly outside the scope of this document, I would be remiss if I didn't mention it.

When you're working on an essay it's good to save early and often, as well as back up the file to a cloud service. The equivalent to that in programming is version control. 

This is kind of a complex subject so I don't want to get too deep into it but if you want to use version control you'll probably want to use a service like Github or BitBucket. They're pretty similar but the most popular one is Github. 

To confuse you a bit more, both Github and BitBucket utilize a version control system called [Git](https://help.github.com/articles/set-up-git/) at their core. 

You can think of Git as saving your essay early and often while Github and BitBucket offer the cloud backup. They offer a lot of other features as well, like issue tracking, wikis and even some simple website hosting. Both are free to the casual user.

You might have noticed that this document and all of my examples are in Github.

Long story short, if you want to get into web development, you'll need to start using version control sooner or later. If you're just getting started, I recommend starting with Github because they have a lot of [getting started documentation](https://guides.github.com/).
