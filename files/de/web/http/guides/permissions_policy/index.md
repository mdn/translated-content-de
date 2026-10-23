---
title: Permissions Policy
slug: Web/HTTP/Guides/Permissions_Policy
l10n:
  sourceCommit: 87e588faeb456dec535666429793188b2883637d
---

{{SeeCompatTable}}

**Permissions Policy** bietet Webentwicklern Mechanismen, mit denen sie ausdrücklich festlegen können, welche Funktionen auf einer Website verwendet werden dürfen und welche nicht. Sie definieren eine Reihe von „Policies“, die einschränken, auf welche APIs der Code der Website zugreifen kann, oder das Standardverhalten des Browsers für bestimmte Funktionen ändern. So können Sie bewährte Verfahren durchsetzen, auch wenn sich die Codebasis weiterentwickelt, und Inhalte von Drittanbietern sicherer einbinden.

Permissions Policy ähnelt der {{Glossary("CSP", "Content Security Policy")}}, steuert aber Funktionen statt sicherheitsbezogenem Verhalten.

Beispiele dafür, was Sie mit Permissions Policy tun können:

- Das Standardverhalten für die automatische Wiedergabe von Videos auf Mobilgeräten und Videos von Drittanbietern ändern.
- Verhindern, dass eine Website auf sensible Geräte wie Kamera, Mikrofon oder Lautsprecher zugreift.
- Iframes die Verwendung der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) erlauben.
- Verhindern, dass nicht im sichtbaren Bereich liegende Elemente durch Skripte verarbeitet werden, um die Leistung zu verbessern.

> [!NOTE]
> Permissions Policy hieß früher Feature Policy. Neben dem Namen hat sich auch die Syntax des HTTP-Headers geändert. Beachten Sie dies, wenn Sie Feature Policy bisher verwendet haben, und prüfen Sie die Tabellen zur Browser-Unterstützung. Die Syntax `<iframe allow=" ... ">` ist unverändert geblieben.

## Konzepte und Verwendung

Das Web bietet Funktionen und APIs, die bei Missbrauch Risiken für den Datenschutz oder die Sicherheit bergen können. In solchen Fällen möchten Sie möglicherweise streng begrenzen, wie eine Funktion auf einer Website verwendet wird. Webentwickler sollten jeweils auf intuitive Weise und ohne bestehende Funktionalität zu beeinträchtigen erkennen und behandeln können, wenn eine Funktion deaktiviert ist.

Mögliche Ansätze sind:

- JavaScript-APIs, die eine Einwilligung des Benutzers erfordern, geben „Permission denied“ zurück.
- JavaScript-APIs, die Zugriff auf Funktionen bieten, geben `false` zurück oder lösen einen Fehler aus.
- APIs werden gar nicht erst bereitgestellt, als gäbe es sie nicht.
- Optionen, die das Verhalten der Funktion steuern, haben andere Standardwerte.

> [!NOTE]
> Neu eingeführte Funktionen können über eine eigene API verfügen, die ihren Status anzeigt. Bestehende Funktionen, die später in Permissions Policy integriert werden, verwenden in der Regel vorhandene Mechanismen.

Mit Permissions Policy können Sie steuern, welche Origins welche Funktionen verwenden dürfen – sowohl auf der obersten Seite als auch in eingebetteten {{htmlelement("iframe")}}-Elementen. Ziel ist es, bewährte Verfahren für eine gute Benutzererfahrung durchzusetzen und eine differenzierte Kontrolle über _sensible_ oder _mächtige_ Funktionen zu ermöglichen. Damit sind Funktionen gemeint, für deren Nutzung ein Benutzer ausdrücklich seine Einwilligung erteilen muss, bevor der zugehörige Code ausgeführt werden kann.

Permissions Policy bietet zwei Möglichkeiten, Policies festzulegen:

- Den HTTP-Header {{httpheader("Permissions-Policy")}}, um die Verwendung von Funktionen in empfangenen Antworten und in eingebetteten Inhalten der Seite (einschließlich {{htmlelement("iframe")}}-Elementen) zu steuern.
- Das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#attributes) von {{htmlelement("iframe")}}, um die Verwendung von Funktionen nur in bestimmten {{htmlelement("iframe")}}-Elementen zu steuern.

