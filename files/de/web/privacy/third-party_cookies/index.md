---
title: Drittanbieter-Cookies
slug: Web/Privacy/Third-party_cookies
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{QuicklinksWithSubPages("Web/Privacy")}}

Dieser Artikel erklärt, was Drittanbieter-Cookies sind, beschreibt die damit verbundenen Probleme und erklärt, wie Sie diese Probleme umgehen können.

## Was sind Drittanbieter-Cookies?

Ein [Cookie](/de/docs/Web/HTTP/Cookies) ist mit einer bestimmten Domäne und einem Schema (normalerweise `https`) verbunden und kann auch mit Subdomänen verbunden sein, wenn das {{HTTPHeader("Set-Cookie")}} `Domain`-Attribut gesetzt ist.

- Wenn die Cookie-Domäne und das Schema mit der aktuellen Seite übereinstimmen, die der Benutzer ansieht (die URL, die in der Adressleiste des Browsers angezeigt wird), wird das Cookie als von derselben Seite wie die Seite stammend betrachtet und als ein _Erstanbieter-Cookie_ bezeichnet.
- Wenn die Domäne und das Schema unterschiedlich sind, wird das Cookie nicht als von derselben Seite stammend betrachtet und als ein _Drittanbieter-Cookie_ bezeichnet.

> [!NOTE]
> Drittanbieter-Cookies werden manchmal auch als _Cross-Site-Cookies_ bezeichnet. Dies ist möglicherweise ein genauerer Name, da _Drittanbieter-Cookies_ Eigentum eines Drittunternehmen oder einer Organisation implizieren. Das Verhalten und die potenziellen Probleme sind jedoch dieselben, unabhängig davon, ob Sie alle beteiligten Seiten besitzen. Zum Beispiel könnte eine Seite Ressourcen wie Bilder von einer anderen Domäne abrufen, die sie besitzt.

Ein Erstanbieter-Cookie kann gesetzt werden, wenn ein Benutzer erstmals eine Seite besucht, einem internen Link zu einer anderen Seite derselben Seite folgt oder eine auf derselben Seite befindliche Ressource anfordert (z.B. ein eingebettetes Bild, Web-Font oder JavaScript-Datei).

Drittanbieter-Cookies werden in den folgenden typischen Situationen gesendet:

- Wenn ein Link auf einer Seite angeklickt wird, um zu einer anderen Seite zu navigieren.
- Wenn eine Seite Komponenten von anderen Seiten einbettet, wie Bilder oder andere Dokumente eingebettet in {{htmlelement("iframe")}}s (oft als _Drittanbieter-Inhalte_ bezeichnet). Neben der ursprünglichen Anforderung für die Komponente können diese Komponenten weitere Anforderungen generieren, die weitere Drittanbieter-Cookies setzen.

## Wofür werden Drittanbieter-Cookies verwendet?

Drittanbieter-Cookies, die beim Anklicken von Links zu anderen Seiten gesetzt werden, werden für verschiedene Zwecke verwendet. Zum Beispiel könnten Sie einen Affiliate-Link zu einer Partnerseite haben und ein Cookie setzen, wenn der Benutzer dem Link folgt, damit ein Prämienbanner mit einem Rabatt angezeigt werden kann, wenn ein bestimmtes Produkt gekauft wird, oder eine Provision an den Referenzgeber gezahlt werden kann.

Drittanbieter-Inhalte, die Cookies setzen, haben ebenfalls viele verschiedene Verwendungen. Zum Beispiel könnten Sie ein Anmelde-Widget auf mehreren verschiedenen, aber verwandten Seiten eingebettet haben, das ein Cookie über alle Seiten hinweg teilt und bestätigt, dass der Benutzer angemeldet ist, sodass er sich nicht auf jeder Seite erneut anmelden muss.

Andere Anwendungsfälle für Drittanbieter-Cookies sind:

- Teilen von Benutzereinstellungen oder Themeninformationen über mehrere Seiten.
- Sammeln von Analysen über mehrere Seiten.
- Zählen von Anzeigenimpressionen und Erfassen von Benutzerinteressen, um Ad-Tech-Plattformen zu ermöglichen, relevantere Anzeigen zu schalten.

Veranschaulichen wir das Beispiel des Anmelde-Widgets mit einem fiktiven Unternehmen, das separate Domänen für seinen Online-Shop (`shop.site`), Diskussionsforen der Community (`forum.site`) und Kundenservice und Rückgabe (`service.site`) hat.

Jede der drei Seiten hat ein eingebettetes Anmelde-Widget, das unter `auth.site` gehostet wird, um den Anmeldestatus über Seiten hinweg zu speichern. Ein Benutzer kann sich auf einer dieser Seiten anmelden, wodurch ein Cookie im Browser für `auth.site` mit einer Sitzungs-ID gesetzt wird. Wenn der Benutzer zu einer der anderen Seiten geht, hat die eingebettete Instanz von `auth.site` Zugriff auf das Cookie mit der Sitzungs-ID, das gesetzt wurde, wenn sich der Benutzer auf der ersten Seite anmeldet. Es kann dies an den Server senden, überprüfen, ob es noch gültig ist, und sich sofort auf dieser Seite anmelden.

