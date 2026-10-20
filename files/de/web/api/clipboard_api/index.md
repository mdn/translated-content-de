---
title: Clipboard API
slug: Web/API/Clipboard_API
l10n:
  sourceCommit: 7b8a3c0a4ab5b4b0c605641e8b64c8da42d8dd51
---

{{DefaultAPISidebar("Clipboard API")}}

Die **Clipboard API** ermöglicht es, auf Zwischenablagebefehle (Ausschneiden, Kopieren und Einfügen) zu reagieren sowie die Systemzwischenablage asynchron auszulesen und in sie zu schreiben.

> [!NOTE]
> Verwenden Sie für den Zugriff auf die Zwischenablage vorzugsweise diese API statt der veralteten Methode [`document.execCommand()`](/de/docs/Web/API/Document/execCommand).

> [!NOTE]
> Diese API ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) _nicht verfügbar_ (sie wird nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) bereitgestellt).

## Konzepte und Verwendung

Die _Systemzwischenablage_ ist ein Datenpuffer des Betriebssystems, auf dem der Browser läuft. Sie dient der kurzfristigen Speicherung von Daten und/oder der Datenübertragung zwischen Dokumenten oder Anwendungen.
Üblicherweise ist sie als anonymer, temporärer [Datenpuffer](https://en.wikipedia.org/wiki/Data_buffer) implementiert, der manchmal auch _Einfügepuffer_ genannt wird. Auf ihn können die meisten oder alle Programme der Umgebung über definierte Programmierschnittstellen zugreifen.

Die Clipboard API ermöglicht es Benutzern, in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) Text und andere Datenarten asynchron aus der Systemzwischenablage auszulesen und in sie zu schreiben, sofern die unter [Sicherheitsaspekte](#sicherheitsaspekte) beschriebenen Voraussetzungen erfüllt sind.

Der Zugriff auf die Systemzwischenablage erfolgt über das globale [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard).

### Text und mehrere Repräsentationen

Die Schnittstelle [`Clipboard`](/de/docs/Web/API/Clipboard) bietet zwei Möglichkeiten, mit Daten in der Zwischenablage zu arbeiten:

- Mit [`readText()`](/de/docs/Web/API/Clipboard/readText) und [`writeText()`](/de/docs/Web/API/Clipboard/writeText) können Sie Text aus der Zwischenablage auslesen und in sie schreiben.
- Mit [`read()`](/de/docs/Web/API/Clipboard/read) und [`write()`](/de/docs/Web/API/Clipboard/write) können Sie Arrays von [`ClipboardItem`](/de/docs/Web/API/ClipboardItem)-Objekten aus der Systemzwischenablage auslesen und in sie schreiben.
  Jedes `ClipboardItem` kann mehrere Repräsentationen desselben Inhalts enthalten, die jeweils einem [Medientyp](/de/docs/Web/HTTP/Guides/MIME_types) zugeordnet sind.
  So lassen sich Daten in mehreren Formaten kopieren, etwa als HTML-Tabelle, als tabulatorgetrennter Klartext oder als Bild. Die Anwendung, in die die Daten eingefügt werden, kann dann die am besten geeignete Repräsentation auswählen, die sie versteht.
  Eine Anwendung, die HTML nicht darstellen kann, könnte beispielsweise stattdessen die Textversion verwenden.

  Beachten Sie, dass manche Browser oder Betriebssysteme nur das Schreiben eines einzigen `ClipboardItem` zulassen und beim Versuch, mehrere zu schreiben, einen Fehler ausgeben (weitere Informationen finden Sie unter [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write#browser_compatibility)).

Browser müssen die Repräsentationen `text/plain`, `text/html` und `image/png` bei `read()` und `write()` unterstützen.
Andere Typen wie `image/svg+xml` und die im nächsten Abschnitt beschriebenen benutzerdefinierten Formate sind optional.
Mit [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static) können Sie prüfen, ob ein bestimmtes Format unterstützt wird (ein Beispiel finden Sie unten unter [Mehrere Repräsentationen lesen und schreiben](#mehrere_repräsentationen_lesen_und_schreiben)).

### Benutzerdefinierte Zwischenablageformate

Ein `ClipboardItem` kann auch ein benutzerdefiniertes Format enthalten: einen [Medientyp („MIME-Typ“)](/de/docs/Web/HTTP/Guides/MIME_types) mit dem Präfix `"web "` (das Wort „web“ gefolgt von einem Leerzeichen).
Damit kann eine Web-App ein eigenes Zwischenablageformat für Daten definieren, für die es keine Standardrepräsentation gibt, ohne mit den nativen Zwischenablageformaten des Betriebssystems oder den benutzerdefinierten Formaten anderer Websites in Konflikt zu geraten.

Benutzerdefinierte Formate sind nützlich, weil sie Informationen bewahren können, die in einer Standardrepräsentation verloren gingen, beispielsweise strukturierte Metadaten zusätzlich zu einer visuellen oder textuellen Version desselben Inhalts.
Eine App, die ihr eigenes benutzerdefiniertes Format erkennt, kann daraus kopierte Daten ohne Datenverlust wieder einfügen. Andere Apps erhalten weiterhin die ebenfalls bereitgestellten Standardrepräsentationen.
Ein wichtiger Anwendungsfall dieser Funktion ist das Kopieren und Einfügen innerhalb Ihrer eigenen Anwendung – auf derselben Seite oder zwischen verschiedenen Tabs oder Browsern.

Die Unterstützung für benutzerdefinierte Formate unterscheidet sich derzeit je nach Browser. Prüfen Sie daher die [Browser-Kompatibilität](#browser-kompatibilität) und verwenden Sie [`ClipboardItem.supports()`](/de/docs/Web/API/ClipboardItem/supports_static), bevor Sie sich auf ein solches Format verlassen.
Ein vollständiges Beispiel finden Sie unten unter [Benutzerdefinierte Formate lesen und schreiben](#benutzerdefinierte_formate_lesen_und_schreiben).

### Zwischenablage und Ausschneiden-/Kopieren-/Einfügen-Ereignisse

Bei Vorgängen zum [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event), die die Zwischenablage verändern, werden Ereignisse ausgelöst.
Diese Ereignisse haben eine Standardaktion: Bei `copy` wird beispielsweise standardmäßig die aktuelle Auswahl in die Systemzwischenablage kopiert.
Der Event-Handler kann die Standardaktion überschreiben – weitere Informationen finden Sie bei den jeweiligen Ereignissen.

Außerdem wird das Ereignis [`clipboardchange`](/de/docs/Web/API/Clipboard/clipboardchange_event) direkt auf dem [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt ausgelöst, sobald sich der Inhalt der Systemzwischenablage ändert. Damit können Apps über Änderungen an der Systemzwischenablage informiert werden, etwa wenn sie eine eigene Zwischenablage mit ihr synchron halten müssen.

Ein Beispiel, das die Ereignisse `copy` und `paste` überschreibt und auf `cut` und `clipboardchange` reagiert, finden Sie unten unter [Ausschneiden-, Kopieren- und Einfügen-Ereignisse überschreiben](#overriding_cut_copy_and_paste_events).

## Schnittstellen

- [`Clipboard`](/de/docs/Web/API/Clipboard) {{securecontext_inline}}
  - : Stellt eine Schnittstelle zum Lesen und Schreiben von Text und Daten aus der beziehungsweise in die Systemzwischenablage bereit.
    Die Spezifikation bezeichnet sie als „Async Clipboard API“.
- [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)
  - : Repräsentiert Ereignisse, die ausgelöst werden, wenn sich der Inhalt der Systemzwischenablage ändert.
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
  - : Repräsentiert Ereignisse mit Informationen zu Änderungen an der Zwischenablage, nämlich [`cut`](/de/docs/Web/API/Element/cut_event)-, [`copy`](/de/docs/Web/API/Element/copy_event)- und [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignisse.
    Die Spezifikation bezeichnet dies als „Clipboard Event API“.
- [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) {{securecontext_inline}}
  - : Repräsentiert einen einzelnen Zwischenablageeintrag, der eine oder mehrere Repräsentationen derselben Daten mit unterschiedlichen Medientypen enthalten kann (beispielsweise HTML- und Textversionen).

### Erweiterungen anderer Schnittstellen

Die Clipboard API erweitert die folgenden APIs um die aufgeführten Funktionen.

- [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) {{readonlyinline}} {{securecontext_inline}}
  - : Gibt ein [`Clipboard`](/de/docs/Web/API/Clipboard)-Objekt zurück, das Lese- und Schreibzugriff auf die Systemzwischenablage bietet.
- `Element`-Ereignis [`copy`](/de/docs/Web/API/Element/copy_event)
  - : Wird ausgelöst, wenn der Benutzer einen Kopiervorgang startet.
- `Element`-Ereignis [`cut`](/de/docs/Web/API/Element/cut_event)
  - : Wird ausgelöst, wenn der Benutzer einen Ausschneidevorgang startet.
- `Element`-Ereignis [`paste`](/de/docs/Web/API/Element/paste_event)
  - : Wird ausgelöst, wenn der Benutzer einen Einfügevorgang startet.

## Sicherheitsaspekte

Die Clipboard API ermöglicht es Benutzern, in [sicheren Kontexten](/de/docs/Web/Security/Defenses/Secure_Contexts) Text und andere Datenarten programmgesteuert aus der Systemzwischenablage auszulesen und in sie zu schreiben.

Beim Lesen aus der Zwischenablage verlangt die Spezifikation, dass der Benutzer kürzlich mit der Seite interagiert hat ([vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)) und dass der Aufruf auf eine Interaktion mit einem „Einfügeelement“ des Browsers oder Betriebssystems zurückgeht (beispielsweise auf die Auswahl von „Einfügen“ in einem nativen Kontextmenü). In der Praxis erlauben Browser Lesevorgänge häufig auch dann, wenn diese Voraussetzungen nicht erfüllt sind, stellen dafür aber andere Anforderungen (etwa eine Berechtigung oder eine Bestätigung für jeden einzelnen Vorgang).
Für das Schreiben in die Zwischenablage sieht die Spezifikation vor, dass der Seite über die [Permissions API](/de/docs/Web/API/Permissions_API) die Berechtigung `clipboard-write` erteilt wurde. Der Browser kann zusätzlich eine [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) verlangen.
Browser können die Verwendung der Methoden für den Zugriff auf die Zwischenablage zusätzlich einschränken.

Das Ereignis [`clipboardchange`](/de/docs/Web/API/Clipboard/clipboardchange_event) wird nur bei {{Glossary("Sticky_activation", "dauerhafter Aktivierung")}} oder nach Erteilung der Berechtigung `clipboard-read` ausgelöst.

Die Implementierungen in den Browsern weichen von der Spezifikation ab.
Die Unterschiede sind im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) aufgeführt. Der aktuelle Stand ist nachfolgend zusammengefasst:

Chromium-Browser:

- Ist ein Lesevorgang nach der Spezifikation nicht zulässig und hat das Dokument den Fokus, wird eine Anfrage für die Berechtigung `clipboard-read` ausgelöst. Der Vorgang gelingt, wenn die Berechtigung erteilt wird (weil der Benutzer die Anfrage bestätigt oder die Berechtigung bereits erteilt wurde).
- Zum Schreiben ist entweder die Berechtigung `clipboard-write` oder eine vorübergehende Aktivierung erforderlich.
  Eine erteilte Berechtigung bleibt bestehen; bei weiteren Schreibvorgängen ist keine vorübergehende Aktivierung mehr nötig.
- Die HTTP-Berechtigungen `clipboard-read` und `clipboard-write` der [Permissions-Policy](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) müssen für {{HTMLElement("iframe")}}-Elemente zugelassen sein, die auf die Zwischenablage zugreifen.

Firefox und Safari:

- Ist ein Lesevorgang nach der Spezifikation nicht zulässig, liegt aber eine vorübergehende Benutzeraktivierung vor, erscheint eine Benutzerabfrage in Form eines temporären Kontextmenüs mit der einzigen Option „Einfügen“ (die nach einer Sekunde aktiviert wird). Der Vorgang gelingt, wenn der Benutzer diese Option auswählt.
- Zum Schreiben ist eine vorübergehende Aktivierung erforderlich.
- Die Einfügeabfrage entfällt beim Lesen von Zwischenablageinhalten desselben Ursprungs, nicht aber bei Inhalten eines anderen Ursprungs.
- Firefox und Safari unterstützen die Berechtigungen `clipboard-read` und `clipboard-write` nicht; eine Unterstützung ist auch nicht geplant.

Firefox-[Weberweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard):

- Erweiterungen mit der Berechtigung [`clipboardRead`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardread) für Weberweiterungen können die Zwischenablage lesen. Mit dieser Berechtigung benötigt die Erweiterung weder eine vorübergehende Aktivierung noch die Einfügeabfrage. Ab Firefox 147 ist das Lesen auch ohne diese Berechtigung möglich, sofern ein sicherer Kontext und eine vorübergehende Aktivierung vorliegen und der Benutzer die Einfügeabfrage in einem temporären Kontextmenü bestätigt.
- Das Schreiben ist in einem sicheren Kontext mit vorübergehender Aktivierung möglich. Mit der Berechtigung [`clipboardWrite`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#clipboardwrite) für Weberweiterungen ist eine vorübergehende Aktivierung jedoch nicht erforderlich.

## Beispiele

### Text lesen und schreiben

Dieses Beispiel kopiert mit [`writeText()`](/de/docs/Web/API/Clipboard/writeText) eine Textzeile und liest sie mit [`readText()`](/de/docs/Web/API/Clipboard/readText) wieder aus.

#### HTML

Das HTML definiert ein {{htmlelement("p")}}-Element für den zu kopierenden Ausgangstext, {{htmlelement("button")}}-Elemente zum Kopieren und Einfügen sowie ein Element, in das der Text kopiert wird.

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

Der folgende Code registriert Click-Event-Handler für die Buttons, die den Text lesen und schreiben.

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

Klicken Sie auf „Copy“ und anschließend auf „Paste“, um den Text wieder auszulesen.

{{EmbedLiveSample("Reading and writing text", "100%", "150", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> Erteilen Sie gegebenenfalls die Berechtigung zum Kopieren und Einfügen.

### Mehrere Repräsentationen lesen und schreiben

Dieses Beispiel erstellt ein einzelnes [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) mit zwei Repräsentationen desselben Inhalts: `text/html` und `text/plain`.
Anschließend liest es die Zwischenablage aus und listet alle gefundenen Repräsentationen auf.

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

Wie im vorherigen Beispiel erstellen wir Event-Handler, um das Quellelement zu kopieren und den Inhalt in das Zielelement einzufügen.

Der Code, der zum Kopieren der Daten ausgeführt wird, ist unten zu sehen.
Beachten Sie, dass er den Konstruktor `ClipboardItem()` mit zwei Repräsentationen derselben Ausgangsdaten aufruft.

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

Der Handler zum Einfügen der Daten ist unten zu sehen.
Er zeigt, wie Sie ein Element aus der Zwischenablage auslesen und anschließend seine Typen durchlaufen können, um den gewünschten zu finden (in diesem Fall protokollieren wir lediglich alle Typen).
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

Klicken Sie auf „Copy (HTML + plain text)“ und anschließend auf „Paste“, um die gefundenen Repräsentationen aufzulisten.

{{EmbedLiveSample("Reading and writing multiple representations", "100%", "200", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> Erteilen Sie gegebenenfalls die Berechtigung zum Kopieren und Einfügen.

### Benutzerdefinierte Formate lesen und schreiben

Dieses Beispiel zeigt, wie Anwendungen mithilfe benutzerdefinierter Formate eine originalgetreue Repräsentation ihrer Daten kopieren und einfügen können, wenn das Format verstanden wird, und andernfalls eine geeignete Alternative bereitstellen.

Der Code stellt eine Ausgangstabelle mit allen von der Anwendung bereitgestellten Daten bereit: Artikel, Menge und SKU.
Beim Kopieren wird ein [`ClipboardItem`](/de/docs/Web/API/ClipboardItem) erstellt. Es enthält eine benutzerdefinierte Repräsentation mit dem Präfix `"web "`, die diese Daten vollständig beschreibt, eine `text/html`-Repräsentation ohne die SKU-Daten und eine `text/plain`-Version, die die Daten auf Text reduziert.
Die Daten können dann in einen von drei Einfügebereichen eingefügt werden, die Anwendungen darstellen sollen, welche die unterschiedlichen Versionen der Daten wiedergeben können.

#### HTML

Zuerst definieren wir das HTML für unsere Ausgangstabelle sowie Buttons zum Kopieren des Textes, zum Zurücksetzen des Beispiels und zum Protokollieren der Anzahl kopierter Repräsentationen.
Der Tabellenkörper ist anfangs leer; unser Skript füllt ihn bei der Ausführung.

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

Anschließend definieren wir die drei Ziele und ihre Buttons.
Beachten Sie, dass alle Zielelemente Rich Text zulassen, unser Code aber jeweils nur den Datentyp kopiert, den sie darstellen sollen.

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

Zuerst prüfen wir, ob benutzerdefinierte Formate unterstützt werden, und protokollieren das Ergebnis.
Das Beispiel funktioniert auch ohne diese Unterstützung, enthält dann aber nur die Standardrepräsentationen beziehungsweise Ersatzrepräsentationen.

```js
const customType = "web text/x-mdn-inventory+json";

log(
  ClipboardItem.supports(customType)
    ? `Custom format supported: ${customType}`
    : `Custom format not supported by this browser: ${customType}`,
);
```

Als Nächstes legen wir die Daten für unsere Ausgangstabelle fest. Sie sind im Array `inventory` definiert.
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

Außerdem definieren wir `buildTable()`. Damit erstellen wir später aus einer Liste von Spaltenüberschriften und Wertzeilen eine Tabelle für unsere `text/html`-Repräsentation.

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

Wir fügen auch Code hinzu, der das Beispiel neu lädt und leert, wenn der Button „Reload“ gedrückt wird.

```js
const reload = document.querySelector("#reload_custom");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

Als Nächstes definieren wir den Code, der die Datenrepräsentationen in ein `ClipboardItem` kopiert und in die Zwischenablage schreibt.

Zunächst erstellt `copyInventory()` ein `ClipboardItem` mit Blobs für `text/html` und `text/plain`. Der Blob im benutzerdefinierten Format wird nur hinzugefügt, wenn `ClipboardItem.supports()` bestätigt, dass der Browser es akzeptiert.
Der `text/html`-Blob enthält eine separate, reduzierte Tabelle ohne `SKU`-Spalte. Sie wird mit `buildTable()` erstellt, statt die Ausgangstabelle wiederzuverwenden (damit soll gezeigt werden, dass eine beliebige Anwendung, die HTML verarbeitet, weniger Informationen erhält als über das benutzerdefinierte Format).
Die Funktion wird sowohl vom Button „Copy“ als auch vom `copy`-Event-Listener der Tabelle verwendet. Daher erzeugt auch das manuelle Auswählen und Kopieren denselben Zwischenablageinhalt wie ein Klick auf den Button.

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

Anschließend definieren wir den Code, der eine Repräsentation in jedes der Zielfelder einfügt.

Der Button „Your app“ sucht gezielt nach der Repräsentation im benutzerdefinierten Format und erstellt aus den strukturierten Daten die vollständige Tabelle einschließlich der `SKU`-Spalte neu. So wird die Ausgangstabelle exakt reproduziert.

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

Der Button „Arbitrary rich text target“ sucht ausschließlich nach `text/html`, ignoriert das benutzerdefinierte Format vollständig und stellt den Inhalt mit `innerHTML` dar.
Da das kopierte HTML nur `item` und `quantity` enthält, zeigt dieses Ziel eine Tabelle ohne `SKU`-Spalte.
Beachten Sie, dass eine echte App HTML von Dritten bereinigen sollte, bevor sie es auf diese Weise einfügt (siehe [Nicht bereinigtes HTML aus der Zwischenablage lesen](/de/docs/Web/API/Clipboard/read#reading_unsanitized_html_from_the_clipboard)). Dieses Beispiel fügt ausschließlich HTML ein, das es selbst geschrieben hat.

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

Der Button „Arbitrary plain text target“ sucht ausschließlich nach dem Format `text/plain`.

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

Klicken Sie auf den Button „Copy“ oder wählen Sie die Tabelle aus und kopieren Sie sie manuell, um sie als HTML, Klartext und – falls unterstützt – im benutzerdefinierten Format zu kopieren.
Klicken Sie anschließend auf jeden der drei „Paste“-Buttons darunter, um zu vergleichen, was die einzelnen Ziele auslesen.
Klicken Sie auf „Reload“, um das Beispiel zurückzusetzen.

{{EmbedLiveSample("Reading and writing custom formats", "100%", "450", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> Erteilen Sie gegebenenfalls die Berechtigung zum Kopieren und Einfügen.

### Ausschneiden-, Kopieren- und Einfügen-Ereignisse überschreiben

Dieses Beispiel reagiert auf die Ereignisse [`copy`](/de/docs/Web/API/Element/copy_event), [`cut`](/de/docs/Web/API/Element/cut_event) und [`paste`](/de/docs/Web/API/Element/paste_event), die auf einem Textfeld ausgelöst werden, sowie auf das Ereignis [`clipboardchange`](/de/docs/Web/API/Clipboard/clipboardchange_event), das auf [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) ausgelöst wird.
Die Standardaktion des Ereignisses `copy` wird überschrieben, um dem kopierten Text eine Signatur anzuhängen. Die Standardaktion von `paste` wird überschrieben, um den eingefügten Text in Großbuchstaben einzufügen.
Die Ereignisse `cut` und `clipboardchange` werden lediglich protokolliert. So wird deutlich, dass sie auch dann ausgelöst werden, wenn ihre Standardaktion nicht überschrieben wird.

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

```js hidden
const eventLog = document.querySelector("#event_log");
function log(text) {
  eventLog.textContent = `${eventLog.textContent}${text}\n`;
  eventLog.scrollTop = eventLog.scrollHeight;
}
```

Die Standardaktion des Ereignisses `copy` wird mithilfe von [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) überschrieben, um dem ausgewählten Text eine Signatur anzuhängen.

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

Das Ereignis `cut` wird nicht überschrieben. Beim Ausschneiden wird der ausgewählte Text also wie üblich entfernt; lediglich das Ereignis selbst wird protokolliert.

```js
eventSource.addEventListener("cut", () => {
  log("cut event: fired, default action left in place.");
});
```

Die Standardaktion des Ereignisses `paste` wird überschrieben, um den eingefügten Text in Großbuchstaben statt unverändert einzufügen.

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

Das Ereignis `clipboardchange` wird auf [`Navigator.clipboard`](/de/docs/Web/API/Navigator/clipboard) ausgelöst, sobald sich der Inhalt der Systemzwischenablage ändert – unabhängig von der Quelle der Änderung.

```js
navigator.clipboard.addEventListener("clipboardchange", () => {
  log("clipboardchange event: the system clipboard's contents changed.");
});
```

#### Ergebnis

Wählen Sie einen Teil des obigen Textes aus und kopieren Sie ihn: Das Protokoll zeigt, dass das Ereignis `copy` ausgelöst wird, und an den soeben in der Zwischenablage gespeicherten Text wird die Signatur „(MDN example)“ angehängt (fügen Sie ihn zur Überprüfung an anderer Stelle ein).
Schneiden Sie etwas Text aus, um zu sehen, wie das Ereignis `cut` protokolliert wird, ohne seine Standardaktion zu verändern.
Fügen Sie einen beliebigen Text in das Feld ein, um zu sehen, wie er in Großbuchstaben eingefügt wird.

{{EmbedLiveSample("Overriding cut, copy, and paste events", "100%", "200", "", "", "", "clipboard-read; clipboard-write")}}

> [!NOTE]
> Erteilen Sie gegebenenfalls die Berechtigung zum Kopieren und Einfügen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
