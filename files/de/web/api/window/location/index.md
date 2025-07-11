---
title: "Window: location-Eigenschaft"
short-title: location
slug: Web/API/Window/location
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef}}

Die **`Window.location`**-Eigenschaft, die nur lesend zur Verfügung steht, gibt ein [`Location`](/de/docs/Web/API/Location)-Objekt mit Informationen über den aktuellen Ort des Dokuments zurück.

Obwohl `Window.location` ein _nur lesbares_ `Location`-Objekt ist, können Sie ihm auch einen String zuweisen.
Das bedeutet, dass Sie in den meisten Fällen mit `location` arbeiten können, als wäre es ein String:
`location = 'http://www.example.com'` ist ein Synonym für `location.href = 'http://www.example.com'`.

Siehe [`Location`](/de/docs/Web/API/Location) für alle verfügbaren Eigenschaften.

## Wert

Ein [`Location`](/de/docs/Web/API/Location)-Objekt.

## Beispiele

### Einfaches Beispiel

```js
alert(location); // alerts "https://developer.mozilla.org/en-US/docs/Web/API/Window/location"
```

### Beispiel 1: Navigation zu einer neuen Seite

Jedes Mal, wenn dem Location-Objekt ein neuer Wert zugewiesen wird, wird ein Dokument mit der URL geladen, als wäre `location.assign()` mit der geänderten URL aufgerufen worden.

Beachten Sie, dass [navigationsbezogene Sandbox-Flags](https://html.spec.whatwg.org/multipage/browsers.html#allowed-to-navigate) dazu führen können, dass eine Ausnahme ausgelöst wird und die Navigation fehlschlägt.

```js
location.assign("https://www.mozilla.org"); // or
location = "https://www.mozilla.org";
```

### Beispiel 2: Neuladen der aktuellen Seite

```js
location.reload();
```

### Beispiel 3

Betrachten Sie das folgende Beispiel, das die Seite neu lädt, indem es die Methode [`replace()`](/de/docs/Web/API/Location/replace) verwendet, um den Wert von `location.pathname` in den Hash einzufügen:

```js
function reloadPageWithHash() {
  location.replace(`https://example.com/#${location.pathname}`);
}
```

### Beispiel 4: Anzeigen der Eigenschaften der aktuellen URL in einem Benachrichtigungsdialog

```js
function showLoc() {
  const logLines = [
    "Property (Typeof): Value",
    `location (${typeof location}): ${location}`,
  ];
  for (const prop in location) {
    logLines.push(
      `${prop} (${typeof location[prop]}): ${location[prop] || "n/a"}`,
    );
  }
  alert(logLines.join("\n"));
}

// in html: <button onclick="showLoc();">Show location properties</button>
```

### Beispiel 5: Senden eines Datenstrings an den Server durch Ändern der `search`-Eigenschaft

```js
function sendData(data) {
  location.search = data;
}

