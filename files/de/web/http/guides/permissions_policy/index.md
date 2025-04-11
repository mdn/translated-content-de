---
title: Berechtigungsrichtlinie
slug: Web/HTTP/Guides/Permissions_Policy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die **Berechtigungsrichtlinie** bietet Mechanismen für Webentwickler, um explizit zu deklarieren, welche Funktionalitäten auf einer Website genutzt werden können und welche nicht. Sie definieren eine Reihe von "Richtlinien", die einschränken, auf welche APIs der Code der Website zugreifen kann, oder ändern das Standardverhalten des Browsers für bestimmte Funktionen. Dies ermöglicht die Durchsetzung von Best Practices, auch wenn sich der Code weiterentwickelt, und eine sicherere Einbindung von Inhalten Dritter.

Die Berechtigungsrichtlinie ist ähnlich der {{Glossary("CSP", "Content Security Policy")}}, kontrolliert aber Funktionen statt Sicherheitsverhalten.

Beispiele dafür, was Sie mit der Berechtigungsrichtlinie tun können:

- Das Standardverhalten von Autoplay auf mobilen Geräten und Drittanbieter-Videos ändern.
- Eine Website einschränken, sensible Geräte wie Kamera, Mikrofon oder Lautsprecher zu nutzen.
- Iframes die Verwendung der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) erlauben.
- Skript-Ausführung von Elementen verhindern, die nicht im sichtbaren Bereich des Viewports sind, um die Leistung zu verbessern.

> [!NOTE]
> Die Berechtigungsrichtlinie wurde früher als Feature Policy bezeichnet. Der Name hat sich geändert, ebenso wie die Syntax des HTTP-Headers. Beachten Sie dies, wenn Sie in der Vergangenheit die Feature Policy verwendet haben, und überprüfen Sie die Tabellen zur Browser-Unterstützung. Die `<iframe allow=" ... ">`-Syntax ist unverändert geblieben.

## Konzepte und Verwendung

Das Web bietet Funktionalitäten und APIs, die bei Missbrauch Datenschutz- oder Sicherheitsrisiken darstellen können. In solchen Fällen möchten Sie möglicherweise die Nutzung solcher Funktionen auf einer Website strikt einschränken. In jedem Fall sollte es eine intuitive oder nicht störende Möglichkeit für Webentwickler geben, Fälle zu erkennen und zu handhaben, in denen eine Funktion deaktiviert ist.

Einige Ansätze umfassen:

- "Permission denied" wird für JavaScript-APIs zurückgegeben, die Benutzerberechtigungen erfordern.
- JavaScript-APIs, die Zugriff auf Funktionen gewähren, geben `false` zurück oder werfen einen Fehler.
- APIs werden nicht einmal bereitgestellt, als ob sie nicht existierten.
- Optionen, die das Funktionsverhalten steuern, haben andere Standardwerte.

> [!NOTE]
> Neu eingeführte Funktionen können über eine explizite API den Status signalisieren. Bestehende Funktionen, die später in die Berechtigungsrichtlinie integriert werden, verwenden in der Regel bestehende Mechanismen.

Die Berechtigungsrichtlinie ermöglicht es Ihnen, zu kontrollieren, welche Ursprünge welche Funktionen nutzen können, sowohl auf der obersten Seite als auch in eingebetteten {{htmlelement("iframe")}}s. Das Ziel ist es, Best Practices für gute Benutzererfahrungen durchzusetzen und eine detaillierte Kontrolle über _sensible_ oder _leistungsstarke_ Funktionen zu bieten (das heißt, Funktionen, für deren Nutzung ein Benutzer eine ausdrückliche Genehmigung erteilen muss, bevor der zugehörige Code ausgeführt werden kann).

Die Berechtigungsrichtlinie bietet zwei Möglichkeiten, Richtlinien zu spezifizieren:

