---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Permissions-Policy`** {{Glossary("response_header", "Antwort-Header")}} bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder innerhalb eines beliebigen {{HTMLElement("iframe")}} Elements im Dokument zu erlauben oder zu verweigern.

Für weitere Informationen siehe den Hauptartikel zur [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verboter Anfrage-Header")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : Die Permissions Policy-Direktive, auf die die `allowlist` angewendet werden soll. Siehe [Directives](#direktiven) unten für eine Liste der erlaubten Direktivnamen.
- `<allowlist>`

  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden in Klammern enthaltenen Werte enthält, durch Leerzeichen getrennt:

    - `*` (Wildcard)
      - : Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Allowlist)
      - : Die Funktion ist in obersten und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>` `allow` Attribute ist `'none'`.
    - `self`
      - : Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) desselben Ursprungs nur erlaubt. Die Funktion ist in Dokumenten mit unterschiedlichem Ursprung in verschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Abkürzung für `https://your-site.example.com` betrachtet werden. Das Äquivalent für `<iframe>` `allow` Attribute ist `self`.
    - `src`
      - : Die Funktion wird in diesem `<iframe>` erlaubt, solange das in ihm geladene Dokument vom selben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}} Attribut stammt. Dieser Wert wird nur im `<iframe>` `allow` Attribut verwendet und ist der _Standard_ `allowlist` Wert in `<iframe>`s.
    - `"<origin>"`
      - : Die Funktion ist für bestimmte Ursprünge erlaubt (z.B. `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>` erlauben Attributen nicht in Anführungszeichen gesetzt sind.

    Die Werte `*` und `()` dürfen nur allein verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

    > [!NOTE]
    > Direktiven haben eine Standard-allowlist, die immer eines der Werte `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten regelt, wenn sie nicht explizit in einer Richtlinie aufgelistet sind. Diese sind auf den individuellen [Direktivreferenz-Seiten](#direktiven) angegeben. Für `<iframe>` `allow` Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Wildcards in Ursprüngen der Permissions Policy einfügen. Das bedeutet, dass Sie anstatt mehrere verschiedene Subdomänen ausdrücklich in einer Allowlist anzugeben, sie alle in einem einzigen Ursprung mit einem Wildcard angeben können.

Anstelle von

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

Können Sie angeben

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE] > `"https://*.example.com"` entspricht nicht `"https://example.com"`.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument Informationen über die Beschleunigung des Geräts über das [`Accelerometer`](/de/docs/Web/API/Accelerometer) Interface sammeln darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument Informationen über die Lichtmenge in der Umgebung des Geräts über das [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor) Interface sammeln darf.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die Nutzung der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) erlaubt ist.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument automatisch Medieninhalte abspielen darf, die über das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Interface angefordert werden. Wenn diese Richtlinie deaktiviert ist und keine Benutzerinteraktionen erfolgt sind, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das `autoplay` Attribut auf {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}

  - : Bestimmt, ob die Nutzung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, werden die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth) Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, entweder `false` zurückgeben oder das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}

  - : Bestimmt den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wenn eine Richtlinie die Nutzung der Topics API speziell verbietet, werden alle Versuche, die [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) Methode zu rufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}} Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument Videogeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}

  - : Bestimmt den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument als [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}

  - : Bestimmt die Zuteilung des [`fetchLater()` Kontingents](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) des obersten Ursprungs.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}

  - : Bestimmt die Zuteilung des gemeinsamen cross-origin Subframe [`fetchLater()` Kontingents](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument die [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) Methode verwenden darf, um Bildschirminhalte zu erfassen. Wenn diese Richtlinie deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Promise mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn keine Erlaubnis zur Anzeigeerfassung erteilt wird.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} abgelehnt.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf. Wenn diese Richtlinie deaktiviert ist, werden Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen, und die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignisse werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument die [`Geolocation`](/de/docs/Web/API/Geolocation) Schnittstelle verwenden darf. Wenn diese Richtlinie deaktiviert ist, werden Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu führen, dass die Rückruf-Funktionen dieser Funktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts über die [`Gyroscope`](/de/docs/Web/API/Gyroscope) Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) verwenden darf, um eine Verbindung zu ungewöhnlichen oder exotischen menschlichen Schnittstellengeräten wie alternativen Tastaturen oder Gamepads herzustellen.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) und speziell die [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) Methode mit einer `identity` Option verwenden darf. Wenn diese Richtlinie die Nutzung der API verbietet, wird das von dem `get()` Aufruf zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) verwenden darf, um zu erkennen, wenn Benutzer mit ihren Geräten interagieren, beispielsweise um in Chat-Anwendungen den Status "verfügbar"/"abwesend" zu melden.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}

  - : Bestimmt den Zugriff auf die Sprachenerkennungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument Daten zu den lokal installierten Schriften des Benutzers über die [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) Methode sammeln darf (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts über die [`Magnetometer`](/de/docs/Web/API/Magnetometer) Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument Audio-Eingabegeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) verwenden darf, um ein Einmalpasswort (OTP) aus einer speziell formatierten SMS zu beantragen, die vom Server der App gesendet wird, d.h. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf. Wenn diese Richtlinie aktiviert ist, wird der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest) Konstruktor einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument ein Video im Bild-in-Bild-Modus über die entsprechende API abspielen darf.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue asymmetrische Schlüsselanmeldedaten zu erstellen, d.h. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um bereits gespeicherte Public-Key-Anmeldedaten abzurufen, d.h. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzuzeigen, dass das Gerät den Bildschirm nicht ausschalten oder dimmen sollte.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Web Serial API](/de/docs/Web/API/Web_Serial_API) verwenden darf, um mit seriellen Geräten zu kommunizieren, die entweder direkt über einen seriellen Anschluss angeschlossen sind oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) verwenden darf, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}

  - : Bestimmt, ob ein in einem Drittanbieter-Kontext geladenes Dokument (d.h. eingebettet in einem {{htmlelement("iframe")}}) die Verwendung der [Storage Access API](/de/docs/Web/API/Storage_Access_API) beantragen darf, um Zugriff auf nicht partitionierte Cookies zu erhalten.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}

  - : Bestimmt den Zugriff auf die Übersetzungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}

  - : Bestimmt den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}

  - : Bestimmt, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument die [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Text, Links, Bilder und andere Inhalte zu beliebigen Zielen der Wahl des Benutzers zu teilen, z. B. mobilen Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}

  - : Bestimmt, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Displays zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Bestimmt, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Verwendung

#### Permissions-Policy Header

Um allen Ursprüngen Zugriff auf die Geolokalisierung zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugriff auf eine Teilmenge von Ursprüngen zu beschränken, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig durch Senden des Headers mit einer durch Kommas getrennten Liste von Richtlinien oder durch Senden eines separaten Headers für jede Richtlinie gesteuert werden.

Zum Beispiel sind die folgenden äquivalent:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Für ein `<iframe>`, das eine Funktion aktiviert haben soll, muss der erlaubte Ursprung auch in der Allowlist der übergeordneten Seite enthalten sein. Aufgrund dieses [Vererbungsmusters](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die größtmögliche Unterstützung für eine Funktion im HTTP-Header zu spezifizieren und dann den benötigten Unterstützungsbereich in jedem `<iframe>` anzugeben.

Um allen Ursprüngen Zugriff auf die Geolokalisierung zu erlauben, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig, wenn ein `<iframe>` zu einem anderen Ursprung navigiert, wird die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Durch das Auflisten des Ursprungs, zu dem das `<iframe>` navigiert, im `allow` Attribut, wird die Permissions Policy, die ursprünglich auf das `<iframe>` angewendet wurde, auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine durch Semikolon getrennte Liste von Richtliniendirektiven im `allow` Attribut enthalten ist.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es lohnt sich, dem `src` Wert besondere Aufmerksamkeit zu widmen. Wir haben oben erwähnt, dass die Verwendung dieses Allowlist-Werts bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument vom selben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}} Attribut stammt. Dieser Wert ist der _Standard_ `allowlist` Wert für Funktionen, die in `allow` aufgelistet sind, sodass die folgenden äquivalent sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

### Den Zugriff auf leistungsstarke Funktionen verweigern

SecureCorp Inc. möchte die Verwendung der Mikrofon (z.B. [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und der [`Geolocation`](/de/docs/Web/API/Geolocation) APIs in ihrer Anwendung deaktivieren. Sie kann dies mit dem folgenden Antwort-Header tun:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Durch die Angabe von `()` für die Ursprungsmittel werden die angegebenen Funktionen für alle Browsing-Kontexte (einschließlich aller `<iframe>`s) deaktiviert, unabhängig von ihrem Ursprung.

### Kombination aus HTTP-Header und `<iframe>`-Richtlinien

Angenommen, wir möchten die Nutzung der Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten, die von unserem vertrauenswürdigen Werbenetzwerk stammen, aktivieren. Wir könnten die seitenweite Permissions Policy wie folgt einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Ad-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` wie folgt festlegen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in `<iframe>` geladen würde, hätte er keinen Zugriff auf die Geolokalisierung:

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
