---
title: "HTMLScriptElement: attributionSrc-Eigenschaft"
short-title: attributionSrc
slug: Web/API/HTMLScriptElement/attributionSrc
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{deprecated_header}}

Die **`attributionSrc`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle liest und setzt das [`attributionsrc`](/de/docs/Web/HTML/Reference/Elements/script#attributionsrc)-Attribut an einem {{htmlelement("script")}}-Element programmatisch und spiegelt dessen Wert wider. `attributionsrc` gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Skriptressourcenanfrage sendet.

Auf Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine JavaScript-basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

> [!NOTE]
> Alternativ können JavaScript-basierte Attributionsquellen oder -trigger registriert werden, indem eine [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfrage gesendet wird, die die Option `attributionReporting` enthält (entweder direkt in dem `fetch()`-Aufruf oder in einem [`Request`](/de/docs/Web/API/Request)-Objekt, das in den `fetch()`-Aufruf übergeben wird), oder indem ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) gesendet wird, mit [`setAttributionReporting()`](/de/docs/Web/API/XMLHttpRequest/setAttributionReporting), das auf dem Anforderungsobjekt aufgerufen wird.

Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

## Wert

Ein String. Es gibt zwei Versionen dieser Eigenschaft, die Sie abrufen und setzen können:

- Leerzeichen, d.h. `scriptElem.attributionSrc=""`. Dies gibt an, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet werden soll, auf den das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server durchführen. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional und ein leerer Zeichenfolgenwert wird verwendet, wenn sie weggelassen wird.
- Wert, der eine oder mehrere URLs enthält, zum Beispiel:

  ```js
  scriptElem.attributionSrc =
    "https://a.example/register-source https://b.example/register-source";
  ```

  Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder wenn Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server durchführen möchten. In diesem Fall können Sie einen oder mehrere URLs als Wert für `attributionSrc` angeben. Wenn die Ressourcenanforderung auftritt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die im `attributionSrc` angegebenen URL(s) zusätzlich zur Ursprungsressource gesendet. Diese URLs können dann mit einem geeigneten {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

  > [!NOTE]
  > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Feature registriert werden können. Sie haben möglicherweise zum Beispiel verschiedene Kampagnen, deren Erfolg Sie messen möchten, die das Generieren unterschiedlicher Berichte zu verschiedenen Daten beinhalten.

## Beispiele

### Setzen eines leeren attributionSrc

```html
<script src="advertising-script.js"></script>
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

### Setzen eines attributionSrc, das URLs enthält

```html
<script src="advertising-script.js"></script>
```

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).
