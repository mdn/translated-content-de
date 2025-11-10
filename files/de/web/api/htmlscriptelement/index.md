---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

{{APIRef("HTML DOM")}}

HTML {{HTMLElement("script")}}-Elemente stellen die **`HTMLScriptElement`**-Schnittstelle zur Verfügung, die spezielle Eigenschaften und Methoden zum Manipulieren des Verhaltens und der Ausführung von `<script>`-Elementen bietet (über die geerbte [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle hinaus).

JavaScript-Dateien sollten mit dem `text/javascript` [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) bereitgestellt werden, aber Browser sind tolerant und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), Videotyp (`video/*`), Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird. Wenn das Skript blockiert wird, erhält sein Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis; andernfalls erhält es ein [`load`](/de/docs/Web/API/Window/load_event)-Ereignis.

> [!NOTE]
> Wenn {{HTMLElement("script")}}-Elemente mit der Methode [`Document.write()`](/de/docs/Web/API/Document/write) eingefügt werden, werden sie (normalerweise synchron) ausgeführt, aber wenn sie mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) eingefügt werden, werden sie überhaupt nicht ausgeführt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/script#attributionsrc)-Attribut an einem {{htmlelement("script")}}-Element ab und setzt dieses programmatisch und spiegelt den Wert dieses Attributs wider. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcen-Anfrage sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren.
- [`HTMLScriptElement.async`](/de/docs/Web/API/HTMLScriptElement/async)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte wird, wenn die `async`-Eigenschaft auf `true` gesetzt ist, das externe Skript parallel zum Parsen abgerufen und evaluiert, sobald es verfügbar ist. Für [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) wird, wenn die `async`-Eigenschaft auf `true` gesetzt ist, das Skript und alle Abhängigkeiten parallel zum Parsen abgerufen und evaluiert, sobald sie verfügbar sind.
- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking)
  - : Ein String, der angibt, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Es spiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements wider.
- `HTMLScriptElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichencodierung eines externen Skriptes darstellt. Es spiegelt das [`charset`](/de/docs/Web/HTML/Reference/Elements/script#charset)-Attribut wider.
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für das Skriptelement widerspiegelt. Für klassische Skripte von anderen {{Glossary("Origin", "Herkünften")}} steuert dies, ob Fehlerinformationen offengelegt werden.
- [`HTMLScriptElement.defer`](/de/docs/Web/API/HTMLScriptElement/defer)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte, wenn die `defer`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt. Für [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) hat die `defer`-Eigenschaft keinen Effekt.
- `HTMLScriptElement.event` {{deprecated_inline}}
  - : Ein String; eine veraltete Methode zur Registrierung von Ereignis-Handlern in Elementen eines HTML-Dokuments.
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis gibt, wie er das Abrufen eines externen Skripts im Verhältnis zu anderen externen Skripten priorisieren soll. Wenn dieser Wert angegeben wird, muss er einer der möglichen zulässigen Werte sein: `high` für eine hohe Priorität, `low` für eine niedrige Priorität oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Es spiegelt das `fetchpriority`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.innerText`](/de/docs/Web/API/HTMLScriptElement/innerText)
  - : Eine Eigenschaft, die den Inline-Textinhalt des {{HTMLElement("script")}}-Elements so darstellt, als ob er gerendert wäre.
    Die Eigenschaft akzeptiert entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder einen String.
- [`HTMLScriptElement.integrity`](/de/docs/Web/API/HTMLScriptElement/integrity)
  - : Ein String, der inline Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Es spiegelt das `integrity`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.noModule`](/de/docs/Web/API/HTMLScriptElement/noModule)
  - : Ein boolescher Wert, der, wenn er wahr ist, die Skriptausführung in Browsern stoppt, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen — verwendet, um Fallback-Skripte in älteren Browsern auszuführen, die _keine_ JavaScript-Module unterstützen.
- [`HTMLScriptElement.referrerPolicy`](/de/docs/Web/API/HTMLScriptElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy)-HTML-Attribut widerspiegelt, das angibt, welcher Referrer beim Abrufen des Skripts und bei von diesem Skript durchgeführten Abrufen verwendet werden soll.
- [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src)
  - : Ein String, der die URL eines externen Skripts darstellt; dies kann als Alternative zum direkten Einbetten eines Skripts in ein Dokument verwendet werden.
    Es spiegelt das `src`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text)
  - : Eine Eigenschaft, die den Inline-Textinhalt des {{HTMLElement("script")}}-Elements darstellt.
    Die Eigenschaft akzeptiert entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder einen String.
    Es verhält sich genauso wie die [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)-Eigenschaft.
- [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)
  - : Eine Eigenschaft, die den Inline-Textinhalt des {{HTMLElement("script")}}-Elements darstellt.
    Die Eigenschaft wird von [`Node`](/de/docs/Web/API/Node/textContent) neu definiert, um [`TrustedScript`](/de/docs/Web/API/TrustedScript) als Eingabe zu unterstützen.
    Bei diesem Element verhält es sich genau wie die [`text`](/de/docs/Web/API/HTMLScriptElement/text)-Eigenschaft.
- [`HTMLScriptElement.type`](/de/docs/Web/API/HTMLScriptElement/type)
  - : Ein String, der den Typ des Skripts darstellt.
    Es spiegelt das `type`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Statische Methoden

- [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static)
  - : Gibt `true` zurück, wenn der Browser Skripte des angegebenen Typs unterstützt, und `false`, andernfalls.
    Diese Methode bietet eine einfache und einheitliche Methode zur Skript-bezogenen Feature-Erkennung.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

### Dynamisches Importieren von Skripten

Lassen Sie uns eine Funktion erstellen, die neue Skripte in ein Dokument importiert, indem sie einen {{HTMLElement("script")}}-Knoten _unmittelbar vor_ dem {{HTMLElement("script")}}, das den folgenden Code beherbergt, erstellt (durch [`document.currentScript`](/de/docs/Web/API/Document/currentScript)).
Diese Skripte werden **asynchron** ausgeführt.
Für weitere Details siehe die [`defer`](/de/docs/Web/API/HTMLScriptElement/defer) und [`async`](/de/docs/Web/API/HTMLScriptElement/async)-Eigenschaften.

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

Diese nächste Funktion fügt die neuen Skripte statt vor dem [`document.currentScript`](/de/docs/Web/API/Document/currentScript)-Element als Kinder des {{HTMLElement("head")}}-Tags an.

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

[`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) bietet einen einheitlichen Mechanismus, um zu überprüfen, ob ein Browser bestimmte Arten von Skripten unterstützt.

Das folgende Beispiel zeigt, wie Sie die Unterstützung für Module überprüfen, indem das Vorhandensein des `noModule`-Attributs als Fallback verwendet wird.

```js
function checkModuleSupport() {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }
  return "noModule" in document.createElement("script");
}
```

Klassische Skripte gelten als in allen Browsern unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("script")}}-Element
- HTML {{HTMLElement("noscript")}}-Element
- [`document.currentScript`](/de/docs/Web/API/Document/currentScript)
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) (Code-Snippets ähnlich wie Skripte, werden jedoch in [einem anderen globalen Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) ausgeführt)
