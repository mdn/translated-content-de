---
title: Fenced Frame API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

> [!WARNING]
> Diese Funktion wird derzeit von einem Browser-Anbieter abgelehnt.
> Weitere Details finden Sie im Abschnitt [Standards positions](#standards_positions).

Die **Fenced Frame API** bietet Funktionalitäten zur Steuerung von Inhalten, die in {{htmlelement("fencedframe")}}-Elemente eingebettet sind.

## Konzepte und Nutzung

Eine Hauptquelle von [Datenschutz](/de/docs/Web/Privacy) und [Sicherheitsproblemen](/de/docs/Web/Security) im Web sind Inhalte, die in {{htmlelement("iframe")}}-Elemente eingebettet sind. Historisch gesehen wurden `<iframe>`s verwendet, um Drittanbieter-Cookies zu setzen, die dazu verwendet werden können, Informationen zu teilen und Benutzer über Websites hinweg zu verfolgen. Außerdem kann der in ein `<iframe>` eingebettete Inhalt mit dem einbettenden Dokument kommunizieren (zum Beispiel durch Verwendung von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage)).

Das einbettende Dokument kann auch Skripte verwenden, um verschiedene Informationen aus dem `<iframe>` zu lesen — zum Beispiel können Sie durch das Lesen der eingebetteten URL aus der `src`-Eigenschaft erhebliche Tracking-/Fingerprinting-Daten erhalten, insbesondere wenn es [URL-Parameter](/de/docs/Web/URI/Reference/Query) enthält. Das `<iframe>` kann auch auf das DOM des einbettenden Kontextes zugreifen und umgekehrt.

Die meisten modernen Browser arbeiten an Mechanismen zur Partionierung von Speicher, sodass Cookie-Daten nicht mehr für das Tracking verwendet werden können (zum Beispiel siehe [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) oder [Firefox State Partitioning](/de/docs/Web/Privacy/Guides/State_Partitioning)).

`<fencedframe>`-Elemente zielen darauf ab, ein weiteres Puzzleteil zu lösen — sie sind `<iframe>`s sehr ähnlich in Form und Funktion, außer dass:

- Kommunikation nicht zwischen dem `<fencedframe>`-Inhalt und der einbettenden Seite geteilt werden kann.
- Ein `<fencedframe>` kann auf datenübergreifende Webseiten zugreifen, jedoch nur in einem sehr spezifischen, kontrollierten Umfeld, das die Privatsphäre des Benutzers wahrt.
- Ein `<fencedframe>` kann nicht frei manipuliert oder seine Daten durch reguläre Skripte abgerufen werden (z.B. bei der Lesung oder dem Setzen der Quell-URL). `<fencedframe>`-Inhalte können nur durch [spezifische APIs](#anwendungsfälle) eingebettet werden.
- Ein `<fencedframe>` kann nicht auf das DOM des einbettenden Kontextes zugreifen, und umgekehrt kann der einbettende Kontext nicht auf das DOM des `<fencedframe>`s zugreifen.

Weitere Informationen über das Kommunikationsmodell von Fenced Frames finden Sie im [Leitfaden zur Kommunikation mit eingebetteten Frames](/de/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames).

### Anwendungsfälle

`<fencedframe>`s werden von anderen APIs verwendet, um verschiedene Arten von datenübergreifenden Inhalten einzubetten oder Daten zu sammeln und dabei unterschiedliche Anwendungsfälle auf datenschutzfreundliche Weise zu erfüllen. Die meisten dieser Anwendungen stützten sich bisher auf Drittanbieter-Cookies oder andere Mechanismen, die schlecht für den Datenschutz waren.

- Die [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage) bietet Zugriff auf nicht partitionierte datenübergreifende Daten in einer sicheren Umgebung und berechnet und/oder zeigt Ergebnisse in einem `<fencedframe>` an. Zum Beispiel:
  - Werbetreibende können die Reichweite einer Werbung messen oder nachfolgende Anzeigen basierend darauf schalten, welche Anzeigen Benutzer bereits auf anderen Websites gesehen haben.
  - Entwickler können A/B-Tests durchführen und dabei Varianten einem Benutzer basierend auf einer Gruppe zeigen, der er zugewiesen ist, oder basierend darauf, wie viele Benutzer jede einzelne Variante bereits gesehen haben.
  - Unternehmen können das Benutzererlebnis basierend darauf anpassen, was Benutzer auf anderen Seiten gesehen haben. Zum Beispiel, wenn ein Benutzer bereits Mitgliedschaft gekauft hat, möchten Sie ihm möglicherweise keine Mitgliedsanzeigen auf Ihren anderen Websites zeigen.
- Die [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) ermöglicht es Entwicklern, interessensorientierte Werbeanzeigen zu implementieren, insbesondere für Remarketing- und benutzerdefinierte Zielgruppenanwendungen. Sie kann mehrere Gebote für Anzeigeflächen auswerten und die gewonnene Anzeige in einem `<fencedframe>` anzeigen.
- Die [Private Aggregation API](https://privacysandbox.google.com/private-advertising/private-aggregation) kann Daten aus `<fencedframe>`s (ausgehend von Shared Storage oder der Protected Audience API) erfassen und aggregierte Berichte erstellen.

## Wie funktionieren `<fencedframe>`s?

Wie oben erwähnt, steuern Sie den Inhalt, der in einem {{htmlelement("fencedframe")}} eingebettet wird, nicht direkt über reguläre Skripte.

Um festzulegen, welcher Inhalt in einem `<fencedframe>` angezeigt wird, generiert eine API (wie [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience) oder [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage)) ein [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)-Objekt, welches dann per JavaScript als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config)-Eigenschaft des `<fencedframe>` gesetzt wird.

Das folgende Beispiel bezieht eine `FencedFrameConfig` aus einer Anzeigenausschreibung der Protected Audience API, die dann verwendet wird, um die gewonnene Anzeige in einem `<fencedframe>` anzuzeigen:

```js
const frameConfig = await navigator.runAdAuction({
  // … auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

`resolveToConfig: true` muss an den `runAdAuction()`-Aufruf übergeben werden, um ein `FencedFrameConfig`-Objekt zu erhalten. Wenn `resolveToConfig` auf `false` gesetzt ist, wird das resultierende {{jsxref("Promise")}} zu einer undurchsichtigen [URN](/de/docs/Web/URI/Reference/Schemes/urn) aufgelöst (z. B. `urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`), die nur in einem `<iframe>` verwendet werden kann.

In jedem Fall speichert der Browser eine URL, die den Zielort des eingebetteten Inhalts enthält — zugeordnet zur undurchsichtigen URN oder zur internen `url`-Eigenschaft des `FencedFrameConfig`. Der URL-Wert kann nicht von JavaScript, das im einbettenden Kontext läuft, abgerufen werden.

> [!NOTE]
> Es wird Unterstützung für undurchsichtige URNs in `<iframe>`s bereitgestellt, um die Migration bestehender Implementierungen auf die [Privacy Sandbox](https://privacysandbox.google.com/) APIs zu erleichtern. Diese Unterstützung ist als vorübergehend gedacht und wird in Zukunft entfernt, wenn die Akzeptanz steigt.

> [!NOTE] > `FencedFrameConfig` hat eine [`setSharedStorageContext()`](/de/docs/Web/API/FencedFrameConfig/setSharedStorageContext)-Methode, die verwendet wird, um Daten vom einbettenden Dokument an den `<fencedframe>`-gemeinsamen Speicher zu übergeben. Er könnte zum Beispiel in einem [`Worklet`](/de/docs/Web/API/Worklet) über das `<fencedframe>`-Element zugegriffen und verwendet werden, um einen Bericht zu erstellen. Siehe die [Shared Storage API](https://privacysandbox.google.com/private-advertising/shared-storage) für weitere Details.

### Zugriff auf Fenced Frame-Funktionalität im `Fence`-Objekt

Innerhalb von Dokumenten, die in `<fencedframe>`s eingebettet sind, hat JavaScript Zugriff auf eine [`Window.fence`](/de/docs/Web/API/Window/fence)-Eigenschaft, die eine [`Fence`](/de/docs/Web/API/Fence)-Instanz für dieses Dokument zurückgibt. Dieses Objekt enthält mehrere Funktionen, die speziell für die Fenced Frame API-Funktionalität relevant sind.
Zum Beispiel bietet [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent) eine Möglichkeit, die Übermittlung von Berichtsdaten über ein [beacon](/de/docs/Web/API/Beacon_API) an eine oder mehrere spezifizierte URLs auszulösen, um Anzeigeneinsichten und Klicks zu melden.

### Berechtigungspolitik

Nur spezifische Funktionen, die für die Verwendung in `<fencedframe>`s entwickelt wurden, können über Berechtigungspolitiken aktiviert werden, die auf diese angewendet werden; andere politisch gesteuerte Funktionen sind in diesem Kontext nicht verfügbar. Weitere Details finden Sie unter [Berechtigungspolitiken, die für Fenced Frames verfügbar sind](/de/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames).

### HTTP-Header

Ein {{httpheader("Sec-Fetch-Dest")}}-Header mit dem Wert `fencedframe` wird für alle Anfragen gesetzt, die innerhalb eines `<fencedframe>` gestellt werden, einschließlich untergeordneter `<iframe>`s, die innerhalb eines `<fencedframe>` eingebettet sind.

```http
Sec-Fetch-Dest: fencedframe
```

Der Server muss einen {{httpheader("Supports-Loading-Mode")}}-Antwortheader mit dem Wert `fenced-frame` für jedes Dokument setzen, das in ein `<fencedframe>` oder `<iframe>`, das innerhalb eines `<fencedframe>` eingebettet ist, geladen werden soll.

```http
Supports-Loading-Mode: fenced-frame
```

Andere Auswirkungen von Fenced Frames auf HTTP-Header sind wie folgt:

- [User-Agent-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) sind innerhalb von Fenced Frames nicht verfügbar, da sie auf [Berechtigungspolitikdelegation](/de/docs/Web/HTTP/Guides/Permissions_Policy) beruhen, die zum Datenleak genutzt werden könnte.
- Strenge [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)-Einstellungen werden auf neue Browsing-Kontexte angewendet, die innerhalb von Fenced Frames geöffnet werden, da sie ansonsten genutzt werden könnten, um Informationen an andere Herkunftsorte zu leaken. Jedes neue Fenster, das innerhalb eines Fenced Frames geöffnet wird, hat [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) und `Cross-Origin-Opener-Policy: same-origin` gesetzt, um sicherzustellen, dass [`Window.opener`](/de/docs/Web/API/Window/opener) `null` zurückgibt und es in seiner eigenen Browsing-Kontextgruppe platziert wird.
- [`Content-Security-Policy: fenced-frame-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/fenced-frame-src) wurde hinzugefügt, um gültige Quellen für verschachtelte Browsing-Kontexte zu spezifizieren, die in `<fencedframe>`-Elemente geladen werden.
- [`Content-Security-Policy: sandbox`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox)-benutzerdefinierte Einstellungen können von Fenced Frames nicht geerbt werden, um Datenschutzprobleme zu mildern. Damit ein Fenced Frame geladen werden kann, müssen Sie keine `sandbox` CSP spezifizieren (was die unten stehenden Werte impliziert) oder die folgenden Sandbox-Werte angeben:
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` und `unload`-Ereignisse

[`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)- und [`unload`](/de/docs/Web/API/Window/unload_event)-Ereignisse werden auf Fenced Frames nicht ausgelöst, da sie Informationen in Form eines Seitenlöschungszeitstempels leaken können. Implementierungen zielen darauf ab, potenzielle Lecks so weit wie möglich zu eliminieren.

