---
title: Berechtigungspolitik
slug: Web/HTTP/Permissions_Policy
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{HTTPSidebar}}

**Berechtigungspolitik** bietet Webentwicklern Mechanismen, um explizit festzulegen, welche Funktionalitäten auf einer Website genutzt werden können und welche nicht. Sie definieren eine Reihe von "Richtlinien", die einschränken, auf welche APIs der Code der Website zugreifen kann oder das Standardverhalten des Browsers für bestimmte Funktionen ändern. Dies ermöglicht Ihnen die Durchsetzung bewährter Praktiken, auch wenn der Code weiterentwickelt wird — ebenso wie das sichere Einbinden von Inhalten Dritter.

Die Berechtigungspolitik ist ähnlich wie die {{Glossary("CSP", "Content Security Polic")}}y, kontrolliert jedoch Funktionen anstatt Sicherheitsverhalten.

Beispiele, was Sie mit Berechtigungspolitik tun können:

- Das Standardverhalten von Autoplay auf mobilen und Drittanbieter-Videos ändern.
- Eine Seite daran hindern, auf sensible Geräte wie Kamera, Mikrofon oder Lautsprecher zuzugreifen.
- Iframes erlauben, die [Vollbild-API](/de/docs/Web/API/Fullscreen_API) zu verwenden.
- Verhindern, dass Elemente geskriptet werden, wenn sie nicht im Sichtfeld sichtbar sind, um die Leistung zu verbessern.

> [!NOTE]
> Die Berechtigungspolitik wurde früher Feature-Policy genannt. Der Name hat sich geändert, ebenso wie die Syntax des HTTP-Headers, daher beachten Sie dies, wenn Sie früher Feature-Policy verwendet haben, und überprüfen Sie die Browser-Support-Tabellen. Die Syntax `<iframe allow=" ... ">` ist gleich geblieben.

## Konzepte und Verwendung

Das Web bietet Funktionalitäten und APIs, die bei Missbrauch zu Datenschutz- oder Sicherheitsrisiken führen können. In solchen Fällen möchten Sie möglicherweise strikt einschränken, wie Funktionen auf einer Website verwendet werden. In jedem Fall sollte es eine intuitive oder nicht unterbrechende Möglichkeit für Webentwickler geben, Fälle zu erkennen und zu behandeln, in denen eine Funktion deaktiviert ist.

Einige Ansätze beinhalten:

- "Zugriff verweigert" wird für JavaScript-APIs zurückgegeben, die Benutzerberechtigung erfordern.
- JavaScript-APIs, die Zugriff auf Funktionen bieten, geben `false`-Werte zurück oder werfen einen Fehler.
- APIs werden nicht einmal exponiert, als ob sie nicht existieren.
- Optionen, die das Funktionsverhalten steuern, haben unterschiedliche Standardwerte.

> [!NOTE]
> Neu eingeführte Funktionen können eine explizite API haben, um den Status zu signalisieren. Bestehende Funktionen, die später mit der Berechtigungspolitik integriert werden, verwenden typischerweise vorhandene Mechanismen.

Die Berechtigungspolitik ermöglicht Ihnen die Kontrolle darüber, welche Ursprünge welche Funktionen nutzen können, sowohl auf der obersten Seite als auch in eingebetteten {{htmlelement("iframe")}}s. Das Ziel ist es, bewährte Praktiken für gute Benutzererfahrungen durchzusetzen und eine granularere Kontrolle über _sensible_ oder _leistungsstarke_ Funktionen zu bieten (d. h. Funktionen, für deren Nutzung ein Benutzer eine ausdrückliche Erlaubnis geben muss, bevor der zugehörige Code ausgeführt werden kann).

Die Berechtigungspolitik bietet zwei Möglichkeiten zur Festlegung von Richtlinien:

