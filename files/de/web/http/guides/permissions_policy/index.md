---
title: Berechtigungsrichtlinie
slug: Web/HTTP/Guides/Permissions_Policy
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die **Berechtigungsrichtlinie** stellt Mechanismen bereit, die es Webentwicklern ermöglichen, ausdrücklich festzulegen, welche Funktionen auf einer Website genutzt werden können und welche nicht. Sie definieren eine Reihe von "Richtlinien", die einschränken, auf welche APIs der Code der Website zugreifen kann oder das Standardverhalten des Browsers für bestimmte Funktionen ändern. Dies erlaubt es Ihnen, bewährte Praktiken durchzusetzen, selbst wenn sich der Code weiterentwickelt – und es ermöglicht eine sicherere Einbindung von Inhalten Dritter.

Die Berechtigungsrichtlinie ist ähnlich der {{Glossary("CSP", "Content Security Policy")}}, kontrolliert jedoch Funktionen anstelle von Sicherheitsverhalten.

Beispiele dafür, was Sie mit der Berechtigungsrichtlinie tun können:

- Ändern des Standardverhaltens der Autoplay-Funktion auf mobilen Geräten und bei Drittanbieter-Videos.
- Eine Website daran hindern, auf sensible Geräte wie die Kamera, das Mikrofon oder Lautsprecher zuzugreifen.
- Erlauben, dass iframes die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwenden.
- Verhindern, dass Elemente geskriptet werden, wenn sie nicht im sichtbaren Bereich sind, um die Leistung zu verbessern.

> [!NOTE]
> Die Berechtigungsrichtlinie wurde früher Feature Policy genannt. Der Name hat sich geändert, ebenso wie die HTTP-Header-Syntax. Wenn Sie Feature Policy in der Vergangenheit verwendet haben, beachten Sie dies und überprüfen Sie die Browser-Support-Tabellen. Die `<iframe allow=" ... ">`-Syntax ist unverändert geblieben.

## Konzepte und Verwendung

Das Web bietet Funktionen und APIs, die bei Missbrauch Risiken für Datenschutz oder Sicherheit bergen könnten. In solchen Fällen möchten Sie möglicherweise streng festlegen, wie Funktionen auf einer Website verwendet werden. In jedem Fall sollte es eine intuitive oder nicht störende Möglichkeit für Webentwickler geben, Fälle zu erkennen und zu behandeln, in denen eine Funktion deaktiviert ist.

Einige Ansätze sind:

- "Zugriff verweigert" wird für JavaScript-APIs zurückgegeben, die Benutzergenehmigungen erfordern.
- JavaScript-APIs, die Zugriff auf Funktionen bieten, geben `false`-Werte zurück oder werfen einen Fehler.
- APIs werden nicht einmal bereitgestellt, als ob sie nicht existieren.
- Optionen, die das Funktionsverhalten steuern, haben unterschiedliche Standardwerte.

> [!NOTE]
> Neu eingeführte Funktionen können eine explizite API haben, um den Status zu signalisieren. Bestehende Funktionen, die später in die Berechtigungsrichtlinie integriert werden, verwenden in der Regel vorhandene Mechanismen.

Die Berechtigungsrichtlinie ermöglicht es Ihnen, zu kontrollieren, welche Ursprünge welche Funktionen nutzen können, sowohl auf der obersten Seite als auch in eingebetteten {{htmlelement("iframe")}}s. Ziel ist es, bewährte Praktiken für eine gute Benutzererfahrung durchzusetzen und eine granulare Kontrolle über _sensible_ oder _leistungsstarke_ Funktionen zu bieten (d.h. Funktionen, für deren Nutzung der Benutzer eine ausdrückliche Genehmigung erteilen muss, bevor der zugehörige Code ausgeführt werden kann).

Die Berechtigungsrichtlinie bietet zwei Möglichkeiten, Richtlinien zu spezifizieren:

