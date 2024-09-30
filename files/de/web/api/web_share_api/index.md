---
title: Web Share API
slug: Web/API/Web_Share_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Share API")}}{{securecontext_header}}

Die **Web Share API** bietet einen Mechanismus zum Teilen von Text, Links, Dateien und anderen Inhalten an ein beliebiges, vom Benutzer ausgewähltes _Share-Ziel_.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zugänglich).

> [!NOTE]
> Diese API sollte nicht mit der [Web Share Target API](/de/docs/Web/Manifest/share_target) verwechselt werden, die es einer Website ermöglicht, sich selbst als Share-Ziel anzugeben.

## Konzepte und Verwendung

Die **Web Share API** ermöglicht es einer Website, Text, Links, Dateien und andere Inhalte an vom Benutzer ausgewählte Share-Ziele zu teilen, indem die Freigabemechanismen des zugrunde liegenden Betriebssystems genutzt werden.
Diese Share-Ziele umfassen typischerweise die Systemzwischenablage, E-Mail, Kontakte oder Messaging-Anwendungen sowie Bluetooth- oder Wi-Fi-Kanäle.

Die API verfügt über lediglich zwei Methoden.
Die [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare)-Methode kann verwendet werden, um zunächst zu validieren, ob einige Daten "teilbar" sind, bevor sie zum Versenden an [`navigator.share()`](/de/docs/Web/API/Navigator/share) übergeben werden.

Die [`navigator.share()`](/de/docs/Web/API/Navigator/share)-Methode ruft den nativen Freigabemechanismus des zugrunde liegenden Betriebssystems auf und übergibt die angegebenen Daten.
Sie erfordert eine [transiente Aktivierung](/de/docs/Glossary/transient_activation) und muss daher durch ein UI-Ereignis wie einen Klick auf einen Button ausgelöst werden.
Darüber hinaus muss die Methode gültige Daten angeben, die durch die native Implementierung zum Teilen unterstützt werden.

Die Web Share API wird durch die [web-share](/de/docs/Web/HTTP/Headers/Permissions-Policy/web-share) Permissions Policy gesteuert.
Wenn die Policy unterstützt wird, aber nicht gewährt wurde, werden beide Methoden anzeigen, dass die Daten nicht teilbar sind.

## Schnittstellen

### Erweiterungen zu anderen Schnittstellen

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare)
  - : Gibt einen Boolean zurück, der angibt, ob die angegebenen Daten teilbar sind.
- [`navigator.share()`](/de/docs/Web/API/Navigator/share)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die übergebenen Daten erfolgreich an ein Share-Ziel gesendet wurden.
    Diese Methode muss bei einem Klick auf einen Button oder eine andere Benutzeraktivierung aufgerufen werden (erfordert [transiente Aktivierung](/de/docs/Glossary/transient_activation)).

## Beispiel

Der folgende Code zeigt, wie Sie einen Link mit [`navigator.share()`](/de/docs/Web/API/Navigator/share) teilen können, ausgelöst durch einen Klick auf einen Button.

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

- [Web Share Target API](/de/docs/Web/Manifest/share_target)
