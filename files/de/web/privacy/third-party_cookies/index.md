---
title: Third-party Cookies
slug: Web/Privacy/Third-party_cookies
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{QuicklinksWithSubPages("Web/Privacy")}}

Dieser Artikel erklärt, was Third-party-Cookies sind, beschreibt die damit verbundenen Probleme und erklärt, wie Sie diese Probleme umgehen können.

## Was sind Third-party-Cookies?

Ein [Cookie](/de/docs/Web/HTTP/Cookies) ist mit einer bestimmten Domain und einem bestimmten Schema (normalerweise `https`) verbunden und kann auch mit Subdomains verbunden sein, wenn das Attribut {{HTTPHeader("Set-Cookie")}} `Domain` gesetzt ist.

- Wenn die Cookie-Domain und das Schema mit der aktuellen Seite übereinstimmen, die der Benutzer ansieht (die URL, die in der Adressleiste des Browsers angezeigt wird), wird das Cookie als vom selben Standort wie die Seite stammend betrachtet und als _First-party-Cookie_ bezeichnet.
- Wenn die Domain und das Schema unterschiedlich sind, wird das Cookie nicht als von demselben Standort stammend betrachtet und als _Third-party-Cookie_ bezeichnet.

> [!NOTE]
> Third-party-Cookies werden manchmal als _Site-übergreifende Cookies_ bezeichnet. Dies ist möglicherweise ein genauerer Name, da _Third-party-Cookies_ auf den Besitz durch ein Drittunternehmen oder eine Drittorganisation hinweisen. Das Verhalten und die potenziellen Probleme sind jedoch die gleichen, unabhängig davon, ob Sie alle beteiligten Seiten besitzen oder nicht. Beispielsweise könnte eine Seite Ressourcen wie Bilder von einer anderen Domain abrufen, die sie besitzt.

Ein First-party-Cookie kann gesetzt werden, wenn ein Benutzer erstmals eine Seite besucht, einem internen Link zu einer anderen Seite derselben Seite folgt oder eine Ressource anfordert, die sich auf derselben Seite befindet (zum Beispiel ein eingebettetes Bild, ein Webfont oder eine JavaScript-Datei).

Third-party-Cookies werden in den folgenden häufigen Situationen gesendet:

- Wenn ein Link auf einer Website angeklickt wird, um zu einer anderen Website zu navigieren.
- Wenn eine Seite Komponenten von anderen Websites einbettet, wie Bilder oder andere Dokumente, die in {{htmlelement("iframe")}}s eingebettet sind (oft als _Third-party-Inhalte_ bezeichnet). Neben der ursprünglichen Anforderung für die Komponente können diese Komponenten weitere Anforderungen generieren, die mehr Third-party-Cookies setzen.

## Wofür werden Third-party-Cookies verwendet?

Third-party-Cookies, die beim Anklicken von Links zu anderen Websites gesetzt werden, werden für verschiedene Zwecke genutzt. Beispielsweise könnte ein Affiliate-Link zu einer Partnerseite führen und beim Folgen des Links ein Cookie gesetzt werden, damit ein Belohnungsbanner mit einem Rabatt angezeigt wird, falls ein bestimmtes Produkt gekauft wird, oder eine Provision an den Referenzgeber gezahlt werden kann.

Third-party-Inhalte, die Cookies setzen, haben ebenfalls viele verschiedene Verwendungszwecke. Zum Beispiel könnten Sie ein Anmelde-Widget auf mehreren unterschiedlichen, aber verwandten Websites eingebettet haben, das ein Cookie zwischen allen Websites teilt, das bestätigt, dass der Benutzer angemeldet ist, sodass er sich nicht erneut auf jeder Website anmelden muss.

Weitere Anwendungsfälle für Third-party-Cookies sind:

- Teilen von Benutzerpräferenzen oder Themeninformationen über mehrere Websites.
- Sammeln von Analysen über mehrere Websites.
- Zählen von Anzeigenimpressionen und Aufzeichnen von Benutzerinteressen, um Ad-Tech-Plattformen in die Lage zu versetzen, relevantere Anzeigen zu schalten.

Lassen Sie uns das Beispiel mit dem Anmelde-Widget, das oben genannt wurde, mit einem fiktiven Unternehmen weiter veranschaulichen, das separate Domains für seinen Online-Shop (`shop.site`), Diskussionsforen der Community (`forum.site`) und Kundenservice und Retouren (`service.site`) hat.

