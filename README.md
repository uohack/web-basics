Hi there. This repo was created to house a slide deck and starter files for a UOHack presentation on the basics of web development given in fall 2016. I hope to keep this updated over time, but be sure to check the last commit date.

So, without further ado, let's jump right in. Below is a write-up of what I expect to cover. There's a bit more information here than what I'll probably go into so feel free to come back to this after a few days and read through.

# What is the internet? (Recently lowercased by the AP)

That's a big question. Like, what is the universe? We can loosely define the internet as a network of connected computers. My computer is connected, your computer is connected, we're connected to the internet.

In addition to millions of consumer computers, there are also specialized computers called servers. Servers host and serve up documents, images and other assets that makes up your website.

Whenever you go to a website, you effectively download a copy of the site's documents and other assets to your machine and the website is rendered in your browser. 

There are many types of documents that may assist in serving a website (PHP, for example, which is what drives WordPress) but today we will only be talking about three: **HTML, CSS and JavaScript**.

For the record, there is definitely a difference between the internet and the world wide web but for the purposes of this class, I'm going to use them interchangeably. I know, I'm the worst. But it just makes it easier during a one-hour primer on web development. If you want more info on the difference, you can find more via [Google](https://www.google.com/search?q=internet+vs+www).

# HTML (HyperText Markup Language)

Let's begin with HTML documents. 

HTML documents have a .html extension, just like JPEG images have a .jpg extension. 

In fact, you can create a website by simply opening a text document (you can use Notepad on a PC or TextEdit on a Mac). Next, type "Hello world!", save the file as hello.html to your desktop and open that file in a web browser.
Congrats, you just created your own website, albeit extremely simple, hosted on your local machine and not accessible to the internet as a whole. Pretty underwhelming huh?

HTML documents are simply structured text documents where you put the content of your website, like headlines and paragraphs. HTML is called a structured language because you wrap all of your content in tags. 

### Tags

Tags are simply opening and closing words that tell computers that, "Hey, this is the start of this block," and "Hey, this is the end of this block." Look at the following example for a better idea of how tags work in the wild.

```html
<h1>This is a headline</h1>
<p>This is a paragraph. Notice how the headline is wrapped in those h1 tags? And this paragraph is wrapped in p tags? Pretty simple.</p>
<p>Just make sure you close every tag that you open. Things can get crazy when you have a few hundred lines of HTML and everything gets messed up when you forget to close a tag.</p>
```

There are **a lot** of different types of tags. There's one for images (`<img/>`) and there's one for dividing out sections of a page (`<div>...</div>`).

You might have noticed that I didn't put a closing tag with `<img/>`. Well, that's because there are a few (only a handful) of [self-closing tags](http://blog.teamtreehouse.com/to-close-or-not-to-close-tags-in-html5). In other words, they're only a single thing so they can close themselves. Let's look at a bigger example of a full HTML document.

```html
<html>
	<head>
		<!-- Meta data -->
		<meta charset="utf-8">
		<title>Page title - Think about what the tab says</title>
		<description>This is the page description, just a brief explanation of what you're doing.</description>
		<!-- More stuff here... -->
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

### HTML5

As you start searching the web for resources on HTML development, you'll sure to stumble across documents on HTML5 (maybe you already have!). HTML5 and HTML are the same thing, HTML5 is just the newest version of HTML. HTML5 is good and has fun things like the video tag. I would highly recommend [learning more about HTML5](http://diveintohtml5.info/) because it's good to always be learning.

### Introducing: A metaphor

Ok, so everyone has their own metaphor for web development. I like the house metaphor. If it works for you, go with it, if not, don't worry about it.

In this metaphor, a website is a house and HTML is the bare bones of the house. We're talking studs and drywall. No sink, maybe a front door, no carpet. Really just the structure, enough to say, "Ya, that's kind of like a house."

As you saw in the examples, HTML is just the bare bones of a website. There's no design, no decoration, no fun buttons or animations. It's just the structured content in Times New Roman. Sure the headlines may be bigger, but that doesn't mean it looks good. The drywall in a house looks good but it still needs some pictures or something. 

# CSS (Cascading Style Sheets)

As you might have guessed, this is where we get into styling the site; CSS controls the vast majority of the design.

It's important to note, that without any HTML, CSS is worthless. And without any CSS, HTML is pretty worthless. The two work together to provide a positive user experience.

Nearly everything you think you could design, from fonts to color to size to shape can be controlled via CSS.

Let's look at some basic CSS.

```css
/* CSS comments are created by a slash-star and star-slash.
And the comments can even go to multiple lines!
CSS works by targeting specific elements of the page.
The simplest way to do this is to target the HTML tags */

h1 {
	/* Let's start by setting the font family in order of most-preferred to least */
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
	/* Be careful with custom fonts, there are only a few fonts that are widely available, any custom font will need to be hosted on your servers just like any other asset.
}

p {
	/* Let's change the line-height (AKA leading) for paragraphs */
	line-height: 18px;
}
```

I don't want to get bogged down in all of the different ways you can design stuff with CSS but this should give you a sense.

Note that in order to target a tag you have to state that tag and wrap your rules (styles) in curly braces ({}).

Again, I strongly urge you to comment out your code as you build your sites.

### IDs and classes

Before I explain what IDs and classes are, you need to know that IDs are unique. They can only be used once. OK? IDs are not to be used multiple times. If you want more than one you need to make a class. Classes can be used as many times as you want. 

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

You're going to use the h1 tag more than once in that page, probably for the headline of the article as well. But you only want one to be big and green. Well, you can use an ID to target **only** the element with the `#flag` ID. How do you do that? Well, you use the pound sign before the ID.

```css
#flag {
	color: #9fcc3b; /* Emerald green */
}
```

Classes are similar, but you use `class="related"` and `.related`. Let's say you have a list of related stories and you want them to be slightly smaller than the other headlines.

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
li .related{
	font-size: 12px;
}
```

Now, wait a minute. That's a bunch of new stuff. I know, I know. But if you're going to get good at creating websites you're going to have to get good at reading other people's code and figuring out what it's doing.

In this case I have an unordered list (think bullets, as opposed to an ordered list `<ol>` which would be numbers) that has three list items that are headlines. Each list item has the class of "related". We target list items with the class of "related" in the CSS and set the font size to 12px.

### Inspecting a page

Now, I'm going to introduce you to an invaluable tool to web developers. Every major browser has their own version and each is slightly different, but all have the same basic function: allowing developers to inspect the source code for web sites.

**Browser developer tools** help web developers debug problems, inspect styles and see what assets are loading, among numerous other things.

Long-story short, in your browser of choice right click (or control-click) somewhere on a web page and click on "Inspect". This should pop open your developer tools.

There's a lot in there and this is definitely not a course on how to use developer tools. Just know that they're there for later on in your dev career.

### Back to the house metaphor!!!

CSS is the paint. CSS is the hanging picture on the wall. CSS is the different carpet because the 70's shag carpet was getting too old and you had to switch it out. 

None of those things are absolutely necessary, but everyone decorates their house because it wouldn't be a home without your personal touch.

But, a good design is only as good as the structure it effects. If the walls are falling in, you probably don't want to hang that priceless Picasso on the wall. So make sure you have solid, sturdy HTML before you start decorating it. 

### Wait, you never explained what CSS stands for

Oh yes, well, that's a bit complicated. As it turns out, you can put CSS in a number of places. Those include, but are not limited to:

* In a separate CSS document
* In the `<head>` portion of the HTML document, as long as they're wrapped in `<style>` tags
* In HTML tags, for example, `<h1 style="font-size:18px;">...</h1`

Generally speaking, it's bad practice to have CSS in your HTML document at all. So, you should always create a separate CSS document to house your CSS. That way you can change one CSS document and it will affect multiple HTML pages.

### Whoa, whoa, whoa. You **still** didn't answer the question

Yes, sorry, it's getting late and I still have to get through JavaScript.

Ok, so your browser will apply the style that is closest to the HTML tag. That's the cascading part. Say in your styles.css file you set `h1{ font-size: 24px; }` and in the head of your HTML document you set `h1{ font-size: 18px; }` and in the tag you set `style="font-size:12px;"`. What size do you think your h1 will be?

If you answered 12px you would be correct. That's because your styles will cascade and the closest one to the HTML tag will be deemed the most important. This opens up the door for some super hacky inline CSS which is bad.

Always try to keep your CSS contained in that separate stylesheet.

# JavaScript

### Java

Ok, so let's get this out of the way right from the get go. There **is** a programming language named Java. It has **nothing** to do with JavaScript. Anyone who tells you otherwise is lying. A lot of young web developers will say they're trying to learn Java for their website. If someone says this, they have a long way to go. Which is totally fine. I did that. But it's just a huge red flag that you may not be super experienced. 

But why are their names so similar? It's my understanding that Java was super hot when JavaScript was being developed and it was a marketing decision to try and ride the coattails of Java's success. I don't know if that's correct but that's what I'm going with.

### Back to JavaScript

JavaScript provides added functionality to your website. Generally speaking, JS requires some sort of input (a click maybe, or a scroll) to change the site in some way. 

Like CSS, JavaScript can be in an external document of in the HTML document. Unlike CSS, sometimes you are required to include JavaScript in the HTML document. It all depends on what you're doing.

### Jumping straight to the house metaphor

This is where the house metaphor starts to break down a bit. Let's see if I can save it...

JavaScript is equivalent to a light switch, water facet or garbage disposal in some regards. These things require some input, are built in and are super reliable. They make your life easier but they're built in so they can be hard to work with if you're not a plumber or electrician.

JavaScript can also be like a dryer or refrigerator. These are more of the big external libraries where you include a big JavaScript file that someone else wrote to gain some sort of functionality on your site. For instance, I'm using someone else's JS to make my web page into a slide deck. It works really well but I have no idea how it works. Just like a washing machine. It does a really good job on one specific task but I have no idea how my washing machine works beyond the basic controls that are made available to me.

### A word on jQuery

jQuery is one of those big JavaScript libraries that does a lot for you **if** you need it. There has been a big push recently (every six months or so) to get away from jQuery because you can do a lot of that in plain, old [vanilla JavaScript](http://www.vanillalist.com/). But it's harder because jQuery does the heavy lifting for you.

The release of CSS3 has introduced a number of cool animations that a lot of people used jQuery to easily accomplish. Since these are built into CSS3, you may not need jQuery as much as you think. 

What I'm trying to say is this: jQuery is great and all, but chances are you don't **really** need it. So think long and hard about what you're trying to accomplish and do some research on [vanilla JS alternatives](http://youmightnotneedjquery.com/) before blindly including jQuery.

### A word on node.js

There's a lot of cool stuff happening right now in the world of JavaScript, specifically with node. This is extremely advanced stuff for where you're at. Avoid reading about node because it will probably only confuse you more. Stick to learning about the basics of JavaScript.

### Wait, is that it?

Yes. There's a ton I could say on JavaScript but I honestly don't think it's worth your time. If today was the first time you have read about HTML and CSS then you're not ready for JavaScript. Go out and build an HTML/CSS website. Or two. Or three.

Then, when you start realizing that you need some added muscle, start teaching yourself about vanilla JavaScript. Once you have a basic understanding of that, you can start using jQuery.

# Let's wrap this up, I want to go eat a burrito

Fair enough, me too.

Check out my example directory for a basic website setup. Typically it looks something like this:

* site
  * index.html
  * styles
    * styles.css
  * js
    * script.js
  * assets
    * image.jpg
    * animated.gif
    * font.woff
    * font.eot

Please note that a basic web page like the Daily Emerald homepage can be made up of hundreds of documents. At last check the Emerald homepage required 140 documents to render. This includes HTML, CSS, JS, images, fonts, tracking software (Chartbeat, Google Analytics, etc.) and ad software (DFP, OpenX, etc.).

So, while it seems really simple with just two files (HTML and CSS), it gets exponentially more complicated when you start working on production sites.

Be careful, back stuff up, don't ever make a change on the production servers.

Final thoughts:

* Simple is always better
* This stuff takes time and practice to get better (start with your own personal website)
* Technologies are constantly changing so **never stop learning**


