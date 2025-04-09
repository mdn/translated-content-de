---
title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: 31ba9f6da2dd1175250ece8d8d467d523e79b447
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Permissions-Policy`** {{Glossary("response_header", "Antwort-Header")}} bietet einen Mechanismus, um die Nutzung von Browserfunktionen in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen im Dokument zu erlauben oder zu verweigern.

Für weitere Informationen siehe den Hauptartikel zur [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy).

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
  - : Die Permissions Policy Richtlinie, auf die die `Allowlist` angewandt wird. Siehe unten [Richtlinien](#richtlinien) für eine Liste der erlaubten Richtliniennamen.
- `<allowlist>`

  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte enthält, eingeklammert und durch Leerzeichen getrennt:

    - `*` (Wildcard)
      - : Die Funktion wird in diesem Dokument und in allen eingebetteten Browsing-Kontexten (`<iframe>`s) unabhängig von deren Ursprung erlaubt.
    - `()` (leere Allowlist)
      - : Die Funktion ist in obersten und eingebetteten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>`-Attribute `allow` ist `'none'`.
    - `self`
      - : Die Funktion wird in diesem Dokument und in allen eingebetteten Browsing-Kontexten (`<iframe>`s) im selben Ursprung erlaubt. Die Funktion ist in fremden Ursprüngen in eingebetteten Browsing-Kontexten nicht erlaubt. `self` kann als Kurzform für `https://Ihr-seite.beispiel.com` betrachtet werden. Das Äquivalent für `<iframe>`-Attribute `allow` ist `self`.
    - `src`
      - : Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument aus demselben Ursprung wie die URL in ihrem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert wird nur im `<iframe>`-Attribut `allow` verwendet und ist der _Standard_ `Allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`
      - : Die Funktion ist für bestimmte Ursprünge erlaubt (zum Beispiel `"https://a.beispiel.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>`-Attributes `allow` nicht in Anführungszeichen gesetzt sind.

    Die Werte `*` und `()` dürfen nur allein verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden dürfen.

    > [!NOTE]
    > Richtlinien haben eine Standard-`Allowlist`, die immer eine von `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten bestimmt, wenn sie nicht explizit in einer Richtlinie aufgeführt sind.
    > Diese sind auf den einzelnen [Richtlinien-Referenzseiten](#richtlinien) angegeben. Für `<iframe>`-Attribute `allow` ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Platzhalter in Permissions Policy Ursprüngen einfügen. Dies bedeutet, dass Sie, anstatt verschiedene Subdomains explizit in einer Allowlist anzugeben, alle in einem einzigen Ursprung mit einem Platzhalter angeben können.

Anstatt also

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie angeben

```http
("https://example.com" "https://*.example.com")
```

> **Hinweis:** `"https://*.example.com"` entspricht nicht `"https://example.com"`.

## Richtlinien

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Beschleunigung des Geräts durch die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Lichtmenge in der Umgebung des Geräts durch die [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) verwenden darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Medien automatisch abspielen darf, die durch die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle angefordert werden. Wenn diese Richtlinie deaktiviert ist und es keine Benutzeraktionen gab, lehnt das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) ab. Das `autoplay`-Attribut auf {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}

  - : Kontrolliert, ob die Nutzung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, geben die Methoden des von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegebenen [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts entweder `false` zurück oder lehnen das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}

  - : Kontrolliert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wo eine Richtlinie die Nutzung der Topics API ausdrücklich verbietet, wird jeder Versuch, die [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics)-Methode aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument Videogeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}

  - : Kontrolliert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument als [Cross-Origin-Isolated](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}

  - : Kontrolliert die Zuweisung des [`fetchLater()`-Kontingents](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) des obersten Ursprungs.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}

  - : Kontrolliert die Zuweisung des geteilten Cross-Origin-Unterrahmen-`fetchLater()`-Kontingents](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia)-Methode verwenden darf, um Bildschirminhalte zu erfassen. Wenn diese Richtlinie deaktiviert ist, wird das von `getDisplayMedia()` zurückgegebene Versprechen mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn keine Erlaubnis zur Erfassung der Bildschirm-Inhalte erteilt wird.

- {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument [`document.domain`](/de/docs/Web/API/Document/domain) setzen darf. Wenn diese Richtlinie deaktiviert ist, wird der Versuch, [`document.domain`](/de/docs/Web/API/Document/domain) zu setzen, scheitern und einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} abgelehnt.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.
    Wenn diese Richtlinie deaktiviert ist, werden Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen, und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle verwenden darf. Wenn diese Richtlinie deaktiviert ist, führen Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu, dass die Rückrufe dieser Funktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) der Code `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts durch die [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) verwenden darf, um sich mit ungewöhnlichen oder exotischen menschlichen Schnittstellengeräten wie alternativen Tastaturen oder Gamepads zu verbinden.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) verwenden darf und insbesondere die Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option. Wo diese Richtlinie die Nutzung der API verbietet, wird das von dem `get()`-Aufruf zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, beispielsweise um in Chat-Apps den Status "verfügbar"/"abwesend" zu melden.

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Informationen über die lokal installierten Schriften des Benutzers über die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) sammeln darf (siehe auch die [API für den Zugriff auf lokale Schriftarten](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts durch die [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument Audiogeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) verwenden darf, um ein Einmalpasswort (OTP) aus einer speziell formatierten SMS-Nachricht anzufordern, die vom Server der App gesendet wird, d.h. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf. Wenn diese Richtlinie aktiviert ist, wird der Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument erlaubt ist, ein Video im Bild-in-Bild-Modus über die entsprechende API abzuspielen.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue asymmetrische Schlüsselanmeldeinformationen zu erstellen, d.h. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um bereits gespeicherte öffentliche Schlüsselanmeldeinformationen abzurufen, d.h. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzugeben, dass das Gerät den Bildschirm nicht ausschalten oder dimmen soll.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Web Serial API](/de/docs/Web/API/Web_Serial_API) verwenden darf, um mit seriellen Geräten zu kommunizieren, die entweder direkt über einen seriellen Anschluss oder über USB- oder Bluetooth-Geräte emuliert werden.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) verwenden darf, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}

  - : Kontrolliert, ob ein in einem Drittanbieter-Kontext geladenes Dokument (d.h. eingebettet in einem {{htmlelement("iframe")}}) die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugriff auf nicht partitionierte Cookies anzufordern.

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Text, Links, Bilder und andere Inhalte an beliebige vom Benutzer gewählte Ziele zu teilen, z.B. mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}

  - : Kontrolliert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Bildschirmen zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Kontrolliert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Verwendung

