---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{APIRef("HTML DOM")}}

HTML-Elemente {{HTMLElement("script")}} legen die **`HTMLScriptElement`**-Schnittstelle offen, die spezielle Eigenschaften und Methoden zum Manipulieren des Verhaltens und der Ausführung von `<script>`-Elementen bietet (zusätzlich zur geerbten [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle).

JavaScript-Dateien sollten mit dem `text/javascript` [MIME-Typ](/de/docs/Web/HTTP/MIME_types) bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), Videotyp (`video/*`), Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird. Wenn das Skript blockiert wird, erhält sein Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis; andernfalls erhält es ein [`load`](/de/docs/Web/API/Window/load_event)-Ereignis.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das `attributionsrc`-Attribut eines {{htmlelement("script")}}-Elements programmgesteuert ab und setzt es, wodurch der Wert dieses Attributs wiedergespiegelt wird. `attributionsrc` gibt an, dass Sie den Browser anweisen möchten, einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptanforderung zu senden. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren.
- [`HTMLScriptElement.async`](/de/docs/Web/API/HTMLScriptElement/async)
  - : Ein Boolean-Wert, der steuert, wie das Skript ausgeführt werden soll. Bei klassischen Skripten, wenn die `async`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript parallel zum Parsen abgerufen und ausgewertet, sobald es verfügbar ist. Bei [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules), wenn die `async`-Eigenschaft auf `true` gesetzt ist, werden das Skript und alle ihre Abhängigkeiten parallel zum Parsen abgerufen und ausgewertet, sobald sie verfügbar sind.
- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking)
  - : Ein String, der angibt, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Er spiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements wider.
- `HTMLScriptElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichenkodierung eines externen Skripts darstellt. Er spiegelt das [`charset`](/de/docs/Web/HTML/Element/script#charset)-Attribut wider.
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Attributes/crossorigin) für das Skriptelement widerspiegelt. Bei klassischen Skripten von anderen {{Glossary("Origin", "Ursprüngen")}} steuert dies, ob Fehlerinformationen offengelegt werden.
- [`HTMLScriptElement.defer`](/de/docs/Web/API/HTMLScriptElement/defer)
  - : Ein Boolean-Wert, der steuert, wie das Skript ausgeführt werden soll. Bei klassischen Skripten, wenn die `defer`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript nach dem Parsen des Dokuments ausgeführt, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses. Bei [Modulscripten](/de/docs/Web/JavaScript/Guide/Modules) hat die `defer`-Eigenschaft keine Auswirkungen.
- `HTMLScriptElement.event` {{deprecated_inline}}
  - : Ein String; eine veraltete Methode zum Registrieren von Ereignishandlern auf Elementen in einem HTML-Dokument.
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis darauf gibt, wie das Abrufen eines externen Skripts im Verhältnis zu anderen externen Skripten priorisiert werden soll. Wenn dieser Wert angegeben wird, muss er einer der möglichen erlaubten Werte sein: `high` für hohe Priorität, `low` für niedrige Priorität oder `auto` für keine Präferenz (was der Standard ist). Er spiegelt das `fetchpriority`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.integrity`](/de/docs/Web/API/HTMLScriptElement/integrity)
  - : Ein String, der Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Er spiegelt das `integrity`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.noModule`](/de/docs/Web/API/HTMLScriptElement/noModule)
  - : Ein Boolean-Wert, der, wenn `true`, die Ausführung des Skripts in Browsern stoppt, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen — verwendet, um Fallback-Skripte in älteren Browsern auszuführen, die JavaScript-Module _nicht_ unterstützen.
- [`HTMLScriptElement.referrerPolicy`](/de/docs/Web/API/HTMLScriptElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy) HTML-Attribut widerspiegelt, das angibt, welchen Referrer beim Abrufen des Skripts und durch das Skript durchgeführte Abrufe verwendet werden soll.
- [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src)
  - : Ein String, der die URL eines externen Skripts darstellt; dies kann anstelle der direkten Einbettung eines Skripts in ein Dokument verwendet werden. Er spiegelt das `src`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text)

  - : Ein String, der die Inhalte von allen [`Text`](/de/docs/Web/API/Text)-Knoten innerhalb des {{HTMLElement("script")}}-Elements in Baumreihenfolge verbindet und zurückgibt (andere Knoten wie Kommentare werden ignoriert). Bei der Einstellung wirkt es genauso wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft.

    > [!NOTE]
    > Wenn sie mit der Methode [`Document.write()`](/de/docs/Web/API/Document/write) eingefügt werden, führen sich {{HTMLElement("script")}}-Elemente aus (typischerweise synchron), aber wenn sie mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) eingefügt werden, führen sie sich überhaupt nicht aus.

- [`HTMLScriptElement.type`](/de/docs/Web/API/HTMLScriptElement/type)
  - : Ein String, der den Typ des Skripts darstellt. Er spiegelt das `type`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Statische Methoden

- [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static)
  - : Gibt `true` zurück, wenn der Browser Skripte des angegebenen Typs unterstützt, und `false` andernfalls.
    Diese Methode bietet eine einfache und einheitliche Methode zur Feature-Erkennung in Bezug auf Skripte.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

### Dynamisches Importieren von Skripten

Lassen Sie uns eine Funktion erstellen, die neue Skripte innerhalb eines Dokuments importiert, indem ein {{HTMLElement("script")}}-Knoten _unmittelbar vor_ dem {{HTMLElement("script")}} hinzugefügt wird, das den folgenden Code hostet (über [`document.currentScript`](/de/docs/Web/API/Document/currentScript)).
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

Die nächste Funktion, anstatt die neuen Skripte unmittelbar vor dem [`document.currentScript`](/de/docs/Web/API/Document/currentScript) Element voranzustellen, hängt sie als Kinder des {{HTMLElement("head")}}-Tags an.

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

Beispielanwendung:

```js
affixScriptToHead("myScript1.js");
affixScriptToHead("myScript2.js", () => {
  alert('The script "myScript2.js" has been correctly loaded.');
});
```

### Überprüfen, ob ein Skripttyp unterstützt wird

[`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) bietet einen einheitlichen Mechanismus, um zu überprüfen, ob ein Browser bestimmte Skripttypen unterstützt.

Das folgende Beispiel zeigt, wie man die Modulunterstützung überprüft, unter Verwendung der Existenz des `noModule`-Attributs als Fallback.

```js
function checkModuleSupport() {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }
  return "noModule" in document.createElement("script");
}
```

Es wird angenommen, dass klassische Skripte von allen Browsern unterstützt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("script")}}-Element
- HTML {{HTMLElement("noscript")}}-Element
- [`document.currentScript`](/de/docs/Web/API/Document/currentScript)
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) (Code-Snippets ähnlich wie Skripte, aber in [einem anderen globalen Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) ausgeführt)
