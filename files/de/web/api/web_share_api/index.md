---
title: Web Share API
slug: Web/API/Web_Share_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Share API")}}{{securecontext_header}}

Die **Web Share API** bietet einen Mechanismus zum Teilen von Texten, Links, Dateien und anderen Inhalten an ein beliebiges vom Benutzer ausgewähltes _Ziel_.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht verfügbar über {{domxref("WorkerNavigator")}}).

> [!NOTE]
> Diese API sollte nicht mit der [Web Share Target API](/de/docs/Web/Manifest/share_target) verwechselt werden, die es einer Website ermöglicht, sich selbst als Ziel zum Teilen anzugeben.

## Konzepte und Verwendung

Die **Web Share API** erlaubt es einer Website, Texte, Links, Dateien und andere Inhalte an vom Benutzer ausgewählte Ziele zu teilen, indem sie die Freigabemechanismen des zugrunde liegenden Betriebssystems nutzt.
Diese Ziele umfassen typischerweise die Systemzwischenablage, E-Mail, Kontakte oder Messaging-Anwendungen sowie Bluetooth- oder Wi-Fi-Kanäle.

Die API verfügt über nur zwei Methoden.
Die Methode {{domxref("navigator.canShare()")}} kann verwendet werden, um zunächst zu überprüfen, ob einige Daten "teilbar" sind, bevor sie an {{domxref("navigator.share()")}} zum Senden übergeben werden.

Die Methode {{domxref("navigator.share()")}} ruft den nativen Freigabemechanismus des zugrunde liegenden Betriebssystems auf und übergibt die angegebenen Daten.
Es erfordert {{Glossary("transient activation")}} und muss daher durch ein UI-Ereignis wie einen Klick auf eine Schaltfläche ausgelöst werden.
Darüber hinaus muss die Methode gültige Daten angeben, die von der nativen Implementierung zum Teilen unterstützt werden.

Die Web Share API wird durch die Berechtigungsrichtlinie [web-share](/de/docs/Web/HTTP/Headers/Permissions-Policy/web-share) gesteuert.
Wenn die Richtlinie unterstützt wird, aber nicht gewährt wurde, werden beide Methoden anzeigen, dass die Daten nicht teilbar sind.

## Schnittstellen

### Erweiterungen zu anderen Schnittstellen

- {{domxref("navigator.canShare()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die angegebenen Daten teilbar sind.
- {{domxref("navigator.share()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die übergebenen Daten erfolgreich an ein Ziel gesendet wurden.
    Diese Methode muss bei einem Klick auf eine Schaltfläche oder eine andere Benutzeraktivierung aufgerufen werden (erfordert {{Glossary("transient activation")}}).

## Beispiel

Der folgende Code zeigt, wie Sie mithilfe von {{domxref("navigator.share()")}} einen Link teilen können, ausgelöst durch einen Klick auf eine Schaltfläche.

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

Das obige Beispiel stammt aus unserem [Web share test](https://mdn.github.io/dom-examples/web-share/) ([siehe den Quellcode](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)). Sie können dies auch als Live-Beispiel in {{domxref("navigator.share()")}} sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Share Target API](/de/docs/Web/Manifest/share_target)
