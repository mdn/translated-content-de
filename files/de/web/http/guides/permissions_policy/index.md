---
title: Berechtigungspolitik
slug: Web/HTTP/Guides/Permissions_Policy
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Die **Berechtigungspolitik** bietet Mechanismen, mit denen Webentwickler explizit festlegen können, welche Funktionalität auf einer Website genutzt werden darf und welche nicht. Sie definieren eine Reihe von "Richtlinien", die einschränken, auf welche APIs der Code der Website zugreifen kann, oder das Standardverhalten des Browsers für bestimmte Funktionen ändern. Dies ermöglicht es Ihnen, bewährte Praktiken durchzusetzen, auch wenn der Code sich weiterentwickelt – sowie Drittanbieter-Inhalte sicherer zu integrieren.

Die Berechtigungspolitik ist ähnlich der {{Glossary("CSP", "Content Security Policy")}}, steuert jedoch Funktionen anstelle von Sicherheitsverhalten.

Beispiele für Maßnahmen, die Sie mit der Berechtigungspolitik durchführen können:

- Ändern des Standardverhaltens von Autoplay auf mobilen Geräten und bei Videos von Drittanbietern.
- Einschränkung einer Website bei der Nutzung sensibler Geräte wie Kamera, Mikrofon oder Lautsprecher.
- Erlauben, dass iframes die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwenden dürfen.
- Verhindern, dass Elemente geskriptet werden, wenn sie nicht im Ansichtsbereich sichtbar sind, um die Leistung zu verbessern.

> [!NOTE]
> Die Berechtigungspolitik wurde früher Feature Policy genannt. Der Name wurde geändert und auch die Syntax des HTTP-Headers, daher sollten Sie dies berücksichtigen, wenn Sie in der Vergangenheit die Feature Policy verwendet haben, und die Browser-Support-Tabellen überprüfen. Die Syntax `<iframe allow=" ... ">` ist gleich geblieben.

## Konzepte und Verwendung

Das Web bietet Funktionalitäten und APIs, die bei Missbrauch Datenschutz- oder Sicherheitsrisiken darstellen können. In solchen Fällen möchten Sie möglicherweise strikt begrenzen, wie Funktionen auf einer Website verwendet werden. In jedem Fall sollte es für Webentwickler eine intuitive oder nicht unterbrechende Möglichkeit geben, Fälle zu erkennen und zu handhaben, in denen eine Funktion deaktiviert ist.

Einige Ansätze umfassen:

- "Berechtigung verweigert" wird für JavaScript-APIs zurückgegeben, die Benutzerberechtigungen erfordern.
- JavaScript-APIs, die Zugang zu Funktionen gewähren, geben `false` Werte zurück oder werfen einen Fehler.
- APIs werden überhaupt nicht bereitgestellt, als ob sie nicht existieren.
- Optionen, die das Funktionsverhalten steuern, haben unterschiedliche Standardwerte.

> [!NOTE]
> Neu eingeführte Funktionen können eine explizite API haben, um den Status zu signalisieren. Bestehende Funktionen, die später in die Berechtigungspolitik integriert werden, nutzen in der Regel bestehende Mechanismen.

Die Berechtigungspolitik ermöglicht es Ihnen, zu steuern, welche Ursprünge welche Funktionen verwenden können, sowohl auf der obersten Ebene der Seite als auch in eingebetteten {{htmlelement("iframe")}}s. Ziel ist es, bewährte Praktiken für gute Benutzererlebnisse durchzusetzen und granulare Kontrolle über _sensible_ oder _leistungsstarke_ Funktionen zu bieten (bedeutet, dass ein Benutzer ausdrücklich die Erlaubnis zur Nutzung geben muss, bevor der entsprechende Code ausgeführt werden kann).

Die Berechtigungspolitik bietet zwei Möglichkeiten, Richtlinien anzugeben:

- Der {{httpheader("Permissions-Policy")}} HTTP-Header, um die Nutzung von Funktionen in empfangenen Antworten und in eingebettetem Inhalt innerhalb der Seite zu steuern (dazu gehören {{htmlelement("iframe")}}s).
- Das {{htmlelement("iframe")}} [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#attributes) Attribut, um die Nutzung von Funktionen nur in bestimmten {{htmlelement("iframe")}}s zu steuern.

Diese sind separat, aber verwandt – siehe [Vererbung von Richtlinien für eingebettete Inhalte](#vererbung_von_richtlinien_für_eingebettete_inhalte) für Details.

> [!NOTE]
> Skripte können programmgesteuert Informationen zur Berechtigungspolitik über das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Objekt abfragen, das sich entweder unter [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) oder [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) befindet.

Um jede Funktion zu steuern, schreiben Sie eine Richtlinie, die Folgendes umfasst:

- Eine **Direktive**, die den Namen der zu kontrollierenden Funktion angibt. Siehe die [Liste der verschiedenen verfügbaren Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives).
- Eine **Zulassungsliste**, eine Liste von Ursprüngen, in denen die Funktion kontrolliert werden soll. Sie können eine Funktion für alle oder bestimmte Ursprünge aktivieren oder ihre Nutzung in allen Ursprüngen blockieren.

Siehe unten für mehrere Beispiele.

## Beziehung zur Berechtigungs-API

Die Berechtigungspolitik und die [Berechtigungs-API](/de/docs/Web/API/Permissions_API) sind eng verwandt, aber unterschiedlich. Die Funktionen, deren Berechtigungen von beiden Technologien gesteuert werden, überschneiden sich.

- Die Berechtigungspolitik ermöglicht es einem Server festzulegen, ob eine Funktion in einem bestimmten Dokument (oder eingebetteten `<frame>`s darin) verwendet werden kann. Diese werden als **richtliniengesteuerte** Funktionen bezeichnet – siehe die [Liste der Berechtigungspolitik-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives).
- Die Berechtigungs-API steuert den Zugriff auf Funktionen basierend auf benutzergewährten Berechtigungen. Diese Funktionen sind im [Berechtigungsregister](https://w3c.github.io/permissions-registry/) aufgezeichnet.

Der Identifizierungsstring, der für jede Funktion verwendet wird, bleibt über beide Technologien hinweg konsistent, z. B. `geolocation` für die [Geolocation API](/de/docs/Web/API/Geolocation_API). Die meisten der API-Funktionen im Berechtigungsregister haben auch eine entsprechende Berechtigungspolitik-Direktive. Eine Ausnahme ist die [Notifications API](/de/docs/Web/API/Notifications_API).

Grundsätzlich wird der Benutzer nicht einmal um Erlaubnis zur Nutzung einer leistungsstarken Funktion gebeten, wenn eine Berechtigungspolitik ihre Verwendung blockiert, und die Berechtigungs-API-Methode [`query()`](/de/docs/Web/API/Permissions/query) gibt einen [`state`](/de/docs/Web/API/PermissionStatus/state) Wert von `denied` zurück.

Siehe auch [Berechtigungen > Beziehung zur Berechtigungspolitik-Spezifikation](https://w3c.github.io/permissions/#relationship-to-permissions-policy).

## Zulassungslisten

Eine Zulassungsliste ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthalten, getrennt durch Leerzeichen:

- `*`: Die Funktion wird in diesem Dokument und allen verschachtelten Browsing-Kontexten (`<iframe>`s), unabhängig von ihrer Herkunft, erlaubt sein.
- `()` (leere Zulassungsliste): Die Funktion ist in obersten und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für `<iframe>` `allow` Attribut ist `'none'`.
- `self`: Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) mit derselben Herkunft nur erlaubt sein. Die Funktion wird in ursprungsübergreifenden Dokumenten in verschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` betrachtet werden. Das Äquivalent für das `<iframe>` `allow` Attribut ist `'self'`.
- `'src'`: Die Funktion wird in diesem `<iframe>` erlaubt sein, solange das darin geladene Dokument von derselben Herkunft wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}} Attribut stammt. Dieser Wert wird nur im `<iframe>` `allow` Attribut verwendet und ist der _standardmäßige_ Wert der Zulassungsliste für `<iframe>`s.
- `"<origin>"`: Die Funktion ist für bestimmte Ursprünge erlaubt (zum Beispiel, `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>` Allow-Attributen nicht in Anführungszeichen gesetzt sind.

Die Werte `*` und `()` dürfen nur allein verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

> [!NOTE]
> Direktiven haben eine standardmäßige Zulassungsliste, die immer entweder `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten bestimmt, wenn sie nicht explizit in einer Richtlinie angegeben sind. Diese sind auf den einzelnen [Direktivreferenzseiten](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives) spezifiziert. Für `<iframe>` `allow` Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Platzhalter in Berechtigungspolitik-Ursprüngen verwenden. Das bedeutet, dass Sie anstelle mehrerer unterschiedlicher Subdomains in einer Zulassungsliste explizit anzugeben, alle in einem einzigen Ursprung mit einem Platzhalter spezifizieren können.

Also anstelle von

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie angeben

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` entspricht nicht `"https://example.com"`.

Beispiele für Zulassungslisten:

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

Um also beispielsweise den gesamten Zugriff auf die Geolokalisierung zu blockieren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=()
```

Um den Zugriff auf eine Teilmenge von Ursprüngen zu ermöglichen, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem der Header mit einer Komma-separierten Liste von Richtlinien gesendet wird, oder indem ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel sind die folgenden äquivalent:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self "https://example.com"), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self "https://example.com")
Permissions-Policy: camera=*
```

## Eingebettete Frame-Syntax

Damit ein {{htmlelement("iframe")}} eine Funktion aktiviert hat, muss der erlaubte Ursprung auch in der Zulassungsliste der übergeordneten Seite enthalten sein. Aufgrund dieses [Vererbungverhaltens](#vererbung_von_richtlinien_für_eingebettete_inhalte) ist es eine gute Idee, den breitestmöglichen akzeptablen Support für eine Funktion im HTTP-Header anzugeben und dann den erforderlichen Teil-Support in jedem `<iframe>` anzugeben.

Die allgemeine Syntax sieht so aus:

```html
<iframe src="<origin>" allow="<directive> <allowlist>"></iframe>
```

Um also beispielsweise den gesamten Zugriff auf die Geolokalisierung zu blockieren, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation 'none'"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig wird, wenn ein `<iframe>` zu einem anderen Ursprung navigiert, die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Durch die Auflistung des Ursprungs, zu dem das `<iframe>` navigiert, im `allow` Attribut wird die Berechtigungspolitik, die auf das ursprüngliche `<iframe>` angewendet wurde, auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine durch Semikolon getrennte Liste von Richtlinien-Direktiven im `allow` Attribut eingeschlossen wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist erwähnenswert, den `src` Wert gesondert zu erwähnen. Wir haben oben erwähnt, dass die Verwendung dieses Wertes der Zulassungsliste bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das Dokument, das darin geladen wird, von derselben Herkunft wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}} Attribut ist. Dieser Wert ist der _standardmäßige_ Allowlist-Wert für Funktionen, die in `allow` aufgeführt sind, so dass die folgenden äquivalent sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

> [!NOTE]
> Wie Sie bemerkt haben, unterscheidet sich die Syntax für `<iframe>` Richtlinien etwas von der Syntax für `Permissions-Policy` Header. Die erstere verwendet immer noch die gleiche Syntax wie die ältere Feature Policy-Spezifikation, die durch die Berechtigungspolitik ersetzt wurde.

### Umzäunte Frames und Berechtigungspolitik

{{htmlelement("fencedframe")}}s interagieren mit Berechtigungspolitiken auf die gleiche Weise wie `<iframe>`s, jedoch in einer viel eingeschränkteren Kapazität. Nur spezifische Funktionen, die für die Verwendung in `<fencedframe>`s vorgesehen sind, können über auf ihnen eingestellte Berechtigungspolitiken aktiviert werden; andere richtliniengesteuerte Funktionen sind in diesem Kontext nicht verfügbar.

Weitere Informationen finden Sie unter [Berechtigungspolitiken verfügbar für umzäunte Frames](/de/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames).

## Vererbung von Richtlinien für eingebettete Inhalte

Skripte erben die Richtlinie ihres Browsing-Kontextes, unabhängig von ihrem Ursprung. Das bedeutet, dass Top-Level-Skripte die Richtlinie vom Hauptdokument erben.

Alle `<iframe>`s erben die Richtlinie ihrer übergeordneten Seite. Wenn das `<iframe>` ein `allow` Attribut _und_ die übergeordnete Seite einen {{HTTPHeader("Permissions-Policy")}} hat, werden die Richtlinien der übergeordneten Seite und des `allow` Attributs kombiniert, wobei das restriktivste Teilset verwendet wird. Damit ein `<iframe>` eine aktivierte Funktion hat, muss der Ursprung sowohl in der Zulassungsliste der übergeordneten Seite als auch im `allow` Attribut enthalten sein.

Das Deaktivieren einer Funktion in einer Richtlinie ist ein Einweg-Schalter. Wenn eine Funktion für einen untergeordneten Frame durch ihren übergeordneten Frame deaktiviert wurde, kann das Kind sie nicht wieder aktivieren, und auch keine der Nachkommen des Kindes.

## Beispiele

### Kombinieren von HTTP-Headern und `<iframe>` Richtlinien

Angenommen, wir möchten die Nutzung der Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten, die von unserem vertrauenswürdigen Werbenetzwerk kommen, ermöglichen. Wir könnten die seitenweite Berechtigungspolitik so einrichten:

```http
Permissions-Policy: geolocation=(self "https://trusted-ad-network.com")
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` so einrichten:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung im `<iframe>` geladen würde, hätte er keinen Zugang zur Geolokalisierung:

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
- [Steuern von Browser-Funktionen mit der Berechtigungspolitik](https://developer.chrome.com/docs/privacy-security/permissions-policy): Anleitung zur Nutzung, die auch mehrere Demo-Links enthält.
- [Berechtigungs-/Funktionsrichtlinien auf chromestatus.com](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
