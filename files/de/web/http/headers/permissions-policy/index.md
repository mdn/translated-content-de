---
title: Permissions-Policy
slug: Web/HTTP/Headers/Permissions-Policy
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header **`Permissions-Policy`** bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder innerhalb von darin enthaltenen {{HTMLElement("iframe")}}-Elementen zu erlauben und zu verweigern.

Weitere Informationen finden Sie im Hauptartikel zur [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : Die `Permissions Policy`-Direktive, auf die die `Erlaubnisliste` angewendet werden soll. Eine Liste der zulässigen Direktivnamen finden Sie unter [Directives](#direktiven) unten.
- `<allowlist>`

  - : Eine Erlaubnisliste ist eine Liste von Quellen, die einen oder mehrere der folgenden Werte in Klammern enthalten, getrennt durch Leerzeichen:

    - `*` (Wildcard)
      - : Die Funktion wird in diesem Dokument und allen eingebetteten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
    - `()` (leere Erlaubnisliste)
      - : Die Funktion ist in obersten und eingebetteten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>` `allow`-Attribute ist `'none'`.
    - `self`
      - : Die Funktion wird in diesem Dokument und in allen eingebetteten Browsing-Kontexten (`<iframe>`s) im gleichen Ursprung erlaubt. Die Funktion ist in fremden Dokumenten in eingebetteten Browsing-Kontexten nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` betrachtet werden. Das Äquivalent für `<iframe>` `allow`-Attribute ist `self`.
    - `src`
      - : Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument aus dem gleichen Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert wird nur im `<iframe>` `allow`-Attribut verwendet und ist der _Standard_ `allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`
      - : Die Funktion ist für spezifische Ursprünge erlaubt (z. B. `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>` `allow`-Attributen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` dürfen nur allein verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

    > [!NOTE]
    > Direktiven haben eine Standard-Erlaubnisliste, die immer entweder `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten steuert, wenn sie nicht explizit in einer Richtlinie aufgeführt sind.
    > Diese sind auf den einzelnen [Direktivreferenzseiten](#direktiven) angegeben. Für `<iframe>` `allow`-Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Wildcards in Permissions Policy-Ursprüngen einschließen. Das bedeutet, dass Sie anstelle mehrerer verschiedener Subdomains in einer Erlaubnisliste alle in einem einzigen Ursprung mit einer Wildcard angeben können.

Anstelle von

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie angeben

```http
("https://example.com" "https://*.example.com")
```

> **Hinweis:** `"https://*.example.com"` stimmt nicht mit `"https://example.com"` überein.

## Direktiven

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument Informationen über die Beschleunigung des Geräts über die [`Accelerometer`](/de/docs/Web/API/Accelerometer)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument Informationen über die Umgebungshelligkeit des Geräts über die [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) nutzen darf.

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument Medien automatisch abspielen darf, die über die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Schnittstelle angefordert werden. Wenn diese Richtlinie deaktiviert ist und keine Benutzeraktionen vorliegen, wird das {{jsxref("Promise")}}, das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen. Das autoplay-Attribut bei {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}

  - : Steuerung, ob die Verwendung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, werden die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das durch [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, entweder `false` zurückgeben oder das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) zurückweisen.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Experimental_Inline}} {{non-standard_inline}}

  - : Steuerung des Zugriffs auf die [Topics API](/de/docs/Web/API/Topics_API). Wenn eine Richtlinie die Nutzung der Topics API ausdrücklich verbietet, schlagen Versuche fehl, die Methode [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, und es wird ein `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}

  - : Steuerung, ob das aktuelle Dokument Videoeingabegeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das durch [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}

  - : Steuerung des Zugriffs auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}

  - : Steuerung, ob das aktuelle Dokument die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) verwenden darf, um Bildschirmfelder aufzuzeichnen. Wenn diese Richtlinie deaktiviert ist, wird das durch `getDisplayMedia()` zurückgegebene Promise mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen, wenn keine Berechtigung zum Aufzeichnen der Bildschirminhalte erlangt wird.

- {{httpheader('Permissions-Policy/document-domain','document-domain')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument [`document.domain`](/de/docs/Web/API/Document/domain) setzen darf. Wenn diese Richtlinie deaktiviert ist, schlägt der Versuch, [`document.domain`](/de/docs/Web/API/Document/domain) zu setzen, fehl und ein `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) wird ausgelöst.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das durch [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegeben wird, mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}

  - : Steuerung, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} zurückgewiesen.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.
    Wenn diese Richtlinie deaktiviert ist, werfen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException), und die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}

  - : Steuerung, ob das aktuelle Dokument die [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle verwenden darf. Wenn diese Richtlinie deaktiviert ist, führen Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu, dass die Rückruffunktion dieser Methoden mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von `PERMISSION_DENIED` aufgerufen wird.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument Informationen über die Orientierung des Geräts über die [`Gyroscope`](/de/docs/Web/API/Gyroscope)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) verwenden darf, um eine Verbindung zu seltenen oder exotischen Eingabegeräten wie alternativen Tastaturen oder Gamepads herzustellen.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) und insbesondere die Methode [`navigator.credentials.get()`](/de/docs/Web/API/CredentialsContainer/get) mit einer `identity`-Option verwenden darf. Wo diese Richtlinie die Nutzung der API verbietet, wird das {{jsxref("Promise")}}, das durch den `get()`-Aufruf zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, z. B. um in Chat-Anwendungen einen "verfügbar"/"abwesend"-Status zu melden.

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument Daten über die lokal installierten Schriften des Benutzers über die Methode [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) sammeln darf (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument Informationen über die Orientierung des Geräts über die [`Magnetometer`](/de/docs/Web/API/Magnetometer)-Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}

  - : Steuerung, ob das aktuelle Dokument Audioeingabegeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das durch [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das durch [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegeben wird, mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen.

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) nutzen darf, um ein Einmalkennwort (OTP) aus einer speziell formatierten SMS-Nachricht zu erfassen, die vom Server der App gesendet wird, d. h. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) verwenden darf. Wenn diese Richtlinie aktiviert ist, wird der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest)-Konstruktor einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen.

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument ein Video im Bild-in-Bild-Modus über die entsprechende API abspielen darf.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um neue asymmetrische Schlüsselanmeldeinformationen zu erstellen, d. h. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}

  - : Steuerung, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) verwenden darf, um bereits gespeicherte öffentliche Schlüsselanmeldeinformationen abzurufen, d. h. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}

  - : Steuerung, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) verwenden darf, um anzugeben, dass das Gerät den Bildschirm nicht ausschalten oder dimmen soll.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument die [Web Serial API](/de/docs/Web/API/Web_Serial_API) verwenden darf, um mit seriellen Geräten zu kommunizieren, entweder direkt über einen seriellen Anschluss oder über USB- oder Bluetooth-Geräte, die einen seriellen Anschluss emulieren.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) verwenden darf, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}

  - : Steuerung, ob ein Dokument, das in einem Drittanbieter-Kontext geladen wird (d. h. eingebettet in ein {{htmlelement("iframe")}}), die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugriff auf nicht partitionierte Cookies anzufordern.

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}

  - : Steuerung, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}

  - : Steuerung, ob das aktuelle Dokument die [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Text, Links, Bilder und andere Inhalte zu beliebigen Zielen nach Wahl des Benutzers zu teilen, z. B. mobile Apps.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}

  - : Steuerung, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) verwenden darf, um Fenster auf mehreren Displays zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Steuerung, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Nutzung

