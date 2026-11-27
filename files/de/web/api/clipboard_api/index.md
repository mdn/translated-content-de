---
title: Clipboard API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: 9274067a31863bf4ce49bd8dc3a2623e1f3f7590
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Clipboard API** ermöglicht es, auf Befehle für die Zwischenablage (Ausschneiden, Kopieren und Einfügen) zu reagieren sowie die Systemzwischenablage asynchron zu lesen und zu beschreiben.

> [!NOTE]
> Verwenden Sie für den Zugriff auf die Zwischenablage vorzugsweise diese API statt der veralteten Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand).

> [!NOTE]
> Diese API ist in [Web Workern](/de/docs/Web/API/Web_Workers_API) _nicht verfügbar_ (sie wird nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) bereitgestellt).

## Konzepte und Verwendung

Die _Systemzwischenablage_ ist ein Datenpuffer des Betriebssystems, auf dem der Browser ausgeführt wird. Sie dient der kurzfristigen Speicherung von Daten und/oder deren Übertragung zwischen Dokumenten oder Anwendungen.
In der Regel ist sie als anonymer, temporärer [Datenpuffer](https://en.wikipedia.org/wiki/Data_buffer) implementiert, der manchmal auch _Einfügepuffer_ genannt wird und auf den die meisten oder alle Programme der Umgebung über definierte Programmierschnittstellen zugreifen können.

Mit der Clipboard API können Benutzer in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) Text und andere Daten asynchron aus der Systemzwischenablage lesen und in sie schreiben, sofern sie die unter [Sicherheitsaspekte](#sicherheitsaspekte) beschriebenen Voraussetzungen erfüllen.

Der Zugriff auf die Systemzwischenablage erfolgt über das globale [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard).

### Text und mehrere Repräsentationen

Die Schnittstelle [`Clipboard`](/de/docs/Web/API/Clipboard) bietet zwei Möglichkeiten, mit Daten in der Zwischenablage zu arbeiten:

- Mit [`readText()`](/de/docs/Web/API/Clipboard/readText) und [`writeText()`](/de/docs/Web/API/Clipboard/writeText) können Sie Text aus der Zwischenablage lesen und in sie schreiben.
- Mit [`read()`](/de/docs/Web/API/Clipboard/read) und [`write()`](/de/docs/Web/API/Clipboard/write) können Sie Arrays von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekten aus der Systemzwischenablage lesen und in sie schreiben.
  Jedes `ClipboardItem` kann mehrere Repräsentationen desselben Inhalts enthalten, die über den jeweiligen [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) zugeordnet werden.
  Dadurch lassen sich Daten in mehreren Formaten kopieren, etwa als HTML-Tabelle, als durch Tabulatoren getrennter Klartext oder als Bild. Die Anwendung, in die eingefügt wird, kann dann die am besten geeignete Repräsentation auswählen, die sie versteht.
  Eine Anwendung, die HTML nicht darstellen kann, könnte beispielsweise auf eine Textversion zurückgreifen.

  Beachten Sie, dass manche Browser oder Betriebssysteme nur das Schreiben eines einzigen `ClipboardItem` zulassen und bei dem Versuch, mehrere zu schreiben, einen Fehler ausgeben (weitere Informationen finden Sie unter [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write#browser_compatibility)).

Browser müssen bei `read()` und `write()` die Repräsentationen `text/plain`, `text/html` und `image/png` unterstützen.
Andere Typen, etwa `image/svg+xml` und die im nächsten Abschnitt beschriebenen benutzerdefinierten Formate, sind optional.
Mit [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static) können Sie prüfen, ob ein bestimmtes Format unterstützt wird (ein Beispiel finden Sie weiter unten unter [Lesen und Schreiben mehrerer Repräsentationen](#lesen_und_schreiben_mehrerer_repräsentationen)).

### Benutzerdefinierte Zwischenablageformate

Ein `ClipboardItem` kann auch ein benutzerdefiniertes Format enthalten: einen [Medientyp („MIME-Typ“)](/de/docs/Web/HTTP/Guides/MIME_types), dem `"web "` vorangestellt ist (das Wort „web“ gefolgt von einem Leerzeichen).
So kann eine Webanwendung ein eigenes Zwischenablageformat für Daten ohne standardisierte Repräsentation definieren, ohne mit nativen Zwischenablageformaten des Betriebssystems oder benutzerdefinierten Formaten anderer Websites in Konflikt zu geraten.

Benutzerdefinierte Formate sind nützlich, weil sie Informationen erhalten können, die in einer standardisierten Repräsentation verloren gingen – beispielsweise strukturierte Metadaten zusätzlich zu einer visuellen oder textuellen Version desselben Inhalts.
Eine Anwendung, die ihr eigenes benutzerdefiniertes Format erkennt, kann daraus kopierte Daten ohne Verlust einfügen. Andere Anwendungen erhalten weiterhin die standardisierten Repräsentationen, die Sie zusätzlich bereitstellen.
Ein wichtiger Anwendungsfall dieser Funktion ist das Kopieren und Einfügen innerhalb Ihrer eigenen Anwendung, sei es auf derselben Seite oder über verschiedene Tabs oder Browser hinweg.

Die Unterstützung für benutzerdefinierte Formate unterscheidet sich derzeit je nach Browser. Prüfen Sie daher die [Browser-Kompatibilität](#browser-kompatibilität) und [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static), bevor Sie sich auf ein solches Format verlassen.
Ein vollständiges Beispiel finden Sie weiter unten unter [Lesen und Schreiben benutzerdefinierter Formate](#lesen_und_schreiben_benutzerdefinierter_formate).

### Zwischenablage und Ausschneiden-, Kopieren- und Einfügen-Ereignisse

Durch [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Vorgänge, die die Zwischenablage verändern, werden Ereignisse ausgelöst.
Die Ereignisse haben eine Standardaktion: Beispielsweise kopiert die `copy`-Aktion standardmäßig die aktuelle Auswahl in die Systemzwischenablage.
Die Standardaktion kann durch einen Event-Handler überschrieben werden. Weitere Informationen finden Sie bei den jeweiligen Ereignissen.

Außerdem wird bei jeder Änderung des Inhalts der Systemzwischenablage direkt auf dem [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt ein [`clipboardchange`](/de/docs/Web/API/Clipboard/clipboardchange_event)-Ereignis ausgelöst. Damit können Anwendungen über Änderungen an der Systemzwischenablage benachrichtigt werden, beispielsweise wenn sie eine eigene Zwischenablage synchron halten müssen.

Ein Beispiel, das die `copy`- und `paste`-Ereignisse überschreibt und auf `cut` und `clipboardchange` lauscht, finden Sie weiter unten unter [Überschreiben von Ausschneiden-, Kopieren- und Einfügen-Ereignissen](#overriding_cut_copy_and_paste_events).

## Schnittstellen

- [`Clipboard`](/de/docs/Web/API/Clipboard) {{securecontext_inline}}
  - : Stellt eine Schnittstelle zum Lesen und Schreiben von Text und Daten aus der bzw. in die Systemzwischenablage bereit.
    Die Spezifikation bezeichnet dies als „Async Clipboard API“.
- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
  - : Repräsentiert Ereignisse, die bei jeder Änderung des Inhalts der Systemzwischenablage ausgelöst werden.
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
  - : Repräsentiert Ereignisse, die Informationen zu Änderungen an der Zwischenablage bereitstellen, nämlich [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignisse.
    Die Spezifikation bezeichnet dies als „Clipboard Event API“.
- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) {{securecontext_inline}}
  - : Repräsentiert einen einzelnen Zwischenablageeintrag, der eine oder mehrere Repräsentationen derselben Daten mit unterschiedlichen Medientypen enthalten kann (etwa eine HTML- und eine Textversion).

### Erweiterungen anderer Schnittstellen

Die Clipboard API erweitert die folgenden APIs um die aufgeführten Funktionen.

- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- `Element`-Ereignis [`copy`](/de/docs/Web/API/Element/copy_event)
  - : Ein Ereignis, das ausgelöst wird, wenn der Benutzer einen Kopiervorgang startet.
- `Element`-Ereignis [`cut`](/de/docs/Web/API/Element/cut_event)
  - : Ein Ereignis, das ausgelöst wird, wenn der Benutzer einen Ausschneidevorgang startet.
- `Element`-Ereignis [`paste`](/de/docs/Web/API/Element/paste_event)
  - : Ein Ereignis, das ausgelöst wird, wenn der Benutzer einen Einfügevorgang startet.

## Sicherheitsaspekte

Die Clipboard API ermöglicht es Benutzern, in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) Text und andere Daten programmgesteuert aus der Systemzwischenablage zu lesen und in sie zu schreiben.

Beim Lesen aus der Zwischenablage verlangt die Spezifikation, dass der Benutzer kürzlich mit der Seite interagiert hat ([vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)) und dass der Aufruf infolge einer Interaktion mit einem „Einfügeelement“ des Browsers oder Betriebssystems erfolgt (etwa durch Auswahl von „Einfügen“ in einem nativen Kontextmenü). In der Praxis lassen Browser häufig Lesevorgänge zu, die diese Anforderungen nicht erfüllen, stellen dafür aber andere Anforderungen (etwa eine Berechtigung oder eine Bestätigung für jeden Vorgang).
Für das Schreiben in die Zwischenablage setzt die Spezifikation voraus, dass der Seite die Berechtigung `clipboard-write` der [Permissions API](/de/docs/Web/API/Permissions_API) erteilt wurde. Der Browser kann zusätzlich eine [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) verlangen.
Browser können die Verwendung der Methoden für den Zugriff auf die Zwischenablage weiter einschränken.

Das Ereignis [`clipboardchange`](/de/docs/Web/API/Clipboard/clipboardchange_event) wird nur bei einer {{Glossary("Sticky_activation", "dauerhaften Aktivierung")}} oder nach Erteilung der Berechtigung `clipboard-read` ausgelöst.

Die Browserimplementierungen weichen von der Spezifikation ab.
Die Unterschiede sind im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) erfasst; der aktuelle Stand ist nachfolgend zusammengefasst:

Chromium-Browser:

- Wenn ein Lesevorgang gemäß der Spezifikation nicht zulässig ist und das Dokument den Fokus hat, wird die Berechtigung `clipboard-read` angefordert. Der Vorgang gelingt, wenn die Berechtigung erteilt wird (entweder weil der Benutzer die Anfrage bestätigt oder weil die Berechtigung bereits erteilt wurde).
- Für das Schreiben ist entweder die Berechtigung `clipboard-write` oder eine vorübergehende Aktivierung erforderlich.
  Eine erteilte Berechtigung bleibt bestehen; eine weitere vorübergehende Aktivierung ist dann nicht erforderlich.
- Die HTTP-[Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Berechtigungen {{httpheader("Permissions-Policy/clipboard-read", "clipboard-read")}} und {{httpheader("Permissions-Policy/clipboard-write", "clipboard-write")}} müssen für {{HTMLElement("iframe")}}-Elemente erteilt sein, die auf die Zwischenablage zugreifen.

Firefox und Safari:

- Wenn ein Lesevorgang gemäß der Spezifikation nicht zulässig ist, aber eine vorübergehende Benutzeraktivierung vorliegt, erscheint eine Benutzerabfrage in Form eines kurzzeitig eingeblendeten Kontextmenüs mit der einzigen Option „Einfügen“ (die nach einer Sekunde aktiviert wird). Der Vorgang gelingt, wenn der Benutzer diese Option auswählt.
- Für das Schreiben ist eine vorübergehende Aktivierung erforderlich.
- Die Einfügeabfrage wird beim Lesen von Zwischenablageinhalten desselben Ursprungs unterdrückt, nicht jedoch bei Inhalten anderer Ursprünge.
- Die Berechtigungen `clipboard-read` und `clipboard-write` werden von Firefox und Safari nicht unterstützt; eine Unterstützung ist auch nicht geplant.

Firefox-[Web-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Erweiterungen mit der Web-Erweiterungsberechtigung [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) können die Zwischenablage lesen. Mit dieser Berechtigung benötigt die Erweiterung weder eine vorübergehende Aktivierung noch die Einfügeabfrage. Ab Firefox 147 ist das Lesen auch ohne diese Berechtigung in einem sicheren Kontext und mit vorübergehender Aktivierung möglich, nachdem der Benutzer in einem kurzzeitig eingeblendeten Kontextmenü auf die Einfügeabfrage geklickt hat.
- Das Schreiben ist in einem sicheren Kontext und mit vorübergehender Aktivierung möglich. Mit der Web-Erweiterungsberechtigung [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) ist jedoch keine vorübergehende Aktivierung erforderlich.

## Beispiele

### Lesen und Schreiben von Text

Dieses Beispiel kopiert mit [`writeText()`](/de/docs/Web/API/Clipboard/writeText) eine Textzeile und liest sie mit [`readText()`](/de/docs/Web/API/Clipboard/readText) wieder aus.

#### HTML

Das HTML definiert ein {{htmlelement("p")}}-Element mit dem zu kopierenden Quelltext, {{htmlelement("button")}}-Elemente zum Kopieren und Einfügen des Textes sowie ein Element, in das der Text eingefügt wird.

```html
<p id="source_text">The quick brown fox jumps over the lazy dog.</p>
<button id="copy_text" type="button">Copy</button>
<button id="paste_text" type="button">Paste</button>
<p id="target_text"></p>
```

```css hidden
#target_text {
  min-height: 1.2em;
  border: 1px solid black;
  padding: 0.5rem;
}
```

#### JavaScript

Der folgende Code registriert Klick-Event-Handler für die Schaltflächen, die den Text lesen und schreiben.

```js
const sourceText = document.querySelector("#source_text");
const targetText = document.querySelector("#target_text");

document.querySelector("#copy_text").addEventListener("click", async () => {
  try {
    // Write the text to the clipboard
    await navigator.clipboard.writeText(sourceText.textContent);
    targetText.textContent = "Copied.";
  } catch (error) {
    targetText.textContent = `Copy failed: ${error.message}`;
  }
});

document.querySelector("#paste_text").addEventListener("click", async () => {
  try {
    // Read the text from the clipboard and write it to #target_text
    targetText.textContent = await navigator.clipboard.readText();
  } catch (error) {
    targetText.textContent = `Paste failed: ${error.message}`;
  }
});
```

#### Ergebnis

Klicken Sie auf „Kopieren“ und anschließend auf „Einfügen“, um den Text wieder auszulesen.

{{EmbedLiveSample("Reading and writing text", "100%", "150", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> Erteilen Sie gegebenenfalls die Berechtigung zum Kopieren und Einfügen.

### Lesen und Schreiben mehrerer Repräsentationen

Dieses Beispiel erstellt ein einzelnes [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) mit zwei Repräsentationen desselben Inhalts: `text/html` und `text/plain`.
Anschließend liest es die Zwischenablage aus und listet jede gefundene Repräsentation auf.

#### HTML

```html
<div id="source_multi">
  <p><strong>Bold</strong> and <em>italic</em> text.</p>
</div>
<button id="copy_multi" type="button">Copy (HTML + plain text)</button>
<button id="paste_multi" type="button">Paste</button>
<pre id="target_multi"></pre>
```

```css hidden
#source_multi {
  border: 1px solid black;
  padding: 0.5rem;
  width: fit-content;
}

#target_multi {
  min-height: 3em;
  border: 1px solid black;
  padding: 0.5rem;
  white-space: pre-wrap;
}
```

#### JavaScript

Wie im vorherigen Beispiel erstellen wir Event-Handler, um das Quellelement zu kopieren und in das Zielelement einzufügen.

Der Code zum Kopieren der Daten ist unten dargestellt.
Beachten Sie, dass der Code den Konstruktor `ClipboardItem()` mit zwei Repräsentationen derselben Quelldaten aufruft.

```js
const sourceMulti = document.querySelector("#source_multi");
const targetMulti = document.querySelector("#target_multi");

document.querySelector("#copy_multi").addEventListener("click", async () => {
  const html = sourceMulti.innerHTML;
  const text = sourceMulti.innerText;
  try {
    const clipboardItem = new ClipboardItem({
      "text/html": new Blob([html], { type: "text/html" }),
      "text/plain": new Blob([text], { type: "text/plain" }),
    });
    await navigator.clipboard.write([clipboardItem]);
    targetMulti.textContent = "Copied text/html and text/plain.";
  } catch (error) {
    targetMulti.textContent = `Copy failed: ${error.message}`;
  }
});
```

Der Handler zum Einfügen der Daten ist unten dargestellt.
Er zeigt, wie Sie den Zwischenablageeintrag auslesen und anschließend seine Typen durchlaufen können, um den gewünschten zu finden (in diesem Fall protokollieren wir lediglich die Typen).
Beachten Sie, dass wir hier das zurückgegebene Array von Einträgen destrukturieren, um ein einzelnes `[clipboardItem]` zu erhalten.

```js
document.querySelector("#paste_multi").addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    const lines = [];
    for (const type of clipboardItem.types) {
      const blob = await clipboardItem.getType(type);
      lines.push(`${type} → ${await blob.text()}`);
    }
    targetMulti.textContent = lines.join("\n");
  } catch (error) {
    targetMulti.textContent = `Paste failed: ${error.message}`;
  }
});
```

#### Ergebnis

Klicken Sie auf „Kopieren (HTML + Klartext)“ und anschließend auf „Einfügen“, um die gefundenen Repräsentationen aufzulisten.

{{EmbedLiveSample("Reading and writing multiple representations", "100%", "200", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> Erteilen Sie gegebenenfalls die Berechtigung zum Kopieren und Einfügen.

### Lesen und Schreiben benutzerdefinierter Formate

Dieses Beispiel zeigt, wie Anwendungen mit benutzerdefinierten Formaten eine vollständige Repräsentation ihrer Daten kopieren und einfügen können, wenn das Format verstanden wird, und andernfalls eine geeignete Alternative bereitstellen.

Der Code stellt eine Quelltabelle mit allen von der Anwendung bereitgestellten Daten bereit: Artikel, Menge und SKU.
Beim Kopieren wird ein [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) erstellt. Es enthält eine benutzerdefinierte Repräsentation mit dem Präfix `"web "`, die diese Daten vollständig beschreibt, eine `text/html`-Repräsentation ohne SKU-Daten und eine `text/plain`-Version, die die Daten auf Text reduziert.
Die Daten können anschließend in einen von drei Einfügebereichen eingefügt werden. Diese stehen für Anwendungen, die jeweils unterschiedliche Versionen der Daten darstellen können.

#### HTML

Zunächst definieren wir das HTML für unsere Quelltabelle sowie Schaltflächen zum Kopieren des Textes, zum Zurücksetzen des Beispiels und zum Protokollieren der Anzahl der kopierten Repräsentationen.
Der Tabellenkörper ist anfangs leer; er wird beim Ausführen des Skripts gefüllt.

```html
<table id="source">
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>SKU</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
<button id="copy_custom" type="button">
  Copy (HTML + text + custom format)
</button>
<button id="reload_custom" type="button">Reload</button>
<p id="status_custom"></p>
```

Anschließend definieren wir die drei Ziele und ihre Schaltflächen.
Beachten Sie, dass alle Zielelemente Rich Text zulassen, unser Code jedoch nur den Datentyp einfügt, den das jeweilige Ziel darstellen soll.

```html
<div class="targets">
  <div>
    <p>Your app</p>
    <div id="target_app"></div>
    <button id="paste_app" type="button">Paste</button>
  </div>
  <div>
    <p>Arbitrary rich text target</p>
    <div id="target_richtext"></div>
    <button id="paste_richtext" type="button">Paste</button>
  </div>
  <div>
    <p>Arbitrary plain text target</p>
    <div id="target_plaintext"></div>
    <button id="paste_plaintext" type="button">Paste</button>
  </div>
</div>
```

```css hidden
body {
  margin: 1rem;
}

#source {
  border-collapse: collapse;
  margin-bottom: 1rem;
}

#source th,
#source td {
  border: 1px solid black;
  padding: 0.25rem 0.5rem;
}

#status_custom {
  min-height: 1.2em;
  font-style: italic;
}

.targets {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}

.targets > div {
  flex: 1;
  min-width: 150px;
}

.targets p {
  margin: 0 0 0.25rem;
  font-weight: bold;
}

.targets button {
  margin-top: 0.5rem;
}

#target_app,
#target_richtext,
#target_plaintext {
  box-sizing: border-box;
  width: 100%;
  min-height: 80px;
  border: 1px solid black;
  padding: 0.5rem;
  font-family: inherit;
  font-size: inherit;
  white-space: pre-wrap;
}

#target_app:empty::before,
#target_richtext:empty::before,
#target_plaintext:empty::before {
  content: "Nothing pasted yet";
  color: gray;
}

#target_app table {
  border-collapse: collapse;
}

#target_app th,
#target_app td {
  border: 1px solid black;
  padding: 0.25rem 0.5rem;
}
```

#### JavaScript

```js hidden
const statusElement = document.querySelector("#status_custom");
function log(text) {
  statusElement.textContent = text;
}
```

Zunächst prüfen wir, ob benutzerdefinierte Formate unterstützt werden, und protokollieren das Ergebnis.
Das Beispiel funktioniert auch ohne diese Unterstützung, enthält dann aber nur die standardmäßigen Ersatzrepräsentationen.

```js
const customType = "web text/x-mdn-inventory+json";

log(
  ClipboardItem.supports(customType)
    ? `Custom format supported: ${customType}`
    : `Custom format not supported by this browser: ${customType}`,
);
```

Als Nächstes richten wir die Daten für unsere Quelltabelle ein, die im Array `inventory` definiert sind.
Dabei erstellt `buildRow()` aus einem Array von Zellenwerten eine Tabellenzeile.

```js
const inventory = [
  { item: "Apples", quantity: 12, sku: "A-104" },
  { item: "Pears", quantity: 7, sku: "P-221" },
];

function buildRow(cells, cellTag) {
  const tr = document.createElement("tr");
  for (const value of cells) {
    const cell = document.createElement(cellTag);
    cell.textContent = value;
    tr.appendChild(cell);
  }
  return tr;
}
const sourceBody = document.querySelector("#source tbody");
for (const row of inventory) {
  sourceBody.appendChild(buildRow([row.item, row.quantity, row.sku], "td"));
}
```

Außerdem definieren wir `buildTable()`. Diese Funktion verwenden wir später, um aus einer Liste von Spaltenüberschriften und Wertezeilen eine Tabelle zu erstellen (für unsere `text/html`-Repräsentation).

```js
function buildTable(headers, rows) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  thead.appendChild(buildRow(headers, "th"));
  const tbody = document.createElement("tbody");
  for (const row of rows) {
    tbody.appendChild(buildRow(row, "td"));
  }
  table.append(thead, tbody);
  return table;
}
```

Wir fügen außerdem Code hinzu, um das Beispiel beim Klicken auf die Schaltfläche „Neu laden“ neu zu laden und zurückzusetzen.

```js
const reload = document.querySelector("#reload_custom");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

Als Nächstes definieren wir den Code, der die Datenrepräsentationen in ein `ClipboardItem` übernimmt und es in die Zwischenablage schreibt.

Zunächst erstellt `copyInventory()` ein `ClipboardItem` mit Blobs für `text/html` und `text/plain`. Der Blob für das benutzerdefinierte Format wird nur hinzugefügt, wenn `ClipboardItem.supports()` bestätigt, dass der Browser es akzeptiert.
Der `text/html`-Blob enthält eine separate, reduzierte Tabelle ohne `SKU`-Spalte. Sie wird mit `buildTable()` erstellt, statt aus der Quelltabelle übernommen zu werden. Damit soll gezeigt werden, dass eine beliebige Anwendung, die HTML verarbeitet, weniger Informationen erhält als über das benutzerdefinierte Format.
Die Funktion wird sowohl von der Schaltfläche „Kopieren“ als auch vom `copy`-Event-Listener der Tabelle verwendet. Dadurch entstehen beim manuellen Auswählen und Kopieren dieselben Zwischenablageinhalte wie beim Klicken auf die Schaltfläche.

```js
const sourceTable = document.querySelector("#source");
const copyButton = document.querySelector("#copy_custom");

async function copyInventory() {
  const reducedTable = buildTable(
    ["Item", "Quantity"],
    inventory.map((row) => [row.item, row.quantity]),
  );
  const html = reducedTable.outerHTML;
  const text = inventory
    .map((row) => `${row.item}\t${row.quantity}`)
    .join("\n");

  const data = {
    "text/html": new Blob([html], { type: "text/html" }),
    "text/plain": new Blob([text], { type: "text/plain" }),
  };
  if (ClipboardItem.supports(customType)) {
    const json = JSON.stringify(inventory);
    data[customType] = new Blob([json], { type: customType });
  }

  try {
    await navigator.clipboard.write([new ClipboardItem(data)]);
    log(`Copied ${Object.keys(data).length} format(s) to the clipboard.`);
  } catch (error) {
    log(`Copy failed: ${error.message}`);
  }
}

copyButton.addEventListener("click", copyInventory);

document.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  if (!sourceTable.contains(selection.anchorNode)) return;
  event.preventDefault();
  copyInventory();
});
```

Anschließend definieren wir den Code zum Einfügen einer Repräsentation in jedes der Zielfelder.

Die Schaltfläche „Ihre Anwendung“ sucht gezielt nach der Repräsentation im benutzerdefinierten Format und erstellt aus den strukturierten Daten die vollständige Tabelle einschließlich der `SKU`-Spalte neu. Damit wird die Quelltabelle exakt reproduziert.

```js
const targetApp = document.querySelector("#target_app");
const pasteAppButton = document.querySelector("#paste_app");

pasteAppButton.addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    if (clipboardItem.types.includes(customType)) {
      const blob = await clipboardItem.getType(customType);
      const rows = JSON.parse(await blob.text());
      const table = buildTable(
        ["Item", "Quantity", "SKU"],
        rows.map((row) => [row.item, row.quantity, row.sku]),
      );
      targetApp.replaceChildren(table);
    } else {
      targetApp.textContent = "Custom format not on the clipboard.";
    }
  } catch (error) {
    targetApp.textContent = `Paste failed: ${error.message}`;
  }
});
```

Die Schaltfläche „Beliebiges Rich-Text-Ziel“ sucht ausschließlich nach `text/html`, ignoriert das benutzerdefinierte Format vollständig und stellt den Inhalt mit `innerHTML` dar.
Da das kopierte HTML nur `item` und `quantity` enthält, zeigt dieses Ziel eine Tabelle ohne `SKU`-Spalte.
Beachten Sie, dass eine echte Anwendung HTML von Drittanbietern bereinigen sollte, bevor sie es auf diese Weise einfügt (siehe [Nicht bereinigtes HTML aus der Zwischenablage lesen](/de/docs/Web/API/Clipboard/read#reading_unsanitized_html_from_the_clipboard)). Diese Demo fügt ausschließlich HTML ein, das sie selbst geschrieben hat.

```js
const targetRichtext = document.querySelector("#target_richtext");
const pasteRichtextButton = document.querySelector("#paste_richtext");

pasteRichtextButton.addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    if (clipboardItem.types.includes("text/html")) {
      const blob = await clipboardItem.getType("text/html");
      targetRichtext.innerHTML = await blob.text();
    } else {
      targetRichtext.textContent = "No text/html on the clipboard.";
    }
  } catch (error) {
    targetRichtext.textContent = `Paste failed: ${error.message}`;
  }
});
```

Die Schaltfläche „Beliebiges Klartextziel“ sucht ausschließlich nach dem Format `text/plain`.

```js
const targetPlaintext = document.querySelector("#target_plaintext");
const pastePlaintextButton = document.querySelector("#paste_plaintext");

pastePlaintextButton.addEventListener("click", async () => {
  try {
    const [clipboardItem] = await navigator.clipboard.read();
    if (clipboardItem.types.includes("text/plain")) {
      const blob = await clipboardItem.getType("text/plain");
      targetPlaintext.textContent = await blob.text();
    } else {
      targetPlaintext.textContent = "No text/plain on the clipboard.";
    }
  } catch (error) {
    targetPlaintext.textContent = `Paste failed: ${error.message}`;
  }
});
```

#### Ergebnis

Klicken Sie auf die Schaltfläche „Kopieren“ oder wählen Sie die Tabelle aus und kopieren Sie sie manuell, um sie als HTML, Klartext und – sofern unterstützt – im benutzerdefinierten Format zu kopieren.
Klicken Sie anschließend unten auf jede der drei „Einfügen“-Schaltflächen, um zu vergleichen, welche Daten die jeweiligen Ziele erhalten.
Klicken Sie auf „Neu laden“, um das Beispiel zurückzusetzen.

{{EmbedLiveSample("Reading and writing custom formats", "100%", "450", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> Erteilen Sie gegebenenfalls die Berechtigung zum Kopieren und Einfügen.

### Überschreiben von Ausschneiden-, Kopieren- und Einfügen-Ereignissen

Dieses Beispiel lauscht auf die Ereignisse [`copy`](/de/docs/Web/API/Element/copy_event), [`cut`](/de/docs/Web/API/Element/cut_event) und [`paste`](/de/docs/Web/API/Element/paste_event), die in einem Textbereich ausgelöst werden, sowie auf das Ereignis [`clipboardchange`](/de/docs/Web/API/Clipboard/clipboardchange_event), das auf [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) ausgelöst wird.
Die Standardaktion des `copy`-Ereignisses wird überschrieben, um dem kopierten Text eine Signatur anzuhängen. Die Standardaktion des `paste`-Ereignisses wird überschrieben, um den eingefügten Text in Großbuchstaben einzufügen.
Die Ereignisse `cut` und `clipboardchange` werden lediglich protokolliert. So wird sichtbar, dass sie auch dann ausgelöst werden, wenn ihre Standardaktionen nicht überschrieben werden.

#### HTML

```html
<textarea id="event_source" rows="3">
Select some of this text, then copy, cut, or paste using your keyboard or the context menu.</textarea>
<pre id="event_log"></pre>
```

```css hidden
#event_source {
  box-sizing: border-box;
  width: 100%;
}

#event_log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
  white-space: pre-wrap;
}
```

#### JavaScript

Die Standardaktion des `copy`-Ereignisses wird mithilfe von [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) überschrieben, um dem ausgewählten Text eine Signatur anzuhängen.

```js
const eventSource = document.querySelector("#event_source");

eventSource.addEventListener("copy", (event) => {
  const selected = eventSource.value.slice(
    eventSource.selectionStart,
    eventSource.selectionEnd,
  );
  event.clipboardData.setData("text/plain", `${selected} (MDN example)`);
  event.preventDefault();
  log("copy event: default action overridden to append a signature.");
});
```

Das `cut`-Ereignis wird nicht überschrieben. Beim Ausschneiden wird der ausgewählte Text daher wie gewohnt entfernt; lediglich das Ereignis selbst wird protokolliert.

```js
eventSource.addEventListener("cut", () => {
  log("cut event: fired, default action left in place.");
});
```

Die Standardaktion des `paste`-Ereignisses wird überschrieben, damit der eingefügte Text in Großbuchstaben statt unverändert eingefügt wird.

```js
eventSource.addEventListener("paste", (event) => {
  const pasted = event.clipboardData.getData("text/plain");
  const { selectionStart, selectionEnd, value } = eventSource;
  eventSource.value =
    value.slice(0, selectionStart) +
    pasted.toUpperCase() +
    value.slice(selectionEnd);
  event.preventDefault();
  log("paste event: default action overridden to upper-case the pasted text.");
});
```

Das Ereignis `clipboardchange` wird bei jeder Änderung des Inhalts der Systemzwischenablage auf [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) ausgelöst, unabhängig von der Quelle der Änderung.

```js
navigator.clipboard.addEventListener("clipboardchange", () => {
  log("clipboardchange event: the system clipboard's contents changed.");
});
```

#### Ergebnis

Wählen Sie einen Teil des obigen Textes aus und kopieren Sie ihn: Das Protokoll zeigt, dass das `copy`-Ereignis ausgelöst wird. An den soeben in der Zwischenablage gespeicherten Text wird die Signatur „(MDN example)“ angehängt (fügen Sie ihn zur Überprüfung an anderer Stelle ein).
Schneiden Sie etwas Text aus, um zu sehen, wie das `cut`-Ereignis protokolliert wird, ohne seine Standardaktion zu verändern.
Fügen Sie beliebigen Text in das Feld ein, um zu sehen, wie er in Großbuchstaben eingefügt wird.

{{EmbedLiveSample("Overriding cut, copy, and paste events", "100%", "200", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> Erteilen Sie gegebenenfalls die Berechtigung zum Kopieren und Einfügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
