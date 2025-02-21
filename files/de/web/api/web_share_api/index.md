---
title: Web Share API
slug: Web/API/Web_Share_API
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{DefaultAPISidebar("Web Share API")}}{{securecontext_header}}

Die **Web Share API** bietet einen Mechanismus zum Teilen von Text, Links, Dateien und anderen Inhalten mit einem vom Benutzer ausgewählten _Share Target_.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht zugänglich über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)).

> [!NOTE]
> Diese API sollte nicht mit der [Web Share Target API](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target) verwechselt werden, die es einer Website ermöglicht, sich selbst als Share Target anzugeben.

## Konzepte und Verwendung

Die **Web Share API** ermöglicht es einer Website, Text, Links, Dateien und andere Inhalte an benutzerausgewählte Share Targets zu teilen, indem die Sharing-Mechanismen des zugrunde liegenden Betriebssystems genutzt werden.
Diese Share Targets umfassen typischerweise die System-Zwischenablage, E-Mail, Kontakte oder Messaging-Anwendungen sowie Bluetooth- oder Wi-Fi-Kanäle.

Die API verfügt über nur zwei Methoden.
Die [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare)-Methode kann verwendet werden, um zunächst zu validieren, ob einige Daten "teilbar" sind, bevor sie an [`navigator.share()`](/de/docs/Web/API/Navigator/share) zum Versenden übergeben werden.

Die [`navigator.share()`](/de/docs/Web/API/Navigator/share)-Methode ruft den nativen Sharing-Mechanismus des zugrunde liegenden Betriebssystems auf und übergibt die angegebenen Daten.
Sie erfordert {{Glossary("transient_activation", "transiente Aktivierung")}} und muss daher durch ein UI-Ereignis wie einen Button-Klick ausgelöst werden.
Darüber hinaus muss die Methode gültige Daten angeben, die vom nativen Implementation unterstützt werden.

Die Web Share API wird durch die [web-share](/de/docs/Web/HTTP/Headers/Permissions-Policy/web-share) Permissions Policy geregelt.
Wenn die Richtlinie unterstützt, aber nicht gewährt wird, werden beide Methoden anzeigen, dass die Daten nicht teilbar sind.

## Schnittstellen

### Erweiterungen zu anderen Schnittstellen

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare)
  - : Gibt einen booleschen Wert zurück, der angibt, ob die angegebenen Daten teilbar sind.
- [`navigator.share()`](/de/docs/Web/API/Navigator/share)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die übergebenen Daten erfolgreich an ein Share Target gesendet wurden.
    Diese Methode muss durch einen Button-Klick oder eine andere Benutzeraktivierung aufgerufen werden (erfordert {{Glossary("transient_activation", "transiente Aktivierung")}}).

## Beispiel

Der folgende Code zeigt, wie man mit [`navigator.share()`](/de/docs/Web/API/Navigator/share) einen Link teilen kann, ausgelöst durch einen Button-Klick.

```js
const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});
```

Das obige Beispiel stammt aus unserem [Web-Share-Test](https://mdn.github.io/dom-examples/web-share/) ([siehe den Quellcode](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)). Sie können dies auch als Live-Beispiel in [`navigator.share()`](/de/docs/Web/API/Navigator/share) sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Share Target API](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target)
