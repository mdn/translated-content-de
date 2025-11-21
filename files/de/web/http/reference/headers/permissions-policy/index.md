---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: e411e35085bad991df4c9abf6fc936ced93c9796
---

{{SeeCompatTable}}

Der HTTP **`Permissions-Policy`** {{Glossary("response_header", "Response-Header")}} bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen im Dokument zu erlauben oder zu verweigern.

Weitere Informationen finden Sie im Hauptartikel zur [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : Die Permissions Policy-Direktive, auf die die `allowlist` angewendet werden soll. Siehe [Direktiven](#direktiven) unten für eine Liste der erlaubten Direktivnamen.
- `<allowlist>`
  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte enthält, in Klammern eingeschlossen und durch Leerzeichen getrennt:
    - `*` (Wildcard)
      - : Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Allowlist)
      - : Die Funktion ist in top-level und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `'none'`.
    - `self`
      - : Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) nur im selben Ursprung erlaubt. Die Funktion ist in Cross-Origin-Dokumenten in verschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` angesehen werden. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `self`.
    - `src`
      - : Die Funktion wird in diesem `<iframe>` erlaubt, solange das Dokument in demselben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut geladen wird. Dieser Wert wird nur im `<iframe>`-`allow`-Attribut verwendet und ist der _default_ `allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`
      - : Die Funktion ist für bestimmte Ursprünge erlaubt (zum Beispiel `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>`-allow-Attributen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` dürfen nur allein verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

    > [!NOTE]
    > Direktiven haben eine standardmäßige Allowlist, die immer entweder `*`, `self` oder `none` für den `Permissions-Policy`-HTTP-Header ist und das Standardverhalten steuert, wenn sie nicht explizit in einer Policy aufgeführt sind.
    > Diese sind auf den einzelnen [Direktivreferenzseiten](#direktiven) spezifiziert. Für `<iframe>`-`allow`-Attribute ist das Standardverhalten immer `src`.

Wenn unterstützt, können Sie in Permissions Policy-Ursprüngen Wildcards einfügen. Dies bedeutet, dass Sie anstelle mehrerer verschiedener Subdomains in einer Allowlist alle in einem einzigen Ursprung mit einem Wildcard angeben können.

Also statt

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie angeben

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` stimmt nicht mit `"https://example.com"` überein.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument erlaubt ist, Informationen über die Beschleunigung des Geräts über die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle zu sammeln.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument berechtigt ist, Informationen über die Lichtmenge in der Umgebung des Geräts über die [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle zu sammeln.

- {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Steuert, ob das aktuelle Dokument die [`ariaNotify()`](/de/docs/Web/API/Document/ariaNotify)-Methode verwenden darf, um {{Glossary("screen_reader", "Screenreader")}}-Ankündigungen auszulösen.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Medienautoplay über die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle erlauben darf. Wenn diese Richtlinie deaktiviert ist und es keine Benutzeraktionen gab, wird das {{jsxref("Promise")}}, das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegeben wird, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das Autoplay-Attribut für {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : Steuert, ob die Verwendung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, geben die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, entweder `false` zurück oder lehnen das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Steuert den Zugang zur [Topics API](/de/docs/Web/API/Topics_API). Wenn eine Richtlinie die Verwendung der Topics API speziell nicht erlaubt, schlagen alle Versuche, die [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)-Methode aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehl.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument Videogeräte verwenden darf. Das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} wird mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Erlaubnis nicht erteilt wird.

- {{HTTPHeader('Permissions-Policy/captured-surface-control', 'captured-surface-control')}} {{experimental_inline}}
  - : Steuert, ob das Dokument die Verwendung der [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) erlaubt ist.
    Das von den Hauptmethoden der API zurückgegebene Promise wird mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Erlaubnis nicht erteilt wird.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : Steuert den Zugang zur [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument als [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}
  - : Steuert die Zuweisung des [`fetchLater()`-Kontingents](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) des Top-Level-Ursprungs.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}
  - : Steuert die Zuweisung des geteilten kontingentierten Cross-Origin-Subframe [`fetchLater()`-Kontingents](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)-Methode zur Bildschirmaufnahme erlaubt ist. Wenn diese Richtlinie deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Promise mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Erlaubnis zur Bildschirmaufnahme nicht erteilt wird.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} abgelehnt.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Gamepad API](/de/docs/Web/API/Gamepad_API) erlaubt ist.
    Wenn diese Richtlinie deaktiviert ist, werfen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException), und die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)-Ereignisse werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle erlaubt ist. Wenn diese Richtlinie deaktiviert ist, verursachen Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), dass deren Rückruffunktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument berechtigt ist, Informationen über die Orientierung des Geräts über die [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Schnittstelle zu sammeln.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [WebHID API](/de/docs/Web/API/WebHID_API) zur Verbindung mit seltenen oder exotischen Benutzerschnittstellengeräten wie alternativen Tastaturen oder Gamepads erlaubt ist.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) erlaubt ist.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) erlaubt ist, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, beispielsweise um den Status "verfügbar"/"abwesend" in Chat-Anwendungen zu melden.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Sprachenerkennungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Sammlung von Daten über die lokal installierten Schriften des Benutzers über die [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts)-Methode erlaubt ist (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument berechtigt ist, Informationen über die Orientierung des Geräts über die [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Schnittstelle zu sammeln.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung von Audioeingabegeräten erlaubt ist. Wenn diese Richtlinie deaktiviert ist, wird das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [On-Device-Spracherkennung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [WebOTP API](/de/docs/Web/API/WebOTP_API) erlaubt ist, um ein Einmal-Passwort (OTP) aus einer speziell formatierten SMS-Nachricht anzufordern, die von einem Server der App gesendet wurde, d.h. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Payment Request API](/de/docs/Web/API/Payment_Request_API) erlaubt ist. Wenn diese Richtlinie aktiviert ist, wird der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest)-Konstruktor einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) werfen.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument ein Video im Bild-in-Bild-Modus über die entsprechende API abspielen darf.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zur Erstellung neuer asymmetrischer Schlüsselanmeldeinformationen erlaubt ist, d.h. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zum Abrufen bereits gespeicherter öffentlicher Schlüsselanmeldeinformationen erlaubt ist, d.h. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) zur Angabe, dass das Gerät den Bildschirm nicht ausschalten oder dimmen soll, erlaubt ist.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Web Serial API](/de/docs/Web/API/Web_Serial_API) zur Kommunikation mit seriellen Geräten, entweder direkt über einen seriellen Anschluss oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren, erlaubt ist.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) zur Auflistung und Auswahl von Lautsprechern erlaubt ist.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : Steuert, ob ein in einem Drittanbieter-Kontext geladenes Dokument (d.h. eingebettet in ein {{htmlelement("iframe")}}) die Verwendung der [Storage Access API](/de/docs/Web/API/Storage_Access_API) zur Anforderung des Zugriffs auf unpartitionierte Cookies erlaubt ist.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Übersetzungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [WebUSB API](/de/docs/Web/API/WebUSB_API) erlaubt ist.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) erlaubt ist, um Text, Links, Bilder und andere Inhalte an beliebige Ziele der Wahl des Benutzers zu teilen, z.B. mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [Window Management API](/de/docs/Web/API/Window_Management_API) zur Verwaltung von Fenstern auf mehreren Anzeigen erlaubt ist.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die Verwendung der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) zur Interaktion mit einer WebXR-Sitzung erlaubt ist.

## Beispiele

### Grundlegende Verwendung

#### Permissions-Policy-Header

Um allen Ursprüngen den Zugang zur Geolokalisierung zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zutritt zu einem Teilset von Ursprüngen zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem der Header mit einer durch Komma getrennten Liste von Richtlinien gesendet wird oder indem ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit ein `<iframe>` eine Funktion aktiviert hat, muss der erlaubte Ursprung auch in der Allowlist der übergeordneten Seite sein. Aufgrund dieses [Vererbungsverhaltens](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die weitestgehend akzeptable Unterstützung für eine Funktion im HTTP-Header festzulegen und dann den benötigten Teilset der Unterstützung in jedem `<iframe>` zu spezifizieren.

Um allen Ursprüngen den Zugang zur Geolokalisierung zu erlauben, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Das ist wichtig: Wenn ein `<iframe>` standardmäßig zu einem anderen Ursprung navigiert, wird die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Durch die Angabe des Ursprungs, zu dem das `<iframe>` im `allow`-Attribut navigiert, wird die auf das ursprüngliche `<iframe>` angewendete Permissions Policy auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine durch Semikolons separierte Liste von Richtliniendirektiven innerhalb des `allow`-Attributs eingefügt wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es lohnt sich, dem `src`-Wert eine besondere Erwähnung zu geben. Wie oben erwähnt, bedeutet die Verwendung dieses Allowlist-Wertes, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das Dokument, das in es geladen wird, aus demselben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der _default_ `allowlist`-Wert für in `allow` aufgelistete Funktionen, sodass die folgenden gleichwertig sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'"></iframe>
<iframe src="https://example.com" allow="geolocation"></iframe>
```

### Zugangsverweigerung zu leistungsstarken Funktionen

SecureCorp Inc. möchte die Mikrofon- (z. B. [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation)-APIs in ihrer Anwendung deaktivieren. Dies kann über den folgenden Response-Header erfolgen:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Durch die Angabe von `()` für die Ursprungslist werden die angegebenen Funktionen für alle Browsing-Kontexte (dazu gehören alle `<iframe>`s) unabhängig von ihrem Ursprung deaktiviert.

### Kombination von HTTP-Header- und `<iframe>`-Richtlinien

Nehmen wir zum Beispiel an, dass wir die Geolokalisierungsnutzung in unserem eigenen Ursprung und in eingebettetem Inhalt von unserem vertrauenswürdigen Ad-Netzwerk ermöglichen möchten. Wir könnten die seitenweite Permissions Policy wie folgt einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Ad-`<iframe>`s könnten wir den Zugriff auf den `https://trusted-ad-network.com`-Ursprung so festlegen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in `<iframe>` geladen wird, hätte er keinen Zugang zur Geolokalisierung:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) und [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