- Der {{httpheader("Permissions-Policy")}} HTTP-Header zur Kontrolle der Funktionsnutzung in empfangenen Antworten und eingebetteten Inhalten innerhalb der Seite (einschließlich {{htmlelement("iframe")}}s).
- Das {{htmlelement("iframe")}} [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#attributes)-Attribut, um die Nutzung von Funktionen nur in bestimmten {{htmlelement("iframe")}}s zu steuern.

Diese sind getrennt, aber miteinander verbunden – siehe [Vererbung von Richtlinien für eingebettete Inhalte](#vererbung_von_richtlinien_für_eingebettete_inhalte) für Details.

> [!NOTE]
> Skripte können programmgesteuert Informationen über die Berechtigungsrichtlinie über das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Objekt abrufen, das sich entweder in [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) oder [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) befindet.

Um jede Funktion zu steuern, schreiben Sie eine Richtlinie, die aus Folgendem besteht:

- Einem **Direktive**, die den Namen der zu kontrollierenden Funktion identifiziert. Siehe die [Liste der verschiedenen verfügbaren Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives).
- Einer **Allowlist**, einer Liste von Ursprüngen, in denen die Funktion kontrolliert werden soll. Sie können eine Funktion für alle oder bestimmte Ursprünge aktivieren oder ihre Nutzung in allen Ursprüngen blockieren.

Siehe unten für mehrere Beispiele.

## Beziehung zur Berechtigungs-API

Die Berechtigungsrichtlinie und die [Berechtigungs-API](/de/docs/Web/API/Permissions_API) sind eng miteinander verwandt, aber unterschiedlich. Die Funktionen, deren Berechtigungen durch beide Technologien gesteuert werden, überschneiden sich.

- Die Berechtigungsrichtlinie erlaubt es einem Server festzulegen, ob eine Funktion in einem bestimmten Dokument (oder eingebetteten `<frame>`s dafür) verwendet werden kann. Dies sind die sogenannten **durch Richtlinien gesteuerten** Funktionen – siehe die [Liste der Berechtigungsrichtlinien-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives).
- Die Berechtigungs-API beschränkt den Zugriff auf Funktionen basierend auf benutzererlaubten Berechtigungen. Diese Funktionen sind im [Berechtigungsregister](https://w3c.github.io/permissions-registry/) aufgezeichnet.

Der identifizierende String jeder Funktion bleibt über beide hinweg konsistent. Beispielsweise `geolocation` für die [Geolocation API](/de/docs/Web/API/Geolocation_API). Die meisten der API-Funktionen im Berechtigungsregister haben auch eine entsprechende Berechtigungsrichtlinien-Direktive. Eine Ausnahme ist die [Benachrichtigungs-API](/de/docs/Web/API/Notifications_API).

Im Allgemeinen, wenn eine Berechtigungsrichtlinie die Nutzung einer leistungsstarken Funktion blockiert, wird der Benutzer nicht einmal um Erlaubnis gefragt, sie zu nutzen, und die Methode [`query()`](/de/docs/Web/API/Permissions/query) der Berechtigungs-API wird einen [`state`](/de/docs/Web/API/PermissionStatus/state)-Wert von `denied` zurückgeben.

Siehe auch [Berechtigungen > Beziehung zur Berechtigungsrichtlinien-Spezifikation](https://w3c.github.io/permissions/#relationship-to-permissions-policy).

## Allowlists

Eine Allowlist ist eine Liste von Ursprüngen, die einen oder mehrere folgende Werte in Klammern enthalten, getrennt durch Leerzeichen:

- `*`: Die Funktion wird in diesem Dokument und allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
- `()` (leere Allowlist): Die Funktion ist in obersten und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für das `<iframe>` `allow`-Attribut ist `'none'`.
- `self`: Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) nur im gleichen Ursprung erlaubt. Die Funktion ist nicht in ursprungsübergreifenden Dokumenten in verschachtelten Browsing-Kontexten erlaubt. `self` kann als Abkürzung für `https://your-site.example.com` angesehen werden. Das Äquivalent für das `<iframe>` `allow`-Attribut ist `'self'`.
- `'src'`: Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument aus dem gleichen Ursprung kommt wie die URL im {{HTMLElement('iframe','src','#Attributes')}}-Attribut. Dieser Wert wird nur im `<iframe>` `allow`-Attribut verwendet und ist der _Standard_-Allowlist-Wert in `<iframe>`s.
- `"<origin>"`: Die Funktion ist für bestimmte Ursprünge erlaubt (zum Beispiel `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt sein. Beachten Sie, dass Ursprünge in `<iframe>` allow-Attributen nicht in Anführungszeichen stehen.

Die Werte `*` und `()` dürfen nur allein verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

> [!NOTE]
> Direktiven haben eine Standard-Allowlist, die immer einer von `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten regelt, wenn sie nicht ausdrücklich in einer Richtlinie aufgeführt sind. Diese sind auf den einzelnen [Direktive-Referenzseiten](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives) spezifiziert. Für `<iframe>` `allow`-Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie in Berechtigungsrichtlinienursprüngen Platzhalter einfügen. Das bedeutet, dass Sie nicht explizit mehrere verschiedene Subdomains in einer Allowlist angeben müssen, sondern sie alle in einem einzigen Ursprung mit einem Platzhalter spezifizieren können.

Stattdessen

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

Können Sie

```http
("https://example.com" "https://*.example.com")
```

spezifizieren.

> [!NOTE] > `"https://*.example.com"` entspricht nicht `"https://example.com"`.

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

## Syntax des Permissions-Policy-Headers

Die allgemeine Syntax sieht so aus:

```http
Permissions-Policy: <directive>=<allowlist>
```

Um zum Beispiel jeglichen Zugriff auf Geolokalisierung zu blockieren, würden Sie Folgendes tun:

```http
Permissions-Policy: geolocation=()
```

Oder um den Zugriff auf eine Untermenge von Ursprüngen zu erlauben, würden Sie Folgendes tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem Sie den Header mit einer durch Kommas getrennten Liste von Richtlinien senden oder indem Sie für jede Richtlinie einen separaten Header senden.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self "https://example.com"), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self "https://example.com")
Permissions-Policy: camera=*
```

## Eingebettete Frame-Syntax

Damit ein {{htmlelement("iframe")}} eine Funktion aktiviert hat, muss sein erlaubter Ursprung auch in der Allowlist für die übergeordnete Seite sein. Aufgrund dieses [Vererbung-Verhaltens](#vererbung_von_richtlinien_für_eingebettete_inhalte) ist es eine gute Idee, die breiteste akzeptable Unterstützung für eine Funktion im HTTP-Header festzulegen und dann den benötigten Unterstützungsausschnitt in jedem `<iframe>` anzugeben.

Die allgemeine Syntax sieht so aus:

```html
<iframe src="<origin>" allow="<directive> <allowlist>"></iframe>
```

Um zum Beispiel jeglichen Zugriff auf Geolokalisierung zu blockieren, würden Sie Folgendes tun:

```html
<iframe src="https://example.com" allow="geolocation 'none'"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie Folgendes tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Das ist wichtig: Standardmäßig wird die Richtlinie nicht auf den Ursprung angewendet, zu dem ein `<iframe>` navigiert. Indem Sie den Ursprung, zu dem das `<iframe>` navigiert, im `allow`-Attribut auflisten, wird die Berechtigungsrichtlinie, die auf das ursprüngliche `<iframe>` angewendet wurde, auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem Sie eine durch Semikolons getrennte Liste von Richtliniendirektiven innerhalb des `allow`-Attributs einfügen.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es ist erwähnenswert, den `src`-Wert besonders zu erwähnen. Wir haben oben erwähnt, dass die Verwendung dieses Allowlist-Wertes bedeuten wird, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument aus dem gleichen Ursprung wie die URL im {{HTMLElement('iframe','src','#Attributes')}}-Attribut stammt. Dieser Wert ist der \_Standard-\_Allowlist-Wert für in `allow` aufgeführte Funktionen, sodass die folgenden äquivalent sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

> [!NOTE]
> Wie Sie bemerkt haben, unterscheidet sich die Syntax für `<iframe>`-Richtlinien etwas von der für `Permissions-Policy`-Header. Erstere verwendet weiterhin die gleiche Syntax wie die ältere Feature-Policy-Spezifikation, die durch Permissions Policy ersetzt wurde.

### Eingezäunte Frames und Berechtigungsrichtlinie

{{htmlelement("fencedframe")}}s interagieren mit Berechtigungsrichtlinien auf die gleiche Weise wie `<iframe>`s, jedoch in einer viel eingeschränkteren Kapazität. Nur bestimmte Funktionen, die speziell zur Verwendung in `<fencedframe>`s konzipiert sind, können über auf ihnen gesetzte Berechtigungsrichtlinien aktiviert werden; andere durch Richtlinien gesteuerte Funktionen sind in diesem Kontext nicht verfügbar.

Siehe [Berechtigungsrichtlinien für eingezäunte Frames](/de/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

## Vererbung von Richtlinien für eingebettete Inhalte

Skripte erben die Richtlinie ihres Browsing-Kontexts unabhängig von ihrem Ursprung. Das bedeutet, dass oberste Skripte die Richtlinie aus dem Hauptdokument erben.

Alle `<iframe>`s erben die Richtlinie ihrer übergeordneten Seite. Wenn das `<iframe>` ein `allow`-Attribut _und_ die übergeordnete Seite eine {{HTTPHeader("Permissions-Policy")}} hat, werden die Richtlinien der übergeordneten Seite und des `allow`-Attributs kombiniert, wobei der restriktivste Teil verwendet wird. Damit ein `<iframe>` eine Funktion aktiviert hat, muss sich der Ursprung sowohl in der Allowlist der übergeordneten Seite als auch im `allow`-Attribut befinden.

Das Deaktivieren einer Funktion in einer Richtlinie ist ein einseitiger Schalter. Wenn eine Funktion für einen Kind-Frame von seinem Eltern-Frame deaktiviert wurde, kann das Kind es nicht wieder aktivieren, und auch keiner der Nachkommen des Kindes.

## Beispiele

### Kombinieren von HTTP-Header und `<iframe>`-Richtlinien

Angenommen, wir möchten die Nutzung der Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten unseres vertrauenswürdigen Werbenetzwerks aktivieren. Wir könnten die seitenweite Berechtigungsrichtlinie folgendermaßen einrichten:

```http
Permissions-Policy: geolocation=(self "https://trusted-ad-network.com")
```

In unserem Werbe-`<iframe>` könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` folgendermaßen setzen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in das `<iframe>` geladen würde, hätte es keinen Zugriff auf die Geolokalisierung:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} HTTP-Header
- {{HTMLElement("iframe", "allow", "#Attributes")}}-Attribut auf iframes
- [Kontrolle von Browser-Funktionen mit Berechtigungsrichtlinien](https://developer.chrome.com/docs/privacy-security/permissions-policy): Nutzungsleitfaden, der auch mehrere Demolinks enthält.
- [Berechtigungs-/Feature-Richtlinien auf chromestatus.com](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
