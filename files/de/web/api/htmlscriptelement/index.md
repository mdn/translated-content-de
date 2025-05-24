---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{APIRef("HTML DOM")}}

HTML-{{HTMLElement("script")}}-Elemente stellen das **`HTMLScriptElement`**-Interface bereit, das spezielle Eigenschaften und Methoden zum Manipulieren des Verhaltens und der Ausführung von `<script>`-Elementen bietet (über das geerbte [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface hinaus).

JavaScript-Dateien sollten mit dem MIME-Typ `text/javascript` bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), Videotyp (`video/*`), Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird. Wenn das Skript blockiert wird, erhält sein Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Event; andernfalls erhält es ein [`load`](/de/docs/Web/API/Window/load_event)-Event.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/script#attributionsrc)-Attribut eines {{htmlelement("script")}}-Elements ab und setzt es programmgesteuert und spiegelt den Wert dieses Attributs wider. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skript-Ressourcenanforderung sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren.
- [`HTMLScriptElement.async`](/de/docs/Web/API/HTMLScriptElement/async)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte, wenn die Eigenschaft `async` auf `true` gesetzt ist, wird das externe Skript parallel zum Parsen geladen und ausgewertet, sobald es verfügbar ist. Für [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules), wenn die Eigenschaft `async` auf `true` gesetzt ist, werden das Skript und alle seine Abhängigkeiten parallel zum Parsen geladen und ausgewertet, sobald sie verfügbar sind.
- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking)
  - : Ein String, der angibt, dass bestimmte Operationen beim Laden des Skripts blockiert werden sollen. Es spiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements wider.
- `HTMLScriptElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichenkodierung eines externen Skripts darstellt. Es spiegelt das [`charset`](/de/docs/Web/HTML/Reference/Elements/script#charset)-Attribut wider.
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für das Skriptelement widerspiegelt. Für klassische Skripte aus anderen {{Glossary("Origin", "Ursprüngen")}} steuert dies, ob Fehlerinformationen offengelegt werden.
- [`HTMLScriptElement.defer`](/de/docs/Web/API/HTMLScriptElement/defer)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte, wenn die Eigenschaft `defer` auf `true` gesetzt ist, wird das externe Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Events ausgeführt. Für [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules) hat die Eigenschaft `defer` keine Auswirkung.
- `HTMLScriptElement.event` {{deprecated_inline}}
  - : Ein String; eine veraltete Methode, Ereignishandler auf Elementen in einem HTML-Dokument zu registrieren.
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie das Laden eines externen Skripts im Verhältnis zu anderen externen Skripten priorisiert werden soll. Wenn dieser Wert angegeben ist, muss er einer der zulässigen Werte sein: `high`, um die Priorität hoch zu setzen, `low`, um die Priorität niedrig zu setzen, oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Es spiegelt das `fetchpriority`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.integrity`](/de/docs/Web/API/HTMLScriptElement/integrity)
  - : Ein String, der Inline-Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Es spiegelt das `integrity`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.noModule`](/de/docs/Web/API/HTMLScriptElement/noModule)
  - : Ein boolescher Wert, der, wenn er wahr ist, die Ausführung des Skripts in Browsern, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, stoppt — wird verwendet, um Fallback-Skripte in älteren Browsern auszuführen, die _nicht_ JavaScript-Module unterstützen.
- [`HTMLScriptElement.referrerPolicy`](/de/docs/Web/API/HTMLScriptElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy)-HTML-Attribut widerspiegelt, das angibt, welcher Referrer beim Laden des Skripts und bei vom Skript durchgeführten Laden verwendet werden soll.
- [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src)
  - : Ein String, der die URL eines externen Skripts darstellt; dies kann als Alternative zur direkten Einbettung eines Skripts innerhalb eines Dokuments verwendet werden. Es spiegelt das `src`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text)

  - : Ein String, der den Inhalt aller [`Text`](/de/docs/Web/API/Text)-Knoten im {{HTMLElement("script")}}-Element in Baumreihenfolge zusammenführt und zurückgibt. Beim Setzen verhält er sich genauso wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft.

    > [!NOTE]
    > Wenn sie mit der [`Document.write()`](/de/docs/Web/API/Document/write)-Methode eingefügt werden, führen {{HTMLElement("script")}}-Elemente die Skripte (typischerweise synchron) aus. Werden sie jedoch mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) eingefügt, führen sie die Skripte überhaupt nicht aus.

- [`HTMLScriptElement.type`](/de/docs/Web/API/HTMLScriptElement/type)
  - : Ein String, der den Typ des Skripts darstellt. Es spiegelt das `type`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Statische Methoden

- [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static)
  - : Gibt `true` zurück, wenn der Browser Skripte des angegebenen Typs unterstützt, andernfalls `false`.
    Diese Methode bietet eine einfache und einheitliche Methode zur Skript-bezogenen Feature-Erkennung.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

### Dynamisches Importieren von Skripten

Erstellen wir eine Funktion, die neue Skripte in einem Dokument importiert, indem sie einen {{HTMLElement("script")}}-Knoten _unmittelbar vor_ dem {{HTMLElement("script")}} erstellt, der den folgenden Code beherbergt (durch [`document.currentScript`](/de/docs/Web/API/Document/currentScript)).
Diese Skripte werden **asynchron** ausgeführt.
Weitere Details finden Sie in den Eigenschaften [`defer`](/de/docs/Web/API/HTMLScriptElement/defer) und [`async`](/de/docs/Web/API/HTMLScriptElement/async).

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

Diese nächste Funktion fügt, anstatt die neuen Skripte unmittelbar vor dem [`document.currentScript`](/de/docs/Web/API/Document/currentScript)-Element hinzuzufügen, diese als Kinder des {{HTMLElement("head")}}-Tags hinzu.

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

Beispiel zur Nutzung:

```js
affixScriptToHead("myScript1.js");
affixScriptToHead("myScript2.js", () => {
  alert('The script "myScript2.js" has been correctly loaded.');
});
```

### Überprüfen, ob ein Skripttyp unterstützt wird

[`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) bietet einen einheitlichen Mechanismus, um zu überprüfen, ob ein Browser bestimmte Skripttypen unterstützt.

Das folgende Beispiel zeigt, wie man die Unterstützung für Module überprüft, indem die Existenz des `noModule`-Attributs als Fallback verwendet wird.

```js
function checkModuleSupport() {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }
  return "noModule" in document.createElement("script");
}
```

Klassische Skripte werden von allen Browsern als unterstützt angenommen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-{{HTMLElement("script")}}-Element
- HTML-{{HTMLElement("noscript")}}-Element
- [`document.currentScript`](/de/docs/Web/API/Document/currentScript)
- [Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers) (Code-Snippets ähnlich zu Skripten, aber ausgeführt in [einem anderen globalen Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope))
