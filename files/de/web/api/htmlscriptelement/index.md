---
title: HTMLScriptElement
slug: Web/API/HTMLScriptElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

HTML-{{HTMLElement("script")}}-Elemente bieten die **`HTMLScriptElement`**-Schnittstelle, die spezielle Eigenschaften und Methoden zum Manipulieren des Verhaltens und der Ausführung von `<script>`-Elementen bereitstellt (über die geerbte {{domxref("HTMLElement")}}-Schnittstelle hinaus).

JavaScript-Dateien sollten mit dem MIME-Typ `text/javascript` bereitgestellt werden, aber Browser sind tolerant und blockieren sie nur, wenn das Skript mit einem Bildtyp (`image/*`), Videotyp (`video/*`), Audiotyp (`audio/*`) oder `text/csv` bereitgestellt wird. Wenn das Skript blockiert wird, erhält sein Element ein {{domxref("HTMLElement/error_event", "error")}}-Ereignis; andernfalls erhält es ein {{domxref("Window/load_event", "load")}}-Ereignis.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLScriptElement.attributionSrc")}} {{securecontext_inline}} {{experimental_inline}}
  - : Ruft das [`attributionsrc`](/de/docs/Web/HTML/Element/script#attributionsrc)-Attribut eines {{htmlelement("script")}}-Elements programmatisch ab und setzt es, wobei der Wert dieses Attributs widergespiegelt wird. `attributionsrc` gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanfrage senden soll. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren.
- {{domxref("HTMLScriptElement.async")}}
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte, wenn die `async`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript parallel zum Parsen abgerufen und so schnell wie möglich ausgewertet. Für [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules), wenn die `async`-Eigenschaft auf `true` gesetzt ist, werden das Skript und alle Abhängigkeiten parallel zum Parsen abgerufen und so schnell wie möglich ausgewertet.
- {{domxref("HTMLScriptElement.blocking")}} {{Experimental_Inline}}
  - : Ein Zeichenfolgenwert, der angibt, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen. Es spiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements wider.
- `HTMLScriptElement.charset` {{deprecated_inline}}
  - : Ein Zeichenfolgenwert, der die Zeichenkodierung eines externen Skripts darstellt. Es spiegelt das [`charset`](/de/docs/Web/HTML/Element/script#charset)-Attribut wider.
- {{domxref("HTMLScriptElement.crossOrigin")}}
  - : Ein Zeichenfolgenwert, der die [CORS-Einstellungen](/de/docs/Web/HTML/Attributes/crossorigin) für das Skriptelement widerspiegelt. Für klassische Skripte aus anderen [Ursprüngen](/de/docs/Glossary/Origin) steuert dies, ob Fehlermeldungen angezeigt werden.
- {{domxref("HTMLScriptElement.defer")}}
  - : Ein boolescher Wert, der steuert, wie das Skript ausgeführt werden soll. Für klassische Skripte, wenn die `defer`-Eigenschaft auf `true` gesetzt ist, wird das externe Skript ausgeführt, nachdem das Dokument geparst wurde, aber bevor das {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}-Ereignis ausgelöst wird. Für [Modulscripte](/de/docs/Web/JavaScript/Guide/Modules) hat die `defer`-Eigenschaft keine Wirkung.
- `HTMLScriptElement.event` {{deprecated_inline}}
  - : Eine Zeichenfolge; eine veraltete Möglichkeit, Ereignishandler auf Elementen in einem HTML-Dokument zu registrieren.
- {{domxref("HTMLScriptElement.fetchPriority")}}
  - : Eine optionale Zeichenfolge, die dem Browser einen Hinweis gibt, wie er das Abrufen eines externen Skripts im Verhältnis zu anderen externen Skripten priorisieren sollte. Wenn dieser Wert angegeben wird, muss er einer der möglichen zulässigen Werte sein: `high` für hohe Priorität, `low` für niedrige Priorität oder `auto`, um keine Präferenz anzugeben (was der Standard ist). Es spiegelt das `fetchpriority`-Attribut des {{HTMLElement("script")}}-Elements wider.
- {{domxref("HTMLScriptElement.integrity")}}
  - : Eine Zeichenfolge, die inline Metadaten enthält, die ein Browser verwenden kann, um zu überprüfen, ob eine abgerufene Ressource ohne unerwartete Manipulation bereitgestellt wurde. Es spiegelt das `integrity`-Attribut des {{HTMLElement("script")}}-Elements wider.
- {{domxref("HTMLScriptElement.noModule")}}
  - : Ein boolescher Wert, der, wenn er wahr ist, die Ausführung des Skripts in Browsern, die [ES-Module](/de/docs/Web/JavaScript/Guide/Modules) unterstützen, stoppt — verwendet, um Fallback-Skripte in älteren Browsern auszuführen, die JavaScript-Module _nicht_ unterstützen.
- {{domxref("HTMLScriptElement.referrerPolicy")}}
  - : Eine Zeichenfolge, die das [`referrerPolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy)-HTML-Attribut widerspiegelt, das angibt, welchen Referrer beim Abrufen des Skripts und beim Abrufen durch das Skript verwendet werden soll.
- {{domxref("HTMLScriptElement.src")}}
  - : Eine Zeichenfolge, die die URL eines externen Skripts darstellt; dies kann als Alternative zum direkten Einbetten eines Skripts in ein Dokument verwendet werden. Es spiegelt das `src`-Attribut des {{HTMLElement("script")}}-Elements wider.
- {{domxref("HTMLScriptElement.text")}}

  - : Eine Zeichenfolge, die die Inhalte aller {{domxref("Text")}}-Knoten innerhalb des {{HTMLElement("script")}}-Elements vereint und in Baumreihenfolge zurückgibt (andere Knoten wie Kommentare werden ignoriert). Beim Setzen verhält es sich genauso wie die {{domxref("Node.textContent")}}-Eigenschaft.

    > [!NOTE]
    > Wenn mittels der Methode {{domxref("Document.write()")}} eingefügt, werden {{HTMLElement("script")}}-Elemente ausgeführt (typischerweise synchron), aber wenn sie mittels {{domxref("Element.innerHTML")}} oder {{domxref("Element.outerHTML")}} eingefügt werden, werden sie überhaupt nicht ausgeführt.

- {{domxref("HTMLScriptElement.type")}}
  - : Eine Zeichenfolge, die den Typ des Skripts darstellt. Es spiegelt das `type`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Statische Methoden

- {{domxref("HTMLScriptElement.supports_static", "HTMLScriptElement.supports()")}}
  - : Gibt `true` zurück, wenn der Browser Skripte des angegebenen Typs unterstützt, und `false` andernfalls.
    Diese Methode bietet eine einfache und einheitliche Methode zur skriptbezogenen Feature-Erkennung.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, {{domxref("HTMLElement")}}._

## Ereignisse

_Keine spezifischen Ereignisse; erbt Ereignisse von seinem Elternteil, {{domxref("HTMLElement")}}._

## Beispiele

### Dynamisches Importieren von Skripten

Erstellen Sie eine Funktion, die neue Skripte innerhalb eines Dokuments importiert, indem sie einen {{HTMLElement("script")}}-Knoten _unmittelbar vor_ dem {{HTMLElement("script")}}, der den folgenden Code beherbergt, erstellt (über {{domxref("document.currentScript")}}).
Diese Skripte werden **asynchron** ausgeführt.
Weitere Informationen finden Sie in den Eigenschaften [`defer`](/de/docs/Web/API/HTMLScriptElement/defer) und [`async`](/de/docs/Web/API/HTMLScriptElement/async).

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

Diese nächste Funktion fügt anstatt die neuen Skripte unmittelbar vor dem {{domxref("document.currentScript")}}-Element bereitzustellen, sie als Kinder des {{HTMLElement("head")}}-Tags ein.

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

{{domxref("HTMLScriptElement.supports_static", "HTMLScriptElement.supports()")}} bietet einen einheitlichen Mechanismus, um zu überprüfen, ob ein Browser bestimmte Skripttypen unterstützt.

Das folgende Beispiel zeigt, wie die Unterstützung von Modulen überprüft wird, wobei das Vorhandensein des `noModule`-Attributs als Fallback verwendet wird.

```js
function checkModuleSupport() {
  if ("supports" in HTMLScriptElement) {
    return HTMLScriptElement.supports("module");
  }
  return "noModule" in document.createElement("script");
}
```

Klassische Skripte gelten als von allen Browsern unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("script")}}-Element
- HTML {{HTMLElement("noscript")}}-Element
- {{domxref("document.currentScript")}}
- [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) (Code-Snippets, die ähnlich wie Skripte sind, aber in einem [anderen globalen Kontext](/de/docs/Web/API/DedicatedWorkerGlobalScope) ausgeführt werden)