#### Permissions-Policy-Header

Um allen Ursprüngen Zugriff auf die Geolokalisierung zu gewähren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugriff auf einen Teil der Ursprünge zu gewähren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig durch Senden des Headers mit einer durch Kommas getrennten Liste von Richtlinien oder durch Senden eines separaten Headers für jede Richtlinie gesteuert werden.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit ein `<iframe>` eine Funktion aktiviert hat, muss der erlaubte Ursprung auch in der Erlaubnisliste für die Hauptseite enthalten sein. Aufgrund dieses [Vererbung-Verhaltens](/de/docs/Web/HTTP/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die breiteste akzeptable Unterstützung für eine Funktion im HTTP-Header anzugeben und dann den Unterstützungsumfang, den Sie benötigen, in jedem `<iframe>` anzugeben.

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

Dies ist wichtig: Standardmäßig wird, wenn ein `<iframe>` zu einem anderen Ursprung navigiert, die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Durch das Auflisten des Ursprungs, zu dem das `<iframe>` navigiert, im `allow`-Attribut wird die `Permissions Policy`, die ursprünglich auf das `<iframe>` angewendet wurde, auch auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig durch Einfügen einer durch Semikolon getrennten Liste von Richtliniendirektiven in das `allow`-Attribut gesteuert werden.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es lohnt sich, den `src`-Wert besonders zu erwähnen. Wir haben oben erwähnt, dass die Verwendung dieses Erlaubnislistenwerts bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument aus dem gleichen Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der _Standard_ `allowlist` Wert für Funktionen, die in `allow` aufgeführt sind, sodass die folgenden gleichwertig sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

### Zugang zu leistungsstarken Funktionen verweigern

SecureCorp Inc. möchte die Mikrofon- (zum Beispiel [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation)-APIs in seiner Anwendung deaktivieren. Dies kann es mit dem folgenden Antwort-Header tun:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Indem `()` für die Ursprungs-Liste angegeben wird, werden die angegebenen Funktionen für alle Browsing-Kontexte deaktiviert (einschließlich aller `<iframe>`s), unabhängig von ihrem Ursprung.

### Kombination von HTTP-Header und `<iframe>`-Richtlinien

Zum Beispiel, sagen wir, wir wollten die Nutzung der Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten von unserem vertrauenswürdigen Werbenetzwerk erlauben. Wir könnten die seitenweite `Permissions Policy` folgendermaßen einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` folgendermaßen einstellen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung letztendlich in das `<iframe>` geladen wird, hätte er keinen Zugriff auf die Geolokalisierung:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) und [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
