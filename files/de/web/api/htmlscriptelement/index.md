---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("HTML DOM")}}

HTML-{{HTMLElement("script")}}-Elemente nutzten die **`HTMLScriptElement`**-Schnittstelle, die spezielle Eigenschaften und Methoden für die Manipulation des Verhaltens und der Ausführung von `<script>`-Elementen bereitstellt (über die geerbte [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle hinaus).

JavaScript-Dateien sollten mit dem `text/javascript`- [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), Videotyp (`video/*`), Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird. Wenn das Skript blockiert wird, erhält sein Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis; andernfalls erhält es ein [`load`](/de/docs/Web/API/Window/load_event)-Ereignis.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Element/script#attributionsrc)-Attribut eines {{htmlelement("script")}}-Elements ab und legt es programmgesteuert fest, wodurch der Wert dieses Attributs widergespiegelt wird. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanfrage sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) entsprechend zu registrieren.
- [`HTMLScriptElement.async`](/de/docs/Web/API/HTMLScriptElement/async)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte wird das externe Skript parallel zum Parsen abgerufen und so schnell wie möglich ausgeführt, wenn die `async`-Eigenschaft auf `true` gesetzt ist. Für [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules) werden das Skript und alle seine Abhängigkeiten parallel zum Parsen abgerufen und so schnell wie möglich ausgeführt, wenn die `async`-Eigenschaft auf `true` gesetzt ist.
- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking)
  - : Ein Zeichenfolgenwert, der angibt, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Er spiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements wider.
- `HTMLScriptElement.charset` {{deprecated_inline}}
  - : Eine Zeichenfolge, die die Zeichenkodierung eines externen Skripts darstellt. Sie spiegelt das [`charset`](/de/docs/Web/HTML/Element/script#charset)-Attribut wider.
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
  - : Eine Zeichenfolge, die die [CORS-Einstellung](/de/docs/Web/HTML/Attributes/crossorigin) für das Skriptelement widergibt. Für klassische Skripte aus anderen {{Glossary("Origin", "Ursprüngen")}} wird dadurch gesteuert, ob Fehlerinformationen offengelegt werden.
- [`HTMLScriptElement.defer`](/de/docs/Web/API/HTMLScriptElement/defer)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte wird das externe Skript ausgeführt, nachdem das Dokument analysiert wurde, aber vor dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses, wenn die `defer`-Eigenschaft auf `true` gesetzt ist. Für [Modulskripte](/de/docs/Web/JavaScript/Guide/Modules) hat die `defer`-Eigenschaft keine Wirkung.
- `HTMLScriptElement.event` {{deprecated_inline}}
  - : Eine Zeichenfolge; eine veraltete Methode zum Registrieren von Ereignishandlern für Elemente in einem HTML-Dokument.
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
  - : Eine optionale Zeichenfolge, die dem Browser einen Hinweis darauf gibt, wie das Abrufen eines externen Skripts im Vergleich zu anderen externen Skripten priorisiert werden soll. Wenn dieser Wert bereitgestellt wird, muss er einer der zulässigen Werte sein: `high`, um mit hoher Priorität abzurufen, `low`, um mit niedriger Priorität abzurufen, oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Sie spiegelt das `fetchpriority`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.integrity`](/de/docs/Web/API/HTMLScriptElement/integrity)
  - : Eine Zeichenfolge, die Inline-Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Sie spiegelt das `integrity`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.noModule`](/de/docs/Web/API/HTMLScriptElement/noModule)
  - : Ein boolescher Wert, der, wenn er wahr ist, die Ausführung des Skripts in Browsern stoppt, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen — verwendet, um Fallback-Skripte in älteren Browsern ohne JavaScript-Modulunterstützung zu starten.
- [`HTMLScriptElement.referrerPolicy`](/de/docs/Web/API/HTMLScriptElement/referrerPolicy)
  - : Eine Zeichenfolge, die das [`referrerPolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy)-HTML-Attribut widerspiegelt. Dieses gibt an, welcher Referrer beim Abrufen des Skripts und von diesem Skript durchgeführten Abrufen verwendet werden soll.
- [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src)
  - : Eine Zeichenfolge, die die URL eines externen Skripts darstellt; dies kann als Alternative zur direkten Einbettung eines Skripts in ein Dokument verwendet werden. Sie spiegelt das `src`-Attribut des {{HTMLElement("script")}}-Elements wider.
- [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text)

  - : Eine Zeichenfolge, die den Inhalt aller [`Text`](/de/docs/Web/API/Text)-Knoten innerhalb des {{HTMLElement("script")}}-Elements (ignorierend andere Knoten wie Kommentare) in Baumreihenfolge verbindet und zurückgibt. Beim Setzen verhält sie sich genauso wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft.

    > [!NOTE]
    > Wenn durch die [`Document.write()`](/de/docs/Web/API/Document/write)-Methode eingefügt, werden {{HTMLElement("script")}}-Elemente (typischerweise synchron) ausgeführt, jedoch nicht, wenn sie durch [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) eingefügt werden.

- [`HTMLScriptElement.type`](/de/docs/Web/API/HTMLScriptElement/type)
  - : Eine Zeichenfolge, die den Typ des Skripts darstellt. Sie spiegelt das `type`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Statische Methoden

- [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static)
  - : Gibt `true` zurück, wenn der Browser Skripte des angegebenen Typs unterstützt, und `false` andernfalls.
    Diese Methode bietet eine einfache und einheitliche Methode zur skriptbezogenen Funktionsprüfung.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Ereignisse von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

### Dynamisches Importieren von Skripten

Lassen Sie uns eine Funktion erstellen, die neue Skripte in ein Dokument importiert, indem ein {{HTMLElement("script")}}-Knoten _unmittelbar vor_ dem {{HTMLElement("script")}}, das den folgenden Code hostet (durch [`document.currentScript`](/de/docs/Web/API/Document/currentScript)), erzeugt wird.
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

Diese nächste Funktion hängt, anstatt die neuen Skripte direkt vor dem [`document.currentScript`](/de/docs/Web/API/Document/currentScript)-Element einzufügen, diese als Kinder des {{HTMLElement("head")}}-Tags an.

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

Das untenstehende Beispiel zeigt, wie die Unterstützung von Modulen überprüft werden kann, indem die Existenz des `noModule`-Attributs als Fallback verwendet wird.

```js
function checkModuleSupport() {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }
  return "noModule" in document.createElement("script");
}
```

Klassische Skripte werden auf allen Browsern als unterstützt angesehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("script")}}-Element
- HTML {{HTMLElement("noscript")}}-Element
- [`document.currentScript`](/de/docs/Web/API/Document/currentScript)
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) (Code-Snippets ähnlich Skripten, aber ausgeführt in [einem anderen globalen Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope))
