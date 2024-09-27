---
title: Permissions Policy
slug: Web/HTTP/Permissions_Policy
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{HTTPSidebar}}

**Permissions Policy** bietet Mechanismen, mit denen Webentwickler explizit erklären können, welche Funktionalitäten auf einer Website verwendet werden dürfen und welche nicht. Sie definieren eine Reihe von "Richtlinien", die einschränken, auf welche APIs der Code der Website zugreifen kann oder das Standardverhalten des Browsers für bestimmte Funktionen ändern. Dies ermöglicht es Ihnen, bewährte Praktiken durchzusetzen, auch wenn sich der Code weiterentwickelt, und Drittanbieterinhalte sicherer einzubinden.

Die Permissions Policy ist vergleichbar mit der [Content Security Policy](/de/docs/Glossary/CSP), kontrolliert jedoch Funktionen anstatt Sicherheitsverhalten.

Beispiele für das, was Sie mit der Permissions Policy tun können:

- Ändern Sie das Standardverhalten von `autoplay` auf mobilen Geräten und bei Drittanbietervideos.
- Beschränken Sie eine Website auf die Nutzung sensibler Geräte wie Kamera, Mikrofon oder Lautsprecher.
- Erlauben Sie `iframes`, die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) zu verwenden.
- Verhindern Sie, dass Elemente geskriptet werden, wenn sie nicht im Ansichtsfenster sichtbar sind, um die Leistung zu verbessern.

> [!NOTE]
> Permissions Policy hieß früher Feature Policy. Der Name wurde geändert, ebenso die Syntax des HTTP-Headers, was Sie beachten sollten, wenn Sie in der Vergangenheit Feature Policy verwendet haben. Prüfen Sie die Browser-Kompatibilitätstabellen. Die Syntax `<iframe allow=" ... ">` bleibt unverändert.

## Konzepte und Verwendung

Das Web bietet Funktionalitäten und APIs, die bei Missbrauch Risiken für Privatsphäre oder Sicherheit bergen können. In solchen Fällen möchten Sie möglicherweise streng einschränken, wie Funktionalitäten auf einer Website genutzt werden. In jedem Fall sollte es einen intuitiven oder nicht störenden Weg für Webentwickler geben, Fälle zu erkennen und zu bearbeiten, in denen eine Funktion deaktiviert ist.

Einige Ansätze umfassen:

- "Zugriff verweigert" wird für JavaScript-APIs zurückgegeben, die Benutzerberechtigungen erfordern.
- JavaScript-APIs, die Zugriff auf Funktionen gewähren, geben `false`-Werte zurück oder werfen einen Fehler.
- APIs werden nicht einmal bereitgestellt, als ob sie nicht existieren.
- Optionen, die das Verhalten der Funktion steuern, haben unterschiedliche Standardwerte.

> [!NOTE]
> Neu eingeführte Funktionen können eine explizite API haben, um den Zustand zu signalisieren. Bestehende Funktionen, die später in die Permissions Policy integriert werden, verwenden in der Regel bestehende Mechanismen.

Permissions Policy ermöglicht Ihnen die Kontrolle darüber, welche Ursprünge welche Funktionen nutzen dürfen, sowohl auf der obersten Ebene der Seite als auch in eingebetteten {{htmlelement("iframe")}}s. Das Ziel ist es, bewährte Praktiken für gute Nutzererlebnisse durchzusetzen und granulare Kontrolle über _sensible_ oder _leistungsfähige_ Funktionen zu bieten (was bedeutet, dass ein Benutzer zunächst eine ausdrückliche Erlaubnis zur Nutzung geben muss, bevor der zugehörige Code ausgeführt werden kann).

Permissions Policy bietet zwei Möglichkeiten, Richtlinien festzulegen:

