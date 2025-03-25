---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: d8fbe1ea30dcc8fd707048a804f5070a729b57a7
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

Die **Fenced Frame API** bietet Funktionalitäten zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind.

## Konzepte und Verwendung

Eine Hauptquelle der [Datenschutz](/de/docs/Web/Privacy)- und [Sicherheits](/de/docs/Web/Security)-probleme im Web sind Inhalte, die in {{htmlelement("iframe")}}-Elementen eingebettet sind. Historisch gesehen wurden `<iframe>`-Elemente genutzt, um Drittanbieter-Cookies zu setzen, die genutzt werden können, um Informationen zu teilen und Benutzer über Webseiten hinweg zu verfolgen. Zusätzlich kann der in einem `<iframe>` eingebettete Inhalt mit dem einbettenden Dokument kommunizieren (zum Beispiel über die Verwendung von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann auch mittels Skripting verschiedene Informationen aus dem `<iframe>` lesen — zum Beispiel können Sie potenziell erhebliche Tracking-/Fingerprinting-Daten durch das Lesen der eingebetteten URL aus der `src`-Eigenschaft erhalten, besonders wenn sie [URL-Parameter](/de/docs/Web/URI#query) enthält. Das `<iframe>` kann auch auf das DOM des einbettenden Kontextes zugreifen, und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen zur Partitionierung von Speicher, sodass Cookie-Daten nicht mehr für Tracking-Zwecke genutzt werden können (siehe zum Beispiel [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) oder [Firefox State Partitioning](/de/docs/Web/Privacy/Guides/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein weiteres Stück dieses Puzzles zu lösen — sie sind `<iframe>`-Elementen in Form und Funktion sehr ähnlich, außer dass:

- Kommunikation nicht zwischen dem `<fencedframe>`-Inhalt und seiner einbettenden Seite geteilt werden kann.
- Ein `<fencedframe>` kann auf Daten von anderen Seiten zugreifen, aber nur unter sehr spezifischen, kontrollierten Umständen, die die Privatsphäre der Nutzer wahren.
- Ein `<fencedframe>` kann nicht frei manipuliert oder seine Daten über reguläre Skripte abgerufen werden (zum Beispiel Lesen oder Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontextes zugreifen und umgekehrt.

Für mehr Informationen über das Kommunikationsmodell von fenced frames lesen Sie den [Leitfaden zur Kommunikation mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`-Elemente werden von anderen APIs verwendet, um verschiedene Arten von Cross-Site-Inhalten einzubetten oder Daten zu sammeln, um unterschiedliche Anwendungsfälle auf eine datenschutzfreundliche Art und Weise zu erfüllen. Die meisten dieser Anwendungsfälle stützten sich zuvor auf Drittanbieter-Cookies oder andere Mechanismen, die schlecht für den Datenschutz waren.

- Die [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) bietet Zugriff auf nicht partitionierte Cross-Site-Daten in einer sicheren Umgebung, indem Ergebnisse in einem `<fencedframe>` berechnet und/oder angezeigt werden. Zum Beispiel:
  - Werbetreibende können die Reichweite einer Anzeige messen oder nachfolgende Anzeigen basierend auf solchen schalten, die Benutzer bereits auf anderen Seiten gesehen haben.
  - Entwickler können A/B-Tests durchführen und Varianten für einen Benutzer basierend auf einer Gruppe anzeigen, zu der er zugeordnet ist, oder basierend darauf, wie viele Benutzer jede Variante bereits gesehen haben.
  - Unternehmen können die Benutzererfahrung basierend darauf anpassen, was die Benutzer auf anderen Seiten gesehen haben. Zum Beispiel, wenn sie bereits eine Mitgliedschaft erworben haben, möchten Sie ihnen möglicherweise keine Mitgliedschafts-Anzeigen mehr auf ihren anderen Eigenschaften anzeigen.
- Die [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) ermöglicht es Entwicklern, interessensgruppenbasierte Werbung umzusetzen, namentlich Remarketing- und benutzerdefinierte Zielgruppen-Anwendungsfälle. Sie kann mehrere Gebote für Werbeflächen bewerten und die gewinnende Anzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://developers.google.com/privacy-sandbox/private-advertising/private-aggregation) kann Daten von `<fencedframe>`-Elementen (stammend von shared storage oder der Protected Audience API) sammeln und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`-Elemente?

Wie oben erwähnt, steuern Sie den eingebetteten Inhalt einer {{htmlelement("fencedframe")}} nicht direkt über reguläre Skripte.

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden, generiert eine nutzende API (wie z.B. [Protected Audience](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) oder [Shared Storage](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann mittels JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält ein `FencedFrameConfig` aus einer Anzeigenausschreibung der Protected Audience API, das dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss in den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, wird die resultierende {{jsxref("Promise")}} in einen undurchsichtigen [URN](/de/docs/Web/URI#urns) aufgelöst (zum Beispiel `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`), der nur in einem `<iframe>` verwendet werden kann.

So oder so speichert der Browser eine URL, die den Zielort des einzubettenden Inhalts enthält – dieser ist entweder der undurchsichtigen URN zugeordnet oder der `url`-Eigenschaft des `FencedFrameConfig`. Der URL-Wert kann von JavaScript, das im einbettenden Kontext ausgeführt wird, nicht gelesen werden.

> [!NOTE]
> Unterstützung für undurchsichtige URNs in `<iframe>`-Elementen wird bereitgestellt, um die Migration bestehender Implementierungen auf [Privacy Sandbox](https://developers.google.com/privacy-sandbox)-APIs zu erleichtern. Diese Unterstützung ist als temporär gedacht und wird in Zukunft entfernt, sobald die Akzeptanz wächst.

> **Hinweis:** `FencedFrameConfig` hat eine Methode namens [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext), die verwendet wird, um Daten vom einbettenden Dokument in den gemeinsamen Speicher des `<fencedframe>` zu übergeben. Diese könnten beispielsweise in einem [`Worklet`](/de/docs/Web/API/Worklet) über das `<fencedframe>` abgerufen und zur Erzeugung eines Berichts genutzt werden. Siehe die [Shared Storage API](https://developers.google.com/privacy-sandbox/private-advertising/shared-storage) für weitere Details.

### Zugriff auf die fenced frame Funktionalität auf dem `Fence`-Objekt

In Dokumenten, die in `<fencedframe>`-Elementen eingebettet sind, hat JavaScript Zugriff auf eine [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere Funktionen, die speziell für die fenced frame API Funktionalität relevant sind.
Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, die Einreichung von Berichtsdaten über ein [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifizierte URLs auszulösen, um Anzeigenansichten und -klicks zu berichten.

### Berechtigungspolitik

Nur spezifische Funktionen, die für `<fencedframe>`-Elemente gedacht sind, können über Berechtigungspolitiken, die auf sie gesetzt werden, aktiviert werden; andere politisch kontrollierte Funktionen sind in diesem Kontext nicht verfügbar. Siehe [Berechtigungspolitiken verfügbar für fenced frames](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit einem Wert von `fencedframe` wird für jede Anfrage gesetzt, die von innen eines `<fencedframe>` gemacht wird, einschließlich Kinder-`<iframe>`-Elemente, die innerhalb eines `<fencedframe>` eingebettet sind.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Antwortheader mit einem Wert von `fenced-frame` setzen, um ein Dokument laden zu können, das innerhalb eines `<fencedframe>` oder eines `<iframe>` eingebettet in ein `<fencedframe>` geladen werden soll.

```http
Supports-Loading-Mode: fenced-frame
```

Andere Auswirkungen von fenced frames auf HTTP-Header sind wie folgt:

- [User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind innerhalb von fenced frames nicht verfügbar, weil sie auf [Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Delegation beruhen, die zum Datenleck führen könnte.
- Strenge [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden auf neue Browsing-Kontexte angewendet, die von innerhalb von fenced frames geöffnet werden, da sie sonst genutzt werden könnten, um Informationen an andere Ursprünge zu leaken. Jedes neue Fenster, das von innerhalb eines fenced frame geöffnet wird, hat [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) und `Cross-Origin-Opener-Policy: same-origin` gesetzt, um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und es in seine eigene Browsing-Kontextgruppe gesetzt wird.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für geschachtelte Browsing-Kontexte zu spezifizieren, die in `<fencedframe>`-Elementen geladen sind.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox) benutzerdefinierte Einstellungen können von fenced frames nicht geerbt werden, um Datenschutzprobleme zu vermeiden. Um ein fenced frame zu laden, müssen Sie keine `sandbox` CSP spezifizieren (was die untenstehenden Werte impliziert), oder die folgenden Sandbox-Werte angeben:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` und `unload`-Ereignisse

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)- und [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignisse werden nicht für fenced frames ausgelöst, da sie Informationen in Form eines Seitenlöschzeitstempels leaken können. Implementierungen zielen darauf ab, potenzielle Lecks so weit wie möglich zu eliminieren.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Stellt die Navigation eines {{htmlelement("fencedframe")}}, d.h. den angezeigten Inhalt dar. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience) zurückgegeben und als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere Funktionen, die für die fenced frame Funktionalität relevant sind. Nur für Dokumente verfügbar, die innerhalb eines `<fencedframe>` eingebettet sind.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und bietet Eigenschaften zur Konfiguration.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt spezifizierte Zeichenfolgen innerhalb der abgebildeten URL, die einer gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft eines `FencedFrameConfig` entspricht.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt ein [`Fence`](/de/docs/Web/API/Fence)-Objekt für den aktuellen Dokumentenkontext zurück. Nur für Dokumente verfügbar, die innerhalb eines `<fencedframe>` eingebettet sind.

## Einschreibung und lokale Tests

Bestimmte API-Funktionen, die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig) erstellen, wie [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) (Protected Audience API) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) (Shared Storage API), sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent), erfordern, dass Sie Ihre Seite in einem [Privacy Sandbox Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) registrieren. Wenn Sie dies nicht tun, schlagen die API-Aufrufe mit einer Konsolenwarnung fehl.

> [!NOTE]
> In Chrome können Sie Ihren fenced frame Code weiterhin lokal testen, ohne sich anzumelden. Um lokale Tests zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos verwenden alle `<fencedframe>`-Elemente:

- [Shared Storage API Demos](https://shared-storage-demo.web.app/) (die auch einige Private Aggregation API Beispiele einschließen)
- [Protected Audience API Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://developers.google.com/privacy-sandbox/private-advertising/fenced-frame) auf developers.google.com
- [Die Privacy Sandbox](https://developers.google.com/privacy-sandbox) auf developers.google.com
