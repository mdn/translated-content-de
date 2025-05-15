---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

> [!WARNING]
> Diese Funktion wird derzeit von einem Browseranbieter abgelehnt.
> Siehe den Abschnitt [Standards-Positionen](#standards-positionen) unten für Details.

Die **Fenced Frame API** bietet Funktionalität zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elementen eingebettet sind.

## Konzepte und Nutzung

Eine Hauptquelle von [Datenschutz-](/de/docs/Web/Privacy) und [Sicherheitsproblemen](/de/docs/Web/Security) im Web sind in {{htmlelement("iframe")}}-Elementen eingebettete Inhalte. Historisch wurden `<iframe>`-Elemente verwendet, um Drittanbieter-Cookies zu setzen, die Informationen teilen und Benutzer über Websites hinweg verfolgen können. Zusätzlich kann der in einem `<iframe>` eingebettete Inhalt mit seinem einbettenden Dokument kommunizieren (zum Beispiel mithilfe von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann auch Skripte verwenden, um verschiedene Arten von Informationen aus dem `<iframe>` zu lesen – zum Beispiel können Sie möglicherweise signifikante Tracking- bzw. Fingerprinting-Daten durch Lesen der eingebetteten URL aus der `src`-Eigenschaft erhalten, insbesondere wenn sie [URL-Parameter](/de/docs/Web/URI/Reference/Query) enthält. Das `<iframe>`-Element kann auch auf das DOM des einbettenden Kontexts zugreifen und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen zur Partitionierung von Speicherbereichen, sodass Cookie-Daten nicht mehr für Tracking verwendet werden können (siehe zum Beispiel [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) oder [Firefox State Partitioning](/de/docs/Web/Privacy/Guides/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein weiteres Teil dieses Puzzles zu lösen — sie sind in Form und Funktion den `<iframe>`-Elementen sehr ähnlich, außer dass:

- Kommunikation nicht zwischen dem `<fencedframe>`-Inhalt und seiner einbettenden Website geteilt werden kann.
- Ein `<fencedframe>` kann auf Cross-Site-Daten zugreifen, aber nur in einem sehr spezifischen Satz von kontrollierten Umständen, die die Privatsphäre der Benutzer wahren.
- Ein `<fencedframe>` kann nicht frei manipuliert oder seine Daten durch reguläre Skripte (z.B. das Lesen oder Setzen der Quell-URL) abgerufen werden. `<fencedframe>`-Inhalte können nur über [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontexts zugreifen, noch kann der einbettende Kontext auf das DOM des `<fencedframe>` zugreifen.

Für weitere Informationen über das Kommunikationsmodell von Fenced Frames lesen Sie den [Leitfaden zur Kommunikation mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`-Elemente werden von anderen APIs verwendet, um verschiedene Arten von Cross-Site-Inhalten einzubetten oder Daten zu sammeln und damit unterschiedliche Anwendungsfälle auf datenschutzfreundliche Weise zu erfüllen. Die meisten dieser Anwendungen basierten zuvor auf Drittanbieter-Cookies oder anderen Mechanismen, die schlecht für den Datenschutz waren.

- Die [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage) ermöglicht den Zugriff auf unpartitionierte Cross-Site-Daten in einer sicheren Umgebung und berechnet und/oder zeigt Ergebnisse in einem `<fencedframe>` an. Zum Beispiel:
  - Werbetreibende können die Reichweite einer Anzeige messen oder nachfolgende Anzeigen basierend darauf präsentieren, welche Benutzer bereits auf anderen Websites gesehen haben.
  - Entwickler können A/B-Tests durchführen, indem sie einem Benutzer Variationen anzeigen, die auf einer Gruppe basieren, der sie zugeordnet sind, oder darauf, wie viele Benutzer jede bereits gesehen haben.
  - Unternehmen können das Benutzererlebnis anpassen, basierend darauf, was Benutzer auf anderen Sites gesehen haben. Zum Beispiel, wenn sie bereits eine Mitgliedschaft erworben haben, möchten Sie ihnen möglicherweise keine Mitgliedschafts-Anzeigen über Ihre anderen Angebote hinweg zeigen.
- Die [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) ermöglicht Entwicklern, interessensgruppenbasierte Werbung zu implementieren, nämlich Remarketing- und Custom-Audience-Anwendungsfälle. Sie kann mehrere Gebote für einen Anzeigenraum auswerten und die Gewinnanzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) kann Daten aus `<fencedframe>`-Elementen sammeln (die aus dem Shared Storage oder der Protected Audience API stammen) und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`-Elemente?

Wie oben erwähnt, steuern Sie den in einem {{htmlelement("fencedframe")}} eingebetteten Inhalt nicht direkt über reguläre Skripte.

Um festzulegen, welche Inhalte in einem `<fencedframe>` angezeigt werden sollen, generiert eine nutzende API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, das dann per JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel erhält eine `FencedFrameConfig` von einer Anzeigenauktion der Protected Audience API, die dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss im Aufruf von `runAdAuction()` übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, wird der resultierende {{jsxref("Promise")}} auf eine undurchsichtige [URN](/de/docs/Web/URI/Reference/Schemes/urn) (zum Beispiel `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`) aufgelöst, die nur in einem `<iframe>` verwendet werden kann.

Wie auch immer, der Browser speichert eine URL, die den Zielort des einzubettenden Inhalts enthält — entweder zugeordnet zur undurchsichtigen URN oder zur internen `url`-Eigenschaft von `FencedFrameConfig`. Der URL-Wert kann von JavaScript, das im einbettenden Kontext läuft, nicht gelesen werden.

> [!NOTE]
> Es wird Unterstützung für undurchsichtige URNs in `<iframe>`-Elementen bereitgestellt, um die Migration bestehender Implementierungen zu [Privacy Sandbox](https://privacysandbox.google.com/)-APIs zu erleichtern. Diese Unterstützung ist vorübergehend gedacht und wird in Zukunft entfernt, wenn die Akzeptanz wächst.

> **Hinweis:** `FencedFrameConfig` hat eine [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode, die verwendet wird, um Daten vom einbettenden Dokument an den gemeinsamen Speicher des `<fencedframe>` zu übergeben. Diese könnten zum Beispiel in einem [`Worklet`](/de/docs/Web/API/Worklet) über das `<fencedframe>` abgerufen und zur Generierung eines Berichts verwendet werden. Weitere Einzelheiten finden Sie in der [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage).

### Zugriff auf die Funktionalität von Fenced Frames über das `Fence`-Objekt

Innerhalb von Dokumenten, die in `<fencedframe>`-Elemente eingebettet sind, hat JavaScript Zugriff auf eine [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere Funktionen, die speziell für die Funktionalität der Fenced Frame API relevant sind. Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, die Übermittlung von Berichtsdaten über einen [Beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifizierte URLs auszulösen, um Anzeigenansichten und -klicks zu melden.

### Berechtigungspolitik

Nur bestimmte Funktionen, die für die Nutzung in `<fencedframe>`-Elementen konzipiert sind, können über Berechtigungspolitiken aktiviert werden; andere durch Richtlinien gesteuerte Funktionen sind in diesem Kontext nicht verfügbar. Siehe [Berechtigungspolitiken, die für Fenced Frames verfügbar sind](/de/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit dem Wert `fencedframe` wird für alle Anfragen festgelegt, die von innerhalb eines `<fencedframe>` ausgehen, einschließlich eingebetteter `<iframe>`-Elemente innerhalb eines `<fencedframe>`.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Antwortheader mit dem Wert `fenced-frame` für jedes Dokument setzen, das in einem `<fencedframe>` oder einem innerhalb eines `<fencedframe>` eingebetteten `<iframe>` geladen werden soll.

```http
Supports-Loading-Mode: fenced-frame
```

Weitere Auswirkungen von Fenced Frames auf HTTP-Header sind wie folgt:

- [User-Agent-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind innerhalb von Fenced Frames nicht verfügbar, da sie auf [Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) -Delegation beruhen, die genutzt werden könnte, um Daten zu leaken.
- Strenge [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden auf neue Browserkontexte angewendet, die innerhalb von Fenced Frames geöffnet werden, andernfalls könnten sie genutzt werden, um Informationen auf andere Ursprünge zu leaken. Jedes neue Fenster, das von innerhalb eines Fenced Frames geöffnet wird, hat [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) und `Cross-Origin-Opener-Policy: same-origin` gesetzt, um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und es in seine eigene Browserkontextgruppe platziert wird.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für verschachtelte Browsing-Kontexte zu spezifizieren, die in `<fencedframe>`-Elemente geladen werden.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox)-benutzerdefinierte Einstellungen können nicht von Fenced Frames geerbt werden, um Datenschutzprobleme zu mindern. Für das Laden eines Fenced Frames müssen Sie keine `sandbox`-CSP (was die unten genannten Werte impliziert) spezifizieren oder die folgenden Sandbox-Werte angeben:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` und `unload` Ereignisse

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) und [`unload`](/de/docs/Web/API/Window/unload_event) Ereignisse werden in Fenced Frames nicht ausgelöst, da sie Informationen in Form eines Seitenlöschzeitstempels leaken könnten. Implementierungen zielen darauf ab, so viele potenzielle Leckagen wie möglich zu eliminieren.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. welche Inhalte darin angezeigt werden. Eine `FencedFrameConfig` wird aus einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben und als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere Funktionen, die für die Funktionalität der Fenced Frame relevant sind. Nur für Dokumente verfügbar, die innerhalb eines `<fencedframe>` eingebettet sind.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und bietet Eigenschaften zu dessen Konfiguration.

### Erweiterungen für andere Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt angegebene Zeichenfolgen innerhalb der gemappten URL, die einer gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft eines `FencedFrameConfig` entspricht.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt ein [`Fence`](/de/docs/Web/API/Fence)-Objekt für den aktuellen Dokumentenkontext zurück. Nur für Dokumente verfügbar, die innerhalb eines `<fencedframe>` eingebettet sind.

## Registrierung und lokales Testen

Bestimmte API-Funktionen, die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekte erstellen, wie [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) ([Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience)) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ([Shared Storage API](/de/docs/Web/API/Shared_Storage_API)), sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent), erfordern, dass Sie Ihre Website in einem [Privacy Sandbox Registrierungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) anmelden. Andernfalls schlagen die API-Aufrufe mit einer Konsolenwarnung fehl.

> [!NOTE]
> In Chrome können Sie Ihren Fenced Frame-Code weiterhin lokal ohne Registrierung testen. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwickler-Flag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos verwenden alle `<fencedframe>`-Elemente:

- [Shared Storage API Demos](https://shared-storage-demo.web.app/) (die auch einige Private Aggregation API-Beispiele enthalten)
- [Protected Audience API Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

### Standards-Positionen

Ein Browseranbieter {{Glossary("Web_standards#opposing_standards", "opponiert")}} gegen diese Spezifikation.
Bekannte Standards-Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://github.com/mozilla/standards-positions/issues/781)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced Frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
