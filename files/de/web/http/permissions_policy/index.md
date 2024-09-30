---
title: Permissions Policy
slug: Web/HTTP/Permissions_Policy
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{HTTPSidebar}}

**Permissions Policy** bietet Mechanismen für Webentwickler, um explizit zu deklarieren, welche Funktionalitäten auf einer Website verwendet werden können und welche nicht. Sie definieren eine Reihe von "Richtlinien", die einschränken, auf welche APIs der Code der Website zugreifen kann oder das Standardverhalten des Browsers für bestimmte Funktionen modifizieren. Dies ermöglicht es Ihnen, bewährte Praktiken durchzusetzen, selbst wenn sich der Code weiterentwickelt – und Drittanbieterinhalte sicherer zusammenzustellen.

Die Permissions Policy ist ähnlich der [Content Security Policy](/de/docs/Glossary/CSP), jedoch werden hier Funktionen statt Sicherheitsverhalten kontrolliert.

Beispiele dafür, was Sie mit der Permissions Policy tun können:

- Ändern Sie das Standardverhalten der automatischen Wiedergabe bei mobilen und Drittanbieter-Videos.
- Einschränken einer Website hinsichtlich der Nutzung sensibler Geräte wie Kamera, Mikrofon oder Lautsprecher.
- Erlauben von iframes die Nutzung der [Fullscreen API](/de/docs/Web/API/Fullscreen_API).
- Verhindern, dass Elemente geskriptet werden, wenn sie nicht im sichtbaren Bereich sind, um die Leistung zu verbessern.

> [!NOTE]
> Permissions Policy wurde früher Feature Policy genannt. Der Name hat sich geändert, ebenso wie die Syntax des HTTP-Headers. Denken Sie daran, wenn Sie in der Vergangenheit Feature Policy verwendet haben, und überprüfen Sie die Browserunterstützungstabellen. Die Syntax `<iframe allow=" ... ">` hat sich nicht verändert.

## Konzepte und Nutzung

Das Web bietet Funktionalitäten und APIs, die bei Missbrauch potenzielle Risiken für die Privatsphäre oder Sicherheit darstellen können. In solchen Fällen möchten Sie eventuell die Nutzung der Funktionalität auf einer Website streng einschränken. In jedem Fall sollte es eine intuitive oder nicht störende Möglichkeit für Webentwickler geben, Fälle zu erkennen und zu handhaben, in denen eine Funktion deaktiviert ist.

Einige Ansätze sind:

- "Permission denied" wird für JavaScript-APIs zurückgegeben, die Benutzergenehmigungen erfordern.
- JavaScript-APIs, die Zugriff auf Funktionen bieten, geben `false` Werte zurück oder werfen einen Fehler.
- APIs werden gar nicht erst offengelegt, als ob sie nicht existieren.
- Optionen, die das Funktionsverhalten steuern, haben unterschiedliche Standardwerte.

> [!NOTE]
> Neu eingeführte Funktionen können eine explizite API haben, die den Status signalisiert. Bestehende Funktionen, die später in die Permissions Policy integriert werden, verwenden typischerweise bestehende Mechanismen.

Die Permissions Policy ermöglicht es Ihnen, zu kontrollieren, welche Ursprünge welche Funktionen nutzen können, sowohl auf der obersten Ebene der Seite als auch in eingebetteten {{htmlelement("iframe")}}s. Ziel ist es, bewährte Praktiken für eine gute Benutzererfahrung durchzusetzen und eine detaillierte Kontrolle über _sensitive_ oder _leistungsstarke_ Funktionen bereitzustellen (d. h. Funktionen, für die ein Benutzer die ausdrückliche Erlaubnis geben muss, bevor der zugehörige Code ausgeführt werden kann).

Die Permissions Policy bietet zwei Möglichkeiten, Richtlinien zu definieren:

