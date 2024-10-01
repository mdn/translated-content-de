---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

HTML {{HTMLElement("script")}}-Elemente stellen das **`HTMLScriptElement`**-Interface bereit, das spezielle Eigenschaften und Methoden zum Manipulieren des Verhaltens und der Ausführung von `<script>`-Elementen bietet (über das geerbte [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface hinaus).

JavaScript-Dateien sollten mit dem `text/javascript`- [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), Videotyp (`video/*`), Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird. Wenn das Skript blockiert wird, erhält sein Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis; andernfalls erhält es ein [`load`](/de/docs/Web/API/Window/load_event)-Ereignis.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Element/script#attributionsrc)-Attribut eines {{htmlelement("script")}}-Elements ab und setzt es programmatisch. Es spiegelt den Wert dieses Attributs wider. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanfrage sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Quellzuordnung](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Auslöser zur Zuordnung](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren, jeweils.
- [`HTMLScriptElement.async`](/de/docs/Web/API/HTMLScriptElement/async)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Bei klassischen Skripten wird das externe Skript, wenn die `async`-Eigenschaft auf `true` gesetzt ist, parallel zum Parsing geladen und ausgeführt, sobald es verfügbar ist. Bei [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules) werden das Skript und alle seine Abhängigkeiten, wenn die `async`-Eigenschaft auf `true` gesetzt ist, parallel zum Parsing geladen und ausgeführt, sobald sie verfügbar sind.
- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking) {{Experimental_Inline}}
  - : Ein String, der darauf hinweist, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Es spiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements wider.
- `HTMLScriptElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichencodierung eines externen Skripts repräsentiert. Es spiegelt das [`charset`](/de/docs/Web/HTML/Element/script#charset)-Attribut wider.
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Attributes/crossorigin) für das Skriptelement widerspiegelt. Bei klassischen Skripten von anderen {{Glossary("Origin", "Ursprüngen")}} steuert dies, ob Fehlerinformationen offengelegt werden.
- [`HTMLScriptElement.defer`](/de/docs/Web/API/HTMLScriptElement/defer)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Bei klassischen Skripten wird das externe Skript, wenn die `defer`-Eigenschaft auf `true` gesetzt ist, nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses, ausgeführt. Für [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) hat die `defer`-Eigenschaft keine Wirkung.
- `HTMLScriptElement.event` {{deprecated_inline}}
  - : Ein String; eine veraltete Methode zum Registrieren von Ereignishandlern auf Elementen in einem HTML-Dokument.
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie er das Abrufen eines externen Skripts im Vergleich zu anderen externen Skripten priorisieren soll. Wenn dieser Wert angegeben ist, muss er einer der möglichen erlaubten Werte sein: `high`, um mit hoher Priorität zu laden, `low`, um mit niedriger Priorität zu laden, oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Es spiegelt das `fetchpriority`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.integrity`](/de/docs/Web/API/HTMLScriptElement/integrity)
  - : Ein String, der Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation bereitgestellt wurde. Es spiegelt das `integrity`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.noModule`](/de/docs/Web/API/HTMLScriptElement/noModule)
  - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, die Skriptausführung in Browsern stoppt, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen — verwendet, um Fallback-Skripte in älteren Browsern auszuführen, die keine JavaScript-Module unterstützen.
- [`HTMLScriptElement.referrerPolicy`](/de/docs/Web/API/HTMLScriptElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy)-HTML-Attribut widerspiegelt, welches angibt, welcher Referrer beim Abrufen des Skripts und bei durch das Skript getätigten Abrufen verwendet werden soll.
- [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src)
  - : Ein String, der die URL eines externen Skripts repräsentiert; dies kann als Alternative zur direkten Einbettung eines Skripts in ein Dokument verwendet werden. Es spiegelt das `src`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text)

  - : Ein String, der die Inhalte aller [`Text`](/de/docs/Web/API/Text)-Knoten innerhalb des {{HTMLElement("script")}}-Elements in Baumordnung zusammenfügt und zurückgibt (andere Knoten wie Kommentare werden ignoriert). Beim Setzen funktioniert er genauso wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft.

    > [!NOTE]
    > Wenn {{HTMLElement("script")}}-Elemente unter Verwendung der [`Document.write()`](/de/docs/Web/API/Document/write)-Methode eingefügt werden, werden sie (typischerweise synchron) ausgeführt, aber wenn sie mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) eingefügt werden, werden sie überhaupt nicht ausgeführt.

- [`HTMLScriptElement.type`](/de/docs/Web/API/HTMLScriptElement/type)
  - : Ein String, der den Typ des Skripts darstellt. Es spiegelt das `type`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Statische Methoden

- [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static)
  - : Gibt `true` zurück, wenn der Browser Skripte des angegebenen Typs unterstützt, und `false` andernfalls.
    Diese Methode bietet eine einfache und einheitliche Methode zur Skript-bezogenen Feature-Erkennung.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Ereignisse von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

### Dynamisches Importieren von Skripten

Lassen Sie uns eine Funktion erstellen, die neue Skripte innerhalb eines Dokuments importiert, indem ein {{HTMLElement("script")}}-Knoten _unmittelbar vor_ dem {{HTMLElement("script")}} erstellt wird, das den folgenden Code hostet (durch [`document.currentScript`](/de/docs/Web/API/Document/currentScript)).
Diese Skripte werden **asynchron** ausgeführt.
Für weitere Details siehe die [`defer`](/de/docs/Web/API/HTMLScriptElement/defer) und [`async`](/de/docs/Web/API/HTMLScriptElement/async) Eigenschaften.

```js
function loadError(oError) {
  throw new URIError(`The script ${oError.target.src} didn't load correctly.`);
}

function prefixScript(url, onloadFunction) {
  const newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) {
    newScript.onload = onloadFunction;
  }
  document.currentScript.parentNode.insertBefore(
    newScript,
    document.currentScript,
  );
  newScript.src = url;
}
```

Diese nächste Funktion hängt die neuen Skripte, anstatt sie unmittelbar vor dem [`document.currentScript`](/de/docs/Web/API/Document/currentScript)-Element voranzustellen, als Kinder des {{HTMLElement("head")}}-Tags an.

```js
function loadError(oError) {
  throw new URIError(`The script ${oError.target.src} didn't load correctly.`);
}

function affixScriptToHead(url, onloadFunction) {
  const newScript = document.createElement("script");
  newScript.onerror = loadError;
  if (onloadFunction) {
    newScript.onload = onloadFunction;
  }
  document.head.appendChild(newScript);
  newScript.src = url;
}
```

Beispielhafte Verwendung:

```js
affixScriptToHead("myScript1.js");
affixScriptToHead("myScript2.js", () => {
  alert('The script "myScript2.js" has been correctly loaded.');
});
```

### Überprüfen, ob ein Skripttyp unterstützt wird

[`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) bietet einen einheitlichen Mechanismus zur Überprüfung, ob ein Browser bestimmte Skripttypen unterstützt.

Das folgende Beispiel zeigt, wie man die Unterstützung von Modulen überprüft, indem das Vorhandensein des `noModule`-Attributs als Fallback verwendet wird.

```js
function checkModuleSupport() {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }
  return "noModule" in document.createElement("script");
}
```

Klassische Skripte werden angenommen, dass sie von allen Browsern unterstützt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("script")}} Element
- HTML {{HTMLElement("noscript")}} Element
- [`document.currentScript`](/de/docs/Web/API/Document/currentScript)
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) (Codeausschnitte ähnlich wie Skripte, die aber in [einem anderen globalen Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) ausgeführt werden)
