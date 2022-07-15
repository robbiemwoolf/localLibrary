<div class="scrollable-container" ng-transclude=""> <div markdown="fileTab.file.challenge.instructions" multi-language="true" class="markdown collapsed"><h1>Project: Local library</h1><blockquote>
<p>Your neighborhood has decided to put together a local library where people can lend and borrow books. One of the most important features to organize this is a dashboard that will show which books are available, which are currently out, and other general statistics about the program.</p>
<p>Others are taking care of the logistics and and design, but they need you to build the algorithms!</p>
</blockquote>
<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded"><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/dbceba600cf3b60ac7277c56ea9243b8-image.png" alt="image.png"></div></zoomable-image></p>
<p>This project is designed to test your ability to work with large datasets and build algorithms based on those datasets. Before taking on this module, you should be comfortable with the learning objectives listed below. You will not need to make any edits to HTML or CSS for this project.</p>
<h2>Learning objectives</h2><p>This project will assess the following learning objectives, in addition to many others:</p>
<ul>
<li>Use Visual Studio Code as a text editor.</li>
<li>Differentiate between the three most common JavaScript error types.</li>
<li>Solve bugs by using error messages.</li>
<li>Differentiate between <code>let</code>, <code>const</code>, and <code>var</code>, and use each appropriately.</li>
<li>Create an array from a string based on particular criteria and join arrays into strings.</li>
<li>Write strings that embed expressions using template literals.</li>
<li>Access all the values and keys of an object.</li>
<li>Use <code>find()</code>, <code>filter()</code>, <code>map()</code>, <code>some()</code>, and <code>every()</code> to solve different problems.</li>
<li>Use <code>reduce()</code> to solve different problems.</li>
<li>Use <code>sort()</code> to sort arrays in various ways.</li>
</ul>
<h2>Project setup</h2><p>Download the Qualified assessment files to your computer.</p>
<p>Then <code>cd</code> into the assessment folder.</p>
<p>Next, install dependencies locally by running this command:</p>
<div class="language-tabset"><div class="language-tab language-bash"><pre><code class="lang-bash">npm i
</code></pre>
</div></div><p>To run the tests, you can run the following command:</p>
<div class="language-tabset"><div class="language-tab language-bash"><pre><code class="lang-bash">npm test
</code></pre>
</div></div><p>To watch how the code you write affects the application website, you can run the following command. This command will start a server and take over your terminal window. To stop the server from running, you can press <code>Control+C</code>.</p>
<div class="language-tabset"><div class="language-tab language-bash"><pre><code class="lang-bash">npm start
</code></pre>
</div></div><h2>Instructions</h2><p>You are tasked with building a number of different algorithms that will help complete an administrative site for a local library. All of the functions will work on three common datasets. The datasets are related, and at times, you will need to work with multiple datasets to solve the problem at hand.</p>
<p>While working on these problems, you have both the tests and the live site to act as a guide. You can solve the tasks in any order and are encouraged to organize your code how you like.</p>
<p>All of the files you need to edit are inside of the <code>public/src/</code> directory.</p>
<p>While working on this project you <em>should</em>:</p>
<ul>
<li>Use well-named variables, in particular avoiding any single-letter variables that lack meaning.</li>
<li>Use native array methods like <code>find()</code>, <code>filter()</code>, <code>map()</code>, and <code>reduce()</code>.</li>
<li>Make use of both function declarations and arrow functions.</li>
<li>Build helper functions when appropriate.</li>
<li>Make use of advanced JavaScript features like ternary operators, the spread operator, object shorthand, array and object destructuring, and <code>for/in</code> loops.</li>
</ul>
<p>While working on this project you <em>should not:</em></p>
<ul>
<li>Change the names of the functions.</li>
<li>Edit any of the files outside of the <code>public/src/</code> directory.</li>
</ul>
<p>If you feel as though one of your solutions is working but something isn't showing up right on the site or in the tests, reach out for help.</p>
<h2>Datasets</h2><p>There are three datasets that are a part of this project: <code>accounts</code>, <code>authors</code>, and <code>books</code>.</p>
<h3>Accounts</h3><p>You can view all of the accounts data inside of the <code>public/data/</code> directory. Each account is an object with the following shape:</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"id"</span>: <span class="hljs-string">"5f446f2ecfaf0310387c9603"</span>,
  <span class="hljs-string">"name"</span>: {
    <span class="hljs-string">"first"</span>: <span class="hljs-string">"Esther"</span>,
    <span class="hljs-string">"last"</span>: <span class="hljs-string">"Tucker"</span>
  },
  <span class="hljs-string">"picture"</span>: <span class="hljs-string">"https://api.adorable.io/avatars/75/esther.tucker@zillacon.me"</span>,
  <span class="hljs-string">"age"</span>: <span class="hljs-number">25</span>,
  <span class="hljs-string">"company"</span>: <span class="hljs-string">"ZILLACON"</span>,
  <span class="hljs-string">"email"</span>: <span class="hljs-string">"esther.tucker@zillacon.me"</span>,
  <span class="hljs-string">"registered"</span>: <span class="hljs-string">"Thursday, May 28, 2015 2:51 PM"</span>
}
</code></pre>
</div></div><p>An account represents a person who is registered with the library. Accounts can take out and return books.</p>
<h3>Authors</h3><p>You can view all of the authors data inside of the <code>public/data/</code> directory. Each author is an object with the following shape:</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"id"</span>: <span class="hljs-number">0</span>,
  <span class="hljs-string">"name"</span>: {
    <span class="hljs-string">"first"</span>: <span class="hljs-string">"Lucia"</span>,
    <span class="hljs-string">"last"</span>: <span class="hljs-string">"Moreno"</span>
  }
}
</code></pre>
</div></div><p>An author represents someone who wrote one or more books in the library.</p>
<p><strong>Note:</strong> Author's IDs are set to be numbers, whereas the other two datasets use string IDs.</p>
<h3>Books</h3><p>You can view all of the books data inside of the <code>public/data/</code> directory. Each book is an object with the following shape:</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"id"</span>: <span class="hljs-string">"5f4471327864ee880caf5afc"</span>,
  <span class="hljs-string">"title"</span>: <span class="hljs-string">"reprehenderit quis laboris adipisicing et"</span>,
  <span class="hljs-string">"genre"</span>: <span class="hljs-string">"Poetry"</span>,
  <span class="hljs-string">"authorId"</span>: <span class="hljs-number">20</span>,
  <span class="hljs-string">"borrows"</span>: [
    {
      <span class="hljs-string">"id"</span>: <span class="hljs-string">"5f446f2e2a4fcd687493a775"</span>,
      <span class="hljs-string">"returned"</span>: <span class="hljs-literal">false</span>
    },
    {
      <span class="hljs-string">"id"</span>: <span class="hljs-string">"5f446f2ebe8314bcec531cc5"</span>,
      <span class="hljs-string">"returned"</span>: <span class="hljs-literal">true</span>
    },
    {
      <span class="hljs-string">"id"</span>: <span class="hljs-string">"5f446f2ea508b6a99c3e42c6"</span>,
      <span class="hljs-string">"returned"</span>: <span class="hljs-literal">true</span>
    }
  ]
}
</code></pre>
</div></div><p>Each book represents a physical book but also contains additional information. In particular:</p>
<ul>
<li>The <code>authorId</code> matches up with an author. It represents who wrote the book.</li>
<li>The <code>borrows</code> array is a list of transactions that have occurred with this book. For example, the above book has been borrowed three times.<ul>
<li>The <code>id</code> for each "borrow" record matches with an account ID. In the above example, the account with an ID of <code>"5f446f2e2a4fcd687493a775"</code> has not yet returned the book, meaning they still are in possession of it.</li>
</ul>
</li>
</ul>
<h2>Functions</h2><p>You are tasked with writing several functions that work with the above datasets. The instructions for the functions can be found in the <code>docs/</code> folder.</p>
<p><strong>Note:</strong> In addition to needing to pass the tests and requirements in the instructions here, please review the Rubric Requirements for the human-graded part of this project in your Thinkful curriculum page.</p>
</div> <score-card-instructions challenge="fileTab.file.challenge"><!----></score-card-instructions> </div>