// in html: <button onclick="sendData('Some data');">Send data</button>
```

Die aktuelle URL mit "?Some%20data" angehängt wird an den Server gesendet (wenn keine Action vom Server erfolgt, wird das aktuelle Dokument mit dem geänderten Suchstring neu geladen).

### Beispiel 6: Verwenden von Lesezeichen ohne die `hash`-Eigenschaft zu ändern

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices dolor
  ac dolor imperdiet ullamcorper. Suspendisse quam libero, luctus auctor mollis
  sed, malesuada condimentum magna. Quisque in ante tellus, in placerat est.
  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
  turpis egestas. Donec a mi magna, quis mattis dolor. Etiam sit amet ligula
  quis urna auctor imperdiet nec faucibus ante. Mauris vel consectetur dolor.
  Nunc eget elit eget velit pulvinar fringilla consectetur aliquam purus.
  Curabitur convallis, justo posuere porta egestas, velit erat ornare tortor,
  non viverra justo diam eget arcu. Phasellus adipiscing fermentum nibh ac
  commodo. Nam turpis nunc, suscipit a hendrerit vitae, volutpat non ipsum.
</p>
<p>
  Duis lobortis sapien quis nisl luctus porttitor. In tempor semper libero, eu
  tincidunt dolor eleifend sit amet. Ut nec velit in dolor tincidunt rhoncus non
  diam. Morbi auctor ornare orci, non euismod felis gravida nec. Curabitur
  elementum nisi a eros rutrum nec blandit diam placerat. Aenean tincidunt risus
  ut nisi consectetur cursus. Ut vitae quam elit. Donec dignissim est in quam
  tempor consequat. Aliquam diam non felis convallis suscipit. Nulla facilisi.
  Donec lacus risus, dignissim et fringilla et, egestas vel eros. Duis malesuada
  accumsan dui, at fringilla mauris bibendum quis. Cras adipiscing ultricies
  fermentum. Praesent bibendum condimentum feugiat.
</p>
<p id="myBookmark1">
  [&nbsp;<span class="intLink">Go to bookmark #2</span>&nbsp;]
</p>
<p>
  Vivamus blandit massa ut metus mattis in fringilla lectus imperdiet. Proin ac
  ante a felis ornare vehicula. Fusce pellentesque lacus vitae eros convallis ut
  mollis magna pellentesque. Pellentesque placerat enim at lacus ultricies vitae
  facilisis nisi fringilla. In tincidunt tincidunt tincidunt. Nulla vitae tempor
  nisl. Etiam congue, elit vitae egestas mollis, ipsum nisi malesuada turpis, a
  volutpat arcu arcu id risus.
</p>
<p>
  Nam faucibus, ligula eu fringilla pulvinar, lectus tellus iaculis nunc, vitae
  scelerisque metus leo non metus. Proin mattis lobortis lobortis. Quisque
  accumsan faucibus erat, vel varius tortor ultricies ac. Lorem ipsum dolor sit
  amet, consectetur adipiscing elit. Sed nec libero nunc. Nullam tortor nunc,
  elementum a consectetur et, ultrices eu orci. Lorem ipsum dolor sit amet,
  consectetur adipiscing elit. Pellentesque a nisl eu sem vehicula egestas.
</p>
<p>
  Aenean viverra varius mauris, sed elementum lacus interdum non. Phasellus sit
  amet lectus vitae eros egestas pellentesque fermentum eget magna. Quisque
  mauris nisl, gravida vitae placerat et, condimentum id metus. Nulla eu est
  dictum dolor pulvinar volutpat. Pellentesque vitae sollicitudin nunc. Donec
  neque magna, lobortis id egestas nec, sodales quis lectus. Fusce cursus
  sollicitudin porta. Suspendisse ut tortor in mauris tincidunt rhoncus.
  Maecenas tincidunt fermentum facilisis. Pellentesque habitant morbi tristique
  senectus et netus et malesuada fames ac turpis egestas.
</p>
<p>
  Suspendisse turpis nisl, consectetur in lacinia ut, ornare vel mi. Lorem ipsum
  dolor sit amet, consectetur adipiscing elit. Proin non lectus eu turpis
  vulputate cursus. Mauris interdum tincidunt erat id pharetra. Nullam in libero
  elit, sed consequat lectus. Morbi odio nisi, porta vitae molestie ut, gravida
  ut nunc. Ut non est dui, id ullamcorper orci. Praesent vel elementum felis.
  Maecenas ornare, dui quis auctor hendrerit, turpis sem ullamcorper odio, in
  auctor magna metus quis leo. Morbi at odio ante.
</p>
<p>
  Curabitur est ipsum, porta ac viverra faucibus, eleifend sed eros. In sit amet
  vehicula tortor. Vestibulum viverra pellentesque erat a elementum. Integer
  commodo ultricies lorem, eget tincidunt risus viverra et. In enim turpis,
  porttitor ac ornare et, suscipit sit amet nisl. Vestibulum ante ipsum primis
  in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque vel
  ultrices nibh. Sed commodo aliquam aliquam. Nulla euismod, odio ut eleifend
  mollis, nisi dui gravida nibh, vitae laoreet turpis purus id ipsum. Donec
  convallis, velit non scelerisque bibendum, diam nulla auctor nunc, vel dictum
  risus ipsum sit amet est. Praesent ut nibh sit amet nibh congue pulvinar.
  Suspendisse dictum porttitor tempor.
</p>
<p>
  Vestibulum dignissim erat vitae lectus auctor ac bibendum eros semper. Integer
  aliquet, leo non ornare faucibus, risus arcu tristique dolor, a aliquet massa
  mauris quis arcu. In porttitor, lectus ac semper egestas, ligula magna laoreet
  libero, eu commodo mauris odio id ante. In hac habitasse platea dictumst. In
  pretium erat diam, nec consequat eros. Praesent augue mi, consequat sed
  porttitor at, volutpat vitae eros. Sed pretium pharetra dapibus. Donec auctor
  interdum erat, lacinia molestie nibh commodo ut. Maecenas vestibulum vulputate
  felis, ut ullamcorper arcu faucibus in. Curabitur id arcu est. In semper
  mollis lorem at pellentesque. Sed lectus nisl, vestibulum id scelerisque eu,
  feugiat et tortor. Pellentesque porttitor facilisis ultricies.
</p>
<p id="myBookmark2">
  [&nbsp;<span class="intLink">Go to bookmark #1</span>
  |
  <span class="intLink">Go to bookmark #1 without using location.hash</span>
  |
  <span class="intLink">Go to bookmark #3</span>&nbsp;]
</p>
<p>
  Phasellus tempus fringilla nunc, eget sagittis orci molestie vel. Nulla
  sollicitudin diam non quam iaculis ac porta justo venenatis. Quisque tellus
  urna, molestie vitae egestas sit amet, suscipit sed sem. Quisque nec lorem eu
  velit faucibus tristique ut ut dolor. Cras eu tortor ut libero placerat
  venenatis ut ut massa. Sed quis libero augue, et consequat libero. Morbi
  rutrum augue sed turpis elementum sed luctus nisl molestie. Aenean vitae purus
  risus, a semper nisl. Pellentesque malesuada, est id sagittis consequat,
  libero mauris tincidunt tellus, eu sagittis arcu purus rutrum eros. Quisque
  eget eleifend mi. Duis pharetra mi ac eros mattis lacinia rutrum ipsum varius.
</p>
<p>
  Fusce cursus pulvinar aliquam. Duis justo enim, ornare vitae elementum sed,
  porta a quam. Aliquam eu enim eu libero mollis tempus. Morbi ornare aliquam
  posuere. Proin faucibus luctus libero, sed ultrices lorem sagittis et.
  Vestibulum malesuada, ante nec molestie vehicula, quam diam mollis ipsum,
  rhoncus posuere mauris lectus in eros. Nullam feugiat ultrices augue, ac
  sodales sem mollis in.
</p>
<p id="myBookmark3"><em>Here is the bookmark #3</em></p>
<p>
  Proin vitae sem non lorem pellentesque molestie. Nam tempus massa et turpis
  placerat sit amet sollicitudin orci sodales. Pellentesque enim enim, sagittis
  a lobortis ut, tempus sed arcu. Aliquam augue turpis, varius vel bibendum ut,
  aliquam at diam. Nam lobortis, dui eu hendrerit pellentesque, sem neque
  porttitor erat, non dapibus velit lectus in metus. Vestibulum sit amet felis
  enim. In quis est vitae nunc malesuada consequat nec nec sapien. Suspendisse
  aliquam massa placerat dui lacinia luctus sed vitae risus. Fusce tempus, neque
  id ultrices volutpat, mi urna auctor arcu, viverra semper libero sem vel enim.
  Mauris dictum, elit non placerat malesuada, libero elit euismod nibh, nec
  posuere massa arcu eu risus. Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Integer urna velit, dapibus eget varius feugiat, pellentesque
  sit amet ligula. Maecenas nulla nisl, facilisis eu egestas scelerisque, mollis
  eget metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
  posuere cubilia Curae; Morbi sed congue mi.
</p>
<p>
  Fusce metus velit, pharetra at vestibulum nec, facilisis porttitor mi.
  Curabitur ligula sapien, fermentum vel porttitor id, rutrum sit amet magna.
  Sed sit amet sollicitudin turpis. Aenean luctus rhoncus dolor, et pulvinar
  ante egestas et. Donec ac massa orci, quis dapibus augue. Vivamus consectetur
  auctor pellentesque. Praesent vestibulum tincidunt ante sed consectetur. Cum
  sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
  mus. Fusce purus metus, imperdiet vitae iaculis convallis, bibendum vitae
  turpis.
</p>
<p>
  Fusce aliquet molestie dolor, in ornare dui sodales nec. In molestie
  sollicitudin felis a porta. Mauris nec orci sit amet orci blandit tristique
  congue nec nunc. Praesent et tellus sollicitudin mauris accumsan fringilla.
  Morbi sodales, justo eu sollicitudin lacinia, lectus sapien ullamcorper eros,
  quis molestie urna elit bibendum risus. Proin eget tincidunt quam. Nam luctus
  commodo mauris, eu posuere nunc luctus non. Nulla facilisi. Vivamus eget leo
  rhoncus quam accumsan fringilla. Aliquam sit amet lorem est. Nullam vel tellus
  nibh, id imperdiet orci. Integer egestas leo eu turpis blandit scelerisque.
</p>
<p>
  Etiam in blandit tellus. Integer sed varius quam. Vestibulum dapibus mi
  gravida arcu viverra blandit. Praesent tristique augue id sem adipiscing
  pellentesque. Sed sollicitudin, leo sed interdum elementum, nisi ante
  condimentum leo, eget ornare libero diam semper quam. Vivamus augue urna,
  porta eget ultrices et, dapibus ut ligula. Ut laoreet consequat faucibus.
  Praesent at lectus ut lectus malesuada mollis. Nam interdum adipiscing eros,
  nec sodales mi porta nec. Proin et quam vitae sem interdum aliquet. Proin vel
  odio at lacus vehicula aliquet.
</p>
<p>
  Etiam placerat dui ut sem ornare vel vestibulum augue mattis. Sed semper
  malesuada mi, eu bibendum lacus lobortis nec. Etiam fringilla elementum risus,
  eget consequat urna laoreet nec. Etiam mollis quam non sem convallis vel
  consectetur lectus ullamcorper. Aenean mattis lacus quis ligula mattis eget
  vestibulum diam hendrerit. In non placerat mauris. Praesent faucibus nunc quis
  eros sagittis viverra. In hac habitasse platea dictumst. Suspendisse eget nisl
  erat, ac molestie massa. Praesent mollis vestibulum tincidunt. Fusce suscipit
  laoreet malesuada. Aliquam erat volutpat. Aliquam dictum elementum rhoncus.
  Praesent in est massa, pulvinar sodales nunc. Pellentesque gravida euismod mi
  ac convallis.
</p>
<p>
  Mauris vel odio vel nulla facilisis lacinia. Aliquam ultrices est at leo
  blandit tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et
  ultrices posuere cubilia Curae; Suspendisse porttitor adipiscing facilisis.
  Duis cursus quam iaculis augue interdum porttitor. Vestibulum ante ipsum
  primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis
  vulputate magna ac metus pretium condimentum. In tempus, est eget vestibulum
  blandit, velit massa dignissim nisl, ut scelerisque lorem neque vel velit.
  Maecenas fermentum commodo viverra. Curabitur a nibh non velit aliquam cursus.
  Integer semper condimentum tortor a pellentesque. Pellentesque semper, nisl id
  porttitor vehicula, sem dui feugiat lacus, vitae consequat augue urna vel
  odio.
</p>
<p>
  Vestibulum id neque nec turpis iaculis pulvinar et a massa. Vestibulum sed
  nibh vitae arcu eleifend egestas. Mauris fermentum ultrices blandit.
  Suspendisse vitae lorem libero. Aenean et pellentesque tellus. Morbi quis
  neque orci, eu dignissim dui. Fusce sollicitudin mauris ac arcu vestibulum
  imperdiet. Proin ultricies nisl sit amet enim imperdiet eu ornare dui tempus.
  Maecenas lobortis nisi a tortor vestibulum vel eleifend tellus vestibulum.
  Donec metus sapien, hendrerit a fermentum id, dictum quis libero.
</p>
<p>
  Pellentesque a lorem nulla, in tempor justo. Duis odio nisl, dignissim sed
  consequat sit amet, hendrerit ac neque. Nunc ac augue nec massa tempor
  rhoncus. Nam feugiat, tellus a varius euismod, justo nisl faucibus velit, ut
  vulputate justo massa eu nibh. Sed bibendum urna quis magna facilisis in
  accumsan dolor malesuada. Morbi sit amet nunc risus, in faucibus sem. Nullam
  sollicitudin magna sed sem mollis id commodo libero condimentum. Duis eu massa
  et lacus semper molestie ut adipiscing sem.
</p>
<p>
  Sed id nulla mi, eget suscipit eros. Aliquam tempus molestie rutrum. In quis
  varius elit. Nullam dignissim neque nec velit vulputate porttitor. Mauris ac
  ligula sit amet elit fermentum rhoncus. In tellus urna, pulvinar quis
  condimentum ut, porta nec justo. In hac habitasse platea dictumst. Proin
  volutpat elit id quam molestie ac commodo lacus sagittis. Quisque placerat,
  augue tempor placerat pulvinar, nisi nisi venenatis urna, eget convallis eros
  velit quis magna. Suspendisse volutpat iaculis quam, ut tristique lacus luctus
  quis.
</p>
<p>
  Nullam commodo suscipit lacus non aliquet. Phasellus ac nisl lorem, sed
  facilisis ligula. Nam cursus lobortis placerat. Sed dui nisi, elementum eu
  sodales ac, placerat sit amet mauris. Pellentesque dapibus tellus ut ipsum
  aliquam eu auctor dui vehicula. Quisque ultrices laoreet erat, at ultrices
  tortor sodales non. Sed venenatis luctus magna, ultricies ultricies nunc
  fringilla eget. Praesent scelerisque urna vitae nibh tristique varius
  consequat neque luctus. Integer ornare, erat a porta tempus, velit justo
  fermentum elit, a fermentum metus nisi eu ipsum. Vivamus eget augue vel dui
  viverra adipiscing congue ut massa. Praesent vitae eros erat, pulvinar laoreet
  magna. Maecenas vestibulum mollis nunc in posuere. Pellentesque sit amet metus
  a turpis lobortis tempor eu vel tortor. Cras sodales eleifend interdum.
</p>
```