- Der {{httpheader("Permissions-Policy")}} HTTP-Header, um die Nutzung von Funktionen in empfangenen Antworten und jeglichen eingebetteten Inhalten der Seite zu steuern (inklusive {{htmlelement("iframe")}}s).
- Das Attribut {{htmlelement("iframe")}} [`allow`](/de/docs/Web/HTML/Element/iframe#attributes), um die Nutzung von Funktionen nur in bestimmten {{htmlelement("iframe")}}s zu steuern.

Diese sind getrennt, aber verwandt — siehe [Vererbung von Richtlinien für eingebettete Inhalte](#vererbung_von_richtlinien_für_eingebettete_inhalte) für Details.

> [!NOTE]
> Skripte können Informationen zur Berechtigungspolitik über das {{DOMxRef("FeaturePolicy")}}-Objekt programmatisch abfragen, das sich entweder bei {{DOMxRef("Document.featurePolicy")}} oder {{DOMxRef("HTMLIFrameElement.featurePolicy")}} befindet.

Zum Kontrollieren jeder Funktion schreiben Sie eine Richtlinie, die besteht aus:

- Einer **Direktive**, die den Namen der zu kontrollierenden Funktion identifiziert. Siehe die [Liste der verschiedenen verfügbaren Direktiven](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives).
- Einer **Erlaubisliste**, die eine Liste von Ursprüngen enthält, in denen die Funktion gesteuert werden soll. Sie können eine Funktion für alle oder spezifische Ursprünge aktivieren oder ihre Nutzung in allen Ursprüngen blockieren.

Im Folgenden finden Sie mehrere Beispiele.

## Beziehung zur Berechtigungs-API

Die Berechtigungspolitik und die {{domxref("Permissions API", "Permissions API", "", "nocode")}} stehen in enger Beziehung, sind aber unterschiedlich. Die Funktionen, deren Berechtigungen durch beide Technologien gesteuert werden, überschneiden sich.

- Die Berechtigungspolitik ermöglicht es einem Server festzulegen, ob eine Funktion in einem bestimmten Dokument (oder eingebetteten `<frame>`s darin) verwendet werden darf. Diese werden als **richtliniengesteuerte** Funktionen bezeichnet — siehe die [Liste der Berechtigungspolitik-Direktiven](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives).
- Die Berechtigungs-API begrenzt den Zugriff auf Funktionen basierend auf von Benutzern gewährten Berechtigungen. Diese Funktionen sind im [Berechtigungsregister](https://w3c.github.io/permissions-registry/) verzeichnet.

Der Identifizierungsstring, der für jede Funktion verwendet wird, bleibt konsistent, z. B. `geolocation` für die {{domxref("Geolocation API", "Geolocation API", "", "nocode")}}. Die meisten API-Funktionen im Berechtigungsregister haben auch eine entsprechende Berechtigungspolitik-Direktive. Eine Ausnahme ist die {{domxref("Notifications API", "Notifications API", "", "nocode")}}.

In der Regel, wenn eine Berechtigungspolitik die Nutzung einer leistungsstarken Funktion blockiert, wird der Benutzer nicht einmal um Erlaubnis gebeten, sie zu verwenden, und die {{domxref("Permissions.query", "query()")}}-Methode der Berechtigungs-API gibt einen {{domxref("PermissionStatus.state", "state")}}-Wert von `denied` zurück.

Siehe auch [Permissions > Beziehung zur Berechtigungspolitik-Spezifikation](https://w3c.github.io/permissions/#relationship-to-permissions-policy).

## Erlaubislisten

Eine Erlaubisliste ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern enthält, getrennt durch Leerzeichen:

- `*`: Die Funktion wird in diesem Dokument und allen geschachtelten Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
- `()` (leere Erlaubisliste): Die Funktion ist in obersten und geschachtelten Kontexten deaktiviert. Das Äquivalent für das `<iframe>`-`allow`-Attribut ist `'none'`.
- `self`: Die Funktion wird in diesem Dokument und in allen geschachtelten Kontexten (`<iframe>`s) im gleichen Ursprung erlaubt. Die Funktion ist in Dokumenten mit fremden Ursprüngen in geschachtelten Kontexten nicht erlaubt. `self` kann als Kurzform für `https://deine-seite.example.com` betrachtet werden. Das Äquivalent für das `<iframe>`-`allow`-Attribut ist `'self'`.
- `'src'`: Die Funktion wird in diesem `<iframe>` erlaubt, solange das darin geladene Dokument aus dem gleichen Ursprung stammt wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut. Dieser Wert wird nur im `<iframe>`-`allow`-Attribut verwendet und ist der _Standard_ Erlaubislistenwert in `<iframe>`s.
- `"<origin>"`: Die Funktion ist für spezifische Ursprünge erlaubt (zum Beispiel, `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>`-`allow`-Attributen nicht in Anführungszeichen gesetzt werden.

Die Werte `*` und `()` dürfen nur allein verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

> [!NOTE]
> Direktiven haben eine Standard-Erlaubisliste, die immer eine von `*`, `self` oder `none` für den `Permissions-Policy`-HTTP-Header ist und das Standardverhalten regelt, wenn sie nicht explizit in einer Richtlinie aufgeführt sind. Diese sind auf den individuellen [Direktivreferenzseiten](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives) angegeben. Für `<iframe>`-`allow`-Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie in Ursprüngen der Berechtigungspolitik Wildcards einschließen. Das bedeutet, dass Sie anstelle mehrerer verschiedener Subdomains in einer Erlaubisliste sie alle in einem einzigen Ursprung mit einer Wildcard angeben können.

Anstelle von

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

Können Sie angeben

```http
("https://example.com" "https://*.example.com")
```

> **Hinweis:** `"https://*.example.com"` stimmt nicht mit `"https://example.com"` überein.

Beispiele für Erlaubislisten:

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

Die allgemeine Syntax sieht so aus:

```http
Permissions-Policy: <directive>=<allowlist>
```

Um beispielsweise den gesamten Zugriff auf Geolocation zu blockieren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=()
```

Oder um den Zugriff auf eine Untermenge von Ursprüngen zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig gesteuert werden, indem der Header mit einer durch Kommas getrennten Liste von Richtlinien gesendet oder für jede Richtlinie ein separater Header gesendet wird.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self "https://example.com"), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self "https://example.com")
Permissions-Policy: camera=*
```

## Eingebettete Frame-Syntax

Für ein {{htmlelement("iframe")}}, das eine Funktion aktiviert haben soll, muss sein erlaubter Ursprung auch in der Erlaubisliste für die übergeordnete Seite sein. Aufgrund dieses [Vererbung-Verhaltens](#vererbung_von_richtlinien_für_eingebettete_inhalte) ist es ratsam, die breiteste akzeptable Unterstützung für eine Funktion im HTTP-Header anzugeben und dann den Unterbereich der Unterstützung, den Sie in jedem `<iframe>` benötigen, zu spezifizieren.

Die allgemeine Syntax sieht so aus:

```html
<iframe src="<origin>" allow="<directive> <allowlist>"></iframe>
```

Um beispielsweise den gesamten Zugriff auf Geolocation zu blockieren, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation 'none'"></iframe>
```

Um eine Richtlinie für den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Das ist wichtig: Standardmäßig, wenn ein `<iframe>` zu einem anderen Ursprung navigiert, wird die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Indem der Ursprung, zu dem das `<iframe>` navigiert, im `allow`-Attribut aufgeführt wird, wird die auf das ursprüngliche `<iframe>` angewendete Richtlinie auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig gesteuert werden, indem eine durch Semikolon getrennte Liste von Richtlinien-Direktiven im `allow`-Attribut enthalten ist.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es lohnt sich, dem `src`-Wert besondere Aufmerksamkeit zu schenken. Wie zuvor erwähnt, bedeutet die Verwendung dieses Erlaubislistenwerts, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument aus dem gleichen Ursprung stammt wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}}-Attribut. Dieser Wert ist der _Standard_-`allowlist`-Wert für Funktionen, die in `allow` aufgeführt sind, sodass die folgenden gleichwertig sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

> [!NOTE]
> Wie Sie bemerkt haben, unterscheidet sich die Syntax für `<iframe>`-Richtlinien ein wenig von der Syntax für `Permissions-Policy`-Header. Erstere verwendet noch die gleiche Syntax wie die ältere Feature-Policy-Spezifikation, die durch die Berechtigungspolitik ersetzt wurde.

### Fenced Frames und Berechtigungspolitik

{{htmlelement("fencedframe")}}s interagieren mit Berechtigungspolitiken auf die gleiche Weise wie `<iframe>`s, jedoch in einem wesentlich eingeschränkteren Umfang. Nur spezifische Funktionen, die zur Verwendung in `<fencedframes>`s entwickelt wurden, können über Berechtigungspolitiken aktiviert werden, die auf ihnen festgelegt sind; andere richtliniengesteuerte Funktionen sind in diesem Kontext nicht verfügbar.

Siehe [Berechtigungspolitiken verfügbar für fenced frames](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) für mehr Details.

## Vererbung von Richtlinien für eingebettete Inhalte

Skripte erben die Richtlinie ihres Browsing-Kontexts, unabhängig von ihrem Ursprung. Das bedeutet, dass Skripte der obersten Ebene die Richtlinie vom Hauptdokument erben.

Alle `<iframe>`s erben die Richtlinie ihrer übergeordneten Seite. Wenn das `<iframe>` ein `allow`-Attribut _und_ die übergeordnete Seite einen {{HTTPHeader("Permissions-Policy")}} hat, werden die Richtlinien der übergeordneten Seite und des `allow`-Attributs kombiniert, wobei der restriktivste Teil verwendetet wird. Damit ein `<iframe>` eine Funktion aktiviert hat, muss der Ursprung sowohl in der Erlaubisliste der übergeordneten Seite als auch im `allow`-Attribut sein.

Das Deaktivieren einer Funktion in einer Richtlinie ist ein einseitiger Schalter. Wenn eine Funktion für einen Kind-Frame von seinem Eltern-Frame deaktiviert wurde, kann das Kind sie nicht wieder aktivieren, und auch keine der Nachkommen des Kindes.

## Beispiele

### Kombinierte HTTP-Header- und `<iframe>`-Richtlinien

Zum Beispiel, gehen wir davon aus, dass wir die Nutzung der Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten unseres vertrauenswürdigen Ad-Netzwerks aktivieren möchten. Wir könnten die Seitenweite Berechtigungspolitik so einrichten:

```http
Permissions-Policy: geolocation=(self "https://trusted-ad-network.com")
```

In unseren Ad-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` so einstellen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung in das `<iframe>` geladen würde, hätte es keinen Zugriff auf die Geolokalisierung:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Unterstützung

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} HTTP-Header
- {{HTMLElement("iframe", "allow", "#Attributes")}} Attribut bei iframes
- [Steuern von Browser-Funktionen mit Berechtigungspolitik](https://developer.chrome.com/docs/privacy-security/permissions-policy): verwenden Guide, der auch mehrere Demo-Links enthält.
- [Permissions-/Feature-Richtlinien auf chromestatus.com](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
