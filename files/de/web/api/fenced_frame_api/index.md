---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

Die **Fenced Frame API** bietet Funktionen zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind.

## Konzepte und Verwendung

Eine Hauptquelle von [Privacy](/de/docs/Web/Privacy)- und [Sicherheits](/de/docs/Web/Security)-Problemen im Web sind Inhalte, die in {{htmlelement("iframe")}}-Elementen eingebettet sind. Historisch wurden `<iframe>`s verwendet, um Drittanbieter-Cookies zu setzen, die verwendet werden können, um Informationen zu teilen und Nutzer über Websites hinweg zu verfolgen. Darüber hinaus kann der in einem `<iframe>` eingebettete Inhalt mit seinem einbettenden Dokument kommunizieren (zum Beispiel mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann auch Skripte verwenden, um verschiedene Arten von Informationen aus dem `<iframe>` zu lesen — zum Beispiel können Sie signifikante Tracking/Fingerprinting-Daten erhalten, indem Sie die eingebettete URL aus der `src`-Eigenschaft lesen, insbesondere, wenn sie [URL-Parameter](/de/docs/Web/URI#query) enthält. Das `<iframe>` kann auch auf den DOM-Kontext des einbettenden Dokuments zugreifen und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen zur Partitionierung von Speicher, damit Cookie-Daten nicht mehr für das Tracking verwendet werden können (siehe beispielsweise [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) oder [Firefox State Partitioning](/de/docs/Web/Privacy/Guides/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein weiteres Stück dieses Puzzles zu lösen — sie sind `<iframe>`s in Form und Funktion sehr ähnlich, außer dass:

- Kommunikation nicht zwischen dem `<fencedframe>`-Inhalt und seiner einbettenden Seite geteilt werden kann.
- Ein `<fencedframe>` kann auf datenübergreifende Inhalte zugreifen, dies jedoch nur in einem sehr spezifischen Satz kontrollierter Umstände, die die Privatsphäre der Nutzer bewahren.
- Ein `<fencedframe>` kann nicht frei manipuliert werden oder seine Daten über reguläre Skripte zugänglich gemacht werden (beispielsweise das Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf den DOM-Kontext des einbettenden Dokuments zugreifen, und umgekehrt.

Für weitere Informationen über das Kommunikationsmodell von Fenced Frames lesen Sie den [Leitfaden zur Kommunikation mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`-Elemente werden von anderen APIs verwendet, um verschiedene Arten von datenübergreifenden Inhalten einzubetten oder Daten zu sammeln, um unterschiedliche Anwendungsfälle auf eine die Privatsphäre wahrende Weise zu erfüllen. Die meisten davon stützten sich zuvor auf Drittanbieter-Cookies oder andere Mechanismen, die schlecht für die Privatsphäre waren.

- Die [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage) bietet Zugriff auf unpartitionierte datenübergreifende Inhalte in einer sicheren Umgebung und berechnet und/oder zeigt Ergebnisse in einem `<fencedframe>` an. Zum Beispiel:
  - Werbetreibende können die Reichweite einer Anzeige messen oder nachfolgende Anzeigen basierend darauf schalten, welche Benutzer diese bereits auf anderen Websites gesehen haben.
  - Entwickler können A/B-Tests durchführen, bei denen Varianten einem Benutzer basierend auf der Gruppe, zu der er gehört, gezeigt werden oder basierend auf der Anzahl der Benutzer, die jede Variante bereits gesehen haben.
  - Unternehmen können die Benutzererfahrung basierend darauf anpassen, was die Benutzer auf anderen Websites gesehen haben. Zum Beispiel, wenn sie bereits eine Mitgliedschaft gekauft haben, möchten Sie ihnen möglicherweise keine Mitgliedschafts-Registrierungsanzeigen auf Ihren anderen Websites zeigen.
- Die [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) ermöglicht Entwicklern die Implementierung von interessengruppenbasierter Werbung, nämlich Remarketing und benutzerdefinierte Zielgruppenanwendungsfälle. Sie kann mehrere Gebote für Werbeflächen bewerten und die gewinnende Anzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) kann Daten aus `<fencedframe>`-Elementen sammeln (die aus dem gemeinsamen Speicher oder der Protected Audience API stammen) und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`-Elemente?

Wie oben erwähnt, steuern Sie die in einem {{htmlelement("fencedframe")}} eingebetteten Inhalte nicht direkt über reguläre Skripte.

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt werden soll, generiert eine nutzende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann per JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` aus einer Anzeigenauktion der Protected Audience API, die dann verwendet wird, um die gewinnende Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, wird das resultierende {{jsxref("Promise")}} zu einem undurchsichtigen [URN](/de/docs/Web/URI#urns) (zum Beispiel `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`) aufgelöst, das nur in einem `<iframe>` verwendet werden kann.

In jedem Fall speichert der Browser eine URL, die den Zielort des einzubettenden Inhalts enthält, die der undurchsichtigen URN oder der internen `url`-Eigenschaft des `FencedFrameConfig` zugeordnet ist. Der URL-Wert kann nicht von JavaScript im einbettenden Kontext gelesen werden.

> [!NOTE]
> Unterstützung wird für undurchsichtige URNs in `<iframe>`s bereitgestellt, um die Migration bestehender Implementierungen zu [Privacy Sandbox](https://privacysandbox.google.com/)-APIs zu erleichtern. Diese Unterstützung ist als temporär vorgesehen und wird in Zukunft entfernt, wenn die Adoption zunimmt.

> **Hinweis:** `FencedFrameConfig` verfügt über eine [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode, die verwendet wird, um Daten aus dem einbettenden Dokument in den gemeinsamen Speicher des `<fencedframe>` zu übergeben. Es könnte zum Beispiel in einem [`Worklet`](/de/docs/Web/API/Worklet) über das `<fencedframe>` zugänglich gemacht und zum Erzeugen eines Berichts verwendet werden. Weitere Einzelheiten finden Sie in der [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage).

### Zugriff auf Fenced Frame-Funktionalität auf dem `Fence`-Objekt

In Dokumenten, die in `<fencedframe>`-Elementen eingebettet sind, hat JavaScript Zugriff auf eine [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere Funktionen, die speziell für die Funktionalität der Fenced Frame API relevant sind.
Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, die Übermittlung von Berichterstellungsdaten über ein [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere angegebene URLs auszulösen, um Anzeigenansichten und -klicks zu melden.

### Berechtigungspolitik

Nur bestimmte Funktionen, die für die Verwendung in `<fencedframe>`-Elementen ausgelegt sind, können über Berechtigungspolitiken aktiviert werden, die auf ihnen festgelegt sind; andere politikgesteuerte Funktionen stehen in diesem Kontext nicht zur Verfügung. Siehe [Berechtigungspolitiken, die für Fenced Frames verfügbar sind](/de/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit einem Wert von `fencedframe` wird für alle Anfragen gesetzt, die von innerhalb eines `<fencedframe>` gemacht werden, einschließlich eingebetteten `<iframe>`s in einem `<fencedframe>`.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Antwortheader mit einem Wert von `fenced-frame` für jedes Dokument setzen, das in ein `<fencedframe>` geladen werden soll, oder für `<iframe>`s, die in einem `<fencedframe>` eingebettet sind.

```http
Supports-Loading-Mode: fenced-frame
```

Andere Effekte von Fenced Frames auf HTTP-Header sind wie folgt:

- [User-agent client hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind innerhalb von Fenced Frames nicht verfügbar, da sie auf [permissions policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegierung beruhen, was verwendet werden könnte, um Daten zu leaken.
- Strenge [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden auf neue Browsing-Kontexte angewendet, die von innerhalb von Fenced Frames geöffnet werden, da sie sonst verwendet werden könnten, um Informationen auf andere Ursprünge zu leaken. Jedes neue Fenster, das von innerhalb eines Fenced Frames geöffnet wird, wird [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) und `Cross-Origin-Opener-Policy: same-origin` gesetzt haben, um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und es in seiner eigenen Browsing-Kontextgruppe platziert wird.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für verschachtelte Browsing-Kontexte anzugeben, die in `<fencedframe>`-Elementen geladen werden.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox)-benutzerdefinierte Einstellungen können nicht von Fenced Frames geerbt werden, um Privacy-Probleme abzuschwächen. Um ein Fenced Frame zu laden, müssen Sie kein `sandbox`-CSP angeben (was die unten stehenden Werte impliziert) oder die folgenden `sandbox`-Werte angeben:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` und `unload`-Ereignisse

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignisse werden auf Fenced Frames nicht ausgelöst, da sie Informationen in Form eines Seitendatierungszeitpunkts leaken können. Implementierungen zielen darauf ab, so viele potenzielle Lecks wie möglich zu eliminieren.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. welcher Inhalt in ihm angezeigt wird. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben und als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere Funktionen, die für die Funktionalität von Fenced Frame relevant sind. Nur für Dokumente verfügbar, die in einem `<fencedframe>` eingebettet sind.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und bietet Eigenschaften, um es zu konfigurieren.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt angegebene Zeichenfolgen innerhalb der zugeordneten URL, die einer gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft von `FencedFrameConfig` entspricht.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentkontext zurück. Nur für Dokumente verfügbar, die in einem `<fencedframe>` eingebettet sind.

## Registrierung und lokales Testen

Bestimmte API-Funktionen, die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s erstellen, wie etwa [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) ([Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience)) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ([Shared Storage API](/de/docs/Web/API/Shared_Storage_API)), sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent), erfordern, dass Sie Ihre Website in einem [Privacy Sandbox-Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) registrieren. Wenn Sie dies nicht tun, werden die API-Aufrufe mit einer Konsolenwarnung fehlschlagen.

> [!NOTE]
> In Chrome können Sie Ihren Fenced Frame-Code weiterhin lokal ohne Registrierung testen. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos verwenden alle `<fencedframe>`-Elemente:

- [Shared Storage API Demos](https://shared-storage-demo.web.app/) (einschließlich einiger Private Aggregation API-Beispiele)
- [Protected Audience API Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
