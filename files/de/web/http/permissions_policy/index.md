---
title: Berechtigungsrichtlinie
slug: Web/HTTP/Permissions_Policy
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTTPSidebar}}{{SeeCompatTable}}

Eine **Berechtigungsrichtlinie** bietet Mechanismen für Webentwickler, um explizit zu deklarieren, welche Funktionalitäten auf einer Website verwendet werden können und welche nicht. Sie definieren eine Reihe von „Richtlinien“, die einschränken, auf welche APIs der Code der Website zugreifen kann, oder das Standardverhalten des Browsers für bestimmte Funktionen ändern. Dies ermöglicht es Ihnen, bewährte Verfahren durchzusetzen, auch wenn sich der Code weiterentwickelt, und Drittanbieter-Inhalte sicherer zu integrieren.

Die Berechtigungsrichtlinie ist ähnlich wie die {{Glossary("CSP", "Content Security Policy")}}, steuert jedoch Funktionen anstelle von Sicherheitsverhalten.

Beispiele dafür, was Sie mit einer Berechtigungsrichtlinie tun können:

- Ändern Sie das Standardverhalten des Autoplay auf mobilen Geräten und bei Drittanbieter-Videos.
- Beschränken Sie eine Website darauf, auf sensible Geräte wie die Kamera, das Mikrofon oder die Lautsprecher zuzugreifen.
- Erlauben Sie iframes, die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) zu verwenden.
- Verhindern Sie, dass Elemente geskriptet werden, wenn sie nicht im Sichtfenster sichtbar sind, um die Leistung zu verbessern.

> [!NOTE]
> Die Berechtigungsrichtlinie hieß früher Feature Policy. Der Name hat sich geändert, ebenso wie die HTTP-Header-Syntax. Berücksichtigen Sie dies, wenn Sie in der Vergangenheit die Feature Policy verwendet haben, und überprüfen Sie die Tabellen zur Browser-Kompatibilität. Die `<iframe allow=" ... ">`-Syntax ist gleich geblieben.

## Konzepte und Verwendung

Das Web bietet Funktionalitäten und APIs, die bei Missbrauch ein Risiko für Privatsphäre oder Sicherheit darstellen können. In solchen Fällen möchten Sie möglicherweise strikt einschränken, wie diese Funktionen auf einer Website verwendet werden. In jedem Fall sollte es eine intuitive oder nicht-störende Möglichkeit für Webentwickler geben, Fälle zu erkennen und zu behandeln, in denen eine Funktion deaktiviert ist.

Einige Ansätze beinhalten:

- "Zugriff verweigert" wird für JavaScript-APIs zurückgegeben, die Benutzererlaubnis erfordern.
- JavaScript-APIs, die Zugriff auf Funktionen bieten, geben `false`-Werte zurück oder werfen einen Fehler.
- APIs sind nicht einmal verfügbar, als ob sie nicht existieren würden.
- Optionen, die das Verhalten der Funktion steuern, haben unterschiedliche Standardwerte.

> [!NOTE]
> Neu eingeführte Funktionen können eine explizite API haben, um den Status zu signalisieren. Bestehende Funktionen, die später in die Berechtigungsrichtlinie integriert werden, verwenden in der Regel bestehende Mechanismen.

Die Berechtigungsrichtlinie ermöglicht es Ihnen, zu kontrollieren, welche Ursprünge welche Funktionen verwenden können, sowohl auf der obersten Ebene als auch in eingebetteten {{htmlelement("iframe")}}s. Ziel ist es, bewährte Verfahren für gute Benutzererfahrungen durchzusetzen und eine detaillierte Kontrolle über _sensible_ oder _leistungsstarke_ Funktionen zu bieten (das bedeutet Funktionen, für deren Nutzung ein Benutzer ausdrücklich eine Erlaubnis erteilen muss, bevor der zugehörige Code ausgeführt werden kann).

Die Berechtigungsrichtlinie bietet zwei Möglichkeiten, Richtlinien zu spezifizieren:

- Der {{httpheader("Permissions-Policy")}} HTTP-Header, um die Nutzung von Funktionen in empfangenen Antworten und eingebetteten Inhalten innerhalb der Seite zu kontrollieren (dazu gehören {{htmlelement("iframe")}}s).
- Das {{htmlelement("iframe")}} [`allow`](/de/docs/Web/HTML/Element/iframe#attributes)-Attribut, um die Nutzung von Funktionen nur in bestimmten {{htmlelement("iframe")}}s zu steuern.

Diese sind getrennt, aber verwandt — siehe [Vererbung von Richtlinien für eingebettete Inhalte](#vererbung_von_richtlinien_für_eingebettete_inhalte) für Details.

> [!NOTE]
> Skripte können programmatisch Informationen über die Berechtigungsrichtlinie über das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Objekt abfragen, das sich entweder bei [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) oder [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) befindet.

Um jede Funktion zu steuern, schreiben Sie eine Richtlinie, die besteht aus:

- Einer **Direktive**, die den Namen der zu kontrollierenden Funktion identifiziert. Siehe die [Liste der verschiedenen verfügbaren Direktiven](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives).
- Einer **Erlaubnisliste**, die eine Liste von Ursprüngen enthält, in denen die Funktion kontrolliert werden soll. Sie können eine Funktion für alle oder spezifische Ursprünge aktivieren oder deren Nutzung in allen Ursprüngen blockieren.

Siehe unten für mehrere Beispiele.

## Beziehung zur Berechtigungs-API

Die Berechtigungsrichtlinie und die [Berechtigungs-API](/de/docs/Web/API/Permissions_API) sind eng verwandt, aber unterschiedlich. Die Funktionen, deren Berechtigungen von beiden Technologien gesteuert werden, überschneiden sich.

- Mit der Berechtigungsrichtlinie kann ein Server festlegen, ob eine Funktion in einem bestimmten Dokument (oder eingebetteten `<frame>`s darin) verwendet werden kann. Diese werden als **richtliniengesteuerte** Funktionen bezeichnet — siehe die [Liste der Berechtigungsrichtliniendirektiven](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives).
- Die Berechtigungs-API steuert den Zugriff auf Funktionen basierend auf von Benutzern gewährten Berechtigungen. Diese Funktionen sind im [Berechtigungsregister](https://w3c.github.io/permissions-registry/) erfasst.

Der Identifizierungsstring, der für jede Funktion verwendet wird, bleibt in beiden Fällen konsistent, zum Beispiel `geolocation` für die [Geolocation API](/de/docs/Web/API/Geolocation_API). Die meisten der API-Funktionen im Berechtigungsregister haben auch eine entsprechende Berechtigungsrichtliniendirektive. Eine Ausnahme bildet die [Notifications API](/de/docs/Web/API/Notifications_API).

In der Regel, wenn eine Berechtigungsrichtlinie die Verwendung einer leistungsstarken Funktion blockiert, wird der Benutzer nicht einmal um Erlaubnis gefragt, sie zu verwenden, und die Methode [`query()`](/de/docs/Web/API/Permissions/query) der Berechtigungs-API wird einen [`state`](/de/docs/Web/API/PermissionStatus/state)-Wert von `denied` zurückgeben.

Siehe auch [Berechtigungen > Beziehung zur Berechtigungsrichtlinienspezifikation](https://w3c.github.io/permissions/#relationship-to-permissions-policy).

## Erlaubnislisten

Eine Erlaubnisliste ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthalten, getrennt durch Leerzeichen:

- `*`: Die Funktion wird in diesem Dokument und allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
- `()` (leere Erlaubnisliste): Die Funktion ist in obersten und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für das `<iframe>` `allow` Attribut ist `'none'`.
- `self`: Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) nur im gleichen Ursprung erlaubt. Die Funktion ist in Ursprüngen in verschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` betrachtet werden. Das Äquivalent für das `<iframe>` `allow` Attribut ist `'self'`.
- `'src'`: Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument vom gleichen Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}} Attribut stammt. Dieser Wert wird nur im `<iframe>` `allow` Attribut verwendet und ist der _Standard_-Erlaubnislistewert in `<iframe>`s.
- `"<origin>"`: Die Funktion ist für bestimmte Ursprünge erlaubt (z.B. `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>` erlauben-Attributen nicht zitiert werden.

Die Werte `*` und `()` dürfen nur alleine verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden dürfen.

> [!NOTE]
> Direktiven haben eine Standard-Erlaubnisliste, die immer eine von `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten steuert, wenn sie nicht explizit in einer Richtlinie aufgeführt sind. Diese sind auf den individuellen [Direktivreferenzseiten](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives) spezifiziert. Für `<iframe>` `allow` Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Wildcards in den Berechtigungsrichtlinien-Ursprüngen einschließen. Das bedeutet, dass Sie anstelle mehrerer verschiedener Subdomains in einer Erlaubnisliste nur einen Ursprung mit einem Platzhalter angeben müssen.

Anstatt also

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie angeben

```http
("https://example.com" "https://*.example.com")
```

> **Hinweis:** `"https://*.example.com"` entspricht nicht `"https://example.com"`.

Beispiele für Erlaubnislisten:

- `*`
- `()`
- `(self)`
- `(src)`
- `("https://a.example.com")`
- `("https://a.example.com" "https://b.example.com")`
- `(self "https://a.example.com" "https://b.example.com")`
- `(src "https://a.example.com" "https://b.example.com")`
- `("https://*.example.com")`

## Syntax des Permissions-Policy-Headers

Die allgemeine Syntax sieht so aus:

```http
Permissions-Policy: <directive>=<allowlist>
```

Um beispielsweise den Zugriff auf Geolokalisierung vollständig zu blockieren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=()
```

Oder um den Zugriff auf eine Untergruppe von Ursprüngen zu ermöglichen, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem der Header mit einer kommaseparierten Liste von Richtlinien gesendet wird oder indem ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self "https://example.com"), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self "https://example.com")
Permissions-Policy: camera=*
```

## Eingebettete Frame-Syntax

Damit ein {{htmlelement("iframe")}} eine Funktion aktiviert hat, muss sein erlaubter Ursprung auch in der Erlaubnisliste der übergeordneten Seite enthalten sein. Aufgrund dieses [Vererbungsmusters](#vererbung_von_richtlinien_für_eingebettete_inhalte) ist es eine gute Idee, die breiteste akzeptable Unterstützung für eine Funktion im HTTP-Header zu spezifizieren und dann den benötigten Unterstützungsteil in jedem `<iframe>` anzugeben.

Die allgemeine Syntax sieht so aus:

```html
<iframe src="<origin>" allow="<directive> <allowlist>"></iframe>
```

Um beispielsweise den Zugriff auf Geolokalisierung vollständig zu blockieren, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation 'none'"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig, wenn ein `<iframe>` zu einem anderen Ursprung navigiert, wird die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Durch Auflisten des Ursprungs, zu dem das `<iframe>` navigiert, im `allow` Attribut, wird die auf das ursprüngliche `<iframe>` angewendete Berechtigungsrichtlinie auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine durch Semikolon getrennte Liste von Richtliniendirektiven im `allow` Attribut aufgenommen wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist erwähnenswert, den `src` Wert speziell zu erwähnen. Wir haben oben erwähnt, dass die Verwendung dieses Erlaubnislistenwerts bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument vom gleichen Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}} Attribut stammt. Dieser Wert ist der _Standard_-`allowlist`-Wert für Funktionen, die in `allow` aufgeführt sind, daher sind die folgenden gleichwertig:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

> [!NOTE]
> Wie Sie bemerken werden, ist die Syntax für `<iframe>`-Richtlinien etwas anders als die Syntax für `Permissions-Policy`-Header. Erstere verwendet immer noch dieselbe Syntax wie die ältere Feature Policy-Spezifikation, die durch die Berechtigungsrichtlinie ersetzt wurde.

### Fenced Frames und Berechtigungsrichtlinie

{{htmlelement("fencedframe")}}s interagieren mit Berechtigungsrichtlinien auf die gleiche Weise wie `<iframe>`s, jedoch in einer viel eingeschränkteren Kapazität. Nur bestimmte Funktionen, die für den Einsatz in `<fencedframe>`s bestimmt sind, können über auf sie gesetzte Berechtigungsrichtlinien aktiviert werden; andere richtliniengesteuerte Funktionen sind in diesem Kontext nicht verfügbar.

Siehe [Berechtigungsrichtlinien, die für abgeschirmte Frames verfügbar sind](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

## Vererbung von Richtlinien für eingebettete Inhalte

Skripte erben die Richtlinie ihres Browsing-Kontextes, unabhängig von ihrem Ursprung. Das bedeutet, dass Top-Level-Skripte die Richtlinie aus dem Hauptdokument erben.

Alle `<iframe>`s erben die Richtlinie ihrer übergeordneten Seite. Wenn das `<iframe>` ein `allow`-Attribut _und_ die übergeordnete Seite eine {{HTTPHeader("Permissions-Policy")}} hat, werden die Richtlinien der übergeordneten Seite und des `allow`-Attributs kombiniert, wobei der restriktivste Unterabschnitt verwendet wird. Damit ein `<iframe>` eine Funktion aktiviert hat, muss der Ursprung sowohl in der Erlaubnisliste der übergeordneten Seite als auch im `allow`-Attribut enthalten sein.

Das Deaktivieren einer Funktion in einer Richtlinie ist ein einseitiger Schalter. Wenn eine Funktion für einen untergeordneten Frame von ihrem übergeordneten Frame deaktiviert wurde, kann der Untergeordnete sie nicht wieder aktivieren, und auch keiner der Nachkommen des Untergeordneten.

## Beispiele

### Kombinieren von HTTP-Header und `<iframe>`-Richtlinien

Nehmen wir an, wir wollten die Nutzung der Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten von unserem vertrauenswürdigen Werbenetzwerk ermöglichen. Wir könnten die seitenweite Berechtigungsrichtlinie so einrichten:

```http
Permissions-Policy: geolocation=(self "https://trusted-ad-network.com")
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` so festlegen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung am Ende in das `<iframe>` geladen wird, hätte er keinen Zugriff auf Geolokalisierung:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} HTTP-Header
- {{HTMLElement("iframe", "allow", "#Attributes")}} Attribut bei iframes
- [Steuerung von Browserfunktionen mit Berechtigungsrichtlinie](https://developer.chrome.com/docs/privacy-security/permissions-policy): Verwendung Leitfaden, der auch mehrere Demo-Links enthält.
- [Berechtigungs-/Feature-Richtlinien auf chromestatus.com](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Privatsphäre, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