```css
span.intLink {
  cursor: pointer;
  color: #0000ff;
  text-decoration: underline;
}
```

```js
function showNode(node) {
  document.documentElement.scrollTop = node.offsetTop;
  document.documentElement.scrollLeft = node.offsetLeft;
}

function showBookmark(bookmark, useHash) {
  if (arguments.length === 1 || useHash) {
    location.hash = bookmark;
    return;
  }
  const bookmarkElement = document.querySelector(bookmark);
  if (bookmarkElement) {
    showNode(bookmarkElement);
  }
}

document
  .querySelector("#myBookmark1 .intLink")
  .addEventListener("click", () => {
    showBookmark("#myBookmark2");
  });
document
  .querySelector("#myBookmark2 .intLink")
  .addEventListener("click", () => {
    showBookmark("#myBookmark1");
  });
document
  .querySelector("#myBookmark1 .intLink:nth-child(2)")
  .addEventListener("click", () => {
    showBookmark("#myBookmark1", false);
  });
document
  .querySelector("#myBookmark2 .intLink:nth-child(3)")
  .addEventListener("click", () => {
    showBookmark("#myBookmark3");
  });
```

… dasselbe, aber mit einem animierten Bildlauf der Seite:

```js
const showBookmark = (() => {
  let _useHash;
  let _scrollX;
  let _scrollY;
  let _nodeX;
  let _nodeY;
  let _itFrame;
  let _scrollId = -1;
  let _bookMark;

  // duration: the duration in milliseconds of each frame
  // frames: number of frames for each scroll
  let duration = 200;
  let frames = 10;

  function _next() {
    if (_itFrame > frames) {
      clearInterval(_scrollId);
      _scrollId = -1;
      return;
    }
    _isBot = true;
    document.documentElement.scrollTop = Math.round(
      _scrollY + ((_nodeY - _scrollY) * _itFrame) / frames,
    );
    document.documentElement.scrollLeft = Math.round(
      _scrollX + ((_nodeX - _scrollX) * _itFrame) / frames,
    );
    if (_useHash && _itFrame === frames) {
      location.hash = _bookMark;
    }
    _itFrame++;
  }

  function _chkOwner() {
    if (_isBot) {
      _isBot = false;
      return;
    }
    if (_scrollId > -1) {
      clearInterval(_scrollId);
      _scrollId = -1;
    }
  }

  window.addEventListener("scroll", _chkOwner, false);

  return (bookmark, useHash) => {
    const node = document.querySelector(bookmark);
    _scrollY = document.documentElement.scrollTop;
    _scrollX = document.documentElement.scrollLeft;
    _bookMark = bookmark;
    _useHash = useHash === true;
    _nodeX = node.offsetLeft;
    _nodeY = node.offsetTop;
    _itFrame = 1;
    if (_scrollId === -1) {
      _scrollId = setInterval(_next, Math.round(duration / frames));
    }
  };
})();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle des zurückgegebenen Wertes, [`Location`](/de/docs/Web/API/Location)
- Ähnliche Informationen, aber dem Dokument zugeordnet,
  [`Document.location`](/de/docs/Web/API/Document/location)
- [Manipulation des Browserverlaufs](/de/docs/Web/API/History_API)
- [`hashchange`](/de/docs/Web/API/Window/hashchange_event)
