---
title: Third-Party-Cookies
slug: Web/Privacy/Third-party_cookies
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{QuicklinksWithSubPages("Web/Privacy")}}

Dieser Artikel erklärt, was Third-Party-Cookies sind, beschreibt die damit verbundenen Probleme und erklärt, wie Sie diese umgehen können.

## Was sind Third-Party-Cookies?

Ein [Cookie](/de/docs/Web/HTTP/Cookies) ist mit einer bestimmten Domain und einem Schema (in der Regel `https`) verknüpft und kann auch mit Subdomains verbunden sein, wenn das {{HTTPHeader("Set-Cookie")}} `Domain`-Attribut gesetzt ist.

- Wenn Domain und Schema des Cookies mit der aktuellen Seite übereinstimmen, die der Benutzer betrachtet (die URL, die in der Adressleiste des Browsers angezeigt wird), wird das Cookie als von derselben Seite stammend betrachtet und als _First-Party-Cookie_ bezeichnet.
- Wenn sich Domain und Schema unterscheiden, wird das Cookie nicht als von derselben Seite stammend betrachtet und als _Third-Party-Cookie_ bezeichnet.

> [!NOTE]
> Third-Party-Cookies werden manchmal auch als _Cross-Site-Cookies_ bezeichnet. Dies ist möglicherweise ein genauerer Begriff, da _Third-Party-Cookies_ im Eigentum eines Drittunternehmens oder einer Drittorganisation stehen können. Das Verhalten und die potenziellen Probleme sind jedoch dieselben, unabhängig davon, ob Sie alle beteiligten Seiten besitzen oder nicht. Zum Beispiel könnte eine Seite Ressourcen wie Bilder von einer anderen Domain abrufen, die sie besitzen.

Ein First-Party-Cookie kann gesetzt werden, wenn ein Benutzer eine Seite zum ersten Mal besucht, einem internen Link zu einer anderen Seite auf derselben Website folgt oder eine Ressource abruft, die sich auf derselben Seite befindet (zum Beispiel ein eingebettetes Bild, Webfont oder JavaScript-Datei).

Third-Party-Cookies werden in den folgenden häufigen Situationen gesendet:

- Wenn ein Link auf einer Website angeklickt wird, um zu einer anderen Website zu navigieren.
- Wenn eine Seite Komponenten von anderen Websites einbettet, wie Bilder oder andere Dokumente, die in {{htmlelement("iframe")}}s eingebettet sind (oft als _Third-Party-Content_ bezeichnet). Neben der ursprünglichen Anforderung für die Komponente können diese Komponenten weitere Anfragen generieren, die mehr Third-Party-Cookies setzen.

## Wofür werden Third-Party-Cookies verwendet?

Third-Party-Cookies, die beim Klicken auf Links zu anderen Seiten gesetzt werden, werden für verschiedene Zwecke verwendet. Zum Beispiel könnten Sie einen Affiliate-Link zu einer Partnerseite haben und ein Cookie setzen, wenn der Benutzer dem Link folgt, damit ein Belohnungsbanner mit einem Rabatt angezeigt werden kann, wenn ein bestimmtes Produkt gekauft wird, oder eine Provision an den Verweiser zurückgezahlt werden kann.

Drittanbieter-Inhalte, die Cookies setzen, haben ebenfalls viele verschiedene Verwendungen. Zum Beispiel könnten Sie ein Anmelde-Widget auf mehreren verschiedenen, aber verwandten Websites eingebettet haben, das ein Cookie über alle Websites hinweg teilt, das bestätigt, dass der Benutzer angemeldet ist, sodass er sich nicht auf jeder Website erneut anmelden muss.

Weitere Anwendungsfälle für Third-Party-Cookies sind:

- Teilen von Benutzereinstellungen oder Themeninformationen über mehrere Websites hinweg.
- Sammeln von Analyseinformationen über mehrere Websites.
- Zählen von Anzeigenimpressionen und Aufzeichnen von Benutzerinteressen, um Ad-Tech-Plattformen zu ermöglichen, relevantere Anzeigen zu schalten.

Lassen Sie uns das oben erwähnte Beispiel des Anmelde-Widgets mit einem fiktiven Unternehmen weiter veranschaulichen, das separate Domains für seinen Onlineshop (`shop.site`), seine Community-Diskussionsforen (`forum.site`) und Kundenservice und Rücksendungen (`service.site`) hat.

