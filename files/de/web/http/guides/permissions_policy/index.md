---
title: Berechtigungspolitik
slug: Web/HTTP/Guides/Permissions_Policy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die **Berechtigungspolitik** bietet Mechanismen für Webentwickler, um explizit festzulegen, welche Funktionalitäten auf einer Website verwendet werden dürfen und welche nicht. Sie definieren ein Set von "Richtlinien", die einschränken, auf welche APIs der Code der Website zugreifen kann oder das Standardverhalten des Browsers für bestimmte Funktionen ändern können. Dies ermöglicht es Ihnen, bewährte Praktiken durchzusetzen, selbst wenn sich der Code weiterentwickelt, und Drittinhalte sicherer zu integrieren.

Die Berechtigungspolitik ähnelt der {{Glossary("CSP", "Content Security Policy")}}, kontrolliert jedoch Funktionen anstelle von Sicherheitsverhalten.

Beispiele dafür, was Sie mit der Berechtigungspolitik tun können:

- Ändern des Standardverhaltens von Autoplay bei mobilen und Drittanbieter-Videos.
- Einschränkung der Nutzung sensibler Geräte wie Kamera, Mikrofon oder Lautsprecher.
- Ermöglichen von iframes die Verwendung der [Fullscreen API](/de/docs/Web/API/Fullscreen_API).
- Verhindern, dass Elemente geskriptet werden, wenn sie nicht im Ansichtsfenster sichtbar sind, um die Leistung zu verbessern.

> [!NOTE]
> Die Berechtigungspolitik wurde früher Feature Policy genannt. Der Name hat sich geändert, ebenso die Syntax des HTTP-Headers. Beachten Sie dies, wenn Sie in der Vergangenheit die Feature Policy verwendet haben, und überprüfen Sie die Tabellen zur Browserunterstützung. Die `<iframe allow=" ... ">`-Syntax ist gleich geblieben.

## Konzepte und Nutzung

Das Web bietet Funktionalitäten und APIs, die bei Missbrauch Datenschutz- oder Sicherheitsrisiken darstellen können. In solchen Fällen möchten Sie möglicherweise die Nutzung von Funktionalitäten auf einer Website streng begrenzen. In jedem Fall sollte es eine intuitive oder nicht störende Möglichkeit für Webentwickler geben, Fälle zu erkennen und zu handhaben, in denen eine Funktion deaktiviert ist.

Einige Ansätze umfassen:

- "Permission denied" wird für JavaScript-APIs zurückgegeben, die eine Benutzerberechtigung erfordern.
- JavaScript-APIs, die Zugriff auf Funktionen bieten, geben `false`-Werte zurück oder werfen einen Fehler.
- APIs werden nicht einmal bereitgestellt, als ob sie nicht existieren würden.
- Optionen, die das Funktionsverhalten steuern, haben unterschiedliche Standardwerte.

> [!NOTE]
> Neu eingeführte Funktionen können über eine explizite API zur Signalisierung des Zustands verfügen. Bestehende Funktionen, die später in die Berechtigungspolitik integriert werden, verwenden in der Regel bestehende Mechanismen.

Die Berechtigungspolitik ermöglicht es Ihnen, zu kontrollieren, welche Ursprünge welche Funktionen verwenden können, sowohl auf der obersten Seite als auch in eingebetteten {{htmlelement("iframe")}}s. Ziel ist es, bewährte Praktiken für gute Benutzererfahrungen durchzusetzen und eine granulare Kontrolle über _sensible_ oder _leistungsstarke_ Funktionen zu bieten (was bedeutet, dass der Benutzer ausdrücklich die Erlaubnis zur Nutzung erteilen muss, bevor zugehöriger Code ausgeführt werden kann).

Die Berechtigungspolitik bietet zwei Möglichkeiten, Richtlinien festzulegen:

- Der {{httpheader("Permissions-Policy")}} HTTP-Header, um die Nutzung von Funktionen in empfangenen Antworten und jeglichen eingebetteten Inhalten innerhalb der Seite zu kontrollieren (dazu gehören {{htmlelement("iframe")}}s).
- Das {{htmlelement("iframe")}} [`allow`](/de/docs/Web/HTML/Element/iframe#attributes)-Attribut, um die Nutzung von Funktionen nur in bestimmten {{htmlelement("iframe")}}s zu steuern.

Diese sind getrennt, aber verwandt — siehe [Vererbung von Richtlinien für eingebettete Inhalte](#vererbung_von_richtlinien_für_eingebettete_inhalte) für Details.

> [!NOTE]
> Skripte können programmgesteuert Informationen über die Berechtigungspolitik über das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Objekt abfragen, das sich entweder bei [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) oder [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) befindet.

Um jede Funktion zu steuern, schreiben Sie eine Richtlinie, bestehend aus:

- Einer **Direktive**, die den Namen der zu steuernden Funktion identifiziert. Siehe die [Liste der verschiedenen verfügbaren Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives).
- Einer **Positivliste**, die eine Liste von Ursprüngen ist, in denen die Funktion kontrolliert werden soll. Sie können eine Funktion für alle oder spezifische Ursprünge aktivieren oder ihre Nutzung in allen Ursprüngen blockieren.

Siehe unten für mehrere Beispiele.

## Beziehung zur Permissions API

Die Berechtigungspolitik und die [Permissions API](/de/docs/Web/API/Permissions_API) sind eng verwandt, aber unterschiedlich. Die Funktionen, deren Berechtigungen von beiden Technologien gesteuert werden, überschneiden sich.

- Die Berechtigungspolitik erlaubt es einem Server festzulegen, ob eine Funktion in einem bestimmten Dokument (oder eingebetteten `<frame>`s darin) verwendet werden kann. Diese werden als **richtliniengesteuerte** Funktionen bezeichnet — siehe die [Liste der Berechtigungspolitik-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives).
- Die Permissions API regelt den Zugriff auf Funktionen basierend auf vom Benutzer gewährten Berechtigungen. Diese Funktionen sind im [Permissions Registry](https://w3c.github.io/permissions-registry/) aufgezeichnet.

Der Identifizierungsstring, der für jede Funktion verwendet wird, ist in beiden Konsistent, beispielsweise `geolocation` für die [Geolocation API](/de/docs/Web/API/Geolocation_API). Die meisten der API-Funktionen im Permissions Registry haben auch eine entsprechende Berechtigungspolitik-Direktive. Eine Ausnahme bildet die [Notifications API](/de/docs/Web/API/Notifications_API).

Im Allgemeinen, wenn eine Berechtigungspolitik die Nutzung einer leistungsstarken Funktion blockiert, wird der Benutzer nicht einmal nach Erlaubnis gefragt, sie zu verwenden, und die Permissions API-Methode [`query()`](/de/docs/Web/API/Permissions/query) gibt einen [`state`](/de/docs/Web/API/PermissionStatus/state)-Wert `denied` zurück.

Siehe auch [Permissions > Relationship to the Permissions Policy specification](https://w3c.github.io/permissions/#relationship-to-permissions-policy).

## Positivlisten

Eine Positivliste ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthalten, durch Leerzeichen getrennt:

- `*`: Die Funktion wird in diesem Dokument und allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
- `()` (leere Positivliste): Die Funktion ist in obersten und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für das `<iframe>`-Attribut `allow` ist `'none'`.
- `self`: Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) nur im gleichen Ursprung erlaubt. Die Funktion ist nicht in plattformübergreifenden Dokumenten in verschachtelten Browsing-Kontexten erlaubt. `self` kann als Abkürzung für `https://your-site.example.com` betrachtet werden. Das Äquivalent für das `<iframe>`-Attribut `allow` ist `'self'`.
- `'src'`: Die Funktion wird in diesem `<iframe>` erlaubt, solange das geladene Dokument von demselben Ursprung kommt wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut. Dieser Wert wird nur im `<iframe>`-Attribut `allow` verwendet und ist der _Standardwert_ der Positivliste in `<iframe>`s.
- `"<origin>"`: Die Funktion ist für bestimmte Ursprünge erlaubt (zum Beispiel, `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt sein. Beachten Sie, dass Ursprünge in `<iframe>`-Attributen nicht in Anführungszeichen gesetzt sind.

Die Werte `*` und `()` dürfen nur allein verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

> [!NOTE]
> Direktiven haben eine Standard-Positivliste, die immer eine von `*`, `self` oder `none` für den `Permissions-Policy`-HTTP-Header ist, und regelt das Standardverhalten, wenn sie nicht explizit in einer Richtlinie aufgeführt sind. Diese sind auf den individuellen [Referenzseiten der Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives) spezifiziert. Für `<iframe>`-Attribute `allow` ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Platzhalter in Berechtigungspolitik-Ursprüngen einfügen. Das bedeutet, dass Sie anstelle mehrerer verschiedener Subdomains nur einen Platzhalter verwenden müssen.

Anstatt

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie schreiben

```http
("https://example.com" "https://*.example.com")
```

> **Hinweis:** `"https://*.example.com"` stimmt nicht mit `"https://example.com"` überein.

Beispiele für Positivlisten:

- `*`
- `()`
- `(self)`
- `(src)`
- `("https://a.example.com")`
- `("https://a.example.com" "https://b.example.com")`
- `(self "https://a.example.com" "https://b.example.com")`
- `(src "https://a.example.com" "https://b.example.com")`
- `("https://*.example.com")`

## Permissions-Policy-Header-Syntax

Die allgemeine Syntax sieht wie folgt aus:

```http
Permissions-Policy: <directive>=<allowlist>
```

Um beispielsweise den gesamten Zugriff auf Geolokalisierung zu blockieren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=()
```

Oder um den Zugriff nur auf eine Teilmenge der Ursprünge zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem der Header mit einer durch Kommas getrennten Liste von Richtlinien gesendet wird oder durch Senden eines separaten Headers für jede Richtlinie.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self "https://example.com"), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self "https://example.com")
Permissions-Policy: camera=*
```

## Syntax für eingebettete Frames

Damit ein {{htmlelement("iframe")}} eine Funktion aktiviert hat, muss dessen erlaubter Ursprung auch in der Positivliste für die übergeordnete Seite enthalten sein. Aufgrund dieses [Vererbungsverhaltens](#vererbung_von_richtlinien_für_eingebettete_inhalte) ist es eine gute Idee, die weitestgehende unterstützbare Unterstützung für eine Funktion im HTTP-Header anzugeben und dann das benötigte Unterstützungsspektrum in jedem `<iframe>` anzugeben.

Die allgemeine Syntax sieht wie folgt aus:

```html
<iframe src="<origin>" allow="<directive> <allowlist>"></iframe>
```

Um beispielsweise den gesamten Zugriff auf Geolokalisierung zu blockieren, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation 'none'"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig wird die Richtlinie nicht auf den Ursprung angewendet, zu dem ein `<iframe>` navigiert, wenn ein `<iframe>` zu einem anderen Ursprung navigiert. Indem Sie den Ursprung, zu dem das `<iframe>` navigiert, im Attribut `allow` auflisten, wird die Berechtigungspolitik, die auf das ursprüngliche `<iframe>` angewendet wurde, auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine durch Semikolons getrennte Liste von Richtliniendirektiven innerhalb des Attributs `allow` einbezogen wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist bemerkenswert, den `src`-Wert besonders zu erwähnen. Wir erwähnten oben, dass die Verwendung dieses Positivlistenwertes bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das geladene Dokument von demselben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der _Standardwert_ der `allowlist` für Funktionen, die in `allow` gelistet sind, so dass die folgenden gleichwertig sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

> [!NOTE]
> Wie Sie bemerkt haben, ist die Syntax für `<iframe>`-Richtlinien etwas anders als die Syntax für `Permissions-Policy`-Header. Der Erstere verwendet immer noch die gleiche Syntax wie die ältere Feature Policy-Spezifikation, die durch die Berechtigungspolitik abgelöst wurde.

### Geschützte Frames und Berechtigungspolitik

{{htmlelement("fencedframe")}}s interagieren mit Berechtigungspolitiken auf dieselbe Weise wie `<iframe>`s, jedoch in einer viel eingeschränkteren Kapazität. Nur bestimmte Funktionen, die für die Verwendung in `<fencedframe>`s entwickelt wurden, können über Berechtigungspolitiken aktiviert werden; andere richtliniengesteuerte Funktionen sind in diesem Kontext nicht verfügbar.

Siehe [Berechtigungspolitiken verfügbar für eingezäunte Frames](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

## Vererbung von Richtlinien für eingebettete Inhalte

Skripte erben die Richtlinie ihres Browsing-Kontexts, unabhängig von ihrem Ursprung. Das bedeutet, dass die obersten Skripte die Richtlinie des Hauptdokuments erben.

Alle `<iframe>`s erben die Richtlinie ihrer übergeordneten Seite. Wenn das `<iframe>` ein `allow`-Attribut _und_ die übergeordnete Seite einen {{HTTPHeader("Permissions-Policy")}} hat, werden die Richtlinien der übergeordneten Seite und das `allow`-Attribut kombiniert, wobei die restriktivste Teilmenge angewendet wird. Damit ein `<iframe>` eine Funktion aktiviert hat, muss der Ursprung sowohl in der Positivliste der übergeordneten Seite als auch im `allow`-Attribut enthalten sein.

Das Deaktivieren einer Funktion in einer Richtlinie ist ein Einwegschalter. Wenn eine Funktion für ein Kind-Frame von seinem Eltern-Frame deaktiviert wurde, kann das Kind sie nicht wieder aktivieren, und weder können es die Nachkommen des Kindes.

## Beispiele

### Kombination von HTTP-Header- und `<iframe>`-Richtlinien

Angenommen, wir wollten die Nutzung der Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten von unserem vertrauenswürdigen Werbenetzwerk ermöglichen. Wir könnten die seitenweite Berechtigungspolitik so einrichten:

```http
Permissions-Policy: geolocation=(self "https://trusted-ad-network.com")
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` so einstellen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in das `<iframe>` geladen würde, hätte er keinen Zugriff auf die Geolokalisierung:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} HTTP-Header
- {{HTMLElement("iframe", "allow", "#Attributes")}} Attribut für iframes
- [Kontrolle von Browser-Funktionen mit Berechtigungspolitik](https://developer.chrome.com/docs/privacy-security/permissions-policy): Leitfaden mit mehreren Demo-Links.
- [Permissions/Feature-Richtlinien auf chromestatus.com](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Privatsphäre, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