Jede der drei Seiten hat ein eingebettetes Anmelde-Widget, das bei `auth.site` gehostet wird, um den Anmeldestatus über die Seiten hinweg beizubehalten. Ein Benutzer kann sich auf einer dieser Seiten anmelden und ein Cookie, das eine Sitzungs-ID enthält, wird für `auth.site` im Browser gesetzt. Wenn der Benutzer zu einer der anderen Seiten geht, hat die eingebettete `auth.site`-Instanz Zugriff auf das Sitzungs-ID-Cookie, das gesetzt wurde, als der Benutzer sich auf der ersten Seite anmeldete. Sie kann es an den Server senden, prüfen, ob es noch gültig ist, und sich sofort bei dieser Seite anmelden.

![Visuelle Darstellung des oben beschriebenen Third-party-Anmeldesystems](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was ist das Problem mit Third-party-Cookies?

Die oben genannten Anwendungsfälle klingen harmlos genug. Third-party-Cookies können jedoch auch für illegitime Zwecke ohne Zustimmung des Benutzers verwendet werden, die technisch nicht von gültigen Anwendungsfällen zu unterscheiden sind.

Das Folgen eines Links zu einem Drittanbieter oder die Interaktion mit in einem `<iframe>` eingebetteten Third-party-Inhalten (zum Beispiel das Ausfüllen eines Formulars oder das Klicken auf einen Button) könnte dazu führen, dass Cookies gesetzt werden, die Benutzerdaten in die Hände von Personen geben, die der Benutzer nicht erwartet hat. Diese Informationen könnten verwendet werden, um:

- Benutzer mit gezielten Anzeigen im Internet zu verfolgen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Benutzer mit Spam-E-Mails oder Anrufen zu kontaktieren.
- Ihr Verhalten zu manipulieren, um bestimmte Optionen auszuwählen, die den Affiliate-Umsatz steigern oder Statistiken manipulieren.

Einzeln sind solche Fälle schlimm genug, aber es wird noch schlimmer. Third-party-Server können Informationen aus mehreren auf verschiedenen Seiten gesetzten Third-party-Cookies kombinieren, auf denen die Third-party-Inhalte eingebettet sind, um ein detailliertes Profil des Browserverlaufs, der Interessen, Gewohnheiten und persönlichen Informationen eines Benutzers zu erstellen. Dies kann verwendet werden, um unheimliche, invasive Benutzererfahrungen zu schaffen, Benutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Third-party-Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Benutzerdaten, die auf illegitime Weise erlangt wurden, werden oft auch an andere Dritte verkauft, was das Problem noch weiter vervielfacht.

Gesetzgebungen wie die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union und der [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) haben geholfen, indem sie Unternehmen gesetzlich verpflichtet haben, transparent über die von ihnen gesetzten Cookies und die gesammelten Informationen zu sein. Beispiele sind das Einholen der Zustimmung der Kunden zu solch einer Datensammlung, ihnen die Möglichkeit zu geben, zu sehen, welche Daten ein Unternehmen über sie hält, und die Daten zu löschen, wenn sie dies wünschen. Es ist jedoch für Kunden immer noch nicht immer klar, wie ihre Daten verwendet werden.

## Wie gehen Browser mit Third-party-Cookies um?

Browserhersteller wissen, dass Nutzer das oben beschriebene Verhalten nicht mögen, und haben deshalb alle damit begonnen, Third-party-Cookies standardmäßig zu blockieren, während sie auch Ausnahmen und Heuristiken in ihren Quellcode aufgenommen haben, um langanhaltende Probleme mit Third-party-Cookies auf beliebten Websites zu umgehen.

- Mozillas [Anti-Tracking-Politik](https://wiki.mozilla.org/Security/Anti_tracking_policy) hat dazu geführt, dass Firefox Cookies von bekannten Trackern standardmäßig blockiert (siehe [Firefox Tracking-Schutz](/de/docs/Web/Privacy/Firefox_tracking_protection) und [Erweiterter Schutz vor Aktivitätenverfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)). Firefox gibt Third-party-Cookies auch pro Seite ein eigenes Cookie-Glas, damit sie nicht verwendet werden können, um Nutzer zwischen Seiten zu verfolgen (siehe [Total Cookie Protection](https://blog.mozilla.org/en/products/firefox/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/)).
- Apple hat ebenfalls eine ähnliche [Tracking-Prevention-Politik](https://webkit.org/tracking-prevention-policy/); das Befolgen dieser hat zu einem ähnlichen Satz von Schutzmaßnahmen für Third-party-Cookies geführt, die standardmäßig aktiviert sind; siehe [Intelligent Tracking Prevention](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) für Details.
- Zum Zeitpunkt des Schreibens blockiert Google Chrome standardmäßig Third-party-Cookies nur im Inkognito-Modus, obwohl Benutzer es so einstellen können, dass Third-party-Cookies jederzeit blockiert werden, falls gewünscht, über `chrome://settings`. Google hat begonnen, Third-party-Cookies für einen begrenzten Prozentsatz von Chrome-Benutzern zu deaktivieren, um die Auswirkungen zu testen, während sie gleichzeitig Technologien entwickeln, um wichtige Anwendungsfälle ohne Third-party-Cookies zu ermöglichen. Details finden Sie unter [Ersetzen von Third-party-Cookies](#ersetzen_von_third-party-cookies).
- Edge blockiert Tracker von nicht besuchten Websites und blockiert standardmäßig bekannte schädliche Tracker. Zum Zeitpunkt des Schreibens erkundet Microsoft auch, standardmäßig Third-party-Cookies in Edge zu blockieren. Weitere Informationen finden Sie unter [Tracking-Verhinderung](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention).
- Der [Brave-Browser](https://brave.com/) blockiert standardmäßig Tracking-Cookies.

Es ist möglich, die Nutzung von Third-party-Cookies in Firefox auf Einzelfallbasis über die Browsereinstellungen zuzulassen. In Safari ist die Kontrolle jedoch eingeschränkter — man kann die Verhinderung von Website-übergreifendem Tracking deaktivieren, aber den Zugriff auf Third-party-Cookies pro Frame kann nur auf Code-Ebene, über die [Storage Access API](/de/docs/Web/API/Storage_Access_API), ermöglicht werden.

> [!NOTE]
> Third-party-Cookies (oder einfach Tracking-Cookies) können auch von Browsererweiterungen blockiert werden.

Das Blockieren von Cookies kann dazu führen, dass einige Third-party-Komponenten (wie Social-Media-Widgets) nicht wie vorgesehen funktionieren. Da Browser weitere Beschränkungen für Third-party-Cookies auferlegen, sollten Entwickler damit beginnen, Wege zu suchen, um ihre Abhängigkeit von diesen zu verringern: siehe [Ersetzen von Third-party-Cookies](#ersetzen_von_third-party-cookies).

## Verwendung von Third-party-Cookies

### Aktivieren von Third-party-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Attribut ermöglicht es Servern, anzugeben, ob/wann Third-party-Cookies gesendet werden. Wenn Sie `SameSite` in Ihren `Set-Cookie`-Headern nicht angeben, wird der Standardwert `Lax` verwendet. Dies weist den Browser an, Third-party-Cookies nur dann nicht zu senden, wenn der Benutzer von einer anderen Seite zur Ursprungsseite des Cookies navigiert. Dies ist nützlich, wenn Sie Cookies sofort senden möchten, sobald ein Benutzer von einer anderen Seite auf Ihre Seite navigiert, um die Erfahrung sofort zu personalisieren, sobald er dort ankommt.

Dies ist jedoch nicht sinnvoll, wenn Sie Site-übergreifende Inhalte über mehrere Sites hinweg innerhalb von `<iframe>`s einbetten und auf Third-party-Cookies für die Funktionalität angewiesen sind, zum Beispiel im Fall des oben betrachteten Anmeldebeispiels. In solchen Fällen müssen Sie `SameSite=None` explizit setzen, um dem Browser zu erlauben, diese Cookies zu übermitteln:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_. Im obigen Beispiel haben wir auch das `HttpOnly`-Attribut gesetzt, um den Zugriff von JavaScript auf das Cookie zu deaktivieren (z. B. über [`Document.cookie`](/de/docs/Web/API/Document/cookie)). Cookies, die sensible Informationen enthalten, sollten immer das `HttpOnly`-Attribut gesetzt haben — es wäre sehr unsicher, sie für JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)) Angriffe zu mildern.

> [!NOTE]
> Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](/de/docs/Web/HTTP/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

### Übergang von Third-party-Cookies

Es gibt mehrere Strategien, um Websites zu helfen, Brüche in Browsern zu minimieren, in denen Third-party-Cookies blockiert sind:

1. Überprüfen Sie Ihre Nutzung von Third-party-Cookies. Cookies müssen das `SameSite=None`-Attribut gesetzt haben, um in einem Site-übergreifenden Kontext verwendet zu werden. Sie können daher Third-party-Cookies identifizieren, indem Sie in Ihrem Code nach `SameSite=None` suchen oder gespeicherte `SameSite=None` Cookies in Ihren Browser-DevTools überprüfen, zum Beispiel im [Firefox Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Chromes [Probleme-Panel](https://developer.chrome.com/docs/devtools/issues/) meldet ebenfalls [Probleme mit der Blockierung von Third-party-Cookies](https://developers.google.com/privacy-sandbox/cookies/prepare/audit-cookies#chrome-dev-tools) zusammen mit einer Liste der betroffenen Cookies.
2. Testen Sie Ihre Funktionalität mit blockierten Third-party-Cookies, um zu sehen, was ausfällt. Sie könnten feststellen, dass einige Cookies nicht mehr benötigt werden.
3. Zumindest anfänglich könnten Sie Ihren Code robuster machen, sodass er eine weniger personalisierte Erfahrung bietet, wenn Third-party-Cookie-Daten nicht verfügbar sind, anstatt sie vollständig zu brechen. Folgen Sie den Prinzipien der [graceful degradation](/de/docs/Glossary/Graceful_degradation).
4. Sammeln Sie Daten über alternative Mittel wie Benutzerumfragen oder Quizze oder betrachten Sie vorhandene Daten, um Trends zu erkennen (zum Beispiel Produktbestellhistorien).
5. Verwenden Sie einen alternativen clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API), um Daten zu speichern, oder ziehen Sie eine Server-seitige Lösung in Betracht.
6. Wenn Ihre Third-party-Cookies nur über eine kleine Anzahl verwandter, bekannter Websites verwendet werden, könnten Sie die [Storage Access API](/de/docs/Web/API/Storage_Access_API) und/oder [Verwandte Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) verwenden, um den Zugriff auf Third-party-Cookies nur für diese spezifischen Sites zu ermöglichen. Der Storage Access fordert den Benutzer auf, einer Website die Erlaubnis zu geben, Third-party-Cookies pro Frame zu verwenden.
   - Wenn Sie bereits eine Lösung unter Verwendung der Storage Access API für Firefox oder Safari implementiert haben, ist dies ein guter Zeitpunkt, um Ihre Implementierung gegen das Verhalten von Chrome zu überprüfen, das in Version 119 voll unterstützt wurde.
   - Verwandte Website-Sets können als progressive Erweiterung der Storage Access API betrachtet werden: Die API kann auf genau die gleiche Weise verwendet werden, aber Websites im Set werden Benutzer nicht um Erlaubnis bitten, auf Third-party-Cookies zuzugreifen.
7. Wenn Ihre Third-party-Cookies auf einer 1:1-Basis mit den Top-Level-Websites verwendet werden, auf denen sie generiert werden, könnten Sie [Cookies mit unabhängigem partitioniertem Status](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) (CHIPS, alias partitionierte Cookies) verwenden, um Ihre Cookies in getrennten Cookiespeichers zu speichern, wobei ein separates Cookie-Glas pro Top-Level-Site erstellt wird. Dies erfordert nur das Hinzufügen des `partitioned`-Attributs zu Ihren vorhandenen Site-übergreifenden Cookies. Sie können dann uneingeschränkt verwendet werden, können jedoch nicht mit anderen Websites geteilt werden. Beachten Sie, dass CHIPS derzeit nur in Chromium verfügbar ist.

## Ersetzen von Third-party-Cookies

Mehrere Funktionen stehen Entwicklern zur Verfügung, die auf die Verwendung von Third-party-Cookies verzichten möchten, um die Privatsphäre der Benutzer zu respektieren und das Tracking zu minimieren, während sie dennoch verwandte Anwendungsfälle umsetzen können. Einige dieser Funktionen befinden sich in einem frühen experimentellen Stadium, aber sie sind es wert, in Betracht gezogen zu werden, wenn Sie beginnen, sich auf die Zukunft vorzubereiten.

Sie können damit beginnen, die verschiedenen in Googles [Privacy Sandbox](/de/docs/Web/Privacy/Privacy_sandbox) Projekt verfügbaren Funktionen zu erkunden, um zu sehen, ob sie zu Ihrem Anwendungsfall passen (diese sind derzeit experimentell und nur für Chromium verfügbar):

- [Federated Credential Management](/de/docs/Web/API/FedCM_API) (FedCM) API: Ermöglicht föderierte Identitätsdienste, die es Benutzern ermöglichen, sich bei mehreren Websites und Diensten anzumelden.
- [Private State Tokens](https://developers.google.com/privacy-sandbox/protections/private-state-tokens): Ermöglicht Anti-Betrug und Anti-Spam durch den Austausch begrenzter, nicht identifizierender Informationen zwischen Websites.
- [Topics API](/de/docs/Web/API/Topics_API): Ermöglicht interessenbasierte Werbung und Personalisierung von Inhalten.
- [Protected Audience API](https://developers.google.com/privacy-sandbox/private-advertising/protected-audience): Verwenden Sie Daten von einer App oder Website, um eine Anzeige auszuwählen, wenn der Benutzer eine andere App oder Website besucht.
- [Attribution Reporting API](https://developers.google.com/privacy-sandbox/private-advertising/attribution-reporting): Ermöglicht die Messung von Anzeigenimpressionen und Conversions.

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- [Datenschutz im Web](/de/docs/Web/Privacy)
