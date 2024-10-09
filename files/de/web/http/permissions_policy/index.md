---
title: Permissions Policy
slug: Web/HTTP/Permissions_Policy
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

Die **Permissions Policy** bietet Mechanismen für Webentwickler, um explizit festzulegen, welche Funktionalität auf einer Website genutzt werden darf und welche nicht. Sie definieren eine Reihe von "Richtlinien", die einschränken, auf welche APIs der Code der Website zugreifen oder das Standardverhalten des Browsers für bestimmte Funktionen ändern kann. Dies ermöglicht es Ihnen, Best Practices durchzusetzen, auch wenn sich der Code weiterentwickelt – und gleichzeitig Drittanbieterinhalte sicherer zu integrieren.

Die Permissions Policy ähnelt der {{Glossary("CSP", "Content Security Policy")}}, steuert jedoch Funktionen anstelle von Sicherheitsverhalten.

Beispiele dafür, was Sie mit Permissions Policy tun können:

- Ändern des Standardverhaltens von Autoplay bei mobilen und Drittanbieter-Videos.
- Einschränkung der Nutzung sensibler Geräte wie Kamera, Mikrofon oder Lautsprecher für eine Website.
- Erlauben von iframes, die das [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwenden.
- Verhindern, dass Objekte gescriptet werden, wenn sie nicht im Ansichtsbereich sichtbar sind, um die Leistung zu verbessern.

> [!NOTE]
> Die Permissions Policy wurde früher Feature Policy genannt. Der Name sowie die HTTP-Header-Syntax haben sich geändert. Beachten Sie dies, wenn Sie in der Vergangenheit bereits Feature Policy verwendet haben, und überprüfen Sie die Tabellen zur Browserunterstützung. Die `<iframe allow=" ... ">`-Syntax ist unverändert geblieben.

## Konzepte und Nutzung

Das Web bietet Funktionalitäten und APIs, die bei Missbrauch Datenschutz- oder Sicherheitsrisiken bergen können. In solchen Fällen möchten Sie möglicherweise streng einschränken, wie Funktionalitäten auf einer Website genutzt werden. In jedem Fall sollte es für Webentwickler eine intuitive oder nicht störende Möglichkeit geben, Fälle zu erkennen und zu behandeln, in denen eine Funktion deaktiviert ist.

Einige Ansätze umfassen:

- "Permission denied" wird für JavaScript-APIs zurückgegeben, die eine Benutzererlaubnis erfordern.
- JavaScript-APIs, die Zugriff auf Funktionen gewähren, geben `false` zurück oder werfen einen Fehler.
- APIs werden nicht einmal offengelegt, als ob sie nicht existieren würden.
- Optionen, die das Verhalten einer Funktion steuern, haben unterschiedliche Standardwerte.

> [!NOTE]
> Neu eingeführte Funktionen können eine explizite API zur Signalisierung des Status haben. Bestehende Funktionen, die später in die Permissions Policy integriert werden, verwenden in der Regel bestehende Mechanismen.

Die Permissions Policy ermöglicht es Ihnen, zu kontrollieren, welche Ursprünge welche Funktionen nutzen können, sowohl auf der obersten Ebene einer Seite als auch in eingebetteten {{htmlelement("iframe")}}s. Das Ziel ist es, Best Practices für gute Benutzererfahrungen durchzusetzen und eine granulare Kontrolle über _sensible_ oder _mächtige_ Funktionen zu bieten (das heißt, Funktionen, für die ein Benutzer vor der Ausführung des zugehörigen Codes ausdrücklich die Erlaubnis erteilt haben muss).

Die Permissions Policy bietet zwei Möglichkeiten zur Festlegung von Richtlinien:

- Der {{httpheader("Permissions-Policy")}} HTTP-Header, um die Nutzung von Funktionen in empfangenen Antworten und eingebettetem Inhalt innerhalb der Seite zu steuern (einschließlich {{htmlelement("iframe")}}s).
- Das {{htmlelement("iframe")}} [`allow`](/de/docs/Web/HTML/Element/iframe#attributes) Attribut, um die Nutzung von Funktionen nur in bestimmten {{htmlelement("iframe")}}s zu steuern.

Diese sind getrennt, aber verwandt – siehe [Vererbung von Richtlinien für eingebettete Inhalte](#vererbung_von_richtlinien_für_eingebettete_inhalte) für Details.

> [!NOTE]
> Skripte können programmgesteuert Informationen über die Permissions Policy über das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Objekt abfragen, das sich entweder in [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) oder [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) befindet.

Um jede Funktion zu kontrollieren, schreiben Sie eine Richtlinie, die aus Folgendem besteht:

- Einer **Directive**, die den Namen der zu kontrollierenden Funktion identifiziert. Siehe die [Liste der verschiedenen verfügbaren Direktiven](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives).
- Einer **Allowlist**, die eine Liste von Ursprüngen enthält, die die Funktion kontrolliert werden soll. Sie können eine Funktion für alle oder bestimmte Ursprünge aktivieren oder ihre Nutzung in allen Ursprüngen blockieren.

Siehe unten für mehrere Beispiele.

## Beziehung zur Permissions API

Permissions Policy und die [Permissions API](/de/docs/Web/API/Permissions_API) sind eng verwandt, aber unterschiedlich. Die Funktionen, deren Berechtigungen von beiden Technologien gesteuert werden, überlappen sich.

- Die Permissions Policy ermöglicht es einem Server festzulegen, ob eine Funktion in einem bestimmten Dokument (oder eingebetteten `<frame>`s innerhalb davon) verwendet werden kann. Diese werden als **richtlinienkontrollierte** Funktionen bezeichnet – siehe die [Liste der Permissions Policy Direktiven](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives).
- Die Permissions API schränkt den Zugriff auf Funktionen basierend auf benutzergestandenen Berechtigungen ein. Diese Funktionen werden im [Permissions Registry](https://w3c.github.io/permissions-registry/) protokolliert.

Der identifizierende String für jede Funktion ist in beiden konsistent gehalten, zum Beispiel `geolocation` für das [Geolocation API](/de/docs/Web/API/Geolocation_API). Die meisten der im Permissions Registry aufgeführten API-Funktionen haben auch eine entsprechende Permissions Policy-Direktive. Eine Ausnahme bildet die [Notifications API](/de/docs/Web/API/Notifications_API).

Im Allgemeinen wird dem Benutzer nicht einmal eine Erlaubnisanfrage gestellt, wenn eine mächtige Funktion durch eine Permissions Policy blockiert wird, und die Permissions API [`query()`](/de/docs/Web/API/Permissions/query) Methode gibt einen [`state`](/de/docs/Web/API/PermissionStatus/state) Wert von `denied` zurück.

Siehe auch [Permissions > Relationship to the Permissions Policy specification](https://w3c.github.io/permissions/#relationship-to-permissions-policy).

## Allowlists

Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthält, getrennt durch Leerzeichen:

- `*`: Die Funktion wird in diesem Dokument und allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
- `()` (leere Allowlist): Die Funktion ist in obersten und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für das `<iframe>` `allow`-Attribut ist `'none'`.
- `self`: Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) im gleichen Ursprung nur erlaubt. Die Funktion ist nicht in fremd-originären Dokumenten in verschachtelten Browsing-Kontexten erlaubt. `self` kann als Kurzform für `https://your-site.example.com` betrachtet werden. Das Äquivalent für das `<iframe>` `allow`-Attribut ist `'self'`.
- `'src'`: Die Funktion wird in diesem `<iframe>` erlaubt, solange das geladene Dokument aus demselben Ursprung wie die URL im {{HTMLElement('iframe','src','#Attributes')}} Attribut stammt. Dieser Wert wird nur im `<iframe>` `allow`-Attribut verwendet und ist der _Standardwert_ für Allowlists in `<iframe>`s.
- `"<origin>"`: Die Funktion ist für spezielle Ursprünge erlaubt (zum Beispiel `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>` allow Attributen nicht in Anführungszeichen gesetzt sind.

Die Werte `*` und `()` dürfen nur allein verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

> [!NOTE]
> Direktiven haben eine Standard-Whitelist, bei der es sich immer um `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header handelt und die das Standardverhalten steuert, falls sie nicht explizit in einer Richtlinie aufgeführt sind. Diese werden auf den einzelnen [Direktivreferenzseiten](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives) angegeben. Für `<iframe>` `allow` Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Platzhalter in Permissions Policy Ursprüngen einfügen. Dies bedeutet, dass Sie anstelle mehrerer verschiedene Subdomains in einer Allowlist explizit anzugeben, sie alle in einem einzigen Ursprung mit einem Platzhalter angeben können.

Anstatt also

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie

```http
("https://example.com" "https://*.example.com")
```

angeben.

> **Hinweis:** `"https://*.example.com"` entspricht nicht `"https://example.com"`.

Beispiele für Allowlists:

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

Die allgemeine Syntax sieht folgendermaßen aus:

```http
Permissions-Policy: <directive>=<allowlist>
```

Um zum Beispiel den gesamten Zugriff auf Geolokalisierung zu blockieren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=()
```

Oder um den Zugriff auf eine Teilmenge von Ursprüngen zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem der Header mit einer kommagetrennten Liste von Richtlinien gesendet wird oder indem für jede Richtlinie ein separater Header gesendet wird.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self "https://example.com"), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self "https://example.com")
Permissions-Policy: camera=*
```

## Eingebettete Frame-Syntax

Damit ein {{htmlelement("iframe")}} eine Funktion aktiviert hat, muss auch sein erlaubter Ursprung in der Allowlist für die übergeordnete Seite enthalten sein. Aufgrund dieses [Vererbungsverhaltens](#vererbung_von_richtlinien_für_eingebettete_inhalte) ist es eine gute Idee, die größtmögliche Unterstützung für eine Funktion im HTTP-Header anzugeben und dann die Untermenge der Unterstützung, die Sie in jedem `<iframe>` benötigen.

Die allgemeine Syntax sieht folgendermaßen aus:

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

Das ist wichtig: Standardmäßig wird, wenn ein `<iframe>` zu einem anderen Ursprung navigiert, die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Beim Auflisten des Ursprungs, zu dem das `<iframe>` im `allow` Attribut navigiert, wird die Permissions Policy, die auf das ursprüngliche `<iframe>` angewendet wurde, auch auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine semikolongetrennte Liste von Richtlinienanweisungen innerhalb des `allow` Attributs eingefügt wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist erwähnenswert, den `src` Wert speziell zu erwähnen. Wir haben oben erwähnt, dass die Verwendung dieses Allowlists-Wertes bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das geladene Dokument aus demselben Ursprung wie die URL im {{HTMLElement('iframe','src','#Attributes')}} Attribut stammt. Dieser Wert ist der _Standard_`allowlist` Wert für Funktionen, die in `allow` gelistet sind, daher sind die folgenden gleichwertig:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

> [!NOTE]
> Wie Sie bemerkt haben, unterscheidet sich die Syntax für `<iframe>` Richtlinien etwas von der für `Permissions-Policy` Header. Ersteres verwendet nach wie vor dieselbe Syntax wie die ältere Feature Policy Spezifikation, die durch die Permissions Policy abgelöst wurde.

### Fenced Frames und Permissions Policy

{{htmlelement("fencedframe")}}s interagieren auf dieselbe Weise mit Permissions Policies wie `<iframe>`s, jedoch in einem viel eingeschränkteren Rahmen. Nur spezifische Funktionen, die für die Verwendung in `<fencedframe>`s konzipiert sind, können über auf ihnen gesetzte Permissions Policies aktiviert werden; andere richtlinienkontrollierte Funktionen sind in diesem Kontext nicht verfügbar.

Siehe [Permissions policies available to fenced frames](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

## Vererbung von Richtlinien für eingebettete Inhalte

Skripte erben die Richtlinie ihres Browsing-Kontexts, unabhängig von ihrem Ursprung. Das bedeutet, dass Top-Level-Skripte die Richtlinie des Hauptdokuments erben.

Alle `<iframe>`s erben die Richtlinie ihrer übergeordneten Seite. Wenn das `<iframe>` ein `allow` Attribut hat _und_ die übergeordnete Seite hat einen {{HTTPHeader("Permissions-Policy")}}, werden die Richtlinien der übergeordneten Seite und das `allow` Attribut kombiniert, wobei die restriktivste Teilmenge verwendet wird. Damit ein `<iframe>` eine Funktion aktiviert hat, muss der Ursprung sowohl in der Allowlist für die übergeordnete Seite als auch im `allow` Attribut enthalten sein.

Das Deaktivieren einer Funktion in einer Richtlinie ist ein Einwegtoggle. Wenn eine Funktion in einem Kinderframe von ihrem übergeordneten Frame deaktiviert wurde, kann das Kind sie nicht reaktivieren, und auch keine der Nachkommen des Kindes.

## Beispiele

### Kombination von HTTP-Header- und `<iframe>`-Richtlinien

Nehmen wir zum Beispiel an, dass wir die Nutzung der Geolokalisierung in unserem eigenen Ursprung und in eingebetteten Inhalten von unserem vertrauenswürdigen Ad-Netzwerk erlauben möchten. Wir könnten die Seitenweite Permissions Policy so einrichten:

```http
Permissions-Policy: geolocation=(self "https://trusted-ad-network.com")
```

In unseren Ad-`<iframe>`s könnten wir den Zugriff auf den `https://trusted-ad-network.com` Ursprung so einstellen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in `<iframe>` geladen würde, hätte er keinen Zugriff auf Geolokalisierung:

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
- [Control of browser features with Permissions Policy](https://developer.chrome.com/docs/privacy-security/permissions-policy): Benutzungsleitfaden, der auch mehrere Demo-Links enthält.
- [Permissions/Feature policies on chromestatus.com](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
