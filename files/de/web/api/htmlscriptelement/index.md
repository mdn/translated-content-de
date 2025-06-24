---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

HTML-{{HTMLElement("script")}}-Elemente stellen das **`HTMLScriptElement`**-Interface bereit, das spezielle Eigenschaften und Methoden bietet, um das Verhalten und die Ausführung von `<script>`-Elementen zu manipulieren (über die geerbte [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle hinaus).

JavaScript-Dateien sollten mit dem `text/javascript` [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) geliefert werden, aber Browser sind tolerant und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), Videotyp (`video/*`), Audiotyp (`audio/*`) oder `text/csv` geliefert wird. Wenn das Skript blockiert wird, erhält sein Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis; andernfalls erhält es ein [`load`](/de/docs/Web/API/Window/load_event)-Ereignis.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Holt und setzt das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/script#attributionsrc)-Attribut an einem {{htmlelement("script")}}-Element programmatisch und spiegelt den Wert dieses Attributs wider. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanforderung sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren.
- [`HTMLScriptElement.async`](/de/docs/Web/API/HTMLScriptElement/async)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Bei klassischen Skripten, wenn die `async`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript parallel zum Parsen abgerufen und ausgewertet, sobald es verfügbar ist. Bei [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules), wenn die `async`-Eigenschaft auf `true` gesetzt ist, werden das Skript und alle seine Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.
- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking)
  - : Ein String, der angibt, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollten. Es spiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements wider.
- `HTMLScriptElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichenkodierung eines externen Skripts darstellt. Es spiegelt das [`charset`](/de/docs/Web/HTML/Reference/Elements/script#charset)-Attribut wider.
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für das Skriptelement widerspiegelt. Für klassische Skripte von anderen {{Glossary("Origin", "Ursprüngen")}} steuert dies, ob Fehlermeldungen angezeigt werden.
- [`HTMLScriptElement.defer`](/de/docs/Web/API/HTMLScriptElement/defer)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Bei klassischen Skripten, wenn die `defer`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript ausgeführt, nachdem das Dokument geparst wurde, aber bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird. Bei [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules) hat die `defer`-Eigenschaft keine Wirkung.
- `HTMLScriptElement.event` {{deprecated_inline}}
  - : Ein String; eine veraltete Methode zur Registrierung von Ereignishandlern auf Elemente in einem HTML-Dokument.
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie er das Abrufen eines externen Skripts im Verhältnis zu anderen externen Skripten priorisieren soll. Wenn dieser Wert angegeben wird, muss er einer der möglichen zulässigen Werte sein: `high`, um mit hoher Priorität abzurufen, `low`, um mit niedriger Priorität abzurufen, oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Es spiegelt das `fetchpriority`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.integrity`](/de/docs/Web/API/HTMLScriptElement/integrity)
  - : Ein String, der Inline-Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Es spiegelt das `integrity`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.noModule`](/de/docs/Web/API/HTMLScriptElement/noModule)
  - : Ein boolescher Wert, der, wenn er wahr ist, die Ausführung des Skripts in Browsern stoppt, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen — wird verwendet, um Fallback-Skripte in älteren Browsern auszuführen, die _keine_ JavaScript-Module unterstützen.
- [`HTMLScriptElement.referrerPolicy`](/de/docs/Web/API/HTMLScriptElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy)-HTML-Attribut widerspiegelt, das angibt, welchen Referrer zu verwenden ist, wenn das Skript und durch dieses Skript durchgeführte Abrufe abgerufen werden.
- [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src)
  - : Ein String, der die URL eines externen Skripts darstellt; dies kann verwendet werden, um ein Skript als Alternative zur direkten Einbettung in ein Dokument zu verwenden. Es spiegelt das `src`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text)

  - : Ein String, der die Inhalte aller [`Text`](/de/docs/Web/API/Text)-Knoten innerhalb des {{HTMLElement("script")}}-Elements in Baumreihenfolge verbindet und zurückgibt (unter Auslassung anderer Knoten wie Kommentare). Beim Setzen wirkt es genauso wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft.

    > [!NOTE]
    > Wenn sie mit der [`Document.write()`](/de/docs/Web/API/Document/write)-Methode eingefügt werden, führen {{HTMLElement("script")}}-Elemente sie aus (typischerweise synchron), aber wenn sie mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) eingefügt werden, führen sie sich überhaupt nicht aus.

- [`HTMLScriptElement.type`](/de/docs/Web/API/HTMLScriptElement/type)
  - : Ein String, der den Typ des Skripts darstellt. Es spiegelt das `type`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Statische Methoden

- [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static)
  - : Gibt `true` zurück, wenn der Browser Skripte des angegebenen Typs unterstützt, und `false`, andernfalls.
    Diese Methode bietet eine einfache und einheitliche Methode zur Skript-bezogenen Funktionsprüfung.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

### Dynamisches Importieren von Skripten

Lassen Sie uns eine Funktion erstellen, die neue Skripte in ein Dokument importiert, indem sie ein {{HTMLElement("script")}}-Knoten _unmittelbar vor_ dem {{HTMLElement("script")}}, das den folgenden Code enthält, erstellt (durch [`document.currentScript`](/de/docs/Web/API/Document/currentScript)).
Diese Skripte werden **asynchron** ausgeführt.
Für weitere Details siehe die [`defer`](/de/docs/Web/API/HTMLScriptElement/defer)- und [`async`](/de/docs/Web/API/HTMLScriptElement/async)-Eigenschaften.

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

Diese nächste Funktion fügt die neuen Skripte anstelle der unmittelbaren Einfügung vor dem [`document.currentScript`](/de/docs/Web/API/Document/currentScript)-Element als Kinder des {{HTMLElement("head")}}-Tags ein.

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

Das folgende Beispiel zeigt, wie die Unterstützung für Module überprüft wird, wobei die Existenz des `noModule`-Attributs als Fallback verwendet wird.

```js
function checkModuleSupport() {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }
  return "noModule" in document.createElement("script");
}
```

Klassische Skripte werden angenommen, von allen Browsern unterstützt zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-{{HTMLElement("script")}}-Element
- HTML-{{HTMLElement("noscript")}}-Element
- [`document.currentScript`](/de/docs/Web/API/Document/currentScript)
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) (Codebeispiele ähnlich wie Skripte, aber in [einem anderen globalen Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) ausgeführt)
