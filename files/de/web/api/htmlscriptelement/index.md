---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("HTML DOM")}}

HTML-{{HTMLElement("script")}}-Elemente geben die **`HTMLScriptElement`**-Schnittstelle frei, die spezielle Eigenschaften und Methoden zum Manipulieren des Verhaltens und der Ausführung von `<script>`-Elementen bereitstellt (über die vom [`HTMLElement`](/de/docs/Web/API/HTMLElement) geerbte Schnittstelle hinaus).

JavaScript-Dateien sollten mit dem `text/javascript` [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) bereitgestellt werden. Browser sind jedoch nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), Videotyp (`video/*`), Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird. Wenn das Skript blockiert wird, erhält sein Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis; andernfalls erhält es ein [`load`](/de/docs/Web/API/Window/load_event)-Ereignis.

> [!NOTE]
> Wenn sie mit der Methode [`Document.write()`](/de/docs/Web/API/Document/write) eingefügt werden, führen {{HTMLElement("script")}}-Elemente (typischerweise synchron) aus, aber wenn sie mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) eingefügt werden, führen sie überhaupt nicht aus.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Stellt das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/script#attributionsrc)-Attribut auf einem {{htmlelement("script")}}-Element programmatisch ein und ab, wobei der Wert dieses Attributs widergespiegelt wird. `attributionsrc` gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header mit der Skriptressourcenanforderung senden soll. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren.
- [`HTMLScriptElement.async`](/de/docs/Web/API/HTMLScriptElement/async)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Bei klassischen Skripten, wenn die `async`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript parallel zum Parsen abgerufen und so schnell wie möglich ausgewertet. Bei [Modul-Skripten](/de/docs/Web/JavaScript/Guide/Modules), wenn die `async`-Eigenschaft auf `true` gesetzt ist, werden das Skript und alle seine Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.
- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking)
  - : Ein String, der angibt, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Er spiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements wider.
- `HTMLScriptElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichencodierung eines externen Skripts darstellt. Er spiegelt das [`charset`](/de/docs/Web/HTML/Reference/Elements/script#charset)-Attribut wider.
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für das Skript-Element widerspiegelt. Für klassische Skripte aus anderen {{Glossary("Origin", "Herkünften")}} wird damit gesteuert, ob Fehlermeldungen offengelegt werden.
- [`HTMLScriptElement.defer`](/de/docs/Web/API/HTMLScriptElement/defer)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Bei klassischen Skripten, wenn die `defer`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript ausgeführt, nachdem das Dokument geparst wurde, aber bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird. Bei [Modul-Skripten](/de/docs/Web/JavaScript/Guide/Modules) hat die `defer`-Eigenschaft keine Wirkung.
- `HTMLScriptElement.event` {{deprecated_inline}}
  - : Ein String; eine veraltete Methode zur Registrierung von Ereignishandlern an Elementen in einem HTML-Dokument.
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie er das Abrufen eines externen Skripts im Vergleich zu anderen externen Skripten priorisieren soll. Wenn dieser Wert angegeben ist, muss er einer der zulässigen Werte sein: `high`, um mit hoher Priorität abzurufen, `low`, um mit niedriger Priorität abzurufen, oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Er spiegelt das `fetchpriority`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.innerText`](/de/docs/Web/API/HTMLScriptElement/innerText)
  - : Eine Eigenschaft, die den Inline-Textinhalt des {{HTMLElement("script")}}-Elements so darstellt, als wäre er gerenderten Text.
    Die Eigenschaft akzeptiert entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder einen String.
- [`HTMLScriptElement.integrity`](/de/docs/Web/API/HTMLScriptElement/integrity)
  - : Ein String, der Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation bereitgestellt wurde. Er spiegelt das `integrity`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.noModule`](/de/docs/Web/API/HTMLScriptElement/noModule)
  - : Ein boolescher Wert, der, wenn er wahr ist, die Ausführung des Skripts in Browsern stoppt, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen — verwendet, um Fallback-Skripte in älteren Browsern auszuführen, die JavaScript-Module _nicht_ unterstützen.
- [`HTMLScriptElement.referrerPolicy`](/de/docs/Web/API/HTMLScriptElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy)-HTML-Attribut widerspiegelt, das angibt, welcher Referrer beim Abrufen des Skripts und von diesem Skript ausgeführten Abrufen verwendet werden soll.
- [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src)
  - : Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) oder String, der die URL eines externen Skripts darstellt; dies kann als Alternative zur direkten Einbettung eines Skripts in ein Dokument verwendet werden.
    Er spiegelt das `src`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text)
  - : Eine Eigenschaft, die den Inline-Textinhalt des {{HTMLElement("script")}}-Elements darstellt.
    Die Eigenschaft akzeptiert entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder einen String.
    Sie verhält sich genauso wie die [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)-Eigenschaft.
- [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)
  - : Eine Eigenschaft, die den Inline-Textinhalt des {{HTMLElement("script")}}-Elements darstellt.
    Die Eigenschaft ist aus [`Node`](/de/docs/Web/API/Node/textContent) neu definiert, um [`TrustedScript`](/de/docs/Web/API/TrustedScript) als Eingabe zu unterstützen.
    An diesem Element verhält sie sich exakt wie die [`text`](/de/docs/Web/API/HTMLScriptElement/text)-Eigenschaft.
- [`HTMLScriptElement.type`](/de/docs/Web/API/HTMLScriptElement/type)
  - : Ein String, der den Typ des Skripts darstellt.
    Er spiegelt das `type`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Statische Methoden

- [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static)
  - : Gibt `true` zurück, wenn der Browser Skripte des angegebenen Typs unterstützt, andernfalls `false`.
    Diese Methode bietet eine einfache und einheitliche Methode zur Skript-bezogenen Feature-Erkennung.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

### Dynamisches Importieren von Skripten

Lassen Sie uns eine Funktion erstellen, die neue Skripte innerhalb eines Dokuments importiert, indem sie einen {{HTMLElement("script")}}-Knoten _unmittelbar vor_ dem {{HTMLElement("script")}}, das den folgenden Code (durch [`document.currentScript`](/de/docs/Web/API/Document/currentScript)) hostet, erstellt.
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

Diese nächste Funktion hängt neue Skripte, anstatt sie unmittelbar vor dem [`document.currentScript`](/de/docs/Web/API/Document/currentScript)-Element einzufügen, als Kinder des {{HTMLElement("head")}}-Tags an.

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

Beispielhafte Nutzung:

```js
affixScriptToHead("myScript1.js");
affixScriptToHead("myScript2.js", () => {
  alert('The script "myScript2.js" has been correctly loaded.');
});
```

### Überprüfen, ob ein Skripttyp unterstützt wird

[`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) bietet einen einheitlichen Mechanismus zur Überprüfung, ob ein Browser bestimmte Skripttypen unterstützt.

Das folgende Beispiel zeigt, wie die Modulsupport überprüft wird, indem die Existenz des `noModule`-Attributs als Fallback verwendet wird.

```js
function checkModuleSupport() {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }
  return "noModule" in document.createElement("script");
}
```

Klassische Skripte werden in allen Browsern als unterstützt angenommen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("script")}}-Element
- HTML {{HTMLElement("noscript")}}-Element
- [`document.currentScript`](/de/docs/Web/API/Document/currentScript)
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) (Code-Snippets ähnlich zu Skripten, jedoch in [einem anderen globalen Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) ausgeführt)
