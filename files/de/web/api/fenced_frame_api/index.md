---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

Die **Fenced Frame API** bietet Funktionalität zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind.

## Konzepte und Nutzung

Eine der Hauptquellen für [Datenschutz](/de/docs/Web/Privacy) und [Sicherheits](/de/docs/Web/Security)-probleme im Web sind Inhalte, die in {{htmlelement("iframe")}}-Elemente eingebettet sind. Historisch gesehen wurden `<iframe>`s verwendet, um Drittanbieter-Cookies zu setzen, die genutzt werden können, um Informationen zu teilen und Nutzer über Webseiten hinweg zu verfolgen. Zusätzlich kann der in einem `<iframe>` eingebettete Inhalt mit dem einbettenden Dokument kommunizieren (zum Beispiel mithilfe von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann auch Skripte verwenden, um verschiedene Arten von Informationen aus dem `<iframe>` zu lesen — zum Beispiel können Sie potenziell signifikante Tracking-/Fingerprinting-Daten aus dem eingebetteten URL von der `src`-Eigenschaft lesen, insbesondere wenn sie [URL-Parameter](/de/docs/Web/URI#query) enthält. Das `<iframe>` kann auch auf das DOM des einbettenden Kontexts zugreifen, und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen zur Speicherpartitionierung, sodass Cookie-Daten nicht mehr für das Tracking verwendet werden können (zum Beispiel siehe [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) oder [Firefox-Status-Partitionierung](/de/docs/Web/Privacy/Guides/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein weiteres Stück dieses Puzzles zu lösen — sie sind in Form und Funktion sehr ähnlich zu `<iframe>`s, mit dem Unterschied, dass:

- Kommunikation nicht zwischen den `<fencedframe>`-Inhalten und der einbettenden Webseite geteilt werden kann.
- Ein `<fencedframe>` auf domänenübergreifende Daten zugreifen kann, aber nur in einem sehr spezifischen Satz von kontrollierten Umständen, die die Privatsphäre der Nutzer wahren.
- Ein `<fencedframe>` nicht frei manipuliert oder seine Daten über reguläres Skripting (zum Beispiel Lesen oder Festlegen der Quell-URL) abgerufen werden können. `<fencedframe>`-Inhalte können nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` nicht auf das DOM des einbettenden Kontexts zugreifen kann, und umgekehrt.

Für weitere Informationen über das Kommunikationsmodell von Fenced Frames lesen Sie den [Leitfaden zu Kommunikation mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`s werden von anderen APIs verwendet, um verschiedene Arten von domänenübergreifenden Inhalten einzubetten oder Daten zu sammeln, wodurch unterschiedliche Anwendungsfälle auf privacy-freundliche Weise erfüllt werden. Die meisten dieser Anwendungsfälle haben vorher auf Drittanbieter-Cookies oder andere Mechanismen gesetzt, die der Privatsphäre abträglich waren.

- Die [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) bietet in einem sicheren Umfeld Zugang zu unpartitionierten domänenübergreifenden Daten, um Ergebnisse zu berechnen und/oder anzuzeigen in einem `<fencedframe>`. Zum Beispiel:
  - Werbetreibende können die Reichweite einer Anzeige messen oder nachfolgende Anzeigen basierend darauf bedienen, welche Benutzer bereits auf anderen Seiten gesehen haben.
  - Entwickler können A/B-Tests durchführen und Variationen einem Benutzer basierend auf einer Gruppe, der sie zugeordnet sind, oder darauf, wie viele Benutzer jede bereits gesehen haben, zeigen.
  - Unternehmen können die Benutzererfahrung basierend darauf anpassen, was Nutzer auf anderen Seiten gesehen haben. Zum Beispiel, wenn sie bereits eine Mitgliedschaft erworben haben, möchten Sie ihnen vielleicht keine Anzeigen für eine Mitgliedschaftsanmeldung über Ihre anderen Eigenschaften hinweg zeigen.
- Die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) erlaubt Entwicklern, interessenbasierte Werbung, nämlich Remarketing und benutzerdefinierte Zielgruppenanwendungsfälle, zu implementieren. Sie kann mehrere Gebote für Werbeflächen bewerten und die Gewinneranzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann Daten aus `<fencedframe>`s sammeln (stammend von Shared Storage oder der Protected Audience API) und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`s?

Wie oben erwähnt, kontrollieren Sie den eingebetteten Inhalt eines {{htmlelement("fencedframe")}} nicht direkt über reguläre Skripte.

Um einzurichten, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine nutzende API (wie [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann via JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` von einer Anzeigenauktion der Protected Audience API, die dann verwendet wird, um die Gewinneranzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, wird das resultierende {{jsxref("Promise")}} zu einem undurchsichtigen [URN](/de/docs/Web/URI#urns) (zum Beispiel `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`) aufgelöst, das nur in einem `<iframe>` verwendet werden kann.

So oder so speichert der Browser eine URL, die den Zielort des Inhalts einbettet — gemappt auf den undurchsichtigen URN oder die interne `url`-Eigenschaft des `FencedFrameConfig`. Der URL-Wert kann von JavaScript, das im einbettenden Kontext ausgeführt wird, nicht gelesen werden.

> [!NOTE]
> Unterstützung wird für undurchsichtige URNs in `<iframe>`s bereitgestellt, um die Migration bestehender Implementierungen zu [Privacy Sandbox](https://developers.google.com/privacy-sandbox) APIs zu erleichtern. Diese Unterstützung ist als vorübergehend gedacht und wird in Zukunft entfernt, wenn die Akzeptanz zunimmt.

> **Hinweis:** `FencedFrameConfig` hat eine [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode, die verwendet wird, um Daten vom einbettenden Dokument in den `<fencedframe>`-gemeinsamen Speicher zu übergeben. Sie könnte zum Beispiel in einem [`Worklet`](/de/docs/Web/API/Worklet) über das `<fencedframe>` abgerufen werden und genutzt werden, um einen Bericht zu erstellen. Siehe die [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) für weitere Details.

### Zugriff auf die Fenced Frame-Funktionalität über das `Fence`-Objekt

In Dokumenten, die in `<fencedframe>`s eingebettet sind, hat JavaScript Zugriff auf eine [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere Funktionen, die speziell für die Fenced Frame API-Funktionalität relevant sind. Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, die Übermittlung von Berichts-Daten über ein [Beacons](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifizierte URLs auszulösen, um Anzeigenansichten und Klicks zu melden.

### Berechtigungspolitik

Nur spezifische Funktionen, die dazu entwickelt wurden, in `<fencedframe>`s verwendet zu werden, können über Berechtigungspolitiken, die auf ihnen gesetzt werden, aktiviert werden; andere von der Politik kontrollierte Funktionen sind in diesem Kontext nicht verfügbar. Siehe [Verfügbarkeit von Berechtigungspolitiken für Fenced Frames](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) für mehr Details.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit dem Wert `fencedframe` wird für alle Anfragen gesetzt, die von innerhalb eines `<fencedframe>` gestellt werden, einschließlich eingebetteter Kind-`<iframe>`s innerhalb eines `<fencedframe>`.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Antwort-Header mit dem Wert `fenced-frame` für jedes Dokument setzen, das in ein `<fencedframe>` geladen werden soll oder ein `<iframe>`, das innerhalb eines `<fencedframe>` eingebettet ist.

```http
Supports-Loading-Mode: fenced-frame
```

Andere Effekte von Fenced Frames auf HTTP-Header sind wie folgt:

- [User-Agent Client Hints](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints) sind innerhalb von Fenced Frames nicht verfügbar, da sie auf [Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegation beruhen, die zum Datenleak verwendet werden könnte.
- Strenge [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden für neue Browser-Kontexte erzwungen, die von innerhalb eines Fenced Frames geöffnet wurden, da sie ansonsten verwendet werden könnten, um Informationen zu anderen Ursprüngen zu leaken. Jedes neue Fenster, das von innerhalb eines Fenced Frames geöffnet wird, hat [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) und `Cross-Origin-Opener-Policy: same-origin` gesetzt, um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und es in seine eigene Browsing-Kontextgruppe platziert.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für verschachtelte Browsing-Kontexte zu spezifizieren, die in `<fencedframe>`-Elemente geladen werden.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox)-benutzerdefinierte Einstellungen können nicht von Fenced Frames geerbt werden, um Datenschutzprobleme abzumildern. Damit ein Fenced Frame geladen werden kann, müssen Sie entweder keinen `sandbox`-CSP spezifizieren (was die untenstehenden Werte impliziert), oder die folgenden sandbox-Werte spezifizieren:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload`- und `unload`-Events

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`unload`](/de/docs/Web/API/Window/unload_event) Ereignisse werden für Fenced Frames nicht ausgelöst, da sie Informationen in Form eines Seitenlöschungszeitstempels leaken können. Implementierungen zielen darauf ab, so viele potenzielle Leaks wie möglich zu eliminieren.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. welchen Inhalt es anzeigt. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben und als Wert von [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere Funktionen, die für die Fenced Frame-Funktionalität relevant sind. Verfügbar nur für Dokumente, die innerhalb eines `<fencedframe>` eingebettet sind.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und stellt Eigenschaften zur Konfiguration bereit.

### Erweiterungen für andere Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt spezifizierte Zeichenfolgen innerhalb der gemappten URL, die einem gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft eines `FencedFrameConfig` entspricht.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt eine [`Fence`](/de/docs/Web/API/Fence)-Objektinstanz für den aktuellen Dokumentenkontext zurück. Verfügbar nur für Dokumente, die innerhalb eines `<fencedframe>` eingebettet sind.

## Registrierung und lokales Testen

Bestimmte API-Funktionen, die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s erstellen, wie [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) ([Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience)) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ([Shared Storage API](/de/docs/Web/API/Shared_Storage_API)), sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent), erfordern die Registrierung Ihrer Seite im [Privacy Sandbox Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment). Wenn Sie dies nicht tun, schlagen die API-Aufrufe mit einer Konsolenwarnung fehl.

> [!NOTE]
> In Chrome können Sie Ihren Fenced Frame-Code weiterhin lokal ohne Registrierung testen. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos verwenden alle `<fencedframe>`s:

- [Shared Storage API Demos](https://shared-storage-demo.web.app/) (die auch einige Private Aggregation API Beispiele enthalten)
- [Protected Audience API Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [The Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
