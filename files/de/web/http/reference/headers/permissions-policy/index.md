---
title: Permissions-Policy header
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

{{SeeCompatTable}}

Der HTTP **`Permissions-Policy`** {{Glossary("response_header", "Antwort-Header")}} bietet einen Mechanismus, um die Nutzung von Browser-Funktionen in einem Dokument oder innerhalb von {{HTMLElement("iframe")}}-Elementen im Dokument zu erlauben oder zu verweigern.

Verstöße gegen eine Richtlinie können über die [Reporting API](/de/docs/Web/API/Reporting_API) gemeldet werden.
Berichte können an einen Server gesendet werden, der im `report-to`-Parameter pro Richtlinie benannt ist, oder an den Server-Endpunkt namens `"default"` (die Zuordnung zwischen Server-Endpunkt-Namen und URLs wird mit dem {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header festgelegt).
Berichte können auch auf der Seite beobachtet werden, für die die Richtlinie durchgesetzt wird, mithilfe eines [`ReportingObserver`](/de/docs/Web/API/ReportingObserver).
Das Format des Berichts und zusätzliche Details sind in [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport) angegeben.

Für mehr Informationen, siehe den Hauptartikel über die [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
# Single directive
Permissions-Policy: <directive>=<allowlist>

# Single directive with reporting endpoint
Permissions-Policy: <directive>=<allowlist>;report-to=<endpoint>

# Multiple directives, with and without server reporting endpoints
Permissions-Policy: <directive>=<allowlist>, <directive>=<allowlist>;report-to=<endpoint>, ...
```

Der Header kann verwendet werden, um die Erlaubnislisten für eine oder mehrere Richtlinien festzulegen, optional mit einem `report-to`-Parameter pro Richtlinie, der den Server-Endpunkt angibt, zu dem Berichte über Richtlinienverstöße gesendet werden sollen.
Die Einträge für jede Richtlinie werden durch Kommas getrennt.

- `<directive>`
  - : Die Permissions-Policy-Richtlinie, auf die die `allowlist` angewendet werden soll. Siehe [Richtlinien](#richtlinien) unten für eine Liste der erlaubten Richtliniennamen.
- `<allowlist>`
  - : Eine Erlaubnisliste ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthalten und durch Leerzeichen getrennt sind:
    - `*` (Wildcard)
      - : Die Funktion wird in diesem Dokument und in allen eingebetteten Browsing-Kontexten (`<iframe>`s) ungeachtet ihres Ursprungs erlaubt.
    - `()` (leere Erlaubnisliste)
      - : Die Funktion wird in obersten und eingebetteten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>` `allow`-Attribute ist `'none'`.
    - `self`
      - : Die Funktion wird in diesem Dokument und in allen eingebetteten Browsing-Kontexten (`<iframe>`s) im gleichen Ursprung erlaubt. Die Funktion ist in Cross-Origin-Dokumenten in eingebetteten Browsing-Kontexten nicht erlaubt. `self` kann als Abkürzung für `https://your-site.example.com` betrachtet werden. Das Äquivalent für `<iframe>` `allow`-Attribute ist `self`.
    - `src`
      - : Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument aus dem gleichen Ursprung wie die URL im {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert wird nur im `<iframe>` `allow`-Attribut verwendet und ist der _default_ `allowlist`-Wert in `<iframe>`s.
    - `"<origin>"`
      - : Die Funktion ist für bestimmte Ursprünge erlaubt (zum Beispiel `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>` Allow-Attributen nicht in Anführungszeichen stehen.

    Die Werte `*` und `()` dürfen nur alleine verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden dürfen.

    > [!NOTE]
    > Richtlinien haben eine Standard-Erlaubnisliste, die immer eine der `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten regelt, wenn sie nicht explizit in einer Richtlinie aufgeführt sind.
    > Diese sind auf den einzelnen [Richtlinienreferenzseiten](#richtlinien) spezifiziert. Für `<iframe>` `allow`-Attribute ist das Standardverhalten immer `src`.

- `report-to=<endpoint>` {{optional_inline}}
  - : Der `report-to`-Parameter kann verwendet werden, um den Namen eines Reporting-Endpunkts anzugeben, an den Berichte gesendet werden, wenn es einen Richtlinienverstoß für die zugehörige Richtlinie gibt.
    Der Endpunktname und die zugehörige URL müssen in einem separaten {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header angegeben werden.

    Wenn er weggelassen wird, werden Berichte an den [`default`-Reporting-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) gesendet, wenn einer definiert wurde.
    Siehe [Reporting API](/de/docs/Web/API/Reporting_API) für mehr Informationen.

Wo unterstützt, können Sie Platzhalter in Ursprüngen der Permissions Policy einbeziehen.
Dies bedeutet, dass Sie statt mehrere verschiedene Subdomains explizit in einer Erlaubnisliste anzugeben, sie alle in einem einzigen Ursprung mit einem Platzhalter angeben können.

Statt:

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

Können Sie angeben:

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` entspricht nicht `"https://example.com"`.

## Richtlinien

- {{httpheader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Informationen über die Beschleunigung des Geräts über die [`Accelerometer`](/de/docs/Web/API/Accelerometer) Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Informationen über die Menge des Lichts in der Umgebung des Geräts über die [`AmbientLightSensor`](/de/docs/Web/API/AmbientLightSensor) Schnittstelle sammeln darf.

- {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [`ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) Methode verwenden darf, um {{Glossary("screen_reader", "Screenreader")}} Ankündigungen auszuführen.

- {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{deprecated_inline}} {{non-standard_inline}}
  - : Steuert den Zugriff auf die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

- {{httpheader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Medien, die über die [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) Schnittstelle angefordert werden, automatisch abspielen darf. Wenn diese Richtlinie deaktiviert ist und keine Benutzeraktionen erfolgten, wird das {{jsxref("Promise")}}, das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegeben wird, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das Autoplay-Attribut bei {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen wird ignoriert.

- {{httpheader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : Steuert, ob die Verwendung der [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) erlaubt ist. Wenn diese Richtlinie deaktiviert ist, werden die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth) Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, entweder `false` zurückgeben oder das zurückgegebene {{JSxRef("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.

- {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} {{deprecated_inline}} {{non-standard_inline}}
  - : Steuert den Zugriff auf die [Topics API](/de/docs/Web/API/Topics_API). Wo eine Richtlinie die Nutzung der Topics API ausdrücklich verbietet, werden alle Versuche, die [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) Methode aufzurufen oder eine Anfrage mit einem {{httpheader("Sec-Browsing-Topics")}} Header zu senden, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

- {{httpheader('Permissions-Policy/camera', 'camera')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument Videoinput-Geräte verwenden darf.
    Das {{jsxref("Promise")}}, das von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegeben wird, lehnt mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) ab, wenn die Erlaubnis nicht gestattet ist.

- {{HTTPHeader('Permissions-Policy/captured-surface-control', 'captured-surface-control')}} {{experimental_inline}}
  - : Steuert, ob das Dokument die [Captured Surface Control API](/de/docs/Web/API/Screen_Capture_API/Captured_Surface_Control) verwenden darf.
    Das von den Hauptmethoden der API zurückgegebene Promise wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt, wenn die Erlaubnis nicht erteilt ist.

- {{HTTPHeader('Permissions-Policy/ch-ua-high-entropy-values', 'ch-ua-high-entropy-values')}} {{experimental_inline}}
  - : Steuert, ob das Dokument die [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) Methode verwenden darf, um hoch-entzugsfreudige User-Agent-Daten abzurufen.
    Wenn die Erlaubnis nicht erteilt ist, wird die Methode nur die `brands`, `mobile` und `platform` niedrig-entzugsfreudige Daten zurückgeben.

- {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API).

- {{httpheader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument als [cross-origin isolation](/de/docs/Web/API/Window/crossOriginIsolated) behandelt werden kann.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{experimental_inline}}
  - : Steuert die Zuweisung des [`fetchLater()` Kontingents](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) des obersten Ursprungs.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{experimental_inline}}
  - : Steuert die Zuweisung des geteilten Cross-Origin-Unterrahmen-`fetchLater()` Kontingents](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas).

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) Methode verwenden darf, um Bildschirm-Inhalte zu erfassen. Wenn diese Richtlinie deaktiviert ist, lehnt das von `getDisplayMedia()` zurückgegebene Promise mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) ab, wenn die Berechtigung zur Erfassung der Bildschirminhalte nicht erlangt wird.

- {{httpheader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) (EME) verwenden darf. Wenn diese Richtlinie deaktiviert ist, wird das {{jsxref("Promise")}}, das von [`Navigator.requestMediaKeySystemAccess()`](/de/docs/Web/API/Navigator/requestMediaKeySystemAccess) zurückgegeben wird, mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt.

- {{httpheader('Permissions-Policy/fullscreen','fullscreen')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf. Wenn diese Richtlinie deaktiviert ist, lehnt das zurückgegebene {{JSxRef("Promise")}} mit einem {{JSxRef("TypeError")}} ab.

- {{httpheader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.
    Wenn diese Richtlinie deaktiviert ist, werfen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException), und die [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) Ereignisse werden nicht ausgelöst.

- {{httpheader('Permissions-Policy/geolocation','geolocation')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [`Geolocation`](/de/docs/Web/API/Geolocation) Schnittstelle verwenden darf. Wenn diese Richtlinie deaktiviert ist, verursachen Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition), dass die Rückrufe mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) Code von `PERMISSION_DENIED` aufgerufen werden.

- {{httpheader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts über die [`Gyroscope`](/de/docs/Web/API/Gyroscope) Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebHID API](/de/docs/Web/API/WebHID_API) verwenden darf, um eine Verbindung mit ungewöhnlichen oder exotischen Mensch-Maschine-Schnittstellengeräten wie alternativen Tastaturen oder Gamepads herzustellen.

- {{httpheader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Federated Credential Management API (FedCM)](/de/docs/Web/API/FedCM_API) verwenden darf.

- {{httpheader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Idle Detection API](/de/docs/Web/API/Idle_Detection_API) verwenden darf, um zu erkennen, wann Benutzer mit ihren Geräten interagieren, beispielsweise um einen "verfügbar"/"abwesend"-Status in Chat-Anwendungen zu melden.

- {{httpheader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Sprachenerkennungsfunktionalität der [Übersetzungs- und Sprachenerkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Daten über die lokal installierten Schriftarten des Benutzers über die [`Window.queryLocalFonts()`](/de/docs/Web/API/Window/queryLocalFonts) Methode sammeln darf (siehe auch die [Local Font Access API](/de/docs/Web/API/Local_Font_Access_API)).

- {{httpheader('Permissions-Policy/local-network','local-network')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Netzwerk-Anfragen an lokale Adressen senden darf.

- {{httpheader('Permissions-Policy/local-network-access','local-network-access')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Netzwerk-Anfragen an lokale und Loopback-Adressen senden darf. Diese Richtliniendirektive ist ein Alias für die spezifischeren `local-network` und `loopback-network` Direktiven.

- {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Netzwerk-Anfragen an Loopback-Adressen senden darf.

- {{httpheader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument Informationen über die Ausrichtung des Geräts über die [`Magnetometer`](/de/docs/Web/API/Magnetometer) Schnittstelle sammeln darf.

- {{httpheader('Permissions-Policy/microphone','microphone')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument Audio-Eingabegeräte verwenden darf. Wenn diese Richtlinie deaktiviert ist, lehnt das von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zurückgegebene {{jsxref("Promise")}} mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web MIDI API](/de/docs/Web/API/Web_MIDI_API) verwenden darf. Wenn diese Richtlinie deaktiviert ist, lehnt das von [`Navigator.requestMIDIAccess()`](/de/docs/Web/API/Navigator/requestMIDIAccess) zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ab.

- {{httpheader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [On-Device-Spracherkennung](/de/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) Funktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API).

- {{httpheader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebOTP API](/de/docs/Web/API/WebOTP_API) nutzen darf, um ein Einmalpasswort (OTP) aus einer speziell formatierten SMS-Nachricht anzufordern, die vom Server der App gesendet wird, d.h. über [`navigator.credentials.get({otp: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Payment Request API](/de/docs/Web/API/Payment_Request_API) nutzen darf. Wenn diese Richtlinie aktiviert ist, wirft der [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest) Konstruktor einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException).

- {{httpheader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument ein Video im Picture-in-Picture-Modus über die entsprechende API abspielen darf.

- {{httpheader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} {{Experimental_Inline}}
  - : Steuert die Nutzung von [private state token](/de/docs/Web/API/Private_State_Token_API) `token-request` Operationen.

- {{httpheader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} {{Experimental_Inline}}
  - : Steuert die Nutzung von [private state token](/de/docs/Web/API/Private_State_Token_API) `token-redemption` und `send-redemption-record` Operationen.

- {{httpheader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) nutzen darf, um neue asymmetrische Schlüsselanmeldeinformationen zu erstellen, d.h. über [`navigator.credentials.create({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/create).

- {{httpheader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Authentication API](/de/docs/Web/API/Web_Authentication_API) nutzen darf, um bereits gespeicherte öffentliche Schlüsselanmeldeinformationen abzurufen, d.h. über [`navigator.credentials.get({publicKey: ..., ...})`](/de/docs/Web/API/CredentialsContainer/get).

- {{httpheader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Screen Wake Lock API](/de/docs/Web/API/Screen_Wake_Lock_API) nutzen darf, um anzuzeigen, dass das Gerät den Bildschirm nicht ausschalten oder verdunkeln soll.

- {{httpheader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Web Serial API](/de/docs/Web/API/Web_Serial_API) verwenden darf, um mit seriellen Geräten zu kommunizieren, die entweder direkt über einen seriellen Port oder über USB- oder Bluetooth-Geräte, die einen seriellen Port emulieren, verbunden sind.

- {{httpheader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) nutzen darf, um Lautsprecher aufzulisten und auszuwählen.

- {{httpheader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : Steuert, ob ein in einem Drittanbieter-Kontext geladenes Dokument (d.h. eingebettet in einem {{htmlelement("iframe")}}) die [Storage Access API](/de/docs/Web/API/Storage_Access_API) nutzen darf, um Zugriff auf nicht partitionierte Cookies zu beantragen.

- {{httpheader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Übersetzungfunktionalität der [Übersetzungs- und Sprachenerkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{httpheader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}
  - : Steuert den Zugriff auf die [Summarizer API](/de/docs/Web/API/Summarizer_API).

- {{httpheader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebUSB API](/de/docs/Web/API/WebUSB_API) verwenden darf.

- {{httpheader("Permissions-Policy/web-share", "web-share")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [`Navigator.share()`](/de/docs/Web/API/Navigator/share) der [Web Share API](/de/docs/Web/API/Web_Share_API) verwenden darf, um Texte, Links, Bilder und andere Inhalte an beliebige vom Benutzer ausgewählte Ziele, z.B. mobile Apps, zu teilen.

- {{httpheader("Permissions-Policy/window-management", "window-management")}} {{experimental_inline}}
  - : Steuert, ob das aktuelle Dokument die [Window Management API](/de/docs/Web/API/Window_Management_API) nutzen darf, um Fenster auf mehreren Anzeigen zu verwalten.

- {{httpheader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Steuert, ob das aktuelle Dokument die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwenden darf, um mit einer WebXR-Sitzung zu interagieren.

## Beispiele

### Grundlegende Nutzung

#### Permissions-Policy-Header

Um allen Ursprüngen den Zugriff auf Geolokation zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=*
```

Oder um den Zugriff auf eine Teilmenge von Ursprüngen zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem der Header mit einer durch Kommata getrennten Liste von Richtlinien gesendet wird, oder indem ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://example.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://example.com/)
Permissions-Policy: camera=*
```

#### iframes

Damit ein `<iframe>` eine Funktion aktiviert hat, muss sein erlaubter Ursprung auch in der Erlaubnisliste der übergeordneten Seite sein. Aufgrund dieses [Vererbungsverhaltens](/de/docs/Web/HTTP/Guides/Permissions_Policy#inheritance_of_policies_for_embedded_content) ist es eine gute Idee, die breiteste akzeptable Unterstützung für eine Funktion im HTTP-Header anzugeben und dann die benötigte Teilmenge an Unterstützung in jedem `<iframe>` zu spezifizieren.

Um allen Ursprüngen den Zugriff auf Geolokation zu erlauben, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation *"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig gilt die Richtlinie nicht für den Ursprung, auf den das `<iframe>` navigiert, wenn ein `<iframe>` zu einem anderen Ursprung navigiert. Wenn der Ursprung, auf den das `<iframe>` navigiert, im `allow`-Attribut aufgelistet ist, wird die Permissions Policy, die auf das ursprüngliche `<iframe>` angewendet wurde, auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine mit Semikolon getrennte Liste von Richtliniendirektiven im `allow`-Attribut enthalten ist.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist erwähnenswert, dem `src`-Wert besondere Aufmerksamkeit zu widmen. Wir haben oben erwähnt, dass die Verwendung dieses Erlaubnislistenwertes bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument aus dem gleichen Ursprung wie die URL im {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der _Standard_ `allowlist`-Wert für Funktionen, die in `allow` aufgelistet sind, daher sind die folgenden gleichwertig:

```html
<iframe src="https://example.com" allow="geolocation 'src'"></iframe>
<iframe src="https://example.com" allow="geolocation"></iframe>
```

### Zugang zu leistungsstarken Funktionen verweigern

SecureCorp Inc. möchte die APIs für Mikrofon (zum Beispiel [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)) und [`Geolocation`](/de/docs/Web/API/Geolocation) in seiner Anwendung deaktivieren. Dies kann mit dem folgenden Antwort-Header erreicht werden:

```http
Permissions-Policy: microphone=(), geolocation=()
```

Durch die Angabe von `()` für die Ursprungsauflistung werden die angegebenen Funktionen für alle Browsing-Kontexte (einschließlich aller `<iframe>`s) deaktiviert, ungeachtet ihres Ursprungs.

### Kombination von HTTP-Header- und `<iframe>`-Richtlinien

Angenommen, wir möchten die Nutzung der Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten von unserem vertrauenswürdigen Ad-Netzwerk aktivieren. Wir könnten die seitenweite Permissions Policy so einrichten:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

In unseren Ad-`<iframe>`s könnten wir den Zugriff auf den `https://trusted-ad-network.com`-Ursprung wie folgt festlegen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung letztendlich in das `<iframe>` geladen wird, hätte er keinen Zugriff auf Geolokation:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

### Verstöße melden

Dieses Beispiel zeigt, wie die Berichterstattung von `Permissions-Policy`-Verstößen an einen Server-Endpunkt konfiguriert wird.

Die untenstehenden Antwort-Header blockieren Geolokation und definieren den Namen des Reporting-Endpunkts für die Funktion als "geo_endpoint".
Der {{HTTPHeader("Reporting-Endpoints")}} HTTP-Antwort-Header wird verwendet, um die URL dieses Endpunktnamens zu definieren.

```http
Reporting-Endpoints: geo_endpoint="https://example.com/reports"
Permissions-Policy: geolocation=();report-to=geo_endpoint
```

> [!NOTE]
> Um alle Verletzungsberichte an denselben Endpunkt zu senden, könnten wir stattdessen den [`"default"`-Reporting-Endpunkt](/de/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints#default_reporting_endpoint) definieren:
>
> ```http
> Reporting-Endpoints: default="https://example.com/reports"
> Permissions-Policy: geolocation=()
> ```

Ein Verstoß tritt auf, wenn eine Seite versucht, die blockierte Funktion zu nutzen, zum Beispiel:

```js
navigator.geolocation.getCurrentPosition(
  () => {},
  () => {},
);
```

Die [Berichtsladung](/de/docs/Web/API/Reporting_API#reporting_server_endpoints), die an den Endpunkt gesendet wird, könnte folgendermaßen aussehen:

```json
[
  {
    "age": 48512,
    "body": {
      "columnNumber": 29,
      "disposition": "enforce",
      "lineNumber": 44,
      "message": "Permissions policy violation: geolocation access has been blocked because of a permissions policy applied to the current document.",
      "featureId": "geolocation",
      "sourceFile": "https://example.com/"
    },
    "type": "permissions-policy-violation",
    "url": "https://example.com/",
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36"
  }
]
```

> [!NOTE]
> Chromes serielle Berichterstattung von Verstößen auf Server-Seite verwendet `policyId` anstelle von [`featureId`](/de/docs/Web/API/PermissionsPolicyViolationReport#featureid) für den Feature-Namen im `body` eines Server-Berichts.
> Das [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport), das von einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zurückgegeben wird, folgt der Spezifikation.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- {{HTTPHeader("Permissions-Policy-Report-Only")}}
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) und [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
- {{HTTPHeader("Reporting-Endpoints")}}
- [`PermissionsPolicyViolationReport`](/de/docs/Web/API/PermissionsPolicyViolationReport)
- [`ReportingObserver`](/de/docs/Web/API/ReportingObserver)
- [Reporting API](/de/docs/Web/API/Reporting_API)