![Visuelle Darstellung der obigen Beschreibung des Drittanbieter-Anmeldesystems](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was ist das Problem mit Drittanbieter-Cookies?

Die oben genannten Anwendungsfälle klingen unschuldig genug. Drittanbieter-Cookies können jedoch auch für illegale Zwecke ohne Zustimmung des Benutzers verwendet werden, die technisch nicht von gültigen Anwendungsfällen zu unterscheiden sind.

Das Folgen eines Links zu einem Drittanbieter oder das Interagieren mit eingebetteten Drittanbieter-Inhalten in einem `<iframe>` (z.B. Ausfüllen eines Formulars oder Klicken auf einen Button) könnte dazu führen, dass Cookies gesetzt werden, die Informationen eines Benutzers in die Hände von jemandem legen, den sie nicht erwartet haben. Diese Informationen könnten verwendet werden, um:

- Benutzer im Internet mit zielgerichteten Anzeigen zu verfolgen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Benutzer mit Spam-E-Mails oder Telefonanrufen zu belästigen.
- Ihr Verhalten zu manipulieren, um bestimmte Optionen zu wählen, die den Affiliate-Umsatz steigern oder Statistiken manipulieren.

Individuell gesehen sind solche Fälle schon schlimm genug, aber es wird noch schlimmer. Drittanbieter-Server können Informationen aus mehreren Drittanbieter-Cookies kombinieren, die über verschiedene Seiten gesetzt werden, auf denen der Drittanbieter-Inhalt eingebettet ist, um ein detailliertes Profil der Browserverlauf, Interessen, Gewohnheiten und persönlichen Informationen eines Benutzers zu erstellen. Dies kann verwendet werden, um unheimliche, aufdringliche Benutzererfahrungen zu erzeugen, Benutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Drittanbieter-Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Benutzerdaten, die auf illegalem Weg erlangt werden, werden häufig auch an andere Dritte verkauft, was das Problem weiter verstärkt.

Gesetzgebungen wie die [Datenschutz-Grundverordnung](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) (GDPR) in der Europäischen Union und der [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) haben geholfen, indem sie Unternehmen gesetzlich dazu verpflichten, transparent über die gesetzten Cookies und die gesammelten Informationen zu sein. Beispiele hierfür sind das Erfordernis, dass Kunden in eine solche Datenverarbeitung einwilligen, ihnen die Möglichkeit geben zu sehen, welche Daten ein Unternehmen über sie besitzt, und dass sie die Daten löschen können, wenn sie es wünschen. Es ist jedoch immer noch nicht immer klar, wie die Daten der Kunden verwendet werden.

## Wie gehen Browser mit Drittanbieter-Cookies um?

Browserhersteller wissen, dass Benutzer das oben beschriebene Verhalten nicht mögen, und haben daher alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren, während sie auch Ausnahmen und Heuristiken in ihren Quellcode aufnehmen, um langjährige Probleme mit Drittanbieter-Cookies auf beliebten Websites zu lösen.

- Mozillas [Anti-Tracking-Politik](https://wiki.mozilla.org/Security/Anti_tracking_policy) hat dazu geführt, dass Firefox Drittanbieter-Cookies von bekannten Trackern standardmäßig blockiert (siehe [Firefox-Tracking-Schutz](/de/docs/Web/Privacy/Firefox_tracking_protection) und [Erweiterter Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)). Firefox gibt Drittanbieter-Cookies auch ein separates Cookie-Glas pro Seite, sodass sie nicht verwendet werden können, um Benutzer über Seiten hinweg zu verfolgen (siehe [Total Cookie Protection](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/)).
- Apple hat ebenfalls eine ähnliche [Tracking-Verhinderungspolitik](https://webkit.org/tracking-prevention-policy/); die Einhaltung dieser Politik hat zu einem ähnlichen Satz von Drittanbieter-Cookie-Schutzmaßnahmen geführt, die standardmäßig aktiviert sind; siehe [Intelligente Tracking-Verhinderung](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) für Details.
- Zum Zeitpunkt des Schreibens blockiert Google Chrome Drittanbieter-Cookies nur im Inkognito-Modus standardmäßig, obwohl Benutzer es so einstellen können, dass Drittanbieter-Cookies jederzeit blockiert werden, wenn sie dies wünschen, über `chrome://settings`. Google hat damit begonnen, Drittanbieter-Cookies für einen begrenzten Prozentsatz von Chrome-Nutzern zu deaktivieren, um die Auswirkungen zu testen, während sie gleichzeitig Technologien entwickeln, die es ermöglichen sollen, wichtige Anwendungsfälle ohne Drittanbieter-Cookies umzusetzen. Siehe [Ersetzen von Drittanbieter-Cookies](#replacing_third-party_cookies) für Details.
- Edge blockiert Tracker von nicht besuchten Seiten und blockiert standardmäßig bekannte schädliche Tracker. Zum Zeitpunkt des Schreibens untersucht Microsoft auch, Drittanbieter-Cookies in Edge standardmäßig zu blockieren. Siehe [Tracking-Verhinderung](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention) für weitere Informationen.
- Der [Brave-Browser](https://brave.com/) blockiert Tracking-Cookies standardmäßig.

Es ist möglich, die Verwendung von Drittanbieter-Cookies im Einzelfall in Firefox über die Browsereinstellungen zuzulassen. In Safari ist die Kontrolle jedoch eingeschränkter — Sie können die Verhinderung von Cross-Site-Tracking ausschalten, aber die Erlaubnis für den Zugriff auf Drittanbieter-Cookies pro Frame kann nur auf Codeebene über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) erteilt werden.

> [!NOTE]
> Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch von Browsererweiterungen blockiert werden.

Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie Social-Media-Widgets) nicht wie vorgesehen funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler beginnen, nach Wegen zu suchen, um ihre Abhängigkeit von diesen zu reduzieren: Siehe [Ersetzen von Drittanbieter-Cookies](#replacing_third-party_cookies).

## Verwendung von Drittanbieter-Cookies

### Aktivieren von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Attribut ermöglicht es Servern anzugeben, ob/wann Drittanbieter-Cookies gesendet werden. Wenn Sie `SameSite` nicht in Ihren `Set-Cookie`-Headers angeben, wird der Standardwert `Lax` verwendet. Dies weist den Browser an, keine Drittanbieter-Cookies zu senden, außer wenn der Nutzer zur Ursprungsseite des Cookies von einer anderen Seite navigiert. Dies ist nützlich, wenn Sie Cookies sofort senden möchten, sobald ein Benutzer von einer anderen Seite zu Ihrer Seite navigiert, um beispielsweise die Erfahrung sofort zu personalisieren, sobald er dort ankommt.

Es ist jedoch nutzlos, wenn Sie Cross-Site-Inhalte über mehrere Seiten innerhalb von `<iframe>`s einbetten und auf Drittanbieter-Cookies für Funktionalität angewiesen sind, wie im Fall des zuvor betrachteten Anmeldebeispiels. In solchen Fällen müssen Sie explizit `SameSite=None` setzen, um dem Browser zu erlauben, diese Cookies weiterzugeben:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass wenn `SameSite=None` gesetzt ist, das `Secure`-Attribut ebenfalls gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_. Im obigen Beispiel haben wir auch das `HttpOnly`-Attribut gesetzt, um den JavaScript-Zugriff auf das Cookie zu deaktivieren (z.B. über {{domxref("Document.cookie")}}). Cookies, die sensible Informationen speichern, sollten immer das `HttpOnly`-Attribut gesetzt haben — es wäre wirklich unsicher, sie für JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting-([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss))-Angriffe zu mildern.

> [!NOTE]
> Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](/de/docs/Web/HTTP/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

### Übergang von Drittanbieter-Cookies

Es gibt mehrere Strategien, um Seiten dabei zu helfen, Brüche in Browsern zu minimieren, in denen Drittanbieter-Cookies blockiert sind:

1. Überprüfen Sie Ihre Verwendung von Drittanbieter-Cookies. Cookies müssen das `SameSite=None`-Attribut gesetzt haben, um in einem Cross-Site-Kontext verwendet zu werden. Sie können daher Drittanbieter-Cookies identifizieren, indem Sie nach `SameSite=None` in Ihrem Code suchen oder gespeicherte `SameSite=None`-Cookies in Ihren Browser-DevTools überprüfen, zum Beispiel im [Firefox Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Chromes [Issues Panel](https://developer.chrome.com/docs/devtools/issues/) meldet ebenfalls [Probleme mit der Blockierung von Drittanbieter-Cookies](https://developers.google.com/privacy-sandbox/cookies/prepare/audit-cookies#chrome-dev-tools) zusammen mit einer Liste der betroffenen Cookies.
2. Testen Sie Ihre Funktionalität, während Drittanbieter-Cookies blockiert sind, um zu sehen, was bricht. Möglicherweise finden Sie heraus, dass einige Cookies nicht mehr benötigt werden.
3. Zunächst einmal könnten Sie Ihren Code robuster gestalten, damit er eine weniger personalisierte Erfahrung bietet, wenn keine Drittanbieter-Cookie-Daten verfügbar sind, anstatt vollständig zu brechen. Folgen Sie den Prinzipien der [graceful degradation](/de/docs/Glossary/Graceful_degradation).
4. Sammeln Sie Daten auf alternative Weise, wie zum Beispiel durch Benutzerumfragen oder Quizs, oder betrachten Sie bereits vorhandene Daten, um Trends zu erkennen (z.B. Bestellhistorien von Produkten).
5. Verwenden Sie einen alternativen clientseitigen Speicherm