- Der {{httpheader("Permissions-Policy")}} HTTP-Header, um die Funktionalität in empfangenen Antworten und eingebetteten Inhalten auf der Seite zu steuern (einschließlich {{htmlelement("iframe")}}s).
- Das {{htmlelement("iframe")}} [`allow`](/de/docs/Web/HTML/Element/iframe#attributes) Attribut, um die Funktionalität nur in bestimmten {{htmlelement("iframe")}}s zu kontrollieren.

Diese sind separat, aber verbunden — siehe [Vererbung von Richtlinien für eingebettete Inhalte](#vererbung_von_richtlinien_für_eingebettete_inhalte) für Details.

> [!NOTE]
> Skripte können programmgesteuert Informationen über die Berechtigungsrichtlinie über das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Objekt abfragen, das sich entweder in [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) oder [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) befindet.

Um jede Funktion zu steuern, schreiben Sie eine Richtlinie, die besteht aus:

- Einer **Direktive**, die den Namen der zu steuernden Funktion identifiziert. Siehe die [Liste der verschiedenen verfügbaren Direktiven](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives).
- Einer **Zugriffsliste**, die eine Liste von Ursprüngen enthält, in denen die Funktion gesteuert werden soll. Sie können eine Funktion für alle oder bestimmte Ursprünge aktivieren oder ihre Nutzung in allen Ursprüngen blockieren.

Siehe unten für mehrere Beispiele.

## Beziehung zur Permissions API

Permissions Policy und die [Permissions API](/de/docs/Web/API/Permissions_API) sind eng verwandt, aber unterschiedlich. Die Funktionen, deren Berechtigungen von beiden Technologien gesteuert werden, überschneiden sich.

- Permissions Policy erlaubt es einem Server, festzulegen, ob eine Funktion in einem bestimmten Dokument (oder eingebetteten `<frame>`s darin) verwendet werden kann. Diese werden als **richtliniengesteuerte** Funktionen bezeichnet — siehe die [Liste der Permissions Policy Direktiven](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives).
- Die Permissions API steuert den Zugriff auf Funktionen basierend auf vom Benutzer erteilten Berechtigungen. Diese Funktionen werden im [Permissions Registry](https://w3c.github.io/permissions-registry/) erfasst.

Der Identifikationsstring, der für jede Funktion verwendet wird, bleibt in beiden Technologien konsistent, z.B. `geolocation` für die [Geolocation API](/de/docs/Web/API/Geolocation_API). Die meisten der API-Funktionen im Permissions Registry haben auch eine entsprechende Permissions Policy Direktive. Eine Ausnahme ist die [Notifications API](/de/docs/Web/API/Notifications_API).

Im Allgemeinen, wenn eine Permissions Policy die Nutzung einer leistungsstarken Funktion blockiert, wird der Benutzer nicht einmal um Erlaubnis für deren Nutzung gebeten, und die `query()`-Methode der Permissions API [`query()`](/de/docs/Web/API/Permissions/query) wird einen `state`-Wert von `denied` zurückgeben.

Siehe auch [Permissions > Verhältnis zur Permissions Policy Spezifikation](https://w3c.github.io/permissions/#relationship-to-permissions-policy).

## Zugriffsliste

Eine Zugriffsliste ist eine Liste von Ursprüngen, die einen oder mehrere der folgenden Werte in Klammern, durch Leerzeichen getrennt, enthält:

- `*`: Die Funktion wird in diesem Dokument und allen verschachtelten Browsing-Kontexten (`<iframe>`s) unabhängig von deren Ursprüngen erlaubt.
- `()` (leere Zugriffsliste): Die Funktion ist in oberster Ebene und verschachtelten Browsing-Kontexten deaktiviert. Das Äquivalent für das `<iframe>` `allow` Attribut ist `'none'`.
- `self`: Die Funktion wird in diesem Dokument sowie in allen verschachtelten Browsing-Kontexten (`<iframe>`s) im gleichen Ursprung erlaubt. Die Funktion ist in fremden Dokumenten in verschachtelten Browsing-Kontexten nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` betrachtet werden. Das Äquivalent für das `<iframe>` `allow` Attribut ist `'self'`.
- `'src'`: Die Funktion wird in diesem `<iframe>` erlaubt, solange das Dokument, das dort geladen wird, aus dem gleichen Ursprung stammt wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}} Attribut. Dieser Wert wird nur im `<iframe>` `allow` Attribut verwendet und ist der _Standard_ Zugriffswert in `<iframe>`s.
- `"<origin>"`: Die Funktion ist für spezifische Ursprünge (zum Beispiel, `"https://a.example.com"`) erlaubt. Ursprünge sollten durch Leerzeichen getrennt werden. Beachten Sie, dass Ursprünge in `<iframe>` `allow` Attributen nicht in Anführungszeichen gesetzt werden.

Die Werte `*` und `()` dürfen nur alleine verwendet werden, während `self` und `src` in Kombination mit einem oder mehreren Ursprüngen verwendet werden können.

> [!NOTE]
> Direktiven haben eine Standardzugriffsliste, die immer einer der Werte `*`, `self` oder `none` für den `Permissions-Policy` HTTP-Header ist und das Standardverhalten steuert, wenn sie nicht explizit in einer Richtlinie aufgeführt sind. Diese sind auf den jeweiligen [Direktiv-Referenzseiten](/de/docs/Web/HTTP/Headers/Permissions-Policy#directives) angegeben. Für `<iframe>` `allow` Attribute ist das Standardverhalten immer `src`.

Wo unterstützbar, können Sie in Permissions Policy Ursprünge Platzhalterzeichen verwenden. Dies bedeutet, dass Sie nicht zwingend mehrere verschiedene Subdomains in einer Zugriffsliste explizit angeben müssen, sondern alle in einem einzigen Ursprung mit einem Platzhalterzeichen spezifizieren können.

Anstelle von

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

Können Sie folgenden Vorteil nutzen

```http
("https://example.com" "https://*.example.com")
```

> **Hinweis:** `"https://*.example.com"` stimmt nicht mit `"https://example.com"` überein.

Zugriffsliste Beispiele:

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

Die allgemeine Syntax sieht wie folgt aus:

```http
Permissions-Policy: <directive>=<allowlist>
```

Um beispielsweise den gesamten Zugriff auf Geolocation zu blockieren, können Sie dies so tun:

```http
Permissions-Policy: geolocation=()
```

Um den Zugriff auf eine Teilmenge von Ursprüngen zuzulassen, können Sie dies so tun:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem der Header mit einer kommagetrennten Liste von Richtlinien gesendet wird oder indem ein separater Header für jede Richtlinie gesendet wird.

Zum Beispiel sind die folgenden äquivalent:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self "https://example.com"), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self "https://example.com")
Permissions-Policy: camera=*
```

## Eingebettete Frame-Syntax

Damit eine {{htmlelement("iframe")}}-Funktion aktiviert wird, muss der erlaubte Ursprung auch in der Zugriffsliste für die übergeordnete Seite enthalten sein. Aufgrund dieses [Vererbungsschemas](#vererbung_von_richtlinien_für_eingebettete_inhalte) ist es eine gute Idee, die breiteste akzeptable Unterstützung für eine Funktion im HTTP-Header anzugeben und dann das notwendige Maß an Unterstützung für jedes `<iframe>` zu spezifizieren.

Die allgemeine Syntax sieht so aus:

```html
<iframe src="<origin>" allow="<directive> <allowlist>"></iframe>
```

Um beispielsweise den gesamten Zugriff auf Geolocation zu blockieren, könnten Sie dies so tun:

```html
<iframe src="https://example.com" allow="geolocation 'none'"></iframe>
```

Um eine Richtlinie auf den aktuellen Ursprung und andere anzuwenden, könnten Sie dies so tun:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Dies ist wichtig: standardmäßig, wenn ein `<iframe>` zu einem anderen Ursprung navigiert, wird die Richtlinie nicht auf den Ursprung angewendet, zu dem das `<iframe>` navigiert. Indem Sie den Ursprung, zu dem das `<iframe>` navigiert, im `allow` Attribut auflisten, wird die Permissions Policy, die auf das ursprüngliche `<iframe>` angewendet wurde, auf den Ursprung angewendet, zu dem das `<iframe>` navigiert.

Mehrere Funktionen können gleichzeitig kontrolliert werden, indem eine durch Semikolon getrennte Liste von Richtlinien-Direktiven im `allow` Attribut aufgenommen wird.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Es lohnt sich, dem `src` Wert besondere Erwähnung zu geben. Wir haben oben erwähnt, dass die Verwendung dieses Zugriffswerts bedeutet, dass die zugehörige Funktion in diesem `<iframe>` erlaubt wird, solange das darin geladene Dokument aus dem gleichen Ursprung stammt wie die URL in seinem {{HTMLElement('iframe','src','#Attributes')}} Attribut. Dieser Wert ist der _Standardzugriffswert_ für die in `allow` aufgeführten Funktionen, daher sind folgende äquivalent:

```html
<iframe src="https://example.com" allow="geolocation 'src'">
  <iframe src="https://example.com" allow="geolocation"></iframe
></iframe>
```

> [!NOTE]
> Wie Sie bemerkt haben, unterscheidet sich die Syntax für `<iframe>`-Richtlinien etwas von der Syntax für `Permissions-Policy`-Header. Erstere verwendet immer noch die gleiche Syntax wie die ältere Feature Policy-Spezifikation, die durch Permissions Policy ersetzt wurde.

### Eingezäunte Frames und Berechtigungsrichtlinien

{{htmlelement("fencedframe")}}s interagieren mit Berechtigungsrichtlinien auf die gleiche Weise wie `<iframe>`s, jedoch in deutlich eingeschränkterem Umfang. Nur spezifische Funktionen, die dafür ausgelegt sind, in `<fencedframes>` verwendet zu werden, können über auf sie gesetzte Berechtigungsrichtlinien aktiviert werden; andere richtliniengesteuerte Funktionen sind in diesem Kontext nicht verfügbar.

Für weitere Details siehe [Berechtigungsrichtlinien verfügbar für eingefasste Frames](/de/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames).

## Vererbung von Richtlinien für eingebettete Inhalte

Skripte erben die Richtlinie ihres Browsing-Kontextes, unabhängig von ihrem Ursprung. Das bedeutet, dass Top-Level-Skripte die Richtlinie des Hauptdokuments erben.

Alle `<iframe>`s erben die Richtlinie ihrer übergeordneten Seite. Wenn das `<iframe>` ein `allow`-Attribut _und_ die übergeordnete Seite ein {{HTTPHeader("Permissions-Policy")}} hat, werden die Richtlinien der übergeordneten Seite und des `allow`-Attributs kombiniert, wobei die restriktivste Teilmenge verwendet wird. Damit ein `<iframe>` eine Funktion aktiviert, muss der Ursprung sowohl in der Zugriffsliste der übergeordneten Seite als auch im `allow`-Attribut enthalten sein.

Das Deaktivieren einer Funktion in einer Richtlinie ist ein Ein-Weg-Schalter. Wenn eine Funktion für einen untergeordneten Frame von seinem übergeordneten Frame deaktiviert wurde, kann das Kind sie nicht erneut aktivieren, und auch keine der Nachkommen des Kindes.

## Beispiele

### Kombinieren von HTTP-Header- und `<iframe>`-Richtlinien

Angenommen, wir möchten die Nutzung von Geolocation in unserem eigenen Ursprung und in eingebetteten Inhalten von unserem vertrauenswürdigen Werbenetzwerk erlauben. Wir könnten die seitenweite Permissions Policy so einrichten:

```http
Permissions-Policy: geolocation=(self "https://trusted-ad-network.com")
```

In unseren Werbe-`<iframe>`s könnten wir den Zugriff auf den `https://trusted-ad-network.com` Ursprung so festlegen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Wenn ein anderer Ursprung im `<iframe>` geladen würde, hätte er keinen Zugriff auf Geolocation:

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
- [Steuern von Browserfunktionen mit Permissions Policy](https://developer.chrome.com/docs/privacy-security/permissions-policy): Leitfaden mit mehreren Demos.
- [Berechtigungen/Funktion Richtlinien auf chromestatus.com](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Privatsphäre, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