- Der {{httpheader("Permissions-Policy")}} HTTP-Header, um die Nutzung von Funktionen in erhaltenen Antworten und allen eingebetteten Inhalten auf der Seite zu kontrollieren (einschließlich {{htmlelement("iframe")}}s).
- Das {{htmlelement("iframe")}} [`allow`](/de/docs/Web/HTML/Element/iframe#attributes)-Attribut, um die Nutzung von Funktionen nur in bestimmten {{htmlelement("iframe")}}s zu kontrollieren.

Diese sind getrennt, aber miteinander verbunden – siehe [Vererbung von Richtlinien für eingebettete Inhalte](#vererbung_von_richtlinien_für_eingebettete_inhalte) für Details.

> [!NOTE]
> Skripte können programmatisch Informationen über die Berechtigungsrichtlinie über das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Objekt abfragen, das entweder unter [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) oder [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) zu finden ist.

Um jede Funktion zu steuern, schreiben Sie eine Richtlinie, die aus besteht:

- Einem **Directive**, das den Namen der zu steuernden Funktion identifiziert. Siehe die [Liste der verschiedenen verfügbaren Direktiven](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives).
- Einer **Erlaubtenliste**, die eine Liste von Ursprüngen enthält, in denen die Funktion kontrolliert werden soll. Sie können eine Funktion für alle oder spezifische Ursprünge aktivieren oder ihre Nutzung in allen Ursprüngen blockieren.

Siehe unten für mehrere Beispiele.

## Beziehung zur Permissions API

Permissions Policy und die [Permissions API](/de/docs/Web/API/Permissions_API) sind eng verwandt, aber unterschiedlich. Die Funktionen, deren Berechtigungen von beiden Technologien kontrolliert werden, überschneiden sich.

- Permissions Policy ermöglicht es einem Server, festzulegen, ob eine Funktion in einem bestimmten Dokument (oder darin eingebetteten `<frame>`s) verwendet werden kann. Diese werden als **richtliniengesteuerte** Funktionen bezeichnet – siehe die [Liste der Permissions Policy-Direktiven](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives).
- Die Permissions API steuert den Zugriff auf Funktionen basierend auf Benutzerfreigaben. Diese Funktionen sind im [Permissions Registry](https://w3c.github.io/permissions-registry/) aufgeführt.

Der Identifikationsstring für jede Funktion ist in beiden konsistent gehalten, zum Beispiel `geolocation` für die [Geolocation API](/de/docs/Web/API/Geolocation_API). Die meisten API-Funktionen im Permissions Registry haben auch eine entsprechende Permissions Policy-Direktive. Eine Ausnahme ist die [Notifications API](/de/docs/Web/API/Notifications_API).

Im Allgemeinen wird der Benutzer, wenn eine Permissions Policy die Nutzung einer leistungsstarken Funktion blockiert, nicht einmal um Erlaubnis gefragt, und die `query()`-Methode der Permissions API gibt einen `state`-Wert von `denied` zurück.

Siehe auch [Permissions > Beziehung zur Permissions Policy-Spezifikation](https://w3c.github.io/permissions/#relationship-to-permissions-policy).

## Erlaubtenlisten

Eine Erlaubtenliste ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern, getrennt durch Leerzeichen, enthält:

- `*`: Die Funktion wird in diesem Dokument und allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
- `()` (leere Erlaubtenliste): Die Funktion ist in obersten und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für das `<iframe>` `allow`-Attribut ist `'none'`.
- `self`: Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) nur im selben Ursprung erlaubt. Die Funktion ist in dokumentübergreifenden Dokumenten in verschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Abkürzung für `https://your-site.example.com` betrachtet werden. Das Äquivalent für das `<iframe>` `allow`-Attribut ist `'self'`.
- `'src'`: Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument vom selben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut kommt. Dieser Wert wird nur im `<iframe>` `allow`-Attribut verwendet und ist der _Standard_ Erlaubtenlistenwert in `<iframe>`s.
- `"<origin>"`: Die Funktion ist für bestimmte Ursprünge erlaubt (z. B. `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt sein. Beachten Sie, dass Ursprünge in `<iframe>` allow-Attributen nicht in Anführungszeichen stehen.

Die Werte `*` und `()` dürfen nur alleine verwendet werden, während `self` und `src` mit einem oder mehreren Ursprüngen kombiniert werden können.

> [!NOTE]
> Direktiven haben eine Standard-Erlaubtenliste, die immer eines von `*`, `self`, oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten steuert, wenn sie nicht explizit in einer Richtlinie aufgeführt sind. Diese sind auf den individuellen [Direktiven-Referenzseiten](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives) angegeben. Für `<iframe>` `allow`-Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Platzhalter in Permissions Policy-Ursprüngen verwenden. Das heißt, anstatt mehrere verschiedene Subdomains explizit in einer Erlaubtenliste anzugeben, können Sie sie alle in einem einzigen Ursprung mit einem Platzhalter spezifizieren.

Statt also folgendes anzugeben:

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

Können Sie folgendes angeben:

```http
("https://example.com" "https://*.example.com")
```

> **Anmerkung:** `"https://*.example.com"` entspricht nicht `"https://example.com"`.

Beispiele für Erlaubtenlisten:

- `*`
- `()`
- `(self)`
- `(src)`
- `("https://a.example.com")`
- `("https://a.example.com" "https://b.example.com")`
- `(self "https://a.example.com" "https://b.example.com")`
- `(src "https://a.example.com" "https://b.example.com")`
- `("https://*.example.com")`

## Permissions-Policy Header-Syntax

Die allgemeine Syntax sieht so aus:

```http
Permissions-Policy: <directive>=<allowlist>
```

Um zum Beispiel den gesamten Zugriff auf Geolokalisierung zu blockieren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=()
```

Um den Zugriff auf eine Teilmenge von Ursprüngen zu erlauben, würden Sie folgendes tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem der Header mit einer durch Kommas getrennten Liste von Richtlinien gesendet wird, oder indem ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self "https://example.com"), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self "https://example.com")
Permissions-Policy: camera=*
```

## Eingebettete Frame-Syntax

Damit ein {{htmlelement("iframe")}} eine Funktion aktiviert hat, muss der erlaubte Ursprung auch in der Erlaubtenliste für die übergeordnete Seite sein. Aufgrund dieses [Vererbungsverhaltens](#vererbung_von_richtlinien_für_eingebettete_inhalte) ist es eine gute Idee, die breiteste akzeptable Unterstützung für eine Funktion im HTTP-Header anzugeben und dann das Unterset von Unterstützung, das Sie in jedem `<iframe>` benötigen, festzulegen.

Die allgemeine Syntax sieht so aus:

```html
<iframe src="<origin>" allow="<directive> <allowlist>"></iframe>
```

Um also zum Beispiel den gesamten Zugriff auf Geolokalisierung zu blockieren, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation 'none'"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig wird eine Richtlinie nicht auf einen anderen Ursprung angewendet, wenn ein `<iframe>` zu einem anderen Ursprung navigiert. Indem Sie den Ursprung, auf den das `<iframe>` navigiert, im `allow`-Attribut auflisten, wird die ursprünglich auf das `<iframe>` angewendete Permissions Policy auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig durch Einschließen einer mit Semikolons getrennten Liste von Richtlinien-Direktiven innerhalb des `allow`-Attributs gesteuert werden.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist erwähnenswert, dass der `src`-Wert speziell behandelt wird. Wir haben oben erwähnt, dass die Verwendung dieses Erlaubtenlistenwerts bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument vom selben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut kommt. Dieser Wert ist der _Standard_ Erlaubtenlistenwert für Funktionen, die in `allow` aufgeführt sind, daher sind die folgenden äquivalent:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

> [!NOTE]
> Wie Sie bemerkt haben, unterscheidet sich die Syntax für `<iframe>`-Richtlinien ein wenig von der Syntax für `Permissions-Policy`-Header. Erstere verwendet immer noch die gleiche Syntax wie die ältere Feature-Policy-Spezifikation, die von der Permissions Policy abgelöst wurde.

### Fenced Frames und Permissions Policy

{{htmlelement("fencedframe")}} interagieren in einer ähnlichen Weise mit Berechtigungsrichtlinien wie `<iframe>`, jedoch in einem viel restriktiveren Umfang. Nur spezifische Funktionen, die zur Verwendung in `<fencedframe>`s entwickelt wurden, können über Berechtigungsrichtlinien aktiviert werden, die auf ihnen gesetzt sind; andere richtliniengesteuerte Funktionen sind in diesem Kontext nicht verfügbar.

Siehe [Erlaubte Berechtigungsrichtlinien für Fenced Frames](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

## Vererbung von Richtlinien für eingebettete Inhalte

Skripte erben die Politik ihres Browsing-Kontexts, unabhängig von ihrem Ursprung. Das bedeutet, dass oberste Skripte die Politik vom Hauptdokument erben.

Alle `<iframe>`s erben die Politik ihrer übergeordneten Seite. Wenn das `<iframe>` ein `allow`-Attribut _und_ die übergeordnete Seite einen {{HTTPHeader("Permissions-Policy")}} hat, werden die Politiken der übergeordneten Seite und des `allow`-Attributs kombiniert, wobei der restriktivste Teil verwendet wird. Damit ein `<iframe>` eine Funktion aktiviert hat, muss der Ursprung sowohl in der Erlaubtenliste der übergeordneten Seite als auch im `allow`-Attribut sein.

Das Deaktivieren einer Funktion in einer Richtlinie ist ein einmaliger Schalter. Wenn eine Funktion durch ihren übergeordneten Rahmen für einen untergeordneten Rahmen deaktiviert wurde, kann das Kind sie nicht wieder aktivieren, und keines der Nachkommen des Kindes ebenfalls nicht.

## Beispiele

### Kombination von HTTP-Header und `<iframe>`-Richtlinien

Wenn wir zum Beispiel die Nutzung von Geolokalisierungen auf unserem eigenen Ursprung und in eingebetteten Inhalten von unserem vertrauenswürdigen Werbenetzwerk aktivieren wollten, könnten wir die seitenweite Permissions Policy so einrichten:

```http
Permissions-Policy: geolocation=(self "https://trusted-ad-network.com")
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` so einrichten:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in das `<iframe>` geladen wird, hätte er keinen Zugriff auf die Geolokalisierung:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} HTTP-Header
- {{HTMLElement("iframe", "allow", "#Attributes")}}-Attribut bei Iframes
- [Steuerung von Browserfunktionen mit Permissions Policy](https://developer.chrome.com/docs/privacy-security/permissions-policy): Anleitung, die auch mehrere Demo-Links enthält.
- [Permissions/Feature Richtlinien auf chromestatus.com](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Privatsphäre, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