Jede der drei Websites hat ein eingebettetes Anmelde-Widget, das auf `auth.site` gehostet wird, um den Anmeldestatus über die Websites hinweg beizubehalten. Ein Benutzer kann sich auf einer dieser Websites anmelden, wodurch ein Cookie im Browser für `auth.site` mit einer Sitzungs-ID gesetzt wird. Wenn der Benutzer auf eine der anderen Seiten geht, hat die eingebettete `auth.site`-Instanz Zugriff auf das Sitzungs-ID-Cookie, das beim Anmelden auf der ersten Seite gesetzt wurde. Es kann dieses an den Server senden, prüfen, ob es noch gültig ist, und den Benutzer sofort auf der betreffenden Seite anmelden.

![Visuelle Darstellung des oben beschriebenen Third-Party-Anmeldesystems](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was ist das Problem mit Third-Party-Cookies?

Die oben genannten Anwendungsfälle klingen harmlos genug. Third-Party-Cookies können jedoch auch ohne die Zustimmung des Benutzers für illegitime Zwecke verwendet werden, die technisch von gültigen Anwendungsfällen ununterscheidbar sind.

Ein Link zu einer Drittanbieter-Seite, oder die Interaktion mit eingebetteten Drittanbieter-Inhalten in einem `<iframe>` (zum Beispiel das Ausfüllen eines Formulars oder das Klicken auf einen Button), könnte dazu führen, dass Cookies gesetzt werden, die Benutzerdaten in die Hände von jemandem legen, dem sie nicht erwartet hätten. Diese Informationen könnten verwendet werden, um:

- Benutzer mit gezielten Anzeigen im gesamten Web zu verfolgen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Benutzer mit Spam-E-Mails oder Anrufen zu überhäufen.
- Ihr Verhalten zu manipulieren, um bestimmte Optionen zu wählen, die die Affiliate-Einnahmen erhöhen oder Statistiken manipulieren.

Einzeln betrachtet sind solche Fälle schon schlimm genug, aber es wird noch schlimmer. Drittanbieter-Server können Informationen aus mehreren Third-Party-Cookies kombinieren, die über verschiedene Websites gesetzt werden, auf denen der Drittanbieter-Inhalt eingebettet ist, um ein detailliertes Profil des Surfverlaufs, der Interessen, Gewohnheiten und persönlichen Informationen eines Benutzers zu erstellen. Dies kann verwendet werden, um gruselige, invasive Benutzererfahrungen zu schaffen, Benutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Third-Party-Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Informationen, die auf illegitime Weise gewonnen werden, werden häufig auch an andere Dritte verkauft, was das Problem weiter multipliziert.

Gesetze wie die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union und der [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) haben geholfen, indem sie Unternehmen dazu verpflichten, transparent über die von ihnen gesetzten Cookies und die gesammelten Informationen zu sein. Beispiele dafür sind die Bitte an Kunden, in eine solche Datensammlung einzuwilligen, ihnen zu erlauben, die über sie gehaltenen Daten einzusehen und diese zu löschen, wenn sie dies wünschen. Dennoch ist es für Kunden nicht immer klar, wie ihre Daten verwendet werden.

## Wie gehen Browser mit Third-Party-Cookies um?

Browser-Anbieter wissen, dass Benutzer das oben beschriebene Verhalten nicht mögen, und haben daher begonnen, Third-Party-Cookies standardmäßig zu blockieren, während sie gleichzeitig Ausnahmen und Heuristiken in ihren Quellcode einfügen, um langjährige Probleme mit Third-Party-Cookies bei beliebten Websites zu umgehen.

- Mozillas [Anti-Tracking-Richtlinie](https://wiki.mozilla.org/Security/Anti_tracking_policy) hat dazu geführt, dass Firefox Third-Party-Cookies von bekannten Trackern standardmäßig blockiert (siehe [Firefox-Tracking-Schutz](/de/docs/Web/Privacy/Firefox_tracking_protection) und [Erweiterter Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)). Der Erweiterte Tracking-Schutz kann auf Standard, Streng oder Benutzerdefiniert eingestellt werden. [Standardmodus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_standard-enhanced-tracking-protection) aktiviert den [Totalen Cookie-Schutz](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/), der Third-Party-Cookies ein separates Cookie-Glas pro Seite zuweist, wodurch Cross-Site-Tracking verhindert wird. Im [Strengen Modus](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection) blockiert Firefox alle Third-Party-Cookies.
- Apple hat ebenfalls eine ähnliche [Tracking-Verhinderungsrichtlinie](https://webkit.org/tracking-prevention-policy/); in deren Folge sind eine ähnliche Reihe von Third-Party-Cookie-Schutzmaßnahmen standardmäßig aktiviert; siehe [Intelligente Tracking-Verhinderung](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) für Details.
- Zum Zeitpunkt des Schreibens blockiert Google Chrome standardmäßig nur Third-Party-Cookies im Inkognito-Modus. Benutzer können jedoch einstellen, dass Third-Party-Cookies jederzeit blockiert werden, wenn sie dies möchten, über `chrome://settings`. Google hat begonnen, Third-Party-Cookies für einen begrenzten Prozentsatz der Chrome-Nutzer zu deaktivieren, um die Auswirkungen zu testen, während sie gleichzeitig Technologien entwickeln, um Schlüsselanwendungsfälle ohne Third-Party-Cookies zu ermöglichen. Weitere Details finden Sie unter [Ersetzen von Third-Party-Cookies](#ersetzen_von_third-party-cookies).
- Edge blockiert Tracker von nicht besuchten Websites und blockiert standardmäßig bekannte schädliche Tracker. Microsoft beginnt auch zu erforschen, Third-Party-Cookies in Edge standardmäßig zu blockieren. Weitere Informationen finden Sie unter [Tracking-Verhinderung](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention).
- Der [Brave-Browser](https://brave.com/) blockiert Tracking-Cookies standardmäßig.

Es ist möglich, die Nutzung von Third-Party-Cookies in Firefox über die Browsereinstellungen fallweise zu erlauben. In Safari ist die Kontrolle jedoch eingeschränkter — Sie können die Cross-Site-Tracking-Verhinderung ausschalten, aber den Zugriff auf Third-Party-Cookies pro Frame nur auf Codeebene über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) erlauben.

> [!NOTE]
> Drittanbieter-Cookies (oder nur Tracking-Cookies) können auch durch Browsererweiterungen blockiert werden.

Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieterkomponenten (wie Social-Media-Widgets) nicht wie vorgesehen funktionieren. Da Browser weitere Einschränkungen für Third-Party-Cookies auferlegen, sollten Entwickler Wege suchen, um ihre Abhängigkeit davon zu verringern: siehe [Ersetzen von Third-Party-Cookies](#ersetzen_von_third-party-cookies).

## Verwendung von Third-Party-Cookies

### Aktivierung von Third-Party-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Attribut erlaubt es Servern zu spezifizieren, wann/ob Third-Party-Cookies gesendet werden. Wenn Sie `SameSite` nicht in Ihren `Set-Cookie`-Headern spezifizieren, wird der Standardwert `Lax` verwendet. Dieser weist den Browser an, keine Third-Party-Cookies zu senden, außer wenn der Benutzer zur Ursprungsseite des Cookies von einer anderen Seite navigiert. Dies ist nützlich, wenn Sie Cookies sofort senden möchten, sobald ein Benutzer von einer anderen Website auf Ihre gelangt, um beispielsweise die Erfahrung zu personalisieren, sobald er dort ankommt.

Dies ist jedoch nicht geeignet, wenn Sie Inhalte über mehrere Websites hinweg innerhalb von `<iframe>`s einbetten möchten und auf Third-Party-Cookies für Funktionalitäten angewiesen sind, wie im oben besprochenen Anmeldebeispiel. In solchen Fällen müssen Sie explizit `SameSite=None` setzen, um dem Browser zu erlauben, diese Cookies zuzulassen:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, das `Secure`-Attribut ebenfalls gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_. Im obigen Beispiel haben wir auch das `HttpOnly`-Attribut gesetzt, um JavaScript-Zugriff auf das Cookie zu deaktivieren (z.B. über [`Document.cookie`](/de/docs/Web/API/Document/cookie)). Cookies, die sensible Informationen enthalten, sollten immer mit dem `HttpOnly`-Attribut versehen sein — es wäre wirklich unsicher, sie für JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting-([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss))-Angriffe zu mindern.

> [!NOTE]
> Cookies, die für sensible Informationen genutzt werden, sollten auch eine kurze [Lebensdauer](/de/docs/Web/HTTP/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

### Übergang von Third-Party-Cookies

Es gibt mehrere Strategien, um Websites dabei zu helfen, das Brechen in Browsern zu minimieren, in denen Third-Party-Cookies blockiert werden:

1. Prüfen Sie Ihre Nutzung von Third-Party-Cookies. Cookies müssen das `SameSite=None`-Attribut gesetzt haben, um in einem Cross-Site-Kontext verwendet zu werden. Sie können daher Third-Party-Cookies identifizieren, indem Sie nach `SameSite=None` in Ihrem Code suchen oder gespeicherte `SameSite=None`-Cookies in Ihren Browser-Entwicklungstools überprüfen, beispielsweise im [Firefox Speicher-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Chromes [Fehler-Panel](https://developer.chrome.com/docs/devtools/issues/) [meldet ebenfalls Probleme mit der Blockierung von Third-Party-Cookies](https://developers.google.com/privacy-sandbox/cookies/prepare/audit-cookies#chrome-dev-tools) zusammen mit einer Liste der betroffenen Cookies.
2. Testen Sie Ihre Funktionalität mit blockierten Third-Party-Cookies, um zu sehen, was bricht. Möglicherweise stellen Sie fest, dass einige Cookies nicht mehr benötigt werden.
3. Zunächst könnten Sie Ihren Code widerstandsfähiger machen, sodass er eine weniger personalisierte Erfahrung bietet, wenn Third-Party-Cookie-Daten nicht verfügbar sind, anstatt komplett zu brechen. Folgen Sie den Prinzipien der {{Glossary("Graceful_degradation", "Graceful Degradation")}}.
4. Sammeln Sie Daten über alternative Mittel, wie Benutzerumfragen oder Quiz, oder schauen Sie sich die Daten an, die Sie bereits haben, um Trends zu erkennen (zum Beispiel Produktbestellhistorien).
5. Verwenden Sie einen alternativen clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API), um Daten zu persistieren, oder erwägen Sie eine serverseitige Lösung.
6. Wenn Ihre Third-Party-Cookies nur über eine kleine Anzahl verwandter, bekannter Webseiten verwendet werden, könnten Sie [Storage Access API](/de/docs/Web/API/Storage_Access_API) und/oder [Related Website Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) verwenden, um den Zugriff auf Third-Party-Cookies nur für diese bestimmten Websites zu ermöglichen. Storage Access fordert den Benutzer auf, die Berechtigung zu geben, dass eine Seite Third-Party-Cookies auf Frame-Basis verwendet.
   - Wenn Sie bereits eine Lösung für die Storage Access API für Firefox oder Safari implementiert haben, ist es jetzt eine gute Gelegenheit, Ihre Implementierung gegen Chromes Verhalten zu überprüfen, das in Version 119 eine vollständige Unterstützung bietet.
   - Related Website Sets können als progressive Verbesserung der Storage Access API betrachtet werden: Die API kann auf dieselbe Weise verwendet werden, jedoch werden Benutzer auf den in der Set enthaltenen Websites nicht zur Berechtigung für den Zugriff auf Third-Party-Cookies aufgefordert.
7. Wenn Ihre Third-Party-Cookies auf 1:1-Basis mit den Top-Level-Websites verwendet werden, auf denen sie generiert werden, könnten Sie [Cookies Having Independent Partitioned State](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) (CHIPS, auch als partitionierte Cookies bekannt) verwenden, um Ihre Cookies in partitioniertem Speicher mit einem separaten Cookie-Glas pro Top-Level-Website zu optieren. Dies erfordert nur, dass Sie das `partitioned`-Attribut zu Ihren bestehenden Cross-Site-Cookies hinzufügen. Sie können dann uneingeschränkt verwendet werden, können jedoch nicht mit anderen Websites geteilt werden. Beachten Sie, dass CHIPS derzeit nur in Chromium verfügbar ist.

## Ersetzen von Third-Party-Cookies

Es stehen Entwicklern, die keine Third-Party-Cookies mehr verwenden möchten, um die Privatsphäre der Benutzer zu respektieren und das Tracking zu minimieren, während sie weiterhin verwandte Anwendungsfälle umsetzen, mehrere Funktionen zur Verfügung. Einige dieser Funktionen befinden sich in einem frühen experimentellen Stadium, es lohnt sich jedoch, sie in Betracht zu ziehen, während Sie beginnen, sich auf die Zukunft vorzubereiten.

Sie können beginnen, die verschiedenen Funktionen zu erkunden, die im [Privacy Sandbox](/de/docs/Web/Privacy/Privacy_sandbox)-Projekt von Google verfügbar sind, um zu sehen, ob sie zu Ihrem Anwendungsfall passen (diese sind derzeit experimentell und nur in Chromium verfügbar):

- [Federated Credential Management](/de/docs/Web/API/FedCM_API) (FedCM) API: Ermöglicht föderierte Identitätsdienste, die es Benutzern ermöglichen, sich bei mehreren Websites und Diensten anzumelden.
- [Private State Tokens](https://developers.google.com/privacy-sandbox/protections/private-state-tokens): Erlaubt Anti-Betrug und Anti-Spam, indem begrenzte, nicht identifizierende Informationen über Seiten hinweg ausgetauscht werden.
- [Topics API](/de/docs/Web/API/Topics_API): Ermöglicht interessenbasierte Werbung und personalisierte Inhalte.
- [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience): Verwendung von Daten aus einer App oder Website zur Auswahl einer Anzeige, wenn der Benutzer eine andere App oder Website besucht.
- [Attribution Reporting API](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting): Erlaubt die Messung von Anzeigenimpressionen und Konversionen.

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- [Datenschutz im Web](/de/docs/Web/Privacy)
