---
title: Web Share API
slug: Web/API/Web_Share_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Share API")}}{{securecontext_header}}

Die **Web Share API** bietet einen Mechanismus zum Teilen von Text, Links, Dateien und anderen Inhalten mit einem beliebigen vom Benutzer ausgewählten _Sharing-Ziel_.

> [!NOTE]
> Diese API ist _nicht verfügbar_ in [Web Workers](/de/docs/Web/API/Web_Workers_API) (nicht über [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zugänglich).

> [!NOTE]
> Diese API sollte nicht mit der [Web Share Target API](/de/docs/Web/Manifest/share_target) verwechselt werden, die es einer Website ermöglicht, sich selbst als Sharing-Ziel anzugeben.

## Konzepte und Verwendung

Die **Web Share API** ermöglicht es einer Website, Text, Links, Dateien und andere Inhalte zu benutzergewählten Sharing-Zielen zu teilen, indem die Sharing-Mechanismen des zugrunde liegenden Betriebssystems genutzt werden.
Diese Sharing-Ziele umfassen typischerweise die Systemzwischenablage, E-Mail, Kontakte oder Messaging-Anwendungen sowie Bluetooth- oder Wi-Fi-Kanäle.

Die API verfügt über nur zwei Methoden.
Die Methode [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) kann verwendet werden, um zuerst zu validieren, ob einige Daten "teilbar" sind, bevor sie zur Übermittlung an [`navigator.share()`](/de/docs/Web/API/Navigator/share) weitergegeben werden.

Die Methode [`navigator.share()`](/de/docs/Web/API/Navigator/share) aktiviert den nativen Sharing-Mechanismus des zugrunde liegenden Betriebssystems und übergibt die angegebenen Daten.
Sie erfordert [transiente Aktivierung](/de/docs/Glossary/transient_activation) und muss daher durch ein UI-Ereignis wie einen Button-Klick ausgelöst werden.
Darüber hinaus müssen mit der Methode gültige Daten angegeben werden, die für das Teilen durch die native Implementierung unterstützt werden.

Die Web Share API ist durch die [web-share](/de/docs/Web/HTTP/Headers/Permissions-Policy/web-share) Permissions Policy eingeschränkt.
Falls die Richtlinie unterstützt, aber nicht gewährt wird, geben beide Methoden an, dass die Daten nicht teilbar sind.

## Schnittstellen

### Erweiterungen zu anderen Schnittstellen

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare)
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die angegebenen Daten teilbar sind.
- [`navigator.share()`](/de/docs/Web/API/Navigator/share)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn die übermittelten Daten erfolgreich an ein Sharing-Ziel gesendet wurden.
    Diese Methode muss durch einen Button-Klick oder eine andere Benutzeraktivierung aufgerufen werden (erfordert [transiente Aktivierung](/de/docs/Glossary/transient_activation)).

## Beispiel

Der unten stehende Code zeigt, wie Sie einen Link mithilfe von [`navigator.share()`](/de/docs/Web/API/Navigator/share) teilen können, der durch einen Button-Klick ausgelöst wird.

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
