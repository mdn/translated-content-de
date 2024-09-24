---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{APIRef("HTML DOM")}}

HTML {{HTMLElement("script")}} Elemente stellen das **`HTMLScriptElement`** Interface bereit, welches spezielle Eigenschaften und Methoden zur Verfügung stellt, um das Verhalten und die Ausführung von `<script>` Elementen zu manipulieren (zusätzlich zu den geerbten Eigenschaften des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface).

JavaScript-Dateien sollten mit dem `text/javascript` [MIME-Typ](/de/docs/Web/HTTP/MIME_types) bereitgestellt werden, aber Browser sind nachsichtig und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), Videotyp (`video/*`), Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird. Wenn das Skript blockiert wird, erhält das Element ein [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis; andernfalls erhält es ein [`load`](/de/docs/Web/API/Window/load_event) Ereignis.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Übernimmt Eigenschaften von seinem übergeordneten Objekt, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLScriptElement.attributionSrc`](/de/docs/Web/API/HTMLScriptElement/attributionSrc) {{securecontext_inline}} {{experimental_inline}}
  - : Erhält und setzt das [`attributionsrc`](/de/docs/Web/HTML/Element/script#attributionsrc) Attribut auf einem {{htmlelement("script")}} Element programmatisch und spiegelt den Wert dieses Attributs wider. `attributionsrc` gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Skript-Ressourcenanfrage senden soll. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) entsprechend zu registrieren.
- [`HTMLScriptElement.async`](/de/docs/Web/API/HTMLScriptElement/async)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte, wenn die `async` Eigenschaft auf `true` gesetzt ist, wird das externe Skript parallel zum Parsen abgerufen und bewertet, sobald es verfügbar ist. Für [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules) wird das Skript und alle seine Abhängigkeiten parallel zum Parsen abgerufen und bewertet, sobald sie verfügbar sind.
- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking) {{Experimental_Inline}}
  - : Ein String, der anzeigt, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollten. Er reflektiert das `blocking` Attribut des {{HTMLElement("script")}} Elements.
- `HTMLScriptElement.charset` {{deprecated_inline}}
  - : Ein String, der die Zeichenkodierung eines externen Skripts darstellt. Er spiegelt das [`charset`](/de/docs/Web/HTML/Element/script#charset) Attribut wider.
- [`HTMLScriptElement.crossOrigin`](/de/docs/Web/API/HTMLScriptElement/crossOrigin)
  - : Ein String, der die [CORS-Einstellung](/de/docs/Web/HTML/Attributes/crossorigin) für das Skriptelement reflektiert. Für klassische Skripte aus anderen {{Glossary("Origin", "Ursprüngen")}} steuert dies, ob Fehlermeldungen offengelegt werden.
- [`HTMLScriptElement.defer`](/de/docs/Web/API/HTMLScriptElement/defer)
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte, wenn die `defer` Eigenschaft auf `true` gesetzt ist, wird das externe Skript nach dem Parsen des Dokuments ausgeführt, aber bevor das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis ausgelöst wird. Für [Modul-Skripte](/de/docs/Web/JavaScript/Guide/Modules) hat die `defer` Eigenschaft keine Auswirkung.
- `HTMLScriptElement.event` {{deprecated_inline}}
  - : Ein String; eine veraltete Methode zum Registrieren von Ereignishandlern für Elemente in einem HTML-Dokument.
- [`HTMLScriptElement.fetchPriority`](/de/docs/Web/API/HTMLScriptElement/fetchPriority)
  - : Ein optionaler String, der dem Browser einen Hinweis gibt, wie er das Abrufen eines externen Skripts im Vergleich zu anderen externen Skripten priorisieren soll. Wenn dieser Wert angegeben wird, muss er einer der möglichen zulässigen Werte sein: `high`, um mit hoher Priorität abzurufen, `low`, um mit niedriger Priorität abzurufen, oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Er reflektiert das `fetchpriority` Attribut des {{HTMLElement("script")}} Elements.
- [`HTMLScriptElement.integrity`](/de/docs/Web/API/HTMLScriptElement/integrity)
  - : Ein String, der Inline-Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Er spiegelt das `integrity` Attribut des {{HTMLElement("script")}} Elements wider.
- [`HTMLScriptElement.noModule`](/de/docs/Web/API/HTMLScriptElement/noModule)
  - : Ein boolescher Wert, der, wenn er wahr ist, die Ausführung des Skripts in Browsern, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, stoppt — dient dazu, Ersatzskripte in älteren Browsern auszuführen, die _keine_ JavaScript-Module unterstützen.
- [`HTMLScriptElement.referrerPolicy`](/de/docs/Web/API/HTMLScriptElement/referrerPolicy)
  - : Ein String, der das [`referrerPolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy) HTML-Attribut reflektiert, das angibt, welcher Referrer beim Abrufen des Skripts und der von diesem Skript durchgeführten Abrufe verwendet werden soll.
