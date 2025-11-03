---
title: Berechtigungsrichtlinien
slug: Web/HTTP/Guides/Permissions_Policy
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{SeeCompatTable}}

**Berechtigungsrichtlinien** bieten Mechanismen, mit denen Webentwickler explizit festlegen können, welche Funktionalitäten auf einer Website genutzt werden dürfen und welche nicht. Sie definieren eine Reihe von "Richtlinien", die einschränken, auf welche APIs der Code der Seite zugreifen kann oder das Standardverhalten des Browsers für bestimmte Funktionen ändern. Dies ermöglicht die Durchsetzung von Best Practices, auch wenn sich der Code weiterentwickelt – und ermöglicht eine sicherere Integration von Inhalten Dritter.

Die Berechtigungsrichtlinie ist der {{Glossary("CSP", "Content Security Policy")}} ähnlich, kontrolliert jedoch Funktionen statt des Sicherheitsverhaltens.

Beispiele für das, was Sie mit der Berechtigungsrichtlinie tun können:

- Ändern des Standardverhaltens von Autoplay auf mobilen und Drittanbieter-Videos.
- Einschränken einer Website, um sensible Geräte wie Kamera, Mikrofon oder Lautsprecher zu nutzen.
- Erlauben von `iframes` die Nutzung der [Fullscreen API](/de/docs/Web/API/Fullscreen_API).
- Verhindern, dass Elemente gescriptet werden, wenn sie nicht im sichtbaren Bereich sind, um die Leistung zu verbessern.

> [!NOTE]
> Die Berechtigungsrichtlinie wurde früher als Feature Policy bezeichnet. Der Name hat sich geändert, ebenso wie die Syntax des HTTP-Headers. Beachten Sie dies, falls Sie in der Vergangenheit die Feature Policy verwendet haben, und überprüfen Sie die Browser-Kompatibilitätstabellen. Die `<iframe allow=" ... ">` Syntax ist gleich geblieben.

## Konzepte und Verwendung

Das Web bietet Funktionalität und APIs, die bei Missbrauch Datenschutz- oder Sicherheitsrisiken darstellen können. In solchen Fällen möchten Sie möglicherweise strikt einschränken, wie Funktionalität auf einer Website genutzt wird. In jedem Fall sollte es für Webentwickler eine intuitive oder nicht unterbrechende Möglichkeit geben, Fälle zu erkennen und zu handhaben, in denen eine Funktion deaktiviert ist.

Einige Ansätze umfassen:

- "Zugriff verweigert" wird für JavaScript-APIs zurückgegeben, die Benutzerberechtigungen erfordern.
- JavaScript-APIs, die Zugriff auf Funktionen bieten, geben `false` Werte zurück oder werfen einen Fehler.
- APIs werden nicht einmal bereitgestellt, als ob sie nicht existieren.
- Optionen, die das Funktionsverhalten steuern, haben unterschiedliche Standardwerte.

> [!NOTE]
> Neu eingeführte Funktionen können eine explizite API haben, um den Status anzuzeigen. Bestehende Funktionen, die später in die Berechtigungsrichtlinie integriert werden, verwenden in der Regel vorhandene Mechanismen.

Die Berechtigungsrichtlinie ermöglicht es Ihnen zu steuern, welche Ursprünge welche Funktionen nutzen können, sowohl auf der Hauptseite als auch in eingebetteten {{htmlelement("iframe")}}s. Ziel ist es, Best Practices für gute Benutzererfahrungen zu erzwingen und granulare Kontrolle über _sensible_ oder _leistungsstarke_ Funktionen zu bieten (das heißt, Funktionen, für die ein Benutzer ausdrücklich die Erlaubnis zur Nutzung geben muss, bevor der zugehörige Code ausgeführt werden kann).

Die Berechtigungsrichtlinie bietet zwei Möglichkeiten, Richtlinien festzulegen:

- Den {{httpheader("Permissions-Policy")}} HTTP-Header, um die Funktionsnutzung in empfangenen Antworten und eingebetteten Inhalten innerhalb der Seite zu steuern (einschließlich {{htmlelement("iframe")}}s).
- Das {{htmlelement("iframe")}} [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#attributes) Attribut, um die Funktionsnutzung nur in bestimmten {{htmlelement("iframe")}}s zu steuern.

Diese sind separat, aber miteinander verbunden – siehe [Vererbung von Richtlinien für eingebettete Inhalte](#vererbung_von_richtlinien_für_eingebettete_inhalte) für Details.

> [!NOTE]
> Skripte können programmgesteuert Informationen über die Berechtigungsrichtlinie über das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Objekt abfragen, das sich entweder bei [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) oder [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) befindet.

Zur Kontrolle jeder Funktion schreiben Sie eine Richtlinie, die besteht aus:

- Einer **Direktive**, die den Namen der zu kontrollierenden Funktion identifiziert. Siehe die [Liste der verschiedenen verfügbaren Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives).
- Einer **Erlaubnisliste**, die eine Liste von Ursprüngen ist, in denen die Funktion kontrolliert werden soll. Sie können eine Funktion für alle oder spezifische Ursprünge aktivieren oder ihre Nutzung in allen Ursprüngen blockieren.

Siehe unten für mehrere Beispiele.

## Beziehung zur Permissions API

Die Berechtigungsrichtlinie und die [Permissions API](/de/docs/Web/API/Permissions_API) sind eng verbunden, aber unterschiedlich. Die Funktionen, deren Berechtigungen durch beide Technologien gesteuert werden, überschneiden sich.

- Die Berechtigungsrichtlinie erlaubt einem Server festzulegen, ob eine Funktion in einem bestimmten Dokument (oder einem eingebetteten `<frame>` darin) verwendet werden kann. Diese werden als **richtliniengesteuerte** Funktionen bezeichnet – siehe die [Liste der Berechtigungsrichtliniendirektiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives).
- Die Permissions API regelt den Zugriff auf Funktionen basierend auf Benutzerberechtigungen. Diese Funktionen sind im [Permissions Registry](https://w3c.github.io/permissions-registry/) aufgeführt.

Der Identifikationsstring, der für jede Funktion verwendet wird, wird in beiden consistent gehalten, zum Beispiel wird `geolocation` für die [Geolocation API](/de/docs/Web/API/Geolocation_API) verwendet. Die meisten API-Funktionen im Permissions Registry haben auch eine entsprechende Berechtigungsrichtliniendirektive. Eine Ausnahme bildet die [Notifications API](/de/docs/Web/API/Notifications_API).

Generell, wenn eine Berechtigungsrichtlinie die Nutzung einer leistungsstarken Funktion blockiert, wird der Benutzer nicht einmal gefragt, ob er sie nutzen möchte, und die Methode [`query()`](/de/docs/Web/API/Permissions/query) der Permissions API gibt einen [`state`](/de/docs/Web/API/PermissionStatus/state) Wert von `denied` zurück.

Siehe auch [Permissions > Relationship to the Permissions Policy specification](https://w3c.github.io/permissions/#relationship-to-permissions-policy).

## Erlaubnislisten

Eine Erlaubnisliste ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden in Klammern enthaltenen und durch Leerzeichen getrennten Werte enthält:

- `*`: Die Funktion wird in diesem Dokument und allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von ihrem Ursprung erlaubt.
- `()` (leere Erlaubnisliste): Die Funktion ist in obersten und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für das `<iframe>` `allow` Attribut ist `'none'`.
- `self`: Die Funktion wird in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`s) nur im selben Ursprung erlaubt. Die Funktion ist nicht in ursprungsübergreifenden Dokumenten in verschachtelten Browsing-Kontexten erlaubt. `self` kann als Abkürzung für `https://ihr-seitenname.example.com` betrachtet werden. Das Äquivalent für das `<iframe>` `allow` Attribut ist `'self'`.
- `'src'`: Die Funktion wird in diesem `<iframe>` erlaubt, solange das dort geladene Dokument aus demselben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}} Attribut stammt. Dieser Wert wird nur im `<iframe>` `allow` Attribut verwendet und ist der _Standard_ Erlaubnislistenwert in `<iframe>`s.
- `"<origin>"`: Die Funktion ist für spezifische Ursprünge erlaubt (zum Beispiel, `"https://a.example.com"`). Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>` Erlaubnis-Attributen nicht in Anführungszeichen gesetzt sind.

Die Werte `*` und `()` können nur alleine verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

> [!NOTE]
> Direktiven haben eine Standard-Erlaubnisliste, die immer `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist, und das Standardverhalten regelt, wenn sie nicht explizit in einer Richtlinie aufgeführt sind. Diese sind in den einzelnen [Direktivreferenzseiten](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives) angegeben. Für `<iframe>` `allow` Attribute ist das Standardverhalten immer `src`.

Wo unterstützt, können Sie Platzhalter in Berechtigungsrichtlinienursprüngen einfügen. Das bedeutet, dass Sie, anstatt explizit mehrere verschiedene Subdomains in einer Erlaubnisliste anzugeben, alle in einem einzigen Ursprung mit einem Platzhalter angeben können.

Stattdessen von

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

Können Sie angeben

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` passt nicht zu `"https://example.com"`.

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

## Permissions-Policy Header-Syntax

Die allgemeine Syntax sieht so aus:

```http
Permissions-Policy: <directive>=<allowlist>
```

Zum Beispiel, um den Zugriff auf Geolokalisierung vollständig zu blockieren, würden Sie dies tun:

```http
Permissions-Policy: geolocation=()
```

Oder um den Zugang auf eine Untergruppe von Ursprüngen zu erlauben, würden Sie dies tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem der Header mit einer kommagetrennten Liste von Richtlinien gesendet wird oder indem ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel sind die folgenden gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self "https://example.com"), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self "https://example.com")
Permissions-Policy: camera=*
```

## Syntax für eingebettete Frames

Damit ein {{htmlelement("iframe")}} eine Funktion aktiviert hat, muss sein erlaubter Ursprung auch in der Erlaubnisliste für die übergeordnete Seite sein. Wegen dieses [Vererbungverhaltens](#vererbung_von_richtlinien_für_eingebettete_inhalte) ist es eine gute Idee, in den HTTP-Header die breiteste akzeptable Unterstützung für eine Funktion anzugeben, und dann die notwendige Teilmenge der Unterstützung in jedem `<iframe>` spezifisch festzulegen.

Die allgemeine Syntax sieht so aus:

```html
<iframe src="<origin>" allow="<directive> <allowlist>"></iframe>
```

Zum Beispiel, um den Zugriff auf Geolokalisierung vollständig zu blockieren, würden Sie dies tun:

```html
<iframe src="https://example.com" allow="geolocation 'none'"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, würden Sie dies tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: Standardmäßig, wenn ein `<iframe>` zu einem anderen Ursprung navigiert, wird die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Wenn Sie den Ursprung, zu dem das `<iframe>` navigiert, im `allow` Attribut auflisten, wird die Berechtigungsrichtlinie, die auf das ursprüngliche `<iframe>` angewendet wurde, auch auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem eine durch Semikolons getrennte Liste von Richtlinien im `allow` Attribut eingefügt wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Der `src` Wert verdient besondere Erwähnung. Wie oben erwähnt, bedeutet die Verwendung dieses Erlaubnislistenwerts, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das dort geladene Dokument aus demselben Ursprung wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}} Attribut stammt. Dieser Wert ist der _Standard_ `allowlist` Wert für Funktionen, die im `allow` aufgelistet sind, sodass die folgenden gleichwertig sind:

```html
<iframe src="https://example.com" allow="geolocation 'src'"></iframe>
<iframe src="https://example.com" allow="geolocation"></iframe>
```

> [!NOTE]
> Wie Sie bemerkt haben, ist die Syntax für `<iframe>` Richtlinien etwas anders als die Syntax für `Permissions-Policy` Headers. Die erstere verwendet noch die gleiche Syntax wie die ältere Feature Policy Spezifikation, die von der Berechtigungsrichtlinie abgelöst wurde.

### Eingezäunte Frames und Berechtigungsrichtlinie

{{htmlelement("fencedframe")}}s interagieren mit Berechtigungsrichtlinien auf die gleiche Weise wie `<iframe>`s, jedoch auf wesentlich eingeschränktere Weise. Nur spezifische Funktionen, die zur Verwendung in `<fencedframe>`s entwickelt wurden, können über die Berechtigungsrichtlinien aktiviert werden, die auf sie gesetzt sind; andere richtliniengesteuerte Funktionen stehen in diesem Kontext nicht zur Verfügung.

Siehe [Berechtigungsrichtlinien, die für eingefasste Frames verfügbar sind](/de/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames) für weitere Details.

## Vererbung von Richtlinien für eingebettete Inhalte

Skripte erben die Richtlinie ihres Browsing-Kontextes, unabhängig von ihrem Ursprung. Das bedeutet, dass Top-Level-Skripte die Richtlinie des Hauptdokuments erben.

Alle `<iframe>`s erben die Richtlinie der übergeordneten Seite. Wenn das `<iframe>` ein `allow` Attribut _und_ die übergeordnete Seite einen {{HTTPHeader("Permissions-Policy")}} hat, werden die Richtlinien der übergeordneten Seite und des `allow` Attributs kombiniert, wobei das restriktivste Teilmengenverhalten verwendet wird. Damit ein `<iframe>` eine Funktion aktiviert hat, muss der Ursprung sowohl in der Erlaubnisliste der übergeordneten Seite als auch im `allow` Attribut sein.

Das Deaktivieren einer Funktion in einer Richtlinie ist ein einseitiges Umschalten. Wenn eine Funktion für ein Unterrahmen von ihrem übergeordneten Rahmen deaktiviert wurde, kann das Unterrahmen sie nicht wieder aktivieren, und keiner der Nachkommen des Unterrahmens kann dies.

## Beispiele

### Kombination von HTTP-Header und `<iframe>` Richtlinien

Zum Beispiel, nehmen wir an, wir wollten die Nutzung der Geolokalisierung auf unserem eigenen Ursprung und in eingebetteten Inhalten von unserem vertrauenswürdigen Anzeigenetzwerk zulassen. Wir könnten die seitenweite Berechtigungsrichtlinie so festlegen:

```http
Permissions-Policy: geolocation=(self "https://trusted-ad-network.com")
```

In unseren Anzeigen-`<iframe>`s könnten wir den Zugriff auf den Ursprung `https://trusted-ad-network.com` so einstellen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung letztendlich in das `<iframe>` geladen wird, hätte er keinen Zugriff auf die Geolokalisierung:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} HTTP-Header
- {{HTMLElement("iframe", "allow", "#Attributes")}} Attribut in iframes
- [Steuerung von Browserfunktionen mit der Berechtigungsrichtlinie](https://developer.chrome.com/docs/privacy-security/permissions-policy): Nutzungsleitfaden, der auch mehrere Demolinks enthält.
- [Berechtigungen/Funktionsrichtlinien auf chromestatus.com](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Privatsphäre, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
