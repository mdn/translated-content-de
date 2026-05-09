---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("HTML DOM")}}

HTML-{{HTMLElement("script")}}-Elemente bieten das **`HTMLScriptElement`**-Interface, das spezielle Eigenschaften und Methoden zum Manipulieren des Verhaltens und der Ausführung von `<script>`-Elementen bereitstellt (über das geerbte [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface hinaus).

JavaScript-Dateien sollten mit dem `text/javascript`- [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) bereitgestellt werden. Browser sind jedoch nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), Videotyp (`video/*`), Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird. Wenn das Skript blockiert wird, erhält sein Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis; andernfalls erhält es ein [`load`](/de/docs/Web/API/Window/load_event)-Ereignis.

> [!NOTE]
> Wenn sie mit der Methode [`Document.write()`](/de/docs/Web/API/Document/write) eingefügt wird, führen {{HTMLElement("script")}}-Elemente synchron aus. Wenn sie jedoch mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) eingefügt werden, führen sie überhaupt nicht aus.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc) {{securecontext_inline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/script#attributionsrc)-Attribut eines {{htmlelement("script")}}-Elements programmgesteuert ab und setzt es. `attributionsrc` gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanforderung senden soll. Serverseitig dient dies dazu, das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) bzw. einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren.
- [`HTMLScriptElement.async`](/de/docs/Web/API/HTMLScriptElement/async)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte, wenn die `async`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript parallel zum Parsen abgerufen und so bald wie möglich ausgewertet. Für [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules), wenn die `async`-Eigenschaft auf `true` gesetzt ist, werden das Skript und alle seine Abhängigkeiten parallel zum Parsen abgerufen und so bald wie möglich ausgewertet.
- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking)
  - : Ein String, der angibt, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Er widerspiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements.
- `HTMLScriptElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichenkodierung eines externen Skripts darstellt. Er widerspiegelt das [`charset`](/de/docs/Web/HTML/Reference/Elements/script#charset)-Attribut.
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für das Skriptelement widerspiegelt. Für klassische Skripte von anderen {{Glossary("Origin", "Herkünften")}} steuert dies, ob Fehlerinformationen angezeigt werden.
- [`HTMLScriptElement.defer`](/de/docs/Web/API/HTMLScriptElement/defer)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte, wenn die `defer`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript nach dem Parsen des Dokuments, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses ausgeführt. Für [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules) hat die `defer`-Eigenschaft keine Auswirkung.
- `HTMLScriptElement.event` {{deprecated_inline}}
  - : Ein String; eine veraltete Methode zum Registrieren von Ereignishandlern für Elemente in einem HTML-Dokument.
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
  - : Ein optionales String, das dem Browser einen Hinweis gibt, wie das Abrufen eines externen Skripts im Verhältnis zu anderen externen Skripten priorisiert werden sollte. Wenn dieser Wert angegeben wird, muss er einer der erlaubten Werte sein: `high`, um mit hoher Priorität abzurufen, `low`, um mit niedriger Priorität abzurufen, oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Er widerspiegelt das `fetchpriority`-Attribut des {{HTMLElement("script")}}-Elements.
- [`HTMLScriptElement.innerText`](/de/docs/Web/API/HTMLScriptElement/innerText)
  - : Eine Eigenschaft, die den Inline-Textinhalt des {{HTMLElement("script")}}-Elements als gerenderten Text darstellt. Die Eigenschaft akzeptiert entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder einen String.
- [`HTMLScriptElement.integrity`](/de/docs/Web/API/HTMLScriptElement/integrity)
  - : Ein String, der Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, dass eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Er widerspiegelt das `integrity`-Attribut des {{HTMLElement("script")}}-Elements.
- [`HTMLScriptElement.noModule`](/de/docs/Web/API/HTMLScriptElement/noModule)
  - : Ein boolescher Wert, der, wenn er auf `true` gesetzt ist, die Ausführung des Skripts in Browsern verhindert, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen — verwendet, um Fallback-Skripte in älteren Browsern auszuführen, die JavaScript-Module _nicht_ unterstützen.
- [`HTMLScriptElement.referrerPolicy`](/de/docs/Web/API/HTMLScriptElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy)-HTML-Attribut widerspiegelt, das angibt, welcher Referrer beim Abrufen des Skripts und der von diesem Skript durchgeführten Abrufe verwendet werden soll.
- [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src)
  - : Ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) oder String, der die URL eines externen Skripts darstellt; dies kann als Alternative zum direkten Einbetten eines Skripts in ein Dokument verwendet werden. Er widerspiegelt das `src`-Attribut des {{HTMLElement("script")}}-Elements.
- [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text)
  - : Eine Eigenschaft, die den Inline-Textinhalt des {{HTMLElement("script")}}-Elements darstellt. Die Eigenschaft akzeptiert entweder ein [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekt oder einen String. Sie verhält sich genauso wie die [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)-Eigenschaft.
- [`HTMLScriptElement.textContent`](/de/docs/Web/API/HTMLScriptElement/textContent)
  - : Eine Eigenschaft, die den Inline-Textinhalt des {{HTMLElement("script")}}-Elements darstellt. Die Eigenschaft wird von [`Node`](/de/docs/Web/API/Node/textContent) neu definiert, um [`TrustedScript`](/de/docs/Web/API/TrustedScript) als Eingabe zu unterstützen. Auf diesem Element verhält sie sich genau wie die [`text`](/de/docs/Web/API/HTMLScriptElement/text)-Eigenschaft.
- [`HTMLScriptElement.type`](/de/docs/Web/API/HTMLScriptElement/type)
  - : Ein String, der den Typ des Skripts darstellt. Er widerspiegelt das `type`-Attribut des {{HTMLElement("script")}}-Elements.

## Statische Methoden

- [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static)
  - : Gibt `true` zurück, wenn der Browser Skripte des angegebenen Typs unterstützt, andernfalls `false`. Diese Methode bietet eine einfache und einheitliche Methode zur Erkennung von Skript-bezogenen Funktionen.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Ereignisse von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

### Dynamisches Importieren von Skripten

Erstellen wir eine Funktion, die neue Skripte in ein Dokument importiert, indem ein {{HTMLElement("script")}}-Knoten _unmittelbar vor_ dem {{HTMLElement("script")}}, das den folgenden Code hostet (durch [`document.currentScript`](/de/docs/Web/API/Document/currentScript)), erstellt wird. Diese Skripte werden **asynchron** ausgeführt. Für weitere Details siehe die Eigenschaften [`defer`](/de/docs/Web/API/HTMLScriptElement/defer) und [`async`](/de/docs/Web/API/HTMLScriptElement/async).

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

Diese nächste Funktion fügt stattdessen die neuen Skripte als Kinder des {{HTMLElement("head")}}-Tags hinzu, anstatt sie unmittelbar vor dem [`document.currentScript`](/de/docs/Web/API/Document/currentScript)-Element einzufügen.

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

[`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) bietet einen einheitlichen Mechanismus zur Überprüfung, ob ein Browser bestimmte Skripttypen unterstützt.

Das folgende Beispiel zeigt, wie man die Unterstützung von Modulen überprüft, wobei die Existenz des `noModule`-Attributs als Fallback verwendet wird.

```js
function checkModuleSupport() {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }
  return "noModule" in document.createElement("script");
}
```

Klassische Skripte werden von allen Browsern angenommen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-{{HTMLElement("script")}}-Element
- HTML-{{HTMLElement("noscript")}}-Element
- [`document.currentScript`](/de/docs/Web/API/Document/currentScript)
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) (Code-Snippets ähnlich zu Skripten, aber ausgeführt in [einem anderen globalen Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope))
