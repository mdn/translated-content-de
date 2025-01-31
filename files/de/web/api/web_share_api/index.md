---
title: Web Share API
slug: Web/API/Web_Share_API
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{DefaultAPISidebar("Web Share API")}}{{securecontext_header}}

Die **Web Share API** bietet einen Mechanismus zum Teilen von Text, Links, Dateien und anderen Inhalten an ein beliebiges, vom Benutzer ausgewähltes _Ziel für das Teilen_.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zugänglich).

> [!NOTE]
> Diese API sollte nicht mit der [Web Share Target API](/de/docs/Web/Manifest/Reference/share_target) verwechselt werden, die es einer Website ermöglicht, sich selbst als Ziel für das Teilen zu spezifizieren.

## Konzepte und Nutzung

Die **Web Share API** ermöglicht es einer Seite, Text, Links, Dateien und andere Inhalte an vom Benutzer ausgewählte Ziele für das Teilen zu senden, indem die Teilungsmechanismen des zugrunde liegenden Betriebssystems genutzt werden.
Diese Ziele für das Teilen umfassen typischerweise die System-Zwischenablage, E-Mail, Kontakte oder Messaging-Anwendungen sowie Bluetooth- oder Wi-Fi-Kanäle.

Die API hat nur zwei Methoden.
Die Methode [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) kann verwendet werden, um zunächst zu überprüfen, ob einige Daten "teilbar" sind, bevor sie an [`navigator.share()`](/de/docs/Web/API/Navigator/share) zum Senden übergeben werden.

Die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) ruft den nativen Mechanismus zum Teilen des zugrunde liegenden Betriebssystems auf und übergibt die angegebenen Daten.
Sie erfordert eine {{Glossary("transient_activation", "transiente Aktivierung")}} und muss daher von einem UI-Ereignis wie einem Button-Klick ausgelöst werden.
Darüber hinaus muss die Methode gültige Daten angeben, die durch die native Implementierung zum Teilen unterstützt werden.

Die Web Share API wird durch die [web-share](/de/docs/Web/HTTP/Headers/Permissions-Policy/web-share) Berechtigungsrichtlinie gesteuert.
Wenn die Richtlinie unterstützt wird, aber keine Erlaubnis erteilt wurde, werden beide Methoden anzeigen, dass die Daten nicht teilbar sind.

## Schnittstellen

### Erweiterungen zu anderen Schnittstellen

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare)
  - : Gibt einen booleschen Wert zurück, der angibt, ob die angegebenen Daten teilbar sind.
- [`navigator.share()`](/de/docs/Web/API/Navigator/share)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die übergebenen Daten erfolgreich an ein Ziel für das Teilen gesendet wurden.
    Diese Methode muss bei einem Button-Klick oder einer anderen Benutzeraktivierung aufgerufen werden (erfordert {{Glossary("transient_activation", "transiente Aktivierung")}}).

## Beispiel

Der folgende Code zeigt, wie Sie einen Link mithilfe von [`navigator.share()`](/de/docs/Web/API/Navigator/share) teilen können, ausgelöst durch einen Button-Klick.

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

Das obige Beispiel stammt aus unserem [Web share test](https://mdn.github.io/dom-examples/web-share/) ([siehe den Quellcode](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)). Sie können dies auch als Live-Beispiel in [`navigator.share()`](/de/docs/Web/API/Navigator/share) sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Share Target API](/de/docs/Web/Manifest/Reference/share_target)