## Schnittstellen

- [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)
  - : Repräsentiert die Navigation eines {{htmlelement("fencedframe")}}, d.h. welcher Inhalt darin angezeigt wird. Ein `FencedFrameConfig` wird von einer Quelle wie der [Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience) zurückgegeben und als Wert der [`HTMLFencedFrameElement.config`](/de/docs/Web/API/HTMLFencedFrameElement/config) gesetzt.
- [`Fence`](/de/docs/Web/API/Fence)
  - : Enthält mehrere Funktionen, die für Fenced Frame-Funktionalität relevant sind. Nur für in einem `<fencedframe>` eingebettete Dokumente verfügbar.
- [`HTMLFencedFrameElement`](/de/docs/Web/API/HTMLFencedFrameElement)
  - : Repräsentiert ein `<fencedframe>`-Element in JavaScript und bietet Eigenschaften, um es zu konfigurieren.

### Erweiterungen für andere Schnittstellen

- [`Navigator.deprecatedReplaceInURN()`](/de/docs/Web/API/Navigator/deprecatedReplaceInURN)
  - : Ersetzt spezifische Zeichenfolgen innerhalb der zugeordneten URL entsprechend einer gegebenen undurchsichtigen URN oder der internen `url`-Eigenschaft eines `FencedFrameConfig`.
- [`Window.fence`](/de/docs/Web/API/Window/fence)
  - : Gibt ein [`Fence`](/de/docs/Web/API/Fence)-Objekt für den aktuellen Dokumentenkontext zurück. Nur für in einem `<fencedframe>` eingebettete Dokumente verfügbar.

## Einschreibung und lokales Testen

Bestimmte API-Funktionen, die [`FencedFrameConfig`](/de/docs/Web/API/FencedFrameConfig)s erstellen, wie [`Navigator.runAdAuction()`](/de/docs/Web/API/Navigator/runAdAuction) ([Protected Audience API](https://privacysandbox.google.com/private-advertising/protected-audience)) und [`WindowSharedStorage.selectURL()`](/de/docs/Web/API/WindowSharedStorage/selectURL) ([Shared Storage API](/de/docs/Web/API/Shared_Storage_API)), sowie andere Funktionen wie [`Fence.reportEvent()`](/de/docs/Web/API/Fence/reportEvent), erfordern, dass Sie Ihre Seite in einen [Privacy Sandbox-Einschreibungsprozess](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Enrollment) anmelden. Wenn Sie dies nicht tun, werden die API-Aufrufe mit einer Konsolenwarnung fehlschlagen.

> [!NOTE]
> In Chrome können Sie Ihren Fenced Frame-Code noch lokal testen, ohne dass eine Anmeldung erforderlich ist. Um lokales Testen zu ermöglichen, aktivieren Sie das folgende Chrome-Entwicklerflag:
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## Beispiele

Die folgenden Demos verwenden alle `<fencedframe>`s:

- [Shared Storage API-Demos](https://shared-storage-demo.web.app/) (einschließlich einiger Beispiele der Private Aggregation API)
- [Protected Audience API-Demo](https://protected-audience-demo-advertiser.web.app/)

## Spezifikationen

{{Specifications}}

### Standards positions

Ein Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnt")}} diese Spezifikation ab.
Bekannte Standards-Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://github.com/mozilla/standards-positions/issues/781)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fenced frames](https://privacysandbox.google.com/private-advertising/fenced-frame) auf privacysandbox.google.com
- [The Privacy Sandbox](https://privacysandbox.google.com/) auf privacysandbox.google.com
