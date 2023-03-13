import{_ as o}from"./image-20210721120500021.07bc9548.js";import{_ as r,o as n,c as i,a as e,b as t,d as s,e as c,r as l}from"./app.b5b9c78c.js";const d={},h=c('<h1 id="bit-namespaces" tabindex="-1"><a class="header-anchor" href="#bit-namespaces" aria-hidden="true">#</a> .bit Namespaces</h1><p><img src="'+o+'" alt=".bit Records" style="zoom:50%;">Parsed records are the core of .bit, and the flexibility of records is also the source of .bit&#39;s great scalability. A record is a key-value pair, and .bit supports an infinite number of records. As shown above, different applications will read different parse records to do different jobs. Therefore, it is important to manage the namespace of the key of the record. The namespace usage specification is essentially a protocol that can be followed to enable good collaboration between applications.</p><h2 id="namespaces" tabindex="-1"><a class="header-anchor" href="#namespaces" aria-hidden="true">#</a> Namespaces</h2><p>The key of a record is a hierarchical structure using <code>. </code> separated by a hierarchy, such as <code>address.btc</code>, <code>profile.twitter</code>, <code>custom_key.bitcc_config</code>, etc. Among them, <code>address</code>, <code>profile</code>, and <code>custom_key</code> are called primary namespaces; <code>btc</code>, <code>twitter</code>, and <code>bitcc_config</code> are called secondary namespaces.</p><p>.bit has strict constraints on the use of namespaces at the contract level, and currently provides four first-level namespaces.</p>',5),p=e("p",null,[e("strong",null,"address")],-1),u=e("code",null,"address.btc",-1),_=e("code",null,"address.eth",-1),m={href:"https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,[e("strong",null,"profile")],-1),f=e("code",null,"profile.twitter",-1),g=e("code",null,"profile.facebook",-1),y={href:"https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,[e("strong",null,"dweb")],-1),w=e("code",null,"dweb.ipfs",-1),v=e("code",null,"dweb.resilio",-1),x=e("a",{href:""},"dweb.resilio",-1),T={href:"https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,[e("p",null,[e("strong",null,"custom_key")]),e("p",null,[t("This namespace is not constrained, and developers can create any name and number of sub-namespaces under this space and define their meaning. For example, "),e("code",null,"custom_key.bitcc_config"),t(", "),e("code",null,"custom_key.pgp.master_key"),t(", etc.")])],-1),N={href:"https://github.com/dotbitHQ/cell-data-generator/blob/master/data/record_key_namespace.txt",target:"_blank",rel:"noopener noreferrer"},H=e("h5",{id:"note",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#note","aria-hidden":"true"},"#"),t(" Note")],-1),B=e("p",null,[t("The .bit contract does not verify the legitimacy of the value of the record, the .bit just provides a convention. For example, a user would normally set the value of "),e("code",null,"address.btc"),t(" to a BTC address. However, the application should check if this value is really a legitimate BTC address when using this value.")],-1),Q=e("h2",{id:"addition-of-first-level-namespaces",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#addition-of-first-level-namespaces","aria-hidden":"true"},"#"),t(" Addition of first-level namespaces")],-1),C=e("code",null,"address",-1),I=e("code",null,"profile",-1),V=e("code",null,"dweb",-1),z=e("code",null,"custom_key",-1),E={href:"https://github.com/dotbitHQ/das-contracts/issues",target:"_blank",rel:"noopener noreferrer"};function j(F,L){const a=l("ExternalLinkIcon");return n(),i("div",null,[h,e("ul",null,[e("li",null,[p,e("p",null,[t("This namespace is generally used to store the user's digital assets receipt address, such as "),u,t(", "),_,t(", etc. Also, there is a "),e("a",m,[t("whitelist"),s(a)]),t(" inside the contract that has built-in mainstream digital assets symbols as legal key.")])]),e("li",null,[b,e("p",null,[t("This namespace is generally used to store users' personal information, such as "),f,t(", "),g,t(", etc. Also, there is a "),e("a",y,[t("whitelist"),s(a)]),t(" inside the contract with built-in mainstream social network names as legitimate key.")])]),e("li",null,[k,e("p",null,[t("This namespace is generally used to store decentralized network-related content, such as "),w,t(", "),v,t(", etc. Also, there is a "),x,t(" inside the contract. Also, there is a "),e("a",T,[t("whitelist"),s(a)]),t(" inside the contract with the mainstream decentralized storage protocol built-in name as a legal key.")])]),A]),e("blockquote",null,[e("p",null,[e("a",N,[t("** See All .bit Namespaces**"),s(a)])])]),H,B,Q,e("p",null,[t("Currently, .bit only provides four level 1 namespaces "),C,t(", "),I,t(", "),V,t(", "),z,t(", but this is not the final result. The .bit team will gradually add more level 1 namespaces. If you think some namespaces should be added to allow better collaboration between applications. You can report in Github "),e("a",E,[t("Issues"),s(a)]),t(".")])])}var G=r(d,[["render",j],["__file","records-key-namespace.html.vue"]]);export{G as default};