Diese Möglichkeiten sind getrennt, hängen aber zusammen. Einzelheiten finden Sie unter [Vererbung von Policies für eingebettete Inhalte](#vererbung_von_policies_für_eingebettete_inhalte).

> [!NOTE]
> Skripte können Informationen über die Permissions Policy programmgesteuert über das Objekt [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) abfragen, das unter [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) oder [`HTMLIFrameElement.featurePolicy`](/de/docs/Web/API/HTMLIFrameElement/featurePolicy) verfügbar ist.

Um eine Funktion zu steuern, schreiben Sie eine Policy, die aus Folgendem besteht:

- Einer **Direktive**, die den Namen der zu steuernden Funktion angibt. Siehe die [Liste der verfügbaren Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives).
- Einer **Allowlist** mit den Origins, für die die Funktion gesteuert werden soll. Sie können eine Funktion für alle oder bestimmte Origins aktivieren oder ihre Verwendung für alle Origins blockieren.

Weiter unten finden Sie mehrere Beispiele.

## Verhältnis zur Permissions API

Permissions Policy und die [Permissions API](/de/docs/Web/API/Permissions_API) sind eng miteinander verwandt, aber nicht dasselbe. Die Funktionen, deren Berechtigungen durch beide Technologien gesteuert werden, überschneiden sich.

- Mit Permissions Policy kann ein Server festlegen, ob eine Funktion in einem bestimmten Dokument (oder in darin eingebetteten `<frame>`-Elementen) verwendet werden darf. Diese werden als **policy-gesteuerte** Funktionen bezeichnet. Siehe die [Liste der Permissions-Policy-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives).
- Die Permissions API regelt den Zugriff auf Funktionen anhand der vom Benutzer erteilten Berechtigungen. Diese Funktionen sind in der [Permissions Registry](https://w3c.github.io/permissions-registry/) erfasst.

Die Kennzeichen für die einzelnen Funktionen sind in beiden Technologien einheitlich, beispielsweise `geolocation` für die [Geolocation API](/de/docs/Web/API/Geolocation_API). Für die meisten API-Funktionen in der Permissions Registry gibt es auch eine entsprechende Permissions-Policy-Direktive. Eine Ausnahme ist die [Notifications API](/de/docs/Web/API/Notifications_API).

Wenn eine Permissions Policy die Verwendung einer mächtigen Funktion blockiert, wird der Benutzer im Allgemeinen gar nicht erst um Erlaubnis für deren Verwendung gebeten. Die Methode [`query()`](/de/docs/Web/API/Permissions/query) der Permissions API gibt dann für [`state`](/de/docs/Web/API/PermissionStatus/state) den Wert `denied` zurück.

Siehe auch [Permissions > Relationship to the Permissions Policy specification](https://w3c.github.io/permissions/#relationship-to-permissions-policy).

## Allowlists

Eine Allowlist enthält einen oder mehrere der folgenden, durch Leerzeichen getrennten Werte in Klammern:

- `*`: Die Funktion ist in diesem Dokument und in allen verschachtelten Browsing-Kontexten (`<iframe>`-Elementen) unabhängig von deren Origin erlaubt.
- `()` (leere Allowlist): Die Funktion ist im obersten und in verschachtelten Browsing-Kontexten deaktiviert. Der entsprechende Wert für das Attribut `allow` eines `<iframe>`-Elements ist `'none'`.
- `self`: Die Funktion ist in diesem Dokument und nur in verschachtelten Browsing-Kontexten (`<iframe>`-Elementen) desselben Origins erlaubt. In Cross-Origin-Dokumenten innerhalb verschachtelter Browsing-Kontexte ist sie nicht erlaubt. `self` kann als Kurzform für `https://your-site.example.com` betrachtet werden. Der entsprechende Wert für das Attribut `allow` eines `<iframe>`-Elements ist `'self'`.
- `'src'`: Die Funktion ist in diesem `<iframe>`-Element erlaubt, sofern das darin geladene Dokument denselben Origin hat wie die URL im Attribut {{HTMLElement('iframe','src','#Attributes')}}. Dieser Wert wird nur im Attribut `allow` eines `<iframe>`-Elements verwendet und ist der _Standardwert_ für eine Funktion, die ohne ausdrücklichen Allowlist-Wert aufgeführt ist. Beispielsweise entspricht `allow="geolocation"` dem Wert `allow="geolocation 'src'"`.
- `"<origin>"`: Die Funktion ist für bestimmte Origins erlaubt (beispielsweise `"https://a.example.com"`). Origins werden durch Leerzeichen getrennt. Beachten Sie, dass Origins in `allow`-Attributen von `<iframe>`-Elementen nicht in Anführungszeichen stehen.

Die Werte `*` und `()` dürfen nur einzeln verwendet werden, während `self` und `src` mit einem oder mehreren Origins kombiniert werden können.

Wo dies unterstützt wird, können Sie in Origins einer Permissions Policy Platzhalter verwenden. Statt mehrere Subdomains einzeln in einer Allowlist anzugeben, können Sie so alle mit einem einzigen Origin mit Platzhalter erfassen.

Statt

```http
("https://example.com" "https://a.example.com" "https://b.example.com" "https://c.example.com")
```

können Sie also Folgendes angeben:

```http
("https://example.com" "https://*.example.com")
```

> [!NOTE]
> `"https://*.example.com"` stimmt nicht mit `"https://example.com"` überein.

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

### Standard-Allowlists

Direktiven des HTTP-Headers `Permissions-Policy` haben eine Standard-Allowlist, entweder `*` oder `self`. Der jeweilige Standardwert ist auf der [Referenzseite der Direktive](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#directives) angegeben.

Für das oberste Dokument aktivieren sowohl `self` als auch `*` als Standardwert die Funktion, da der Origin des Dokuments immer mit beiden übereinstimmt.
Die einzige Ausnahme ist die nicht standardisierte Chrome-Direktive [`unload`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/unload). Ihr Standardwert ist `()`, sodass die Funktion deaktiviert ist, sofern sie nicht durch eine Policy aktiviert wird.

Die Standard-Allowlist gilt auch für ein `<iframe>`-Element, dessen `allow`-Attribut die Funktion nicht nennt – unabhängig davon, ob der Header der übergeordneten Seite sie nennt: `self` gewährt die Funktion einem `<iframe>`-Element desselben Origins, `*` gewährt sie unabhängig vom Origin und `()` gewährt sie nicht.
Unter [Vererbung von Policies für eingebettete Inhalte](#vererbung_von_policies_für_eingebettete_inhalte) erfahren Sie, wie Header, `allow`-Attribut und Standard-Allowlist zusammen bestimmen, ob eine Funktion in einem `<iframe>`-Element verfügbar ist.

## Syntax des Permissions-Policy-Headers

Die allgemeine Syntax sieht so aus:

```http
Permissions-Policy: <directive>=<allowlist>
```

Um beispielsweise jeglichen Zugriff auf Geolocation zu blockieren, verwenden Sie:

```http
Permissions-Policy: geolocation=()
```

Um den Zugriff für eine Auswahl von Origins zu erlauben, verwenden Sie:

```http
Permissions-Policy: geolocation=(self "https://a.example.com" "https://b.example.com")
```

Sie können mehrere Funktionen gleichzeitig steuern, indem Sie einen Header mit einer durch Kommas getrennten Liste von Policies oder für jede Policy einen eigenen Header senden.

Beispielsweise sind die folgenden Varianten gleichwertig:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self "https://example.com"), camera=*;

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self "https://example.com")
Permissions-Policy: camera=*
```

## Syntax für eingebettete Frames

Die Allowlist einer Funktion im Header `Permissions-Policy` definiert die Obermenge der Origins, denen der Zugriff auf die Funktion potenziell erlaubt ist.
Das Attribut `allow` eines {{htmlelement("iframe")}}-Elements gewährt die Funktion den darin genannten Origins, sofern sie zu dieser Obermenge gehören.
Aufgrund dieses [Vererbungsverhaltens](#vererbung_von_policies_für_eingebettete_inhalte) empfiehlt es sich, im HTTP-Header den größten akzeptablen Geltungsbereich für eine Funktion anzugeben und anschließend für jedes `<iframe>`-Element die benötigte Teilmenge festzulegen.

Die allgemeine Syntax sieht so aus:

```html
<iframe src="<origin>" allow="<directive> <allowlist>"></iframe>
```

Um beispielsweise jeglichen Zugriff auf Geolocation zu blockieren, verwenden Sie:

```html
<iframe src="https://example.com" allow="geolocation 'none'"></iframe>
```

Um eine Policy auf den aktuellen Origin und weitere Origins anzuwenden, verwenden Sie:

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com"></iframe>
```

Wichtig: Wenn ein `<iframe>`-Element zu einem anderen Origin navigiert, wird die Policy standardmäßig nicht auf diesen Origin angewendet. Wenn Sie den Origin, zu dem das `<iframe>`-Element navigiert, im Attribut `allow` aufführen, wird die auf das ursprüngliche `<iframe>`-Element angewendete Permissions Policy auch auf diesen Origin angewendet.

Sie können mehrere Funktionen gleichzeitig steuern, indem Sie im Attribut `allow` eine durch Semikolons getrennte Liste von Policy-Direktiven angeben.

```html
<iframe
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

Der Wert `src` verdient besondere Erwähnung. Wie oben beschrieben, ist die zugehörige Funktion bei diesem Allowlist-Wert in einem `<iframe>`-Element erlaubt, sofern das darin geladene Dokument denselben Origin hat wie die URL im Attribut {{HTMLElement('iframe','src','#Attributes')}}. Dieser Wert ist der _Standardwert_ der `allowlist` für Funktionen, die in `allow` aufgeführt werden. Daher sind die folgenden Varianten gleichwertig:

```html
<iframe src="https://example.com" allow="geolocation 'src'"></iframe>
<iframe src="https://example.com" allow="geolocation"></iframe>
```

> [!NOTE]
> Wie Sie vielleicht bemerkt haben, unterscheidet sich die Syntax für `<iframe>`-Policies etwas von der Syntax für `Permissions-Policy`-Header. Erstere verwendet weiterhin dieselbe Syntax wie die ältere Feature-Policy-Spezifikation, die durch Permissions Policy abgelöst wurde.

### Fenced Frames und Permissions Policy

{{htmlelement("fencedframe")}}-Elemente interagieren mit Permissions Policies auf dieselbe Weise wie `<iframe>`-Elemente, allerdings mit wesentlich stärkeren Einschränkungen. Über Permissions Policies für `<fencedframe>`-Elemente können nur bestimmte, für deren Verwendung vorgesehene Funktionen aktiviert werden. Andere policy-gesteuerte Funktionen sind in diesem Kontext nicht verfügbar.

Weitere Informationen finden Sie unter [Für Fenced Frames verfügbare Permissions Policies](/de/docs/Web/HTML/Reference/Elements/fencedframe#permissions_policies_available_to_fenced_frames).

## Vererbung von Policies für eingebettete Inhalte

Skripte erben unabhängig von ihrem Origin die Policy ihres Browsing-Kontexts. Das bedeutet, dass Skripte der obersten Ebene die Policy des Hauptdokuments erben.

Die geerbte Policy eines `<iframe>`-Elements ergibt sich aus der Kombination der Policy seiner übergeordneten Seite mit dem `allow`-Attribut des `<iframe>`-Elements selbst.

Wenn der Header {{HTTPHeader("Permissions-Policy")}} der übergeordneten Seite eine Funktion nennt, definiert dessen Allowlist die Obermenge der Origins, die die Funktion potenziell erben dürfen.
Damit ein `<iframe>`-Element die Funktion tatsächlich erbt, muss sein Origin von dieser Allowlist abgedeckt sein und die Funktion muss diesem Origin außerdem gewährt werden.
Dies kann ausdrücklich geschehen, indem die Funktion im Attribut `allow` mit einer zum Origin passenden Allowlist aufgeführt wird. Andernfalls geschieht es automatisch, wenn das Attribut `allow` die Funktion nicht aufführt und der Origin von der [Standard-Allowlist](#standard-allowlists) abgedeckt ist.

Wenn für eine Funktion keine `Permissions-Policy` angegeben ist, _werden die Origins, an die die Funktion delegiert werden kann, nicht eingeschränkt_.
Das Attribut `allow` kann daher verwendet werden, um die Funktion ausdrücklich an einen beliebigen Origin zu delegieren. Wenn das Attribut `allow` die Funktion nicht aufführt, wird sie an die Origins in der Standard-Allowlist der Funktion delegiert.
Beachten Sie, dass das übergeordnete Dokument weiterhin nur Funktionen delegieren kann, die in ihm aktiviert sind.

Das Deaktivieren einer Funktion durch eine Policy ist unumkehrbar. Wenn ein übergeordneter Frame eine Funktion für einen untergeordneten Frame deaktiviert hat, kann dieser sie nicht wieder aktivieren. Das gilt auch für alle seine Nachkommen.

## Beispiele

### HTTP-Header und `<iframe>`-Policies kombinieren

Angenommen, wir möchten die Verwendung von Geolocation auf unserem eigenen Origin sowie in eingebetteten Inhalten unseres vertrauenswürdigen Werbenetzwerks ermöglichen. Wir könnten die seitenweite Permissions Policy wie folgt festlegen:

```http
Permissions-Policy: geolocation=(self "https://trusted-ad-network.com")
```

In unseren Werbe-`<iframe>`-Elementen könnten wir den Zugriff für den Origin `https://trusted-ad-network.com` wie folgt festlegen:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Würde ein anderer Origin in das `<iframe>`-Element geladen, hätte dieser keinen Zugriff auf Geolocation:

```html
<iframe src="https://rogue-origin-example.com" allow="geolocation"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP-Header {{HTTPHeader("Permissions-Policy")}}
- Attribut {{HTMLElement("iframe", "allow", "#Attributes")}} von Iframes
- [Browserfunktionen mit Permissions Policy steuern](https://developer.chrome.com/docs/privacy-security/permissions-policy): Leitfaden zur Verwendung mit mehreren Links zu Demos.
- [Permissions/Feature Policies auf chromestatus.com](https://chromestatus.com/features#component%3A%20Blink%3EFeaturePolicy)
- [Datenschutz, Berechtigungen und Informationssicherheit](/de/docs/Web/Privacy)
