---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: 0c906f7f464d8ff632baf8d25fa63eed3f03b632
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

> [!WARNING]
> Dieses Feature wird derzeit von einem Browser-Anbieter abgelehnt.
> Details finden Sie im Abschnitt [Standards Positionen](#standards_positionen) unten.

Die **Fenced Frame API** bietet Funktionalität zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind.

## Konzepte und Verwendung

Eine Hauptquelle von [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheits-](/de/docs/Web/Security)problemen im Web sind Inhalte, die in {{htmlelement("iframe")}}-Elementen eingebettet sind. Historisch gesehen wurden `<iframe>`s verwendet, um Cookies von Drittanbietern zu setzen, die benutzt werden können, um Informationen zu teilen und Benutzer über Websites hinweg zu verfolgen. Darüber hinaus kann der in einem `<iframe>` eingebettete Inhalt mit dem einbettenden Dokument kommunizieren (zum Beispiel mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann auch Skripte verwenden, um verschiedene Formen von Informationen aus dem `<iframe>` zu lesen — beispielsweise können Sie potenziell signifikante Tracking/Fingerprinting-Daten erhalten, indem Sie die eingebettete URL aus der `src`-Eigenschaft lesen, besonders wenn sie [URL-Parameter](/de/docs/Web/URI/Reference/Query) enthält. Das `<iframe>` kann auch auf den DOM des einbettenden Kontexts zugreifen und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen zur Speicherpartitionierung, sodass Cookie-Daten nicht mehr zum Tracking verwendet werden können (siehe zum Beispiel [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) oder [Firefox State Partitioning](/de/docs/Web/Privacy/Guides/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein weiteres Stück dieses Puzzles zu lösen — sie sind `<iframe>`s in Form und Funktion sehr ähnlich, außer dass:

- Kommunikation nicht zwischen dem `<fencedframe>`-Inhalt und seiner einbettenden Website geteilt werden kann.
- Ein `<fencedframe>` kann auf cross-site-Daten zugreifen, allerdings nur unter einer sehr spezifischen Reihe von kontrollierten Umständen, die die Privatsphäre der Benutzer wahren.
- Ein `<fencedframe>` kann nicht frei manipuliert oder über reguläre Skripte seine Daten abgerufen werden (zum Beispiel das Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf den DOM des einbettenden Kontexts zugreifen, und der einbettende Kontext kann auch nicht auf den DOM des `<fencedframe>` zugreifen.

Für weitere Informationen über das Kommunikationsmodell von fenced frames lesen Sie den [Leitfaden zur Kommunikation mit eingebetteten Rahmen](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`s werden von anderen APIs verwendet, um verschiedene Arten von Cross-Site-Inhalten einzubetten oder Daten zu sammeln, wobei unterschiedliche Anwendungsfälle auf eine datenschutzfreundliche Weise erfüllt werden. Die meisten dieser Anwendungsfälle stützten sich zuvor auf Cookies von Drittanbietern oder andere Mechanismen, die schlecht für den Datenschutz waren.

- Die [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage) bietet Zugriff auf unpartitionierte cross-site-Daten in einer sicheren Umgebung, um Ergebnisse zu berechnen und/oder in einem `<fencedframe>` anzuzeigen. Beispielsweise:
  - Werbetreibende können die Reichweite einer Anzeige messen oder nachfolgende Anzeigen basierend darauf servieren, welche Nutzer bereits auf anderen Websites gesehen haben.
  - Entwickler können A/B-Tests durchführen und Varianten basierend auf einer Gruppe, der sie zugewiesen wurden, oder basierend darauf, wie viele Benutzer bereits jeden gesehen haben, anzeigen.
  - Unternehmen können die Benutzererfahrung basierend darauf anpassen, was diese auf anderen Websites gesehen haben. Beispielsweise, wenn sie bereits eine Mitgliedschaft erworben haben, möchten Sie ihnen möglicherweise keine Anmeldungen für Mitgliedschaften über Ihre anderen Immobilien anzeigen.
- Die [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) ermöglicht es Entwicklern, interessensbasierte Werbung zu implementieren, namentlich Remarketing und benutzerdefinierte Zielgruppennutzung. Sie kann mehrere Gebote für Anzeigenplatz evaluieren und die gewinnende Anzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) kann Daten aus `<fencedframe>`s (stammend von Shared Storage oder der Protected Audience API) sammeln und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`s?

Wie oben erwähnt, steuern Sie den in einem {{htmlelement("fencedframe")}} eingebetteten Inhalt nicht direkt über reguläre Skripte.

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann über JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` von einer Anzeigenauktion der Protected Audience API, die dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss im `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, wird der resultierende {{jsxref("Promise")}} in einer undurchsichtigen [URN](/de/docs/Web/URI/Reference/Schemes/urn) (zum Beispiel `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`) aufgelöst, die nur in einem `<iframe>` verwendet werden kann.

Wie auch immer, der Browser speichert eine URL, die den Zielort des eingebetteten Inhalts enthält — zugeordnet zur undurchsichtigen URN oder der internen `url`-Eigenschaft der `FencedFrameConfig`. Der URL-Wert kann nicht von JavaScript gelesen werden, das im einbettenden Kontext läuft.

> [!NOTE]
> Für undurchsichtige URNs in `<iframe>`s wird Unterstützung geboten, um die Migration bestehender Implementierungen zu den [Privacy Sandbox](https://privacysandbox.google.com/)-APIs zu erleichtern. Diese Unterstützung ist als temporär gedacht und wird entfernt, sobald die Akzeptanz wächst.

> [!NOTE]
> `FencedFrameConfig` hat eine [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode, die verwendet wird, um Daten aus dem einbettenden Dokument zum `<fencedframe>`'s Shared Storage zu übertragen. Es könnte zum Beispiel in einem [`Worklet`](/de/docs/Web/API/Worklet) über das `<fencedframe>` abgerufen und verwendet werden, um einen Bericht zu generieren. Siehe die [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage) für weitere Details.

### Zugriff auf die Funktionalität des fenced frame über das `Fence`-Objekt

Innerhalb von Dokumenten, die in `<fencedframe>`s eingebettet sind, hat JavaScript Zugriff auf eine [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere Funktionen, die speziell für die Funktionalität der Fenced Frame API relevant sind.
Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, die Übermittlung von Berichterstattungsdaten über einen [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere angegebene URLs auszulösen, um Anzeigenansichten und Klicks zu melden.

### Berechtigungspolitik

Nur spezifische Funktionen, die für die Verwendung in `<fencedframe>`s ausgelegt sind, können über Berechtigungspolitiken aktiviert werden, die auf ihnen festgelegt werden; andere durch Richtlinien kontrollierte Funktionen sind in diesem Kontext nicht verfügbar. Siehe [Berechtigungspolitiken, die für fenced frames verfügbar sind](/de/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit einem Wert von `fencedframe` wird für alle Anfragen gesetzt, die von innerhalb eines `<fencedframe>`s gemacht werden, inklusive eingebetteter `<iframe>`s innerhalb eines `<fencedframe>`.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Antwortheader mit einem Wert von `fenced-frame` für jedes Dokument setzen, das in ein `<fencedframe>` oder `<iframe>`, das in einem `<fencedframe>` eingebettet ist, geladen werden soll.

```http
Supports-Loading-Mode: fenced-frame
```

Weitere Auswirkungen von fenced frames auf HTTP-Header sind wie folgt:

- [User-agent client hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind innerhalb von fenced frames nicht verfügbar, da sie auf [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegierung beruhen, die zur Datenweitergabe genutzt werden könnte.
- Strikte [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden auf neue Browsing-Kontexte, die von innerhalb von fenced frames geöffnet werden, durchgesetzt, da sie sonst genutzt werden könnten, um Informationen an andere Ursprünge zu leaken. Jedes neue Fenster, das von innerhalb eines fenced frames geöffnet wird, wird mit [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) und `Cross-Origin-Opener-Policy: same-origin` gesetzt, um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und es in seiner eigenen Browsing-Kontextgruppe platziert.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für verschachtelte Browsing-Kontexte festzulegen, die in `<fencedframe>`-Elementen geladen sind.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) benutzerdefinierte Einstellungen können nicht von fenced frames geerbt werden, um Datenschutzprobleme zu mindern. Um ein fenced frame zu laden, müssen Sie keine `sandbox`-CSP (die die folgenden Werte impliziert) angeben oder die folgenden sandbox-Werte angeben:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` und `unload`-Events

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`unload`](/de/docs/Web/API/Window/unload_event)-Events werden nicht auf fenced frames ausgelöst, da sie Informationen in Form eines Seitenlöschungszeitstempels leaken können. Implementierungen zielen darauf ab, so viele potenzielle Lecks wie möglich zu beseitigen.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. was darin angezeigt wird. Eine `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben und als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere Funktionen, die für die Funktionalität eines Fenced Frame relevant sind. Verfügbar nur für Dokumente, die in einem `<fencedframe>` eingebettet sind.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und bietet Eigenschaften zur Konfiguration.

### Erweiterungen für andere Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt angegebene Zeichenfolgen innerhalb der zugeordneten URL, die einer gegebenen opaken URN oder der internen `url`-Eigenschaft von `FencedFrameConfig` entspricht.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt ein [`Fence`](/de/docs/Web/API/Fence)-Objekt für den aktuellen Dokumentenkontext zurück. Nur verfügbar für Dokumente, die in einem `<fencedframe>` eingebettet sind.

## Registrierung und lokale Tests

Bestimmte API-Funktionen, die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s erstellen, wie [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) ([Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience)) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ([Shared Storage API](/de/docs/Web/API/Shared_Storage_API)), sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent), erfordern, dass Sie Ihre Website in einem [Registrierungsprozess für die Privacy Sandbox](/de/docs/Web/Privacy/Guides/Privacy_sandbox#enrollment) anmelden. Wenn Sie dies nicht tun, schlagen die API-Aufrufe mit einer Konsolenwarnung fehl.

> [!NOTE]
> In Chrome können Sie Ihren fenced frame-Code weiterhin lokal testen, ohne sich anzumelden. Um lokale Tests zu ermöglichen, aktivieren Sie den folgenden Chrome-Entwickler-Flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos verwenden alle `<fencedframe>`s:

- [Shared Storage API-Demos](https://shared-storage-demo.web.app/) (die auch einige Beispiele für die Private Aggregation API enthalten)
- [Protected Audience API-Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

### Standards Positionen

Ein Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnt")}} diese Spezifikation ab.
Bekannte Standards-Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://github.com/mozilla/standards-positions/issues/781)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [Die Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