#### Permissions-Policy Header

Um allen Ursprüngen Zugriff auf Geolokalisierung zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugriff auf eine Teilmenge von Ursprüngen zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem Sie den Header mit einer kommagetrennten Liste von Richtlinien senden oder indem Sie für jede Richtlinie einen separaten Header senden.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit ein `<iframe>` eine Funktion aktiviert hat, muss der erlaubte Ursprung auch in der Allowlist für die übergeordnete Seite enthalten sein. Aufgrund dieses [Vererbung-Verhaltens](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die weiteste akzeptable Unterstützung für eine Funktion im HTTP-Header anzugeben und dann die für jedes `<iframe>` benötigte Unterstützung anzugeben.

Um allen Ursprüngen Zugriff auf die Geolokalisierung zu gewähren, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig wird, wenn ein `<iframe>` zu einem anderen Ursprung navigiert, die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Indem Sie den Ursprung, zu dem das `<iframe>` navigiert, im `allow`-Attribut auflisten, wird die Permissions Policy, die auf das ursprüngliche `<iframe>` angewendet wurde, auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine durch Semikolon getrennte Liste von Richtliniendirektiven im `allow`-Attribut eingefügt wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist erwähnenswert, den `src`-Wert besonders zu erwähnen. Wir haben oben erwähnt, dass die Verwendung dieses Allowlist-Werts bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument aus demselben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der _Standard_ `Allowlist`-Wert für im `allow`-Attribut aufgeführte Funktionen, sodass die folgenden gleichwertig sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

### Zugriff auf leistungsstarke Funktionen verweigern

SecureCorp Inc. möchte die Mikrofon- und [`Geolokalisierung`](/de/docs/Web/API/Geolocation)-APIs in seiner Anwendung deaktivieren (zum Beispiel [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)). Es kann dies mit dem folgenden Antwort-Header tun:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Indem Sie `()` für die Ursprungs-Liste angeben, werden die angegebenen Funktionen für alle Browsing-Kontexte deaktiviert (dazu gehören alle `<iframe>`s), unabhängig von ihrem Ursprung.

### Kombination von HTTP-Header und `<iframe>`-Richtlinien

Zum Beispiel nehmen wir an, dass wir die Verwendung von Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten, die von unserem vertrauenswürdigen Werbenetzwerk stammen, ermöglichen wollten. Wir könnten die seitenweite Permissions Policy so einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` so festlegen:

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
