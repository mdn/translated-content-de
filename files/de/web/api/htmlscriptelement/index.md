---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

HTML {{HTMLElement("script")}}-Elemente stellen das **`HTMLScriptElement`**-Interface zur Verfügung, das spezielle Eigenschaften und Methoden bietet, um das Verhalten und die Ausführung von `<script>`-Elementen zu manipulieren (zusätzlich zu dem geerbten [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface).

JavaScript-Dateien sollten mit dem `text/javascript` [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Image-Typ (`image/*`), Video-Typ (`video/*`), Audio-Typ (`audio/*`) oder `text/csv` bereitgestellt wird. Wenn das Skript blockiert wird, erhält das Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis; andernfalls erhält es ein [`load`](/de/docs/Web/API/Window/load_event)-Ereignis.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/script#attributionsrc)-Attribut eines {{htmlelement("script")}}-Elements ab und setzt es programmatisch, wobei der Wert dieses Attributs widergespiegelt wird. `attributionsrc` gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanfrage senden soll. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort zu initiieren, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren.
- [`HTMLScriptElement.async`](/de/docs/Web/API/HTMLScriptElement/async)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte, wenn die `async`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript parallel zum Parsen geladen und ausgeführt, sobald es verfügbar ist. Für [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules), wenn die `async`-Eigenschaft auf `true` gesetzt ist, werden das Skript und alle seine Abhängigkeiten parallel zum Parsen geladen und ausgeführt, sobald sie verfügbar sind.
- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking)
  - : Ein String, der anzeigt, dass bestimmte Operationen beim Laden des Skripts blockiert werden sollen. Es spiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements wider.
- `HTMLScriptElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichencodierung eines externen Skripts repräsentiert. Es spiegelt das [`charset`](/de/docs/Web/HTML/Reference/Elements/script#charset)-Attribut wider.
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für das Skriptelement widergibt. Für klassische Skripte von anderen {{Glossary("Origin", "Herkünften")}} steuert dies, ob Fehlermeldungen offengelegt werden.
- [`HTMLScriptElement.defer`](/de/docs/Web/API/HTMLScriptElement/defer)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte, wenn die `defer`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt. Für [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) hat die `defer`-Eigenschaft keine Wirkung.
- `HTMLScriptElement.event` {{deprecated_inline}}
  - : Ein String; eine veraltete Methode, um Ereignishandler auf Elemente in einem HTML-Dokument zu registrieren.
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
  - : Ein optionaler String, der einem Browser einen Hinweis darauf gibt, wie er das Laden eines externen Skripts im Vergleich zu anderen externen Skripten priorisieren sollte. Wenn dieser Wert bereitgestellt wird, muss er einer der möglichen erlaubten Werte sein: `high`, um mit hoher Priorität zu laden, `low`, um mit niedriger Priorität zu laden, oder `auto`, um keine Präferenz anzuzeigen (was der Standard ist). Es spiegelt das `fetchpriority`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.integrity`](/de/docs/Web/API/HTMLScriptElement/integrity)
  - : Ein String, der Inline-Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation bereitgestellt wurde. Es spiegelt das `integrity`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.noModule`](/de/docs/Web/API/HTMLScriptElement/noModule)
  - : Ein boolescher Wert, der, wenn er auf true gesetzt ist, die Ausführung des Skripts in Browsern stoppt, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen — verwendet, um Fallback-Skripte in älteren Browsern auszuführen, die _keine_ JavaScript-Module unterstützen.
- [`HTMLScriptElement.referrerPolicy`](/de/docs/Web/API/HTMLScriptElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy)-HTML-Attribut widerspiegelt, das angibt, welchen Referrer beim Laden des Skripts und der damit durchgeführten Ladevorgänge verwendet werden soll.
- [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src)
  - : Ein String, der die URL eines externen Skripts repräsentiert; dies kann als Alternative zur direkten Einbettung eines Skripts in ein Dokument verwendet werden. Es spiegelt das `src`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text)

  - : Ein String, der den Inhalt aller [`Text`](/de/docs/Web/API/Text)-Knoten innerhalb des {{HTMLElement("script")}}-Elements (unter Ignorierung anderer Knoten wie Kommentare) in Baumreihenfolge zusammenfügt und zurückgibt. Beim Setzen verhält es sich genauso wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft.

    > [!NOTE]
    > Wenn sie mit der [`Document.write()`](/de/docs/Web/API/Document/write)-Methode eingefügt werden, führen {{HTMLElement("script")}}-Elemente (typischerweise synchron) aus, aber wenn sie mithilfe von [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) eingefügt werden, führen sie überhaupt nicht aus.

- [`HTMLScriptElement.type`](/de/docs/Web/API/HTMLScriptElement/type)
  - : Ein String, der den Typ des Skripts repräsentiert. Es spiegelt das `type`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Statische Methoden

- [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static)
  - : Gibt `true` zurück, wenn der Browser Skripte des angegebenen Typs unterstützt, und `false` andernfalls.
    Diese Methode bietet eine einfache und einheitliche Methode zur skriptbezogenen Funktionsüberprüfung.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

### Dynamisches Importieren von Skripten

Lassen Sie uns eine Funktion erstellen, die neue Skripte innerhalb eines Dokuments importiert, indem ein {{HTMLElement("script")}}-Knoten _unmittelbar vor_ dem {{HTMLElement("script")}}, das den folgenden Code enthält, erstellt wird (durch [`document.currentScript`](/de/docs/Web/API/Document/currentScript)).
Diese Skripte werden **asynchron** ausgeführt.
Für weitere Details siehe die Eigenschaften [`defer`](/de/docs/Web/API/HTMLScriptElement/defer) und [`async`](/de/docs/Web/API/HTMLScriptElement/async).

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

Diese nächste Funktion hängt die neuen Skripte nicht unmittelbar vor dem [`document.currentScript`](/de/docs/Web/API/Document/currentScript)-Element an, sondern fügt sie als Kinder des {{HTMLElement("head")}}-Tags hinzu.

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

Beispielverwendung:

```js
affixScriptToHead("myScript1.js");
affixScriptToHead("myScript2.js", () => {
  alert('The script "myScript2.js" has been correctly loaded.');
});
```

### Überprüfen, ob ein Skripttyp unterstützt wird

[`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) bietet einen einheitlichen Mechanismus, um zu überprüfen, ob ein Browser bestimmte Arten von Skripten unterstützt.

Das folgende Beispiel zeigt, wie auf Modulsupport überprüft wird, unter Verwendung des Vorhandenseins des `noModule`-Attributs als Fallback.

```js
function checkModuleSupport() {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }
  return "noModule" in document.createElement("script");
}
```

Es wird angenommen, dass klassische Skripte auf allen Browsern unterstützt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("script")}}-Element
- HTML {{HTMLElement("noscript")}}-Element
- [`document.currentScript`](/de/docs/Web/API/Document/currentScript)
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) (Codeausschnitte, die ähnlich wie Skripte ausgeführt werden, aber in einem [anderen globalen Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope))
