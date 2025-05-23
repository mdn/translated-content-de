---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Permissions-Policy`** {{Glossary("response_header", "Antwort-Header")}} bietet einen Mechanismus, um die Nutzung von Browser-Features in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen in dem Dokument zu erlauben oder zu verweigern.

Für weitere Informationen siehe den Hauptartikel [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : Die Directions Policy-Direktive, auf die die `allowlist` angewendet werden soll. Siehe [Direktiven](#direktiven) unten für eine Liste der erlaubten Direktivnamen.
- `<allowlist>`

  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthält, getrennt durch Leerzeichen:

    - `*` (Wildcard)
      - : Das Feature wird in diesem Dokument und allen verschachtelten Browsing-Kontexten (`<iframe>`-Elemente) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Allowlist)
      - : Das Feature ist in obersten und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `'none'`.
    - `self`
      - : Das Feature wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) nur im gleichen Ursprung erlaubt. Das Feature ist in ursprungsfremden Dokumenten in verschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` betrachtet werden. Das Äquivalent für `<iframe>`-`allow`-Attribute ist `self`.
    - `src`
      - : Das Feature wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument vom selben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert wird nur im `<iframe>`-`allow`-Attribut verwendet und ist der _Standard_-`allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`
      - : Das Feature ist für spezifische Ursprünge erlaubt (zum Beispiel `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>`-`allow`-Attributen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` dürfen nur alleine verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

    > [!NOTE]
    > Direktiven haben eine Standard-`allowlist`, die immer einer der Werte `*`, `self` oder `none` für den `Permissions-Policy`-HTTP-Header ist und das Standardverhalten bestimmt, wenn sie nicht explizit in einer Policy aufgeführt sind.
    > Diese werden auf den einzelnen [Direktivreferenzseiten](#direktiven) angegeben. Für `<iframe>`-`allow`-Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Wildcards in Permissions Policy-Ursprüngen einfügen. Dies bedeutet, dass anstatt mehrere verschiedene Subdomains explizit in einer Allowlist anzugeben, Sie diese alle in einem einzigen Ursprung mit einem Wildcard angeben können.

Anstatt

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie

```http
("https://example.com" "https://*.example.com")
```

angeben.

> **Hinweis:** `"https://*.example.com"` entspricht nicht `"https://example.com"`.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, Informationen über die Beschleunigung des Geräts über das [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Interface zu sammeln.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, Informationen über die Menge des Lichts in der Umgebung des Geräts über das [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Interface zu sammeln.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) zu nutzen.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, Medien über das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interface automatisch abzuspielen. Wenn diese Policy deaktiviert ist und keine Benutzerhandlungen getätigt wurden, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das Autoplay-Attribut auf {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}

  - : Kontrolliert, ob die Nutzung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Policy deaktiviert ist, geben die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, entweder `false` zurück oder lehnen das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}

  - : Kontrolliert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wo eine Policy die Nutzung der Topics API explizit untersagt, schlagen alle Versuche, die Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehl.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument Videogeräte verwenden darf. Wenn diese Policy deaktiviert ist, lehnt das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}

  - : Kontrolliert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument als [cross-origin isoliert](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}

  - : Kontrolliert die Zuweisung der [`fetchLater()`-Kontingente](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) des obersten Ursprungs.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}

  - : Kontrolliert die Zuweisung des gemeinsamen Cross-Origin-Unterframe-[`fetchLater()`-Kontingents](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwenden darf, um Bildschirm-Inhalte zu erfassen. Wenn diese Policy deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Promise mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn keine Berechtigung zur Erfassung der Bildschirm-Inhalte erhalten wird.

- {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, [`document.domain`](/de/docs/Web/API/Document/domain) zu setzen. Wenn diese Policy deaktiviert ist, schlägt der Versuch, [`document.domain`](/de/docs/Web/API/Document/domain) zu setzen, fehl und löst einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) aus.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Policy deaktiviert ist, lehnt das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Policy deaktiviert ist, lehnt das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} ab.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.
    Wenn diese Policy deaktiviert ist, werfen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException), und die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event)- und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event)-Events werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle zu verwenden. Wenn diese Policy deaktiviert ist, führen Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu, dass die Rückruffunktionen dieser Funktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, Informationen über die Orientierung des Geräts über das [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Interface zu sammeln.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [WebHID API](/de/docs/Web/API/WebHID_API) zu verwenden, um sich mit seltenen oder exotischen Human Interface Devices wie alternativen Tastaturen oder Gamepads zu verbinden.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) und insbesondere die Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option zu verwenden. Wo diese Policy die Nutzung der API verbietet, lehnt das von `get()` zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) zu verwenden, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, zum Beispiel um den Status "verfügbar"/"abwesend" in Chat-Anwendungen zu melden.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}

  - : Kontrolliert den Zugriff auf die Sprachenerkennungsfunktionalität der [Übersetzer- und Sprachenerkennungsschnittstellen](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, Daten über die lokal installierten Schriftarten der Benutzer über die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) zu sammeln (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, Informationen über die Orientierung des Geräts über das [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Interface zu sammeln.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, Audioaufnahmegeräte zu verwenden. Wenn diese Policy deaktiviert ist, lehnt das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) zu verwenden. Wenn diese Policy deaktiviert ist, lehnt das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [WebOTP API](/de/docs/Web/API/WebOTP_API) zu verwenden, um ein Einmalpasswort (OTP) von einer speziell formatierten SMS zu erhalten, die vom Server der App gesendet wurde, d.h. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [Payment Request API](/de/docs/Web/API/Payment_Request_API) zu verwenden. Wenn diese Policy aktiviert ist, löst der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest)-Konstruktor einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) aus.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, ein Video im Bild-in-Bild-Modus über die entsprechende API abzuspielen.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu verwenden, um neue asymmetrische Schlüsselanmeldeinformationen zu erstellen, d.h. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu verwenden, um bereits gespeicherte Public-Key-Anmeldeinformationen abzurufen, d.h. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) zu verwenden, um anzuzeigen, dass das Gerät den Bildschirm nicht ausschalten oder dimmen sollte.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [Web Serial API](/de/docs/Web/API/Web_Serial_API) zu verwenden, um mit seriellen Geräten zu kommunizieren, entweder direkt über einen seriellen Anschluss oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) zu verwenden, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}

  - : Kontrolliert, ob ein Dokument, das in einem Drittanbieter-Kontext geladen ist (d.h. eingebettet in einem {{htmlelement("iframe")}}), die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugriff auf nicht partitionierte Cookies anzufordern.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}

  - : Kontrolliert den Zugriff auf die Übersetzungsfunktionalität der [Übersetzer- und Sprachenerkennungsschnittstellen](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}

  - : Kontrolliert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [WebUSB API](/de/docs/Web/API/WebUSB_API) zu verwenden.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) zu verwenden, um Text, Links, Bilder und andere Inhalte an beliebige Ziele der Wahl des Benutzers zu teilen, z.B. mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}

  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [Window Management API](/de/docs/Web/API/Window_Management_API) zu verwenden, um Fenster auf mehreren Bildschirmen zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Kontrolliert, ob dem aktuellen Dokument erlaubt ist, die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) zu verwenden, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Verwendung

#### Permissions-Policy-Header

Um allen Ursprüngen Zugriff auf Geolocation zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um Zugriff auf eine Teilmenge der Ursprünge zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Features können gleichzeitig kontrolliert werden, indem der Header mit einer durch Kommas getrennten Liste von Policies gesendet wird oder indem für jede Policy ein separater Header gesendet wird.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Für ein `<iframe>` muss sein erlaubter Ursprung auch in der Allowlist für die übergeordnete Seite sein, damit ein Feature aktiviert ist. Aufgrund dieses [Vererbung-Verhaltens](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die weitestgehend akzeptable Unterstützung für ein Feature im HTTP-Header anzugeben und dann die Teilmenge der Unterstützung in jedem `<iframe>` zu spezifizieren, die Sie benötigen.

Um allen Ursprüngen Zugriff auf Geolocation zu erlauben, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Policy auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig, wenn ein `<iframe>` zu einem anderen Ursprung navigiert, wird die Policy nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Indem der Ursprung, zu dem das `<iframe>` navigiert, im `allow`-Attribut aufgeführt ist, wird die Permissions Policy, die auf das ursprüngliche `<iframe>` angewendet wurde, auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Features können gleichzeitig kontrolliert werden, indem eine durch Semikolon getrennte Liste von Policy-Direktiven im `allow`-Attribut enthalten ist.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist erwähnenswert, den `src`-Wert gesondert zu erwähnen. Wir erwähnten oben, dass durch die Verwendung dieses Allowlist-Wertes das zugehörige Feature in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument vom selben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der _Standard_-`allowlist`-Wert für Features, die in `allow` aufgeführt sind, sodass die folgenden gleichwertig sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

### Zugriff auf leistungsstarke Features verweigern

Die SecureCorp Inc. möchte die Mikrofon- (zum Beispiel [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation)-APIs in ihrer Anwendung deaktivieren. Dies kann mit dem folgenden Antwort-Header erreicht werden:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Durch die Angabe von `()` für die Ursprungs-Liste, werden die angegebenen Features für alle Browsing-Kontexte (dies schließt alle `<iframe>`s ein), unabhängig von ihrem Ursprung, deaktiviert.

### Kombination von HTTP-Header- und `<iframe>`-Policies

Zum Beispiel, sagen wir, wir möchten die Nutzung der Geolocation auf unserem eigenen Ursprung und in eingebetteten Inhalten, die von unserem vertrauenswürdigen Werbenetzwerk stammen, ermöglichen. Wir könnten die seitenweite Permissions Policy folgendermaßen einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den `https://trusted-ad-network.com`-Ursprung folgendermaßen einstellen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in `<iframe>` geladen wird, würde er keinen Zugriff auf Geolocation haben:

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
