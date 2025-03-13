---
title: Web Share API
slug: Web/API/Web_Share_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Web Share API")}}{{securecontext_header}}

Die **Web Share API** bietet eine Möglichkeit, Text, Links, Dateien und andere Inhalte an ein beliebiges, vom Benutzer ausgewähltes _Share-Ziel_ zu teilen.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht verfügbar über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)).

> [!NOTE]
> Diese API sollte nicht mit der [Web Share Target API](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target) verwechselt werden, die es einer Website ermöglicht, sich selbst als Share-Ziel zu definieren.

## Konzepte und Verwendung

Die **Web Share API** ermöglicht es einer Website, Text, Links, Dateien und andere Inhalte an vom Benutzer ausgewählte Share-Ziele zu senden, wobei die Teilmechanismen des zugrunde liegenden Betriebssystems genutzt werden.
Zu diesen Share-Zielen gehören typischerweise die Zwischenablage des Systems, E-Mail, Kontakte oder Messaging-Anwendungen sowie Bluetooth- oder Wi-Fi-Kanäle.

Die API bietet nur zwei Methoden.
Die Methode [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) kann verwendet werden, um zunächst zu prüfen, ob einige Daten "teilbar" sind, bevor sie an [`navigator.share()`](/de/docs/Web/API/Navigator/share) zum Senden übergeben werden.

Die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) ruft den nativen Teilmechanismus des zugrunde liegenden Betriebssystems auf und übergibt die angegebenen Daten.
Sie erfordert eine {{Glossary("transient_activation", "transiente Aktivierung")}} und muss daher durch ein UI-Event wie einen Button-Klick ausgelöst werden.
Darüber hinaus muss die Methode gültige Daten angeben, die für das Teilen durch die native Implementierung unterstützt werden.

Die Web Share API ist durch die [web-share](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share) Berechtigungsrichtlinie gesichert.
Wenn die Richtlinie unterstützt wird, aber nicht gewährt wurde, werden beide Methoden anzeigen, dass die Daten nicht teilbar sind.

## Schnittstellen

### Erweiterungen zu anderen Schnittstellen

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare)
  - : Gibt einen Boolean-Wert zurück, der angibt, ob die angegebenen Daten teilbar sind.
- [`navigator.share()`](/de/docs/Web/API/Navigator/share)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die übergebenen Daten erfolgreich an ein Share-Ziel gesendet wurden.
    Diese Methode muss durch einen Button-Klick oder eine andere Benutzeraktivierung aufgerufen werden (erfordert {{Glossary("transient_activation", "transiente Aktivierung")}}).

## Beispiel

Der untenstehende Code zeigt, wie Sie einen Link mithilfe von [`navigator.share()`](/de/docs/Web/API/Navigator/share) teilen können, der durch einen Button-Klick ausgelöst wird.

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

Das obige Beispiel stammt aus unserem [Web share test](https://mdn.github.io/dom-examples/web-share/) ([sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)). Sie können dies auch als Live-Beispiel in [`navigator.share()`](/de/docs/Web/API/Navigator/share) sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Share Target API](/de/docs/Web/Progressive_web_apps/Manifest/Reference/share_target)