- [`HTMLScriptElement.src`](/de/docs/Web/API/HTMLScriptElement/src)
  - : Ein String, der die URL eines externen Skripts darstellt; dies kann als Alternative zur direkten Einbettung eines Skripts innerhalb eines Dokuments verwendet werden. Er spiegelt das `src` Attribut des {{HTMLElement("script")}} Elements wider.
- [`HTMLScriptElement.text`](/de/docs/Web/API/HTMLScriptElement/text)

  - : Ein String, der den Inhalt aller [`Text`](/de/docs/Web/API/Text)-Knoten innerhalb des {{HTMLElement("script")}} Elements (unter Ausschluss anderer Knoten wie Kommentare) in Baumreihenfolge zusammenfasst und zurückgibt. Beim Setzen verhält er sich genauso wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft.

    > [!NOTE]
    > Wenn einfügt über die [`Document.write()`](/de/docs/Web/API/Document/write) Methode, werden {{HTMLElement("script")}} Elemente (typischerweise synchron) ausgeführt, aber wenn sie mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) oder [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML) eingefügt werden, werden sie überhaupt nicht ausgeführt.

- [`HTMLScriptElement.type`](/de/docs/Web/API/HTMLScriptElement/type)
  - : Ein String, der den Typ des Skripts darstellt. Er spiegelt das `type` Attribut des {{HTMLElement("script")}} Elements wider.

## Statische Methoden

- [`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static)
  - : Gibt `true` zurück, wenn der Browser Skripte des angegebenen Typs unterstützt, und `false` andernfalls.
    Diese Methode bietet eine einfache und einheitliche Methode zur skriptbezogenen Feature-Erkennung.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seiner übergeordneten Klasse, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Ereignisse von seiner übergeordneten Klasse, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Beispiele

### Dynamisches Importieren von Skripten

Lassen Sie uns eine Funktion erstellen, die neue Skripte in ein Dokument importiert, indem unmittelbar _vor_ dem {{HTMLElement("script")}}, das den folgenden Code hostet (durch [`document.currentScript`](/de/docs/Web/API/Document/currentScript)), ein {{HTMLElement("script")}}-Knoten erstellt wird. Diese Skripte werden **asynchron** ausgeführt. Weitere Details finden Sie in den Eigenschaften [`defer`](/de/docs/Web/API/HTMLScriptElement/defer) und [`async`](/de/docs/Web/API/HTMLScriptElement/async).

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

Diese nächste Funktion hängt die neuen Skripte als Kinder des {{HTMLElement("head")}} Tags an, anstatt sie unmittelbar vor dem [`document.currentScript`](/de/docs/Web/API/Document/currentScript) Element vorzusetzen.

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

Beispielnutzung:

```js
affixScriptToHead("myScript1.js");
affixScriptToHead("myScript2.js", () => {
  alert('The script "myScript2.js" has been correctly loaded.');
});
```

### Überprüfen, ob ein Skripttyp unterstützt wird

[`HTMLScriptElement.supports()`](/de/docs/Web/API/HTMLScriptElement/supports_static) bietet einen einheitlichen Mechanismus, um zu überprüfen, ob ein Browser bestimmte Skripttypen unterstützt.

Das folgende Beispiel zeigt, wie man die Unterstützung von Modulen überprüfen kann, indem das Vorhandensein des `noModule` Attributs als Fallback verwendet wird.

```js
function checkModuleSupport() {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }
  return "noModule" in document.createElement("script");
}
```

Klassische Skripte werden auf allen Browsern als unterstützt angenommen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("script")}} Element
- HTML {{HTMLElement("noscript")}} Element
- [`document.currentScript`](/de/docs/Web/API/Document/currentScript)
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) (Code-Snippets ähnlich wie Skripte, aber in [einem anderen globalen Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) ausgeführt)