- Der {{httpheader("Permissions-Policy")}} HTTP-Header, der die Nutzung von Funktionen in empfangenen Antworten und in allen innerhalb der Seite eingebetteten Inhalten (einschließlich {{htmlelement("iframe")}}s) steuert.
- Das {{htmlelement("iframe")}} [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#attributes) Attribut, das die Nutzung von Funktionen nur in bestimmten {{htmlelement("iframe")}}s steuert.

Diese sind getrennt, aber verwandt — siehe [Vererbung von Richtlinien für eingebettete Inhalte](#vererbung_von_richtlinien_für_eingebettete_inhalte) für Details.

> [!NOTE]
> Skripts können programmgesteuert Informationen über die Berechtigungsrichtlinie über das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Objekt abfragen, das sich entweder in [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) oder [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) befindet.

Um jede Funktion zu kontrollieren, schreiben Sie eine Richtlinie, die besteht aus:

- Einer **Direktive**, die den Namen der zu kontrollierenden Funktion identifiziert. Siehe die [Liste der verschiedenen verfügbaren Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives).
- Einer **Zulassungsliste**, die eine Liste von Ursprüngen enthält, in denen die Funktion kontrolliert werden soll. Sie können eine Funktion für alle oder bestimmte Ursprünge aktivieren oder ihre Nutzung in allen Ursprüngen blockieren.

Siehe unten für mehrere Beispiele.

## Beziehung zur Berechtigungs-API

Die Berechtigungsrichtlinie und die [Berechtigungs-API](/de/docs/Web/API/Permissions_API) sind eng miteinander verwandt, aber unterschiedlich. Die Funktionen, deren Berechtigungen von beiden Technologien kontrolliert werden, überschneiden sich.

- Die Berechtigungsrichtlinie ermöglicht es einem Server festzulegen, ob eine Funktion in einem bestimmten Dokument (oder eingebetteten `<frame>`s darin) verwendet werden kann. Diese werden als **richtliniengesteuerte** Funktionen bezeichnet — siehe die [Liste der Berechtigungsrichtliniendirektiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives).
- Die Berechtigungs-API regelt den Zugriff auf Funktionen basierend auf von Benutzern erteilten Berechtigungen. Diese Funktionen sind im [Berechtigungsregister](https://w3c.github.io/permissions-registry/) verzeichnet.

Der Identifikationsstring, der für jede Funktion verwendet wird, ist in beiden gleich, zum Beispiel `geolocation` für die [Geolocation API](/de/docs/Web/API/Geolocation_API). Die meisten der API-Funktionen im Berechtigungsregister haben auch eine entsprechende Berechtigungsrichtliniendirektive. Eine Ausnahme ist die [Notifications API](/de/docs/Web/API/Notifications_API).

Im Allgemeinen wird der Benutzer nicht einmal um Erlaubnis zur Nutzung einer leistungsstarken Funktion gebeten, wenn eine Berechtigungsrichtlinie deren Nutzung blockiert, und die Methode [`query()`](/de/docs/Web/API/Permissions/query) der Berechtigungs-API gibt einen [`state`](/de/docs/Web/API/PermissionStatus/state) Wert von `denied` zurück.

Siehe auch [Berechtigungen > Beziehung zur Berechtigungsrichtlinienspezifikation](https://w3c.github.io/permissions/#relationship-to-permissions-policy).

## Zulassungslisten

Eine Zulassungsliste ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden in Klammern enthaltenen Werte nimmt, getrennt durch Leerzeichen:

- `*`: Die Funktion wird in diesem Dokument und allen verschachtelten Browsing-Kontexten (`<iframe>`s), unabhängig von ihrem Ursprung, erlaubt.
- `()` (leere Zulassungsliste): Die Funktion ist in obersten und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für das `<iframe>` `allow` Attribut ist `'none'`.
- `self`: Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) nur im selben Ursprung erlaubt. Die Funktion ist in Dokumenten mit Cross-Origin in verschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Abkürzung für `https://your-site.example.com` betrachtet werden. Das Äquivalent für das `<iframe>` `allow` Attribut ist `'self'`.
- `'src'`: Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument vom selben Ursprung stammt wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}} Attribut. Dieser Wert wird nur im `<iframe>` `allow` Attribut verwendet und ist der _Standard_ Zulassungswert in `<iframe>`s.
- `"<origin>"`: Die Funktion ist für bestimmte Ursprünge erlaubt (zum Beispiel, `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>` erlauben Attributen nicht in Anführungszeichen stehen.

Die Werte `*` und `()` dürfen nur alleine verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

> [!NOTE]
> Direktiven haben eine standardmäßige Zulassungsliste, die immer eine von `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten steuert, wenn sie nicht explizit in einer Richtlinie aufgeführt sind. Diese sind auf den individuellen [Richtlinienreferenzseiten](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives) angegeben. Für `<iframe>` `allow` Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Platzhalter in Berechtigungsrichtlinienursprüngen verwenden. Dies bedeutet, dass Sie anstelle mehrerer unterschiedlicher Subdomains in einer Zulassungsliste diese alle in einem einzigen Ursprung mit einem Platzhalter angeben können.

Anstelle von

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie angeben

```http
("https://example.com" "https://*.example.com")
```

> **Hinweis:** `"https://*.example.com"` entspricht nicht `"https://example.com"`.

Zulassungsliste Beispiele:

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

Um zum Beispiel allen Zugriff auf Geolokalisierung zu blockieren, würden Sie dies so machen:

```http
Permissions-Policy: geolocation=()
```

Oder um den Zugriff auf eine Teilmenge von Ursprüngen zu erlauben, würden Sie dies so machen:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem der Header mit einer durch Kommas getrennten Liste von Richtlinien gesendet wird oder indem ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel sind die folgenden äquivalent:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self "https://example.com"), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self "https://example.com")
Permissions-Policy: camera=*
```

## Syntax von eingebetteten Frames

Damit ein {{htmlelement("iframe")}} eine Funktion aktiviert hat, muss sein erlaubter Ursprung auch in der Zulassungsliste für die übergeordnete Seite sein. Aufgrund dieses [Vererbungsverhaltens](#vererbung_von_richtlinien_für_eingebettete_inhalte) ist es sinnvoll, die breiteste akzeptable Unterstützung für eine Funktion im HTTP-Header anzugeben und dann den benötigten Teil der Unterstützung in jedem `<iframe>` zu spezifizieren.

Die allgemeine Syntax sieht so aus:

```html
<iframe src="<origin>" allow="<directive> <allowlist>"></iframe>
```

Um zum Beispiel allen Zugriff auf Geolokalisierung zu blockieren, würden Sie dies so machen:

```html
<iframe src="https://example.com" allow="geolocation 'none'"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies so machen:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig wird die Richtlinie bei einer Navigation eines `<iframe>` zu einem anderen Ursprung nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Durch das Auflisten des Ursprungs, zu dem das `<iframe>` navigiert, im `allow` Attribut, wird die auf das ursprüngliche `<iframe>` angewendete Berechtigungsrichtlinie auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem im `allow` Attribut eine durch Semikolons getrennte Liste von Richtliniendirektiven eingefügt wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es lohnt sich, dem `src` Wert eine besondere Erwähnung zu geben. Wir haben oben erwähnt, dass die Verwendung dieses Zulassungslistenwerts bedeuten wird, dass die zugehörige Funktion in diesem `<iframe>` erlaubt ist, solange das darin geladene Dokument vom gleichen Ursprung stammt wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}} Attribut. Dieser Wert ist der _Standard_ `Zulassungslistenwert` für Funktionen, die in `allow` aufgelistet sind, daher sind die folgenden äquivalent:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

> [!NOTE]
> Wie Sie bemerkt haben, unterscheidet sich die Syntax für `<iframe>`-Richtlinien etwas von der Syntax für `Permissions-Policy`-Header. Ersteres verwendet noch die gleiche Syntax wie die ältere Feature Policy-Spezifikation, die von der Berechtigungsrichtlinie abgelöst wurde.

### Eingezäunte Frames und Berechtigungsrichtlinie

{{htmlelement("fencedframe")}}s interagieren mit Berechtigungsrichtlinien auf dieselbe Weise wie `<iframe>`s, jedoch in viel eingeschränkterem Umfang. Nur bestimmte Funktionen, die zur Verwendung in `<fencedframe>`s entworfen wurden, können über Berechtigungsrichtlinien aktiviert werden, die auf ihnen festgelegt sind; andere richtliniengesteuerte Funktionen sind in diesem Kontext nicht verfügbar.

Siehe [Berechtigungsrichtlinien für eingezäunte Frames](/de/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

## Vererbung von Richtlinien für eingebettete Inhalte

Skripte erben die Richtlinie ihres Browsing-Kontextes, unabhängig von ihrem Ursprung. Das bedeutet, dass Top-Level-Skripte die Richtlinie aus dem Hauptdokument erben.

Alle `<iframe>`s erben die Richtlinie ihrer übergeordneten Seite. Wenn das `<iframe>` ein `allow` Attribut _und_ die übergeordnete Seite einen {{HTTPHeader("Permissions-Policy")}} hat, werden die Richtlinien der übergeordneten Seite und das `allow` Attribut kombiniert, indem der restriktivste Teilmenge verwendet wird. Damit ein `<iframe>` eine Funktion aktiviert hat, muss der Ursprung sowohl in der Zulassungsliste der übergeordneten Seite als auch im `allow` Attribut sein.

Das Deaktivieren einer Funktion in einer Richtlinie ist ein Einweg-Schalter. Wenn eine Funktion für ein Kind-Frame von seinem übergeordneten Frame deaktiviert wurde, kann das Kind es nicht erneut aktivieren, und auch keine der Nachkommen des Kindes.

## Beispiele

### Kombination von HTTP-Header- und `<iframe>`-Richtlinien

Angenommen, wir wollten die Nutzung von Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten, die von unserem vertrauenswürdigen Werbenetzwerk kommen, aktivieren. Wir könnten die seitenweite Berechtigungsrichtlinie so einrichten:

```http
Permissions-Policy: geolocation=(self "https://trusted-ad-network.com")
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` so einstellen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung letztendlich in das `<iframe>` geladen würde, hätte er keinen Zugriff auf die Geolokalisierung:

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
- [Kontrollieren von Browser-Funktionen mit Berechtigungsrichtlinie](https://developer.chrome.com/docs/privacy-security/permissions-policy): Anleitung, die auch mehrere Demos enthält.
- [Berechtigungen/Funktionsrichtlinien auf chromestatus.com](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
