import{_ as o,o as p,c as i,a,b as n,d as s,e as t,r}from"./app.b5b9c78c.js";var l="/assets/edit-records-via-query.48218fcd.png",c="/assets/add-ipns-records.85d16435.png";const d={},u=a("h1",{id:"data-did-id",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#data-did-id","aria-hidden":"true"},"#"),n(" data.did.id")],-1),k=a("p",null,"Manage your .bit accounts' data in the most elegant way.",-1),h=a("h2",{id:"introduction",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),n(" Introduction")],-1),v={href:"https://data.did.id",target:"_blank",rel:"noopener noreferrer"},b=t('<p>With <code>data.did.id</code>, you can check the data of any .bit account, including but not limited to the following data:</p><ul><li>Personal Profile (profile)</li><li>Crypto Assets Address (address)</li><li>Decentralized Web (dweb)</li><li>Customized Data (custom)</li><li>Permissions (owner/manager)</li><li>...</li></ul><p>If you are the <strong>owner or manager</strong> of a .bit account, you can also manage the data of this account or change the permissions of the account.</p><p>If you are a <strong>developer</strong>, you can even make users to <a href="#update-bit-account-via-url-query">Update .bit account via URL query</a></p><blockquote><p>In a word, any action related to account management can be made here.</p></blockquote><h2 id="update-bit-account-via-url-query" tabindex="-1"><a class="header-anchor" href="#update-bit-account-via-url-query" aria-hidden="true">#</a> Update .bit account via URL query</h2><p>Each day many developers are exploring the way to create interesting applications that incorporate with .bit.</p><p>In this rapid development period of blockchain industry, it is crucial to quickly verify the feasibility of a business model instead of spending too much time on the research of infrastructure.</p>',8),m={href:"https://data.did.id",target:"_blank",rel:"noopener noreferrer"},y={href:"https://data.did.id/dasdeveloper.bit?records=%5B%7B%22action%22%3A%22add%22,%22key%22%3A%22profile.website%22,%22value%22%3A%22https%3A%2F%2Fdid.id%22%7D,%7B%22action%22%3A%22delete%22,%22key%22%3A%22profile.twitter%22%7D,%7B%22action%22%3A%22replace%22,%22key%22%3A%22profile.avatar%22,%22value%22%3A%22https%3A%2F%2Fdata.did.id%2Ffavicon.ico%22%7D%5D",target:"_blank",rel:"noopener noreferrer"},f=a("h3",{id:"quick-start",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#quick-start","aria-hidden":"true"},"#"),n(" Quick Start")],-1),g={href:"https://data.did.id",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"records",-1),w=t(`<p>Developers only need to fill in specific params according to the spec, and then guide users to visit the corresponding link. After users click on the confirm button, the data will be changed successfully.</p><p>It&#39;s general process is as follows:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> records <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;profile.website&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;https://did.id&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;profile.twitter&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;replace&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;profile.avatar&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;https://data.did.id/favicon.ico&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> queryString <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>records<span class="token punctuation">)</span><span class="token punctuation">)</span>

window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://data.did.id/dasdeveloper.bit?records=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>queryString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After opening the corresponding link, the user will see a page similar to the following: <img src="`+l+`" alt="Edit records via query"></p><p>After the user confirms, the data will be updated.</p><p>This process eliminates complex on-chain operations and does not compromise the security of user data.</p><h3 id="query-records" tabindex="-1"><a class="header-anchor" href="#query-records" aria-hidden="true">#</a> Query: <code>records</code></h3><p>The &#39;records&#39; query is an array, each of which is an action to the current .bit account, including the following actions:</p><ul><li>Add (add)</li><li>Delete (delete)</li><li>Replace (replace)</li></ul><blockquote><p>Note that the value of <code>records</code> query must be a valid JSON string and should be escaped by <code>encodeURIComponent</code>.</p></blockquote><p>According to different actions, there are different parameter requirements, as shown below:</p><h4 id="add-data-add" tabindex="-1"><a class="header-anchor" href="#add-data-add" aria-hidden="true">#</a> Add Data: add</h4><p>This action will add a corresponding .bit data.</p><blockquote><p>If the same keys exist, the previous keys would not be overwritten. The new and old data will exist at the same time.</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> records <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;profile.twitter&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;dotbit&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;dotbitHQ&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">ttl</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;profile.website&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;https://did.id&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete-data-delete" tabindex="-1"><a class="header-anchor" href="#delete-data-delete" aria-hidden="true">#</a> Delete Data: delete</h4><p>This action will delete the corresponding .bit data.</p><blockquote><p>If there are multiple same keys, then all the same keys will be deleted.</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> records <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;profile.twitter&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;profile.website&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="update-data-replace" tabindex="-1"><a class="header-anchor" href="#update-data-replace" aria-hidden="true">#</a> Update Data: replace</h4><p>This action will replace all the corresponding .bit data.</p><blockquote><p>Because .bit allows more than one key exsited, there is no way to specify which key to change through the URL parameter.</p><p>So if you want to change the key, you need to do the &quot;update&quot; operation by completely replacing it .</p><p>In this case, the new key is used to completely replace all the previous keys. If there are multiple same keys before, they will all be overwritten by the new data.</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> records <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;replace&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;profile.avatar&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;https://data.did.id/favicon.ico&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Therefore, if you want to modify the data for a key, you need to use &quot;replace&quot; operation.</p><h3 id="caveat" tabindex="-1"><a class="header-anchor" href="#caveat" aria-hidden="true">#</a> Caveat</h3><p>Because of the semantic ambiguity of multiple actions, we do not recommend using multiple different <code>action</code> on the same key, as it may result in different results than expected.</p><h2 id="dweb" tabindex="-1"><a class="header-anchor" href="#dweb" aria-hidden="true">#</a> DWeb</h2><p>.bit supports a variety of decentralized storage protocols, currently supporting IPFS, Arweave, Resilio, Skynet, and allows users to quickly access content on decentralized storage through the bit.cc subdomain corresponding to their .bit account.</p><h3 id="dnslink" tabindex="-1"><a class="header-anchor" href="#dnslink" aria-hidden="true">#</a> DNSLink</h3>`,29),q={href:"https://dnslink.io/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://dnslink.io/#tutorial",target:"_blank",rel:"noopener noreferrer"},S=a("code",null,"_dnslink",-1),D=a("code",null,"bestcase.bit",-1),A={href:"https://dnslink.io/#tutorial",target:"_blank",rel:"noopener noreferrer"},I=a("code",null,"libp2p.io",-1),N=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> my-dns-tool <span class="token builtin class-name">set</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--type</span><span class="token operator">=</span>TXT <span class="token punctuation">\\</span>
    <span class="token parameter variable">--ttl</span><span class="token operator">=</span><span class="token number">60</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--domain</span><span class="token operator">=</span>libp2p.io <span class="token punctuation">\\</span>
    <span class="token parameter variable">--name</span><span class="token operator">=</span>_dnslink <span class="token punctuation">\\</span>
    <span class="token parameter variable">--value</span><span class="token operator">=</span><span class="token string">&quot;dnslink=/ipfs/Qmc2o4ZNtbinEmRF9UGouBYTuiHbtCSShMFRbBY5ZiZDmU&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),T=a("code",null,"bestcase.bit",-1),j=a("code",null,"libp2p.io",-1),B={href:"https://data.did.id",target:"_blank",rel:"noopener noreferrer"},F=a("p",null,[a("img",{src:c,alt:"Set IPNS"})],-1),L=a("code",null,"bestcase.bit",-1),U={href:"https://bestcase.bit.cc/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://dnslink.io/",target:"_blank",rel:"noopener noreferrer"};function P(C,E){const e=r("ExternalLinkIcon");return p(),i("div",null,[u,k,h,a("p",null,[a("a",v,[n("data.did.id"),s(e)]),n(" is an elegant data management tool for your .bit accounts.")]),b,a("p",null,[n("With "),a("a",m,[n("data.did.id"),s(e)]),n(" , developers can change users' data with a very simple yet elegant way without having to worry about complicated on-chain operations.")]),a("blockquote",null,[a("p",null,[a("a",y,[n("Click here to see an example \u2192"),s(e)]),n(" Notice: It's not your account.")])]),f,a("p",null,[a("a",g,[n("data.did.id"),s(e)]),n(" will read the "),_,n(" query on URL\u3002")]),w,a("p",null,[n("The .bit account supports setting up IPNS and already supports "),a("a",q,[n("DNSLink"),s(e)]),n(". You can refer to the "),a("a",x,[n("DNSLink tutorial"),s(e)]),n(", add a "),S,n(" resolution record to the DNS of your domain, and then set the IPNS of your .bit account to your domain name. When you access the corresponding bit.cc subdomain, the corresponding IPFS content will be presented.")]),a("p",null,[n("Take the .bit account "),D,n(" as an example, first refer to the "),a("a",A,[n("DNSLink tutorial"),s(e)]),n(" and add the following DNS resolution record to the domain "),I]),N,a("p",null,[n("After adding the DNS resolution record, set the IPNS value of "),T,n(" to "),j,n(" using "),a("a",B,[n("data.did.id"),s(e)]),n(", as follows")]),F,a("p",null,[n("Once set, you can visit the "),L,n(" subdomain "),a("a",U,[n("bestcase.bit.cc"),s(e)]),n(" to see if the settings are in effect.")]),a("p",null,[n("For DNSLink tutorials, usage examples, and FAQs, please see "),a("a",R,[n("dnslink.io"),s(e)]),n(".")])])}var W=o(d,[["render",P],["__file","data.did.id.html.vue"]]);export{W as default};
