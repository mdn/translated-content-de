---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

Die **Fenced Frame API** bietet Funktionen zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind.

## Konzepte und Verwendung

Eine der Hauptquellen für [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheitsprobleme](/de/docs/Web/Security) im Web sind Inhalte, die in {{htmlelement("iframe")}}-Elementen eingebettet sind. Historisch wurden `<iframe>`s verwendet, um Cookies von Drittanbietern zu setzen, die genutzt werden können, um Informationen zu teilen und Benutzer über Websites hinweg zu verfolgen. Zusätzlich kann der in einem `<iframe>` eingebettete Inhalt mit dem einbettenden Dokument kommunizieren (zum Beispiel mithilfe von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann auch Skripte nutzen, um verschiedene Informationen aus dem `<iframe>` zu lesen — zum Beispiel können bedeutende Tracking-/Fingerabdruckdaten gewonnen werden, indem die eingebettete URL aus der `src`-Eigenschaft gelesen wird, insbesondere wenn sie [URL-Parameter](/de/docs/Web/URI#query) enthält. Das `<iframe>` kann auch auf das DOM des einbettenden Kontexts zugreifen, und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen zur Partitionierung von Speicher, sodass Cookie-Daten nicht mehr für das Tracking verwendet werden können (siehe zum Beispiel [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) oder [Firefox State Partitioning](/de/docs/Web/Privacy/Guides/State_Partitioning)).

`<fencedframe>`-Elemente sollen ein weiteres Stück dieses Puzzles lösen — sie sind in Form und Funktion sehr ähnlich wie `<iframe>`s, außer dass:

- Die Kommunikation nicht zwischen dem `<fencedframe>`-Inhalt und seiner einbettenden Seite geteilt werden kann.
- Ein `<fencedframe>` kann auf siteübergreifende Daten zugreifen, jedoch nur in einem sehr spezifischen Satz kontrollierter Umstände, die die Privatsphäre der Benutzer schützen.
- Ein `<fencedframe>` kann nicht frei manipuliert oder seine Daten über reguläre Skripte abgerufen werden (zum Beispiel Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, und der einbettende Kontext kann nicht auf das DOM des `<fencedframe>` zugreifen.

Weitere Informationen über das Kommunikationsmodell von Fenced Frames finden Sie im [Leitfaden zur Kommunikation mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`s werden von anderen APIs verwendet, um verschiedene Arten von entsprechend eingebetteten Inhalten zu nutzen oder Daten zu sammeln, wobei verschiedene Anwendungsfälle in einer datenschutzfreundlichen Weise erfüllt werden. Die meisten dieser Anwendungsfälle basierten zuvor auf Cookies von Drittanbietern oder anderen Mechanismen, die schlecht für den Datenschutz waren.

- Die [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) bietet Zugriff auf unpartitionierte siteübergreifende Daten in einer sicheren Umgebung und berechnet und/oder zeigt Ergebnisse in einem `<fencedframe>` an. Zum Beispiel:
  - Werbetreibende können die Reichweite einer Anzeige messen oder nachfolgende Anzeigen basierend auf denen anzeigen, die Benutzer bereits auf anderen Websites gesehen haben.
  - Entwickler können A/B-Tests durchführen und Varianten basierend auf einer zugewiesenen Gruppe eines Benutzers oder basierend darauf, wie viele Benutzer jede Variante bereits gesehen haben, anzeigen.
  - Unternehmen können die Benutzererfahrung basierend auf dem, was auf anderen Websites gesehen wurde, anpassen. Zum Beispiel, wenn eine Mitgliedschaft bereits erworben wurde, möchten Sie möglicherweise keine Mitgliedschafts-Werbung auf anderen Sites zeigen.
- Die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) ermöglicht es Entwicklern, interessengruppenbasierte Werbung zu implementieren, namentlich Remarketing und benutzerdefinierte Zielgruppenanwendungsfälle. Sie kann mehrere Gebote für Werbeflächen auswerten und die gewinnende Anzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann Daten von `<fencedframe>`s sammeln (ausgehend von Shared Storage oder der Protected Audience API) und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`s?

Wie oben erwähnt, kontrollieren Sie die in einem {{htmlelement("fencedframe")}} eingebetteten Inhalte nicht direkt über reguläre Skripte.

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, generiert eine nutzenden API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, welches dann über JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` aus einer Werbeauktion der Protected Audience API, das dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss beim Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, wird das resultierende {{jsxref("Promise")}} zu einem undurchsichtigen [URN](/de/docs/Web/URI#urns) aufgelöst (zum Beispiel `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`), das nur in einem `<iframe>` verwendet werden kann.

In beiden Fällen speichert der Browser eine URL, die den Zielort der einzubettenden Inhalte enthält — entweder auf den undurchsichtigen URN gemappt oder auf die interne `url`-Eigenschaft des `FencedFrameConfig`. Der URL-Wert kann von JavaScript, das im einbettenden Kontext läuft, nicht gelesen werden.

> [!NOTE]
> Unterstützung wird für undurchsichtige URNs in `<iframe>`s bereitgestellt, um die Migration bestehender Implementierungen auf [Privacy Sandbox](https://developers.google.com/privacy-sandbox)-APIs zu erleichtern. Diese Unterstützung ist als vorübergehend gedacht und wird in Zukunft entfernt, wenn die Verbreitung zunimmt.

> **Hinweis:** `FencedFrameConfig` verfügt über eine [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode, die verwendet wird, um Daten aus dem einbettenden Dokument in den `<fencedframe>` gemeinsamen Speicher zu übergeben. Diese könnten zum Beispiel in einem [`Worklet`](/de/docs/Web/API/Worklet) über den `<fencedframe>` zugegriffen und zur Generierung eines Berichts genutzt werden. Weitere Details finden Sie in der [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage).

### Zugriff auf Fenced Frame-Funktionalität auf dem `Fence`-Objekt

Innerhalb von Dokumenten, die in `<fencedframe>`s eingebettet sind, hat JavaScript Zugriff auf die [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere Funktionen, die speziell für die Funktionalität der Fenced Frame API relevant sind. Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, das Senden von Berichtsdaten über ein [Beacon](/de/docs/Web/API/Beacon_API) oder mehrere angegebene URLs auszulösen, um Anzeigenansichten und -klicks zu melden.

### Berechtigungspolitik

Nur spezifische Funktionen, die für die Verwendung in `<fencedframe>`s entwickelt wurden, können über Berechtigungsrichtlinien aktiviert werden; andere durch Richtlinien kontrollierte Funktionen sind in diesem Kontext nicht verfügbar. Siehe [Berechtigungsrichtlinien, die für Fenced Frames verfügbar sind](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit dem Wert `fencedframe` wird für alle Anfragen gesetzt, die von innerhalb eines `<fencedframe>` gemacht werden, einschließlich von `<iframe>`s, die innerhalb eines `<fencedframe>`s eingebettet sind.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Antwortheader mit dem Wert `fenced-frame` setzen für jedes Dokument, das in ein `<fencedframe>` oder `<iframe>` eingebettet innerhalb eines `<fencedframe>` geladen werden soll.

```http
Supports-Loading-Mode: fenced-frame
```

Andere Auswirkungen von Fenced Frames auf HTTP-Header sind wie folgt:

- [User-agent Client-Hints](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) sind innerhalb von Fenced Frames nicht verfügbar, da sie von der [Berechtigungspolitik-](/de/docs/Web/HTTP/Permissions_Policy) Delegation abhängen, was zum Austreten von Daten führen könnte.
- Strenge [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden auf neuen Browsing-Kontexten, die von innerhalb von Fenced Frames geöffnet werden, durchgesetzt, da sie ansonsten zum Austreten von Informationen zu anderen Ursprüngen genutzt werden könnten. Jedes neue Fenster, das von innerhalb eines Fenced Frames geöffnet wird, wird mit [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) und `Cross-Origin-Opener-Policy: same-origin` gesetzt, um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und sich in seiner eigenen Browsing-Kontextgruppe befindet.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für verschachtelte Browsing-Kontexte anzugeben, die in `<fencedframe>`-Elemente geladen werden.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox) benutzerdefinierte Einstellungen können von Fenced Frames nicht geerbt werden, um Datenschutzprobleme zu mindern. Um einen Fenced Frame zu laden, müssen Sie entweder keine `sandbox` CSP spezifizieren (was die untenstehenden Werte impliziert) oder die folgenden Sandbox-Werte angeben:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload`- und `unload`-Events

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)- und [`unload`](/de/docs/Web/API/Window/unload_event)-Events werden bei Fenced Frames nicht ausgelöst, weil sie Informationen in Form eines Seitenlöschungszeitstempels lecken können. Implementierungen zielen darauf ab, so viele potenzielle Lecks wie möglich zu eliminieren.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d. h., welche Inhalte darin angezeigt werden. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben und als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere Funktionen, die für die Funktionalität der Fenced Frame API relevant sind. Nur für Dokumente verfügbar, die in einem `<fencedframe>` eingebettet sind.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und bietet Eigenschaften zu dessen Konfiguration.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt angegebene Zeichenfolgen in der zugeordneten URL, die einem gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft eines `FencedFrameConfig` entspricht.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt ein [`Fence`](/de/docs/Web/API/Fence)-Objekt für den aktuellen Dokumentkontext zurück. Nur für Dokumente verfügbar, die in einem `<fencedframe>` eingebettet sind.

## Registrierung und lokale Tests

Bestimmte API-Funktionen, die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekte erstellen, wie [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) ([Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience)) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ([Shared Storage API](/de/docs/Web/API/Shared_Storage_API)), sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent), erfordern, dass Sie Ihre Website in einem [Privacy Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) einschreiben. Wenn Sie dies nicht tun, werden die API-Aufrufe mit einer Konsolenwarnung fehlschlagen.

> [!NOTE]
> In Chrome können Sie Ihren Fenced Frame-Code dennoch lokal testen, ohne eine Registrierung. Um lokale Tests zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos verwenden alle `<fencedframe>`-Elemente:

- [Shared Storage API Demos](https://shared-storage-demo.web.app/) (die auch einige Private Aggregation API-Beispiele enthalten)
- [Protected Audience API Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [Die Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
