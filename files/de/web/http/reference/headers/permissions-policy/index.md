---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: 4f10dde1dd56246043e3ef2fe750cead84a2724e
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Permissions-Policy`** {{Glossary("response_header", "Antwort-Header")}} bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder in einem beliebigen {{HTMLElement("iframe")}}-Element im Dokument zu erlauben oder zu verweigern.

Weitere Informationen finden Sie im Hauptartikel zur [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Art des Headers</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : Die anzuwendende Permissions Policy-Direktive für die `allowlist`. Eine Liste der zulässigen Direktivnamen finden Sie unten unter [Direktiven](#direktiven).
- `<allowlist>`

  - : Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthält, getrennt durch Leerzeichen:

    - `*` (Platzhalter)
      - : Die Funktion wird in diesem Dokument und in allen geschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Allowlist)
      - : Die Funktion ist in obersten und geschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>` `allow`-Attribute ist `'none'`.
    - `self`
      - : Die Funktion wird in diesem Dokument zugelassen und in allen geschachtelten Browsing-Kontexten (`<iframe>`s) im gleichen Ursprung erlaubt. Die Funktion ist nicht in Ursprüngen von Drittanbietern in geschachtelten Browsing-Kontexten erlaubt. `self` kann als Abkürzung für `https://your-site.example.com` betrachtet werden. Das Äquivalent für `<iframe>` `allow`-Attribute ist `self`.
    - `src`
      - : Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument aus dem gleichen Ursprung stammt wie die URL in ihrem {{HTMLElement('iframe','src','#Attributes')}}-Attribut. Dieser Wert wird nur im `<iframe>` `allow`-Attribut verwendet und ist der _Standard_-`allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`
      - : Die Funktion ist für bestimmte Ursprünge erlaubt (zum Beispiel `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>` allow-Attributen nicht in Anführungszeichen gesetzt werden.

    Die Werte `*` und `()` können nur alleine verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

    > [!NOTE]
    > Direktiven haben eine Standard-`allowlist`, die immer eine der `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten regelt, wenn sie nicht explizit in einer Richtlinie aufgeführt sind.
    > Diese sind auf den einzelnen [Direktivreferenzseiten](#direktiven) spezifiziert. Für `<iframe>` `allow`-Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie in Permissions Policy-Ursprüngen Platzhalter verwenden. Das bedeutet, dass Sie, anstatt mehrere verschiedene Subdomains explizit anzugeben, sie alle in einem einzigen Ursprung mit einem Platzhalter spezifizieren können.

Anstelle von:

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

Können Sie angeben:

```http
("https://example.com" "https://*.example.com")
```

> **Hinweis:** `"https://*.example.com"` entspricht nicht `"https://example.com"`.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, Informationen über die Beschleunigung des Geräts über die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle zu sammeln.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, Informationen über die Lichtmenge in der Umgebung des Geräts über die [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle zu sammeln.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) zu verwenden.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, Medien über die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle automatisch abzuspielen. Wenn diese Richtlinie deaktiviert ist und es keine Nutzeraktionen gab, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das Autoplay-Attribut bei {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}

  - : Steuert, ob die Verwendung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) gestattet ist. Wenn diese Richtlinie deaktiviert ist, liefern die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, entweder `false` zurück oder lehnen das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}

  - : Steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wenn eine Richtlinie die Verwendung der Topics API ausdrücklich untersagt, schlagen Versuche, die Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, Videoeingabegeräte zu verwenden. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}

  - : Steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}

  - : Steuert, ob das aktuelle Dokument als [cross-origin isolated](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}

  - : Steuert die Zuweisung der [`fetchLater()`-Quote des obersten Ursprungs](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}

  - : Steuert die Zuweisung der geteilten cross-origin Subframe [`fetchLater()`-Quote](/de/docs/Web/API/fetchLater_API/fetchLater_quotas).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}

  - : Steuert, ob dem aktuellen Dokument erlaubt ist, die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) zu verwenden, um Bildschirminhalte zu erfassen. Wenn diese Richtlinie deaktiviert ist, wird das Promise, das von `getDisplayMedia()` zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, falls die Erlaubnis zur Erfassung der Bildschirminhalte nicht erteilt wird.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) zu verwenden. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegeben wird, mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet wird, [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) zu verwenden. Wenn diese Richtlinie deaktiviert ist, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} abgelehnt.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [Gamepad API](/de/docs/Web/API/Gamepad_API) zu verwenden.
    Wenn diese Richtlinie deaktiviert ist, führen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) zu einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException), und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle zu verwenden. Wenn diese Richtlinie deaktiviert ist, führen Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu, dass die Callback-Funktionen dieser Funktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, Informationen über die Ausrichtung des Geräts über die [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Schnittstelle zu sammeln.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [WebHID API](/de/docs/Web/API/WebHID_API) zu verwenden, um eine Verbindung zu ungewöhnlichen oder exotischen Mensch-Maschine-Schnittstellengeräten, wie Alternativ-Tastaturen oder Gamepads, herzustellen.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) zu verwenden, insbesondere die Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option. Wenn diese Richtlinie die Nutzung der API verbietet, wird das von der `get()`-Methode zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) zu verwenden, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, zum Beispiel um den "verfügbar"/"abwesend"-Status in Chat-Anwendungen zu melden.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}

  - : Steuert den Zugriff auf die Sprachenerkennungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, Daten zu den lokal installierten Schriften des Benutzers über die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) zu sammeln (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, Informationen über die Ausrichtung des Geräts über die [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Schnittstelle zu sammeln.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, Audioeingabegeräte zu verwenden. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) zu verwenden. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegeben wird, mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [WebOTP API](/de/docs/Web/API/WebOTP_API) zu verwenden, um ein Einmalpasswort (OTP) aus einer speziell formatierten SMS-Nachricht, die vom Server der App gesendet wird, anzufordern, d.h. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [Payment Request API](/de/docs/Web/API/Payment_Request_API) zu verwenden. Wenn diese Richtlinie aktiviert ist, wird der Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, ein Video über den entsprechenden API im Bild-im-Bild-Modus abzuspielen.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu verwenden, um neue asymmetrische Schlüsselanmeldedaten zu erstellen, d.h. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) zu verwenden, um bereits gespeicherte öffentliche Schlüsselanmeldedaten abzurufen, d.h. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) zu verwenden, um anzuzeigen, dass das Gerät den Bildschirm nicht ausschalten oder dimmen sollte.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [Web Serial API](/de/docs/Web/API/Web_Serial_API) zu verwenden, um mit seriellen Geräten zu kommunizieren, entweder direkt über einen seriellen Anschluss verbunden oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) zu verwenden, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}

  - : Steuert, ob einem Dokument, das in einem Drittanbieter-Kontext geladen wird (z. B. eingebettet in ein {{htmlelement("iframe")}}), gestattet ist, die [Storage Access API](/de/docs/Web/API/Storage_Access_API) zu verwenden, um Zugriff auf unpartitionierte Cookies anzufordern.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}

  - : Steuert den Zugriff auf die Übersetzungsfunktionalität der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}

  - : Steuert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [WebUSB API](/de/docs/Web/API/WebUSB_API) zu verwenden.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) zu verwenden, um Text, Links, Bilder und andere Inhalte an beliebige Ziele nach Wahl des Nutzers zu teilen, z.B. mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}

  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [Window Management API](/de/docs/Web/API/Window_Management_API) zu verwenden, um Fenster auf mehreren Displays zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Steuert, ob dem aktuellen Dokument gestattet ist, die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) zu verwenden, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Verwendung

#### Permissions-Policy-Header

Um allen Ursprüngen Zugriff auf Geolokalisierung zu gewähren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugriff auf eine Teilmenge von Ursprüngen zu gewähren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem der Header mit einer kommagetrennten Liste von Richtlinien gesendet wird oder ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel sind die folgenden äquivalent:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit ein `<iframe>` eine Funktion aktiviert haben kann, muss sein zulässiger Ursprung auch in der `allowlist` der übergeordneten Seite aufgeführt sein. Aufgrund dieses [Vererbungverhaltens](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die breiteste akzeptable Unterstützung für eine Funktion im HTTP-Header anzugeben und dann die Untermenge der Unterstützung, die Sie benötigen, in jedem `<iframe>` zu spezifizieren.

Um allen Ursprüngen Zugriff auf Geolokalisierung zu gewähren, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie für den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Wenn ein `<iframe>` standardmäßig zu einem anderen Ursprung navigiert, wird die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Indem der Ursprung, zu dem das `<iframe>` navigiert, im `allow`-Attribut aufgeführt wird, wird die ursprüngliche für das `<iframe>` angewendete Permissions Policy auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem eine durch Semikolon getrennte Liste von Richtliniendirektiven im `allow`-Attribut angegeben wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es lohnt sich, dem `src`-Wert eine besondere Erwähnung zu geben. Wir haben oben erwähnt, dass die Verwendung dieses `allowlist`-Wertes bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument aus dem gleichen Ursprung stammt wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut. Dieser Wert ist der _Standard_-`allowlist`-Wert für Funktionen, die in `allow` aufgelistet sind, daher sind die folgenden äquivalent:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

### Den Zugriff auf leistungsstarke Funktionen verweigern

SecureCorp Inc. möchte die Mikrofon- (zum Beispiel [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation) APIs in seiner Anwendung deaktivieren. Dies kann mit dem folgenden Antwort-Header erreicht werden:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Indem `()` für die Ursprungs-Liste angegeben wird, werden die spezifizierten Funktionen für alle Browsing-Kontexte (einschließlich aller `<iframe>`s) deaktiviert, unabhängig von ihrem Ursprung.

### Kombination von HTTP-Header und `<iframe>`-Richtlinien

Zum Beispiel, wenn wir die Nutzung von Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalte von unserem vertrauenswürdigen Werbenetzwerk aktivieren möchten, könnten wir die seitenweite Permissions Policy wie folgt festlegen:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den `https://trusted-ad-network.com`-Ursprung wie folgt festlegen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in das `<iframe>` geladen wird, hätte es keinen Zugriff auf Geolokalisierung:

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
