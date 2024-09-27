---
title: privacy.network
slug: Mozilla/Add-ons/WebExtensions/API/privacy/network
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die `privacy.network`-Eigenschaft enthält netzwerkbezogene Datenschutzeinstellungen. Jede Eigenschaft ist ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt.

Standardwerte für diese Eigenschaften können je nach Browser variieren.

## Eigenschaften

- `networkPredictionEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrundeliegender Wert ein boolescher Wert ist. Wenn `true`, versucht der Browser das Surfen zu beschleunigen, indem er DNS-Einträge vorab auflöst, Seiten vorab rendert (zum Beispiel mit `<link rel='prefetch' …>`) und TCP- sowie TLS-Verbindungen zu Servern im Voraus öffnet.
- `peerConnectionEnabled`
  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrundeliegender Wert ein boolescher Wert ist. Wenn `false`, ist die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle deaktiviert. Beachten Sie, dass die Funktion [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) von dieser Einstellung _nicht_ betroffen ist.
- `webRTCIPHandlingPolicy`

  - : Ein {{WebExtAPIRef("types.BrowserSetting")}}-Objekt, dessen zugrundeliegender Wert ein String ist. Diese Einstellung ermöglicht es dem Benutzer, die Leistungs- und Datenschutzkompromisse festzulegen, die beeinflussen, wie WebRTC-Verkehr weitergeleitet wird und wie viel lokale Adressinformationen preisgegeben werden. Es kann einen der folgenden Werte annehmen, von am wenigsten privat bis am meisten privat:

    - `default`
    - `default_public_and_private_interfaces`
    - `default_public_interface_only`
    - `disable_non_proxied_udp`
    - `proxy_only` (nur Verbindungen, die TURN über eine TCP-Verbindung durch einen Proxy verwenden, sind erlaubt)

- `httpsOnlyMode`

  - : Diese Einstellung erlaubt Ihrer Erweiterung festzustellen, ob ein Benutzer den
    [HTTPS-Only-Modus](https://support.mozilla.org/en-US/kb/https-only-prefs) aktiviert hat. Diese Eigenschaft ist auf allen Plattformen schreibgeschützt. Der zugrundeliegende Wert ist ein String, der einen von drei Werten annehmen kann:

    - `"always"`: Der HTTPS-Only-Modus ist an.
    - `"never"`: Der HTTPS-Only-Modus ist aus.
    - `"private_browsing"`: Der HTTPS-Only-Modus ist nur in privaten Fenstern aktiviert.

- `globalPrivacyControl`

  - : Diese Einstellung erlaubt Ihrer Erweiterung zu bestimmen, ob ein Benutzer die
    [Global Privacy Control](/de/docs/Web/API/Navigator/globalPrivacyControl) aktiviert hat. Diese Eigenschaft ist auf allen Plattformen schreibgeschützt. Der zugrundeliegende Wert ist ein boolescher Wert, wobei `true` anzeigt, dass der Browser globale Datenschutzsteuerungssignale sendet, und `false` anzeigt, dass der Browser die Signale nicht sendet.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Setzen der Eigenschaft `webRTCIPHandlingPolicy`:

```js
function onSet(result) {
  if (result) {
    console.log("success");
  } else {
    console.log("failure");
  }
}

browser.browserAction.onClicked.addListener(() => {
  let getting = browser.privacy.network.webRTCIPHandlingPolicy.get({});
  getting.then((got) => {
    console.log(got.value);
    if (
      got.levelOfControl === "controlled_by_this_extension" ||
      got.levelOfControl === "controllable_by_this_extension"
    ) {
      let setting = browser.privacy.network.webRTCIPHandlingPolicy.set({
        value: "default_public_interface_only",
      });
      setting.then(onSet);
    } else {
      console.log("Not able to set webRTCIPHandlingPolicy");
    }
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.privacy`](https://developer.chrome.com/docs/extensions/reference/api/privacy)-API von Chromium. Diese Dokumentation ist abgeleitet von [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json) im Chromium-Code.
