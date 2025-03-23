"use strict";
(self.webpackChunkConversationsAnywhere = self.webpackChunkConversationsAnywhere || []).push([[179], {
    3653: (Je, pe, I) => {
        I.d(pe, {
            E: () => a
        });
        class a {
            constructor() {
                this.apiUrl = "",
                this.ftpPath = "",
                this.enableDebug = !0,
                this.baseHref = "",
                this.siteUrl = "",
                this.GenesysClientID = "",
                this.GenesysHost = "",
                this.GenesysClientSecret = ""
            }
        }
    }
    ,
    3405: (Je, pe, I) => {
        I.d(pe, {
            Z: () => a
        });
        class a {
            constructor(oe) {
                this._router = oe
            }
            Route(oe) {
                this._router.navigate(["./" + oe])
            }
        }
    }
    ,
    3787: (Je, pe, I) => {
        I.d(pe, {
            y: () => a
        });
        let a = ( () => {
            class b {
                constructor(te) {
                    this.env = te,
                    this.domainName = this.env.apiUrl
                }
            }
            return b.login = "api/account/Login",
            b.expire = "api/account/Expire",
            b.signOut = "api/account/SignOut",
            b.isAdmin = "api/account/IsAdmin",
            b.GetCalls = "api/calls/get",
            b.getCallById = "api/calls/getById",
            b.exportCalls = "api/calls/exportCalls",
            b.exportCallsAsZip = "api/calls/exportCallsAsZip",
            b.GetSettings = "api/settings/get",
            b.EditSettings = "api/settings/update",
            b.ChangeServiceStatus = "api/settings/ChangeServiceStatus",
            b.delete = "api/settings/delete",
            b
        }
        )()
    }
    ,
    3089: (Je, pe, I) => {
        I.d(pe, {
            p: () => a
        });
        var a = ( () => {
            return (b = a || (a = {}))[b.success = 1] = "success",
            b[b.error = -1] = "error",
            b[b.exception = -2] = "exception",
            b[b.concurrentSession = -4] = "concurrentSession",
            b[b.forbidden = -403] = "forbidden",
            b[b.badGateway = -502] = "badGateway",
            b[b.unauthorized = -401] = "unauthorized",
            b[b.lDAPUser = -5] = "lDAPUser",
            a;
            var b
        }
        )()
    }
    ,
    303: (Je, pe, I) => {
        I.d(pe, {
            t: () => Oe
        });
        var a = I(1135)
          , b = I(262)
          , oe = I(4004)
          , te = I(529)
          , ie = I(3787)
          , be = I(8256)
          , Ce = I(3653);
        let Oe = ( () => {
            class Se {
                constructor(z, _e) {
                    this._http = z,
                    this.config = _e,
                    this._role = new a.X(""),
                    this.currentRole = this._role.asObservable()
                }
                checkUser(z) {
                    this._role.next(z)
                }
                get(z) {
                    return this._http.get(new ie.y(this.config).domainName + z).pipe((0,
                    b.K)(this.handleError))
                }
                post(z, _e) {
                    let xe = JSON.stringify(_e);
                    const ce = new te.WM({
                        "Content-Type": "application/json; charset=utf-8"
                    });
                    return this._http.post(new ie.y(this.config).domainName + z, xe, {
                        headers: ce
                    }).pipe((0,
                    b.K)(this.handleError))
                }
                postFiles(z, _e) {
                    const xe = new te.WM;
                    return this._http.post(new ie.y(this.config).domainName + z, _e, {
                        headers: xe
                    }).pipe((0,
                    b.K)(this.handleError))
                }
                postZipFile(z, _e) {
                    return this._http.post(new ie.y(this.config).domainName + z, _e, {
                        responseType: "blob"
                    }).pipe((0,
                    oe.U)(xe => xe))
                }
                handleError(z) {
                    console.log(z),
                    console.log("Error in HTTP Module")
                }
                downloadFile(z) {
                    return this._http.get(z, {
                        reportProgress: !0,
                        observe: "events",
                        responseType: "blob"
                    }).pipe((0,
                    oe.U)(_e => {
                        switch (_e.type) {
                        case te.dt.DownloadProgress:
                            return {
                                progress: Math.round(100 * _e.loaded / (_e.total || 1))
                            };
                        case te.dt.Response:
                            return {
                                progress: 100,
                                blob: _e.body
                            };
                        default:
                            return {
                                progress: 0
                            }
                        }
                    }
                    ))
                }
            }
            return Se.\u0275fac = function(z) {
                return new (z || Se)(be.LFG(te.eN),be.LFG(Ce.E))
            }
            ,
            Se.\u0275prov = be.Yz7({
                token: Se,
                factory: Se.\u0275fac,
                providedIn: "root"
            }),
            Se
        }
        )()
    }
    ,
    9651: (Je, pe, I) => {
        I.d(pe, {
            $: () => de
        });
        var a = I(1135)
          , b = I(4004)
          , oe = I(3787)
          , te = I(3089);
        class ie {
        }
        var be = I(8256)
          , Ce = I(303)
          , Oe = I(6123)
          , Se = I(3653);
        let de = ( () => {
            class z {
                constructor(xe, ce, Ne) {
                    this.router = ce,
                    this.config = Ne,
                    this.toggleUserPopup = new a.X(!1),
                    this.toggleUserPopup$ = this.toggleUserPopup.asObservable(),
                    this.currentUserSubject = new a.X(new ie),
                    this.currentUser = this.currentUserSubject.asObservable(),
                    this.currentUserSubject = localStorage.getItem("caCurrentUser") ? new a.X(JSON.parse(localStorage.getItem("caCurrentUser") || "{}")) : new a.X(null),
                    this._manager = xe
                }
                get currentUserValue() {
                    return this.currentUserSubject.value
                }
                updateSession(xe) {
                    localStorage.setItem("caCurrentUser", JSON.stringify(xe)),
                    this.currentUserSubject = new a.X(xe),
                    this.currentUserSubject.next(xe)
                }
                login(xe) {
                    return this._manager.post(oe.y.login, xe).pipe((0,
                    b.U)(ce => {
                        let Ne = ce;
                        return (Ne.status > 0 || Ne.status == te.p.concurrentSession) && null != Ne.resource && (Ne.resource.session = new Date,
                        Ne.status == te.p.concurrentSession && (Ne.resource.status = !1),
                        localStorage.setItem("caCurrentUser", JSON.stringify(Ne.resource)),
                        this.currentUserSubject.next(Ne.resource)),
                        Ne
                    }
                    ))
                }
                authenticate(xe) {
                    return this._manager.post(oe.y.login, xe).pipe((0,
                    b.U)(ce => ce))
                }
                isAdmin() {
                    return this._manager.get(oe.y.isAdmin).pipe((0,
                    b.U)(xe => xe))
                }
                logout(xe) {
                    this.clearServerSideToken()?.subscribe(ce => {
                        localStorage.removeItem("caCurrentUser"),
                        this.currentUserSubject.next(null),
                        this.router.navigate(["/login"])
                    }
                    )
                }
                clearOldSession() {
                    localStorage.removeItem("caCurrentUser"),
                    this.currentUserSubject.next(null),
                    this.router.navigate(["/login"])
                }
                chechkSession() {
                    const xe = new Date;
                    let ce = this.currentUserValue;
                    if (ce && !localStorage.getItem("caCurrentUser"))
                        return this.logout(),
                        !1;
                    if (null == ce || null == ce)
                        return this.logout(),
                        !1;
                    {
                        const Ne = ce.session;
                        if (null != Ne && null != Ne) {
                            const je = this.config.sessionExpiration;
                            if (new Date(new Date(Ne).getTime() + 6e4 * je) < xe)
                                return this.logout(),
                                !1
                        }
                    }
                    return !0
                }
                setSession(xe) {
                    return xe.session = new Date,
                    localStorage.setItem("caCurrentUser", JSON.stringify(xe)),
                    this.currentUserSubject.next(xe),
                    xe
                }
                clearOtherServerSideTokens() {
                    return null != this.currentUserValue ? this._manager.get(oe.y.expire).pipe((0,
                    b.U)(xe => xe)) : null
                }
                clearServerSideToken() {
                    return null != this.currentUserValue ? this._manager.get(oe.y.signOut).pipe((0,
                    b.U)(xe => xe)) : null
                }
            }
            return z.\u0275fac = function(xe) {
                return new (xe || z)(be.LFG(Ce.t),be.LFG(Oe.F0),be.LFG(Se.E))
            }
            ,
            z.\u0275prov = be.Yz7({
                token: z,
                factory: z.\u0275fac,
                providedIn: "root"
            }),
            z
        }
        )()
    }
    ,
    7092: (Je, pe, I) => {
        var a = I(1481)
          , b = I(8256)
          , oe = I(433)
          , te = I(6123)
          , ie = I(9651);
        let be = ( () => {
            class M {
                constructor(u, y) {
                    this._authenticateService = y,
                    this._router = u
                }
                canActivate(u, y) {
                    if ("1" === localStorage.getItem("ca2022"))
                        return this._router.navigate(["/license"]);
                    let T = this._authenticateService.currentUserValue;
                    return y.url.includes("/ConversationsAnywhere") || y.url.includes("/notfound") || y.url.includes("/license") ? ((y.url.includes("/ConversationsAnywhere") || y.url.includes("/license")) && this._authenticateService.logout(y.url),
                    !0) : T ? 0 === u.url.length : this._router.navigate(["/login"])
                }
            }
            return M.\u0275fac = function(u) {
                return new (u || M)(b.LFG(te.F0),b.LFG(ie.$))
            }
            ,
            M.\u0275prov = b.Yz7({
                token: M,
                factory: M.\u0275fac,
                providedIn: "root"
            }),
            M
        }
        )();
        var Ce = I(3405);
        let Oe = ( () => {
            class M {
                constructor(u, y) {
                    this._authenticateService = y,
                    this._router = u
                }
                canActivate(u, y) {
                    return "1" === localStorage.getItem("ca2022") ? (this._router.navigate(["/license"]),
                    !1) : !this._authenticateService.currentUserValue || (new Ce.Z(this._router).Route("calls"),
                    !1)
                }
            }
            return M.\u0275fac = function(u) {
                return new (u || M)(b.LFG(te.F0),b.LFG(ie.$))
            }
            ,
            M.\u0275prov = b.Yz7({
                token: M,
                factory: M.\u0275fac,
                providedIn: "root"
            }),
            M
        }
        )()
          , Se = ( () => {
            class M {
                constructor(u, y) {
                    this.authenticationService = u,
                    this.router = y
                }
                ngOnInit() {}
                expireAllSessions() {
                    this.authenticationService.clearOtherServerSideTokens()?.subscribe(u => {
                        if (u.status > 0) {
                            let y = new Ce.Z(this.router);
                            this.authenticationService.currentUserValue.status = !0,
                            this.authenticationService.updateSession(this.authenticationService.currentUserValue),
                            y.Route("calls")
                        }
                    }
                    )
                }
                logout() {
                    this.authenticationService.logout()
                }
            }
            return M.\u0275fac = function(u) {
                return new (u || M)(b.Y36(ie.$),b.Y36(te.F0))
            }
            ,
            M.\u0275cmp = b.Xpm({
                type: M,
                selectors: [["app-concurrent-sessions"]],
                decls: 24,
                vars: 0,
                consts: [[1, "navbar", "navbar-expand-sm", "navbar-toggleable-sm", "navbar-light", "bg-dark"], ["routerLink", "/login", "routerLinkActive", "active", 1, "px", 2, "cursor", "pointer"], [1, "navbar-brand"], ["src", "assets/images/logo-4.png", 1, "atsiLogo"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "body"], [1, "login-page"], [1, "container", "pb-1"], [1, "p-3"], [1, "row"], [1, "col-12", "d-flex", "justify-content-center", "mt-4"], ["title", "Continue", 1, "btn", 3, "click"], ["title", "Cancel", 1, "btn", 3, "click"], [1, "row", "footer-row"], [1, "col-12"], [1, "border-top", "footer", "text-muted", "bg-white"], [1, "px-4"]],
                template: function(u, y) {
                    1 & u && (b.TgZ(0, "div")(1, "nav", 0)(2, "div", 1)(3, "a", 2),
                    b._UZ(4, "img", 3),
                    b.qZA(),
                    b.TgZ(5, "button", 4),
                    b._UZ(6, "span", 5),
                    b.qZA()()(),
                    b.TgZ(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "p", 9),
                    b._uU(11, " This user is logged-in from a different environment. If you continue, the other session will be terminated! "),
                    b.TgZ(12, "span")(13, "div", 10)(14, "div", 11)(15, "button", 12),
                    b.NdJ("click", function() {
                        return y.expireAllSessions()
                    }),
                    b._uU(16, "Continue"),
                    b.qZA(),
                    b.TgZ(17, "button", 13),
                    b.NdJ("click", function() {
                        return y.logout()
                    }),
                    b._uU(18, "Cancel"),
                    b.qZA()()()()()()()(),
                    b.TgZ(19, "div", 14)(20, "div", 15)(21, "footer", 16)(22, "div", 17),
                    b._uU(23, " \xa9 2022 - Conversations Anywhere "),
                    b.qZA()()()()())
                },
                dependencies: [te.rH, te.Od],
                styles: ['.body[_ngcontent-%COMP%], html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{margin:0;padding:0;overflow-x:hidden;font-family:Open Sans,Nunito,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"!important;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#e5e9ec!important;height:calc(100vh - 120px)}.login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{background:#fff;border:1px solid #ccc;box-shadow:6px 6px #0000001a;margin-bottom:35px;margin-top:10%;padding:30px;width:70%;text-align:center}.login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%]{text-align:center;color:red;font-size:25px}.login-page[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.footer[_ngcontent-%COMP%]{width:100%;white-space:nowrap;line-height:60px}.text-muted[_ngcontent-%COMP%]{color:#6c757d!important}.border-top[_ngcontent-%COMP%]{border-top:1px solid #dee2e6!important}.btn[_ngcontent-%COMP%]{color:#fff!important;background-color:#343a40!important;margin:3px;width:90px;font-size:15px;padding:5px;cursor:pointer}.btn[_ngcontent-%COMP%]:hover{background-color:#0d6efd!important}.atsiLogo[_ngcontent-%COMP%]{width:35px}.navbar-brand[_ngcontent-%COMP%]{padding-left:16px}.navbar[_ngcontent-%COMP%]{height:56px}']
            }),
            M
        }
        )();
        var de = I(529)
          , z = I(3089)
          , _e = I(3653)
          , xe = I(7185)
          , ce = I(6895);
        function Ne(M, l) {
            1 & M && b._UZ(0, "i", 11)
        }
        let je = ( () => {
            class M {
                constructor(u, y, T, N) {
                    this.config = u,
                    this.authenticateService = y,
                    this.router = T,
                    this.toastr = N,
                    this.disabled = !1
                }
                ngOnInit() {
                    this.disabled = !0;
                    var u = this.getParamValueQueryString("code");
                    null != u && "" != u ? this.authenticateService.login({
                        code: u,
                        genesysHost: this.config.GenesysHost,
                        genesysClientID: this.config.GenesysClientID,
                        genesysClientSecret: this.config.GenesysClientSecret,
                        siteURL: this.config.siteUrl
                    }).pipe().subscribe(T => {
                        let N = new Ce.Z(this.router);
                        T.status > 0 ? N.Route("calls") : T.status === z.p.error && this.toastr.error(T.message, "Error"),
                        this.disabled = !1
                    }
                    ) : this.disabled = !1
                }
                getParamValueQueryString(u) {
                    const y = window.location.href;
                    let T;
                    return y.includes("?") && (T = new de.LE({
                        fromString: y.split("?")[1]
                    }).get(u)),
                    T
                }
                goToGenesys() {
                    this.disabled = !0,
                    window.location.href = "https://login." + this.config.GenesysHost + "/oauth/authorize?client_id=" + this.config.GenesysClientID + "&response_type=code"
                }
            }
            return M.\u0275fac = function(u) {
                return new (u || M)(b.Y36(_e.E),b.Y36(ie.$),b.Y36(te.F0),b.Y36(xe._W))
            }
            ,
            M.\u0275cmp = b.Xpm({
                type: M,
                selectors: [["app-login"]],
                decls: 18,
                vars: 2,
                consts: [[1, "sidenav"], [1, "login-main-text"], ["src", "./assets/images/logo-4.png"], [1, "main"], [1, "form-group", "col-md-6", "col-sm-12"], [1, "login-form"], [1, "form-group"], ["src", "./assets/images/genesys-redAdaptiveGLogo.png", 2, "height", "60px"], ["type", "submit", 1, "btn", "btn-custom", "buttonload", 2, "width", "296px", "position", "relative", "margin-top", "15px", 3, "disabled", "click"], ["class", "fa fa-spinner fa-spin spiner", 4, "ngIf"], ["src", "./assets/images/genesys-Logo.png", 2, "max-height", "25px", "transform", "translate(-8px, 0px)"], [1, "fa", "fa-spinner", "fa-spin", "spiner"]],
                template: function(u, y) {
                    1 & u && (b.TgZ(0, "div", 0)(1, "div", 1),
                    b._UZ(2, "img", 2),
                    b.TgZ(3, "h2"),
                    b._uU(4, "Conversations Anywhere"),
                    b._UZ(5, "br"),
                    b._uU(6, " Login Page"),
                    b.qZA(),
                    b.TgZ(7, "p"),
                    b._uU(8, "Login from here to access Conversations Anywhere."),
                    b.qZA()()(),
                    b.TgZ(9, "div", 3)(10, "div", 4)(11, "div", 5)(12, "div", 6),
                    b._UZ(13, "img", 7),
                    b.qZA(),
                    b.TgZ(14, "button", 8),
                    b.NdJ("click", function() {
                        return y.goToGenesys()
                    }),
                    b.YNc(15, Ne, 1, 0, "i", 9),
                    b._UZ(16, "img", 10),
                    b._uU(17, " Login Using Genesys "),
                    b.qZA()()()()),
                    2 & u && (b.xp6(14),
                    b.Q6J("disabled", y.disabled),
                    b.xp6(1),
                    b.Q6J("ngIf", y.disabled))
                },
                dependencies: [ce.O5],
                styles: ["body[_ngcontent-%COMP%]{font-size:13px;margin:0;padding:0;overflow-x:hidden}a.navbar-brand[_ngcontent-%COMP%]{white-space:normal;text-align:center;word-break:break-all}.navbar-brand[_ngcontent-%COMP%]{color:#fff!important}a[_ngcontent-%COMP%]{color:#0366d6}.btn-primary[_ngcontent-%COMP%]{color:#fff;background-color:#1b6ec2;border-color:#1861ac}.btn[_ngcontent-%COMP%]{font-size:13px}.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%]{color:#fff;background-color:#1b6ec2;border-color:#1861ac}.grid[_ngcontent-%COMP%]{overflow:auto;table-layout:auto;border-collapse:collapse;width:100%;border:1px solid #ccc}.grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{min-width:150px}.grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ccc}.grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   th[_ngcontent-%COMP%]{border-bottom:2px solid #1b6ec2}.grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{max-height:25px}.grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:2px 3px}.grid[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f8f8f8}a[_ngcontent-%COMP%]:hover{text-decoration:none}.grid[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child{width:1%;white-space:nowrap}.grid[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#deeaff}.grid[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.select-row[_ngcontent-%COMP%]{cursor:pointer;background-color:#ddd}.td-icon[_ngcontent-%COMP%]{min-width:35px!important;max-width:35px;text-align:center}.td-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:20px}.form-control[_ngcontent-%COMP%]{font-size:12px;padding:5px;height:30px;border:2px solid #ced4da;width:100%}.form-control[_ngcontent-%COMP%]:focus{border-color:#bbb;box-shadow:0 0 0 .2rem #ddd}html[_ngcontent-%COMP%]{font-size:14px}@media (min-width: 768px){html[_ngcontent-%COMP%]{font-size:16px}}.border-top[_ngcontent-%COMP%]{border-top:1px solid #e5e5e5}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #e5e5e5}.box-shadow[_ngcontent-%COMP%]{box-shadow:0 .25rem .75rem #0000000d}button.accept-policy[_ngcontent-%COMP%]{font-size:1rem;line-height:inherit}html[_ngcontent-%COMP%]{position:relative;min-height:100%}body[_ngcontent-%COMP%]{margin-bottom:60px}.footer[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;white-space:nowrap;line-height:60px}body[_ngcontent-%COMP%]{font-family:Lato,sans-serif}.main-head[_ngcontent-%COMP%]{height:150px;background:#FFF}.sidenav[_ngcontent-%COMP%]{height:100%;background-color:#343a40;overflow-x:hidden;padding-top:20px}.main[_ngcontent-%COMP%]{padding:0 10px}@media screen and (max-height: 450px){.sidenav[_ngcontent-%COMP%]{padding-top:15px}}@media screen and (max-width: 450px){.login-form[_ngcontent-%COMP%], .register-form[_ngcontent-%COMP%]{margin-top:10%}}@media screen and (min-width: 768px){.main[_ngcontent-%COMP%]{margin-left:40%}.sidenav[_ngcontent-%COMP%]{width:40%;position:fixed;z-index:1;top:0;left:0}.login-form[_ngcontent-%COMP%]{margin-top:80%}.register-form[_ngcontent-%COMP%]{margin-top:20%}}.login-main-text[_ngcontent-%COMP%]{margin-top:20%;padding:60px;color:#fff}.login-main-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:300}.btn-black[_ngcontent-%COMP%]{background-color:#000!important;color:#fff}.btn-custom[_ngcontent-%COMP%]{color:#fff!important;background-color:#343a40!important}.audio-custom[_ngcontent-%COMP%]{max-height:28px;width:100%}.audio-custom[_ngcontent-%COMP%]:focus{outline:none}.audioPlayer[_ngcontent-%COMP%]{position:absolute;bottom:60px;width:100%;padding:0 5px}.setting[_ngcontent-%COMP%]{position:absolute;right:50px}.setting[_ngcontent-%COMP%]   .admin-name[_ngcontent-%COMP%]{color:#fff;font-size:14px!important}.setting[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{position:absolute;transform:translate3d(-35px,27px,0);top:24px!important;left:0px;will-change:transform;padding:0}.setting[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:0!important;cursor:pointer!important}.setting[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active{color:#333}.setting[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{border:none}#dropdownMenuButton[_ngcontent-%COMP%]:hover{text-decoration:none}.dropdown-item[_ngcontent-%COMP%]:active{background-color:transparent}.links[_ngcontent-%COMP%], .links[_ngcontent-%COMP%]:hover{color:#333;padding:9px 16px;font-size:13px;display:block}input[type=password][_ngcontent-%COMP%]::-ms-reveal, input[type=password][_ngcontent-%COMP%]::-ms-clear{display:none}.fa-2x[_ngcontent-%COMP%]{font-size:14px}.main-menu[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:relative;display:table-cell!important;width:60px!important;text-align:center;vertical-align:middle!important;font-size:22px!important}.main-menu[_ngcontent-%COMP%]{border-right:1px solid #e5e5e5;max-height:calc(100vh - 116px);min-height:calc(100vh - 116px);overflow-x:hidden;overflow-y:auto;width:60px;overflow:hidden;transition:width .05s linear;z-index:1000}.main-menu[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{margin:7px 0}.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;display:block;width:250px}.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{position:relative;display:table;border-collapse:collapse;border-spacing:0;color:#999;font-family:arial;font-size:14px;text-decoration:none;transition:all .1s linear}.main-menu[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{position:relative;display:table-cell;width:60px;height:36px;text-align:center;vertical-align:middle;font-size:18px}.main-menu[_ngcontent-%COMP%]   .nav-text[_ngcontent-%COMP%]{position:relative;display:table-cell;vertical-align:middle;width:190px;font-family:Titillium Web,sans-serif}.main-menu[_ngcontent-%COMP%] > ul.logout[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0}.no-touch[_ngcontent-%COMP%]   .scrollable.hover[_ngcontent-%COMP%]{overflow-y:hidden}.no-touch[_ngcontent-%COMP%]   .scrollable.hover[_ngcontent-%COMP%]:hover{overflow-y:auto;overflow:visible}a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus{text-decoration:none}nav[_ngcontent-%COMP%]{-webkit-user-select:none;-o-user-select:none;user-select:none}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{outline:0;margin:0;padding:0}.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:8px 0}.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%], nav.main-menu[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .dropdown-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .dropdown-menu[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .dropdown-menu[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .dropdown-menu[_ngcontent-%COMP%] > .active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .no-touch[_ngcontent-%COMP%]   .dashboard-page[_ngcontent-%COMP%]   nav.dashboard-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], .dashboard-page[_ngcontent-%COMP%]   nav.dashboard-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.area[_ngcontent-%COMP%]{float:left;background:#e2e2e2;width:100%;height:100%}.lblCheck-Radio[_ngcontent-%COMP%]{transform:translateY(-3px);margin-right:5px}.fixed-table[_ngcontent-%COMP%]{overflow-y:auto;max-height:calc(100vh - 235px);width:100%}.fixed-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{text-align:left;top:-1px;position:sticky;z-index:998;vertical-align:middle;background:#fff}.fixed-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{top:20px;position:sticky!important;z-index:99;position:relative;background:#fff}.fixed-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .td-icon[_ngcontent-%COMP%]{text-align:center}.fixed-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{min-width:130px}.fixed-table[_ngcontent-%COMP%]::-webkit-scrollbar{height:5px;width:5px}.fixed-table[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#1b6ec2}.fixed-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.mw-3[_ngcontent-%COMP%]{min-width:300px}.fixed-table[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%]{padding:3px 5px}.atsiLogo[_ngcontent-%COMP%]{width:30px}.user-img[_ngcontent-%COMP%]{width:40px;height:36px;position:relative;cursor:pointer;text-align:center;vertical-align:middle;display:table-cell;margin-left:9px}.user-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.user-info[_ngcontent-%COMP%]{background-color:#fff;box-shadow:2px 2px 10px gray;position:absolute;top:57px;left:58px;background:#fff;z-index:9;border-radius:5px}a[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]{visibility:hidden;width:120px;background-color:#000;color:#fff;text-align:center;border-radius:6px;padding:5px 0;position:absolute;z-index:1}a[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%]{visibility:visible}.table-filter[_ngcontent-%COMP%]{padding:2px!important}.table-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{box-shadow:none!important}.table-filter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{height:25px;font-size:13px;width:100%!important}.tabel-date[_ngcontent-%COMP%]{min-width:175px}.grid-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;position:relative;background:#f8f8f8}.next-prev[_ngcontent-%COMP%]{font-size:20px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.no-of-record[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:0}p[_ngcontent-%COMP%]{margin:0!important}.buttonload[_ngcontent-%COMP%]{background-color:#04aa6d;border:none;color:#fff;padding:12px 16px;font-size:16px}.spiner[_ngcontent-%COMP%]{font-size:26px;position:absolute;display:flex;padding-top:1px}"]
            }),
            M
        }
        )();
        const it = [{
            path: "",
            component: je,
            canActivate: [Oe]
        }, {
            path: "login",
            component: je,
            canActivate: [Oe]
        }, {
            path: "confirmation",
            component: Se
        }, {
            path: "",
            loadChildren: () => I.e(199).then(I.bind(I, 5199)).then(M => M.FrontModule),
            canActivate: [be]
        }, {
            path: "**",
            component: ( () => {
                class M {
                    constructor(u) {
                        this.router = u
                    }
                    ngOnInit() {}
                    goToMain() {
                        new Ce.Z(this.router).Route("calls")
                    }
                }
                return M.\u0275fac = function(u) {
                    return new (u || M)(b.Y36(te.F0))
                }
                ,
                M.\u0275cmp = b.Xpm({
                    type: M,
                    selectors: [["app-notfound"]],
                    decls: 24,
                    vars: 0,
                    consts: [["id", "background"], [1, "top"], [1, "container"], [1, "ghost-copy"], [1, "one"], [1, "two"], [1, "three"], [1, "four"], [1, "ghost"], [1, "face"], [1, "eye"], [1, "eye-right"], [1, "mouth"], [1, "shadow"], [1, "bottom"], [1, "buttons"], [1, "btn", 3, "click"]],
                    template: function(u, y) {
                        1 & u && (b._UZ(0, "div", 0),
                        b.TgZ(1, "div", 1)(2, "h1"),
                        b._uU(3, "404"),
                        b.qZA(),
                        b.TgZ(4, "h3"),
                        b._uU(5, "page not found"),
                        b.qZA()(),
                        b.TgZ(6, "div", 2)(7, "div", 3),
                        b._UZ(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7),
                        b.qZA(),
                        b.TgZ(12, "div", 8)(13, "div", 9),
                        b._UZ(14, "div", 10)(15, "div", 11)(16, "div", 12),
                        b.qZA()(),
                        b._UZ(17, "div", 13),
                        b.qZA(),
                        b.TgZ(18, "div", 14)(19, "p"),
                        b._uU(20, "Boo, looks like a ghost stole this page!"),
                        b.qZA(),
                        b.TgZ(21, "div", 15)(22, "button", 16),
                        b.NdJ("click", function() {
                            return y.goToMain()
                        }),
                        b._uU(23, "Home"),
                        b.qZA()()())
                    },
                    styles: ["body[_ngcontent-%COMP%]{background:#D3DEEA}.top[_ngcontent-%COMP%]{margin-top:30px}.container[_ngcontent-%COMP%]{margin:-40px auto 0;position:relative;width:250px;height:250px}.ghost[_ngcontent-%COMP%]{width:50%;height:53%;left:25%;top:10%;position:absolute;border-radius:50% 50% 0 0;background:#EDEDED;border:1px solid #BFC0C0;border-bottom:none;animation:float 2s ease-out infinite}.ghost-copy[_ngcontent-%COMP%]{width:50%;height:53%;left:25%;top:10%;position:absolute;border-radius:50% 50% 0 0;background:#EDEDED;border:1px solid #BFC0C0;border-bottom:none;animation:float 2s ease-out infinite;z-index:0}.face[_ngcontent-%COMP%]{position:absolute;width:100%;height:60%;top:20%}.eye[_ngcontent-%COMP%], .eye-right[_ngcontent-%COMP%]{position:absolute;background:#585959;width:13px;height:13px;border-radius:50%;top:40%}.eye[_ngcontent-%COMP%]{left:25%}.eye-right[_ngcontent-%COMP%]{right:25%}.mouth[_ngcontent-%COMP%]{position:absolute;top:50%;left:45%;width:10px;height:10px;border:3px solid;border-radius:50%;border-color:transparent #585959 #585959 transparent;transform:rotate(45deg)}.one[_ngcontent-%COMP%], .two[_ngcontent-%COMP%], .three[_ngcontent-%COMP%], .four[_ngcontent-%COMP%]{position:absolute;background:#EDEDED;top:85%;width:25%;height:23%;border:1px solid #BFC0C0;z-index:0}.one[_ngcontent-%COMP%]{border-radius:0 0 100% 30%;left:-1px}.two[_ngcontent-%COMP%]{left:23%;border-radius:0 0 50% 50%}.three[_ngcontent-%COMP%]{left:50%;border-radius:0 0 50% 50%}.four[_ngcontent-%COMP%]{left:74.5%;border-radius:0 0 30% 100%}.shadow[_ngcontent-%COMP%]{position:absolute;width:30%;height:7%;background:#BFC0C0;left:35%;top:80%;border-radius:50%;animation:scale 2s infinite}@keyframes scale{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}@keyframes float{50%{transform:translateY(15px)}}.bottom[_ngcontent-%COMP%]{margin-top:10px}h1[_ngcontent-%COMP%]{font-family:Abril Fatface,serif;color:#ededed;text-align:center;font-size:9em;margin:0;text-shadow:-1px 0 #BFC0C0,0 1px #BFC0C0,1px 0 #BFC0C0,0 -1px #BFC0C0}h3[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-size:2em;text-transform:uppercase;text-align:center;color:#bfc0c0;margin-top:-20px;font-weight:900}p[_ngcontent-%COMP%]{text-align:center;font-family:Lato,sans-serif;color:#585959;font-size:1em;margin-top:-20px;text-transform:uppercase}.search[_ngcontent-%COMP%]{text-align:center}.buttons[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-top:10px}.btn[_ngcontent-%COMP%]{background:#EDEDED;padding:15px 20px;margin:5px;color:#585959;font-family:Lato,sans-serif;text-transform:uppercase;font-size:.8em;font-weight:700;letter-spacing:1px;border:0}.btn[_ngcontent-%COMP%]:hover{background:#BFC0C0;transition:all .4s ease-out}footer[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;text-align:center;font-size:.8em;text-transform:uppercase;padding:10px;color:#ea7996;letter-spacing:3px;font-family:Lato,sans-serif}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#7d7d7d}"]
                }),
                M
            }
            )()
        }];
        let Mt = ( () => {
            class M {
            }
            return M.\u0275fac = function(u) {
                return new (u || M)
            }
            ,
            M.\u0275mod = b.oAB({
                type: M
            }),
            M.\u0275inj = b.cJS({
                imports: [te.Bz.forRoot(it), te.Bz]
            }),
            M
        }
        )()
          , Be = ( () => {
            class M {
                constructor() {
                    this.title = "ConversationsAnywhere"
                }
            }
            return M.\u0275fac = function(u) {
                return new (u || M)
            }
            ,
            M.\u0275cmp = b.Xpm({
                type: M,
                selectors: [["app-root"]],
                decls: 1,
                vars: 0,
                template: function(u, y) {
                    1 & u && b._UZ(0, "router-outlet")
                },
                dependencies: [te.lC]
            }),
            M
        }
        )();
        var fe = I(7340);
        function le(M) {
            return new b.vHH(3e3,!1)
        }
        function Gr() {
            return typeof window < "u" && typeof window.document < "u"
        }
        function ee() {
            return typeof process < "u" && "[object process]" === {}.toString.call(process)
        }
        function B(M) {
            switch (M.length) {
            case 0:
                return new fe.ZN;
            case 1:
                return M[0];
            default:
                return new fe.ZE(M)
            }
        }
        function k(M, l, u, y, T=new Map, N=new Map) {
            const U = []
              , j = [];
            let re = -1
              , ve = null;
            if (y.forEach(Ke => {
                const tt = Ke.get("offset")
                  , xt = tt == re
                  , It = xt && ve || new Map;
                Ke.forEach( (yt, vt) => {
                    let Ht = vt
                      , Qt = yt;
                    if ("offset" !== vt)
                        switch (Ht = l.normalizePropertyName(Ht, U),
                        Qt) {
                        case fe.k1:
                            Qt = T.get(vt);
                            break;
                        case fe.l3:
                            Qt = N.get(vt);
                            break;
                        default:
                            Qt = l.normalizeStyleValue(vt, Ht, Qt, U)
                        }
                    It.set(Ht, Qt)
                }
                ),
                xt || j.push(It),
                ve = It,
                re = tt
            }
            ),
            U.length)
                throw function Vn(M) {
                    return new b.vHH(3502,!1)
                }();
            return j
        }
        function se(M, l, u, y) {
            switch (l) {
            case "start":
                M.onStart( () => y(u && Ae(u, "start", M)));
                break;
            case "done":
                M.onDone( () => y(u && Ae(u, "done", M)));
                break;
            case "destroy":
                M.onDestroy( () => y(u && Ae(u, "destroy", M)))
            }
        }
        function Ae(M, l, u) {
            const N = rt(M.element, M.triggerName, M.fromState, M.toState, l || M.phaseName, u.totalTime ?? M.totalTime, !!u.disabled)
              , U = M._data;
            return null != U && (N._data = U),
            N
        }
        function rt(M, l, u, y, T="", N=0, U) {
            return {
                element: M,
                triggerName: l,
                fromState: u,
                toState: y,
                phaseName: T,
                totalTime: N,
                disabled: !!U
            }
        }
        function Re(M, l, u) {
            let y = M.get(l);
            return y || M.set(l, y = u),
            y
        }
        function dt(M) {
            const l = M.indexOf(":");
            return [M.substring(1, l), M.slice(l + 1)]
        }
        let ut = (M, l) => !1
          , qt = (M, l, u) => []
          , wt = null;
        function At(M) {
            const l = M.parentNode || M.host;
            return l === wt ? null : l
        }
        (ee() || typeof Element < "u") && (Gr() ? (wt = ( () => document.documentElement)(),
        ut = (M, l) => {
            for (; l; ) {
                if (l === M)
                    return !0;
                l = At(l)
            }
            return !1
        }
        ) : ut = (M, l) => M.contains(l),
        qt = (M, l, u) => {
            if (u)
                return Array.from(M.querySelectorAll(l));
            const y = M.querySelector(l);
            return y ? [y] : []
        }
        );
        let Et = null
          , gt = !1;
        const Un = ut
          , Xt = qt;
        let ar = ( () => {
            class M {
                validateStyleProperty(u) {
                    return function Hn(M) {
                        Et || (Et = function sr() {
                            return typeof document < "u" ? document.body : null
                        }() || {},
                        gt = !!Et.style && "WebkitAppearance"in Et.style);
                        let l = !0;
                        return Et.style && !function Jt(M) {
                            return "ebkit" == M.substring(1, 6)
                        }(M) && (l = M in Et.style,
                        !l && gt && (l = "Webkit" + M.charAt(0).toUpperCase() + M.slice(1)in Et.style)),
                        l
                    }(u)
                }
                matchesElement(u, y) {
                    return !1
                }
                containsElement(u, y) {
                    return Un(u, y)
                }
                getParentElement(u) {
                    return At(u)
                }
                query(u, y, T) {
                    return Xt(u, y, T)
                }
                computeStyle(u, y, T) {
                    return T || ""
                }
                animate(u, y, T, N, U, j=[], re) {
                    return new fe.ZN(T,N)
                }
            }
            return M.\u0275fac = function(u) {
                return new (u || M)
            }
            ,
            M.\u0275prov = b.Yz7({
                token: M,
                factory: M.\u0275fac
            }),
            M
        }
        )()
          , Wn = ( () => {
            class M {
            }
            return M.NOOP = new ar,
            M
        }
        )();
        const Ir = "ng-enter"
          , Kn = "ng-leave"
          , vr = "ng-trigger"
          , Xn = ".ng-trigger"
          , er = "ng-animating"
          , W = ".ng-animating";
        function H(M) {
            if ("number" == typeof M)
                return M;
            const l = M.match(/^(-?[\.\d]+)(m?s)/);
            return !l || l.length < 2 ? 0 : L(parseFloat(l[1]), l[2])
        }
        function L(M, l) {
            return "s" === l ? 1e3 * M : M
        }
        function Y(M, l, u) {
            return M.hasOwnProperty("duration") ? M : function Ee(M, l, u) {
                let T, N = 0, U = "";
                if ("string" == typeof M) {
                    const j = M.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
                    if (null === j)
                        return l.push(le()),
                        {
                            duration: 0,
                            delay: 0,
                            easing: ""
                        };
                    T = L(parseFloat(j[1]), j[2]);
                    const re = j[3];
                    null != re && (N = L(parseFloat(re), j[4]));
                    const ve = j[5];
                    ve && (U = ve)
                } else
                    T = M;
                if (!u) {
                    let j = !1
                      , re = l.length;
                    T < 0 && (l.push(function ot() {
                        return new b.vHH(3100,!1)
                    }()),
                    j = !0),
                    N < 0 && (l.push(function ye() {
                        return new b.vHH(3101,!1)
                    }()),
                    j = !0),
                    j && l.splice(re, 0, le())
                }
                return {
                    duration: T,
                    delay: N,
                    easing: U
                }
            }(M, l, u)
        }
        function me(M, l={}) {
            return Object.keys(M).forEach(u => {
                l[u] = M[u]
            }
            ),
            l
        }
        function He(M) {
            const l = new Map;
            return Object.keys(M).forEach(u => {
                l.set(u, M[u])
            }
            ),
            l
        }
        function sn(M, l=new Map, u) {
            if (u)
                for (let[y,T] of u)
                    l.set(y, T);
            for (let[y,T] of M)
                l.set(y, T);
            return l
        }
        function $t(M, l, u) {
            return u ? l + ":" + u + ";" : ""
        }
        function wn(M) {
            let l = "";
            for (let u = 0; u < M.style.length; u++) {
                const y = M.style.item(u);
                l += $t(0, y, M.style.getPropertyValue(y))
            }
            for (const u in M.style)
                M.style.hasOwnProperty(u) && !u.startsWith("_") && (l += $t(0, lr(u), M.style[u]));
            M.setAttribute("style", l)
        }
        function Ft(M, l, u) {
            M.style && (l.forEach( (y, T) => {
                const N = nr(T);
                u && !u.has(T) && u.set(T, M.style[N]),
                M.style[N] = y
            }
            ),
            ee() && wn(M))
        }
        function $n(M, l) {
            M.style && (l.forEach( (u, y) => {
                const T = nr(y);
                M.style[T] = ""
            }
            ),
            ee() && wn(M))
        }
        function In(M) {
            return Array.isArray(M) ? 1 == M.length ? M[0] : (0,
            fe.vP)(M) : M
        }
        const _r = new RegExp("{{\\s*(.+?)\\s*}}","g");
        function Pr(M) {
            let l = [];
            if ("string" == typeof M) {
                let u;
                for (; u = _r.exec(M); )
                    l.push(u[1]);
                _r.lastIndex = 0
            }
            return l
        }
        function oi(M, l, u) {
            const y = M.toString()
              , T = y.replace(_r, (N, U) => {
                let j = l[U];
                return null == j && (u.push(function $e(M) {
                    return new b.vHH(3003,!1)
                }()),
                j = ""),
                j.toString()
            }
            );
            return T == y ? M : T
        }
        function tr(M) {
            const l = [];
            let u = M.next();
            for (; !u.done; )
                l.push(u.value),
                u = M.next();
            return l
        }
        const un = /-+([a-z0-9])/g;
        function nr(M) {
            return M.replace(un, (...l) => l[1].toUpperCase())
        }
        function lr(M) {
            return M.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }
        function gn(M, l, u) {
            switch (l.type) {
            case 7:
                return M.visitTrigger(l, u);
            case 0:
                return M.visitState(l, u);
            case 1:
                return M.visitTransition(l, u);
            case 2:
                return M.visitSequence(l, u);
            case 3:
                return M.visitGroup(l, u);
            case 4:
                return M.visitAnimate(l, u);
            case 5:
                return M.visitKeyframes(l, u);
            case 6:
                return M.visitStyle(l, u);
            case 8:
                return M.visitReference(l, u);
            case 9:
                return M.visitAnimateChild(l, u);
            case 10:
                return M.visitAnimateRef(l, u);
            case 11:
                return M.visitQuery(l, u);
            case 12:
                return M.visitStagger(l, u);
            default:
                throw function Z(M) {
                    return new b.vHH(3004,!1)
                }()
            }
        }
        function Vt(M, l) {
            return window.getComputedStyle(M)[l]
        }
        function Eo(M, l) {
            const u = [];
            return "string" == typeof M ? M.split(/\s*,\s*/).forEach(y => function bn(M, l, u) {
                if (":" == M[0]) {
                    const re = function rr(M, l) {
                        switch (M) {
                        case ":enter":
                            return "void => *";
                        case ":leave":
                            return "* => void";
                        case ":increment":
                            return (u, y) => parseFloat(y) > parseFloat(u);
                        case ":decrement":
                            return (u, y) => parseFloat(y) < parseFloat(u);
                        default:
                            return l.push(function q(M) {
                                return new b.vHH(3016,!1)
                            }()),
                            "* => *"
                        }
                    }(M, u);
                    if ("function" == typeof re)
                        return void l.push(re);
                    M = re
                }
                const y = M.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                if (null == y || y.length < 4)
                    return u.push(function Q(M) {
                        return new b.vHH(3015,!1)
                    }()),
                    l;
                const T = y[1]
                  , N = y[2]
                  , U = y[3];
                l.push(bi(T, U));
                "<" == N[0] && !("*" == T && "*" == U) && l.push(bi(U, T))
            }(y, u, l)) : u.push(M),
            u
        }
        const Wr = new Set(["true", "1"])
          , Nr = new Set(["false", "0"]);
        function bi(M, l) {
            const u = Wr.has(M) || Nr.has(M)
              , y = Wr.has(l) || Nr.has(l);
            return (T, N) => {
                let U = "*" == M || M == T
                  , j = "*" == l || l == N;
                return !U && u && "boolean" == typeof T && (U = T ? Wr.has(M) : Nr.has(M)),
                !j && y && "boolean" == typeof N && (j = N ? Wr.has(l) : Nr.has(l)),
                U && j
            }
        }
        const ji = new RegExp("s*:selfs*,?","g");
        function Mi(M, l, u, y) {
            return new yi(M).build(l, u, y)
        }
        class yi {
            constructor(l) {
                this._driver = l
            }
            build(l, u, y) {
                const T = new dr(u);
                return this._resetContextStyleTimingState(T),
                gn(this, In(l), T)
            }
            _resetContextStyleTimingState(l) {
                l.currentQuerySelector = "",
                l.collectedStyles = new Map,
                l.collectedStyles.set("", new Map),
                l.currentTime = 0
            }
            visitTrigger(l, u) {
                let y = u.queryCount = 0
                  , T = u.depCount = 0;
                const N = []
                  , U = [];
                return "@" == l.name.charAt(0) && u.errors.push(function he() {
                    return new b.vHH(3006,!1)
                }()),
                l.definitions.forEach(j => {
                    if (this._resetContextStyleTimingState(u),
                    0 == j.type) {
                        const re = j
                          , ve = re.name;
                        ve.toString().split(/\s*,\s*/).forEach(Ke => {
                            re.name = Ke,
                            N.push(this.visitState(re, u))
                        }
                        ),
                        re.name = ve
                    } else if (1 == j.type) {
                        const re = this.visitTransition(j, u);
                        y += re.queryCount,
                        T += re.depCount,
                        U.push(re)
                    } else
                        u.errors.push(function K() {
                            return new b.vHH(3007,!1)
                        }())
                }
                ),
                {
                    type: 7,
                    name: l.name,
                    states: N,
                    transitions: U,
                    queryCount: y,
                    depCount: T,
                    options: null
                }
            }
            visitState(l, u) {
                const y = this.visitStyle(l.styles, u)
                  , T = l.options && l.options.params || null;
                if (y.containsDynamicStyles) {
                    const N = new Set
                      , U = T || {};
                    y.styles.forEach(j => {
                        j instanceof Map && j.forEach(re => {
                            Pr(re).forEach(ve => {
                                U.hasOwnProperty(ve) || N.add(ve)
                            }
                            )
                        }
                        )
                    }
                    ),
                    N.size && (tr(N.values()),
                    u.errors.push(function ke(M, l) {
                        return new b.vHH(3008,!1)
                    }()))
                }
                return {
                    type: 0,
                    name: l.name,
                    style: y,
                    options: T ? {
                        params: T
                    } : null
                }
            }
            visitTransition(l, u) {
                u.queryCount = 0,
                u.depCount = 0;
                const y = gn(this, In(l.animation), u);
                return {
                    type: 1,
                    matchers: Eo(l.expr, u.errors),
                    animation: y,
                    queryCount: u.queryCount,
                    depCount: u.depCount,
                    options: Dr(l.options)
                }
            }
            visitSequence(l, u) {
                return {
                    type: 2,
                    steps: l.steps.map(y => gn(this, y, u)),
                    options: Dr(l.options)
                }
            }
            visitGroup(l, u) {
                const y = u.currentTime;
                let T = 0;
                const N = l.steps.map(U => {
                    u.currentTime = y;
                    const j = gn(this, U, u);
                    return T = Math.max(T, u.currentTime),
                    j
                }
                );
                return u.currentTime = T,
                {
                    type: 3,
                    steps: N,
                    options: Dr(l.options)
                }
            }
            visitAnimate(l, u) {
                const y = function wo(M, l) {
                    if (M.hasOwnProperty("duration"))
                        return M;
                    if ("number" == typeof M)
                        return Ai(Y(M, l).duration, 0, "");
                    const u = M;
                    if (u.split(/\s+/).some(N => "{" == N.charAt(0) && "{" == N.charAt(1))) {
                        const N = Ai(0, 0, "");
                        return N.dynamic = !0,
                        N.strValue = u,
                        N
                    }
                    const T = Y(u, l);
                    return Ai(T.duration, T.delay, T.easing)
                }(l.timings, u.errors);
                u.currentAnimateTimings = y;
                let T, N = l.styles ? l.styles : (0,
                fe.oB)({});
                if (5 == N.type)
                    T = this.visitKeyframes(N, u);
                else {
                    let U = l.styles
                      , j = !1;
                    if (!U) {
                        j = !0;
                        const ve = {};
                        y.easing && (ve.easing = y.easing),
                        U = (0,
                        fe.oB)(ve)
                    }
                    u.currentTime += y.duration + y.delay;
                    const re = this.visitStyle(U, u);
                    re.isEmptyStep = j,
                    T = re
                }
                return u.currentAnimateTimings = null,
                {
                    type: 4,
                    timings: y,
                    style: T,
                    options: null
                }
            }
            visitStyle(l, u) {
                const y = this._makeStyleAst(l, u);
                return this._validateStyleAst(y, u),
                y
            }
            _makeStyleAst(l, u) {
                const y = []
                  , T = Array.isArray(l.styles) ? l.styles : [l.styles];
                for (let j of T)
                    "string" == typeof j ? j === fe.l3 ? y.push(j) : u.errors.push(new b.vHH(3002,!1)) : y.push(He(j));
                let N = !1
                  , U = null;
                return y.forEach(j => {
                    if (j instanceof Map && (j.has("easing") && (U = j.get("easing"),
                    j.delete("easing")),
                    !N))
                        for (let re of j.values())
                            if (re.toString().indexOf("{{") >= 0) {
                                N = !0;
                                break
                            }
                }
                ),
                {
                    type: 6,
                    styles: y,
                    easing: U,
                    offset: l.offset,
                    containsDynamicStyles: N,
                    options: null
                }
            }
            _validateStyleAst(l, u) {
                const y = u.currentAnimateTimings;
                let T = u.currentTime
                  , N = u.currentTime;
                y && N > 0 && (N -= y.duration + y.delay),
                l.styles.forEach(U => {
                    "string" != typeof U && U.forEach( (j, re) => {
                        const ve = u.collectedStyles.get(u.currentQuerySelector)
                          , Ke = ve.get(re);
                        let tt = !0;
                        Ke && (N != T && N >= Ke.startTime && T <= Ke.endTime && (u.errors.push(function st(M, l, u, y, T) {
                            return new b.vHH(3010,!1)
                        }()),
                        tt = !1),
                        N = Ke.startTime),
                        tt && ve.set(re, {
                            startTime: N,
                            endTime: T
                        }),
                        u.options && function ft(M, l, u) {
                            const y = l.params || {}
                              , T = Pr(M);
                            T.length && T.forEach(N => {
                                y.hasOwnProperty(N) || u.push(function De(M) {
                                    return new b.vHH(3001,!1)
                                }())
                            }
                            )
                        }(j, u.options, u.errors)
                    }
                    )
                }
                )
            }
            visitKeyframes(l, u) {
                const y = {
                    type: 5,
                    styles: [],
                    options: null
                };
                if (!u.currentAnimateTimings)
                    return u.errors.push(function Zt() {
                        return new b.vHH(3011,!1)
                    }()),
                    y;
                let N = 0;
                const U = [];
                let j = !1
                  , re = !1
                  , ve = 0;
                const Ke = l.steps.map(Qt => {
                    const vn = this._makeStyleAst(Qt, u);
                    let Gn = null != vn.offset ? vn.offset : function si(M) {
                        if ("string" == typeof M)
                            return null;
                        let l = null;
                        if (Array.isArray(M))
                            M.forEach(u => {
                                if (u instanceof Map && u.has("offset")) {
                                    const y = u;
                                    l = parseFloat(y.get("offset")),
                                    y.delete("offset")
                                }
                            }
                            );
                        else if (M instanceof Map && M.has("offset")) {
                            const u = M;
                            l = parseFloat(u.get("offset")),
                            u.delete("offset")
                        }
                        return l
                    }(vn.styles)
                      , Nn = 0;
                    return null != Gn && (N++,
                    Nn = vn.offset = Gn),
                    re = re || Nn < 0 || Nn > 1,
                    j = j || Nn < ve,
                    ve = Nn,
                    U.push(Nn),
                    vn
                }
                );
                re && u.errors.push(function lt() {
                    return new b.vHH(3012,!1)
                }()),
                j && u.errors.push(function Ot() {
                    return new b.vHH(3200,!1)
                }());
                const tt = l.steps.length;
                let xt = 0;
                N > 0 && N < tt ? u.errors.push(function pn() {
                    return new b.vHH(3202,!1)
                }()) : 0 == N && (xt = 1 / (tt - 1));
                const It = tt - 1
                  , yt = u.currentTime
                  , vt = u.currentAnimateTimings
                  , Ht = vt.duration;
                return Ke.forEach( (Qt, vn) => {
                    const Gn = xt > 0 ? vn == It ? 1 : xt * vn : U[vn]
                      , Nn = Gn * Ht;
                    u.currentTime = yt + vt.delay + Nn,
                    vt.duration = Nn,
                    this._validateStyleAst(Qt, u),
                    Qt.offset = Gn,
                    y.styles.push(Qt)
                }
                ),
                y
            }
            visitReference(l, u) {
                return {
                    type: 8,
                    animation: gn(this, In(l.animation), u),
                    options: Dr(l.options)
                }
            }
            visitAnimateChild(l, u) {
                return u.depCount++,
                {
                    type: 9,
                    options: Dr(l.options)
                }
            }
            visitAnimateRef(l, u) {
                return {
                    type: 10,
                    animation: this.visitReference(l.animation, u),
                    options: Dr(l.options)
                }
            }
            visitQuery(l, u) {
                const y = u.currentQuerySelector
                  , T = l.options || {};
                u.queryCount++,
                u.currentQuery = l;
                const [N,U] = function Si(M) {
                    const l = !!M.split(/\s*,\s*/).find(u => ":self" == u);
                    return l && (M = M.replace(ji, "")),
                    M = M.replace(/@\*/g, Xn).replace(/@\w+/g, u => Xn + "-" + u.slice(1)).replace(/:animating/g, W),
                    [M, l]
                }(l.selector);
                u.currentQuerySelector = y.length ? y + " " + N : N,
                Re(u.collectedStyles, u.currentQuerySelector, new Map);
                const j = gn(this, In(l.animation), u);
                return u.currentQuery = null,
                u.currentQuerySelector = y,
                {
                    type: 11,
                    selector: N,
                    limit: T.limit || 0,
                    optional: !!T.optional,
                    includeSelf: U,
                    animation: j,
                    originalSelector: l.selector,
                    options: Dr(l.options)
                }
            }
            visitStagger(l, u) {
                u.currentQuery || u.errors.push(function Me() {
                    return new b.vHH(3013,!1)
                }());
                const y = "full" === l.timings ? {
                    duration: 0,
                    delay: 0,
                    easing: "full"
                } : Y(l.timings, u.errors, !0);
                return {
                    type: 12,
                    animation: gn(this, In(l.animation), u),
                    timings: y,
                    options: null
                }
            }
        }
        class dr {
            constructor(l) {
                this.errors = l,
                this.queryCount = 0,
                this.depCount = 0,
                this.currentTransition = null,
                this.currentQuery = null,
                this.currentQuerySelector = null,
                this.currentAnimateTimings = null,
                this.currentTime = 0,
                this.collectedStyles = new Map,
                this.options = null,
                this.unsupportedCSSPropertiesFound = new Set
            }
        }
        function Dr(M) {
            return M ? (M = me(M)).params && (M.params = function $i(M) {
                return M ? me(M) : null
            }(M.params)) : M = {},
            M
        }
        function Ai(M, l, u) {
            return {
                duration: M,
                delay: l,
                easing: u
            }
        }
        function fr(M, l, u, y, T, N, U=null, j=!1) {
            return {
                type: 1,
                element: M,
                keyframes: l,
                preStyleProps: u,
                postStyleProps: y,
                duration: T,
                delay: N,
                totalTime: T + N,
                easing: U,
                subTimeline: j
            }
        }
        class vi {
            constructor() {
                this._map = new Map
            }
            get(l) {
                return this._map.get(l) || []
            }
            append(l, u) {
                let y = this._map.get(l);
                y || this._map.set(l, y = []),
                y.push(...u)
            }
            has(l) {
                return this._map.has(l)
            }
            clear() {
                this._map.clear()
            }
        }
        const io = new RegExp(":enter","g")
          , Gi = new RegExp(":leave","g");
        function hr(M, l, u, y, T, N=new Map, U=new Map, j, re, ve=[]) {
            return (new li).buildKeyframes(M, l, u, y, T, N, U, j, re, ve)
        }
        class li {
            buildKeyframes(l, u, y, T, N, U, j, re, ve, Ke=[]) {
                ve = ve || new vi;
                const tt = new Cr(l,u,ve,T,N,Ke,[]);
                tt.options = re;
                const xt = re.delay ? H(re.delay) : 0;
                tt.currentTimeline.delayNextStep(xt),
                tt.currentTimeline.setStyles([U], null, tt.errors, re),
                gn(this, y, tt);
                const It = tt.timelines.filter(yt => yt.containsAnimation());
                if (It.length && j.size) {
                    let yt;
                    for (let vt = It.length - 1; vt >= 0; vt--) {
                        const Ht = It[vt];
                        if (Ht.element === u) {
                            yt = Ht;
                            break
                        }
                    }
                    yt && !yt.allowOnlyTimelineStyles() && yt.setStyles([j], null, tt.errors, re)
                }
                return It.length ? It.map(yt => yt.buildKeyframes()) : [fr(u, [], [], [], 0, xt, "", !1)]
            }
            visitTrigger(l, u) {}
            visitState(l, u) {}
            visitTransition(l, u) {}
            visitAnimateChild(l, u) {
                const y = u.subInstructions.get(u.element);
                if (y) {
                    const T = u.createSubContext(l.options)
                      , N = u.currentTimeline.currentTime
                      , U = this._visitSubInstructions(y, T, T.options);
                    N != U && u.transformIntoNewTimeline(U)
                }
                u.previousNode = l
            }
            visitAnimateRef(l, u) {
                const y = u.createSubContext(l.options);
                y.transformIntoNewTimeline(),
                this.visitReference(l.animation, y),
                u.transformIntoNewTimeline(y.currentTimeline.currentTime),
                u.previousNode = l
            }
            _visitSubInstructions(l, u, y) {
                let N = u.currentTimeline.currentTime;
                const U = null != y.duration ? H(y.duration) : null
                  , j = null != y.delay ? H(y.delay) : null;
                return 0 !== U && l.forEach(re => {
                    const ve = u.appendInstructionToTimeline(re, U, j);
                    N = Math.max(N, ve.duration + ve.delay)
                }
                ),
                N
            }
            visitReference(l, u) {
                u.updateOptions(l.options, !0),
                gn(this, l.animation, u),
                u.previousNode = l
            }
            visitSequence(l, u) {
                const y = u.subContextCount;
                let T = u;
                const N = l.options;
                if (N && (N.params || N.delay) && (T = u.createSubContext(N),
                T.transformIntoNewTimeline(),
                null != N.delay)) {
                    6 == T.previousNode.type && (T.currentTimeline.snapshotCurrentStyles(),
                    T.previousNode = ui);
                    const U = H(N.delay);
                    T.delayNextStep(U)
                }
                l.steps.length && (l.steps.forEach(U => gn(this, U, T)),
                T.currentTimeline.applyStylesToKeyframe(),
                T.subContextCount > y && T.transformIntoNewTimeline()),
                u.previousNode = l
            }
            visitGroup(l, u) {
                const y = [];
                let T = u.currentTimeline.currentTime;
                const N = l.options && l.options.delay ? H(l.options.delay) : 0;
                l.steps.forEach(U => {
                    const j = u.createSubContext(l.options);
                    N && j.delayNextStep(N),
                    gn(this, U, j),
                    T = Math.max(T, j.currentTimeline.currentTime),
                    y.push(j.currentTimeline)
                }
                ),
                y.forEach(U => u.currentTimeline.mergeTimelineCollectedStyles(U)),
                u.transformIntoNewTimeline(T),
                u.previousNode = l
            }
            _visitTiming(l, u) {
                if (l.dynamic) {
                    const y = l.strValue;
                    return Y(u.params ? oi(y, u.params, u.errors) : y, u.errors)
                }
                return {
                    duration: l.duration,
                    delay: l.delay,
                    easing: l.easing
                }
            }
            visitAnimate(l, u) {
                const y = u.currentAnimateTimings = this._visitTiming(l.timings, u)
                  , T = u.currentTimeline;
                y.delay && (u.incrementTime(y.delay),
                T.snapshotCurrentStyles());
                const N = l.style;
                5 == N.type ? this.visitKeyframes(N, u) : (u.incrementTime(y.duration),
                this.visitStyle(N, u),
                T.applyStylesToKeyframe()),
                u.currentAnimateTimings = null,
                u.previousNode = l
            }
            visitStyle(l, u) {
                const y = u.currentTimeline
                  , T = u.currentAnimateTimings;
                !T && y.hasCurrentStyleProperties() && y.forwardFrame();
                const N = T && T.easing || l.easing;
                l.isEmptyStep ? y.applyEmptyStep(N) : y.setStyles(l.styles, N, u.errors, u.options),
                u.previousNode = l
            }
            visitKeyframes(l, u) {
                const y = u.currentAnimateTimings
                  , T = u.currentTimeline.duration
                  , N = y.duration
                  , j = u.createSubContext().currentTimeline;
                j.easing = y.easing,
                l.styles.forEach(re => {
                    j.forwardTime((re.offset || 0) * N),
                    j.setStyles(re.styles, re.easing, u.errors, u.options),
                    j.applyStylesToKeyframe()
                }
                ),
                u.currentTimeline.mergeTimelineCollectedStyles(j),
                u.transformIntoNewTimeline(T + N),
                u.previousNode = l
            }
            visitQuery(l, u) {
                const y = u.currentTimeline.currentTime
                  , T = l.options || {}
                  , N = T.delay ? H(T.delay) : 0;
                N && (6 === u.previousNode.type || 0 == y && u.currentTimeline.hasCurrentStyleProperties()) && (u.currentTimeline.snapshotCurrentStyles(),
                u.previousNode = ui);
                let U = y;
                const j = u.invokeQuery(l.selector, l.originalSelector, l.limit, l.includeSelf, !!T.optional, u.errors);
                u.currentQueryTotal = j.length;
                let re = null;
                j.forEach( (ve, Ke) => {
                    u.currentQueryIndex = Ke;
                    const tt = u.createSubContext(l.options, ve);
                    N && tt.delayNextStep(N),
                    ve === u.element && (re = tt.currentTimeline),
                    gn(this, l.animation, tt),
                    tt.currentTimeline.applyStylesToKeyframe(),
                    U = Math.max(U, tt.currentTimeline.currentTime)
                }
                ),
                u.currentQueryIndex = 0,
                u.currentQueryTotal = 0,
                u.transformIntoNewTimeline(U),
                re && (u.currentTimeline.mergeTimelineCollectedStyles(re),
                u.currentTimeline.snapshotCurrentStyles()),
                u.previousNode = l
            }
            visitStagger(l, u) {
                const y = u.parentContext
                  , T = u.currentTimeline
                  , N = l.timings
                  , U = Math.abs(N.duration)
                  , j = U * (u.currentQueryTotal - 1);
                let re = U * u.currentQueryIndex;
                switch (N.duration < 0 ? "reverse" : N.easing) {
                case "reverse":
                    re = j - re;
                    break;
                case "full":
                    re = y.currentStaggerTime
                }
                const Ke = u.currentTimeline;
                re && Ke.delayNextStep(re);
                const tt = Ke.currentTime;
                gn(this, l.animation, u),
                u.previousNode = l,
                y.currentStaggerTime = T.currentTime - tt + (T.startTime - y.currentTimeline.startTime)
            }
        }
        const ui = {};
        class Cr {
            constructor(l, u, y, T, N, U, j, re) {
                this._driver = l,
                this.element = u,
                this.subInstructions = y,
                this._enterClassName = T,
                this._leaveClassName = N,
                this.errors = U,
                this.timelines = j,
                this.parentContext = null,
                this.currentAnimateTimings = null,
                this.previousNode = ui,
                this.subContextCount = 0,
                this.options = {},
                this.currentQueryIndex = 0,
                this.currentQueryTotal = 0,
                this.currentStaggerTime = 0,
                this.currentTimeline = re || new Fr(this._driver,u,0),
                j.push(this.currentTimeline)
            }
            get params() {
                return this.options.params
            }
            updateOptions(l, u) {
                if (!l)
                    return;
                const y = l;
                let T = this.options;
                null != y.duration && (T.duration = H(y.duration)),
                null != y.delay && (T.delay = H(y.delay));
                const N = y.params;
                if (N) {
                    let U = T.params;
                    U || (U = this.options.params = {}),
                    Object.keys(N).forEach(j => {
                        (!u || !U.hasOwnProperty(j)) && (U[j] = oi(N[j], U, this.errors))
                    }
                    )
                }
            }
            _copyOptions() {
                const l = {};
                if (this.options) {
                    const u = this.options.params;
                    if (u) {
                        const y = l.params = {};
                        Object.keys(u).forEach(T => {
                            y[T] = u[T]
                        }
                        )
                    }
                }
                return l
            }
            createSubContext(l=null, u, y) {
                const T = u || this.element
                  , N = new Cr(this._driver,T,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(T, y || 0));
                return N.previousNode = this.previousNode,
                N.currentAnimateTimings = this.currentAnimateTimings,
                N.options = this._copyOptions(),
                N.updateOptions(l),
                N.currentQueryIndex = this.currentQueryIndex,
                N.currentQueryTotal = this.currentQueryTotal,
                N.parentContext = this,
                this.subContextCount++,
                N
            }
            transformIntoNewTimeline(l) {
                return this.previousNode = ui,
                this.currentTimeline = this.currentTimeline.fork(this.element, l),
                this.timelines.push(this.currentTimeline),
                this.currentTimeline
            }
            appendInstructionToTimeline(l, u, y) {
                const T = {
                    duration: u ?? l.duration,
                    delay: this.currentTimeline.currentTime + (y ?? 0) + l.delay,
                    easing: ""
                }
                  , N = new Er(this._driver,l.element,l.keyframes,l.preStyleProps,l.postStyleProps,T,l.stretchStartingKeyframe);
                return this.timelines.push(N),
                T
            }
            incrementTime(l) {
                this.currentTimeline.forwardTime(this.currentTimeline.duration + l)
            }
            delayNextStep(l) {
                l > 0 && this.currentTimeline.delayNextStep(l)
            }
            invokeQuery(l, u, y, T, N, U) {
                let j = [];
                if (T && j.push(this.element),
                l.length > 0) {
                    l = (l = l.replace(io, "." + this._enterClassName)).replace(Gi, "." + this._leaveClassName);
                    let ve = this._driver.query(this.element, l, 1 != y);
                    0 !== y && (ve = y < 0 ? ve.slice(ve.length + y, ve.length) : ve.slice(0, y)),
                    j.push(...ve)
                }
                return !N && 0 == j.length && U.push(function Le(M) {
                    return new b.vHH(3014,!1)
                }()),
                j
            }
        }
        class Fr {
            constructor(l, u, y, T) {
                this._driver = l,
                this.element = u,
                this.startTime = y,
                this._elementTimelineStylesLookup = T,
                this.duration = 0,
                this._previousKeyframe = new Map,
                this._currentKeyframe = new Map,
                this._keyframes = new Map,
                this._styleSummary = new Map,
                this._localTimelineStyles = new Map,
                this._pendingStyles = new Map,
                this._backFill = new Map,
                this._currentEmptyStepKeyframe = null,
                this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map),
                this._globalTimelineStyles = this._elementTimelineStylesLookup.get(u),
                this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles,
                this._elementTimelineStylesLookup.set(u, this._localTimelineStyles)),
                this._loadKeyframe()
            }
            containsAnimation() {
                switch (this._keyframes.size) {
                case 0:
                    return !1;
                case 1:
                    return this.hasCurrentStyleProperties();
                default:
                    return !0
                }
            }
            hasCurrentStyleProperties() {
                return this._currentKeyframe.size > 0
            }
            get currentTime() {
                return this.startTime + this.duration
            }
            delayNextStep(l) {
                const u = 1 === this._keyframes.size && this._pendingStyles.size;
                this.duration || u ? (this.forwardTime(this.currentTime + l),
                u && this.snapshotCurrentStyles()) : this.startTime += l
            }
            fork(l, u) {
                return this.applyStylesToKeyframe(),
                new Fr(this._driver,l,u || this.currentTime,this._elementTimelineStylesLookup)
            }
            _loadKeyframe() {
                this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
                this._currentKeyframe = this._keyframes.get(this.duration),
                this._currentKeyframe || (this._currentKeyframe = new Map,
                this._keyframes.set(this.duration, this._currentKeyframe))
            }
            forwardFrame() {
                this.duration += 1,
                this._loadKeyframe()
            }
            forwardTime(l) {
                this.applyStylesToKeyframe(),
                this.duration = l,
                this._loadKeyframe()
            }
            _updateStyle(l, u) {
                this._localTimelineStyles.set(l, u),
                this._globalTimelineStyles.set(l, u),
                this._styleSummary.set(l, {
                    time: this.currentTime,
                    value: u
                })
            }
            allowOnlyTimelineStyles() {
                return this._currentEmptyStepKeyframe !== this._currentKeyframe
            }
            applyEmptyStep(l) {
                l && this._previousKeyframe.set("easing", l);
                for (let[u,y] of this._globalTimelineStyles)
                    this._backFill.set(u, y || fe.l3),
                    this._currentKeyframe.set(u, fe.l3);
                this._currentEmptyStepKeyframe = this._currentKeyframe
            }
            setStyles(l, u, y, T) {
                u && this._previousKeyframe.set("easing", u);
                const N = T && T.params || {}
                  , U = function Kr(M, l) {
                    const u = new Map;
                    let y;
                    return M.forEach(T => {
                        if ("*" === T) {
                            y = y || l.keys();
                            for (let N of y)
                                u.set(N, fe.l3)
                        } else
                            sn(T, u)
                    }
                    ),
                    u
                }(l, this._globalTimelineStyles);
                for (let[j,re] of U) {
                    const ve = oi(re, N, y);
                    this._pendingStyles.set(j, ve),
                    this._localTimelineStyles.has(j) || this._backFill.set(j, this._globalTimelineStyles.get(j) ?? fe.l3),
                    this._updateStyle(j, ve)
                }
            }
            applyStylesToKeyframe() {
                0 != this._pendingStyles.size && (this._pendingStyles.forEach( (l, u) => {
                    this._currentKeyframe.set(u, l)
                }
                ),
                this._pendingStyles.clear(),
                this._localTimelineStyles.forEach( (l, u) => {
                    this._currentKeyframe.has(u) || this._currentKeyframe.set(u, l)
                }
                ))
            }
            snapshotCurrentStyles() {
                for (let[l,u] of this._localTimelineStyles)
                    this._pendingStyles.set(l, u),
                    this._updateStyle(l, u)
            }
            getFinalKeyframe() {
                return this._keyframes.get(this.duration)
            }
            get properties() {
                const l = [];
                for (let u in this._currentKeyframe)
                    l.push(u);
                return l
            }
            mergeTimelineCollectedStyles(l) {
                l._styleSummary.forEach( (u, y) => {
                    const T = this._styleSummary.get(y);
                    (!T || u.time > T.time) && this._updateStyle(y, u.value)
                }
                )
            }
            buildKeyframes() {
                this.applyStylesToKeyframe();
                const l = new Set
                  , u = new Set
                  , y = 1 === this._keyframes.size && 0 === this.duration;
                let T = [];
                this._keyframes.forEach( (j, re) => {
                    const ve = sn(j, new Map, this._backFill);
                    ve.forEach( (Ke, tt) => {
                        Ke === fe.k1 ? l.add(tt) : Ke === fe.l3 && u.add(tt)
                    }
                    ),
                    y || ve.set("offset", re / this.duration),
                    T.push(ve)
                }
                );
                const N = l.size ? tr(l.values()) : []
                  , U = u.size ? tr(u.values()) : [];
                if (y) {
                    const j = T[0]
                      , re = new Map(j);
                    j.set("offset", 0),
                    re.set("offset", 1),
                    T = [j, re]
                }
                return fr(this.element, T, N, U, this.duration, this.startTime, this.easing, !1)
            }
        }
        class Er extends Fr {
            constructor(l, u, y, T, N, U, j=!1) {
                super(l, u, U.delay),
                this.keyframes = y,
                this.preStyleProps = T,
                this.postStyleProps = N,
                this._stretchStartingKeyframe = j,
                this.timings = {
                    duration: U.duration,
                    delay: U.delay,
                    easing: U.easing
                }
            }
            containsAnimation() {
                return this.keyframes.length > 1
            }
            buildKeyframes() {
                let l = this.keyframes
                  , {delay: u, duration: y, easing: T} = this.timings;
                if (this._stretchStartingKeyframe && u) {
                    const N = []
                      , U = y + u
                      , j = u / U
                      , re = sn(l[0]);
                    re.set("offset", 0),
                    N.push(re);
                    const ve = sn(l[0]);
                    ve.set("offset", Pi(j)),
                    N.push(ve);
                    const Ke = l.length - 1;
                    for (let tt = 1; tt <= Ke; tt++) {
                        let xt = sn(l[tt]);
                        const It = xt.get("offset");
                        xt.set("offset", Pi((u + It * y) / U)),
                        N.push(xt)
                    }
                    y = U,
                    u = 0,
                    T = "",
                    l = N
                }
                return fr(this.element, l, this.preStyleProps, this.postStyleProps, y, u, T, !0)
            }
        }
        function Pi(M, l=3) {
            const u = Math.pow(10, l - 1);
            return Math.round(M * u) / u
        }
        class ci {
        }
        const di = new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
        class Rr extends ci {
            normalizePropertyName(l, u) {
                return nr(l)
            }
            normalizeStyleValue(l, u, y, T) {
                let N = "";
                const U = y.toString().trim();
                if (di.has(u) && 0 !== y && "0" !== y)
                    if ("number" == typeof y)
                        N = "px";
                    else {
                        const j = y.match(/^[+-]?[\d\.]+([a-z]*)$/);
                        j && 0 == j[1].length && T.push(function ne(M, l) {
                            return new b.vHH(3005,!1)
                        }())
                    }
                return U + N
            }
        }
        function _i(M, l, u, y, T, N, U, j, re, ve, Ke, tt, xt) {
            return {
                type: 0,
                element: M,
                triggerName: l,
                isRemovalTransition: T,
                fromState: u,
                fromStyles: N,
                toState: y,
                toStyles: U,
                timelines: j,
                queriedElements: re,
                preStyleProps: ve,
                postStyleProps: Ke,
                totalTime: tt,
                errors: xt
            }
        }
        const Lr = {};
        class so {
            constructor(l, u, y) {
                this._triggerName = l,
                this.ast = u,
                this._stateStyles = y
            }
            match(l, u, y, T) {
                return function Yr(M, l, u, y, T) {
                    return M.some(N => N(l, u, y, T))
                }(this.ast.matchers, l, u, y, T)
            }
            buildStyles(l, u, y) {
                let T = this._stateStyles.get("*");
                return void 0 !== l && (T = this._stateStyles.get(l?.toString()) || T),
                T ? T.buildStyles(u, y) : new Map
            }
            build(l, u, y, T, N, U, j, re, ve, Ke) {
                const tt = []
                  , xt = this.ast.options && this.ast.options.params || Lr
                  , yt = this.buildStyles(y, j && j.params || Lr, tt)
                  , vt = re && re.params || Lr
                  , Ht = this.buildStyles(T, vt, tt)
                  , Qt = new Set
                  , vn = new Map
                  , Gn = new Map
                  , Nn = "void" === T
                  , Br = {
                    params: xi(vt, xt),
                    delay: this.ast.options?.delay
                }
                  , Zr = Ke ? [] : hr(l, u, this.ast.animation, N, U, yt, Ht, Br, ve, tt);
                let _n = 0;
                if (Zr.forEach(or => {
                    _n = Math.max(or.duration + or.delay, _n)
                }
                ),
                tt.length)
                    return _i(u, this._triggerName, y, T, Nn, yt, Ht, [], [], vn, Gn, _n, tt);
                Zr.forEach(or => {
                    const Jr = or.element
                      , Wo = Re(vn, Jr, new Set);
                    or.preStyleProps.forEach(Xr => Wo.add(Xr));
                    const Ki = Re(Gn, Jr, new Set);
                    or.postStyleProps.forEach(Xr => Ki.add(Xr)),
                    Jr !== u && Qt.add(Jr)
                }
                );
                const wr = tr(Qt.values());
                return _i(u, this._triggerName, y, T, Nn, yt, Ht, Zr, wr, vn, Gn, _n)
            }
        }
        function xi(M, l) {
            const u = me(l);
            for (const y in M)
                M.hasOwnProperty(y) && null != M[y] && (u[y] = M[y]);
            return u
        }
        class Di {
            constructor(l, u, y) {
                this.styles = l,
                this.defaultParams = u,
                this.normalizer = y
            }
            buildStyles(l, u) {
                const y = new Map
                  , T = me(this.defaultParams);
                return Object.keys(l).forEach(N => {
                    const U = l[N];
                    null !== U && (T[N] = U)
                }
                ),
                this.styles.styles.forEach(N => {
                    "string" != typeof N && N.forEach( (U, j) => {
                        U && (U = oi(U, T, u));
                        const re = this.normalizer.normalizePropertyName(j, u);
                        U = this.normalizer.normalizeStyleValue(j, re, U, u),
                        y.set(re, U)
                    }
                    )
                }
                ),
                y
            }
        }
        class Ci {
            constructor(l, u, y) {
                this.name = l,
                this.ast = u,
                this._normalizer = y,
                this.transitionFactories = [],
                this.states = new Map,
                u.states.forEach(T => {
                    this.states.set(T.name, new Di(T.style,T.options && T.options.params || {},y))
                }
                ),
                _(this.states, "true", "1"),
                _(this.states, "false", "0"),
                u.transitions.forEach(T => {
                    this.transitionFactories.push(new so(l,T,this.states))
                }
                ),
                this.fallbackTransition = function fn(M, l, u) {
                    return new so(M,{
                        type: 1,
                        animation: {
                            type: 2,
                            steps: [],
                            options: null
                        },
                        matchers: [ (U, j) => !0],
                        options: null,
                        queryCount: 0,
                        depCount: 0
                    },l)
                }(l, this.states)
            }
            get containsQueries() {
                return this.ast.queryCount > 0
            }
            matchTransition(l, u, y, T) {
                return this.transitionFactories.find(U => U.match(l, u, y, T)) || null
            }
            matchStyles(l, u, y) {
                return this.fallbackTransition.buildStyles(l, u, y)
            }
        }
        function _(M, l, u) {
            M.has(l) ? M.has(u) || M.set(u, M.get(l)) : M.has(u) && M.set(l, M.get(u))
        }
        const P = new vi;
        class C {
            constructor(l, u, y) {
                this.bodyNode = l,
                this._driver = u,
                this._normalizer = y,
                this._animations = new Map,
                this._playersById = new Map,
                this.players = []
            }
            register(l, u) {
                const y = []
                  , N = Mi(this._driver, u, y, []);
                if (y.length)
                    throw function dn(M) {
                        return new b.vHH(3503,!1)
                    }();
                this._animations.set(l, N)
            }
            _buildPlayer(l, u, y) {
                const T = l.element
                  , N = k(0, this._normalizer, 0, l.keyframes, u, y);
                return this._driver.animate(T, N, l.duration, l.delay, l.easing, [], !0)
            }
            create(l, u, y={}) {
                const T = []
                  , N = this._animations.get(l);
                let U;
                const j = new Map;
                if (N ? (U = hr(this._driver, u, N, Ir, Kn, new Map, new Map, y, P, T),
                U.forEach(Ke => {
                    const tt = Re(j, Ke.element, new Map);
                    Ke.postStyleProps.forEach(xt => tt.set(xt, null))
                }
                )) : (T.push(function jt() {
                    return new b.vHH(3300,!1)
                }()),
                U = []),
                T.length)
                    throw function Tn(M) {
                        return new b.vHH(3504,!1)
                    }();
                j.forEach( (Ke, tt) => {
                    Ke.forEach( (xt, It) => {
                        Ke.set(It, this._driver.computeStyle(tt, It, fe.l3))
                    }
                    )
                }
                );
                const ve = B(U.map(Ke => {
                    const tt = j.get(Ke.element);
                    return this._buildPlayer(Ke, new Map, tt)
                }
                ));
                return this._playersById.set(l, ve),
                ve.onDestroy( () => this.destroy(l)),
                this.players.push(ve),
                ve
            }
            destroy(l) {
                const u = this._getPlayer(l);
                u.destroy(),
                this._playersById.delete(l);
                const y = this.players.indexOf(u);
                y >= 0 && this.players.splice(y, 1)
            }
            _getPlayer(l) {
                const u = this._playersById.get(l);
                if (!u)
                    throw function En(M) {
                        return new b.vHH(3301,!1)
                    }();
                return u
            }
            listen(l, u, y, T) {
                const N = rt(u, "", "", "");
                return se(this._getPlayer(l), y, N, T),
                () => {}
            }
            command(l, u, y, T) {
                if ("register" == y)
                    return void this.register(l, T[0]);
                if ("create" == y)
                    return void this.create(l, u, T[0] || {});
                const N = this._getPlayer(l);
                switch (y) {
                case "play":
                    N.play();
                    break;
                case "pause":
                    N.pause();
                    break;
                case "reset":
                    N.reset();
                    break;
                case "restart":
                    N.restart();
                    break;
                case "finish":
                    N.finish();
                    break;
                case "init":
                    N.init();
                    break;
                case "setPosition":
                    N.setPosition(parseFloat(T[0]));
                    break;
                case "destroy":
                    this.destroy(l)
                }
            }
        }
        const x = "ng-animate-queued"
          , ae = "ng-animate-disabled"
          , Gt = []
          , zt = {
            namespaceId: "",
            setForRemoval: !1,
            setForMove: !1,
            hasAnimation: !1,
            removedBeforeQueried: !1
        }
          , Dt = {
            namespaceId: "",
            setForMove: !1,
            setForRemoval: !1,
            hasAnimation: !1,
            removedBeforeQueried: !0
        }
          , Bt = "__ng_removed";
        class Wt {
            constructor(l, u="") {
                this.namespaceId = u;
                const y = l && l.hasOwnProperty("value");
                if (this.value = function hi(M) {
                    return M ?? null
                }(y ? l.value : l),
                y) {
                    const N = me(l);
                    delete N.value,
                    this.options = N
                } else
                    this.options = {};
                this.options.params || (this.options.params = {})
            }
            get params() {
                return this.options.params
            }
            absorbOptions(l) {
                const u = l.params;
                if (u) {
                    const y = this.options.params;
                    Object.keys(u).forEach(T => {
                        null == y[T] && (y[T] = u[T])
                    }
                    )
                }
            }
        }
        const qe = "void"
          , Qn = new Wt(qe);
        class fi {
            constructor(l, u, y) {
                this.id = l,
                this.hostElement = u,
                this._engine = y,
                this.players = [],
                this._triggers = new Map,
                this._queue = [],
                this._elementListeners = new Map,
                this._hostClassName = "ng-tns-" + l,
                gr(u, this._hostClassName)
            }
            listen(l, u, y, T) {
                if (!this._triggers.has(u))
                    throw function Bn(M, l) {
                        return new b.vHH(3302,!1)
                    }();
                if (null == y || 0 == y.length)
                    throw function Kt(M) {
                        return new b.vHH(3303,!1)
                    }();
                if (!function is(M) {
                    return "start" == M || "done" == M
                }(y))
                    throw function Lt(M, l) {
                        return new b.vHH(3400,!1)
                    }();
                const N = Re(this._elementListeners, l, [])
                  , U = {
                    name: u,
                    phase: y,
                    callback: T
                };
                N.push(U);
                const j = Re(this._engine.statesByElement, l, new Map);
                return j.has(u) || (gr(l, vr),
                gr(l, vr + "-" + u),
                j.set(u, Qn)),
                () => {
                    this._engine.afterFlush( () => {
                        const re = N.indexOf(U);
                        re >= 0 && N.splice(re, 1),
                        this._triggers.has(u) || j.delete(u)
                    }
                    )
                }
            }
            register(l, u) {
                return !this._triggers.has(l) && (this._triggers.set(l, u),
                !0)
            }
            _getTrigger(l) {
                const u = this._triggers.get(l);
                if (!u)
                    throw function Sn(M) {
                        return new b.vHH(3401,!1)
                    }();
                return u
            }
            trigger(l, u, y, T=!0) {
                const N = this._getTrigger(u)
                  , U = new Rn(this.id,u,l);
                let j = this._engine.statesByElement.get(l);
                j || (gr(l, vr),
                gr(l, vr + "-" + u),
                this._engine.statesByElement.set(l, j = new Map));
                let re = j.get(u);
                const ve = new Wt(y,this.id);
                if (!(y && y.hasOwnProperty("value")) && re && ve.absorbOptions(re.options),
                j.set(u, ve),
                re || (re = Qn),
                ve.value !== qe && re.value === ve.value) {
                    if (!function m(M, l) {
                        const u = Object.keys(M)
                          , y = Object.keys(l);
                        if (u.length != y.length)
                            return !1;
                        for (let T = 0; T < u.length; T++) {
                            const N = u[T];
                            if (!l.hasOwnProperty(N) || M[N] !== l[N])
                                return !1
                        }
                        return !0
                    }(re.params, ve.params)) {
                        const vt = []
                          , Ht = N.matchStyles(re.value, re.params, vt)
                          , Qt = N.matchStyles(ve.value, ve.params, vt);
                        vt.length ? this._engine.reportError(vt) : this._engine.afterFlush( () => {
                            $n(l, Ht),
                            Ft(l, Qt)
                        }
                        )
                    }
                    return
                }
                const xt = Re(this._engine.playersByElement, l, []);
                xt.forEach(vt => {
                    vt.namespaceId == this.id && vt.triggerName == u && vt.queued && vt.destroy()
                }
                );
                let It = N.matchTransition(re.value, ve.value, l, ve.params)
                  , yt = !1;
                if (!It) {
                    if (!T)
                        return;
                    It = N.fallbackTransition,
                    yt = !0
                }
                return this._engine.totalQueuedPlayers++,
                this._queue.push({
                    element: l,
                    triggerName: u,
                    transition: It,
                    fromState: re,
                    toState: ve,
                    player: U,
                    isFallbackTransition: yt
                }),
                yt || (gr(l, x),
                U.onStart( () => {
                    an(l, x)
                }
                )),
                U.onDone( () => {
                    let vt = this.players.indexOf(U);
                    vt >= 0 && this.players.splice(vt, 1);
                    const Ht = this._engine.playersByElement.get(l);
                    if (Ht) {
                        let Qt = Ht.indexOf(U);
                        Qt >= 0 && Ht.splice(Qt, 1)
                    }
                }
                ),
                this.players.push(U),
                xt.push(U),
                U
            }
            deregister(l) {
                this._triggers.delete(l),
                this._engine.statesByElement.forEach(u => u.delete(l)),
                this._elementListeners.forEach( (u, y) => {
                    this._elementListeners.set(y, u.filter(T => T.name != l))
                }
                )
            }
            clearElementCache(l) {
                this._engine.statesByElement.delete(l),
                this._elementListeners.delete(l);
                const u = this._engine.playersByElement.get(l);
                u && (u.forEach(y => y.destroy()),
                this._engine.playersByElement.delete(l))
            }
            _signalRemovalForInnerTriggers(l, u) {
                const y = this._engine.driver.query(l, Xn, !0);
                y.forEach(T => {
                    if (T[Bt])
                        return;
                    const N = this._engine.fetchNamespacesByElement(T);
                    N.size ? N.forEach(U => U.triggerLeaveAnimation(T, u, !1, !0)) : this.clearElementCache(T)
                }
                ),
                this._engine.afterFlushAnimationsDone( () => y.forEach(T => this.clearElementCache(T)))
            }
            triggerLeaveAnimation(l, u, y, T) {
                const N = this._engine.statesByElement.get(l)
                  , U = new Map;
                if (N) {
                    const j = [];
                    if (N.forEach( (re, ve) => {
                        if (U.set(ve, re.value),
                        this._triggers.has(ve)) {
                            const Ke = this.trigger(l, ve, qe, T);
                            Ke && j.push(Ke)
                        }
                    }
                    ),
                    j.length)
                        return this._engine.markElementAsRemoved(this.id, l, !0, u, U),
                        y && B(j).onDone( () => this._engine.processLeaveNode(l)),
                        !0
                }
                return !1
            }
            prepareLeaveAnimationListeners(l) {
                const u = this._elementListeners.get(l)
                  , y = this._engine.statesByElement.get(l);
                if (u && y) {
                    const T = new Set;
                    u.forEach(N => {
                        const U = N.name;
                        if (T.has(U))
                            return;
                        T.add(U);
                        const re = this._triggers.get(U).fallbackTransition
                          , ve = y.get(U) || Qn
                          , Ke = new Wt(qe)
                          , tt = new Rn(this.id,U,l);
                        this._engine.totalQueuedPlayers++,
                        this._queue.push({
                            element: l,
                            triggerName: U,
                            transition: re,
                            fromState: ve,
                            toState: Ke,
                            player: tt,
                            isFallbackTransition: !0
                        })
                    }
                    )
                }
            }
            removeNode(l, u) {
                const y = this._engine;
                if (l.childElementCount && this._signalRemovalForInnerTriggers(l, u),
                this.triggerLeaveAnimation(l, u, !0))
                    return;
                let T = !1;
                if (y.totalAnimations) {
                    const N = y.players.length ? y.playersByQueriedElement.get(l) : [];
                    if (N && N.length)
                        T = !0;
                    else {
                        let U = l;
                        for (; U = U.parentNode; )
                            if (y.statesByElement.get(U)) {
                                T = !0;
                                break
                            }
                    }
                }
                if (this.prepareLeaveAnimationListeners(l),
                T)
                    y.markElementAsRemoved(this.id, l, !1, u);
                else {
                    const N = l[Bt];
                    (!N || N === zt) && (y.afterFlush( () => this.clearElementCache(l)),
                    y.destroyInnerAnimations(l),
                    y._onRemovalComplete(l, u))
                }
            }
            insertNode(l, u) {
                gr(l, this._hostClassName)
            }
            drainQueuedTransitions(l) {
                const u = [];
                return this._queue.forEach(y => {
                    const T = y.player;
                    if (T.destroyed)
                        return;
                    const N = y.element
                      , U = this._elementListeners.get(N);
                    U && U.forEach(j => {
                        if (j.name == y.triggerName) {
                            const re = rt(N, y.triggerName, y.fromState.value, y.toState.value);
                            re._data = l,
                            se(y.player, j.phase, re, j.callback)
                        }
                    }
                    ),
                    T.markedForDestroy ? this._engine.afterFlush( () => {
                        T.destroy()
                    }
                    ) : u.push(y)
                }
                ),
                this._queue = [],
                u.sort( (y, T) => {
                    const N = y.transition.ast.depCount
                      , U = T.transition.ast.depCount;
                    return 0 == N || 0 == U ? N - U : this._engine.driver.containsElement(y.element, T.element) ? 1 : -1
                }
                )
            }
            destroy(l) {
                this.players.forEach(u => u.destroy()),
                this._signalRemovalForInnerTriggers(this.hostElement, l)
            }
            elementContainsData(l) {
                let u = !1;
                return this._elementListeners.has(l) && (u = !0),
                u = !!this._queue.find(y => y.element === l) || u,
                u
            }
        }
        class Ni {
            constructor(l, u, y) {
                this.bodyNode = l,
                this.driver = u,
                this._normalizer = y,
                this.players = [],
                this.newHostElements = new Map,
                this.playersByElement = new Map,
                this.playersByQueriedElement = new Map,
                this.statesByElement = new Map,
                this.disabledNodes = new Set,
                this.totalAnimations = 0,
                this.totalQueuedPlayers = 0,
                this._namespaceLookup = {},
                this._namespaceList = [],
                this._flushFns = [],
                this._whenQuietFns = [],
                this.namespacesByHostElement = new Map,
                this.collectedEnterElements = [],
                this.collectedLeaveElements = [],
                this.onRemovalComplete = (T, N) => {}
            }
            _onRemovalComplete(l, u) {
                this.onRemovalComplete(l, u)
            }
            get queuedPlayers() {
                const l = [];
                return this._namespaceList.forEach(u => {
                    u.players.forEach(y => {
                        y.queued && l.push(y)
                    }
                    )
                }
                ),
                l
            }
            createNamespace(l, u) {
                const y = new fi(l,u,this);
                return this.bodyNode && this.driver.containsElement(this.bodyNode, u) ? this._balanceNamespaceList(y, u) : (this.newHostElements.set(u, y),
                this.collectEnterElement(u)),
                this._namespaceLookup[l] = y
            }
            _balanceNamespaceList(l, u) {
                const y = this._namespaceList
                  , T = this.namespacesByHostElement;
                if (y.length - 1 >= 0) {
                    let U = !1
                      , j = this.driver.getParentElement(u);
                    for (; j; ) {
                        const re = T.get(j);
                        if (re) {
                            const ve = y.indexOf(re);
                            y.splice(ve + 1, 0, l),
                            U = !0;
                            break
                        }
                        j = this.driver.getParentElement(j)
                    }
                    U || y.unshift(l)
                } else
                    y.push(l);
                return T.set(u, l),
                l
            }
            register(l, u) {
                let y = this._namespaceLookup[l];
                return y || (y = this.createNamespace(l, u)),
                y
            }
            registerTrigger(l, u, y) {
                let T = this._namespaceLookup[l];
                T && T.register(u, y) && this.totalAnimations++
            }
            destroy(l, u) {
                if (!l)
                    return;
                const y = this._fetchNamespace(l);
                this.afterFlush( () => {
                    this.namespacesByHostElement.delete(y.hostElement),
                    delete this._namespaceLookup[l];
                    const T = this._namespaceList.indexOf(y);
                    T >= 0 && this._namespaceList.splice(T, 1)
                }
                ),
                this.afterFlushAnimationsDone( () => y.destroy(u))
            }
            _fetchNamespace(l) {
                return this._namespaceLookup[l]
            }
            fetchNamespacesByElement(l) {
                const u = new Set
                  , y = this.statesByElement.get(l);
                if (y)
                    for (let T of y.values())
                        if (T.namespaceId) {
                            const N = this._fetchNamespace(T.namespaceId);
                            N && u.add(N)
                        }
                return u
            }
            trigger(l, u, y, T) {
                if (Qr(u)) {
                    const N = this._fetchNamespace(l);
                    if (N)
                        return N.trigger(u, y, T),
                        !0
                }
                return !1
            }
            insertNode(l, u, y, T) {
                if (!Qr(u))
                    return;
                const N = u[Bt];
                if (N && N.setForRemoval) {
                    N.setForRemoval = !1,
                    N.setForMove = !0;
                    const U = this.collectedLeaveElements.indexOf(u);
                    U >= 0 && this.collectedLeaveElements.splice(U, 1)
                }
                if (l) {
                    const U = this._fetchNamespace(l);
                    U && U.insertNode(u, y)
                }
                T && this.collectEnterElement(u)
            }
            collectEnterElement(l) {
                this.collectedEnterElements.push(l)
            }
            markElementAsDisabled(l, u) {
                u ? this.disabledNodes.has(l) || (this.disabledNodes.add(l),
                gr(l, ae)) : this.disabledNodes.has(l) && (this.disabledNodes.delete(l),
                an(l, ae))
            }
            removeNode(l, u, y, T) {
                if (Qr(u)) {
                    const N = l ? this._fetchNamespace(l) : null;
                    if (N ? N.removeNode(u, T) : this.markElementAsRemoved(l, u, !1, T),
                    y) {
                        const U = this.namespacesByHostElement.get(u);
                        U && U.id !== l && U.removeNode(u, T)
                    }
                } else
                    this._onRemovalComplete(u, T)
            }
            markElementAsRemoved(l, u, y, T, N) {
                this.collectedLeaveElements.push(u),
                u[Bt] = {
                    namespaceId: l,
                    setForRemoval: T,
                    hasAnimation: y,
                    removedBeforeQueried: !1,
                    previousTriggersValues: N
                }
            }
            listen(l, u, y, T, N) {
                return Qr(u) ? this._fetchNamespace(l).listen(u, y, T, N) : () => {}
            }
            _buildInstruction(l, u, y, T, N) {
                return l.transition.build(this.driver, l.element, l.fromState.value, l.toState.value, y, T, l.fromState.options, l.toState.options, u, N)
            }
            destroyInnerAnimations(l) {
                let u = this.driver.query(l, Xn, !0);
                u.forEach(y => this.destroyActiveAnimationsForElement(y)),
                0 != this.playersByQueriedElement.size && (u = this.driver.query(l, W, !0),
                u.forEach(y => this.finishActiveQueriedAnimationOnElement(y)))
            }
            destroyActiveAnimationsForElement(l) {
                const u = this.playersByElement.get(l);
                u && u.forEach(y => {
                    y.queued ? y.markedForDestroy = !0 : y.destroy()
                }
                )
            }
            finishActiveQueriedAnimationOnElement(l) {
                const u = this.playersByQueriedElement.get(l);
                u && u.forEach(y => y.finish())
            }
            whenRenderingDone() {
                return new Promise(l => {
                    if (this.players.length)
                        return B(this.players).onDone( () => l());
                    l()
                }
                )
            }
            processLeaveNode(l) {
                const u = l[Bt];
                if (u && u.setForRemoval) {
                    if (l[Bt] = zt,
                    u.namespaceId) {
                        this.destroyInnerAnimations(l);
                        const y = this._fetchNamespace(u.namespaceId);
                        y && y.clearElementCache(l)
                    }
                    this._onRemovalComplete(l, u.setForRemoval)
                }
                l.classList?.contains(ae) && this.markElementAsDisabled(l, !1),
                this.driver.query(l, ".ng-animate-disabled", !0).forEach(y => {
                    this.markElementAsDisabled(y, !1)
                }
                )
            }
            flush(l=-1) {
                let u = [];
                if (this.newHostElements.size && (this.newHostElements.forEach( (y, T) => this._balanceNamespaceList(y, T)),
                this.newHostElements.clear()),
                this.totalAnimations && this.collectedEnterElements.length)
                    for (let y = 0; y < this.collectedEnterElements.length; y++)
                        gr(this.collectedEnterElements[y], "ng-star-inserted");
                if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                    const y = [];
                    try {
                        u = this._flushAnimations(y, l)
                    } finally {
                        for (let T = 0; T < y.length; T++)
                            y[T]()
                    }
                } else
                    for (let y = 0; y < this.collectedLeaveElements.length; y++)
                        this.processLeaveNode(this.collectedLeaveElements[y]);
                if (this.totalQueuedPlayers = 0,
                this.collectedEnterElements.length = 0,
                this.collectedLeaveElements.length = 0,
                this._flushFns.forEach(y => y()),
                this._flushFns = [],
                this._whenQuietFns.length) {
                    const y = this._whenQuietFns;
                    this._whenQuietFns = [],
                    u.length ? B(u).onDone( () => {
                        y.forEach(T => T())
                    }
                    ) : y.forEach(T => T())
                }
            }
            reportError(l) {
                throw function ln(M) {
                    return new b.vHH(3402,!1)
                }()
            }
            _flushAnimations(l, u) {
                const y = new vi
                  , T = []
                  , N = new Map
                  , U = []
                  , j = new Map
                  , re = new Map
                  , ve = new Map
                  , Ke = new Set;
                this.disabledNodes.forEach(et => {
                    Ke.add(et);
                    const at = this.driver.query(et, ".ng-animate-queued", !0);
                    for (let ht = 0; ht < at.length; ht++)
                        Ke.add(at[ht])
                }
                );
                const tt = this.bodyNode
                  , xt = Array.from(this.statesByElement.keys())
                  , It = lo(xt, this.collectedEnterElements)
                  , yt = new Map;
                let vt = 0;
                It.forEach( (et, at) => {
                    const ht = Ir + vt++;
                    yt.set(at, ht),
                    et.forEach(Nt => gr(Nt, ht))
                }
                );
                const Ht = []
                  , Qt = new Set
                  , vn = new Set;
                for (let et = 0; et < this.collectedLeaveElements.length; et++) {
                    const at = this.collectedLeaveElements[et]
                      , ht = at[Bt];
                    ht && ht.setForRemoval && (Ht.push(at),
                    Qt.add(at),
                    ht.hasAnimation ? this.driver.query(at, ".ng-star-inserted", !0).forEach(Nt => Qt.add(Nt)) : vn.add(at))
                }
                const Gn = new Map
                  , Nn = lo(xt, Array.from(Qt));
                Nn.forEach( (et, at) => {
                    const ht = Kn + vt++;
                    Gn.set(at, ht),
                    et.forEach(Nt => gr(Nt, ht))
                }
                ),
                l.push( () => {
                    It.forEach( (et, at) => {
                        const ht = yt.get(at);
                        et.forEach(Nt => an(Nt, ht))
                    }
                    ),
                    Nn.forEach( (et, at) => {
                        const ht = Gn.get(at);
                        et.forEach(Nt => an(Nt, ht))
                    }
                    ),
                    Ht.forEach(et => {
                        this.processLeaveNode(et)
                    }
                    )
                }
                );
                const Br = []
                  , Zr = [];
                for (let et = this._namespaceList.length - 1; et >= 0; et--)
                    this._namespaceList[et].drainQueuedTransitions(u).forEach(ht => {
                        const Nt = ht.player
                          , Rt = ht.element;
                        if (Br.push(Nt),
                        this.collectedEnterElements.length) {
                            const Mn = Rt[Bt];
                            if (Mn && Mn.setForMove) {
                                if (Mn.previousTriggersValues && Mn.previousTriggersValues.has(ht.triggerName)) {
                                    const ti = Mn.previousTriggersValues.get(ht.triggerName)
                                      , Ur = this.statesByElement.get(ht.element);
                                    if (Ur && Ur.has(ht.triggerName)) {
                                        const Yi = Ur.get(ht.triggerName);
                                        Yi.value = ti,
                                        Ur.set(ht.triggerName, Yi)
                                    }
                                }
                                return void Nt.destroy()
                            }
                        }
                        const ei = !tt || !this.driver.containsElement(tt, Rt)
                          , Zn = Gn.get(Rt)
                          , br = yt.get(Rt)
                          , nn = this._buildInstruction(ht, y, br, Zn, ei);
                        if (nn.errors && nn.errors.length)
                            return void Zr.push(nn);
                        if (ei)
                            return Nt.onStart( () => $n(Rt, nn.fromStyles)),
                            Nt.onDestroy( () => Ft(Rt, nn.toStyles)),
                            void T.push(Nt);
                        if (ht.isFallbackTransition)
                            return Nt.onStart( () => $n(Rt, nn.fromStyles)),
                            Nt.onDestroy( () => Ft(Rt, nn.toStyles)),
                            void T.push(Nt);
                        const Po = [];
                        nn.timelines.forEach(Mn => {
                            Mn.stretchStartingKeyframe = !0,
                            this.disabledNodes.has(Mn.element) || Po.push(Mn)
                        }
                        ),
                        nn.timelines = Po,
                        y.append(Rt, nn.timelines),
                        U.push({
                            instruction: nn,
                            player: Nt,
                            element: Rt
                        }),
                        nn.queriedElements.forEach(Mn => Re(j, Mn, []).push(Nt)),
                        nn.preStyleProps.forEach( (Mn, ti) => {
                            if (Mn.size) {
                                let Ur = re.get(ti);
                                Ur || re.set(ti, Ur = new Set),
                                Mn.forEach( (Yi, go) => Ur.add(go))
                            }
                        }
                        ),
                        nn.postStyleProps.forEach( (Mn, ti) => {
                            let Ur = ve.get(ti);
                            Ur || ve.set(ti, Ur = new Set),
                            Mn.forEach( (Yi, go) => Ur.add(go))
                        }
                        )
                    }
                    );
                if (Zr.length) {
                    const et = [];
                    Zr.forEach(at => {
                        et.push(function mr(M, l) {
                            return new b.vHH(3505,!1)
                        }())
                    }
                    ),
                    Br.forEach(at => at.destroy()),
                    this.reportError(et)
                }
                const _n = new Map
                  , wr = new Map;
                U.forEach(et => {
                    const at = et.element;
                    y.has(at) && (wr.set(at, at),
                    this._beforeAnimationBuild(et.player.namespaceId, et.instruction, _n))
                }
                ),
                T.forEach(et => {
                    const at = et.element;
                    this._getPreviousPlayers(at, !1, et.namespaceId, et.triggerName, null).forEach(Nt => {
                        Re(_n, at, []).push(Nt),
                        Nt.destroy()
                    }
                    )
                }
                );
                const or = Ht.filter(et => O(et, re, ve))
                  , Jr = new Map;
                Pt(Jr, this.driver, vn, ve, fe.l3).forEach(et => {
                    O(et, re, ve) && or.push(et)
                }
                );
                const Ki = new Map;
                It.forEach( (et, at) => {
                    Pt(Ki, this.driver, new Set(et), re, fe.k1)
                }
                ),
                or.forEach(et => {
                    const at = Jr.get(et)
                      , ht = Ki.get(et);
                    Jr.set(et, new Map([...Array.from(at?.entries() ?? []), ...Array.from(ht?.entries() ?? [])]))
                }
                );
                const Xr = []
                  , Hr = []
                  , ss = {};
                U.forEach(et => {
                    const {element: at, player: ht, instruction: Nt} = et;
                    if (y.has(at)) {
                        if (Ke.has(at))
                            return ht.onDestroy( () => Ft(at, Nt.toStyles)),
                            ht.disabled = !0,
                            ht.overrideTotalTime(Nt.totalTime),
                            void T.push(ht);
                        let Rt = ss;
                        if (wr.size > 1) {
                            let Zn = at;
                            const br = [];
                            for (; Zn = Zn.parentNode; ) {
                                const nn = wr.get(Zn);
                                if (nn) {
                                    Rt = nn;
                                    break
                                }
                                br.push(Zn)
                            }
                            br.forEach(nn => wr.set(nn, Rt))
                        }
                        const ei = this._buildAnimation(ht.namespaceId, Nt, _n, N, Ki, Jr);
                        if (ht.setRealPlayer(ei),
                        Rt === ss)
                            Xr.push(ht);
                        else {
                            const Zn = this.playersByElement.get(Rt);
                            Zn && Zn.length && (ht.parentPlayer = B(Zn)),
                            T.push(ht)
                        }
                    } else
                        $n(at, Nt.fromStyles),
                        ht.onDestroy( () => Ft(at, Nt.toStyles)),
                        Hr.push(ht),
                        Ke.has(at) && T.push(ht)
                }
                ),
                Hr.forEach(et => {
                    const at = N.get(et.element);
                    if (at && at.length) {
                        const ht = B(at);
                        et.setRealPlayer(ht)
                    }
                }
                ),
                T.forEach(et => {
                    et.parentPlayer ? et.syncPlayerEvents(et.parentPlayer) : et.destroy()
                }
                );
                for (let et = 0; et < Ht.length; et++) {
                    const at = Ht[et]
                      , ht = at[Bt];
                    if (an(at, Kn),
                    ht && ht.hasAnimation)
                        continue;
                    let Nt = [];
                    if (j.size) {
                        let ei = j.get(at);
                        ei && ei.length && Nt.push(...ei);
                        let Zn = this.driver.query(at, W, !0);
                        for (let br = 0; br < Zn.length; br++) {
                            let nn = j.get(Zn[br]);
                            nn && nn.length && Nt.push(...nn)
                        }
                    }
                    const Rt = Nt.filter(ei => !ei.destroyed);
                    Rt.length ? uo(this, at, Rt) : this.processLeaveNode(at)
                }
                return Ht.length = 0,
                Xr.forEach(et => {
                    this.players.push(et),
                    et.onDone( () => {
                        et.destroy();
                        const at = this.players.indexOf(et);
                        this.players.splice(at, 1)
                    }
                    ),
                    et.play()
                }
                ),
                Xr
            }
            elementContainsData(l, u) {
                let y = !1;
                const T = u[Bt];
                return T && T.setForRemoval && (y = !0),
                this.playersByElement.has(u) && (y = !0),
                this.playersByQueriedElement.has(u) && (y = !0),
                this.statesByElement.has(u) && (y = !0),
                this._fetchNamespace(l).elementContainsData(u) || y
            }
            afterFlush(l) {
                this._flushFns.push(l)
            }
            afterFlushAnimationsDone(l) {
                this._whenQuietFns.push(l)
            }
            _getPreviousPlayers(l, u, y, T, N) {
                let U = [];
                if (u) {
                    const j = this.playersByQueriedElement.get(l);
                    j && (U = j)
                } else {
                    const j = this.playersByElement.get(l);
                    if (j) {
                        const re = !N || N == qe;
                        j.forEach(ve => {
                            ve.queued || !re && ve.triggerName != T || U.push(ve)
                        }
                        )
                    }
                }
                return (y || T) && (U = U.filter(j => !(y && y != j.namespaceId || T && T != j.triggerName))),
                U
            }
            _beforeAnimationBuild(l, u, y) {
                const N = u.element
                  , U = u.isRemovalTransition ? void 0 : l
                  , j = u.isRemovalTransition ? void 0 : u.triggerName;
                for (const re of u.timelines) {
                    const ve = re.element
                      , Ke = ve !== N
                      , tt = Re(y, ve, []);
                    this._getPreviousPlayers(ve, Ke, U, j, u.toState).forEach(It => {
                        const yt = It.getRealPlayer();
                        yt.beforeDestroy && yt.beforeDestroy(),
                        It.destroy(),
                        tt.push(It)
                    }
                    )
                }
                $n(N, u.fromStyles)
            }
            _buildAnimation(l, u, y, T, N, U) {
                const j = u.triggerName
                  , re = u.element
                  , ve = []
                  , Ke = new Set
                  , tt = new Set
                  , xt = u.timelines.map(yt => {
                    const vt = yt.element;
                    Ke.add(vt);
                    const Ht = vt[Bt];
                    if (Ht && Ht.removedBeforeQueried)
                        return new fe.ZN(yt.duration,yt.delay);
                    const Qt = vt !== re
                      , vn = function E(M) {
                        const l = [];
                        return v(M, l),
                        l
                    }((y.get(vt) || Gt).map(_n => _n.getRealPlayer())).filter(_n => !!_n.element && _n.element === vt)
                      , Gn = N.get(vt)
                      , Nn = U.get(vt)
                      , Br = k(0, this._normalizer, 0, yt.keyframes, Gn, Nn)
                      , Zr = this._buildPlayer(yt, Br, vn);
                    if (yt.subTimeline && T && tt.add(vt),
                    Qt) {
                        const _n = new Rn(l,j,vt);
                        _n.setRealPlayer(Zr),
                        ve.push(_n)
                    }
                    return Zr
                }
                );
                ve.forEach(yt => {
                    Re(this.playersByQueriedElement, yt.element, []).push(yt),
                    yt.onDone( () => function qr(M, l, u) {
                        let y = M.get(l);
                        if (y) {
                            if (y.length) {
                                const T = y.indexOf(u);
                                y.splice(T, 1)
                            }
                            0 == y.length && M.delete(l)
                        }
                        return y
                    }(this.playersByQueriedElement, yt.element, yt))
                }
                ),
                Ke.forEach(yt => gr(yt, er));
                const It = B(xt);
                return It.onDestroy( () => {
                    Ke.forEach(yt => an(yt, er)),
                    Ft(re, u.toStyles)
                }
                ),
                tt.forEach(yt => {
                    Re(T, yt, []).push(It)
                }
                ),
                It
            }
            _buildPlayer(l, u, y) {
                return u.length > 0 ? this.driver.animate(l.element, u, l.duration, l.delay, l.easing, y) : new fe.ZN(l.duration,l.delay)
            }
        }
        class Rn {
            constructor(l, u, y) {
                this.namespaceId = l,
                this.triggerName = u,
                this.element = y,
                this._player = new fe.ZN,
                this._containsRealPlayer = !1,
                this._queuedCallbacks = new Map,
                this.destroyed = !1,
                this.markedForDestroy = !1,
                this.disabled = !1,
                this.queued = !0,
                this.totalTime = 0
            }
            setRealPlayer(l) {
                this._containsRealPlayer || (this._player = l,
                this._queuedCallbacks.forEach( (u, y) => {
                    u.forEach(T => se(l, y, void 0, T))
                }
                ),
                this._queuedCallbacks.clear(),
                this._containsRealPlayer = !0,
                this.overrideTotalTime(l.totalTime),
                this.queued = !1)
            }
            getRealPlayer() {
                return this._player
            }
            overrideTotalTime(l) {
                this.totalTime = l
            }
            syncPlayerEvents(l) {
                const u = this._player;
                u.triggerCallback && l.onStart( () => u.triggerCallback("start")),
                l.onDone( () => this.finish()),
                l.onDestroy( () => this.destroy())
            }
            _queueEvent(l, u) {
                Re(this._queuedCallbacks, l, []).push(u)
            }
            onDone(l) {
                this.queued && this._queueEvent("done", l),
                this._player.onDone(l)
            }
            onStart(l) {
                this.queued && this._queueEvent("start", l),
                this._player.onStart(l)
            }
            onDestroy(l) {
                this.queued && this._queueEvent("destroy", l),
                this._player.onDestroy(l)
            }
            init() {
                this._player.init()
            }
            hasStarted() {
                return !this.queued && this._player.hasStarted()
            }
            play() {
                !this.queued && this._player.play()
            }
            pause() {
                !this.queued && this._player.pause()
            }
            restart() {
                !this.queued && this._player.restart()
            }
            finish() {
                this._player.finish()
            }
            destroy() {
                this.destroyed = !0,
                this._player.destroy()
            }
            reset() {
                !this.queued && this._player.reset()
            }
            setPosition(l) {
                this.queued || this._player.setPosition(l)
            }
            getPosition() {
                return this.queued ? 0 : this._player.getPosition()
            }
            triggerCallback(l) {
                const u = this._player;
                u.triggerCallback && u.triggerCallback(l)
            }
        }
        function Qr(M) {
            return M && 1 === M.nodeType
        }
        function Ie(M, l) {
            const u = M.style.display;
            return M.style.display = l ?? "none",
            u
        }
        function Pt(M, l, u, y, T) {
            const N = [];
            u.forEach(re => N.push(Ie(re)));
            const U = [];
            y.forEach( (re, ve) => {
                const Ke = new Map;
                re.forEach(tt => {
                    const xt = l.computeStyle(ve, tt, T);
                    Ke.set(tt, xt),
                    (!xt || 0 == xt.length) && (ve[Bt] = Dt,
                    U.push(ve))
                }
                ),
                M.set(ve, Ke)
            }
            );
            let j = 0;
            return u.forEach(re => Ie(re, N[j++])),
            U
        }
        function lo(M, l) {
            const u = new Map;
            if (M.forEach(j => u.set(j, [])),
            0 == l.length)
                return u;
            const T = new Set(l)
              , N = new Map;
            function U(j) {
                if (!j)
                    return 1;
                let re = N.get(j);
                if (re)
                    return re;
                const ve = j.parentNode;
                return re = u.has(ve) ? ve : T.has(ve) ? 1 : U(ve),
                N.set(j, re),
                re
            }
            return l.forEach(j => {
                const re = U(j);
                1 !== re && u.get(re).push(j)
            }
            ),
            u
        }
        function gr(M, l) {
            M.classList?.add(l)
        }
        function an(M, l) {
            M.classList?.remove(l)
        }
        function uo(M, l, u) {
            B(u).onDone( () => M.processLeaveNode(l))
        }
        function v(M, l) {
            for (let u = 0; u < M.length; u++) {
                const y = M[u];
                y instanceof fe.ZE ? v(y.players, l) : l.push(y)
            }
        }
        function O(M, l, u) {
            const y = u.get(M);
            if (!y)
                return !1;
            let T = l.get(M);
            return T ? y.forEach(N => T.add(N)) : l.set(M, y),
            u.delete(M),
            !0
        }
        class ue {
            constructor(l, u, y) {
                this.bodyNode = l,
                this._driver = u,
                this._normalizer = y,
                this._triggerCache = {},
                this.onRemovalComplete = (T, N) => {}
                ,
                this._transitionEngine = new Ni(l,u,y),
                this._timelineEngine = new C(l,u,y),
                this._transitionEngine.onRemovalComplete = (T, N) => this.onRemovalComplete(T, N)
            }
            registerTrigger(l, u, y, T, N) {
                const U = l + "-" + T;
                let j = this._triggerCache[U];
                if (!j) {
                    const re = []
                      , Ke = Mi(this._driver, N, re, []);
                    if (re.length)
                        throw function Cn(M, l) {
                            return new b.vHH(3404,!1)
                        }();
                    j = function ao(M, l, u) {
                        return new Ci(M,l,u)
                    }(T, Ke, this._normalizer),
                    this._triggerCache[U] = j
                }
                this._transitionEngine.registerTrigger(u, T, j)
            }
            register(l, u) {
                this._transitionEngine.register(l, u)
            }
            destroy(l, u) {
                this._transitionEngine.destroy(l, u)
            }
            onInsert(l, u, y, T) {
                this._transitionEngine.insertNode(l, u, y, T)
            }
            onRemove(l, u, y, T) {
                this._transitionEngine.removeNode(l, u, T || !1, y)
            }
            disableAnimations(l, u) {
                this._transitionEngine.markElementAsDisabled(l, u)
            }
            process(l, u, y, T) {
                if ("@" == y.charAt(0)) {
                    const [N,U] = dt(y);
                    this._timelineEngine.command(N, u, U, T)
                } else
                    this._transitionEngine.trigger(l, u, y, T)
            }
            listen(l, u, y, T, N) {
                if ("@" == y.charAt(0)) {
                    const [U,j] = dt(y);
                    return this._timelineEngine.listen(U, u, j, N)
                }
                return this._transitionEngine.listen(l, u, y, T, N)
            }
            flush(l=-1) {
                this._transitionEngine.flush(l)
            }
            get players() {
                return this._transitionEngine.players.concat(this._timelineEngine.players)
            }
            whenRenderingDone() {
                return this._transitionEngine.whenRenderingDone()
            }
        }
        let cn = ( () => {
            class M {
                constructor(u, y, T) {
                    this._element = u,
                    this._startStyles = y,
                    this._endStyles = T,
                    this._state = 0;
                    let N = M.initialStylesByElement.get(u);
                    N || M.initialStylesByElement.set(u, N = new Map),
                    this._initialStyles = N
                }
                start() {
                    this._state < 1 && (this._startStyles && Ft(this._element, this._startStyles, this._initialStyles),
                    this._state = 1)
                }
                finish() {
                    this.start(),
                    this._state < 2 && (Ft(this._element, this._initialStyles),
                    this._endStyles && (Ft(this._element, this._endStyles),
                    this._endStyles = null),
                    this._state = 1)
                }
                destroy() {
                    this.finish(),
                    this._state < 3 && (M.initialStylesByElement.delete(this._element),
                    this._startStyles && ($n(this._element, this._startStyles),
                    this._endStyles = null),
                    this._endStyles && ($n(this._element, this._endStyles),
                    this._endStyles = null),
                    Ft(this._element, this._initialStyles),
                    this._state = 3)
                }
            }
            return M.initialStylesByElement = new WeakMap,
            M
        }
        )();
        function xn(M) {
            let l = null;
            return M.forEach( (u, y) => {
                (function hn(M) {
                    return "display" === M || "position" === M
                }
                )(y) && (l = l || new Map,
                l.set(y, u))
            }
            ),
            l
        }
        class Ln {
            constructor(l, u, y, T) {
                this.element = l,
                this.keyframes = u,
                this.options = y,
                this._specialStyles = T,
                this._onDoneFns = [],
                this._onStartFns = [],
                this._onDestroyFns = [],
                this._initialized = !1,
                this._finished = !1,
                this._started = !1,
                this._destroyed = !1,
                this._originalOnDoneFns = [],
                this._originalOnStartFns = [],
                this.time = 0,
                this.parentPlayer = null,
                this.currentSnapshot = new Map,
                this._duration = y.duration,
                this._delay = y.delay || 0,
                this.time = this._duration + this._delay
            }
            _onFinish() {
                this._finished || (this._finished = !0,
                this._onDoneFns.forEach(l => l()),
                this._onDoneFns = [])
            }
            init() {
                this._buildPlayer(),
                this._preparePlayerBeforeStart()
            }
            _buildPlayer() {
                if (this._initialized)
                    return;
                this._initialized = !0;
                const l = this.keyframes;
                this.domPlayer = this._triggerWebAnimation(this.element, l, this.options),
                this._finalKeyframe = l.length ? l[l.length - 1] : new Map,
                this.domPlayer.addEventListener("finish", () => this._onFinish())
            }
            _preparePlayerBeforeStart() {
                this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
            }
            _convertKeyframesToObject(l) {
                const u = [];
                return l.forEach(y => {
                    u.push(Object.fromEntries(y))
                }
                ),
                u
            }
            _triggerWebAnimation(l, u, y) {
                return l.animate(this._convertKeyframesToObject(u), y)
            }
            onStart(l) {
                this._originalOnStartFns.push(l),
                this._onStartFns.push(l)
            }
            onDone(l) {
                this._originalOnDoneFns.push(l),
                this._onDoneFns.push(l)
            }
            onDestroy(l) {
                this._onDestroyFns.push(l)
            }
            play() {
                this._buildPlayer(),
                this.hasStarted() || (this._onStartFns.forEach(l => l()),
                this._onStartFns = [],
                this._started = !0,
                this._specialStyles && this._specialStyles.start()),
                this.domPlayer.play()
            }
            pause() {
                this.init(),
                this.domPlayer.pause()
            }
            finish() {
                this.init(),
                this._specialStyles && this._specialStyles.finish(),
                this._onFinish(),
                this.domPlayer.finish()
            }
            reset() {
                this._resetDomPlayerState(),
                this._destroyed = !1,
                this._finished = !1,
                this._started = !1,
                this._onStartFns = this._originalOnStartFns,
                this._onDoneFns = this._originalOnDoneFns
            }
            _resetDomPlayerState() {
                this.domPlayer && this.domPlayer.cancel()
            }
            restart() {
                this.reset(),
                this.play()
            }
            hasStarted() {
                return this._started
            }
            destroy() {
                this._destroyed || (this._destroyed = !0,
                this._resetDomPlayerState(),
                this._onFinish(),
                this._specialStyles && this._specialStyles.destroy(),
                this._onDestroyFns.forEach(l => l()),
                this._onDestroyFns = [])
            }
            setPosition(l) {
                void 0 === this.domPlayer && this.init(),
                this.domPlayer.currentTime = l * this.time
            }
            getPosition() {
                return this.domPlayer.currentTime / this.time
            }
            get totalTime() {
                return this._delay + this._duration
            }
            beforeDestroy() {
                const l = new Map;
                this.hasStarted() && this._finalKeyframe.forEach( (y, T) => {
                    "offset" !== T && l.set(T, this._finished ? y : Vt(this.element, T))
                }
                ),
                this.currentSnapshot = l
            }
            triggerCallback(l) {
                const u = "start" === l ? this._onStartFns : this._onDoneFns;
                u.forEach(y => y()),
                u.length = 0
            }
        }
        class Fi {
            validateStyleProperty(l) {
                return !0
            }
            validateAnimatableStyleProperty(l) {
                return !0
            }
            matchesElement(l, u) {
                return !1
            }
            containsElement(l, u) {
                return Un(l, u)
            }
            getParentElement(l) {
                return At(l)
            }
            query(l, u, y) {
                return Xt(l, u, y)
            }
            computeStyle(l, u, y) {
                return window.getComputedStyle(l)[u]
            }
            animate(l, u, y, T, N, U=[]) {
                const re = {
                    duration: y,
                    delay: T,
                    fill: 0 == T ? "both" : "forwards"
                };
                N && (re.easing = N);
                const ve = new Map
                  , Ke = U.filter(It => It instanceof Ln);
                (function Pn(M, l) {
                    return 0 === M || 0 === l
                }
                )(y, T) && Ke.forEach(It => {
                    It.currentSnapshot.forEach( (yt, vt) => ve.set(vt, yt))
                }
                );
                let tt = function Ct(M) {
                    return M.length ? M[0]instanceof Map ? M : M.map(l => He(l)) : []
                }(u).map(It => sn(It));
                tt = function Or(M, l, u) {
                    if (u.size && l.length) {
                        let y = l[0]
                          , T = [];
                        if (u.forEach( (N, U) => {
                            y.has(U) || T.push(U),
                            y.set(U, N)
                        }
                        ),
                        T.length)
                            for (let N = 1; N < l.length; N++) {
                                let U = l[N];
                                T.forEach(j => U.set(j, Vt(M, j)))
                            }
                    }
                    return l
                }(l, tt, ve);
                const xt = function Ze(M, l) {
                    let u = null
                      , y = null;
                    return Array.isArray(l) && l.length ? (u = xn(l[0]),
                    l.length > 1 && (y = xn(l[l.length - 1]))) : l instanceof Map && (u = xn(l)),
                    u || y ? new cn(M,u,y) : null
                }(l, tt);
                return new Ln(l,tt,re,xt)
            }
        }
        let kr = ( () => {
            class M extends fe._j {
                constructor(u, y) {
                    super(),
                    this._nextAnimationId = 0,
                    this._renderer = u.createRenderer(y.body, {
                        id: "0",
                        encapsulation: b.ifc.None,
                        styles: [],
                        data: {
                            animation: []
                        }
                    })
                }
                build(u) {
                    const y = this._nextAnimationId.toString();
                    this._nextAnimationId++;
                    const T = Array.isArray(u) ? (0,
                    fe.vP)(u) : u;
                    return bo(this._renderer, null, y, "register", [T]),
                    new Vr(y,this._renderer)
                }
            }
            return M.\u0275fac = function(u) {
                return new (u || M)(b.LFG(b.FYo),b.LFG(ce.K0))
            }
            ,
            M.\u0275prov = b.Yz7({
                token: M,
                factory: M.\u0275fac
            }),
            M
        }
        )();
        class Vr extends fe.LC {
            constructor(l, u) {
                super(),
                this._id = l,
                this._renderer = u
            }
            create(l, u) {
                return new Uo(this._id,l,u || {},this._renderer)
            }
        }
        class Uo {
            constructor(l, u, y, T) {
                this.id = l,
                this.element = u,
                this._renderer = T,
                this.parentPlayer = null,
                this._started = !1,
                this.totalTime = 0,
                this._command("create", y)
            }
            _listen(l, u) {
                return this._renderer.listen(this.element, `@@${this.id}:${l}`, u)
            }
            _command(l, ...u) {
                return bo(this._renderer, this.element, this.id, l, u)
            }
            onDone(l) {
                this._listen("done", l)
            }
            onStart(l) {
                this._listen("start", l)
            }
            onDestroy(l) {
                this._listen("destroy", l)
            }
            init() {
                this._command("init")
            }
            hasStarted() {
                return this._started
            }
            play() {
                this._command("play"),
                this._started = !0
            }
            pause() {
                this._command("pause")
            }
            restart() {
                this._command("restart")
            }
            finish() {
                this._command("finish")
            }
            destroy() {
                this._command("destroy")
            }
            reset() {
                this._command("reset"),
                this._started = !1
            }
            setPosition(l) {
                this._command("setPosition", l)
            }
            getPosition() {
                return this._renderer.engine.players[+this.id]?.getPosition() ?? 0
            }
        }
        function bo(M, l, u, y, T) {
            return M.setProperty(l, `@@${u}:${y}`, T)
        }
        const co = "@.disabled";
        let jo = ( () => {
            class M {
                constructor(u, y, T) {
                    this.delegate = u,
                    this.engine = y,
                    this._zone = T,
                    this._currentId = 0,
                    this._microtaskId = 1,
                    this._animationCallbacksBuffer = [],
                    this._rendererCache = new Map,
                    this._cdRecurDepth = 0,
                    this.promise = Promise.resolve(0),
                    y.onRemovalComplete = (N, U) => {
                        const j = U?.parentNode(N);
                        j && U.removeChild(j, N)
                    }
                }
                createRenderer(u, y) {
                    const N = this.delegate.createRenderer(u, y);
                    if (!(u && y && y.data && y.data.animation)) {
                        let Ke = this._rendererCache.get(N);
                        return Ke || (Ke = new Mo("",N,this.engine),
                        this._rendererCache.set(N, Ke)),
                        Ke
                    }
                    const U = y.id
                      , j = y.id + "-" + this._currentId;
                    this._currentId++,
                    this.engine.register(j, u);
                    const re = Ke => {
                        Array.isArray(Ke) ? Ke.forEach(re) : this.engine.registerTrigger(U, j, u, Ke.name, Ke)
                    }
                    ;
                    return y.data.animation.forEach(re),
                    new os(this,j,N,this.engine)
                }
                begin() {
                    this._cdRecurDepth++,
                    this.delegate.begin && this.delegate.begin()
                }
                _scheduleCountTask() {
                    this.promise.then( () => {
                        this._microtaskId++
                    }
                    )
                }
                scheduleListenerCallback(u, y, T) {
                    u >= 0 && u < this._microtaskId ? this._zone.run( () => y(T)) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then( () => {
                        this._zone.run( () => {
                            this._animationCallbacksBuffer.forEach(N => {
                                const [U,j] = N;
                                U(j)
                            }
                            ),
                            this._animationCallbacksBuffer = []
                        }
                        )
                    }
                    ),
                    this._animationCallbacksBuffer.push([y, T]))
                }
                end() {
                    this._cdRecurDepth--,
                    0 == this._cdRecurDepth && this._zone.runOutsideAngular( () => {
                        this._scheduleCountTask(),
                        this.engine.flush(this._microtaskId)
                    }
                    ),
                    this.delegate.end && this.delegate.end()
                }
                whenRenderingDone() {
                    return this.engine.whenRenderingDone()
                }
            }
            return M.\u0275fac = function(u) {
                return new (u || M)(b.LFG(b.FYo),b.LFG(ue),b.LFG(b.R0b))
            }
            ,
            M.\u0275prov = b.Yz7({
                token: M,
                factory: M.\u0275fac
            }),
            M
        }
        )();
        class Mo {
            constructor(l, u, y) {
                this.namespaceId = l,
                this.delegate = u,
                this.engine = y,
                this.destroyNode = this.delegate.destroyNode ? T => u.destroyNode(T) : null
            }
            get data() {
                return this.delegate.data
            }
            destroy() {
                this.engine.destroy(this.namespaceId, this.delegate),
                this.delegate.destroy()
            }
            createElement(l, u) {
                return this.delegate.createElement(l, u)
            }
            createComment(l) {
                return this.delegate.createComment(l)
            }
            createText(l) {
                return this.delegate.createText(l)
            }
            appendChild(l, u) {
                this.delegate.appendChild(l, u),
                this.engine.onInsert(this.namespaceId, u, l, !1)
            }
            insertBefore(l, u, y, T=!0) {
                this.delegate.insertBefore(l, u, y),
                this.engine.onInsert(this.namespaceId, u, l, T)
            }
            removeChild(l, u, y) {
                this.engine.onRemove(this.namespaceId, u, this.delegate, y)
            }
            selectRootElement(l, u) {
                return this.delegate.selectRootElement(l, u)
            }
            parentNode(l) {
                return this.delegate.parentNode(l)
            }
            nextSibling(l) {
                return this.delegate.nextSibling(l)
            }
            setAttribute(l, u, y, T) {
                this.delegate.setAttribute(l, u, y, T)
            }
            removeAttribute(l, u, y) {
                this.delegate.removeAttribute(l, u, y)
            }
            addClass(l, u) {
                this.delegate.addClass(l, u)
            }
            removeClass(l, u) {
                this.delegate.removeClass(l, u)
            }
            setStyle(l, u, y, T) {
                this.delegate.setStyle(l, u, y, T)
            }
            removeStyle(l, u, y) {
                this.delegate.removeStyle(l, u, y)
            }
            setProperty(l, u, y) {
                "@" == u.charAt(0) && u == co ? this.disableAnimations(l, !!y) : this.delegate.setProperty(l, u, y)
            }
            setValue(l, u) {
                this.delegate.setValue(l, u)
            }
            listen(l, u, y) {
                return this.delegate.listen(l, u, y)
            }
            disableAnimations(l, u) {
                this.engine.disableAnimations(l, u)
            }
        }
        class os extends Mo {
            constructor(l, u, y, T) {
                super(u, y, T),
                this.factory = l,
                this.namespaceId = u
            }
            setProperty(l, u, y) {
                "@" == u.charAt(0) ? "." == u.charAt(1) && u == co ? this.disableAnimations(l, y = void 0 === y || !!y) : this.engine.process(this.namespaceId, l, u.slice(1), y) : this.delegate.setProperty(l, u, y)
            }
            listen(l, u, y) {
                if ("@" == u.charAt(0)) {
                    const T = function $o(M) {
                        switch (M) {
                        case "body":
                            return document.body;
                        case "document":
                            return document;
                        case "window":
                            return window;
                        default:
                            return M
                        }
                    }(l);
                    let N = u.slice(1)
                      , U = "";
                    return "@" != N.charAt(0) && ([N,U] = function To(M) {
                        const l = M.indexOf(".");
                        return [M.substring(0, l), M.slice(l + 1)]
                    }(N)),
                    this.engine.listen(this.namespaceId, T, N, U, j => {
                        this.factory.scheduleListenerCallback(j._data || -1, y, j)
                    }
                    )
                }
                return this.delegate.listen(l, u, y)
            }
        }
        const Wi = [{
            provide: fe._j,
            useClass: kr
        }, {
            provide: ci,
            useFactory: function So() {
                return new Rr
            }
        }, {
            provide: ue,
            useClass: ( () => {
                class M extends ue {
                    constructor(u, y, T, N) {
                        super(u.body, y, T)
                    }
                    ngOnDestroy() {
                        this.flush()
                    }
                }
                return M.\u0275fac = function(u) {
                    return new (u || M)(b.LFG(ce.K0),b.LFG(Wn),b.LFG(ci),b.LFG(b.z2F))
                }
                ,
                M.\u0275prov = b.Yz7({
                    token: M,
                    factory: M.\u0275fac
                }),
                M
            }
            )()
        }, {
            provide: b.FYo,
            useFactory: function fo(M, l, u) {
                return new jo(M,l,u)
            },
            deps: [a.se, ue, b.R0b]
        }]
          , ho = [{
            provide: Wn,
            useFactory: () => new Fi
        }, {
            provide: b.QbO,
            useValue: "BrowserAnimations"
        }, ...Wi]
          , Ri = [{
            provide: Wn,
            useClass: ar
        }, {
            provide: b.QbO,
            useValue: "NoopAnimations"
        }, ...Wi];
        let Ao = ( () => {
            class M {
                static withConfig(u) {
                    return {
                        ngModule: M,
                        providers: u.disableAnimations ? Ri : ho
                    }
                }
            }
            return M.\u0275fac = function(u) {
                return new (u || M)
            }
            ,
            M.\u0275mod = b.oAB({
                type: M
            }),
            M.\u0275inj = b.cJS({
                providers: ho,
                imports: [a.b2]
            }),
            M
        }
        )();
        const yn = {
            provide: _e.E,
            useFactory: () => {
                const M = new _e.E
                  , u = (window || {}).__config || {};
                for (const y in u)
                    u.hasOwnProperty(y) && (M[y] = window.__config[y]);
                return M
            }
            ,
            deps: []
        };
        var po = I(3787);
        let ks = ( () => {
            class M {
                constructor(u, y, T) {
                    this.authenticationService = u,
                    this.router = y,
                    this.config = T
                }
                intercept(u, y) {
                    const T = new Date;
                    let N = this.authenticationService.currentUserValue;
                    if (u.url.includes("SignOut") || u.url.includes("Expire"))
                        return u = u.clone({
                            setHeaders: {
                                Authorization: `Bearer ${N.token}`
                            }
                        }),
                        y.handle(u);
                    if (N && !localStorage.getItem("caCurrentUser"))
                        return this.authenticationService.logout(),
                        void this.router.navigate(["/login"]);
                    if (null == N || null == N)
                        return y.handle(u);
                    {
                        const U = N.session
                          , j = N && N.token
                          , re = u.url.startsWith(new po.y(this.config).domainName);
                        if (null != U && null != U && j) {
                            const ve = this.config.sessionExpiration
                              , Ke = new Date(new Date(U).getTime() + 6e4 * ve);
                            if (j && re && Ke >= T)
                                return u = u.clone({
                                    setHeaders: {
                                        Authorization: `Bearer ${N.token}`
                                    }
                                }),
                                N.session = new Date,
                                this.authenticationService.updateSession(N),
                                y.handle(u);
                            this.authenticationService.logout(),
                            this.router.navigate(["/login"])
                        } else {
                            if (!j)
                                return y.handle(u);
                            this.authenticationService.logout(),
                            this.router.navigate(["/login"])
                        }
                    }
                }
            }
            return M.\u0275fac = function(u) {
                return new (u || M)(b.LFG(ie.$),b.LFG(te.F0),b.LFG(_e.E))
            }
            ,
            M.\u0275prov = b.Yz7({
                token: M,
                factory: M.\u0275fac
            }),
            M
        }
        )();
        var Io = I(2843)
          , Vs = I(262);
        let Bs = ( () => {
            class M {
                constructor(u, y) {
                    this.authenticationService = u,
                    this.router = y
                }
                intercept(u, y) {
                    return y.handle(u).pipe((0,
                    Vs.K)(T => 401 === T.status ? (this.authenticationService.logout(),
                    this.router.navigate(["/login"]),
                    (0,
                    Io._)(T)) : 403 === T.status ? (this.authenticationService.clearOldSession(),
                    this.router.navigate(["/login"]),
                    (0,
                    Io._)(T)) : 502 === T.status ? (this.router.navigate(["/login"]),
                    (0,
                    Io._)(T)) : (0,
                    Io._)(T.error.message || T.statusText)))
                }
            }
            return M.\u0275fac = function(u) {
                return new (u || M)(b.LFG(ie.$),b.LFG(te.F0))
            }
            ,
            M.\u0275prov = b.Yz7({
                token: M,
                factory: M.\u0275fac,
                providedIn: "root"
            }),
            M
        }
        )()
          , Hs = ( () => {
            class M {
            }
            return M.\u0275fac = function(u) {
                return new (u || M)
            }
            ,
            M.\u0275mod = b.oAB({
                type: M,
                bootstrap: [Be]
            }),
            M.\u0275inj = b.cJS({
                providers: [yn, {
                    provide: de.TP,
                    useClass: ks,
                    multi: !0
                }, {
                    provide: de.TP,
                    useClass: Bs,
                    multi: !0
                }],
                imports: [a.b2, Mt, Ao, oe.u5, oe.UX, de.JF, xe.Rh.forRoot({
                    closeButton: !0,
                    newestOnTop: !1,
                    progressBar: !0,
                    positionClass: "toast-bottom-right",
                    preventDuplicates: !1,
                    timeOut: 5e3,
                    extendedTimeOut: 1e3
                })]
            }),
            M
        }
        )();
        (0,
        b.G48)(),
        a.q6().bootstrapModule(Hs).catch(M => console.error(M))
    }
    ,
    1135: (Je, pe, I) => {
        I.d(pe, {
            X: () => b
        });
        var a = I(7579);
        class b extends a.x {
            constructor(te) {
                super(),
                this._value = te
            }
            get value() {
                return this.getValue()
            }
            _subscribe(te) {
                const ie = super._subscribe(te);
                return !ie.closed && te.next(this._value),
                ie
            }
            getValue() {
                const {hasError: te, thrownError: ie, _value: be} = this;
                if (te)
                    throw ie;
                return this._throwIfClosed(),
                be
            }
            next(te) {
                super.next(this._value = te)
            }
        }
    }
    ,
    9751: (Je, pe, I) => {
        I.d(pe, {
            y: () => Oe
        });
        var a = I(930)
          , b = I(727)
          , oe = I(8822)
          , te = I(9635)
          , ie = I(2416)
          , be = I(576)
          , Ce = I(2806);
        let Oe = ( () => {
            class _e {
                constructor(ce) {
                    ce && (this._subscribe = ce)
                }
                lift(ce) {
                    const Ne = new _e;
                    return Ne.source = this,
                    Ne.operator = ce,
                    Ne
                }
                subscribe(ce, Ne, je) {
                    const Qe = function z(_e) {
                        return _e && _e instanceof a.Lv || function de(_e) {
                            return _e && (0,
                            be.m)(_e.next) && (0,
                            be.m)(_e.error) && (0,
                            be.m)(_e.complete)
                        }(_e) && (0,
                        b.Nn)(_e)
                    }(ce) ? ce : new a.Hp(ce,Ne,je);
                    return (0,
                    Ce.x)( () => {
                        const {operator: it, source: Mt} = this;
                        Qe.add(it ? it.call(Qe, Mt) : Mt ? this._subscribe(Qe) : this._trySubscribe(Qe))
                    }
                    ),
                    Qe
                }
                _trySubscribe(ce) {
                    try {
                        return this._subscribe(ce)
                    } catch (Ne) {
                        ce.error(Ne)
                    }
                }
                forEach(ce, Ne) {
                    return new (Ne = Se(Ne))( (je, Qe) => {
                        const it = new a.Hp({
                            next: Mt => {
                                try {
                                    ce(Mt)
                                } catch (Be) {
                                    Qe(Be),
                                    it.unsubscribe()
                                }
                            }
                            ,
                            error: Qe,
                            complete: je
                        });
                        this.subscribe(it)
                    }
                    )
                }
                _subscribe(ce) {
                    var Ne;
                    return null === (Ne = this.source) || void 0 === Ne ? void 0 : Ne.subscribe(ce)
                }
                [oe.L]() {
                    return this
                }
                pipe(...ce) {
                    return (0,
                    te.U)(ce)(this)
                }
                toPromise(ce) {
                    return new (ce = Se(ce))( (Ne, je) => {
                        let Qe;
                        this.subscribe(it => Qe = it, it => je(it), () => Ne(Qe))
                    }
                    )
                }
            }
            return _e.create = xe => new _e(xe),
            _e
        }
        )();
        function Se(_e) {
            var xe;
            return null !== (xe = _e ?? ie.v.Promise) && void 0 !== xe ? xe : Promise
        }
    }
    ,
    7579: (Je, pe, I) => {
        I.d(pe, {
            x: () => Ce
        });
        var a = I(9751)
          , b = I(727);
        const te = (0,
        I(3888).d)(Se => function() {
            Se(this),
            this.name = "ObjectUnsubscribedError",
            this.message = "object unsubscribed"
        }
        );
        var ie = I(8737)
          , be = I(2806);
        let Ce = ( () => {
            class Se extends a.y {
                constructor() {
                    super(),
                    this.closed = !1,
                    this.currentObservers = null,
                    this.observers = [],
                    this.isStopped = !1,
                    this.hasError = !1,
                    this.thrownError = null
                }
                lift(z) {
                    const _e = new Oe(this,this);
                    return _e.operator = z,
                    _e
                }
                _throwIfClosed() {
                    if (this.closed)
                        throw new te
                }
                next(z) {
                    (0,
                    be.x)( () => {
                        if (this._throwIfClosed(),
                        !this.isStopped) {
                            this.currentObservers || (this.currentObservers = Array.from(this.observers));
                            for (const _e of this.currentObservers)
                                _e.next(z)
                        }
                    }
                    )
                }
                error(z) {
                    (0,
                    be.x)( () => {
                        if (this._throwIfClosed(),
                        !this.isStopped) {
                            this.hasError = this.isStopped = !0,
                            this.thrownError = z;
                            const {observers: _e} = this;
                            for (; _e.length; )
                                _e.shift().error(z)
                        }
                    }
                    )
                }
                complete() {
                    (0,
                    be.x)( () => {
                        if (this._throwIfClosed(),
                        !this.isStopped) {
                            this.isStopped = !0;
                            const {observers: z} = this;
                            for (; z.length; )
                                z.shift().complete()
                        }
                    }
                    )
                }
                unsubscribe() {
                    this.isStopped = this.closed = !0,
                    this.observers = this.currentObservers = null
                }
                get observed() {
                    var z;
                    return (null === (z = this.observers) || void 0 === z ? void 0 : z.length) > 0
                }
                _trySubscribe(z) {
                    return this._throwIfClosed(),
                    super._trySubscribe(z)
                }
                _subscribe(z) {
                    return this._throwIfClosed(),
                    this._checkFinalizedStatuses(z),
                    this._innerSubscribe(z)
                }
                _innerSubscribe(z) {
                    const {hasError: _e, isStopped: xe, observers: ce} = this;
                    return _e || xe ? b.Lc : (this.currentObservers = null,
                    ce.push(z),
                    new b.w0( () => {
                        this.currentObservers = null,
                        (0,
                        ie.P)(ce, z)
                    }
                    ))
                }
                _checkFinalizedStatuses(z) {
                    const {hasError: _e, thrownError: xe, isStopped: ce} = this;
                    _e ? z.error(xe) : ce && z.complete()
                }
                asObservable() {
                    const z = new a.y;
                    return z.source = this,
                    z
                }
            }
            return Se.create = (de, z) => new Oe(de,z),
            Se
        }
        )();
        class Oe extends Ce {
            constructor(de, z) {
                super(),
                this.destination = de,
                this.source = z
            }
            next(de) {
                var z, _e;
                null === (_e = null === (z = this.destination) || void 0 === z ? void 0 : z.next) || void 0 === _e || _e.call(z, de)
            }
            error(de) {
                var z, _e;
                null === (_e = null === (z = this.destination) || void 0 === z ? void 0 : z.error) || void 0 === _e || _e.call(z, de)
            }
            complete() {
                var de, z;
                null === (z = null === (de = this.destination) || void 0 === de ? void 0 : de.complete) || void 0 === z || z.call(de)
            }
            _subscribe(de) {
                var z, _e;
                return null !== (_e = null === (z = this.source) || void 0 === z ? void 0 : z.subscribe(de)) && void 0 !== _e ? _e : b.Lc
            }
        }
    }
    ,
    930: (Je, pe, I) => {
        I.d(pe, {
            Hp: () => je,
            Lv: () => _e
        });
        var a = I(576)
          , b = I(727)
          , oe = I(2416)
          , te = I(7849)
          , ie = I(5032);
        const be = Se("C", void 0, void 0);
        function Se(fe, X, le) {
            return {
                kind: fe,
                value: X,
                error: le
            }
        }
        var de = I(3410)
          , z = I(2806);
        class _e extends b.w0 {
            constructor(X) {
                super(),
                this.isStopped = !1,
                X ? (this.destination = X,
                (0,
                b.Nn)(X) && X.add(this)) : this.destination = Be
            }
            static create(X, le, ot) {
                return new je(X,le,ot)
            }
            next(X) {
                this.isStopped ? Mt(function Oe(fe) {
                    return Se("N", fe, void 0)
                }(X), this) : this._next(X)
            }
            error(X) {
                this.isStopped ? Mt(function Ce(fe) {
                    return Se("E", void 0, fe)
                }(X), this) : (this.isStopped = !0,
                this._error(X))
            }
            complete() {
                this.isStopped ? Mt(be, this) : (this.isStopped = !0,
                this._complete())
            }
            unsubscribe() {
                this.closed || (this.isStopped = !0,
                super.unsubscribe(),
                this.destination = null)
            }
            _next(X) {
                this.destination.next(X)
            }
            _error(X) {
                try {
                    this.destination.error(X)
                } finally {
                    this.unsubscribe()
                }
            }
            _complete() {
                try {
                    this.destination.complete()
                } finally {
                    this.unsubscribe()
                }
            }
        }
        const xe = Function.prototype.bind;
        function ce(fe, X) {
            return xe.call(fe, X)
        }
        class Ne {
            constructor(X) {
                this.partialObserver = X
            }
            next(X) {
                const {partialObserver: le} = this;
                if (le.next)
                    try {
                        le.next(X)
                    } catch (ot) {
                        Qe(ot)
                    }
            }
            error(X) {
                const {partialObserver: le} = this;
                if (le.error)
                    try {
                        le.error(X)
                    } catch (ot) {
                        Qe(ot)
                    }
                else
                    Qe(X)
            }
            complete() {
                const {partialObserver: X} = this;
                if (X.complete)
                    try {
                        X.complete()
                    } catch (le) {
                        Qe(le)
                    }
            }
        }
        class je extends _e {
            constructor(X, le, ot) {
                let ye;
                if (super(),
                (0,
                a.m)(X) || !X)
                    ye = {
                        next: X ?? void 0,
                        error: le ?? void 0,
                        complete: ot ?? void 0
                    };
                else {
                    let De;
                    this && oe.v.useDeprecatedNextContext ? (De = Object.create(X),
                    De.unsubscribe = () => this.unsubscribe(),
                    ye = {
                        next: X.next && ce(X.next, De),
                        error: X.error && ce(X.error, De),
                        complete: X.complete && ce(X.complete, De)
                    }) : ye = X
                }
                this.destination = new Ne(ye)
            }
        }
        function Qe(fe) {
            oe.v.useDeprecatedSynchronousErrorHandling ? (0,
            z.O)(fe) : (0,
            te.h)(fe)
        }
        function Mt(fe, X) {
            const {onStoppedNotification: le} = oe.v;
            le && de.z.setTimeout( () => le(fe, X))
        }
        const Be = {
            closed: !0,
            next: ie.Z,
            error: function it(fe) {
                throw fe
            },
            complete: ie.Z
        }
    }
    ,
    727: (Je, pe, I) => {
        I.d(pe, {
            Lc: () => be,
            w0: () => ie,
            Nn: () => Ce
        });
        var a = I(576);
        const oe = (0,
        I(3888).d)(Se => function(z) {
            Se(this),
            this.message = z ? `${z.length} errors occurred during unsubscription:\n${z.map( (_e, xe) => `${xe + 1}) ${_e.toString()}`).join("\n  ")}` : "",
            this.name = "UnsubscriptionError",
            this.errors = z
        }
        );
        var te = I(8737);
        class ie {
            constructor(de) {
                this.initialTeardown = de,
                this.closed = !1,
                this._parentage = null,
                this._finalizers = null
            }
            unsubscribe() {
                let de;
                if (!this.closed) {
                    this.closed = !0;
                    const {_parentage: z} = this;
                    if (z)
                        if (this._parentage = null,
                        Array.isArray(z))
                            for (const ce of z)
                                ce.remove(this);
                        else
                            z.remove(this);
                    const {initialTeardown: _e} = this;
                    if ((0,
                    a.m)(_e))
                        try {
                            _e()
                        } catch (ce) {
                            de = ce instanceof oe ? ce.errors : [ce]
                        }
                    const {_finalizers: xe} = this;
                    if (xe) {
                        this._finalizers = null;
                        for (const ce of xe)
                            try {
                                Oe(ce)
                            } catch (Ne) {
                                de = de ?? [],
                                Ne instanceof oe ? de = [...de, ...Ne.errors] : de.push(Ne)
                            }
                    }
                    if (de)
                        throw new oe(de)
                }
            }
            add(de) {
                var z;
                if (de && de !== this)
                    if (this.closed)
                        Oe(de);
                    else {
                        if (de instanceof ie) {
                            if (de.closed || de._hasParent(this))
                                return;
                            de._addParent(this)
                        }
                        (this._finalizers = null !== (z = this._finalizers) && void 0 !== z ? z : []).push(de)
                    }
            }
            _hasParent(de) {
                const {_parentage: z} = this;
                return z === de || Array.isArray(z) && z.includes(de)
            }
            _addParent(de) {
                const {_parentage: z} = this;
                this._parentage = Array.isArray(z) ? (z.push(de),
                z) : z ? [z, de] : de
            }
            _removeParent(de) {
                const {_parentage: z} = this;
                z === de ? this._parentage = null : Array.isArray(z) && (0,
                te.P)(z, de)
            }
            remove(de) {
                const {_finalizers: z} = this;
                z && (0,
                te.P)(z, de),
                de instanceof ie && de._removeParent(this)
            }
        }
        ie.EMPTY = ( () => {
            const Se = new ie;
            return Se.closed = !0,
            Se
        }
        )();
        const be = ie.EMPTY;
        function Ce(Se) {
            return Se instanceof ie || Se && "closed"in Se && (0,
            a.m)(Se.remove) && (0,
            a.m)(Se.add) && (0,
            a.m)(Se.unsubscribe)
        }
        function Oe(Se) {
            (0,
            a.m)(Se) ? Se() : Se.unsubscribe()
        }
    }
    ,
    2416: (Je, pe, I) => {
        I.d(pe, {
            v: () => a
        });
        const a = {
            onUnhandledError: null,
            onStoppedNotification: null,
            Promise: void 0,
            useDeprecatedSynchronousErrorHandling: !1,
            useDeprecatedNextContext: !1
        }
    }
    ,
    9841: (Je, pe, I) => {
        I.d(pe, {
            a: () => de
        });
        var a = I(9751)
          , b = I(4742)
          , oe = I(2076)
          , te = I(4671)
          , ie = I(3268)
          , be = I(3269)
          , Ce = I(1810)
          , Oe = I(5403)
          , Se = I(9672);
        function de(...xe) {
            const ce = (0,
            be.yG)(xe)
              , Ne = (0,
            be.jO)(xe)
              , {args: je, keys: Qe} = (0,
            b.D)(xe);
            if (0 === je.length)
                return (0,
                oe.D)([], ce);
            const it = new a.y(function z(xe, ce, Ne=te.y) {
                return je => {
                    _e(ce, () => {
                        const {length: Qe} = xe
                          , it = new Array(Qe);
                        let Mt = Qe
                          , Be = Qe;
                        for (let fe = 0; fe < Qe; fe++)
                            _e(ce, () => {
                                const X = (0,
                                oe.D)(xe[fe], ce);
                                let le = !1;
                                X.subscribe((0,
                                Oe.x)(je, ot => {
                                    it[fe] = ot,
                                    le || (le = !0,
                                    Be--),
                                    Be || je.next(Ne(it.slice()))
                                }
                                , () => {
                                    --Mt || je.complete()
                                }
                                ))
                            }
                            , je)
                    }
                    , je)
                }
            }(je, ce, Qe ? Mt => (0,
            Ce.n)(Qe, Mt) : te.y));
            return Ne ? it.pipe((0,
            ie.Z)(Ne)) : it
        }
        function _e(xe, ce, Ne) {
            xe ? (0,
            Se.f)(Ne, xe, ce) : ce()
        }
    }
    ,
    7272: (Je, pe, I) => {
        I.d(pe, {
            z: () => ie
        });
        var a = I(8189)
          , oe = I(3269)
          , te = I(2076);
        function ie(...be) {
            return function b() {
                return (0,
                a.J)(1)
            }()((0,
            te.D)(be, (0,
            oe.yG)(be)))
        }
    }
    ,
    515: (Je, pe, I) => {
        I.d(pe, {
            E: () => b
        });
        const b = new (I(9751).y)(ie => ie.complete())
    }
    ,
    2076: (Je, pe, I) => {
        I.d(pe, {
            D: () => ot
        });
        var a = I(8421)
          , b = I(9672)
          , oe = I(4482)
          , te = I(5403);
        function ie(ye, De=0) {
            return (0,
            oe.e)( ($e, Z) => {
                $e.subscribe((0,
                te.x)(Z, ne => (0,
                b.f)(Z, ye, () => Z.next(ne), De), () => (0,
                b.f)(Z, ye, () => Z.complete(), De), ne => (0,
                b.f)(Z, ye, () => Z.error(ne), De)))
            }
            )
        }
        function be(ye, De=0) {
            return (0,
            oe.e)( ($e, Z) => {
                Z.add(ye.schedule( () => $e.subscribe(Z), De))
            }
            )
        }
        var Se = I(9751)
          , z = I(2202)
          , _e = I(576);
        function ce(ye, De) {
            if (!ye)
                throw new Error("Iterable cannot be null");
            return new Se.y($e => {
                (0,
                b.f)($e, De, () => {
                    const Z = ye[Symbol.asyncIterator]();
                    (0,
                    b.f)($e, De, () => {
                        Z.next().then(ne => {
                            ne.done ? $e.complete() : $e.next(ne.value)
                        }
                        )
                    }
                    , 0, !0)
                }
                )
            }
            )
        }
        var Ne = I(3670)
          , je = I(8239)
          , Qe = I(1144)
          , it = I(6495)
          , Mt = I(2206)
          , Be = I(4532)
          , fe = I(3260);
        function ot(ye, De) {
            return De ? function le(ye, De) {
                if (null != ye) {
                    if ((0,
                    Ne.c)(ye))
                        return function Ce(ye, De) {
                            return (0,
                            a.Xf)(ye).pipe(be(De), ie(De))
                        }(ye, De);
                    if ((0,
                    Qe.z)(ye))
                        return function de(ye, De) {
                            return new Se.y($e => {
                                let Z = 0;
                                return De.schedule(function() {
                                    Z === ye.length ? $e.complete() : ($e.next(ye[Z++]),
                                    $e.closed || this.schedule())
                                })
                            }
                            )
                        }(ye, De);
                    if ((0,
                    je.t)(ye))
                        return function Oe(ye, De) {
                            return (0,
                            a.Xf)(ye).pipe(be(De), ie(De))
                        }(ye, De);
                    if ((0,
                    Mt.D)(ye))
                        return ce(ye, De);
                    if ((0,
                    it.T)(ye))
                        return function xe(ye, De) {
                            return new Se.y($e => {
                                let Z;
                                return (0,
                                b.f)($e, De, () => {
                                    Z = ye[z.h](),
                                    (0,
                                    b.f)($e, De, () => {
                                        let ne, he;
                                        try {
                                            ({value: ne, done: he} = Z.next())
                                        } catch (K) {
                                            return void $e.error(K)
                                        }
                                        he ? $e.complete() : $e.next(ne)
                                    }
                                    , 0, !0)
                                }
                                ),
                                () => (0,
                                _e.m)(Z?.return) && Z.return()
                            }
                            )
                        }(ye, De);
                    if ((0,
                    fe.L)(ye))
                        return function X(ye, De) {
                            return ce((0,
                            fe.Q)(ye), De)
                        }(ye, De)
                }
                throw (0,
                Be.z)(ye)
            }(ye, De) : (0,
            a.Xf)(ye)
        }
    }
    ,
    8421: (Je, pe, I) => {
        I.d(pe, {
            Xf: () => xe
        });
        var a = I(655)
          , b = I(1144)
          , oe = I(8239)
          , te = I(9751)
          , ie = I(3670)
          , be = I(2206)
          , Ce = I(4532)
          , Oe = I(6495)
          , Se = I(3260)
          , de = I(576)
          , z = I(7849)
          , _e = I(8822);
        function xe(fe) {
            if (fe instanceof te.y)
                return fe;
            if (null != fe) {
                if ((0,
                ie.c)(fe))
                    return function ce(fe) {
                        return new te.y(X => {
                            const le = fe[_e.L]();
                            if ((0,
                            de.m)(le.subscribe))
                                return le.subscribe(X);
                            throw new TypeError("Provided object does not correctly implement Symbol.observable")
                        }
                        )
                    }(fe);
                if ((0,
                b.z)(fe))
                    return function Ne(fe) {
                        return new te.y(X => {
                            for (let le = 0; le < fe.length && !X.closed; le++)
                                X.next(fe[le]);
                            X.complete()
                        }
                        )
                    }(fe);
                if ((0,
                oe.t)(fe))
                    return function je(fe) {
                        return new te.y(X => {
                            fe.then(le => {
                                X.closed || (X.next(le),
                                X.complete())
                            }
                            , le => X.error(le)).then(null, z.h)
                        }
                        )
                    }(fe);
                if ((0,
                be.D)(fe))
                    return it(fe);
                if ((0,
                Oe.T)(fe))
                    return function Qe(fe) {
                        return new te.y(X => {
                            for (const le of fe)
                                if (X.next(le),
                                X.closed)
                                    return;
                            X.complete()
                        }
                        )
                    }(fe);
                if ((0,
                Se.L)(fe))
                    return function Mt(fe) {
                        return it((0,
                        Se.Q)(fe))
                    }(fe)
            }
            throw (0,
            Ce.z)(fe)
        }
        function it(fe) {
            return new te.y(X => {
                (function Be(fe, X) {
                    var le, ot, ye, De;
                    return (0,
                    a.mG)(this, void 0, void 0, function*() {
                        try {
                            for (le = (0,
                            a.KL)(fe); !(ot = yield le.next()).done; )
                                if (X.next(ot.value),
                                X.closed)
                                    return
                        } catch ($e) {
                            ye = {
                                error: $e
                            }
                        } finally {
                            try {
                                ot && !ot.done && (De = le.return) && (yield De.call(le))
                            } finally {
                                if (ye)
                                    throw ye.error
                            }
                        }
                        X.complete()
                    })
                }
                )(fe, X).catch(le => X.error(le))
            }
            )
        }
    }
    ,
    9646: (Je, pe, I) => {
        I.d(pe, {
            of: () => oe
        });
        var a = I(3269)
          , b = I(2076);
        function oe(...te) {
            const ie = (0,
            a.yG)(te);
            return (0,
            b.D)(te, ie)
        }
    }
    ,
    2843: (Je, pe, I) => {
        I.d(pe, {
            _: () => oe
        });
        var a = I(9751)
          , b = I(576);
        function oe(te, ie) {
            const be = (0,
            b.m)(te) ? te : () => te
              , Ce = Oe => Oe.error(be());
            return new a.y(ie ? Oe => ie.schedule(Ce, 0, Oe) : Ce)
        }
    }
    ,
    5403: (Je, pe, I) => {
        I.d(pe, {
            x: () => b
        });
        var a = I(930);
        function b(te, ie, be, Ce, Oe) {
            return new oe(te,ie,be,Ce,Oe)
        }
        class oe extends a.Lv {
            constructor(ie, be, Ce, Oe, Se, de) {
                super(ie),
                this.onFinalize = Se,
                this.shouldUnsubscribe = de,
                this._next = be ? function(z) {
                    try {
                        be(z)
                    } catch (_e) {
                        ie.error(_e)
                    }
                }
                : super._next,
                this._error = Oe ? function(z) {
                    try {
                        Oe(z)
                    } catch (_e) {
                        ie.error(_e)
                    } finally {
                        this.unsubscribe()
                    }
                }
                : super._error,
                this._complete = Ce ? function() {
                    try {
                        Ce()
                    } catch (z) {
                        ie.error(z)
                    } finally {
                        this.unsubscribe()
                    }
                }
                : super._complete
            }
            unsubscribe() {
                var ie;
                if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                    const {closed: be} = this;
                    super.unsubscribe(),
                    !be && (null === (ie = this.onFinalize) || void 0 === ie || ie.call(this))
                }
            }
        }
    }
    ,
    262: (Je, pe, I) => {
        I.d(pe, {
            K: () => te
        });
        var a = I(8421)
          , b = I(5403)
          , oe = I(4482);
        function te(ie) {
            return (0,
            oe.e)( (be, Ce) => {
                let de, Oe = null, Se = !1;
                Oe = be.subscribe((0,
                b.x)(Ce, void 0, void 0, z => {
                    de = (0,
                    a.Xf)(ie(z, te(ie)(be))),
                    Oe ? (Oe.unsubscribe(),
                    Oe = null,
                    de.subscribe(Ce)) : Se = !0
                }
                )),
                Se && (Oe.unsubscribe(),
                Oe = null,
                de.subscribe(Ce))
            }
            )
        }
    }
    ,
    4351: (Je, pe, I) => {
        I.d(pe, {
            b: () => oe
        });
        var a = I(5577)
          , b = I(576);
        function oe(te, ie) {
            return (0,
            b.m)(ie) ? (0,
            a.z)(te, ie, 1) : (0,
            a.z)(te, 1)
        }
    }
    ,
    6590: (Je, pe, I) => {
        I.d(pe, {
            d: () => oe
        });
        var a = I(4482)
          , b = I(5403);
        function oe(te) {
            return (0,
            a.e)( (ie, be) => {
                let Ce = !1;
                ie.subscribe((0,
                b.x)(be, Oe => {
                    Ce = !0,
                    be.next(Oe)
                }
                , () => {
                    Ce || be.next(te),
                    be.complete()
                }
                ))
            }
            )
        }
    }
    ,
    9300: (Je, pe, I) => {
        I.d(pe, {
            h: () => oe
        });
        var a = I(4482)
          , b = I(5403);
        function oe(te, ie) {
            return (0,
            a.e)( (be, Ce) => {
                let Oe = 0;
                be.subscribe((0,
                b.x)(Ce, Se => te.call(ie, Se, Oe++) && Ce.next(Se)))
            }
            )
        }
    }
    ,
    590: (Je, pe, I) => {
        I.d(pe, {
            P: () => Ce
        });
        var a = I(6805)
          , b = I(9300)
          , oe = I(5698)
          , te = I(6590)
          , ie = I(8068)
          , be = I(4671);
        function Ce(Oe, Se) {
            const de = arguments.length >= 2;
            return z => z.pipe(Oe ? (0,
            b.h)( (_e, xe) => Oe(_e, xe, z)) : be.y, (0,
            oe.q)(1), de ? (0,
            te.d)(Se) : (0,
            ie.T)( () => new a.K))
        }
    }
    ,
    4004: (Je, pe, I) => {
        I.d(pe, {
            U: () => oe
        });
        var a = I(4482)
          , b = I(5403);
        function oe(te, ie) {
            return (0,
            a.e)( (be, Ce) => {
                let Oe = 0;
                be.subscribe((0,
                b.x)(Ce, Se => {
                    Ce.next(te.call(ie, Se, Oe++))
                }
                ))
            }
            )
        }
    }
    ,
    9718: (Je, pe, I) => {
        I.d(pe, {
            h: () => b
        });
        var a = I(4004);
        function b(oe) {
            return (0,
            a.U)( () => oe)
        }
    }
    ,
    8189: (Je, pe, I) => {
        I.d(pe, {
            J: () => oe
        });
        var a = I(5577)
          , b = I(4671);
        function oe(te=1 / 0) {
            return (0,
            a.z)(b.y, te)
        }
    }
    ,
    5577: (Je, pe, I) => {
        I.d(pe, {
            z: () => Oe
        });
        var a = I(4004)
          , b = I(8421)
          , oe = I(4482)
          , te = I(9672)
          , ie = I(5403)
          , Ce = I(576);
        function Oe(Se, de, z=1 / 0) {
            return (0,
            Ce.m)(de) ? Oe( (_e, xe) => (0,
            a.U)( (ce, Ne) => de(_e, ce, xe, Ne))((0,
            b.Xf)(Se(_e, xe))), z) : ("number" == typeof de && (z = de),
            (0,
            oe.e)( (_e, xe) => function be(Se, de, z, _e, xe, ce, Ne, je) {
                const Qe = [];
                let it = 0
                  , Mt = 0
                  , Be = !1;
                const fe = () => {
                    Be && !Qe.length && !it && de.complete()
                }
                  , X = ot => it < _e ? le(ot) : Qe.push(ot)
                  , le = ot => {
                    ce && de.next(ot),
                    it++;
                    let ye = !1;
                    (0,
                    b.Xf)(z(ot, Mt++)).subscribe((0,
                    ie.x)(de, De => {
                        xe?.(De),
                        ce ? X(De) : de.next(De)
                    }
                    , () => {
                        ye = !0
                    }
                    , void 0, () => {
                        if (ye)
                            try {
                                for (it--; Qe.length && it < _e; ) {
                                    const De = Qe.shift();
                                    Ne ? (0,
                                    te.f)(de, Ne, () => le(De)) : le(De)
                                }
                                fe()
                            } catch (De) {
                                de.error(De)
                            }
                    }
                    ))
                }
                ;
                return Se.subscribe((0,
                ie.x)(de, X, () => {
                    Be = !0,
                    fe()
                }
                )),
                () => {
                    je?.()
                }
            }(_e, xe, Se, z)))
        }
    }
    ,
    8675: (Je, pe, I) => {
        I.d(pe, {
            O: () => te
        });
        var a = I(7272)
          , b = I(3269)
          , oe = I(4482);
        function te(...ie) {
            const be = (0,
            b.yG)(ie);
            return (0,
            oe.e)( (Ce, Oe) => {
                (be ? (0,
                a.z)(ie, Ce, be) : (0,
                a.z)(ie, Ce)).subscribe(Oe)
            }
            )
        }
    }
    ,
    3900: (Je, pe, I) => {
        I.d(pe, {
            w: () => te
        });
        var a = I(8421)
          , b = I(4482)
          , oe = I(5403);
        function te(ie, be) {
            return (0,
            b.e)( (Ce, Oe) => {
                let Se = null
                  , de = 0
                  , z = !1;
                const _e = () => z && !Se && Oe.complete();
                Ce.subscribe((0,
                oe.x)(Oe, xe => {
                    Se?.unsubscribe();
                    let ce = 0;
                    const Ne = de++;
                    (0,
                    a.Xf)(ie(xe, Ne)).subscribe(Se = (0,
                    oe.x)(Oe, je => Oe.next(be ? be(xe, je, Ne, ce++) : je), () => {
                        Se = null,
                        _e()
                    }
                    ))
                }
                , () => {
                    z = !0,
                    _e()
                }
                ))
            }
            )
        }
    }
    ,
    5698: (Je, pe, I) => {
        I.d(pe, {
            q: () => te
        });
        var a = I(515)
          , b = I(4482)
          , oe = I(5403);
        function te(ie) {
            return ie <= 0 ? () => a.E : (0,
            b.e)( (be, Ce) => {
                let Oe = 0;
                be.subscribe((0,
                oe.x)(Ce, Se => {
                    ++Oe <= ie && (Ce.next(Se),
                    ie <= Oe && Ce.complete())
                }
                ))
            }
            )
        }
    }
    ,
    8505: (Je, pe, I) => {
        I.d(pe, {
            b: () => ie
        });
        var a = I(576)
          , b = I(4482)
          , oe = I(5403)
          , te = I(4671);
        function ie(be, Ce, Oe) {
            const Se = (0,
            a.m)(be) || Ce || Oe ? {
                next: be,
                error: Ce,
                complete: Oe
            } : be;
            return Se ? (0,
            b.e)( (de, z) => {
                var _e;
                null === (_e = Se.subscribe) || void 0 === _e || _e.call(Se);
                let xe = !0;
                de.subscribe((0,
                oe.x)(z, ce => {
                    var Ne;
                    null === (Ne = Se.next) || void 0 === Ne || Ne.call(Se, ce),
                    z.next(ce)
                }
                , () => {
                    var ce;
                    xe = !1,
                    null === (ce = Se.complete) || void 0 === ce || ce.call(Se),
                    z.complete()
                }
                , ce => {
                    var Ne;
                    xe = !1,
                    null === (Ne = Se.error) || void 0 === Ne || Ne.call(Se, ce),
                    z.error(ce)
                }
                , () => {
                    var ce, Ne;
                    xe && (null === (ce = Se.unsubscribe) || void 0 === ce || ce.call(Se)),
                    null === (Ne = Se.finalize) || void 0 === Ne || Ne.call(Se)
                }
                ))
            }
            ) : te.y
        }
    }
    ,
    8068: (Je, pe, I) => {
        I.d(pe, {
            T: () => te
        });
        var a = I(6805)
          , b = I(4482)
          , oe = I(5403);
        function te(be=ie) {
            return (0,
            b.e)( (Ce, Oe) => {
                let Se = !1;
                Ce.subscribe((0,
                oe.x)(Oe, de => {
                    Se = !0,
                    Oe.next(de)
                }
                , () => Se ? Oe.complete() : Oe.error(be())))
            }
            )
        }
        function ie() {
            return new a.K
        }
    }
    ,
    3410: (Je, pe, I) => {
        I.d(pe, {
            z: () => a
        });
        const a = {
            setTimeout(b, oe, ...te) {
                const {delegate: ie} = a;
                return ie?.setTimeout ? ie.setTimeout(b, oe, ...te) : setTimeout(b, oe, ...te)
            },
            clearTimeout(b) {
                const {delegate: oe} = a;
                return (oe?.clearTimeout || clearTimeout)(b)
            },
            delegate: void 0
        }
    }
    ,
    2202: (Je, pe, I) => {
        I.d(pe, {
            h: () => b
        });
        const b = function a() {
            return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }()
    }
    ,
    8822: (Je, pe, I) => {
        I.d(pe, {
            L: () => a
        });
        const a = "function" == typeof Symbol && Symbol.observable || "@@observable"
    }
    ,
    6805: (Je, pe, I) => {
        I.d(pe, {
            K: () => b
        });
        const b = (0,
        I(3888).d)(oe => function() {
            oe(this),
            this.name = "EmptyError",
            this.message = "no elements in sequence"
        }
        )
    }
    ,
    3269: (Je, pe, I) => {
        I.d(pe, {
            _6: () => be,
            jO: () => te,
            yG: () => ie
        });
        var a = I(576)
          , b = I(3532);
        function oe(Ce) {
            return Ce[Ce.length - 1]
        }
        function te(Ce) {
            return (0,
            a.m)(oe(Ce)) ? Ce.pop() : void 0
        }
        function ie(Ce) {
            return (0,
            b.K)(oe(Ce)) ? Ce.pop() : void 0
        }
        function be(Ce, Oe) {
            return "number" == typeof oe(Ce) ? Ce.pop() : Oe
        }
    }
    ,
    4742: (Je, pe, I) => {
        I.d(pe, {
            D: () => ie
        });
        const {isArray: a} = Array
          , {getPrototypeOf: b, prototype: oe, keys: te} = Object;
        function ie(Ce) {
            if (1 === Ce.length) {
                const Oe = Ce[0];
                if (a(Oe))
                    return {
                        args: Oe,
                        keys: null
                    };
                if (function be(Ce) {
                    return Ce && "object" == typeof Ce && b(Ce) === oe
                }(Oe)) {
                    const Se = te(Oe);
                    return {
                        args: Se.map(de => Oe[de]),
                        keys: Se
                    }
                }
            }
            return {
                args: Ce,
                keys: null
            }
        }
    }
    ,
    8737: (Je, pe, I) => {
        function a(b, oe) {
            if (b) {
                const te = b.indexOf(oe);
                0 <= te && b.splice(te, 1)
            }
        }
        I.d(pe, {
            P: () => a
        })
    }
    ,
    3888: (Je, pe, I) => {
        function a(b) {
            const te = b(ie => {
                Error.call(ie),
                ie.stack = (new Error).stack
            }
            );
            return te.prototype = Object.create(Error.prototype),
            te.prototype.constructor = te,
            te
        }
        I.d(pe, {
            d: () => a
        })
    }
    ,
    1810: (Je, pe, I) => {
        function a(b, oe) {
            return b.reduce( (te, ie, be) => (te[ie] = oe[be],
            te), {})
        }
        I.d(pe, {
            n: () => a
        })
    }
    ,
    2806: (Je, pe, I) => {
        I.d(pe, {
            O: () => te,
            x: () => oe
        });
        var a = I(2416);
        let b = null;
        function oe(ie) {
            if (a.v.useDeprecatedSynchronousErrorHandling) {
                const be = !b;
                if (be && (b = {
                    errorThrown: !1,
                    error: null
                }),
                ie(),
                be) {
                    const {errorThrown: Ce, error: Oe} = b;
                    if (b = null,
                    Ce)
                        throw Oe
                }
            } else
                ie()
        }
        function te(ie) {
            a.v.useDeprecatedSynchronousErrorHandling && b && (b.errorThrown = !0,
            b.error = ie)
        }
    }
    ,
    9672: (Je, pe, I) => {
        function a(b, oe, te, ie=0, be=!1) {
            const Ce = oe.schedule(function() {
                te(),
                be ? b.add(this.schedule(null, ie)) : this.unsubscribe()
            }, ie);
            if (b.add(Ce),
            !be)
                return Ce
        }
        I.d(pe, {
            f: () => a
        })
    }
    ,
    4671: (Je, pe, I) => {
        function a(b) {
            return b
        }
        I.d(pe, {
            y: () => a
        })
    }
    ,
    1144: (Je, pe, I) => {
        I.d(pe, {
            z: () => a
        });
        const a = b => b && "number" == typeof b.length && "function" != typeof b
    }
    ,
    2206: (Je, pe, I) => {
        I.d(pe, {
            D: () => b
        });
        var a = I(576);
        function b(oe) {
            return Symbol.asyncIterator && (0,
            a.m)(oe?.[Symbol.asyncIterator])
        }
    }
    ,
    576: (Je, pe, I) => {
        function a(b) {
            return "function" == typeof b
        }
        I.d(pe, {
            m: () => a
        })
    }
    ,
    3670: (Je, pe, I) => {
        I.d(pe, {
            c: () => oe
        });
        var a = I(8822)
          , b = I(576);
        function oe(te) {
            return (0,
            b.m)(te[a.L])
        }
    }
    ,
    6495: (Je, pe, I) => {
        I.d(pe, {
            T: () => oe
        });
        var a = I(2202)
          , b = I(576);
        function oe(te) {
            return (0,
            b.m)(te?.[a.h])
        }
    }
    ,
    8239: (Je, pe, I) => {
        I.d(pe, {
            t: () => b
        });
        var a = I(576);
        function b(oe) {
            return (0,
            a.m)(oe?.then)
        }
    }
    ,
    3260: (Je, pe, I) => {
        I.d(pe, {
            L: () => te,
            Q: () => oe
        });
        var a = I(655)
          , b = I(576);
        function oe(ie) {
            return (0,
            a.FC)(this, arguments, function*() {
                const Ce = ie.getReader();
                try {
                    for (; ; ) {
                        const {value: Oe, done: Se} = yield(0,
                        a.qq)(Ce.read());
                        if (Se)
                            return yield(0,
                            a.qq)(void 0);
                        yield yield(0,
                        a.qq)(Oe)
                    }
                } finally {
                    Ce.releaseLock()
                }
            })
        }
        function te(ie) {
            return (0,
            b.m)(ie?.getReader)
        }
    }
    ,
    3532: (Je, pe, I) => {
        I.d(pe, {
            K: () => b
        });
        var a = I(576);
        function b(oe) {
            return oe && (0,
            a.m)(oe.schedule)
        }
    }
    ,
    4482: (Je, pe, I) => {
        I.d(pe, {
            A: () => b,
            e: () => oe
        });
        var a = I(576);
        function b(te) {
            return (0,
            a.m)(te?.lift)
        }
        function oe(te) {
            return ie => {
                if (b(ie))
                    return ie.lift(function(be) {
                        try {
                            return te(be, this)
                        } catch (Ce) {
                            this.error(Ce)
                        }
                    });
                throw new TypeError("Unable to lift unknown Observable type")
            }
        }
    }
    ,
    3268: (Je, pe, I) => {
        I.d(pe, {
            Z: () => te
        });
        var a = I(4004);
        const {isArray: b} = Array;
        function te(ie) {
            return (0,
            a.U)(be => function oe(ie, be) {
                return b(be) ? ie(...be) : ie(be)
            }(ie, be))
        }
    }
    ,
    5032: (Je, pe, I) => {
        function a() {}
        I.d(pe, {
            Z: () => a
        })
    }
    ,
    9635: (Je, pe, I) => {
        I.d(pe, {
            U: () => oe,
            z: () => b
        });
        var a = I(4671);
        function b(...te) {
            return oe(te)
        }
        function oe(te) {
            return 0 === te.length ? a.y : 1 === te.length ? te[0] : function(be) {
                return te.reduce( (Ce, Oe) => Oe(Ce), be)
            }
        }
    }
    ,
    7849: (Je, pe, I) => {
        I.d(pe, {
            h: () => oe
        });
        var a = I(2416)
          , b = I(3410);
        function oe(te) {
            b.z.setTimeout( () => {
                const {onUnhandledError: ie} = a.v;
                if (!ie)
                    throw te;
                ie(te)
            }
            )
        }
    }
    ,
    4532: (Je, pe, I) => {
        function a(b) {
            return new TypeError(`You provided ${null !== b && "object" == typeof b ? "an invalid object" : `'${b}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)
        }
        I.d(pe, {
            z: () => a
        })
    }
    ,
    655: (Je, pe, I) => {
        function Oe(Z, ne, he, K) {
            return new (he || (he = Promise))(function(Ve, mt) {
                function st(Ot) {
                    try {
                        lt(K.next(Ot))
                    } catch (pn) {
                        mt(pn)
                    }
                }
                function Zt(Ot) {
                    try {
                        lt(K.throw(Ot))
                    } catch (pn) {
                        mt(pn)
                    }
                }
                function lt(Ot) {
                    Ot.done ? Ve(Ot.value) : function ke(Ve) {
                        return Ve instanceof he ? Ve : new he(function(mt) {
                            mt(Ve)
                        }
                        )
                    }(Ot.value).then(st, Zt)
                }
                lt((K = K.apply(Z, ne || [])).next())
            }
            )
        }
        function Qe(Z) {
            return this instanceof Qe ? (this.v = Z,
            this) : new Qe(Z)
        }
        function it(Z, ne, he) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var ke, K = he.apply(Z, ne || []), Ve = [];
            return ke = {},
            mt("next"),
            mt("throw"),
            mt("return"),
            ke[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            ke;
            function mt(Me) {
                K[Me] && (ke[Me] = function(Le) {
                    return new Promise(function(Q, q) {
                        Ve.push([Me, Le, Q, q]) > 1 || st(Me, Le)
                    }
                    )
                }
                )
            }
            function st(Me, Le) {
                try {
                    !function Zt(Me) {
                        Me.value instanceof Qe ? Promise.resolve(Me.value.v).then(lt, Ot) : pn(Ve[0][2], Me)
                    }(K[Me](Le))
                } catch (Q) {
                    pn(Ve[0][3], Q)
                }
            }
            function lt(Me) {
                st("next", Me)
            }
            function Ot(Me) {
                st("throw", Me)
            }
            function pn(Me, Le) {
                Me(Le),
                Ve.shift(),
                Ve.length && st(Ve[0][0], Ve[0][1])
            }
        }
        function Be(Z) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var he, ne = Z[Symbol.asyncIterator];
            return ne ? ne.call(Z) : (Z = function _e(Z) {
                var ne = "function" == typeof Symbol && Symbol.iterator
                  , he = ne && Z[ne]
                  , K = 0;
                if (he)
                    return he.call(Z);
                if (Z && "number" == typeof Z.length)
                    return {
                        next: function() {
                            return Z && K >= Z.length && (Z = void 0),
                            {
                                value: Z && Z[K++],
                                done: !Z
                            }
                        }
                    };
                throw new TypeError(ne ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }(Z),
            he = {},
            K("next"),
            K("throw"),
            K("return"),
            he[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            he);
            function K(Ve) {
                he[Ve] = Z[Ve] && function(mt) {
                    return new Promise(function(st, Zt) {
                        !function ke(Ve, mt, st, Zt) {
                            Promise.resolve(Zt).then(function(lt) {
                                Ve({
                                    value: lt,
                                    done: st
                                })
                            }, mt)
                        }(st, Zt, (mt = Z[Ve](mt)).done, mt.value)
                    }
                    )
                }
            }
        }
        I.d(pe, {
            FC: () => it,
            KL: () => Be,
            mG: () => Oe,
            qq: () => Qe
        })
    }
    ,
    7340: (Je, pe, I) => {
        I.d(pe, {
            LC: () => b,
            SB: () => Se,
            X$: () => te,
            ZE: () => Mt,
            ZN: () => it,
            _7: () => ce,
            _j: () => a,
            eR: () => z,
            jt: () => ie,
            k1: () => Be,
            l3: () => oe,
            oB: () => Oe,
            oQ: () => _e,
            vP: () => Ce
        });
        class a {
        }
        class b {
        }
        const oe = "*";
        function te(fe, X) {
            return {
                type: 7,
                name: fe,
                definitions: X,
                options: {}
            }
        }
        function ie(fe, X=null) {
            return {
                type: 4,
                styles: X,
                timings: fe
            }
        }
        function Ce(fe, X=null) {
            return {
                type: 2,
                steps: fe,
                options: X
            }
        }
        function Oe(fe) {
            return {
                type: 6,
                styles: fe,
                offset: null
            }
        }
        function Se(fe, X, le) {
            return {
                type: 0,
                name: fe,
                styles: X,
                options: le
            }
        }
        function z(fe, X, le=null) {
            return {
                type: 1,
                expr: fe,
                animation: X,
                options: le
            }
        }
        function _e(fe, X=null) {
            return {
                type: 8,
                animation: fe,
                options: X
            }
        }
        function ce(fe, X=null) {
            return {
                type: 10,
                animation: fe,
                options: X
            }
        }
        function Qe(fe) {
            Promise.resolve(null).then(fe)
        }
        class it {
            constructor(X=0, le=0) {
                this._onDoneFns = [],
                this._onStartFns = [],
                this._onDestroyFns = [],
                this._originalOnDoneFns = [],
                this._originalOnStartFns = [],
                this._started = !1,
                this._destroyed = !1,
                this._finished = !1,
                this._position = 0,
                this.parentPlayer = null,
                this.totalTime = X + le
            }
            _onFinish() {
                this._finished || (this._finished = !0,
                this._onDoneFns.forEach(X => X()),
                this._onDoneFns = [])
            }
            onStart(X) {
                this._originalOnStartFns.push(X),
                this._onStartFns.push(X)
            }
            onDone(X) {
                this._originalOnDoneFns.push(X),
                this._onDoneFns.push(X)
            }
            onDestroy(X) {
                this._onDestroyFns.push(X)
            }
            hasStarted() {
                return this._started
            }
            init() {}
            play() {
                this.hasStarted() || (this._onStart(),
                this.triggerMicrotask()),
                this._started = !0
            }
            triggerMicrotask() {
                Qe( () => this._onFinish())
            }
            _onStart() {
                this._onStartFns.forEach(X => X()),
                this._onStartFns = []
            }
            pause() {}
            restart() {}
            finish() {
                this._onFinish()
            }
            destroy() {
                this._destroyed || (this._destroyed = !0,
                this.hasStarted() || this._onStart(),
                this.finish(),
                this._onDestroyFns.forEach(X => X()),
                this._onDestroyFns = [])
            }
            reset() {
                this._started = !1,
                this._finished = !1,
                this._onStartFns = this._originalOnStartFns,
                this._onDoneFns = this._originalOnDoneFns
            }
            setPosition(X) {
                this._position = this.totalTime ? X * this.totalTime : 1
            }
            getPosition() {
                return this.totalTime ? this._position / this.totalTime : 1
            }
            triggerCallback(X) {
                const le = "start" == X ? this._onStartFns : this._onDoneFns;
                le.forEach(ot => ot()),
                le.length = 0
            }
        }
        class Mt {
            constructor(X) {
                this._onDoneFns = [],
                this._onStartFns = [],
                this._finished = !1,
                this._started = !1,
                this._destroyed = !1,
                this._onDestroyFns = [],
                this.parentPlayer = null,
                this.totalTime = 0,
                this.players = X;
                let le = 0
                  , ot = 0
                  , ye = 0;
                const De = this.players.length;
                0 == De ? Qe( () => this._onFinish()) : this.players.forEach($e => {
                    $e.onDone( () => {
                        ++le == De && this._onFinish()
                    }
                    ),
                    $e.onDestroy( () => {
                        ++ot == De && this._onDestroy()
                    }
                    ),
                    $e.onStart( () => {
                        ++ye == De && this._onStart()
                    }
                    )
                }
                ),
                this.totalTime = this.players.reduce( ($e, Z) => Math.max($e, Z.totalTime), 0)
            }
            _onFinish() {
                this._finished || (this._finished = !0,
                this._onDoneFns.forEach(X => X()),
                this._onDoneFns = [])
            }
            init() {
                this.players.forEach(X => X.init())
            }
            onStart(X) {
                this._onStartFns.push(X)
            }
            _onStart() {
                this.hasStarted() || (this._started = !0,
                this._onStartFns.forEach(X => X()),
                this._onStartFns = [])
            }
            onDone(X) {
                this._onDoneFns.push(X)
            }
            onDestroy(X) {
                this._onDestroyFns.push(X)
            }
            hasStarted() {
                return this._started
            }
            play() {
                this.parentPlayer || this.init(),
                this._onStart(),
                this.players.forEach(X => X.play())
            }
            pause() {
                this.players.forEach(X => X.pause())
            }
            restart() {
                this.players.forEach(X => X.restart())
            }
            finish() {
                this._onFinish(),
                this.players.forEach(X => X.finish())
            }
            destroy() {
                this._onDestroy()
            }
            _onDestroy() {
                this._destroyed || (this._destroyed = !0,
                this._onFinish(),
                this.players.forEach(X => X.destroy()),
                this._onDestroyFns.forEach(X => X()),
                this._onDestroyFns = [])
            }
            reset() {
                this.players.forEach(X => X.reset()),
                this._destroyed = !1,
                this._finished = !1,
                this._started = !1
            }
            setPosition(X) {
                const le = X * this.totalTime;
                this.players.forEach(ot => {
                    const ye = ot.totalTime ? Math.min(1, le / ot.totalTime) : 1;
                    ot.setPosition(ye)
                }
                )
            }
            getPosition() {
                const X = this.players.reduce( (le, ot) => null === le || ot.totalTime > le.totalTime ? ot : le, null);
                return null != X ? X.getPosition() : 0
            }
            beforeDestroy() {
                this.players.forEach(X => {
                    X.beforeDestroy && X.beforeDestroy()
                }
                )
            }
            triggerCallback(X) {
                const le = "start" == X ? this._onStartFns : this._onDoneFns;
                le.forEach(ot => ot()),
                le.length = 0
            }
        }
        const Be = "!"
    }
    ,
    6895: (Je, pe, I) => {
        I.d(pe, {
            Do: () => Be,
            EM: () => Yr,
            HT: () => ie,
            JF: () => fn,
            K0: () => Ce,
            Mx: () => tr,
            NF: () => Rr,
            O5: () => xr,
            PC: () => Wr,
            S$: () => Qe,
            V_: () => de,
            Ye: () => fe,
            b0: () => Mt,
            bD: () => Oi,
            ez: () => Kr,
            mk: () => un,
            p6: () => Ae,
            q: () => oe,
            sg: () => gn,
            tP: () => Nr,
            uU: () => Ai,
            w_: () => be
        });
        var a = I(8256);
        let b = null;
        function oe() {
            return b
        }
        function ie(_) {
            b || (b = _)
        }
        class be {
        }
        const Ce = new a.OlP("DocumentToken");
        let Oe = ( () => {
            class _ {
                historyGo(C) {
                    throw new Error("Not implemented")
                }
            }
            return _.\u0275fac = function(C) {
                return new (C || _)
            }
            ,
            _.\u0275prov = a.Yz7({
                token: _,
                factory: function() {
                    return function Se() {
                        return (0,
                        a.LFG)(z)
                    }()
                },
                providedIn: "platform"
            }),
            _
        }
        )();
        const de = new a.OlP("Location Initialized");
        let z = ( () => {
            class _ extends Oe {
                constructor(C) {
                    super(),
                    this._doc = C,
                    this._init()
                }
                _init() {
                    this.location = window.location,
                    this._history = window.history
                }
                getBaseHrefFromDOM() {
                    return oe().getBaseHref(this._doc)
                }
                onPopState(C) {
                    const x = oe().getGlobalEventTarget(this._doc, "window");
                    return x.addEventListener("popstate", C, !1),
                    () => x.removeEventListener("popstate", C)
                }
                onHashChange(C) {
                    const x = oe().getGlobalEventTarget(this._doc, "window");
                    return x.addEventListener("hashchange", C, !1),
                    () => x.removeEventListener("hashchange", C)
                }
                get href() {
                    return this.location.href
                }
                get protocol() {
                    return this.location.protocol
                }
                get hostname() {
                    return this.location.hostname
                }
                get port() {
                    return this.location.port
                }
                get pathname() {
                    return this.location.pathname
                }
                get search() {
                    return this.location.search
                }
                get hash() {
                    return this.location.hash
                }
                set pathname(C) {
                    this.location.pathname = C
                }
                pushState(C, x, G) {
                    _e() ? this._history.pushState(C, x, G) : this.location.hash = G
                }
                replaceState(C, x, G) {
                    _e() ? this._history.replaceState(C, x, G) : this.location.hash = G
                }
                forward() {
                    this._history.forward()
                }
                back() {
                    this._history.back()
                }
                historyGo(C=0) {
                    this._history.go(C)
                }
                getState() {
                    return this._history.state
                }
            }
            return _.\u0275fac = function(C) {
                return new (C || _)(a.LFG(Ce))
            }
            ,
            _.\u0275prov = a.Yz7({
                token: _,
                factory: function() {
                    return function xe() {
                        return new z((0,
                        a.LFG)(Ce))
                    }()
                },
                providedIn: "platform"
            }),
            _
        }
        )();
        function _e() {
            return !!window.history.pushState
        }
        function ce(_, P) {
            if (0 == _.length)
                return P;
            if (0 == P.length)
                return _;
            let C = 0;
            return _.endsWith("/") && C++,
            P.startsWith("/") && C++,
            2 == C ? _ + P.substring(1) : 1 == C ? _ + P : _ + "/" + P
        }
        function Ne(_) {
            const P = _.match(/#|\?|$/)
              , C = P && P.index || _.length;
            return _.slice(0, C - ("/" === _[C - 1] ? 1 : 0)) + _.slice(C)
        }
        function je(_) {
            return _ && "?" !== _[0] ? "?" + _ : _
        }
        let Qe = ( () => {
            class _ {
                historyGo(C) {
                    throw new Error("Not implemented")
                }
            }
            return _.\u0275fac = function(C) {
                return new (C || _)
            }
            ,
            _.\u0275prov = a.Yz7({
                token: _,
                factory: function() {
                    return (0,
                    a.f3M)(Mt)
                },
                providedIn: "root"
            }),
            _
        }
        )();
        const it = new a.OlP("appBaseHref");
        let Mt = ( () => {
            class _ extends Qe {
                constructor(C, x) {
                    super(),
                    this._platformLocation = C,
                    this._removeListenerFns = [],
                    this._baseHref = x ?? this._platformLocation.getBaseHrefFromDOM() ?? (0,
                    a.f3M)(Ce).location?.origin ?? ""
                }
                ngOnDestroy() {
                    for (; this._removeListenerFns.length; )
                        this._removeListenerFns.pop()()
                }
                onPopState(C) {
                    this._removeListenerFns.push(this._platformLocation.onPopState(C), this._platformLocation.onHashChange(C))
                }
                getBaseHref() {
                    return this._baseHref
                }
                prepareExternalUrl(C) {
                    return ce(this._baseHref, C)
                }
                path(C=!1) {
                    const x = this._platformLocation.pathname + je(this._platformLocation.search)
                      , G = this._platformLocation.hash;
                    return G && C ? `${x}${G}` : x
                }
                pushState(C, x, G, ae) {
                    const Te = this.prepareExternalUrl(G + je(ae));
                    this._platformLocation.pushState(C, x, Te)
                }
                replaceState(C, x, G, ae) {
                    const Te = this.prepareExternalUrl(G + je(ae));
                    this._platformLocation.replaceState(C, x, Te)
                }
                forward() {
                    this._platformLocation.forward()
                }
                back() {
                    this._platformLocation.back()
                }
                getState() {
                    return this._platformLocation.getState()
                }
                historyGo(C=0) {
                    this._platformLocation.historyGo?.(C)
                }
            }
            return _.\u0275fac = function(C) {
                return new (C || _)(a.LFG(Oe),a.LFG(it, 8))
            }
            ,
            _.\u0275prov = a.Yz7({
                token: _,
                factory: _.\u0275fac,
                providedIn: "root"
            }),
            _
        }
        )()
          , Be = ( () => {
            class _ extends Qe {
                constructor(C, x) {
                    super(),
                    this._platformLocation = C,
                    this._baseHref = "",
                    this._removeListenerFns = [],
                    null != x && (this._baseHref = x)
                }
                ngOnDestroy() {
                    for (; this._removeListenerFns.length; )
                        this._removeListenerFns.pop()()
                }
                onPopState(C) {
                    this._removeListenerFns.push(this._platformLocation.onPopState(C), this._platformLocation.onHashChange(C))
                }
                getBaseHref() {
                    return this._baseHref
                }
                path(C=!1) {
                    let x = this._platformLocation.hash;
                    return null == x && (x = "#"),
                    x.length > 0 ? x.substring(1) : x
                }
                prepareExternalUrl(C) {
                    const x = ce(this._baseHref, C);
                    return x.length > 0 ? "#" + x : x
                }
                pushState(C, x, G, ae) {
                    let Te = this.prepareExternalUrl(G + je(ae));
                    0 == Te.length && (Te = this._platformLocation.pathname),
                    this._platformLocation.pushState(C, x, Te)
                }
                replaceState(C, x, G, ae) {
                    let Te = this.prepareExternalUrl(G + je(ae));
                    0 == Te.length && (Te = this._platformLocation.pathname),
                    this._platformLocation.replaceState(C, x, Te)
                }
                forward() {
                    this._platformLocation.forward()
                }
                back() {
                    this._platformLocation.back()
                }
                getState() {
                    return this._platformLocation.getState()
                }
                historyGo(C=0) {
                    this._platformLocation.historyGo?.(C)
                }
            }
            return _.\u0275fac = function(C) {
                return new (C || _)(a.LFG(Oe),a.LFG(it, 8))
            }
            ,
            _.\u0275prov = a.Yz7({
                token: _,
                factory: _.\u0275fac
            }),
            _
        }
        )()
          , fe = ( () => {
            class _ {
                constructor(C) {
                    this._subject = new a.vpe,
                    this._urlChangeListeners = [],
                    this._urlChangeSubscription = null,
                    this._locationStrategy = C;
                    const x = this._locationStrategy.getBaseHref();
                    this._baseHref = Ne(ot(x)),
                    this._locationStrategy.onPopState(G => {
                        this._subject.emit({
                            url: this.path(!0),
                            pop: !0,
                            state: G.state,
                            type: G.type
                        })
                    }
                    )
                }
                ngOnDestroy() {
                    this._urlChangeSubscription?.unsubscribe(),
                    this._urlChangeListeners = []
                }
                path(C=!1) {
                    return this.normalize(this._locationStrategy.path(C))
                }
                getState() {
                    return this._locationStrategy.getState()
                }
                isCurrentPathEqualTo(C, x="") {
                    return this.path() == this.normalize(C + je(x))
                }
                normalize(C) {
                    return _.stripTrailingSlash(function le(_, P) {
                        return _ && P.startsWith(_) ? P.substring(_.length) : P
                    }(this._baseHref, ot(C)))
                }
                prepareExternalUrl(C) {
                    return C && "/" !== C[0] && (C = "/" + C),
                    this._locationStrategy.prepareExternalUrl(C)
                }
                go(C, x="", G=null) {
                    this._locationStrategy.pushState(G, "", C, x),
                    this._notifyUrlChangeListeners(this.prepareExternalUrl(C + je(x)), G)
                }
                replaceState(C, x="", G=null) {
                    this._locationStrategy.replaceState(G, "", C, x),
                    this._notifyUrlChangeListeners(this.prepareExternalUrl(C + je(x)), G)
                }
                forward() {
                    this._locationStrategy.forward()
                }
                back() {
                    this._locationStrategy.back()
                }
                historyGo(C=0) {
                    this._locationStrategy.historyGo?.(C)
                }
                onUrlChange(C) {
                    return this._urlChangeListeners.push(C),
                    this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(x => {
                        this._notifyUrlChangeListeners(x.url, x.state)
                    }
                    )),
                    () => {
                        const x = this._urlChangeListeners.indexOf(C);
                        this._urlChangeListeners.splice(x, 1),
                        0 === this._urlChangeListeners.length && (this._urlChangeSubscription?.unsubscribe(),
                        this._urlChangeSubscription = null)
                    }
                }
                _notifyUrlChangeListeners(C="", x) {
                    this._urlChangeListeners.forEach(G => G(C, x))
                }
                subscribe(C, x, G) {
                    return this._subject.subscribe({
                        next: C,
                        error: x,
                        complete: G
                    })
                }
            }
            return _.normalizeQueryParams = je,
            _.joinWithSlash = ce,
            _.stripTrailingSlash = Ne,
            _.\u0275fac = function(C) {
                return new (C || _)(a.LFG(Qe))
            }
            ,
            _.\u0275prov = a.Yz7({
                token: _,
                factory: function() {
                    return function X() {
                        return new fe((0,
                        a.LFG)(Qe))
                    }()
                },
                providedIn: "root"
            }),
            _
        }
        )();
        function ot(_) {
            return _.replace(/\/index.html$/, "")
        }
        var Z = ( () => ((Z = Z || {})[Z.Format = 0] = "Format",
        Z[Z.Standalone = 1] = "Standalone",
        Z))()
          , ne = ( () => ((ne = ne || {})[ne.Narrow = 0] = "Narrow",
        ne[ne.Abbreviated = 1] = "Abbreviated",
        ne[ne.Wide = 2] = "Wide",
        ne[ne.Short = 3] = "Short",
        ne))()
          , he = ( () => ((he = he || {})[he.Short = 0] = "Short",
        he[he.Medium = 1] = "Medium",
        he[he.Long = 2] = "Long",
        he[he.Full = 3] = "Full",
        he))()
          , K = ( () => ((K = K || {})[K.Decimal = 0] = "Decimal",
        K[K.Group = 1] = "Group",
        K[K.List = 2] = "List",
        K[K.PercentSign = 3] = "PercentSign",
        K[K.PlusSign = 4] = "PlusSign",
        K[K.MinusSign = 5] = "MinusSign",
        K[K.Exponential = 6] = "Exponential",
        K[K.SuperscriptingExponent = 7] = "SuperscriptingExponent",
        K[K.PerMille = 8] = "PerMille",
        K[K.Infinity = 9] = "Infinity",
        K[K.NaN = 10] = "NaN",
        K[K.TimeSeparator = 11] = "TimeSeparator",
        K[K.CurrencyDecimal = 12] = "CurrencyDecimal",
        K[K.CurrencyGroup = 13] = "CurrencyGroup",
        K))();
        function Me(_, P) {
            return Lt((0,
            a.cg1)(_)[a.wAp.DateFormat], P)
        }
        function Le(_, P) {
            return Lt((0,
            a.cg1)(_)[a.wAp.TimeFormat], P)
        }
        function Q(_, P) {
            return Lt((0,
            a.cg1)(_)[a.wAp.DateTimeFormat], P)
        }
        function q(_, P) {
            const C = (0,
            a.cg1)(_)
              , x = C[a.wAp.NumberSymbols][P];
            if (typeof x > "u") {
                if (P === K.CurrencyDecimal)
                    return C[a.wAp.NumberSymbols][K.Decimal];
                if (P === K.CurrencyGroup)
                    return C[a.wAp.NumberSymbols][K.Group]
            }
            return x
        }
        function Tn(_) {
            if (!_[a.wAp.ExtraData])
                throw new Error(`Missing extra locale data for the locale "${_[a.wAp.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)
        }
        function Lt(_, P) {
            for (let C = P; C > -1; C--)
                if (typeof _[C] < "u")
                    return _[C];
            throw new Error("Locale data API: locale data undefined")
        }
        function Sn(_) {
            const [P,C] = _.split(":");
            return {
                hours: +P,
                minutes: +C
            }
        }
        const ri = /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/
          , Gr = {}
          , ee = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
        var B = ( () => ((B = B || {})[B.Short = 0] = "Short",
        B[B.ShortGMT = 1] = "ShortGMT",
        B[B.Long = 2] = "Long",
        B[B.Extended = 3] = "Extended",
        B))()
          , k = ( () => ((k = k || {})[k.FullYear = 0] = "FullYear",
        k[k.Month = 1] = "Month",
        k[k.Date = 2] = "Date",
        k[k.Hours = 3] = "Hours",
        k[k.Minutes = 4] = "Minutes",
        k[k.Seconds = 5] = "Seconds",
        k[k.FractionalSeconds = 6] = "FractionalSeconds",
        k[k.Day = 7] = "Day",
        k))()
          , se = ( () => ((se = se || {})[se.DayPeriods = 0] = "DayPeriods",
        se[se.Days = 1] = "Days",
        se[se.Months = 2] = "Months",
        se[se.Eras = 3] = "Eras",
        se))();
        function Ae(_, P, C, x) {
            let G = function yr(_) {
                if (Kn(_))
                    return _;
                if ("number" == typeof _ && !isNaN(_))
                    return new Date(_);
                if ("string" == typeof _) {
                    if (_ = _.trim(),
                    /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(_)) {
                        const [G,ae=1,Te=1] = _.split("-").map(Ye => +Ye);
                        return rt(G, ae - 1, Te)
                    }
                    const C = parseFloat(_);
                    if (!isNaN(_ - C))
                        return new Date(C);
                    let x;
                    if (x = _.match(ri))
                        return function Ir(_) {
                            const P = new Date(0);
                            let C = 0
                              , x = 0;
                            const G = _[8] ? P.setUTCFullYear : P.setFullYear
                              , ae = _[8] ? P.setUTCHours : P.setHours;
                            _[9] && (C = Number(_[9] + _[10]),
                            x = Number(_[9] + _[11])),
                            G.call(P, Number(_[1]), Number(_[2]) - 1, Number(_[3]));
                            const Te = Number(_[4] || 0) - C
                              , Ye = Number(_[5] || 0) - x
                              , Yt = Number(_[6] || 0)
                              , Gt = Math.floor(1e3 * parseFloat("0." + (_[7] || 0)));
                            return ae.call(P, Te, Ye, Yt, Gt),
                            P
                        }(x)
                }
                const P = new Date(_);
                if (!Kn(P))
                    throw new Error(`Unable to convert "${_}" into a date`);
                return P
            }(_);
            P = Re(C, P) || P;
            let Ye, Te = [];
            for (; P; ) {
                if (Ye = ee.exec(P),
                !Ye) {
                    Te.push(P);
                    break
                }
                {
                    Te = Te.concat(Ye.slice(1));
                    const zt = Te.pop();
                    if (!zt)
                        break;
                    P = zt
                }
            }
            let Yt = G.getTimezoneOffset();
            x && (Yt = Wn(x, Yt),
            G = function ii(_, P, C) {
                const x = C ? -1 : 1
                  , G = _.getTimezoneOffset();
                return function mi(_, P) {
                    return (_ = new Date(_.getTime())).setMinutes(_.getMinutes() + P),
                    _
                }(_, x * (Wn(P, G) - G))
            }(G, x, !0));
            let Gt = "";
            return Te.forEach(zt => {
                const Dt = function ar(_) {
                    if (jn[_])
                        return jn[_];
                    let P;
                    switch (_) {
                    case "G":
                    case "GG":
                    case "GGG":
                        P = bt(se.Eras, ne.Abbreviated);
                        break;
                    case "GGGG":
                        P = bt(se.Eras, ne.Wide);
                        break;
                    case "GGGGG":
                        P = bt(se.Eras, ne.Narrow);
                        break;
                    case "y":
                        P = wt(k.FullYear, 1, 0, !1, !0);
                        break;
                    case "yy":
                        P = wt(k.FullYear, 2, 0, !0, !0);
                        break;
                    case "yyy":
                        P = wt(k.FullYear, 3, 0, !1, !0);
                        break;
                    case "yyyy":
                        P = wt(k.FullYear, 4, 0, !1, !0);
                        break;
                    case "Y":
                        P = Xt(1);
                        break;
                    case "YY":
                        P = Xt(2, !0);
                        break;
                    case "YYY":
                        P = Xt(3);
                        break;
                    case "YYYY":
                        P = Xt(4);
                        break;
                    case "M":
                    case "L":
                        P = wt(k.Month, 1, 1);
                        break;
                    case "MM":
                    case "LL":
                        P = wt(k.Month, 2, 1);
                        break;
                    case "MMM":
                        P = bt(se.Months, ne.Abbreviated);
                        break;
                    case "MMMM":
                        P = bt(se.Months, ne.Wide);
                        break;
                    case "MMMMM":
                        P = bt(se.Months, ne.Narrow);
                        break;
                    case "LLL":
                        P = bt(se.Months, ne.Abbreviated, Z.Standalone);
                        break;
                    case "LLLL":
                        P = bt(se.Months, ne.Wide, Z.Standalone);
                        break;
                    case "LLLLL":
                        P = bt(se.Months, ne.Narrow, Z.Standalone);
                        break;
                    case "w":
                        P = Un(1);
                        break;
                    case "ww":
                        P = Un(2);
                        break;
                    case "W":
                        P = Un(1, !0);
                        break;
                    case "d":
                        P = wt(k.Date, 1);
                        break;
                    case "dd":
                        P = wt(k.Date, 2);
                        break;
                    case "c":
                    case "cc":
                        P = wt(k.Day, 1);
                        break;
                    case "ccc":
                        P = bt(se.Days, ne.Abbreviated, Z.Standalone);
                        break;
                    case "cccc":
                        P = bt(se.Days, ne.Wide, Z.Standalone);
                        break;
                    case "ccccc":
                        P = bt(se.Days, ne.Narrow, Z.Standalone);
                        break;
                    case "cccccc":
                        P = bt(se.Days, ne.Short, Z.Standalone);
                        break;
                    case "E":
                    case "EE":
                    case "EEE":
                        P = bt(se.Days, ne.Abbreviated);
                        break;
                    case "EEEE":
                        P = bt(se.Days, ne.Wide);
                        break;
                    case "EEEEE":
                        P = bt(se.Days, ne.Narrow);
                        break;
                    case "EEEEEE":
                        P = bt(se.Days, ne.Short);
                        break;
                    case "a":
                    case "aa":
                    case "aaa":
                        P = bt(se.DayPeriods, ne.Abbreviated);
                        break;
                    case "aaaa":
                        P = bt(se.DayPeriods, ne.Wide);
                        break;
                    case "aaaaa":
                        P = bt(se.DayPeriods, ne.Narrow);
                        break;
                    case "b":
                    case "bb":
                    case "bbb":
                        P = bt(se.DayPeriods, ne.Abbreviated, Z.Standalone, !0);
                        break;
                    case "bbbb":
                        P = bt(se.DayPeriods, ne.Wide, Z.Standalone, !0);
                        break;
                    case "bbbbb":
                        P = bt(se.DayPeriods, ne.Narrow, Z.Standalone, !0);
                        break;
                    case "B":
                    case "BB":
                    case "BBB":
                        P = bt(se.DayPeriods, ne.Abbreviated, Z.Format, !0);
                        break;
                    case "BBBB":
                        P = bt(se.DayPeriods, ne.Wide, Z.Format, !0);
                        break;
                    case "BBBBB":
                        P = bt(se.DayPeriods, ne.Narrow, Z.Format, !0);
                        break;
                    case "h":
                        P = wt(k.Hours, 1, -12);
                        break;
                    case "hh":
                        P = wt(k.Hours, 2, -12);
                        break;
                    case "H":
                        P = wt(k.Hours, 1);
                        break;
                    case "HH":
                        P = wt(k.Hours, 2);
                        break;
                    case "m":
                        P = wt(k.Minutes, 1);
                        break;
                    case "mm":
                        P = wt(k.Minutes, 2);
                        break;
                    case "s":
                        P = wt(k.Seconds, 1);
                        break;
                    case "ss":
                        P = wt(k.Seconds, 2);
                        break;
                    case "S":
                        P = wt(k.FractionalSeconds, 1);
                        break;
                    case "SS":
                        P = wt(k.FractionalSeconds, 2);
                        break;
                    case "SSS":
                        P = wt(k.FractionalSeconds, 3);
                        break;
                    case "Z":
                    case "ZZ":
                    case "ZZZ":
                        P = Et(B.Short);
                        break;
                    case "ZZZZZ":
                        P = Et(B.Extended);
                        break;
                    case "O":
                    case "OO":
                    case "OOO":
                    case "z":
                    case "zz":
                    case "zzz":
                        P = Et(B.ShortGMT);
                        break;
                    case "OOOO":
                    case "ZZZZ":
                    case "zzzz":
                        P = Et(B.Long);
                        break;
                    default:
                        return null
                    }
                    return jn[_] = P,
                    P
                }(zt);
                Gt += Dt ? Dt(G, C, Yt) : "''" === zt ? "'" : zt.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }
            ),
            Gt
        }
        function rt(_, P, C) {
            const x = new Date(0);
            return x.setFullYear(_, P, C),
            x.setHours(0, 0, 0),
            x
        }
        function Re(_, P) {
            const C = function Ve(_) {
                return (0,
                a.cg1)(_)[a.wAp.LocaleId]
            }(_);
            if (Gr[C] = Gr[C] || {},
            Gr[C][P])
                return Gr[C][P];
            let x = "";
            switch (P) {
            case "shortDate":
                x = Me(_, he.Short);
                break;
            case "mediumDate":
                x = Me(_, he.Medium);
                break;
            case "longDate":
                x = Me(_, he.Long);
                break;
            case "fullDate":
                x = Me(_, he.Full);
                break;
            case "shortTime":
                x = Le(_, he.Short);
                break;
            case "mediumTime":
                x = Le(_, he.Medium);
                break;
            case "longTime":
                x = Le(_, he.Long);
                break;
            case "fullTime":
                x = Le(_, he.Full);
                break;
            case "short":
                const G = Re(_, "shortTime")
                  , ae = Re(_, "shortDate");
                x = dt(Q(_, he.Short), [G, ae]);
                break;
            case "medium":
                const Te = Re(_, "mediumTime")
                  , Ye = Re(_, "mediumDate");
                x = dt(Q(_, he.Medium), [Te, Ye]);
                break;
            case "long":
                const Yt = Re(_, "longTime")
                  , Gt = Re(_, "longDate");
                x = dt(Q(_, he.Long), [Yt, Gt]);
                break;
            case "full":
                const zt = Re(_, "fullTime")
                  , Dt = Re(_, "fullDate");
                x = dt(Q(_, he.Full), [zt, Dt])
            }
            return x && (Gr[C][P] = x),
            x
        }
        function dt(_, P) {
            return P && (_ = _.replace(/\{([^}]+)}/g, function(C, x) {
                return null != P && x in P ? P[x] : C
            })),
            _
        }
        function ut(_, P, C="-", x, G) {
            let ae = "";
            (_ < 0 || G && _ <= 0) && (G ? _ = 1 - _ : (_ = -_,
            ae = C));
            let Te = String(_);
            for (; Te.length < P; )
                Te = "0" + Te;
            return x && (Te = Te.slice(Te.length - P)),
            ae + Te
        }
        function wt(_, P, C=0, x=!1, G=!1) {
            return function(ae, Te) {
                let Ye = function At(_, P) {
                    switch (_) {
                    case k.FullYear:
                        return P.getFullYear();
                    case k.Month:
                        return P.getMonth();
                    case k.Date:
                        return P.getDate();
                    case k.Hours:
                        return P.getHours();
                    case k.Minutes:
                        return P.getMinutes();
                    case k.Seconds:
                        return P.getSeconds();
                    case k.FractionalSeconds:
                        return P.getMilliseconds();
                    case k.Day:
                        return P.getDay();
                    default:
                        throw new Error(`Unknown DateType value "${_}".`)
                    }
                }(_, ae);
                if ((C > 0 || Ye > -C) && (Ye += C),
                _ === k.Hours)
                    0 === Ye && -12 === C && (Ye = 12);
                else if (_ === k.FractionalSeconds)
                    return function qt(_, P) {
                        return ut(_, 3).substring(0, P)
                    }(Ye, P);
                const Yt = q(Te, K.MinusSign);
                return ut(Ye, P, Yt, x, G)
            }
        }
        function bt(_, P, C=Z.Format, x=!1) {
            return function(G, ae) {
                return function Jt(_, P, C, x, G, ae) {
                    switch (C) {
                    case se.Months:
                        return function Zt(_, P, C) {
                            const x = (0,
                            a.cg1)(_)
                              , ae = Lt([x[a.wAp.MonthsFormat], x[a.wAp.MonthsStandalone]], P);
                            return Lt(ae, C)
                        }(P, G, x)[_.getMonth()];
                    case se.Days:
                        return function st(_, P, C) {
                            const x = (0,
                            a.cg1)(_)
                              , ae = Lt([x[a.wAp.DaysFormat], x[a.wAp.DaysStandalone]], P);
                            return Lt(ae, C)
                        }(P, G, x)[_.getDay()];
                    case se.DayPeriods:
                        const Te = _.getHours()
                          , Ye = _.getMinutes();
                        if (ae) {
                            const Gt = function En(_) {
                                const P = (0,
                                a.cg1)(_);
                                return Tn(P),
                                (P[a.wAp.ExtraData][2] || []).map(x => "string" == typeof x ? Sn(x) : [Sn(x[0]), Sn(x[1])])
                            }(P)
                              , zt = function Bn(_, P, C) {
                                const x = (0,
                                a.cg1)(_);
                                Tn(x);
                                const ae = Lt([x[a.wAp.ExtraData][0], x[a.wAp.ExtraData][1]], P) || [];
                                return Lt(ae, C) || []
                            }(P, G, x)
                              , Dt = Gt.findIndex(Bt => {
                                if (Array.isArray(Bt)) {
                                    const [Wt,qe] = Bt
                                      , Qn = Te >= Wt.hours && Ye >= Wt.minutes
                                      , fi = Te < qe.hours || Te === qe.hours && Ye < qe.minutes;
                                    if (Wt.hours < qe.hours) {
                                        if (Qn && fi)
                                            return !0
                                    } else if (Qn || fi)
                                        return !0
                                } else if (Bt.hours === Te && Bt.minutes === Ye)
                                    return !0;
                                return !1
                            }
                            );
                            if (-1 !== Dt)
                                return zt[Dt]
                        }
                        return function mt(_, P, C) {
                            const x = (0,
                            a.cg1)(_)
                              , ae = Lt([x[a.wAp.DayPeriodsFormat], x[a.wAp.DayPeriodsStandalone]], P);
                            return Lt(ae, C)
                        }(P, G, x)[Te < 12 ? 0 : 1];
                    case se.Eras:
                        return function lt(_, P) {
                            return Lt((0,
                            a.cg1)(_)[a.wAp.Eras], P)
                        }(P, x)[_.getFullYear() <= 0 ? 0 : 1];
                    default:
                        throw new Error(`unexpected translation type ${C}`)
                    }
                }(G, ae, _, P, C, x)
            }
        }
        function Et(_) {
            return function(P, C, x) {
                const G = -1 * x
                  , ae = q(C, K.MinusSign)
                  , Te = G > 0 ? Math.floor(G / 60) : Math.ceil(G / 60);
                switch (_) {
                case B.Short:
                    return (G >= 0 ? "+" : "") + ut(Te, 2, ae) + ut(Math.abs(G % 60), 2, ae);
                case B.ShortGMT:
                    return "GMT" + (G >= 0 ? "+" : "") + ut(Te, 1, ae);
                case B.Long:
                    return "GMT" + (G >= 0 ? "+" : "") + ut(Te, 2, ae) + ":" + ut(Math.abs(G % 60), 2, ae);
                case B.Extended:
                    return 0 === x ? "Z" : (G >= 0 ? "+" : "") + ut(Te, 2, ae) + ":" + ut(Math.abs(G % 60), 2, ae);
                default:
                    throw new Error(`Unknown zone width "${_}"`)
                }
            }
        }
        function sr(_) {
            return rt(_.getFullYear(), _.getMonth(), _.getDate() + (4 - _.getDay()))
        }
        function Un(_, P=!1) {
            return function(C, x) {
                let G;
                if (P) {
                    const ae = new Date(C.getFullYear(),C.getMonth(),1).getDay() - 1
                      , Te = C.getDate();
                    G = 1 + Math.floor((Te + ae) / 7)
                } else {
                    const ae = sr(C)
                      , Te = function on(_) {
                        const P = rt(_, 0, 1).getDay();
                        return rt(_, 0, 1 + (P <= 4 ? 4 : 11) - P)
                    }(ae.getFullYear())
                      , Ye = ae.getTime() - Te.getTime();
                    G = 1 + Math.round(Ye / 6048e5)
                }
                return ut(G, _, q(x, K.MinusSign))
            }
        }
        function Xt(_, P=!1) {
            return function(C, x) {
                return ut(sr(C).getFullYear(), _, q(x, K.MinusSign), P)
            }
        }
        const jn = {};
        function Wn(_, P) {
            _ = _.replace(/:/g, "");
            const C = Date.parse("Jan 01, 1970 00:00:00 " + _) / 6e4;
            return isNaN(C) ? P : C
        }
        function Kn(_) {
            return _ instanceof Date && !isNaN(_.valueOf())
        }
        function tr(_, P) {
            P = encodeURIComponent(P);
            for (const C of _.split(";")) {
                const x = C.indexOf("=")
                  , [G,ae] = -1 == x ? [C, ""] : [C.slice(0, x), C.slice(x + 1)];
                if (G.trim() === P)
                    return decodeURIComponent(ae)
            }
            return null
        }
        let un = ( () => {
            class _ {
                constructor(C, x, G, ae) {
                    this._iterableDiffers = C,
                    this._keyValueDiffers = x,
                    this._ngEl = G,
                    this._renderer = ae,
                    this._iterableDiffer = null,
                    this._keyValueDiffer = null,
                    this._initialClasses = [],
                    this._rawClass = null
                }
                set klass(C) {
                    this._removeClasses(this._initialClasses),
                    this._initialClasses = "string" == typeof C ? C.split(/\s+/) : [],
                    this._applyClasses(this._initialClasses),
                    this._applyClasses(this._rawClass)
                }
                set ngClass(C) {
                    this._removeClasses(this._rawClass),
                    this._applyClasses(this._initialClasses),
                    this._iterableDiffer = null,
                    this._keyValueDiffer = null,
                    this._rawClass = "string" == typeof C ? C.split(/\s+/) : C,
                    this._rawClass && ((0,
                    a.sIi)(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
                }
                ngDoCheck() {
                    if (this._iterableDiffer) {
                        const C = this._iterableDiffer.diff(this._rawClass);
                        C && this._applyIterableChanges(C)
                    } else if (this._keyValueDiffer) {
                        const C = this._keyValueDiffer.diff(this._rawClass);
                        C && this._applyKeyValueChanges(C)
                    }
                }
                _applyKeyValueChanges(C) {
                    C.forEachAddedItem(x => this._toggleClass(x.key, x.currentValue)),
                    C.forEachChangedItem(x => this._toggleClass(x.key, x.currentValue)),
                    C.forEachRemovedItem(x => {
                        x.previousValue && this._toggleClass(x.key, !1)
                    }
                    )
                }
                _applyIterableChanges(C) {
                    C.forEachAddedItem(x => {
                        if ("string" != typeof x.item)
                            throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0,
                            a.AaK)(x.item)}`);
                        this._toggleClass(x.item, !0)
                    }
                    ),
                    C.forEachRemovedItem(x => this._toggleClass(x.item, !1))
                }
                _applyClasses(C) {
                    C && (Array.isArray(C) || C instanceof Set ? C.forEach(x => this._toggleClass(x, !0)) : Object.keys(C).forEach(x => this._toggleClass(x, !!C[x])))
                }
                _removeClasses(C) {
                    C && (Array.isArray(C) || C instanceof Set ? C.forEach(x => this._toggleClass(x, !1)) : Object.keys(C).forEach(x => this._toggleClass(x, !1)))
                }
                _toggleClass(C, x) {
                    (C = C.trim()) && C.split(/\s+/g).forEach(G => {
                        x ? this._renderer.addClass(this._ngEl.nativeElement, G) : this._renderer.removeClass(this._ngEl.nativeElement, G)
                    }
                    )
                }
            }
            return _.\u0275fac = function(C) {
                return new (C || _)(a.Y36(a.ZZ4),a.Y36(a.aQg),a.Y36(a.SBq),a.Y36(a.Qsj))
            }
            ,
            _.\u0275dir = a.lG2({
                type: _,
                selectors: [["", "ngClass", ""]],
                inputs: {
                    klass: ["class", "klass"],
                    ngClass: "ngClass"
                },
                standalone: !0
            }),
            _
        }
        )();
        class Or {
            constructor(P, C, x, G) {
                this.$implicit = P,
                this.ngForOf = C,
                this.index = x,
                this.count = G
            }
            get first() {
                return 0 === this.index
            }
            get last() {
                return this.index === this.count - 1
            }
            get even() {
                return this.index % 2 == 0
            }
            get odd() {
                return !this.even
            }
        }
        let gn = ( () => {
            class _ {
                constructor(C, x, G) {
                    this._viewContainer = C,
                    this._template = x,
                    this._differs = G,
                    this._ngForOf = null,
                    this._ngForOfDirty = !0,
                    this._differ = null
                }
                set ngForOf(C) {
                    this._ngForOf = C,
                    this._ngForOfDirty = !0
                }
                set ngForTrackBy(C) {
                    this._trackByFn = C
                }
                get ngForTrackBy() {
                    return this._trackByFn
                }
                set ngForTemplate(C) {
                    C && (this._template = C)
                }
                ngDoCheck() {
                    if (this._ngForOfDirty) {
                        this._ngForOfDirty = !1;
                        const C = this._ngForOf;
                        !this._differ && C && (this._differ = this._differs.find(C).create(this.ngForTrackBy))
                    }
                    if (this._differ) {
                        const C = this._differ.diff(this._ngForOf);
                        C && this._applyChanges(C)
                    }
                }
                _applyChanges(C) {
                    const x = this._viewContainer;
                    C.forEachOperation( (G, ae, Te) => {
                        if (null == G.previousIndex)
                            x.createEmbeddedView(this._template, new Or(G.item,this._ngForOf,-1,-1), null === Te ? void 0 : Te);
                        else if (null == Te)
                            x.remove(null === ae ? void 0 : ae);
                        else if (null !== ae) {
                            const Ye = x.get(ae);
                            x.move(Ye, Te),
                            Vt(Ye, G)
                        }
                    }
                    );
                    for (let G = 0, ae = x.length; G < ae; G++) {
                        const Ye = x.get(G).context;
                        Ye.index = G,
                        Ye.count = ae,
                        Ye.ngForOf = this._ngForOf
                    }
                    C.forEachIdentityChange(G => {
                        Vt(x.get(G.currentIndex), G)
                    }
                    )
                }
                static ngTemplateContextGuard(C, x) {
                    return !0
                }
            }
            return _.\u0275fac = function(C) {
                return new (C || _)(a.Y36(a.s_b),a.Y36(a.Rgc),a.Y36(a.ZZ4))
            }
            ,
            _.\u0275dir = a.lG2({
                type: _,
                selectors: [["", "ngFor", "", "ngForOf", ""]],
                inputs: {
                    ngForOf: "ngForOf",
                    ngForTrackBy: "ngForTrackBy",
                    ngForTemplate: "ngForTemplate"
                },
                standalone: !0
            }),
            _
        }
        )();
        function Vt(_, P) {
            _.context.$implicit = P.item
        }
        let xr = ( () => {
            class _ {
                constructor(C, x) {
                    this._viewContainer = C,
                    this._context = new On,
                    this._thenTemplateRef = null,
                    this._elseTemplateRef = null,
                    this._thenViewRef = null,
                    this._elseViewRef = null,
                    this._thenTemplateRef = x
                }
                set ngIf(C) {
                    this._context.$implicit = this._context.ngIf = C,
                    this._updateView()
                }
                set ngIfThen(C) {
                    ur("ngIfThen", C),
                    this._thenTemplateRef = C,
                    this._thenViewRef = null,
                    this._updateView()
                }
                set ngIfElse(C) {
                    ur("ngIfElse", C),
                    this._elseTemplateRef = C,
                    this._elseViewRef = null,
                    this._updateView()
                }
                _updateView() {
                    this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(),
                    this._elseViewRef = null,
                    this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(),
                    this._thenViewRef = null,
                    this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                }
                static ngTemplateContextGuard(C, x) {
                    return !0
                }
            }
            return _.\u0275fac = function(C) {
                return new (C || _)(a.Y36(a.s_b),a.Y36(a.Rgc))
            }
            ,
            _.\u0275dir = a.lG2({
                type: _,
                selectors: [["", "ngIf", ""]],
                inputs: {
                    ngIf: "ngIf",
                    ngIfThen: "ngIfThen",
                    ngIfElse: "ngIfElse"
                },
                standalone: !0
            }),
            _
        }
        )();
        class On {
            constructor() {
                this.$implicit = null,
                this.ngIf = null
            }
        }
        function ur(_, P) {
            if (P && !P.createEmbeddedView)
                throw new Error(`${_} must be a TemplateRef, but received '${(0,
                a.AaK)(P)}'.`)
        }
        let Wr = ( () => {
            class _ {
                constructor(C, x, G) {
                    this._ngEl = C,
                    this._differs = x,
                    this._renderer = G,
                    this._ngStyle = null,
                    this._differ = null
                }
                set ngStyle(C) {
                    this._ngStyle = C,
                    !this._differ && C && (this._differ = this._differs.find(C).create())
                }
                ngDoCheck() {
                    if (this._differ) {
                        const C = this._differ.diff(this._ngStyle);
                        C && this._applyChanges(C)
                    }
                }
                _setStyle(C, x) {
                    const [G,ae] = C.split(".")
                      , Te = -1 === G.indexOf("-") ? void 0 : a.JOm.DashCase;
                    null != x ? this._renderer.setStyle(this._ngEl.nativeElement, G, ae ? `${x}${ae}` : x, Te) : this._renderer.removeStyle(this._ngEl.nativeElement, G, Te)
                }
                _applyChanges(C) {
                    C.forEachRemovedItem(x => this._setStyle(x.key, null)),
                    C.forEachAddedItem(x => this._setStyle(x.key, x.currentValue)),
                    C.forEachChangedItem(x => this._setStyle(x.key, x.currentValue))
                }
            }
            return _.\u0275fac = function(C) {
                return new (C || _)(a.Y36(a.SBq),a.Y36(a.aQg),a.Y36(a.Qsj))
            }
            ,
            _.\u0275dir = a.lG2({
                type: _,
                selectors: [["", "ngStyle", ""]],
                inputs: {
                    ngStyle: "ngStyle"
                },
                standalone: !0
            }),
            _
        }
        )()
          , Nr = ( () => {
            class _ {
                constructor(C) {
                    this._viewContainerRef = C,
                    this._viewRef = null,
                    this.ngTemplateOutletContext = null,
                    this.ngTemplateOutlet = null,
                    this.ngTemplateOutletInjector = null
                }
                ngOnChanges(C) {
                    if (C.ngTemplateOutlet || C.ngTemplateOutletInjector) {
                        const x = this._viewContainerRef;
                        if (this._viewRef && x.remove(x.indexOf(this._viewRef)),
                        this.ngTemplateOutlet) {
                            const {ngTemplateOutlet: G, ngTemplateOutletContext: ae, ngTemplateOutletInjector: Te} = this;
                            this._viewRef = x.createEmbeddedView(G, ae, Te ? {
                                injector: Te
                            } : void 0)
                        } else
                            this._viewRef = null
                    } else
                        this._viewRef && C.ngTemplateOutletContext && this.ngTemplateOutletContext && (this._viewRef.context = this.ngTemplateOutletContext)
                }
            }
            return _.\u0275fac = function(C) {
                return new (C || _)(a.Y36(a.s_b))
            }
            ,
            _.\u0275dir = a.lG2({
                type: _,
                selectors: [["", "ngTemplateOutlet", ""]],
                inputs: {
                    ngTemplateOutletContext: "ngTemplateOutletContext",
                    ngTemplateOutlet: "ngTemplateOutlet",
                    ngTemplateOutletInjector: "ngTemplateOutletInjector"
                },
                standalone: !0,
                features: [a.TTD]
            }),
            _
        }
        )();
        const Dr = new a.OlP("DATE_PIPE_DEFAULT_TIMEZONE");
        let Ai = ( () => {
            class _ {
                constructor(C, x) {
                    this.locale = C,
                    this.defaultTimezone = x
                }
                transform(C, x="mediumDate", G, ae) {
                    if (null == C || "" === C || C != C)
                        return null;
                    try {
                        return Ae(C, x, ae || this.locale, G ?? this.defaultTimezone ?? void 0)
                    } catch (Te) {
                        throw function tn(_, P) {
                            return new a.vHH(2100,!1)
                        }()
                    }
                }
            }
            return _.\u0275fac = function(C) {
                return new (C || _)(a.Y36(a.soG, 16),a.Y36(Dr, 24))
            }
            ,
            _.\u0275pipe = a.Yjl({
                name: "date",
                type: _,
                pure: !0,
                standalone: !0
            }),
            _
        }
        )()
          , Kr = ( () => {
            class _ {
            }
            return _.\u0275fac = function(C) {
                return new (C || _)
            }
            ,
            _.\u0275mod = a.oAB({
                type: _
            }),
            _.\u0275inj = a.cJS({}),
            _
        }
        )();
        const Oi = "browser";
        function Rr(_) {
            return _ === Oi
        }
        let Yr = ( () => {
            class _ {
            }
            return _.\u0275prov = (0,
            a.Yz7)({
                token: _,
                providedIn: "root",
                factory: () => new xi((0,
                a.LFG)(Ce),window)
            }),
            _
        }
        )();
        class xi {
            constructor(P, C) {
                this.document = P,
                this.window = C,
                this.offset = () => [0, 0]
            }
            setOffset(P) {
                this.offset = Array.isArray(P) ? () => P : P
            }
            getScrollPosition() {
                return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0]
            }
            scrollToPosition(P) {
                this.supportsScrolling() && this.window.scrollTo(P[0], P[1])
            }
            scrollToAnchor(P) {
                if (!this.supportsScrolling())
                    return;
                const C = function ao(_, P) {
                    const C = _.getElementById(P) || _.getElementsByName(P)[0];
                    if (C)
                        return C;
                    if ("function" == typeof _.createTreeWalker && _.body && (_.body.createShadowRoot || _.body.attachShadow)) {
                        const x = _.createTreeWalker(_.body, NodeFilter.SHOW_ELEMENT);
                        let G = x.currentNode;
                        for (; G; ) {
                            const ae = G.shadowRoot;
                            if (ae) {
                                const Te = ae.getElementById(P) || ae.querySelector(`[name="${P}"]`);
                                if (Te)
                                    return Te
                            }
                            G = x.nextNode()
                        }
                    }
                    return null
                }(this.document, P);
                C && (this.scrollToElement(C),
                C.focus())
            }
            setHistoryScrollRestoration(P) {
                if (this.supportScrollRestoration()) {
                    const C = this.window.history;
                    C && C.scrollRestoration && (C.scrollRestoration = P)
                }
            }
            scrollToElement(P) {
                const C = P.getBoundingClientRect()
                  , x = C.left + this.window.pageXOffset
                  , G = C.top + this.window.pageYOffset
                  , ae = this.offset();
                this.window.scrollTo(x - ae[0], G - ae[1])
            }
            supportScrollRestoration() {
                try {
                    if (!this.supportsScrolling())
                        return !1;
                    const P = Di(this.window.history) || Di(Object.getPrototypeOf(this.window.history));
                    return !(!P || !P.writable && !P.set)
                } catch {
                    return !1
                }
            }
            supportsScrolling() {
                try {
                    return !!this.window && !!this.window.scrollTo && "pageXOffset"in this.window
                } catch {
                    return !1
                }
            }
        }
        function Di(_) {
            return Object.getOwnPropertyDescriptor(_, "scrollRestoration")
        }
        class fn {
        }
    }
    ,
    529: (Je, pe, I) => {
        I.d(pe, {
            JF: () => mr,
            LE: () => it,
            TP: () => st,
            WM: () => de,
            dt: () => $e,
            eN: () => Ve
        });
        var a = I(6895)
          , b = I(8256)
          , oe = I(9646)
          , te = I(9751)
          , ie = I(4351)
          , be = I(9300)
          , Ce = I(4004);
        class Oe {
        }
        class Se {
        }
        class de {
            constructor(B) {
                this.normalizedNames = new Map,
                this.lazyUpdate = null,
                B ? this.lazyInit = "string" == typeof B ? () => {
                    this.headers = new Map,
                    B.split("\n").forEach(k => {
                        const se = k.indexOf(":");
                        if (se > 0) {
                            const Ae = k.slice(0, se)
                              , rt = Ae.toLowerCase()
                              , Re = k.slice(se + 1).trim();
                            this.maybeSetNormalizedName(Ae, rt),
                            this.headers.has(rt) ? this.headers.get(rt).push(Re) : this.headers.set(rt, [Re])
                        }
                    }
                    )
                }
                : () => {
                    this.headers = new Map,
                    Object.keys(B).forEach(k => {
                        let se = B[k];
                        const Ae = k.toLowerCase();
                        "string" == typeof se && (se = [se]),
                        se.length > 0 && (this.headers.set(Ae, se),
                        this.maybeSetNormalizedName(k, Ae))
                    }
                    )
                }
                : this.headers = new Map
            }
            has(B) {
                return this.init(),
                this.headers.has(B.toLowerCase())
            }
            get(B) {
                this.init();
                const k = this.headers.get(B.toLowerCase());
                return k && k.length > 0 ? k[0] : null
            }
            keys() {
                return this.init(),
                Array.from(this.normalizedNames.values())
            }
            getAll(B) {
                return this.init(),
                this.headers.get(B.toLowerCase()) || null
            }
            append(B, k) {
                return this.clone({
                    name: B,
                    value: k,
                    op: "a"
                })
            }
            set(B, k) {
                return this.clone({
                    name: B,
                    value: k,
                    op: "s"
                })
            }
            delete(B, k) {
                return this.clone({
                    name: B,
                    value: k,
                    op: "d"
                })
            }
            maybeSetNormalizedName(B, k) {
                this.normalizedNames.has(k) || this.normalizedNames.set(k, B)
            }
            init() {
                this.lazyInit && (this.lazyInit instanceof de ? this.copyFrom(this.lazyInit) : this.lazyInit(),
                this.lazyInit = null,
                this.lazyUpdate && (this.lazyUpdate.forEach(B => this.applyUpdate(B)),
                this.lazyUpdate = null))
            }
            copyFrom(B) {
                B.init(),
                Array.from(B.headers.keys()).forEach(k => {
                    this.headers.set(k, B.headers.get(k)),
                    this.normalizedNames.set(k, B.normalizedNames.get(k))
                }
                )
            }
            clone(B) {
                const k = new de;
                return k.lazyInit = this.lazyInit && this.lazyInit instanceof de ? this.lazyInit : this,
                k.lazyUpdate = (this.lazyUpdate || []).concat([B]),
                k
            }
            applyUpdate(B) {
                const k = B.name.toLowerCase();
                switch (B.op) {
                case "a":
                case "s":
                    let se = B.value;
                    if ("string" == typeof se && (se = [se]),
                    0 === se.length)
                        return;
                    this.maybeSetNormalizedName(B.name, k);
                    const Ae = ("a" === B.op ? this.headers.get(k) : void 0) || [];
                    Ae.push(...se),
                    this.headers.set(k, Ae);
                    break;
                case "d":
                    const rt = B.value;
                    if (rt) {
                        let Re = this.headers.get(k);
                        if (!Re)
                            return;
                        Re = Re.filter(dt => -1 === rt.indexOf(dt)),
                        0 === Re.length ? (this.headers.delete(k),
                        this.normalizedNames.delete(k)) : this.headers.set(k, Re)
                    } else
                        this.headers.delete(k),
                        this.normalizedNames.delete(k)
                }
            }
            forEach(B) {
                this.init(),
                Array.from(this.normalizedNames.keys()).forEach(k => B(this.normalizedNames.get(k), this.headers.get(k)))
            }
        }
        class _e {
            encodeKey(B) {
                return je(B)
            }
            encodeValue(B) {
                return je(B)
            }
            decodeKey(B) {
                return decodeURIComponent(B)
            }
            decodeValue(B) {
                return decodeURIComponent(B)
            }
        }
        const ce = /%(\d[a-f0-9])/gi
          , Ne = {
            40: "@",
            "3A": ":",
            24: "$",
            "2C": ",",
            "3B": ";",
            "3D": "=",
            "3F": "?",
            "2F": "/"
        };
        function je(ee) {
            return encodeURIComponent(ee).replace(ce, (B, k) => Ne[k] ?? B)
        }
        function Qe(ee) {
            return `${ee}`
        }
        class it {
            constructor(B={}) {
                if (this.updates = null,
                this.cloneFrom = null,
                this.encoder = B.encoder || new _e,
                B.fromString) {
                    if (B.fromObject)
                        throw new Error("Cannot specify both fromString and fromObject.");
                    this.map = function xe(ee, B) {
                        const k = new Map;
                        return ee.length > 0 && ee.replace(/^\?/, "").split("&").forEach(Ae => {
                            const rt = Ae.indexOf("=")
                              , [Re,dt] = -1 == rt ? [B.decodeKey(Ae), ""] : [B.decodeKey(Ae.slice(0, rt)), B.decodeValue(Ae.slice(rt + 1))]
                              , ut = k.get(Re) || [];
                            ut.push(dt),
                            k.set(Re, ut)
                        }
                        ),
                        k
                    }(B.fromString, this.encoder)
                } else
                    B.fromObject ? (this.map = new Map,
                    Object.keys(B.fromObject).forEach(k => {
                        const se = B.fromObject[k]
                          , Ae = Array.isArray(se) ? se.map(Qe) : [Qe(se)];
                        this.map.set(k, Ae)
                    }
                    )) : this.map = null
            }
            has(B) {
                return this.init(),
                this.map.has(B)
            }
            get(B) {
                this.init();
                const k = this.map.get(B);
                return k ? k[0] : null
            }
            getAll(B) {
                return this.init(),
                this.map.get(B) || null
            }
            keys() {
                return this.init(),
                Array.from(this.map.keys())
            }
            append(B, k) {
                return this.clone({
                    param: B,
                    value: k,
                    op: "a"
                })
            }
            appendAll(B) {
                const k = [];
                return Object.keys(B).forEach(se => {
                    const Ae = B[se];
                    Array.isArray(Ae) ? Ae.forEach(rt => {
                        k.push({
                            param: se,
                            value: rt,
                            op: "a"
                        })
                    }
                    ) : k.push({
                        param: se,
                        value: Ae,
                        op: "a"
                    })
                }
                ),
                this.clone(k)
            }
            set(B, k) {
                return this.clone({
                    param: B,
                    value: k,
                    op: "s"
                })
            }
            delete(B, k) {
                return this.clone({
                    param: B,
                    value: k,
                    op: "d"
                })
            }
            toString() {
                return this.init(),
                this.keys().map(B => {
                    const k = this.encoder.encodeKey(B);
                    return this.map.get(B).map(se => k + "=" + this.encoder.encodeValue(se)).join("&")
                }
                ).filter(B => "" !== B).join("&")
            }
            clone(B) {
                const k = new it({
                    encoder: this.encoder
                });
                return k.cloneFrom = this.cloneFrom || this,
                k.updates = (this.updates || []).concat(B),
                k
            }
            init() {
                null === this.map && (this.map = new Map),
                null !== this.cloneFrom && (this.cloneFrom.init(),
                this.cloneFrom.keys().forEach(B => this.map.set(B, this.cloneFrom.map.get(B))),
                this.updates.forEach(B => {
                    switch (B.op) {
                    case "a":
                    case "s":
                        const k = ("a" === B.op ? this.map.get(B.param) : void 0) || [];
                        k.push(Qe(B.value)),
                        this.map.set(B.param, k);
                        break;
                    case "d":
                        if (void 0 === B.value) {
                            this.map.delete(B.param);
                            break
                        }
                        {
                            let se = this.map.get(B.param) || [];
                            const Ae = se.indexOf(Qe(B.value));
                            -1 !== Ae && se.splice(Ae, 1),
                            se.length > 0 ? this.map.set(B.param, se) : this.map.delete(B.param)
                        }
                    }
                }
                ),
                this.cloneFrom = this.updates = null)
            }
        }
        class Be {
            constructor() {
                this.map = new Map
            }
            set(B, k) {
                return this.map.set(B, k),
                this
            }
            get(B) {
                return this.map.has(B) || this.map.set(B, B.defaultValue()),
                this.map.get(B)
            }
            delete(B) {
                return this.map.delete(B),
                this
            }
            has(B) {
                return this.map.has(B)
            }
            keys() {
                return this.map.keys()
            }
        }
        function X(ee) {
            return typeof ArrayBuffer < "u" && ee instanceof ArrayBuffer
        }
        function le(ee) {
            return typeof Blob < "u" && ee instanceof Blob
        }
        function ot(ee) {
            return typeof FormData < "u" && ee instanceof FormData
        }
        class De {
            constructor(B, k, se, Ae) {
                let rt;
                if (this.url = k,
                this.body = null,
                this.reportProgress = !1,
                this.withCredentials = !1,
                this.responseType = "json",
                this.method = B.toUpperCase(),
                function fe(ee) {
                    switch (ee) {
                    case "DELETE":
                    case "GET":
                    case "HEAD":
                    case "OPTIONS":
                    case "JSONP":
                        return !1;
                    default:
                        return !0
                    }
                }(this.method) || Ae ? (this.body = void 0 !== se ? se : null,
                rt = Ae) : rt = se,
                rt && (this.reportProgress = !!rt.reportProgress,
                this.withCredentials = !!rt.withCredentials,
                rt.responseType && (this.responseType = rt.responseType),
                rt.headers && (this.headers = rt.headers),
                rt.context && (this.context = rt.context),
                rt.params && (this.params = rt.params)),
                this.headers || (this.headers = new de),
                this.context || (this.context = new Be),
                this.params) {
                    const Re = this.params.toString();
                    if (0 === Re.length)
                        this.urlWithParams = k;
                    else {
                        const dt = k.indexOf("?");
                        this.urlWithParams = k + (-1 === dt ? "?" : dt < k.length - 1 ? "&" : "") + Re
                    }
                } else
                    this.params = new it,
                    this.urlWithParams = k
            }
            serializeBody() {
                return null === this.body ? null : X(this.body) || le(this.body) || ot(this.body) || function ye(ee) {
                    return typeof URLSearchParams < "u" && ee instanceof URLSearchParams
                }(this.body) || "string" == typeof this.body ? this.body : this.body instanceof it ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
            }
            detectContentTypeHeader() {
                return null === this.body || ot(this.body) ? null : le(this.body) ? this.body.type || null : X(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof it ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || "boolean" == typeof this.body ? "application/json" : null
            }
            clone(B={}) {
                const k = B.method || this.method
                  , se = B.url || this.url
                  , Ae = B.responseType || this.responseType
                  , rt = void 0 !== B.body ? B.body : this.body
                  , Re = void 0 !== B.withCredentials ? B.withCredentials : this.withCredentials
                  , dt = void 0 !== B.reportProgress ? B.reportProgress : this.reportProgress;
                let ut = B.headers || this.headers
                  , qt = B.params || this.params;
                const wt = B.context ?? this.context;
                return void 0 !== B.setHeaders && (ut = Object.keys(B.setHeaders).reduce( (At, bt) => At.set(bt, B.setHeaders[bt]), ut)),
                B.setParams && (qt = Object.keys(B.setParams).reduce( (At, bt) => At.set(bt, B.setParams[bt]), qt)),
                new De(k,se,rt,{
                    params: qt,
                    headers: ut,
                    context: wt,
                    reportProgress: dt,
                    responseType: Ae,
                    withCredentials: Re
                })
            }
        }
        var $e = ( () => (($e = $e || {})[$e.Sent = 0] = "Sent",
        $e[$e.UploadProgress = 1] = "UploadProgress",
        $e[$e.ResponseHeader = 2] = "ResponseHeader",
        $e[$e.DownloadProgress = 3] = "DownloadProgress",
        $e[$e.Response = 4] = "Response",
        $e[$e.User = 5] = "User",
        $e))();
        class Z {
            constructor(B, k=200, se="OK") {
                this.headers = B.headers || new de,
                this.status = void 0 !== B.status ? B.status : k,
                this.statusText = B.statusText || se,
                this.url = B.url || null,
                this.ok = this.status >= 200 && this.status < 300
            }
        }
        class ne extends Z {
            constructor(B={}) {
                super(B),
                this.type = $e.ResponseHeader
            }
            clone(B={}) {
                return new ne({
                    headers: B.headers || this.headers,
                    status: void 0 !== B.status ? B.status : this.status,
                    statusText: B.statusText || this.statusText,
                    url: B.url || this.url || void 0
                })
            }
        }
        class he extends Z {
            constructor(B={}) {
                super(B),
                this.type = $e.Response,
                this.body = void 0 !== B.body ? B.body : null
            }
            clone(B={}) {
                return new he({
                    body: void 0 !== B.body ? B.body : this.body,
                    headers: B.headers || this.headers,
                    status: void 0 !== B.status ? B.status : this.status,
                    statusText: B.statusText || this.statusText,
                    url: B.url || this.url || void 0
                })
            }
        }
        class K extends Z {
            constructor(B) {
                super(B, 0, "Unknown Error"),
                this.name = "HttpErrorResponse",
                this.ok = !1,
                this.message = this.status >= 200 && this.status < 300 ? `Http failure during parsing for ${B.url || "(unknown url)"}` : `Http failure response for ${B.url || "(unknown url)"}: ${B.status} ${B.statusText}`,
                this.error = B.error || null
            }
        }
        function ke(ee, B) {
            return {
                body: B,
                headers: ee.headers,
                context: ee.context,
                observe: ee.observe,
                params: ee.params,
                reportProgress: ee.reportProgress,
                responseType: ee.responseType,
                withCredentials: ee.withCredentials
            }
        }
        let Ve = ( () => {
            class ee {
                constructor(k) {
                    this.handler = k
                }
                request(k, se, Ae={}) {
                    let rt;
                    if (k instanceof De)
                        rt = k;
                    else {
                        let ut, qt;
                        ut = Ae.headers instanceof de ? Ae.headers : new de(Ae.headers),
                        Ae.params && (qt = Ae.params instanceof it ? Ae.params : new it({
                            fromObject: Ae.params
                        })),
                        rt = new De(k,se,void 0 !== Ae.body ? Ae.body : null,{
                            headers: ut,
                            context: Ae.context,
                            params: qt,
                            reportProgress: Ae.reportProgress,
                            responseType: Ae.responseType || "json",
                            withCredentials: Ae.withCredentials
                        })
                    }
                    const Re = (0,
                    oe.of)(rt).pipe((0,
                    ie.b)(ut => this.handler.handle(ut)));
                    if (k instanceof De || "events" === Ae.observe)
                        return Re;
                    const dt = Re.pipe((0,
                    be.h)(ut => ut instanceof he));
                    switch (Ae.observe || "body") {
                    case "body":
                        switch (rt.responseType) {
                        case "arraybuffer":
                            return dt.pipe((0,
                            Ce.U)(ut => {
                                if (null !== ut.body && !(ut.body instanceof ArrayBuffer))
                                    throw new Error("Response is not an ArrayBuffer.");
                                return ut.body
                            }
                            ));
                        case "blob":
                            return dt.pipe((0,
                            Ce.U)(ut => {
                                if (null !== ut.body && !(ut.body instanceof Blob))
                                    throw new Error("Response is not a Blob.");
                                return ut.body
                            }
                            ));
                        case "text":
                            return dt.pipe((0,
                            Ce.U)(ut => {
                                if (null !== ut.body && "string" != typeof ut.body)
                                    throw new Error("Response is not a string.");
                                return ut.body
                            }
                            ));
                        default:
                            return dt.pipe((0,
                            Ce.U)(ut => ut.body))
                        }
                    case "response":
                        return dt;
                    default:
                        throw new Error(`Unreachable: unhandled observe type ${Ae.observe}}`)
                    }
                }
                delete(k, se={}) {
                    return this.request("DELETE", k, se)
                }
                get(k, se={}) {
                    return this.request("GET", k, se)
                }
                head(k, se={}) {
                    return this.request("HEAD", k, se)
                }
                jsonp(k, se) {
                    return this.request("JSONP", k, {
                        params: (new it).append(se, "JSONP_CALLBACK"),
                        observe: "body",
                        responseType: "json"
                    })
                }
                options(k, se={}) {
                    return this.request("OPTIONS", k, se)
                }
                patch(k, se, Ae={}) {
                    return this.request("PATCH", k, ke(Ae, se))
                }
                post(k, se, Ae={}) {
                    return this.request("POST", k, ke(Ae, se))
                }
                put(k, se, Ae={}) {
                    return this.request("PUT", k, ke(Ae, se))
                }
            }
            return ee.\u0275fac = function(k) {
                return new (k || ee)(b.LFG(Oe))
            }
            ,
            ee.\u0275prov = b.Yz7({
                token: ee,
                factory: ee.\u0275fac
            }),
            ee
        }
        )();
        class mt {
            constructor(B, k) {
                this.next = B,
                this.interceptor = k
            }
            handle(B) {
                return this.interceptor.intercept(B, this.next)
            }
        }
        const st = new b.OlP("HTTP_INTERCEPTORS");
        let Zt = ( () => {
            class ee {
                intercept(k, se) {
                    return se.handle(k)
                }
            }
            return ee.\u0275fac = function(k) {
                return new (k || ee)
            }
            ,
            ee.\u0275prov = b.Yz7({
                token: ee,
                factory: ee.\u0275fac
            }),
            ee
        }
        )();
        const Cn = /^\)\]\}',?\n/;
        let dn = ( () => {
            class ee {
                constructor(k) {
                    this.xhrFactory = k
                }
                handle(k) {
                    if ("JSONP" === k.method)
                        throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");
                    return new te.y(se => {
                        const Ae = this.xhrFactory.build();
                        if (Ae.open(k.method, k.urlWithParams),
                        k.withCredentials && (Ae.withCredentials = !0),
                        k.headers.forEach( (Jt, Et) => Ae.setRequestHeader(Jt, Et.join(","))),
                        k.headers.has("Accept") || Ae.setRequestHeader("Accept", "application/json, text/plain, */*"),
                        !k.headers.has("Content-Type")) {
                            const Jt = k.detectContentTypeHeader();
                            null !== Jt && Ae.setRequestHeader("Content-Type", Jt)
                        }
                        if (k.responseType) {
                            const Jt = k.responseType.toLowerCase();
                            Ae.responseType = "json" !== Jt ? Jt : "text"
                        }
                        const rt = k.serializeBody();
                        let Re = null;
                        const dt = () => {
                            if (null !== Re)
                                return Re;
                            const Jt = Ae.statusText || "OK"
                              , Et = new de(Ae.getAllResponseHeaders())
                              , gt = function Vn(ee) {
                                return "responseURL"in ee && ee.responseURL ? ee.responseURL : /^X-Request-URL:/m.test(ee.getAllResponseHeaders()) ? ee.getResponseHeader("X-Request-URL") : null
                            }(Ae) || k.url;
                            return Re = new ne({
                                headers: Et,
                                status: Ae.status,
                                statusText: Jt,
                                url: gt
                            }),
                            Re
                        }
                          , ut = () => {
                            let {headers: Jt, status: Et, statusText: gt, url: Hn} = dt()
                              , on = null;
                            204 !== Et && (on = typeof Ae.response > "u" ? Ae.responseText : Ae.response),
                            0 === Et && (Et = on ? 200 : 0);
                            let sr = Et >= 200 && Et < 300;
                            if ("json" === k.responseType && "string" == typeof on) {
                                const Un = on;
                                on = on.replace(Cn, "");
                                try {
                                    on = "" !== on ? JSON.parse(on) : null
                                } catch (Xt) {
                                    on = Un,
                                    sr && (sr = !1,
                                    on = {
                                        error: Xt,
                                        text: on
                                    })
                                }
                            }
                            sr ? (se.next(new he({
                                body: on,
                                headers: Jt,
                                status: Et,
                                statusText: gt,
                                url: Hn || void 0
                            })),
                            se.complete()) : se.error(new K({
                                error: on,
                                headers: Jt,
                                status: Et,
                                statusText: gt,
                                url: Hn || void 0
                            }))
                        }
                          , qt = Jt => {
                            const {url: Et} = dt()
                              , gt = new K({
                                error: Jt,
                                status: Ae.status || 0,
                                statusText: Ae.statusText || "Unknown Error",
                                url: Et || void 0
                            });
                            se.error(gt)
                        }
                        ;
                        let wt = !1;
                        const At = Jt => {
                            wt || (se.next(dt()),
                            wt = !0);
                            let Et = {
                                type: $e.DownloadProgress,
                                loaded: Jt.loaded
                            };
                            Jt.lengthComputable && (Et.total = Jt.total),
                            "text" === k.responseType && !!Ae.responseText && (Et.partialText = Ae.responseText),
                            se.next(Et)
                        }
                          , bt = Jt => {
                            let Et = {
                                type: $e.UploadProgress,
                                loaded: Jt.loaded
                            };
                            Jt.lengthComputable && (Et.total = Jt.total),
                            se.next(Et)
                        }
                        ;
                        return Ae.addEventListener("load", ut),
                        Ae.addEventListener("error", qt),
                        Ae.addEventListener("timeout", qt),
                        Ae.addEventListener("abort", qt),
                        k.reportProgress && (Ae.addEventListener("progress", At),
                        null !== rt && Ae.upload && Ae.upload.addEventListener("progress", bt)),
                        Ae.send(rt),
                        se.next({
                            type: $e.Sent
                        }),
                        () => {
                            Ae.removeEventListener("error", qt),
                            Ae.removeEventListener("abort", qt),
                            Ae.removeEventListener("load", ut),
                            Ae.removeEventListener("timeout", qt),
                            k.reportProgress && (Ae.removeEventListener("progress", At),
                            null !== rt && Ae.upload && Ae.upload.removeEventListener("progress", bt)),
                            Ae.readyState !== Ae.DONE && Ae.abort()
                        }
                    }
                    )
                }
            }
            return ee.\u0275fac = function(k) {
                return new (k || ee)(b.LFG(a.JF))
            }
            ,
            ee.\u0275prov = b.Yz7({
                token: ee,
                factory: ee.\u0275fac
            }),
            ee
        }
        )();
        const jt = new b.OlP("XSRF_COOKIE_NAME")
          , Tn = new b.OlP("XSRF_HEADER_NAME");
        class En {
        }
        let Bn = ( () => {
            class ee {
                constructor(k, se, Ae) {
                    this.doc = k,
                    this.platform = se,
                    this.cookieName = Ae,
                    this.lastCookieString = "",
                    this.lastToken = null,
                    this.parseCount = 0
                }
                getToken() {
                    if ("server" === this.platform)
                        return null;
                    const k = this.doc.cookie || "";
                    return k !== this.lastCookieString && (this.parseCount++,
                    this.lastToken = (0,
                    a.Mx)(k, this.cookieName),
                    this.lastCookieString = k),
                    this.lastToken
                }
            }
            return ee.\u0275fac = function(k) {
                return new (k || ee)(b.LFG(a.K0),b.LFG(b.Lbi),b.LFG(jt))
            }
            ,
            ee.\u0275prov = b.Yz7({
                token: ee,
                factory: ee.\u0275fac
            }),
            ee
        }
        )()
          , Kt = ( () => {
            class ee {
                constructor(k, se) {
                    this.tokenService = k,
                    this.headerName = se
                }
                intercept(k, se) {
                    const Ae = k.url.toLowerCase();
                    if ("GET" === k.method || "HEAD" === k.method || Ae.startsWith("http://") || Ae.startsWith("https://"))
                        return se.handle(k);
                    const rt = this.tokenService.getToken();
                    return null !== rt && !k.headers.has(this.headerName) && (k = k.clone({
                        headers: k.headers.set(this.headerName, rt)
                    })),
                    se.handle(k)
                }
            }
            return ee.\u0275fac = function(k) {
                return new (k || ee)(b.LFG(En),b.LFG(Tn))
            }
            ,
            ee.\u0275prov = b.Yz7({
                token: ee,
                factory: ee.\u0275fac
            }),
            ee
        }
        )()
          , Lt = ( () => {
            class ee {
                constructor(k, se) {
                    this.backend = k,
                    this.injector = se,
                    this.chain = null
                }
                handle(k) {
                    if (null === this.chain) {
                        const se = this.injector.get(st, []);
                        this.chain = se.reduceRight( (Ae, rt) => new mt(Ae,rt), this.backend)
                    }
                    return this.chain.handle(k)
                }
            }
            return ee.\u0275fac = function(k) {
                return new (k || ee)(b.LFG(Se),b.LFG(b.zs3))
            }
            ,
            ee.\u0275prov = b.Yz7({
                token: ee,
                factory: ee.\u0275fac
            }),
            ee
        }
        )()
          , An = ( () => {
            class ee {
                static disable() {
                    return {
                        ngModule: ee,
                        providers: [{
                            provide: Kt,
                            useClass: Zt
                        }]
                    }
                }
                static withOptions(k={}) {
                    return {
                        ngModule: ee,
                        providers: [k.cookieName ? {
                            provide: jt,
                            useValue: k.cookieName
                        } : [], k.headerName ? {
                            provide: Tn,
                            useValue: k.headerName
                        } : []]
                    }
                }
            }
            return ee.\u0275fac = function(k) {
                return new (k || ee)
            }
            ,
            ee.\u0275mod = b.oAB({
                type: ee
            }),
            ee.\u0275inj = b.cJS({
                providers: [Kt, {
                    provide: st,
                    useExisting: Kt,
                    multi: !0
                }, {
                    provide: En,
                    useClass: Bn
                }, {
                    provide: jt,
                    useValue: "XSRF-TOKEN"
                }, {
                    provide: Tn,
                    useValue: "X-XSRF-TOKEN"
                }]
            }),
            ee
        }
        )()
          , mr = ( () => {
            class ee {
            }
            return ee.\u0275fac = function(k) {
                return new (k || ee)
            }
            ,
            ee.\u0275mod = b.oAB({
                type: ee
            }),
            ee.\u0275inj = b.cJS({
                providers: [Ve, {
                    provide: Oe,
                    useClass: Lt
                }, dn, {
                    provide: Se,
                    useExisting: dn
                }],
                imports: [An.withOptions({
                    cookieName: "XSRF-TOKEN",
                    headerName: "X-XSRF-TOKEN"
                })]
            }),
            ee
        }
        )()
    }
    ,
    8256: (Je, pe, I) => {
        I.d(pe, {
            QbO: () => WE,
            tb: () => Kg,
            AFp: () => Gg,
            ip1: () => $g,
            CZH: () => cl,
            hGG: () => F0,
            z2F: () => fl,
            sBO: () => v0,
            Sil: () => ZE,
            _Vd: () => ea,
            EJc: () => qE,
            Xts: () => xl,
            SBq: () => ta,
            lqb: () => Qo,
            qLn: () => na,
            vpe: () => no,
            XFs: () => ee,
            OlP: () => rn,
            zs3: () => Jo,
            ZZ4: () => Nc,
            aQg: () => Fc,
            soG: () => dl,
            YKP: () => $p,
            h0i: () => Ns,
            PXZ: () => d0,
            R0b: () => gi,
            FiY: () => Ks,
            Lbi: () => zE,
            g9A: () => Wg,
            Qsj: () => Ry,
            FYo: () => Od,
            JOm: () => Ji,
            q3G: () => kn,
            tp0: () => Ys,
            Rgc: () => va,
            dDg: () => a0,
            eoX: () => em,
            GfV: () => xd,
            s_b: () => al,
            ifc: () => wt,
            LMc: () => k0,
            MMx: () => lc,
            Lck: () => WC,
            eFA: () => rm,
            G48: () => y0,
            Gpc: () => Mt,
            f3M: () => Jc,
            _c5: () => N0,
            c2e: () => KE,
            zSh: () => Rl,
            wAp: () => _t,
            vHH: () => le,
            lri: () => Jg,
            rWj: () => Xg,
            EiD: () => yd,
            mCW: () => Zs,
            qzn: () => ds,
            JVY: () => Xm,
            pB0: () => ry,
            eBb: () => ty,
            L6k: () => ey,
            LAX: () => ny,
            D6c: () => R0,
            cg1: () => Xu,
            kL8: () => hp,
            dqk: () => At,
            sIi: () => ua,
            CqO: () => Ch,
            QGY: () => ju,
            QP$: () => Rs,
            F4k: () => Dh,
            RDi: () => Gm,
            AaK: () => je,
            z3N: () => yo,
            qOj: () => Fu,
            TTD: () => Kr,
            _Bn: () => jp,
            xp6: () => mf,
            uIk: () => ku,
            Tol: () => $h,
            ekj: () => Ku,
            Suo: () => _g,
            Xpm: () => Wn,
            lG2: () => Xn,
            Yz7: () => jt,
            cJS: () => En,
            oAB: () => Ir,
            Yjl: () => er,
            Y36: () => ys,
            _UZ: () => Hu,
            GkF: () => Uu,
            BQk: () => Ja,
            ynx: () => Za,
            qZA: () => Qa,
            TgZ: () => qa,
            EpF: () => _h,
            n5z: () => ml,
            Ikx: () => Zu,
            SDv: () => Bp,
            QtT: () => Hp,
            pQV: () => nc,
            LFG: () => zn,
            $8M: () => js,
            $Z: () => If,
            NdJ: () => $u,
            CRH: () => Dg,
            O4$: () => po,
            oxw: () => Th,
            ALo: () => ug,
            lcZ: () => cg,
            xi3: () => dg,
            Hsn: () => Ah,
            F$t: () => Sh,
            Q6J: () => Vu,
            s9C: () => Gu,
            MGl: () => Xa,
            hYB: () => zu,
            DdM: () => Zp,
            VKq: () => Jp,
            WLB: () => Xp,
            kEZ: () => eg,
            l5B: () => tg,
            Hh0: () => ng,
            rFY: () => rg,
            iGM: () => yg,
            MAs: () => vh,
            KtG: () => gr,
            evT: () => $d,
            CHM: () => lo,
            oJD: () => vd,
            LSH: () => Ol,
            Akn: () => Vi,
            Udp: () => Wu,
            d8E: () => Ju,
            YNc: () => yh,
            W1O: () => bg,
            _uU: () => Qh,
            Oqu: () => qu,
            hij: () => tl,
            AsE: () => Qu,
            Gf: () => vg
        });
        var a = I(8189)
          , b = I(8421)
          , oe = I(515)
          , te = I(3269)
          , ie = I(2076)
          , Ce = I(7579)
          , Oe = I(727)
          , Se = I(9751)
          , de = I(930)
          , z = I(4482);
        function xe(e, t, ...n) {
            if (!0 === t)
                return void e();
            if (!1 === t)
                return;
            const r = new de.Hp({
                next: () => {
                    r.unsubscribe(),
                    e()
                }
            });
            return t(...n).subscribe(r)
        }
        function ce(e) {
            for (let t in e)
                if (e[t] === ce)
                    return t;
            throw Error("Could not find renamed property on target object.")
        }
        function Ne(e, t) {
            for (const n in t)
                t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
        }
        function je(e) {
            if ("string" == typeof e)
                return e;
            if (Array.isArray(e))
                return "[" + e.map(je).join(", ") + "]";
            if (null == e)
                return "" + e;
            if (e.overriddenName)
                return `${e.overriddenName}`;
            if (e.name)
                return `${e.name}`;
            const t = e.toString();
            if (null == t)
                return "" + t;
            const n = t.indexOf("\n");
            return -1 === n ? t : t.substring(0, n)
        }
        function Qe(e, t) {
            return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t
        }
        const it = ce({
            __forward_ref__: ce
        });
        function Mt(e) {
            return e.__forward_ref__ = Mt,
            e.toString = function() {
                return je(this())
            }
            ,
            e
        }
        function Be(e) {
            return fe(e) ? e() : e
        }
        function fe(e) {
            return "function" == typeof e && e.hasOwnProperty(it) && e.__forward_ref__ === Mt
        }
        class le extends Error {
            constructor(t, n) {
                super(function ot(e, t) {
                    return `NG0${Math.abs(e)}${t ? ": " + t.trim() : ""}`
                }(t, n)),
                this.code = t
            }
        }
        function ye(e) {
            return "string" == typeof e ? e : null == e ? "" : String(e)
        }
        function he(e, t) {
            throw new le(-201,!1)
        }
        function We(e, t, n, r) {
            throw new Error(`ASSERTION ERROR: ${e}` + (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`))
        }
        function jt(e) {
            return {
                token: e.token,
                providedIn: e.providedIn || null,
                factory: e.factory,
                value: void 0
            }
        }
        function En(e) {
            return {
                providers: e.providers || [],
                imports: e.imports || []
            }
        }
        function Bn(e) {
            return Kt(e, An) || Kt(e, ri)
        }
        function Kt(e, t) {
            return e.hasOwnProperty(t) ? e[t] : null
        }
        function ln(e) {
            return e && (e.hasOwnProperty(mr) || e.hasOwnProperty(Gr)) ? e[mr] : null
        }
        const An = ce({
            \u0275prov: ce
        })
          , mr = ce({
            \u0275inj: ce
        })
          , ri = ce({
            ngInjectableDef: ce
        })
          , Gr = ce({
            ngInjectorDef: ce
        });
        var ee = ( () => ((ee = ee || {})[ee.Default = 0] = "Default",
        ee[ee.Host = 1] = "Host",
        ee[ee.Self = 2] = "Self",
        ee[ee.SkipSelf = 4] = "SkipSelf",
        ee[ee.Optional = 8] = "Optional",
        ee))();
        let B;
        function se(e) {
            const t = B;
            return B = e,
            t
        }
        function Ae(e, t, n) {
            const r = Bn(e);
            return r && "root" == r.providedIn ? void 0 === r.value ? r.value = r.factory() : r.value : n & ee.Optional ? null : void 0 !== t ? t : void he(je(e))
        }
        function Re(e) {
            return {
                toString: e
            }.toString()
        }
        var dt = ( () => ((dt = dt || {})[dt.OnPush = 0] = "OnPush",
        dt[dt.Default = 1] = "Default",
        dt))()
          , wt = ( () => {
            return (e = wt || (wt = {}))[e.Emulated = 0] = "Emulated",
            e[e.None = 2] = "None",
            e[e.ShadowDom = 3] = "ShadowDom",
            wt;
            var e
        }
        )();
        const At = ( () => typeof globalThis < "u" && globalThis || typeof global < "u" && global || typeof window < "u" && window || typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self)()
          , Et = {}
          , gt = []
          , Hn = ce({
            \u0275cmp: ce
        })
          , on = ce({
            \u0275dir: ce
        })
          , sr = ce({
            \u0275pipe: ce
        })
          , Un = ce({
            \u0275mod: ce
        })
          , Xt = ce({
            \u0275fac: ce
        })
          , jn = ce({
            __NG_ELEMENT_ID__: ce
        });
        let ar = 0;
        function Wn(e) {
            return Re( () => {
                const n = !0 === e.standalone
                  , r = {}
                  , i = {
                    type: e.type,
                    providersResolver: null,
                    decls: e.decls,
                    vars: e.vars,
                    factory: null,
                    template: e.template || null,
                    consts: e.consts || null,
                    ngContentSelectors: e.ngContentSelectors,
                    hostBindings: e.hostBindings || null,
                    hostVars: e.hostVars || 0,
                    hostAttrs: e.hostAttrs || null,
                    contentQueries: e.contentQueries || null,
                    declaredInputs: r,
                    inputs: null,
                    outputs: null,
                    exportAs: e.exportAs || null,
                    onPush: e.changeDetection === dt.OnPush,
                    directiveDefs: null,
                    pipeDefs: null,
                    standalone: n,
                    dependencies: n && e.dependencies || null,
                    getStandaloneInjector: null,
                    selectors: e.selectors || gt,
                    viewQuery: e.viewQuery || null,
                    features: e.features || null,
                    data: e.data || {},
                    encapsulation: e.encapsulation || wt.Emulated,
                    id: "c" + ar++,
                    styles: e.styles || gt,
                    _: null,
                    setInput: null,
                    schemas: e.schemas || null,
                    tView: null
                }
                  , o = e.dependencies
                  , s = e.features;
                return i.inputs = vr(e.inputs, r),
                i.outputs = vr(e.outputs),
                s && s.forEach(h => h(i)),
                i.directiveDefs = o ? () => ("function" == typeof o ? o() : o).map(ii).filter(yr) : null,
                i.pipeDefs = o ? () => ("function" == typeof o ? o() : o).map(L).filter(yr) : null,
                i
            }
            )
        }
        function ii(e) {
            return W(e) || H(e)
        }
        function yr(e) {
            return null !== e
        }
        function Ir(e) {
            return Re( () => ({
                type: e.type,
                bootstrap: e.bootstrap || gt,
                declarations: e.declarations || gt,
                imports: e.imports || gt,
                exports: e.exports || gt,
                transitiveCompileScopes: null,
                schemas: e.schemas || null,
                id: e.id || null
            }))
        }
        function vr(e, t) {
            if (null == e)
                return Et;
            const n = {};
            for (const r in e)
                if (e.hasOwnProperty(r)) {
                    let i = e[r]
                      , o = i;
                    Array.isArray(i) && (o = i[1],
                    i = i[0]),
                    n[i] = r,
                    t && (t[i] = o)
                }
            return n
        }
        const Xn = Wn;
        function er(e) {
            return {
                type: e.type,
                name: e.name,
                factory: null,
                pure: !1 !== e.pure,
                standalone: !0 === e.standalone,
                onDestroy: e.type.prototype.ngOnDestroy || null
            }
        }
        function W(e) {
            return e[Hn] || null
        }
        function H(e) {
            return e[on] || null
        }
        function L(e) {
            return e[sr] || null
        }
        function Y(e, t) {
            const n = e[Un] || null;
            if (!n && !0 === t)
                throw new Error(`Type ${je(e)} does not have '\u0275mod' property.`);
            return n
        }
        function bn(e) {
            return Array.isArray(e) && "object" == typeof e[1]
        }
        function rr(e) {
            return Array.isArray(e) && !0 === e[1]
        }
        function Wr(e) {
            return 0 != (8 & e.flags)
        }
        function Nr(e) {
            return 2 == (2 & e.flags)
        }
        function bi(e) {
            return 1 == (1 & e.flags)
        }
        function tn(e) {
            return null !== e.template
        }
        function ji(e) {
            return 0 != (256 & e[2])
        }
        function Er(e, t) {
            return e.hasOwnProperty(Xt) ? e[Xt] : null
        }
        class Pi {
            constructor(t, n, r) {
                this.previousValue = t,
                this.currentValue = n,
                this.firstChange = r
            }
            isFirstChange() {
                return this.firstChange
            }
        }
        function Kr() {
            return Oi
        }
        function Oi(e) {
            return e.type.prototype.ngOnChanges && (e.setInput = oo),
            ci
        }
        function ci() {
            const e = Rr(this)
              , t = e?.current;
            if (t) {
                const n = e.previous;
                if (n === Et)
                    e.previous = t;
                else
                    for (let r in t)
                        n[r] = t[r];
                e.current = null,
                this.ngOnChanges(t)
            }
        }
        function oo(e, t, n, r) {
            const i = Rr(e) || function _i(e, t) {
                return e[di] = t
            }(e, {
                previous: Et,
                current: null
            })
              , o = i.current || (i.current = {})
              , s = i.previous
              , h = this.declaredInputs[n]
              , p = s[h];
            o[h] = new Pi(p && p.currentValue,t,s === Et),
            e[r] = t
        }
        Kr.ngInherit = !0;
        const di = "__ngSimpleChanges__";
        function Rr(e) {
            return e[di] || null
        }
        function fn(e) {
            for (; Array.isArray(e); )
                e = e[0];
            return e
        }
        function C(e, t) {
            return fn(t[e])
        }
        function x(e, t) {
            return fn(t[e.index])
        }
        function ae(e, t) {
            return e.data[t]
        }
        function Te(e, t) {
            return e[t]
        }
        function Ye(e, t) {
            const n = t[e];
            return bn(n) ? n : n[0]
        }
        function Yt(e) {
            return 4 == (4 & e[2])
        }
        function Gt(e) {
            return 64 == (64 & e[2])
        }
        function Dt(e, t) {
            return null == t ? null : e[t]
        }
        function Bt(e) {
            e[18] = 0
        }
        function Wt(e, t) {
            e[5] += t;
            let n = e
              , r = e[3];
            for (; null !== r && (1 === t && 1 === n[5] || -1 === t && 0 === n[5]); )
                r[5] += t,
                n = r,
                r = r[3]
        }
        const qe = {
            lFrame: Wi(null),
            bindingsEnabled: !0
        };
        function hi() {
            return qe.bindingsEnabled
        }
        function Ie() {
            return qe.lFrame.lView
        }
        function Pt() {
            return qe.lFrame.tView
        }
        function lo(e) {
            return qe.lFrame.contextLView = e,
            e[8]
        }
        function gr(e) {
            return qe.lFrame.contextLView = null,
            e
        }
        function an() {
            let e = uo();
            for (; null !== e && 64 === e.type; )
                e = e.parent;
            return e
        }
        function uo() {
            return qe.lFrame.currentTNode
        }
        function E() {
            const e = qe.lFrame
              , t = e.currentTNode;
            return e.isParent ? t : t.parent
        }
        function v(e, t) {
            const n = qe.lFrame;
            n.currentTNode = e,
            n.isParent = t
        }
        function m() {
            return qe.lFrame.isParent
        }
        function O() {
            qe.lFrame.isParent = !1
        }
        function hn() {
            const e = qe.lFrame;
            let t = e.bindingRootIndex;
            return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex),
            t
        }
        function Ln() {
            return qe.lFrame.bindingIndex
        }
        function kr() {
            return qe.lFrame.bindingIndex++
        }
        function Vr(e) {
            const t = qe.lFrame
              , n = t.bindingIndex;
            return t.bindingIndex = t.bindingIndex + e,
            n
        }
        function bo(e) {
            qe.lFrame.inI18n = e
        }
        function zi(e, t) {
            const n = qe.lFrame;
            n.bindingIndex = n.bindingRootIndex = e,
            jo(t)
        }
        function jo(e) {
            qe.lFrame.currentDirectiveIndex = e
        }
        function Mo(e) {
            const t = qe.lFrame.currentDirectiveIndex;
            return -1 === t ? null : e[t]
        }
        function os() {
            return qe.lFrame.currentQueryIndex
        }
        function $o(e) {
            qe.lFrame.currentQueryIndex = e
        }
        function To(e) {
            const t = e[1];
            return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null
        }
        function Go(e, t, n) {
            if (n & ee.SkipSelf) {
                let i = t
                  , o = e;
                for (; !(i = i.parent,
                null !== i || n & ee.Host || (i = To(o),
                null === i || (o = o[15],
                10 & i.type))); )
                    ;
                if (null === i)
                    return !1;
                t = i,
                e = o
            }
            const r = qe.lFrame = fo();
            return r.currentTNode = t,
            r.lView = e,
            !0
        }
        function So(e) {
            const t = fo()
              , n = e[1];
            qe.lFrame = t,
            t.currentTNode = n.firstChild,
            t.lView = e,
            t.tView = n,
            t.contextLView = e,
            t.bindingIndex = n.bindingStartIndex,
            t.inI18n = !1
        }
        function fo() {
            const e = qe.lFrame
              , t = null === e ? null : e.child;
            return null === t ? Wi(e) : t
        }
        function Wi(e) {
            const t = {
                currentTNode: null,
                isParent: !0,
                lView: null,
                tView: null,
                selectedIndex: -1,
                contextLView: null,
                elementDepthCount: 0,
                currentNamespace: null,
                currentDirectiveIndex: -1,
                bindingRootIndex: -1,
                bindingIndex: -1,
                currentQueryIndex: 0,
                parent: e,
                child: null,
                inI18n: !1
            };
            return null !== e && (e.child = t),
            t
        }
        function ho() {
            const e = qe.lFrame;
            return qe.lFrame = e.parent,
            e.currentTNode = null,
            e.lView = null,
            e
        }
        const Ri = ho;
        function Ao() {
            const e = ho();
            e.isParent = !0,
            e.tView = null,
            e.selectedIndex = -1,
            e.contextLView = null,
            e.elementDepthCount = 0,
            e.currentDirectiveIndex = -1,
            e.currentNamespace = null,
            e.bindingRootIndex = -1,
            e.bindingIndex = -1,
            e.currentQueryIndex = 0
        }
        function ir() {
            return qe.lFrame.selectedIndex
        }
        function Ei(e) {
            qe.lFrame.selectedIndex = e
        }
        function yn() {
            const e = qe.lFrame;
            return ae(e.tView, e.selectedIndex)
        }
        function po() {
            qe.lFrame.currentNamespace = "svg"
        }
        function zo(e, t) {
            for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
                const o = e.data[n].type.prototype
                  , {ngAfterContentInit: s, ngAfterContentChecked: h, ngAfterViewInit: p, ngAfterViewChecked: w, ngOnDestroy: S} = o;
                s && (e.contentHooks || (e.contentHooks = [])).push(-n, s),
                h && ((e.contentHooks || (e.contentHooks = [])).push(n, h),
                (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, h)),
                p && (e.viewHooks || (e.viewHooks = [])).push(-n, p),
                w && ((e.viewHooks || (e.viewHooks = [])).push(n, w),
                (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, w)),
                null != S && (e.destroyHooks || (e.destroyHooks = [])).push(n, S)
            }
        }
        function M(e, t, n) {
            y(e, t, 3, n)
        }
        function l(e, t, n, r) {
            (3 & e[2]) === n && y(e, t, n, r)
        }
        function u(e, t) {
            let n = e[2];
            (3 & n) === t && (n &= 2047,
            n += 1,
            e[2] = n)
        }
        function y(e, t, n, r) {
            const o = r ?? -1
              , s = t.length - 1;
            let h = 0;
            for (let p = void 0 !== r ? 65535 & e[18] : 0; p < s; p++)
                if ("number" == typeof t[p + 1]) {
                    if (h = t[p],
                    null != r && h >= r)
                        break
                } else
                    t[p] < 0 && (e[18] += 65536),
                    (h < o || -1 == o) && (T(e, n, t, p),
                    e[18] = (4294901760 & e[18]) + p + 2),
                    p++
        }
        function T(e, t, n, r) {
            const i = n[r] < 0
              , o = n[r + 1]
              , h = e[i ? -n[r] : n[r]];
            if (i) {
                if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
                    e[2] += 2048;
                    try {
                        o.call(h)
                    } finally {}
                }
            } else
                try {
                    o.call(h)
                } finally {}
        }
        const N = -1;
        class U {
            constructor(t, n, r) {
                this.factory = t,
                this.resolving = !1,
                this.canSeeViewProviders = n,
                this.injectImpl = r
            }
        }
        function vt(e, t, n) {
            let r = 0;
            for (; r < n.length; ) {
                const i = n[r];
                if ("number" == typeof i) {
                    if (0 !== i)
                        break;
                    r++;
                    const o = n[r++]
                      , s = n[r++]
                      , h = n[r++];
                    e.setAttribute(t, s, h, o)
                } else {
                    const o = i
                      , s = n[++r];
                    Qt(o) ? e.setProperty(t, o, s) : e.setAttribute(t, o, s),
                    r++
                }
            }
            return r
        }
        function Ht(e) {
            return 3 === e || 4 === e || 6 === e
        }
        function Qt(e) {
            return 64 === e.charCodeAt(0)
        }
        function vn(e, t) {
            if (null !== t && 0 !== t.length)
                if (null === e || 0 === e.length)
                    e = t.slice();
                else {
                    let n = -1;
                    for (let r = 0; r < t.length; r++) {
                        const i = t[r];
                        "number" == typeof i ? n = i : 0 === n || Gn(e, n, i, null, -1 === n || 2 === n ? t[++r] : null)
                    }
                }
            return e
        }
        function Gn(e, t, n, r, i) {
            let o = 0
              , s = e.length;
            if (-1 === t)
                s = -1;
            else
                for (; o < e.length; ) {
                    const h = e[o++];
                    if ("number" == typeof h) {
                        if (h === t) {
                            s = -1;
                            break
                        }
                        if (h > t) {
                            s = o - 1;
                            break
                        }
                    }
                }
            for (; o < e.length; ) {
                const h = e[o];
                if ("number" == typeof h)
                    break;
                if (h === n) {
                    if (null === r)
                        return void (null !== i && (e[o + 1] = i));
                    if (r === e[o + 1])
                        return void (e[o + 2] = i)
                }
                o++,
                null !== r && o++,
                null !== i && o++
            }
            -1 !== s && (e.splice(s, 0, t),
            o = s + 1),
            e.splice(o++, 0, n),
            null !== r && e.splice(o++, 0, r),
            null !== i && e.splice(o++, 0, i)
        }
        function Nn(e) {
            return e !== N
        }
        function Br(e) {
            return 32767 & e
        }
        function _n(e, t) {
            let n = function Zr(e) {
                return e >> 16
            }(e)
              , r = t;
            for (; n > 0; )
                r = r[15],
                n--;
            return r
        }
        let wr = !0;
        function or(e) {
            const t = wr;
            return wr = e,
            t
        }
        let Xr = 0;
        const Hr = {};
        function et(e, t) {
            const n = ht(e, t);
            if (-1 !== n)
                return n;
            const r = t[1];
            r.firstCreatePass && (e.injectorIndex = t.length,
            at(r.data, e),
            at(t, null),
            at(r.blueprint, null));
            const i = Nt(e, t)
              , o = e.injectorIndex;
            if (Nn(i)) {
                const s = Br(i)
                  , h = _n(i, t)
                  , p = h[1].data;
                for (let w = 0; w < 8; w++)
                    t[o + w] = h[s + w] | p[s + w]
            }
            return t[o + 8] = i,
            o
        }
        function at(e, t) {
            e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
        }
        function ht(e, t) {
            return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null === t[e.injectorIndex + 8] ? -1 : e.injectorIndex
        }
        function Nt(e, t) {
            if (e.parent && -1 !== e.parent.injectorIndex)
                return e.parent.injectorIndex;
            let n = 0
              , r = null
              , i = t;
            for (; null !== i; ) {
                if (r = wa(i),
                null === r)
                    return N;
                if (n++,
                i = i[15],
                -1 !== r.injectorIndex)
                    return r.injectorIndex | n << 16
            }
            return N
        }
        function Rt(e, t, n) {
            !function ss(e, t, n) {
                let r;
                "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(jn) && (r = n[jn]),
                null == r && (r = n[jn] = Xr++);
                const i = 255 & r;
                t.data[e + (i >> 5)] |= 1 << i
            }(e, t, n)
        }
        function Zn(e, t, n) {
            if (n & ee.Optional)
                return e;
            he()
        }
        function br(e, t, n, r) {
            if (n & ee.Optional && void 0 === r && (r = null),
            0 == (n & (ee.Self | ee.Host))) {
                const i = e[9]
                  , o = se(void 0);
                try {
                    return i ? i.get(t, r, n & ee.Optional) : Ae(t, r, n & ee.Optional)
                } finally {
                    se(o)
                }
            }
            return Zn(r, 0, n)
        }
        function nn(e, t, n, r=ee.Default, i) {
            if (null !== e) {
                if (1024 & t[2]) {
                    const s = function Ea(e, t, n, r, i) {
                        let o = e
                          , s = t;
                        for (; null !== o && null !== s && 1024 & s[2] && !(256 & s[2]); ) {
                            const h = Po(o, s, n, r | ee.Self, Hr);
                            if (h !== Hr)
                                return h;
                            let p = o.parent;
                            if (!p) {
                                const w = s[21];
                                if (w) {
                                    const S = w.get(n, Hr, r);
                                    if (S !== Hr)
                                        return S
                                }
                                p = wa(s),
                                s = s[15]
                            }
                            o = p
                        }
                        return i
                    }(e, t, n, r, Hr);
                    if (s !== Hr)
                        return s
                }
                const o = Po(e, t, n, r, Hr);
                if (o !== Hr)
                    return o
            }
            return br(t, n, r, i)
        }
        function Po(e, t, n, r, i) {
            const o = function Ur(e) {
                if ("string" == typeof e)
                    return e.charCodeAt(0) || 0;
                const t = e.hasOwnProperty(jn) ? e[jn] : void 0;
                return "number" == typeof t ? t >= 0 ? 255 & t : qi : t
            }(n);
            if ("function" == typeof o) {
                if (!Go(t, e, r))
                    return r & ee.Host ? Zn(i, 0, r) : br(t, n, r, i);
                try {
                    const s = o(r);
                    if (null != s || r & ee.Optional)
                        return s;
                    he()
                } finally {
                    Ri()
                }
            } else if ("number" == typeof o) {
                let s = null
                  , h = ht(e, t)
                  , p = N
                  , w = r & ee.Host ? t[16][6] : null;
                for ((-1 === h || r & ee.SkipSelf) && (p = -1 === h ? Nt(e, t) : t[h + 8],
                p !== N && go(r, !1) ? (s = t[1],
                h = Br(p),
                t = _n(p, t)) : h = -1); -1 !== h; ) {
                    const S = t[1];
                    if (Yi(o, h, S.data)) {
                        const F = Us(h, t, n, s, r, w);
                        if (F !== Hr)
                            return F
                    }
                    p = t[h + 8],
                    p !== N && go(r, t[1].data[h + 8] === w) && Yi(o, h, t) ? (s = S,
                    h = Br(p),
                    t = _n(p, t)) : h = -1
                }
            }
            return i
        }
        function Us(e, t, n, r, i, o) {
            const s = t[1]
              , h = s.data[e + 8]
              , S = Mn(h, s, n, null == r ? Nr(h) && wr : r != s && 0 != (3 & h.type), i & ee.Host && o === h);
            return null !== S ? ti(t, s, S, h) : Hr
        }
        function Mn(e, t, n, r, i) {
            const o = e.providerIndexes
              , s = t.data
              , h = 1048575 & o
              , p = e.directiveStart
              , S = o >> 20
              , $ = i ? h + S : e.directiveEnd;
            for (let J = r ? h : h + S; J < $; J++) {
                const we = s[J];
                if (J < p && n === we || J >= p && we.type === n)
                    return J
            }
            if (i) {
                const J = s[p];
                if (J && tn(J) && J.type === n)
                    return p
            }
            return null
        }
        function ti(e, t, n, r) {
            let i = e[n];
            const o = t.data;
            if (function j(e) {
                return e instanceof U
            }(i)) {
                const s = i;
                s.resolving && function $e(e, t) {
                    const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
                    throw new le(-200,`Circular dependency in DI detected for ${e}${n}`)
                }(function De(e) {
                    return "function" == typeof e ? e.name || e.toString() : "object" == typeof e && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : ye(e)
                }(o[n]));
                const h = or(s.canSeeViewProviders);
                s.resolving = !0;
                const p = s.injectImpl ? se(s.injectImpl) : null;
                Go(e, r, ee.Default);
                try {
                    i = e[n] = s.factory(void 0, o, e, r),
                    t.firstCreatePass && n >= r.directiveStart && function Hs(e, t, n) {
                        const {ngOnChanges: r, ngOnInit: i, ngDoCheck: o} = t.type.prototype;
                        if (r) {
                            const s = Oi(t);
                            (n.preOrderHooks || (n.preOrderHooks = [])).push(e, s),
                            (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, s)
                        }
                        i && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, i),
                        o && ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, o),
                        (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, o))
                    }(n, o[n], t)
                } finally {
                    null !== p && se(p),
                    or(h),
                    s.resolving = !1,
                    Ri()
                }
            }
            return i
        }
        function Yi(e, t, n) {
            return !!(n[t + (e >> 5)] & 1 << e)
        }
        function go(e, t) {
            return !(e & ee.Self || e & ee.Host && t)
        }
        class Oo {
            constructor(t, n) {
                this._tNode = t,
                this._lView = n
            }
            get(t, n, r) {
                return nn(this._tNode, this._lView, t, r, n)
            }
        }
        function qi() {
            return new Oo(an(),Ie())
        }
        function ml(e) {
            return Re( () => {
                const t = e.prototype.constructor
                  , n = t[Xt] || as(t)
                  , r = Object.prototype;
                let i = Object.getPrototypeOf(e.prototype).constructor;
                for (; i && i !== r; ) {
                    const o = i[Xt] || as(i);
                    if (o && o !== n)
                        return o;
                    i = Object.getPrototypeOf(i)
                }
                return o => new o
            }
            )
        }
        function as(e) {
            return fe(e) ? () => {
                const t = as(Be(e));
                return t && t()
            }
            : Er(e)
        }
        function wa(e) {
            const t = e[1]
              , n = t.type;
            return 2 === n ? t.declTNode : 1 === n ? e[6] : null
        }
        function js(e) {
            return function ei(e, t) {
                if ("class" === t)
                    return e.classes;
                if ("style" === t)
                    return e.styles;
                const n = e.attrs;
                if (n) {
                    const r = n.length;
                    let i = 0;
                    for (; i < r; ) {
                        const o = n[i];
                        if (Ht(o))
                            break;
                        if (0 === o)
                            i += 2;
                        else if ("number" == typeof o)
                            for (i++; i < r && "string" == typeof n[i]; )
                                i++;
                        else {
                            if (o === t)
                                return n[i + 1];
                            i += 2
                        }
                    }
                }
                return null
            }(an(), e)
        }
        const No = "__parameters__";
        function Ro(e, t, n) {
            return Re( () => {
                const r = function $s(e) {
                    return function(...n) {
                        if (e) {
                            const r = e(...n);
                            for (const i in r)
                                this[i] = r[i]
                        }
                    }
                }(t);
                function i(...o) {
                    if (this instanceof i)
                        return r.apply(this, o),
                        this;
                    const s = new i(...o);
                    return h.annotation = s,
                    h;
                    function h(p, w, S) {
                        const F = p.hasOwnProperty(No) ? p[No] : Object.defineProperty(p, No, {
                            value: []
                        })[No];
                        for (; F.length <= S; )
                            F.push(null);
                        return (F[S] = F[S] || []).push(s),
                        p
                    }
                }
                return n && (i.prototype = Object.create(n.prototype)),
                i.prototype.ngMetadataName = e,
                i.annotationCls = i,
                i
            }
            )
        }
        class rn {
            constructor(t, n) {
                this._desc = t,
                this.ngMetadataName = "InjectionToken",
                this.\u0275prov = void 0,
                "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.\u0275prov = jt({
                    token: this,
                    providedIn: n.providedIn || "root",
                    factory: n.factory
                }))
            }
            get multi() {
                return this
            }
            toString() {
                return `InjectionToken ${this._desc}`
            }
        }
        function R(e, t) {
            void 0 === t && (t = e);
            for (let n = 0; n < e.length; n++) {
                let r = e[n];
                Array.isArray(r) ? (t === e && (t = e.slice(0, n)),
                R(r, t)) : t !== e && t.push(r)
            }
            return t
        }
        function V(e, t) {
            e.forEach(n => Array.isArray(n) ? V(n, t) : t(n))
        }
        function ge(e, t, n) {
            t >= e.length ? e.push(n) : e.splice(t, 0, n)
        }
        function Ge(e, t) {
            return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
        }
        function Tt(e, t) {
            const n = [];
            for (let r = 0; r < e; r++)
                n.push(t);
            return n
        }
        function Tr(e, t, n) {
            let r = ko(e, t);
            return r >= 0 ? e[1 | r] = n : (r = ~r,
            function Mr(e, t, n, r) {
                let i = e.length;
                if (i == t)
                    e.push(n, r);
                else if (1 === i)
                    e.push(r, e[0]),
                    e[0] = n;
                else {
                    for (i--,
                    e.push(e[i - 1], e[i]); i > t; )
                        e[i] = e[i - 2],
                        i--;
                    e[t] = n,
                    e[t + 1] = r
                }
            }(e, r, t, n)),
            r
        }
        function mo(e, t) {
            const n = ko(e, t);
            if (n >= 0)
                return e[1 | n]
        }
        function ko(e, t) {
            return function qc(e, t, n) {
                let r = 0
                  , i = e.length >> n;
                for (; i !== r; ) {
                    const o = r + (i - r >> 1)
                      , s = e[o << n];
                    if (t === s)
                        return o << n;
                    s > t ? i = o : r = o + 1
                }
                return ~(i << n)
            }(e, t, 1)
        }
        const Gs = {}
          , Cl = "__NG_DI_FLAG__"
          , Sa = "ngTempTokenPath"
          , Im = /\n/gm
          , Qc = "__source";
        let zs;
        function ls(e) {
            const t = zs;
            return zs = e,
            t
        }
        function Om(e, t=ee.Default) {
            if (void 0 === zs)
                throw new le(-203,!1);
            return null === zs ? Ae(e, void 0, t) : zs.get(e, t & ee.Optional ? null : void 0, t)
        }
        function zn(e, t=ee.Default) {
            return (function k() {
                return B
            }() || Om)(Be(e), t)
        }
        function Jc(e, t=ee.Default) {
            return "number" != typeof t && (t = 0 | (t.optional && 8) | (t.host && 1) | (t.self && 2) | (t.skipSelf && 4)),
            zn(e, t)
        }
        function El(e) {
            const t = [];
            for (let n = 0; n < e.length; n++) {
                const r = Be(e[n]);
                if (Array.isArray(r)) {
                    if (0 === r.length)
                        throw new le(900,!1);
                    let i, o = ee.Default;
                    for (let s = 0; s < r.length; s++) {
                        const h = r[s]
                          , p = xm(h);
                        "number" == typeof p ? -1 === p ? i = h.token : o |= p : i = h
                    }
                    t.push(zn(i, o))
                } else
                    t.push(zn(r))
            }
            return t
        }
        function Ws(e, t) {
            return e[Cl] = t,
            e.prototype[Cl] = t,
            e
        }
        function xm(e) {
            return e[Cl]
        }
        const Ks = Ws(Ro("Optional"), 8)
          , Ys = Ws(Ro("SkipSelf"), 4);
        let bl, Pa, Oa;
        function Gm(e) {
            bl = e
        }
        function sd() {
            return void 0 !== bl ? bl : typeof document < "u" ? document : void 0
        }
        function cs(e) {
            return function Ml() {
                if (void 0 === Pa && (Pa = null,
                At.trustedTypes))
                    try {
                        Pa = At.trustedTypes.createPolicy("angular", {
                            createHTML: e => e,
                            createScript: e => e,
                            createScriptURL: e => e
                        })
                    } catch {}
                return Pa
            }()?.createHTML(e) || e
        }
        function ad(e) {
            return function Tl() {
                if (void 0 === Oa && (Oa = null,
                At.trustedTypes))
                    try {
                        Oa = At.trustedTypes.createPolicy("angular#unsafe-bypass", {
                            createHTML: e => e,
                            createScript: e => e,
                            createScriptURL: e => e
                        })
                    } catch {}
                return Oa
            }()?.createHTML(e) || e
        }
        class Yo {
            constructor(t) {
                this.changingThisBreaksApplicationSecurity = t
            }
            toString() {
                return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`
            }
        }
        class Km extends Yo {
            getTypeName() {
                return "HTML"
            }
        }
        class Ym extends Yo {
            getTypeName() {
                return "Style"
            }
        }
        class qm extends Yo {
            getTypeName() {
                return "Script"
            }
        }
        class Qm extends Yo {
            getTypeName() {
                return "URL"
            }
        }
        class Zm extends Yo {
            getTypeName() {
                return "ResourceURL"
            }
        }
        function yo(e) {
            return e instanceof Yo ? e.changingThisBreaksApplicationSecurity : e
        }
        function ds(e, t) {
            const n = function Jm(e) {
                return e instanceof Yo && e.getTypeName() || null
            }(e);
            if (null != n && n !== t) {
                if ("ResourceURL" === n && "URL" === t)
                    return !0;
                throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)
            }
            return n === t
        }
        function Xm(e) {
            return new Km(e)
        }
        function ey(e) {
            return new Ym(e)
        }
        function ty(e) {
            return new qm(e)
        }
        function ny(e) {
            return new Qm(e)
        }
        function ry(e) {
            return new Zm(e)
        }
        function cd(e) {
            const t = new oy(e);
            return function sy() {
                try {
                    return !!(new window.DOMParser).parseFromString(cs(""), "text/html")
                } catch {
                    return !1
                }
            }() ? new iy(t) : t
        }
        class iy {
            constructor(t) {
                this.inertDocumentHelper = t
            }
            getInertBodyElement(t) {
                t = "<body><remove></remove>" + t;
                try {
                    const n = (new window.DOMParser).parseFromString(cs(t), "text/html").body;
                    return null === n ? this.inertDocumentHelper.getInertBodyElement(t) : (n.removeChild(n.firstChild),
                    n)
                } catch {
                    return null
                }
            }
        }
        class oy {
            constructor(t) {
                if (this.defaultDoc = t,
                this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),
                null == this.inertDocument.body) {
                    const n = this.inertDocument.createElement("html");
                    this.inertDocument.appendChild(n);
                    const r = this.inertDocument.createElement("body");
                    n.appendChild(r)
                }
            }
            getInertBodyElement(t) {
                const n = this.inertDocument.createElement("template");
                if ("content"in n)
                    return n.innerHTML = cs(t),
                    n;
                const r = this.inertDocument.createElement("body");
                return r.innerHTML = cs(t),
                this.defaultDoc.documentMode && this.stripCustomNsAttrs(r),
                r
            }
            stripCustomNsAttrs(t) {
                const n = t.attributes;
                for (let i = n.length - 1; 0 < i; i--) {
                    const s = n.item(i).name;
                    ("xmlns:ns1" === s || 0 === s.indexOf("ns1:")) && t.removeAttribute(s)
                }
                let r = t.firstChild;
                for (; r; )
                    r.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(r),
                    r = r.nextSibling
            }
        }
        const ay = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi
          , ly = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
        function Zs(e) {
            return (e = String(e)).match(ay) || e.match(ly) ? e : "unsafe:" + e
        }
        function dd(e) {
            return (e = String(e)).split(",").map(t => Zs(t.trim())).join(", ")
        }
        function Zi(e) {
            const t = {};
            for (const n of e.split(","))
                t[n] = !0;
            return t
        }
        function Js(...e) {
            const t = {};
            for (const n of e)
                for (const r in n)
                    n.hasOwnProperty(r) && (t[r] = !0);
            return t
        }
        const fd = Zi("area,br,col,hr,img,wbr")
          , hd = Zi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr")
          , pd = Zi("rp,rt")
          , Sl = Js(fd, Js(hd, Zi("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Js(pd, Zi("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Js(pd, hd))
          , Al = Zi("background,cite,href,itemtype,longdesc,poster,src,xlink:href")
          , Il = Zi("srcset")
          , gd = Js(Al, Il, Zi("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), Zi("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"))
          , uy = Zi("script,style,template");
        class cy {
            constructor() {
                this.sanitizedSomething = !1,
                this.buf = []
            }
            sanitizeChildren(t) {
                let n = t.firstChild
                  , r = !0;
                for (; n; )
                    if (n.nodeType === Node.ELEMENT_NODE ? r = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0,
                    r && n.firstChild)
                        n = n.firstChild;
                    else
                        for (; n; ) {
                            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                            let i = this.checkClobberedElement(n, n.nextSibling);
                            if (i) {
                                n = i;
                                break
                            }
                            n = this.checkClobberedElement(n, n.parentNode)
                        }
                return this.buf.join("")
            }
            startElement(t) {
                const n = t.nodeName.toLowerCase();
                if (!Sl.hasOwnProperty(n))
                    return this.sanitizedSomething = !0,
                    !uy.hasOwnProperty(n);
                this.buf.push("<"),
                this.buf.push(n);
                const r = t.attributes;
                for (let i = 0; i < r.length; i++) {
                    const o = r.item(i)
                      , s = o.name
                      , h = s.toLowerCase();
                    if (!gd.hasOwnProperty(h)) {
                        this.sanitizedSomething = !0;
                        continue
                    }
                    let p = o.value;
                    Al[h] && (p = Zs(p)),
                    Il[h] && (p = dd(p)),
                    this.buf.push(" ", s, '="', md(p), '"')
                }
                return this.buf.push(">"),
                !0
            }
            endElement(t) {
                const n = t.nodeName.toLowerCase();
                Sl.hasOwnProperty(n) && !fd.hasOwnProperty(n) && (this.buf.push("</"),
                this.buf.push(n),
                this.buf.push(">"))
            }
            chars(t) {
                this.buf.push(md(t))
            }
            checkClobberedElement(t, n) {
                if (n && (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY)
                    throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`);
                return n
            }
        }
        const dy = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
          , fy = /([^\#-~ |!])/g;
        function md(e) {
            return e.replace(/&/g, "&amp;").replace(dy, function(t) {
                return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
            }).replace(fy, function(t) {
                return "&#" + t.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
        let xa;
        function yd(e, t) {
            let n = null;
            try {
                xa = xa || cd(e);
                let r = t ? String(t) : "";
                n = xa.getInertBodyElement(r);
                let i = 5
                  , o = r;
                do {
                    if (0 === i)
                        throw new Error("Failed to sanitize html because the input is unstable");
                    i--,
                    r = o,
                    o = n.innerHTML,
                    n = xa.getInertBodyElement(r)
                } while (r !== o);
                return cs((new cy).sanitizeChildren(Pl(n) || n))
            } finally {
                if (n) {
                    const r = Pl(n) || n;
                    for (; r.firstChild; )
                        r.removeChild(r.firstChild)
                }
            }
        }
        function Pl(e) {
            return "content"in e && function hy(e) {
                return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
            }(e) ? e.content : null
        }
        var kn = ( () => ((kn = kn || {})[kn.NONE = 0] = "NONE",
        kn[kn.HTML = 1] = "HTML",
        kn[kn.STYLE = 2] = "STYLE",
        kn[kn.SCRIPT = 3] = "SCRIPT",
        kn[kn.URL = 4] = "URL",
        kn[kn.RESOURCE_URL = 5] = "RESOURCE_URL",
        kn))();
        function vd(e) {
            const t = Xs();
            return t ? ad(t.sanitize(kn.HTML, e) || "") : ds(e, "HTML") ? ad(yo(e)) : yd(sd(), ye(e))
        }
        function Ol(e) {
            const t = Xs();
            return t ? t.sanitize(kn.URL, e) || "" : ds(e, "URL") ? yo(e) : Zs(ye(e))
        }
        function Xs() {
            const e = Ie();
            return e && e[12]
        }
        const xl = new rn("ENVIRONMENT_INITIALIZER")
          , Dd = new rn("INJECTOR",-1)
          , Cd = new rn("INJECTOR_DEF_TYPES");
        class Ed {
            get(t, n=Gs) {
                if (n === Gs) {
                    const r = new Error(`NullInjectorError: No provider for ${je(t)}!`);
                    throw r.name = "NullInjectorError",
                    r
                }
                return n
            }
        }
        function Dy(...e) {
            return {
                \u0275providers: wd(0, e)
            }
        }
        function wd(e, ...t) {
            const n = []
              , r = new Set;
            let i;
            return V(t, o => {
                const s = o;
                Nl(s, n, [], r) && (i || (i = []),
                i.push(s))
            }
            ),
            void 0 !== i && bd(i, n),
            n
        }
        function bd(e, t) {
            for (let n = 0; n < e.length; n++) {
                const {providers: i} = e[n];
                V(i, o => {
                    t.push(o)
                }
                )
            }
        }
        function Nl(e, t, n, r) {
            if (!(e = Be(e)))
                return !1;
            let i = null
              , o = ln(e);
            const s = !o && W(e);
            if (o || s) {
                if (s && !s.standalone)
                    return !1;
                i = e
            } else {
                const p = e.ngModule;
                if (o = ln(p),
                !o)
                    return !1;
                i = p
            }
            const h = r.has(i);
            if (s) {
                if (h)
                    return !1;
                if (r.add(i),
                s.dependencies) {
                    const p = "function" == typeof s.dependencies ? s.dependencies() : s.dependencies;
                    for (const w of p)
                        Nl(w, t, n, r)
                }
            } else {
                if (!o)
                    return !1;
                {
                    if (null != o.imports && !h) {
                        let w;
                        r.add(i);
                        try {
                            V(o.imports, S => {
                                Nl(S, t, n, r) && (w || (w = []),
                                w.push(S))
                            }
                            )
                        } finally {}
                        void 0 !== w && bd(w, t)
                    }
                    if (!h) {
                        const w = Er(i) || ( () => new i);
                        t.push({
                            provide: i,
                            useFactory: w,
                            deps: gt
                        }, {
                            provide: Cd,
                            useValue: i,
                            multi: !0
                        }, {
                            provide: xl,
                            useValue: () => zn(i),
                            multi: !0
                        })
                    }
                    const p = o.providers;
                    null == p || h || V(p, S => {
                        t.push(S)
                    }
                    )
                }
            }
            return i !== e && void 0 !== e.providers
        }
        const Cy = ce({
            provide: String,
            useValue: ce
        });
        function Fl(e) {
            return null !== e && "object" == typeof e && Cy in e
        }
        function qo(e) {
            return "function" == typeof e
        }
        const Rl = new rn("Set Injector scope.")
          , Na = {}
          , wy = {};
        let Ll;
        function Fa() {
            return void 0 === Ll && (Ll = new Ed),
            Ll
        }
        class Qo {
        }
        class Sd extends Qo {
            constructor(t, n, r, i) {
                super(),
                this.parent = n,
                this.source = r,
                this.scopes = i,
                this.records = new Map,
                this._ngOnDestroyHooks = new Set,
                this._onDestroyHooks = [],
                this._destroyed = !1,
                Vl(t, s => this.processProvider(s)),
                this.records.set(Dd, fs(void 0, this)),
                i.has("environment") && this.records.set(Qo, fs(void 0, this));
                const o = this.records.get(Rl);
                null != o && "string" == typeof o.value && this.scopes.add(o.value),
                this.injectorDefTypes = new Set(this.get(Cd.multi, gt, ee.Self))
            }
            get destroyed() {
                return this._destroyed
            }
            destroy() {
                this.assertNotDestroyed(),
                this._destroyed = !0;
                try {
                    for (const t of this._ngOnDestroyHooks)
                        t.ngOnDestroy();
                    for (const t of this._onDestroyHooks)
                        t()
                } finally {
                    this.records.clear(),
                    this._ngOnDestroyHooks.clear(),
                    this.injectorDefTypes.clear(),
                    this._onDestroyHooks.length = 0
                }
            }
            onDestroy(t) {
                this._onDestroyHooks.push(t)
            }
            runInContext(t) {
                this.assertNotDestroyed();
                const n = ls(this)
                  , r = se(void 0);
                try {
                    return t()
                } finally {
                    ls(n),
                    se(r)
                }
            }
            get(t, n=Gs, r=ee.Default) {
                this.assertNotDestroyed();
                const i = ls(this)
                  , o = se(void 0);
                try {
                    if (!(r & ee.SkipSelf)) {
                        let h = this.records.get(t);
                        if (void 0 === h) {
                            const p = function Ay(e) {
                                return "function" == typeof e || "object" == typeof e && e instanceof rn
                            }(t) && Bn(t);
                            h = p && this.injectableDefInScope(p) ? fs(kl(t), Na) : null,
                            this.records.set(t, h)
                        }
                        if (null != h)
                            return this.hydrate(t, h)
                    }
                    return (r & ee.Self ? Fa() : this.parent).get(t, n = r & ee.Optional && n === Gs ? null : n)
                } catch (s) {
                    if ("NullInjectorError" === s.name) {
                        if ((s[Sa] = s[Sa] || []).unshift(je(t)),
                        i)
                            throw s;
                        return function Nm(e, t, n, r) {
                            const i = e[Sa];
                            throw t[Qc] && i.unshift(t[Qc]),
                            e.message = function Fm(e, t, n, r=null) {
                                e = e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1) ? e.slice(2) : e;
                                let i = je(t);
                                if (Array.isArray(t))
                                    i = t.map(je).join(" -> ");
                                else if ("object" == typeof t) {
                                    let o = [];
                                    for (let s in t)
                                        if (t.hasOwnProperty(s)) {
                                            let h = t[s];
                                            o.push(s + ":" + ("string" == typeof h ? JSON.stringify(h) : je(h)))
                                        }
                                    i = `{${o.join(", ")}}`
                                }
                                return `${n}${r ? "(" + r + ")" : ""}[${i}]: ${e.replace(Im, "\n  ")}`
                            }("\n" + e.message, i, n, r),
                            e.ngTokenPath = i,
                            e[Sa] = null,
                            e
                        }(s, t, "R3InjectorError", this.source)
                    }
                    throw s
                } finally {
                    se(o),
                    ls(i)
                }
            }
            resolveInjectorInitializers() {
                const t = ls(this)
                  , n = se(void 0);
                try {
                    const r = this.get(xl.multi, gt, ee.Self);
                    for (const i of r)
                        i()
                } finally {
                    ls(t),
                    se(n)
                }
            }
            toString() {
                const t = []
                  , n = this.records;
                for (const r of n.keys())
                    t.push(je(r));
                return `R3Injector[${t.join(", ")}]`
            }
            assertNotDestroyed() {
                if (this._destroyed)
                    throw new le(205,!1)
            }
            processProvider(t) {
                let n = qo(t = Be(t)) ? t : Be(t && t.provide);
                const r = function My(e) {
                    return Fl(e) ? fs(void 0, e.useValue) : fs(Ad(e), Na)
                }(t);
                if (qo(t) || !0 !== t.multi)
                    this.records.get(n);
                else {
                    let i = this.records.get(n);
                    i || (i = fs(void 0, Na, !0),
                    i.factory = () => El(i.multi),
                    this.records.set(n, i)),
                    n = t,
                    i.multi.push(t)
                }
                this.records.set(n, r)
            }
            hydrate(t, n) {
                return n.value === Na && (n.value = wy,
                n.value = n.factory()),
                "object" == typeof n.value && n.value && function Sy(e) {
                    return null !== e && "object" == typeof e && "function" == typeof e.ngOnDestroy
                }(n.value) && this._ngOnDestroyHooks.add(n.value),
                n.value
            }
            injectableDefInScope(t) {
                if (!t.providedIn)
                    return !1;
                const n = Be(t.providedIn);
                return "string" == typeof n ? "any" === n || this.scopes.has(n) : this.injectorDefTypes.has(n)
            }
        }
        function kl(e) {
            const t = Bn(e)
              , n = null !== t ? t.factory : Er(e);
            if (null !== n)
                return n;
            if (e instanceof rn)
                throw new le(204,!1);
            if (e instanceof Function)
                return function by(e) {
                    const t = e.length;
                    if (t > 0)
                        throw Tt(t, "?"),
                        new le(204,!1);
                    const n = function Lt(e) {
                        const t = e && (e[An] || e[ri]);
                        if (t) {
                            const n = function Sn(e) {
                                if (e.hasOwnProperty("name"))
                                    return e.name;
                                const t = ("" + e).match(/^function\s*([^\s(]+)/);
                                return null === t ? "" : t[1]
                            }(e);
                            return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),
                            t
                        }
                        return null
                    }(e);
                    return null !== n ? () => n.factory(e) : () => new e
                }(e);
            throw new le(204,!1)
        }
        function Ad(e, t, n) {
            let r;
            if (qo(e)) {
                const i = Be(e);
                return Er(i) || kl(i)
            }
            if (Fl(e))
                r = () => Be(e.useValue);
            else if (function Td(e) {
                return !(!e || !e.useFactory)
            }(e))
                r = () => e.useFactory(...El(e.deps || []));
            else if (function Md(e) {
                return !(!e || !e.useExisting)
            }(e))
                r = () => zn(Be(e.useExisting));
            else {
                const i = Be(e && (e.useClass || e.provide));
                if (!function Ty(e) {
                    return !!e.deps
                }(e))
                    return Er(i) || kl(i);
                r = () => new i(...El(e.deps))
            }
            return r
        }
        function fs(e, t, n=!1) {
            return {
                factory: e,
                value: t,
                multi: n ? [] : void 0
            }
        }
        function Iy(e) {
            return !!e.\u0275providers
        }
        function Vl(e, t) {
            for (const n of e)
                Array.isArray(n) ? Vl(n, t) : Iy(n) ? Vl(n.\u0275providers, t) : t(n)
        }
        class Id {
        }
        class xy {
            resolveComponentFactory(t) {
                throw function Oy(e) {
                    const t = Error(`No component factory found for ${je(e)}. Did you add it to @NgModule.entryComponents?`);
                    return t.ngComponent = e,
                    t
                }(t)
            }
        }
        let ea = ( () => {
            class e {
            }
            return e.NULL = new xy,
            e
        }
        )();
        function Ny() {
            return hs(an(), Ie())
        }
        function hs(e, t) {
            return new ta(x(e, t))
        }
        let ta = ( () => {
            class e {
                constructor(n) {
                    this.nativeElement = n
                }
            }
            return e.__NG_ELEMENT_ID__ = Ny,
            e
        }
        )();
        function Fy(e) {
            return e instanceof ta ? e.nativeElement : e
        }
        class Od {
        }
        let Ry = ( () => {
            class e {
            }
            return e.__NG_ELEMENT_ID__ = () => function Ly() {
                const e = Ie()
                  , n = Ye(an().index, e);
                return (bn(n) ? n : e)[11]
            }(),
            e
        }
        )()
          , ky = ( () => {
            class e {
            }
            return e.\u0275prov = jt({
                token: e,
                providedIn: "root",
                factory: () => null
            }),
            e
        }
        )();
        class xd {
            constructor(t) {
                this.full = t,
                this.major = t.split(".")[0],
                this.minor = t.split(".")[1],
                this.patch = t.split(".").slice(2).join(".")
            }
        }
        const Vy = new xd("14.1.2")
          , Bl = {};
        function Gl(e) {
            return e.ngOriginalError
        }
        class na {
            constructor() {
                this._console = console
            }
            handleError(t) {
                const n = this._findOriginalError(t);
                this._console.error("ERROR", t),
                n && this._console.error("ORIGINAL ERROR", n)
            }
            _findOriginalError(t) {
                let n = t && Gl(t);
                for (; n && Gl(n); )
                    n = Gl(n);
                return n || null
            }
        }
        const $y = /^>|^->|<!--|-->|--!>|<!-$/g
          , Gy = /(<|>)/;
        const zl = new Map;
        let Qy = 0;
        const Kl = "__ngContext__";
        function Sr(e, t) {
            bn(t) ? (e[Kl] = t[20],
            function Jy(e) {
                zl.set(e[20], e)
            }(t)) : e[Kl] = t
        }
        function ra(e) {
            const t = e[Kl];
            return "number" == typeof t ? function Vd(e) {
                return zl.get(e) || null
            }(t) : t || null
        }
        function Yl(e) {
            const t = ra(e);
            return t ? bn(t) ? t : t.lView : null
        }
        const av = ( () => (typeof requestAnimationFrame < "u" && requestAnimationFrame || setTimeout).bind(At))();
        function $d(e) {
            return e.ownerDocument
        }
        function vo(e) {
            return e instanceof Function ? e() : e
        }
        var Ji = ( () => ((Ji = Ji || {})[Ji.Important = 1] = "Important",
        Ji[Ji.DashCase = 2] = "DashCase",
        Ji))();
        let ql;
        function Ql(e, t) {
            return ql(e, t)
        }
        function ia(e) {
            const t = e[3];
            return rr(t) ? t[3] : t
        }
        function Zl(e) {
            return Kd(e[13])
        }
        function Jl(e) {
            return Kd(e[4])
        }
        function Kd(e) {
            for (; null !== e && !rr(e); )
                e = e[4];
            return e
        }
        function gs(e, t, n, r, i) {
            if (null != r) {
                let o, s = !1;
                rr(r) ? o = r : bn(r) && (s = !0,
                r = r[0]);
                const h = fn(r);
                0 === e && null !== n ? null == i ? Xd(t, n, h) : Zo(t, n, h, i || null, !0) : 1 === e && null !== n ? Zo(t, n, h, i || null, !0) : 2 === e ? lf(t, h, s) : 3 === e && t.destroyNode(h),
                null != o && function Sv(e, t, n, r, i) {
                    const o = n[7];
                    o !== fn(n) && gs(t, e, r, o, i);
                    for (let h = 10; h < n.length; h++) {
                        const p = n[h];
                        oa(p[1], p, e, t, r, o)
                    }
                }(t, e, o, n, i)
            }
        }
        function Xl(e, t) {
            return e.createText(t)
        }
        function Yd(e, t, n) {
            e.setValue(t, n)
        }
        function gv(e, t) {
            return e.createComment(function kd(e) {
                return e.replace($y, t => t.replace(Gy, "\u200b$1\u200b"))
            }(t))
        }
        function eu(e, t, n) {
            return e.createElement(t, n)
        }
        function qd(e, t) {
            const n = e[9]
              , r = n.indexOf(t)
              , i = t[3];
            512 & t[2] && (t[2] &= -513,
            Wt(i, -1)),
            n.splice(r, 1)
        }
        function tu(e, t) {
            if (e.length <= 10)
                return;
            const n = 10 + t
              , r = e[n];
            if (r) {
                const i = r[17];
                null !== i && i !== e && qd(i, r),
                t > 0 && (e[n - 1][4] = r[4]);
                const o = Ge(e, 10 + t);
                !function mv(e, t) {
                    oa(e, t, t[11], 2, null, null),
                    t[0] = null,
                    t[6] = null
                }(r[1], r);
                const s = o[19];
                null !== s && s.detachView(o[1]),
                r[3] = null,
                r[4] = null,
                r[2] &= -65
            }
            return r
        }
        function Qd(e, t) {
            if (!(128 & t[2])) {
                const n = t[11];
                n.destroyNode && oa(e, t, n, 3, null, null),
                function _v(e) {
                    let t = e[13];
                    if (!t)
                        return nu(e[1], e);
                    for (; t; ) {
                        let n = null;
                        if (bn(t))
                            n = t[13];
                        else {
                            const r = t[10];
                            r && (n = r)
                        }
                        if (!n) {
                            for (; t && !t[4] && t !== e; )
                                bn(t) && nu(t[1], t),
                                t = t[3];
                            null === t && (t = e),
                            bn(t) && nu(t[1], t),
                            n = t && t[4]
                        }
                        t = n
                    }
                }(t)
            }
        }
        function nu(e, t) {
            if (!(128 & t[2])) {
                t[2] &= -65,
                t[2] |= 128,
                function wv(e, t) {
                    let n;
                    if (null != e && null != (n = e.destroyHooks))
                        for (let r = 0; r < n.length; r += 2) {
                            const i = t[n[r]];
                            if (!(i instanceof U)) {
                                const o = n[r + 1];
                                if (Array.isArray(o))
                                    for (let s = 0; s < o.length; s += 2) {
                                        const h = i[o[s]]
                                          , p = o[s + 1];
                                        try {
                                            p.call(h)
                                        } finally {}
                                    }
                                else
                                    try {
                                        o.call(i)
                                    } finally {}
                            }
                        }
                }(e, t),
                function Ev(e, t) {
                    const n = e.cleanup
                      , r = t[7];
                    let i = -1;
                    if (null !== n)
                        for (let o = 0; o < n.length - 1; o += 2)
                            if ("string" == typeof n[o]) {
                                const s = n[o + 1]
                                  , h = "function" == typeof s ? s(t) : fn(t[s])
                                  , p = r[i = n[o + 2]]
                                  , w = n[o + 3];
                                "boolean" == typeof w ? h.removeEventListener(n[o], p, w) : w >= 0 ? r[i = w]() : r[i = -w].unsubscribe(),
                                o += 2
                            } else {
                                const s = r[i = n[o + 1]];
                                n[o].call(s)
                            }
                    if (null !== r) {
                        for (let o = i + 1; o < r.length; o++)
                            (0,
                            r[o])();
                        t[7] = null
                    }
                }(e, t),
                1 === t[1].type && t[11].destroy();
                const n = t[17];
                if (null !== n && rr(t[3])) {
                    n !== t[3] && qd(n, t);
                    const r = t[19];
                    null !== r && r.detachView(e)
                }
                !function Xy(e) {
                    zl.delete(e[20])
                }(t)
            }
        }
        function Zd(e, t, n) {
            return Jd(e, t.parent, n)
        }
        function Jd(e, t, n) {
            let r = t;
            for (; null !== r && 40 & r.type; )
                r = (t = r).parent;
            if (null === r)
                return n[0];
            if (2 & r.flags) {
                const i = e.data[r.directiveStart].encapsulation;
                if (i === wt.None || i === wt.Emulated)
                    return null
            }
            return x(r, n)
        }
        function Zo(e, t, n, r, i) {
            e.insertBefore(t, n, r, i)
        }
        function Xd(e, t, n) {
            e.appendChild(t, n)
        }
        function ef(e, t, n, r, i) {
            null !== r ? Zo(e, t, n, r, i) : Xd(e, t, n)
        }
        function Ra(e, t) {
            return e.parentNode(t)
        }
        function tf(e, t, n) {
            return rf(e, t, n)
        }
        function nf(e, t, n) {
            return 40 & e.type ? x(e, n) : null
        }
        let ru, rf = nf;
        function sf(e, t) {
            rf = e,
            ru = t
        }
        function La(e, t, n, r) {
            const i = Zd(e, r, t)
              , o = t[11]
              , h = tf(r.parent || t[6], r, t);
            if (null != i)
                if (Array.isArray(n))
                    for (let p = 0; p < n.length; p++)
                        ef(o, i, n[p], h, !1);
                else
                    ef(o, i, n, h, !1);
            void 0 !== ru && ru(o, r, t, n, i)
        }
        function ka(e, t) {
            if (null !== t) {
                const n = t.type;
                if (3 & n)
                    return x(t, e);
                if (4 & n)
                    return iu(-1, e[t.index]);
                if (8 & n) {
                    const r = t.child;
                    if (null !== r)
                        return ka(e, r);
                    {
                        const i = e[t.index];
                        return rr(i) ? iu(-1, i) : fn(i)
                    }
                }
                if (32 & n)
                    return Ql(t, e)() || fn(e[t.index]);
                {
                    const r = af(e, t);
                    return null !== r ? Array.isArray(r) ? r[0] : ka(ia(e[16]), r) : ka(e, t.next)
                }
            }
            return null
        }
        function af(e, t) {
            return null !== t ? e[16][6].projection[t.projection] : null
        }
        function iu(e, t) {
            const n = 10 + e + 1;
            if (n < t.length) {
                const r = t[n]
                  , i = r[1].firstChild;
                if (null !== i)
                    return ka(r, i)
            }
            return t[7]
        }
        function lf(e, t, n) {
            const r = Ra(e, t);
            r && function bv(e, t, n, r) {
                e.removeChild(t, n, r)
            }(e, r, t, n)
        }
        function ou(e, t, n, r, i, o, s) {
            for (; null != n; ) {
                const h = r[n.index]
                  , p = n.type;
                if (s && 0 === t && (h && Sr(fn(h), r),
                n.flags |= 4),
                64 != (64 & n.flags))
                    if (8 & p)
                        ou(e, t, n.child, r, i, o, !1),
                        gs(t, e, i, h, o);
                    else if (32 & p) {
                        const w = Ql(n, r);
                        let S;
                        for (; S = w(); )
                            gs(t, e, i, S, o);
                        gs(t, e, i, h, o)
                    } else
                        16 & p ? uf(e, t, r, n, i, o) : gs(t, e, i, h, o);
                n = s ? n.projectionNext : n.next
            }
        }
        function oa(e, t, n, r, i, o) {
            ou(n, r, e.firstChild, t, i, o, !1)
        }
        function uf(e, t, n, r, i, o) {
            const s = n[16]
              , p = s[6].projection[r.projection];
            if (Array.isArray(p))
                for (let w = 0; w < p.length; w++)
                    gs(t, e, i, p[w], o);
            else
                ou(e, t, p, s[3], i, o, !0)
        }
        function cf(e, t, n) {
            e.setAttribute(t, "style", n)
        }
        function su(e, t, n) {
            "" === n ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n)
        }
        function df(e, t, n) {
            let r = e.length;
            for (; ; ) {
                const i = e.indexOf(t, n);
                if (-1 === i)
                    return i;
                if (0 === i || e.charCodeAt(i - 1) <= 32) {
                    const o = t.length;
                    if (i + o === r || e.charCodeAt(i + o) <= 32)
                        return i
                }
                n = i + 1
            }
        }
        const ff = "ng-template";
        function Iv(e, t, n) {
            let r = 0;
            for (; r < e.length; ) {
                let i = e[r++];
                if (n && "class" === i) {
                    if (i = e[r],
                    -1 !== df(i.toLowerCase(), t, 0))
                        return !0
                } else if (1 === i) {
                    for (; r < e.length && "string" == typeof (i = e[r++]); )
                        if (i.toLowerCase() === t)
                            return !0;
                    return !1
                }
            }
            return !1
        }
        function hf(e) {
            return 4 === e.type && e.value !== ff
        }
        function Pv(e, t, n) {
            return t === (4 !== e.type || n ? e.value : ff)
        }
        function Ov(e, t, n) {
            let r = 4;
            const i = e.attrs || []
              , o = function Fv(e) {
                for (let t = 0; t < e.length; t++)
                    if (Ht(e[t]))
                        return t;
                return e.length
            }(i);
            let s = !1;
            for (let h = 0; h < t.length; h++) {
                const p = t[h];
                if ("number" != typeof p) {
                    if (!s)
                        if (4 & r) {
                            if (r = 2 | 1 & r,
                            "" !== p && !Pv(e, p, n) || "" === p && 1 === t.length) {
                                if (Li(r))
                                    return !1;
                                s = !0
                            }
                        } else {
                            const w = 8 & r ? p : t[++h];
                            if (8 & r && null !== e.attrs) {
                                if (!Iv(e.attrs, w, n)) {
                                    if (Li(r))
                                        return !1;
                                    s = !0
                                }
                                continue
                            }
                            const F = xv(8 & r ? "class" : p, i, hf(e), n);
                            if (-1 === F) {
                                if (Li(r))
                                    return !1;
                                s = !0;
                                continue
                            }
                            if ("" !== w) {
                                let $;
                                $ = F > o ? "" : i[F + 1].toLowerCase();
                                const J = 8 & r ? $ : null;
                                if (J && -1 !== df(J, w, 0) || 2 & r && w !== $) {
                                    if (Li(r))
                                        return !1;
                                    s = !0
                                }
                            }
                        }
                } else {
                    if (!s && !Li(r) && !Li(p))
                        return !1;
                    if (s && Li(p))
                        continue;
                    s = !1,
                    r = p | 1 & r
                }
            }
            return Li(r) || s
        }
        function Li(e) {
            return 0 == (1 & e)
        }
        function xv(e, t, n, r) {
            if (null === t)
                return -1;
            let i = 0;
            if (r || !n) {
                let o = !1;
                for (; i < t.length; ) {
                    const s = t[i];
                    if (s === e)
                        return i;
                    if (3 === s || 6 === s)
                        o = !0;
                    else {
                        if (1 === s || 2 === s) {
                            let h = t[++i];
                            for (; "string" == typeof h; )
                                h = t[++i];
                            continue
                        }
                        if (4 === s)
                            break;
                        if (0 === s) {
                            i += 4;
                            continue
                        }
                    }
                    i += o ? 1 : 2
                }
                return -1
            }
            return function Rv(e, t) {
                let n = e.indexOf(4);
                if (n > -1)
                    for (n++; n < e.length; ) {
                        const r = e[n];
                        if ("number" == typeof r)
                            return -1;
                        if (r === t)
                            return n;
                        n++
                    }
                return -1
            }(t, e)
        }
        function pf(e, t, n=!1) {
            for (let r = 0; r < t.length; r++)
                if (Ov(e, t[r], n))
                    return !0;
            return !1
        }
        function Lv(e, t) {
            e: for (let n = 0; n < t.length; n++) {
                const r = t[n];
                if (e.length === r.length) {
                    for (let i = 0; i < e.length; i++)
                        if (e[i] !== r[i])
                            continue e;
                    return !0
                }
            }
            return !1
        }
        function gf(e, t) {
            return e ? ":not(" + t.trim() + ")" : t
        }
        function kv(e) {
            let t = e[0]
              , n = 1
              , r = 2
              , i = ""
              , o = !1;
            for (; n < e.length; ) {
                let s = e[n];
                if ("string" == typeof s)
                    if (2 & r) {
                        const h = e[++n];
                        i += "[" + s + (h.length > 0 ? '="' + h + '"' : "") + "]"
                    } else
                        8 & r ? i += "." + s : 4 & r && (i += " " + s);
                else
                    "" !== i && !Li(s) && (t += gf(o, i),
                    i = ""),
                    r = s,
                    o = o || !Li(r);
                n++
            }
            return "" !== i && (t += gf(o, i)),
            t
        }
        const St = {};
        function mf(e) {
            yf(Pt(), Ie(), ir() + e, !1)
        }
        function yf(e, t, n, r) {
            if (!r)
                if (3 == (3 & t[2])) {
                    const o = e.preOrderCheckHooks;
                    null !== o && M(t, o, n)
                } else {
                    const o = e.preOrderHooks;
                    null !== o && l(t, o, 0, n)
                }
            Ei(n)
        }
        function Cf(e, t=null, n=null, r) {
            const i = Ef(e, t, n, r);
            return i.resolveInjectorInitializers(),
            i
        }
        function Ef(e, t=null, n=null, r, i=new Set) {
            const o = [n || gt, Dy(e)];
            return r = r || ("object" == typeof e ? void 0 : je(e)),
            new Sd(o,t || Fa(),r || null,i)
        }
        let Jo = ( () => {
            class e {
                static create(n, r) {
                    if (Array.isArray(n))
                        return Cf({
                            name: ""
                        }, r, n, "");
                    {
                        const i = n.name ?? "";
                        return Cf({
                            name: i
                        }, n.parent, n.providers, i)
                    }
                }
            }
            return e.THROW_IF_NOT_FOUND = Gs,
            e.NULL = new Ed,
            e.\u0275prov = jt({
                token: e,
                providedIn: "any",
                factory: () => zn(Dd)
            }),
            e.__NG_ELEMENT_ID__ = -1,
            e
        }
        )();
        function ys(e, t=ee.Default) {
            const n = Ie();
            return null === n ? zn(e, t) : nn(an(), n, Be(e), t)
        }
        function If() {
            throw new Error("invalid")
        }
        function Ba(e, t) {
            return e << 17 | t << 2
        }
        function ki(e) {
            return e >> 17 & 32767
        }
        function du(e) {
            return 2 | e
        }
        function _o(e) {
            return (131068 & e) >> 2
        }
        function fu(e, t) {
            return -131069 & e | t << 2
        }
        function hu(e) {
            return 1 | e
        }
        function Hf(e, t) {
            const n = e.contentQueries;
            if (null !== n)
                for (let r = 0; r < n.length; r += 2) {
                    const i = n[r]
                      , o = n[r + 1];
                    if (-1 !== o) {
                        const s = e.data[o];
                        $o(i),
                        s.contentQueries(2, t[o], o)
                    }
                }
        }
        function ja(e, t, n, r, i, o, s, h, p, w, S) {
            const F = t.blueprint.slice();
            return F[0] = i,
            F[2] = 76 | r,
            (null !== S || e && 1024 & e[2]) && (F[2] |= 1024),
            Bt(F),
            F[3] = F[15] = e,
            F[8] = n,
            F[10] = s || e && e[10],
            F[11] = h || e && e[11],
            F[12] = p || e && e[12] || null,
            F[9] = w || e && e[9] || null,
            F[6] = o,
            F[20] = function Zy() {
                return Qy++
            }(),
            F[21] = S,
            F[16] = 2 == t.type ? e[16] : F,
            F
        }
        function vs(e, t, n, r, i) {
            let o = e.data[t];
            if (null === o)
                o = Eu(e, t, n, r, i),
                function Uo() {
                    return qe.lFrame.inI18n
                }() && (o.flags |= 64);
            else if (64 & o.type) {
                o.type = n,
                o.value = r,
                o.attrs = i;
                const s = E();
                o.injectorIndex = null === s ? -1 : s.injectorIndex
            }
            return v(o, !0),
            o
        }
        function Eu(e, t, n, r, i) {
            const o = uo()
              , s = m()
              , p = e.data[t] = function D_(e, t, n, r, i, o) {
                return {
                    type: n,
                    index: r,
                    insertBeforeIndex: null,
                    injectorIndex: t ? t.injectorIndex : -1,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    propertyBindings: null,
                    flags: 0,
                    providerIndexes: 0,
                    value: i,
                    attrs: o,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: null,
                    outputs: null,
                    tViews: null,
                    next: null,
                    projectionNext: null,
                    child: null,
                    parent: t,
                    projection: null,
                    styles: null,
                    stylesWithoutHost: null,
                    residualStyles: void 0,
                    classes: null,
                    classesWithoutHost: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0
                }
            }(0, s ? o : o && o.parent, n, t, r, i);
            return null === e.firstChild && (e.firstChild = p),
            null !== o && (s ? null == o.child && null !== p.parent && (o.child = p) : null === o.next && (o.next = p)),
            p
        }
        function _s(e, t, n, r) {
            if (0 === n)
                return -1;
            const i = t.length;
            for (let o = 0; o < n; o++)
                t.push(r),
                e.blueprint.push(r),
                e.data.push(null);
            return i
        }
        function $a(e, t, n) {
            So(t);
            try {
                const r = e.viewQuery;
                null !== r && Ou(1, r, n);
                const i = e.template;
                null !== i && Uf(e, t, i, 1, n),
                e.firstCreatePass && (e.firstCreatePass = !1),
                e.staticContentQueries && Hf(e, t),
                e.staticViewQueries && Ou(2, e.viewQuery, n);
                const o = e.components;
                null !== o && function m_(e, t) {
                    for (let n = 0; n < t.length; n++)
                        L_(e, t[n])
                }(t, o)
            } catch (r) {
                throw e.firstCreatePass && (e.incompleteFirstPass = !0,
                e.firstCreatePass = !1),
                r
            } finally {
                t[2] &= -5,
                Ao()
            }
        }
        function sa(e, t, n, r) {
            const i = t[2];
            if (128 != (128 & i)) {
                So(t);
                try {
                    Bt(t),
                    function Fi(e) {
                        return qe.lFrame.bindingIndex = e
                    }(e.bindingStartIndex),
                    null !== n && Uf(e, t, n, 2, r);
                    const s = 3 == (3 & i);
                    if (s) {
                        const w = e.preOrderCheckHooks;
                        null !== w && M(t, w, null)
                    } else {
                        const w = e.preOrderHooks;
                        null !== w && l(t, w, 0, null),
                        u(t, 0)
                    }
                    if (function F_(e) {
                        for (let t = Zl(e); null !== t; t = Jl(t)) {
                            if (!t[2])
                                continue;
                            const n = t[9];
                            for (let r = 0; r < n.length; r++) {
                                const i = n[r]
                                  , o = i[3];
                                0 == (512 & i[2]) && Wt(o, 1),
                                i[2] |= 512
                            }
                        }
                    }(t),
                    function N_(e) {
                        for (let t = Zl(e); null !== t; t = Jl(t))
                            for (let n = 10; n < t.length; n++) {
                                const r = t[n]
                                  , i = r[1];
                                Gt(r) && sa(i, r, i.template, r[8])
                            }
                    }(t),
                    null !== e.contentQueries && Hf(e, t),
                    s) {
                        const w = e.contentCheckHooks;
                        null !== w && M(t, w)
                    } else {
                        const w = e.contentHooks;
                        null !== w && l(t, w, 1),
                        u(t, 1)
                    }
                    !function p_(e, t) {
                        const n = e.hostBindingOpCodes;
                        if (null !== n)
                            try {
                                for (let r = 0; r < n.length; r++) {
                                    const i = n[r];
                                    if (i < 0)
                                        Ei(~i);
                                    else {
                                        const o = i
                                          , s = n[++r]
                                          , h = n[++r];
                                        zi(s, o),
                                        h(2, t[o])
                                    }
                                }
                            } finally {
                                Ei(-1)
                            }
                    }(e, t);
                    const h = e.components;
                    null !== h && function g_(e, t) {
                        for (let n = 0; n < t.length; n++)
                            R_(e, t[n])
                    }(t, h);
                    const p = e.viewQuery;
                    if (null !== p && Ou(2, p, r),
                    s) {
                        const w = e.viewCheckHooks;
                        null !== w && M(t, w)
                    } else {
                        const w = e.viewHooks;
                        null !== w && l(t, w, 2),
                        u(t, 2)
                    }
                    !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
                    t[2] &= -41,
                    512 & t[2] && (t[2] &= -513,
                    Wt(t[3], -1))
                } finally {
                    Ao()
                }
            }
        }
        function y_(e, t, n, r) {
            const i = t[10]
              , s = Yt(t);
            try {
                !s && i.begin && i.begin(),
                s && $a(e, t, r),
                sa(e, t, n, r)
            } finally {
                !s && i.end && i.end()
            }
        }
        function Uf(e, t, n, r, i) {
            const o = ir()
              , s = 2 & r;
            try {
                Ei(-1),
                s && t.length > 22 && yf(e, t, 22, !1),
                n(r, i)
            } finally {
                Ei(o)
            }
        }
        function jf(e, t, n) {
            if (Wr(t)) {
                const i = t.directiveEnd;
                for (let o = t.directiveStart; o < i; o++) {
                    const s = e.data[o];
                    s.contentQueries && s.contentQueries(1, n[o], o)
                }
            }
        }
        function wu(e, t, n) {
            !hi() || (function M_(e, t, n, r) {
                const i = n.directiveStart
                  , o = n.directiveEnd;
                e.firstCreatePass || et(n, t),
                Sr(r, t);
                const s = n.initialInputs;
                for (let h = i; h < o; h++) {
                    const p = e.data[h]
                      , w = tn(p);
                    w && P_(t, n, p);
                    const S = ti(t, e, h, n);
                    Sr(S, t),
                    null !== s && O_(0, h - i, S, p, 0, s),
                    w && (Ye(n.index, t)[8] = S)
                }
            }(e, t, n, x(n, t)),
            128 == (128 & n.flags) && function T_(e, t, n) {
                const r = n.directiveStart
                  , i = n.directiveEnd
                  , o = n.index
                  , s = function co() {
                    return qe.lFrame.currentDirectiveIndex
                }();
                try {
                    Ei(o);
                    for (let h = r; h < i; h++) {
                        const p = e.data[h]
                          , w = t[h];
                        jo(h),
                        (null !== p.hostBindings || 0 !== p.hostVars || null !== p.hostAttrs) && qf(p, w)
                    }
                } finally {
                    Ei(-1),
                    jo(s)
                }
            }(e, t, n))
        }
        function bu(e, t, n=x) {
            const r = t.localNames;
            if (null !== r) {
                let i = t.index + 1;
                for (let o = 0; o < r.length; o += 2) {
                    const s = r[o + 1]
                      , h = -1 === s ? n(t, e) : e[s];
                    e[i++] = h
                }
            }
        }
        function $f(e) {
            const t = e.tView;
            return null === t || t.incompleteFirstPass ? e.tView = Mu(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts) : t
        }
        function Mu(e, t, n, r, i, o, s, h, p, w) {
            const S = 22 + r
              , F = S + i
              , $ = function v_(e, t) {
                const n = [];
                for (let r = 0; r < t; r++)
                    n.push(r < e ? null : St);
                return n
            }(S, F)
              , J = "function" == typeof w ? w() : w;
            return $[1] = {
                type: e,
                blueprint: $,
                template: n,
                queries: null,
                viewQuery: h,
                declTNode: t,
                data: $.slice().fill(null, S),
                bindingStartIndex: S,
                expandoStartIndex: F,
                hostBindingOpCodes: null,
                firstCreatePass: !0,
                firstUpdatePass: !0,
                staticViewQueries: !1,
                staticContentQueries: !1,
                preOrderHooks: null,
                preOrderCheckHooks: null,
                contentHooks: null,
                contentCheckHooks: null,
                viewHooks: null,
                viewCheckHooks: null,
                destroyHooks: null,
                cleanup: null,
                contentQueries: null,
                components: null,
                directiveRegistry: "function" == typeof o ? o() : o,
                pipeRegistry: "function" == typeof s ? s() : s,
                firstChild: null,
                schemas: p,
                consts: J,
                incompleteFirstPass: !1
            }
        }
        function Gf(e, t, n, r) {
            const i = nh(t);
            null === n ? i.push(r) : (i.push(n),
            e.firstCreatePass && rh(e).push(r, i.length - 1))
        }
        function zf(e, t, n) {
            for (let r in e)
                if (e.hasOwnProperty(r)) {
                    const i = e[r];
                    (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(t, i) : n[r] = [t, i]
                }
            return n
        }
        function Wf(e, t) {
            const r = t.directiveEnd
              , i = e.data
              , o = t.attrs
              , s = [];
            let h = null
              , p = null;
            for (let w = t.directiveStart; w < r; w++) {
                const S = i[w]
                  , F = S.inputs
                  , $ = null === o || hf(t) ? null : x_(F, o);
                s.push($),
                h = zf(F, w, h),
                p = zf(S.outputs, w, p)
            }
            null !== h && (h.hasOwnProperty("class") && (t.flags |= 16),
            h.hasOwnProperty("style") && (t.flags |= 32)),
            t.initialInputs = s,
            t.inputs = h,
            t.outputs = p
        }
        function pi(e, t, n, r, i, o, s, h) {
            const p = x(t, n);
            let S, w = t.inputs;
            !h && null != w && (S = w[r]) ? (xu(e, n, S, r, i),
            Nr(t) && Kf(n, t.index)) : 3 & t.type && (r = function C_(e) {
                return "class" === e ? "className" : "for" === e ? "htmlFor" : "formaction" === e ? "formAction" : "innerHtml" === e ? "innerHTML" : "readonly" === e ? "readOnly" : "tabindex" === e ? "tabIndex" : e
            }(r),
            i = null != s ? s(i, t.value || "", r) : i,
            o.setProperty(p, r, i))
        }
        function Kf(e, t) {
            const n = Ye(t, e);
            16 & n[2] || (n[2] |= 32)
        }
        function Tu(e, t, n, r) {
            let i = !1;
            if (hi()) {
                const o = function S_(e, t, n) {
                    const r = e.directiveRegistry;
                    let i = null;
                    if (r)
                        for (let o = 0; o < r.length; o++) {
                            const s = r[o];
                            pf(n, s.selectors, !1) && (i || (i = []),
                            Rt(et(n, t), e, s.type),
                            tn(s) ? (Qf(e, n),
                            i.unshift(s)) : i.push(s))
                        }
                    return i
                }(e, t, n)
                  , s = null === r ? null : {
                    "": -1
                };
                if (null !== o) {
                    i = !0,
                    Zf(n, e.data.length, o.length);
                    for (let S = 0; S < o.length; S++) {
                        const F = o[S];
                        F.providersResolver && F.providersResolver(F)
                    }
                    let h = !1
                      , p = !1
                      , w = _s(e, t, o.length, null);
                    for (let S = 0; S < o.length; S++) {
                        const F = o[S];
                        n.mergedAttrs = vn(n.mergedAttrs, F.hostAttrs),
                        Jf(e, n, t, w, F),
                        I_(w, F, s),
                        null !== F.contentQueries && (n.flags |= 8),
                        (null !== F.hostBindings || null !== F.hostAttrs || 0 !== F.hostVars) && (n.flags |= 128);
                        const $ = F.type.prototype;
                        !h && ($.ngOnChanges || $.ngOnInit || $.ngDoCheck) && ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
                        h = !0),
                        !p && ($.ngOnChanges || $.ngDoCheck) && ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index),
                        p = !0),
                        w++
                    }
                    Wf(e, n)
                }
                s && function A_(e, t, n) {
                    if (t) {
                        const r = e.localNames = [];
                        for (let i = 0; i < t.length; i += 2) {
                            const o = n[t[i + 1]];
                            if (null == o)
                                throw new le(-301,!1);
                            r.push(t[i], o)
                        }
                    }
                }(n, r, s)
            }
            return n.mergedAttrs = vn(n.mergedAttrs, n.attrs),
            i
        }
        function Yf(e, t, n, r, i, o) {
            const s = o.hostBindings;
            if (s) {
                let h = e.hostBindingOpCodes;
                null === h && (h = e.hostBindingOpCodes = []);
                const p = ~t.index;
                (function b_(e) {
                    let t = e.length;
                    for (; t > 0; ) {
                        const n = e[--t];
                        if ("number" == typeof n && n < 0)
                            return n
                    }
                    return 0
                }
                )(h) != p && h.push(p),
                h.push(r, i, s)
            }
        }
        function qf(e, t) {
            null !== e.hostBindings && e.hostBindings(1, t)
        }
        function Qf(e, t) {
            t.flags |= 2,
            (e.components || (e.components = [])).push(t.index)
        }
        function I_(e, t, n) {
            if (n) {
                if (t.exportAs)
                    for (let r = 0; r < t.exportAs.length; r++)
                        n[t.exportAs[r]] = e;
                tn(t) && (n[""] = e)
            }
        }
        function Zf(e, t, n) {
            e.flags |= 1,
            e.directiveStart = t,
            e.directiveEnd = t + n,
            e.providerIndexes = t
        }
        function Jf(e, t, n, r, i) {
            e.data[r] = i;
            const o = i.factory || (i.factory = Er(i.type))
              , s = new U(o,tn(i),ys);
            e.blueprint[r] = s,
            n[r] = s,
            Yf(e, t, 0, r, _s(e, n, i.hostVars, St), i)
        }
        function P_(e, t, n) {
            const r = x(t, e)
              , i = $f(n)
              , o = e[10]
              , s = Ga(e, ja(e, i, null, n.onPush ? 32 : 16, r, t, o, o.createRenderer(r, n), null, null, null));
            e[t.index] = s
        }
        function Su(e, t, n, r, i, o, s) {
            if (null == o)
                e.removeAttribute(t, i, n);
            else {
                const h = null == s ? ye(o) : s(o, r || "", i);
                e.setAttribute(t, i, h, n)
            }
        }
        function O_(e, t, n, r, i, o) {
            const s = o[t];
            if (null !== s) {
                const h = r.setInput;
                for (let p = 0; p < s.length; ) {
                    const w = s[p++]
                      , S = s[p++]
                      , F = s[p++];
                    null !== h ? r.setInput(n, F, w, S) : n[S] = F
                }
            }
        }
        function x_(e, t) {
            let n = null
              , r = 0;
            for (; r < t.length; ) {
                const i = t[r];
                if (0 !== i)
                    if (5 !== i) {
                        if ("number" == typeof i)
                            break;
                        e.hasOwnProperty(i) && (null === n && (n = []),
                        n.push(i, e[i], t[r + 1])),
                        r += 2
                    } else
                        r += 2;
                else
                    r += 4
            }
            return n
        }
        function Xf(e, t, n, r) {
            return new Array(e,!0,!1,t,null,0,r,n,null,null)
        }
        function R_(e, t) {
            const n = Ye(t, e);
            if (Gt(n)) {
                const r = n[1];
                48 & n[2] ? sa(r, n, r.template, n[8]) : n[5] > 0 && Au(n)
            }
        }
        function Au(e) {
            for (let r = Zl(e); null !== r; r = Jl(r))
                for (let i = 10; i < r.length; i++) {
                    const o = r[i];
                    if (Gt(o))
                        if (512 & o[2]) {
                            const s = o[1];
                            sa(s, o, s.template, o[8])
                        } else
                            o[5] > 0 && Au(o)
                }
            const n = e[1].components;
            if (null !== n)
                for (let r = 0; r < n.length; r++) {
                    const i = Ye(n[r], e);
                    Gt(i) && i[5] > 0 && Au(i)
                }
        }
        function L_(e, t) {
            const n = Ye(t, e)
              , r = n[1];
            (function k_(e, t) {
                for (let n = t.length; n < e.blueprint.length; n++)
                    t.push(e.blueprint[n])
            }
            )(r, n),
            $a(r, n, n[8])
        }
        function Ga(e, t) {
            return e[13] ? e[14][4] = t : e[13] = t,
            e[14] = t,
            t
        }
        function Iu(e) {
            for (; e; ) {
                e[2] |= 32;
                const t = ia(e);
                if (ji(e) && !t)
                    return e;
                e = t
            }
            return null
        }
        function th(e) {
            !function eh(e) {
                for (let t = 0; t < e.components.length; t++) {
                    const n = e.components[t]
                      , r = Yl(n);
                    if (null !== r) {
                        const i = r[1];
                        y_(i, r, i.template, n)
                    }
                }
            }(e[8])
        }
        function Ou(e, t, n) {
            $o(0),
            t(e, n)
        }
        const B_ = ( () => Promise.resolve(null))();
        function nh(e) {
            return e[7] || (e[7] = [])
        }
        function rh(e) {
            return e.cleanup || (e.cleanup = [])
        }
        function oh(e, t) {
            const n = e[9]
              , r = n ? n.get(na, null) : null;
            r && r.handleError(t)
        }
        function xu(e, t, n, r, i) {
            for (let o = 0; o < n.length; ) {
                const s = n[o++]
                  , h = n[o++]
                  , p = t[s]
                  , w = e.data[s];
                null !== w.setInput ? w.setInput(p, i, r, h) : p[h] = i
            }
        }
        function Do(e, t, n) {
            const r = C(t, e);
            Yd(e[11], r, n)
        }
        function za(e, t, n) {
            let r = n ? e.styles : null
              , i = n ? e.classes : null
              , o = 0;
            if (null !== t)
                for (let s = 0; s < t.length; s++) {
                    const h = t[s];
                    "number" == typeof h ? o = h : 1 == o ? i = Qe(i, h) : 2 == o && (r = Qe(r, h + ": " + t[++s] + ";"))
                }
            n ? e.styles = r : e.stylesWithoutHost = r,
            n ? e.classes = i : e.classesWithoutHost = i
        }
        function Wa(e, t, n, r, i=!1) {
            for (; null !== n; ) {
                const o = t[n.index];
                if (null !== o && r.push(fn(o)),
                rr(o))
                    for (let h = 10; h < o.length; h++) {
                        const p = o[h]
                          , w = p[1].firstChild;
                        null !== w && Wa(p[1], p, w, r)
                    }
                const s = n.type;
                if (8 & s)
                    Wa(e, t, n.child, r);
                else if (32 & s) {
                    const h = Ql(n, t);
                    let p;
                    for (; p = h(); )
                        r.push(p)
                } else if (16 & s) {
                    const h = af(t, n);
                    if (Array.isArray(h))
                        r.push(...h);
                    else {
                        const p = ia(t[16]);
                        Wa(p[1], p, h, r, !0)
                    }
                }
                n = i ? n.projectionNext : n.next
            }
            return r
        }
        class aa {
            constructor(t, n) {
                this._lView = t,
                this._cdRefInjectingView = n,
                this._appRef = null,
                this._attachedToViewContainer = !1
            }
            get rootNodes() {
                const t = this._lView
                  , n = t[1];
                return Wa(n, t, n.firstChild, [])
            }
            get context() {
                return this._lView[8]
            }
            set context(t) {
                this._lView[8] = t
            }
            get destroyed() {
                return 128 == (128 & this._lView[2])
            }
            destroy() {
                if (this._appRef)
                    this._appRef.detachView(this);
                else if (this._attachedToViewContainer) {
                    const t = this._lView[3];
                    if (rr(t)) {
                        const n = t[8]
                          , r = n ? n.indexOf(this) : -1;
                        r > -1 && (tu(t, r),
                        Ge(n, r))
                    }
                    this._attachedToViewContainer = !1
                }
                Qd(this._lView[1], this._lView)
            }
            onDestroy(t) {
                Gf(this._lView[1], this._lView, null, t)
            }
            markForCheck() {
                Iu(this._cdRefInjectingView || this._lView)
            }
            detach() {
                this._lView[2] &= -65
            }
            reattach() {
                this._lView[2] |= 64
            }
            detectChanges() {
                !function Pu(e, t, n) {
                    const r = t[10];
                    r.begin && r.begin();
                    try {
                        sa(e, t, e.template, n)
                    } catch (i) {
                        throw oh(t, i),
                        i
                    } finally {
                        r.end && r.end()
                    }
                }(this._lView[1], this._lView, this.context)
            }
            checkNoChanges() {}
            attachToViewContainerRef() {
                if (this._appRef)
                    throw new le(902,!1);
                this._attachedToViewContainer = !0
            }
            detachFromAppRef() {
                this._appRef = null,
                function vv(e, t) {
                    oa(e, t, t[11], 2, null, null)
                }(this._lView[1], this._lView)
            }
            attachToAppRef(t) {
                if (this._attachedToViewContainer)
                    throw new le(902,!1);
                this._appRef = t
            }
        }
        class H_ extends aa {
            constructor(t) {
                super(t),
                this._view = t
            }
            detectChanges() {
                th(this._view)
            }
            checkNoChanges() {}
            get context() {
                return null
            }
        }
        class Nu extends ea {
            constructor(t) {
                super(),
                this.ngModule = t
            }
            resolveComponentFactory(t) {
                const n = W(t);
                return new la(n,this.ngModule)
            }
        }
        function sh(e) {
            const t = [];
            for (let n in e)
                e.hasOwnProperty(n) && t.push({
                    propName: e[n],
                    templateName: n
                });
            return t
        }
        class j_ {
            constructor(t, n) {
                this.injector = t,
                this.parentInjector = n
            }
            get(t, n, r) {
                const i = this.injector.get(t, Bl, r);
                return i !== Bl || n === Bl ? i : this.parentInjector.get(t, n, r)
            }
        }
        class la extends Id {
            constructor(t, n) {
                super(),
                this.componentDef = t,
                this.ngModule = n,
                this.componentType = t.type,
                this.selector = function Vv(e) {
                    return e.map(kv).join(",")
                }(t.selectors),
                this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [],
                this.isBoundToModule = !!n
            }
            get inputs() {
                return sh(this.componentDef.inputs)
            }
            get outputs() {
                return sh(this.componentDef.outputs)
            }
            create(t, n, r, i) {
                let o = (i = i || this.ngModule)instanceof Qo ? i : i?.injector;
                o && null !== this.componentDef.getStandaloneInjector && (o = this.componentDef.getStandaloneInjector(o) || o);
                const s = o ? new j_(t,o) : t
                  , h = s.get(Od, null);
                if (null === h)
                    throw new le(407,!1);
                const p = s.get(ky, null)
                  , w = h.createRenderer(null, this.componentDef)
                  , S = this.componentDef.selectors[0][0] || "div"
                  , F = r ? function __(e, t, n) {
                    return e.selectRootElement(t, n === wt.ShadowDom)
                }(w, r, this.componentDef.encapsulation) : eu(h.createRenderer(null, this.componentDef), S, function U_(e) {
                    const t = e.toLowerCase();
                    return "svg" === t ? "svg" : "math" === t ? "math" : null
                }(S))
                  , $ = this.componentDef.onPush ? 288 : 272
                  , J = function K_(e, t) {
                    return {
                        components: [],
                        scheduler: e || av,
                        clean: B_,
                        playerHandler: t || null,
                        flags: 0
                    }
                }()
                  , we = Mu(0, null, null, 1, 0, null, null, null, null, null)
                  , Fe = ja(null, we, J, $, null, null, h, w, p, s, null);
                let ze, Xe;
                So(Fe);
                try {
                    const ct = function z_(e, t, n, r, i, o) {
                        const s = n[1];
                        n[22] = e;
                        const p = vs(s, 22, 2, "#host", null)
                          , w = p.mergedAttrs = t.hostAttrs;
                        null !== w && (za(p, w, !0),
                        null !== e && (vt(i, e, w),
                        null !== p.classes && su(i, e, p.classes),
                        null !== p.styles && cf(i, e, p.styles)));
                        const S = r.createRenderer(e, t)
                          , F = ja(n, $f(t), null, t.onPush ? 32 : 16, n[22], p, r, S, o || null, null, null);
                        return s.firstCreatePass && (Rt(et(p, n), s, t.type),
                        Qf(s, p),
                        Zf(p, n.length, 1)),
                        Ga(n, F),
                        n[22] = F
                    }(F, this.componentDef, Fe, h, w);
                    if (F)
                        if (r)
                            vt(w, F, ["ng-version", Vy.full]);
                        else {
                            const {attrs: Pe, classes: pt} = function Bv(e) {
                                const t = []
                                  , n = [];
                                let r = 1
                                  , i = 2;
                                for (; r < e.length; ) {
                                    let o = e[r];
                                    if ("string" == typeof o)
                                        2 === i ? "" !== o && t.push(o, e[++r]) : 8 === i && n.push(o);
                                    else {
                                        if (!Li(i))
                                            break;
                                        i = o
                                    }
                                    r++
                                }
                                return {
                                    attrs: t,
                                    classes: n
                                }
                            }(this.componentDef.selectors[0]);
                            Pe && vt(w, F, Pe),
                            pt && pt.length > 0 && su(w, F, pt.join(" "))
                        }
                    if (Xe = ae(we, 22),
                    void 0 !== n) {
                        const Pe = Xe.projection = [];
                        for (let pt = 0; pt < this.ngContentSelectors.length; pt++) {
                            const Ut = n[pt];
                            Pe.push(null != Ut ? Array.from(Ut) : null)
                        }
                    }
                    ze = function W_(e, t, n, r, i) {
                        const o = n[1]
                          , s = function w_(e, t, n) {
                            const r = an();
                            e.firstCreatePass && (n.providersResolver && n.providersResolver(n),
                            Jf(e, r, t, _s(e, t, 1, null), n),
                            Wf(e, r));
                            const i = ti(t, e, r.directiveStart, r);
                            Sr(i, t);
                            const o = x(r, t);
                            return o && Sr(o, t),
                            i
                        }(o, n, t);
                        if (r.components.push(s),
                        e[8] = s,
                        null !== i)
                            for (const p of i)
                                p(s, t);
                        if (t.contentQueries) {
                            const p = an();
                            t.contentQueries(1, s, p.directiveStart)
                        }
                        const h = an();
                        return !o.firstCreatePass || null === t.hostBindings && null === t.hostAttrs || (Ei(h.index),
                        Yf(n[1], h, 0, h.directiveStart, h.directiveEnd, t),
                        qf(t, s)),
                        s
                    }(ct, this.componentDef, Fe, J, [Y_]),
                    $a(we, Fe, null)
                } finally {
                    Ao()
                }
                return new G_(this.componentType,ze,hs(Xe, Fe),Fe,Xe)
            }
        }
        class G_ extends class Py {
        }
        {
            constructor(t, n, r, i, o) {
                super(),
                this.location = r,
                this._rootLView = i,
                this._tNode = o,
                this.instance = n,
                this.hostView = this.changeDetectorRef = new H_(i),
                this.componentType = t
            }
            setInput(t, n) {
                const r = this._tNode.inputs;
                let i;
                if (null !== r && (i = r[t])) {
                    const o = this._rootLView;
                    xu(o[1], o, i, t, n),
                    Kf(o, this._tNode.index)
                }
            }
            get injector() {
                return new Oo(this._tNode,this._rootLView)
            }
            destroy() {
                this.hostView.destroy()
            }
            onDestroy(t) {
                this.hostView.onDestroy(t)
            }
        }
        function Y_() {
            const e = an();
            zo(Ie()[1], e)
        }
        function Fu(e) {
            let t = function ah(e) {
                return Object.getPrototypeOf(e.prototype).constructor
            }(e.type)
              , n = !0;
            const r = [e];
            for (; t; ) {
                let i;
                if (tn(e))
                    i = t.\u0275cmp || t.\u0275dir;
                else {
                    if (t.\u0275cmp)
                        throw new le(903,!1);
                    i = t.\u0275dir
                }
                if (i) {
                    if (n) {
                        r.push(i);
                        const s = e;
                        s.inputs = Ru(e.inputs),
                        s.declaredInputs = Ru(e.declaredInputs),
                        s.outputs = Ru(e.outputs);
                        const h = i.hostBindings;
                        h && J_(e, h);
                        const p = i.viewQuery
                          , w = i.contentQueries;
                        if (p && Q_(e, p),
                        w && Z_(e, w),
                        Ne(e.inputs, i.inputs),
                        Ne(e.declaredInputs, i.declaredInputs),
                        Ne(e.outputs, i.outputs),
                        tn(i) && i.data.animation) {
                            const S = e.data;
                            S.animation = (S.animation || []).concat(i.data.animation)
                        }
                    }
                    const o = i.features;
                    if (o)
                        for (let s = 0; s < o.length; s++) {
                            const h = o[s];
                            h && h.ngInherit && h(e),
                            h === Fu && (n = !1)
                        }
                }
                t = Object.getPrototypeOf(t)
            }
            !function q_(e) {
                let t = 0
                  , n = null;
                for (let r = e.length - 1; r >= 0; r--) {
                    const i = e[r];
                    i.hostVars = t += i.hostVars,
                    i.hostAttrs = vn(i.hostAttrs, n = vn(n, i.hostAttrs))
                }
            }(r)
        }
        function Ru(e) {
            return e === Et ? {} : e === gt ? [] : e
        }
        function Q_(e, t) {
            const n = e.viewQuery;
            e.viewQuery = n ? (r, i) => {
                t(r, i),
                n(r, i)
            }
            : t
        }
        function Z_(e, t) {
            const n = e.contentQueries;
            e.contentQueries = n ? (r, i, o) => {
                t(r, i, o),
                n(r, i, o)
            }
            : t
        }
        function J_(e, t) {
            const n = e.hostBindings;
            e.hostBindings = n ? (r, i) => {
                t(r, i),
                n(r, i)
            }
            : t
        }
        let Ka = null;
        function Xo() {
            if (!Ka) {
                const e = At.Symbol;
                if (e && e.iterator)
                    Ka = e.iterator;
                else {
                    const t = Object.getOwnPropertyNames(Map.prototype);
                    for (let n = 0; n < t.length; ++n) {
                        const r = t[n];
                        "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Ka = r)
                    }
                }
            }
            return Ka
        }
        function ua(e) {
            return !!Lu(e) && (Array.isArray(e) || !(e instanceof Map) && Xo()in e)
        }
        function Lu(e) {
            return null !== e && ("function" == typeof e || "object" == typeof e)
        }
        function eo(e, t, n) {
            return e[t] = n
        }
        function ca(e, t) {
            return e[t]
        }
        function Ar(e, t, n) {
            return !Object.is(e[t], n) && (e[t] = n,
            !0)
        }
        function es(e, t, n, r) {
            const i = Ar(e, t, n);
            return Ar(e, t + 1, r) || i
        }
        function Ya(e, t, n, r, i) {
            const o = es(e, t, n, r);
            return Ar(e, t + 2, i) || o
        }
        function wi(e, t, n, r, i, o) {
            const s = es(e, t, n, r);
            return es(e, t + 2, i, o) || s
        }
        function ku(e, t, n, r) {
            const i = Ie();
            return Ar(i, kr(), t) && (Pt(),
            function Xi(e, t, n, r, i, o) {
                const s = x(e, t);
                Su(t[11], s, o, e.value, n, r, i)
            }(yn(), i, e, t, n, r)),
            ku
        }
        function Cs(e, t, n, r) {
            return Ar(e, kr(), n) ? t + ye(n) + r : St
        }
        function Es(e, t, n, r, i, o) {
            const h = es(e, Ln(), n, i);
            return Vr(2),
            h ? t + ye(n) + r + ye(i) + o : St
        }
        function yh(e, t, n, r, i, o, s, h) {
            const p = Ie()
              , w = Pt()
              , S = e + 22
              , F = w.firstCreatePass ? function aD(e, t, n, r, i, o, s, h, p) {
                const w = t.consts
                  , S = vs(t, e, 4, s || null, Dt(w, h));
                Tu(t, n, S, Dt(w, p)),
                zo(t, S);
                const F = S.tViews = Mu(2, S, r, i, o, t.directiveRegistry, t.pipeRegistry, null, t.schemas, w);
                return null !== t.queries && (t.queries.template(t, S),
                F.queries = t.queries.embeddedTView(S)),
                S
            }(S, w, p, t, n, r, i, o, s) : w.data[S];
            v(F, !1);
            const $ = p[11].createComment("");
            La(w, p, $, F),
            Sr($, p),
            Ga(p, p[S] = Xf($, p, $, F)),
            bi(F) && wu(w, p, F),
            null != s && bu(p, F, h)
        }
        function vh(e) {
            return Te(function Ze() {
                return qe.lFrame.contextLView
            }(), 22 + e)
        }
        function Vu(e, t, n) {
            const r = Ie();
            return Ar(r, kr(), t) && pi(Pt(), yn(), r, e, t, r[11], n, !1),
            Vu
        }
        function Bu(e, t, n, r, i) {
            const s = i ? "class" : "style";
            xu(e, n, t.inputs[s], s, r)
        }
        function qa(e, t, n, r) {
            const i = Ie()
              , o = Pt()
              , s = 22 + e
              , h = i[11]
              , p = i[s] = eu(h, t, function Bs() {
                return qe.lFrame.currentNamespace
            }())
              , w = o.firstCreatePass ? function uD(e, t, n, r, i, o, s) {
                const h = t.consts
                  , w = vs(t, e, 2, i, Dt(h, o));
                return Tu(t, n, w, Dt(h, s)),
                null !== w.attrs && za(w, w.attrs, !1),
                null !== w.mergedAttrs && za(w, w.mergedAttrs, !0),
                null !== t.queries && t.queries.elementStart(t, w),
                w
            }(s, o, i, 0, t, n, r) : o.data[s];
            v(w, !0);
            const S = w.mergedAttrs;
            null !== S && vt(h, p, S);
            const F = w.classes;
            null !== F && su(h, p, F);
            const $ = w.styles;
            return null !== $ && cf(h, p, $),
            64 != (64 & w.flags) && La(o, i, p, w),
            0 === function Ni() {
                return qe.lFrame.elementDepthCount
            }() && Sr(p, i),
            function Rn() {
                qe.lFrame.elementDepthCount++
            }(),
            bi(w) && (wu(o, i, w),
            jf(o, w, i)),
            null !== r && bu(i, w),
            qa
        }
        function Qa() {
            let e = an();
            m() ? O() : (e = e.parent,
            v(e, !1));
            const t = e;
            !function qr() {
                qe.lFrame.elementDepthCount--
            }();
            const n = Pt();
            return n.firstCreatePass && (zo(n, e),
            Wr(e) && n.queries.elementEnd(e)),
            null != t.classesWithoutHost && function tt(e) {
                return 0 != (16 & e.flags)
            }(t) && Bu(n, t, Ie(), t.classesWithoutHost, !0),
            null != t.stylesWithoutHost && function xt(e) {
                return 0 != (32 & e.flags)
            }(t) && Bu(n, t, Ie(), t.stylesWithoutHost, !1),
            Qa
        }
        function Hu(e, t, n, r) {
            return qa(e, t, n, r),
            Qa(),
            Hu
        }
        function Za(e, t, n) {
            const r = Ie()
              , i = Pt()
              , o = e + 22
              , s = i.firstCreatePass ? function cD(e, t, n, r, i) {
                const o = t.consts
                  , s = Dt(o, r)
                  , h = vs(t, e, 8, "ng-container", s);
                return null !== s && za(h, s, !0),
                Tu(t, n, h, Dt(o, i)),
                null !== t.queries && t.queries.elementStart(t, h),
                h
            }(o, i, r, t, n) : i.data[o];
            v(s, !0);
            const h = r[o] = r[11].createComment("");
            return La(i, r, h, s),
            Sr(h, r),
            bi(s) && (wu(i, r, s),
            jf(i, s, r)),
            null != n && bu(r, s),
            Za
        }
        function Ja() {
            let e = an();
            const t = Pt();
            return m() ? O() : (e = e.parent,
            v(e, !1)),
            t.firstCreatePass && (zo(t, e),
            Wr(e) && t.queries.elementEnd(e)),
            Ja
        }
        function Uu(e, t, n) {
            return Za(e, t, n),
            Ja(),
            Uu
        }
        function _h() {
            return Ie()
        }
        function ju(e) {
            return !!e && "function" == typeof e.then
        }
        function Dh(e) {
            return !!e && "function" == typeof e.subscribe
        }
        const Ch = Dh;
        function $u(e, t, n, r) {
            const i = Ie()
              , o = Pt()
              , s = an();
            return function wh(e, t, n, r, i, o, s, h) {
                const p = bi(r)
                  , S = e.firstCreatePass && rh(e)
                  , F = t[8]
                  , $ = nh(t);
                let J = !0;
                if (3 & r.type || h) {
                    const ze = x(r, t)
                      , Xe = h ? h(ze) : ze
                      , ct = $.length
                      , Pe = h ? Ut => h(fn(Ut[r.index])) : r.index;
                    let pt = null;
                    if (!h && p && (pt = function dD(e, t, n, r) {
                        const i = e.cleanup;
                        if (null != i)
                            for (let o = 0; o < i.length - 1; o += 2) {
                                const s = i[o];
                                if (s === n && i[o + 1] === r) {
                                    const h = t[7]
                                      , p = i[o + 2];
                                    return h.length > p ? h[p] : null
                                }
                                "string" == typeof s && (o += 2)
                            }
                        return null
                    }(e, t, i, r.index)),
                    null !== pt)
                        (pt.__ngLastListenerFn__ || pt).__ngNextListenerFn__ = o,
                        pt.__ngLastListenerFn__ = o,
                        J = !1;
                    else {
                        o = Mh(r, t, F, o, !1);
                        const Ut = n.listen(Xe, i, o);
                        $.push(o, Ut),
                        S && S.push(i, Pe, ct, ct + 1)
                    }
                } else
                    o = Mh(r, t, F, o, !1);
                const we = r.outputs;
                let Fe;
                if (J && null !== we && (Fe = we[i])) {
                    const ze = Fe.length;
                    if (ze)
                        for (let Xe = 0; Xe < ze; Xe += 2) {
                            const Dn = t[Fe[Xe]][Fe[Xe + 1]].subscribe(o)
                              , rs = $.length;
                            $.push(o, Dn),
                            S && S.push(i, r.index, rs, -(rs + 1))
                        }
                }
            }(o, i, i[11], s, e, t, 0, r),
            $u
        }
        function bh(e, t, n, r) {
            try {
                return !1 !== n(r)
            } catch (i) {
                return oh(e, i),
                !1
            }
        }
        function Mh(e, t, n, r, i) {
            return function o(s) {
                if (s === Function)
                    return r;
                Iu(2 & e.flags ? Ye(e.index, t) : t);
                let p = bh(t, 0, r, s)
                  , w = o.__ngNextListenerFn__;
                for (; w; )
                    p = bh(t, 0, w, s) && p,
                    w = w.__ngNextListenerFn__;
                return i && !1 === p && (s.preventDefault(),
                s.returnValue = !1),
                p
            }
        }
        function Th(e=1) {
            return function Da(e) {
                return (qe.lFrame.contextLView = function Ca(e, t) {
                    for (; e > 0; )
                        t = t[15],
                        e--;
                    return t
                }(e, qe.lFrame.contextLView))[8]
            }(e)
        }
        function fD(e, t) {
            let n = null;
            const r = function Nv(e) {
                const t = e.attrs;
                if (null != t) {
                    const n = t.indexOf(5);
                    if (0 == (1 & n))
                        return t[n + 1]
                }
                return null
            }(e);
            for (let i = 0; i < t.length; i++) {
                const o = t[i];
                if ("*" !== o) {
                    if (null === r ? pf(e, o, !0) : Lv(r, o))
                        return i
                } else
                    n = i
            }
            return n
        }
        function Sh(e) {
            const t = Ie()[16][6];
            if (!t.projection) {
                const r = t.projection = Tt(e ? e.length : 1, null)
                  , i = r.slice();
                let o = t.child;
                for (; null !== o; ) {
                    const s = e ? fD(o, e) : 0;
                    null !== s && (i[s] ? i[s].projectionNext = o : r[s] = o,
                    i[s] = o),
                    o = o.next
                }
            }
        }
        function Ah(e, t=0, n) {
            const r = Ie()
              , i = Pt()
              , o = vs(i, 22 + e, 16, null, n || null);
            null === o.projection && (o.projection = t),
            O(),
            64 != (64 & o.flags) && function Tv(e, t, n) {
                uf(t[11], 0, t, n, Zd(e, n, t), tf(n.parent || t[6], n, t))
            }(i, r, o)
        }
        function Gu(e, t, n) {
            return Xa(e, "", t, "", n),
            Gu
        }
        function Xa(e, t, n, r, i) {
            const o = Ie()
              , s = Cs(o, t, n, r);
            return s !== St && pi(Pt(), yn(), o, e, s, o[11], i, !1),
            Xa
        }
        function zu(e, t, n, r, i, o, s) {
            const h = Ie()
              , p = Es(h, t, n, r, i, o);
            return p !== St && pi(Pt(), yn(), h, e, p, h[11], s, !1),
            zu
        }
        function Lh(e, t, n, r, i) {
            const o = e[n + 1]
              , s = null === t;
            let h = r ? ki(o) : _o(o)
              , p = !1;
            for (; 0 !== h && (!1 === p || s); ) {
                const S = e[h + 1];
                gD(e[h], t) && (p = !0,
                e[h + 1] = r ? hu(S) : du(S)),
                h = r ? ki(S) : _o(S)
            }
            p && (e[n + 1] = r ? du(o) : hu(o))
        }
        function gD(e, t) {
            return null === e || null == t || (Array.isArray(e) ? e[1] : e) === t || !(!Array.isArray(e) || "string" != typeof t) && ko(e, t) >= 0
        }
        const Jn = {
            textEnd: 0,
            key: 0,
            keyEnd: 0,
            value: 0,
            valueEnd: 0
        };
        function kh(e) {
            return e.substring(Jn.key, Jn.keyEnd)
        }
        function mD(e) {
            return e.substring(Jn.value, Jn.valueEnd)
        }
        function Vh(e, t) {
            const n = Jn.textEnd;
            return n === t ? -1 : (t = Jn.keyEnd = function _D(e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32; )
                    t++;
                return t
            }(e, Jn.key = t, n),
            Is(e, t, n))
        }
        function Bh(e, t) {
            const n = Jn.textEnd;
            let r = Jn.key = Is(e, t, n);
            return n === r ? -1 : (r = Jn.keyEnd = function DD(e, t, n) {
                let r;
                for (; t < n && (45 === (r = e.charCodeAt(t)) || 95 === r || (-33 & r) >= 65 && (-33 & r) <= 90 || r >= 48 && r <= 57); )
                    t++;
                return t
            }(e, r, n),
            r = Uh(e, r, n),
            r = Jn.value = Is(e, r, n),
            r = Jn.valueEnd = function CD(e, t, n) {
                let r = -1
                  , i = -1
                  , o = -1
                  , s = t
                  , h = s;
                for (; s < n; ) {
                    const p = e.charCodeAt(s++);
                    if (59 === p)
                        return h;
                    34 === p || 39 === p ? h = s = jh(e, p, s, n) : t === s - 4 && 85 === o && 82 === i && 76 === r && 40 === p ? h = s = jh(e, 41, s, n) : p > 32 && (h = s),
                    o = i,
                    i = r,
                    r = -33 & p
                }
                return h
            }(e, r, n),
            Uh(e, r, n))
        }
        function Hh(e) {
            Jn.key = 0,
            Jn.keyEnd = 0,
            Jn.value = 0,
            Jn.valueEnd = 0,
            Jn.textEnd = e.length
        }
        function Is(e, t, n) {
            for (; t < n && e.charCodeAt(t) <= 32; )
                t++;
            return t
        }
        function Uh(e, t, n, r) {
            return (t = Is(e, t, n)) < n && t++,
            t
        }
        function jh(e, t, n, r) {
            let i = -1
              , o = n;
            for (; o < r; ) {
                const s = e.charCodeAt(o++);
                if (s == t && 92 !== i)
                    return o;
                i = 92 == s && 92 === i ? 0 : s
            }
            throw new Error
        }
        function Wu(e, t, n) {
            return Bi(e, t, n, !1),
            Wu
        }
        function Ku(e, t) {
            return Bi(e, t, null, !0),
            Ku
        }
        function Vi(e) {
            Hi(Wh, ED, e, !1)
        }
        function ED(e, t) {
            for (let n = function vD(e) {
                return Hh(e),
                Bh(e, Is(e, 0, Jn.textEnd))
            }(t); n >= 0; n = Bh(t, n))
                Wh(e, kh(t), mD(t))
        }
        function $h(e) {
            Hi(Tr, to, e, !0)
        }
        function to(e, t) {
            for (let n = function yD(e) {
                return Hh(e),
                Vh(e, Is(e, 0, Jn.textEnd))
            }(t); n >= 0; n = Vh(t, n))
                Tr(e, kh(t), !0)
        }
        function Bi(e, t, n, r) {
            const i = Ie()
              , o = Pt()
              , s = Vr(2);
            o.firstUpdatePass && zh(o, e, s, r),
            t !== St && Ar(i, s, t) && Kh(o, o.data[ir()], i, i[11], e, i[s + 1] = function ID(e, t) {
                return null == e || ("string" == typeof t ? e += t : "object" == typeof e && (e = je(yo(e)))),
                e
            }(t, n), r, s)
        }
        function Hi(e, t, n, r) {
            const i = Pt()
              , o = Vr(2);
            i.firstUpdatePass && zh(i, null, o, r);
            const s = Ie();
            if (n !== St && Ar(s, o, n)) {
                const h = i.data[ir()];
                if (qh(h, r) && !Gh(i, o)) {
                    let p = r ? h.classesWithoutHost : h.stylesWithoutHost;
                    null !== p && (n = Qe(p, n || "")),
                    Bu(i, h, s, n, r)
                } else
                    !function AD(e, t, n, r, i, o, s, h) {
                        i === St && (i = gt);
                        let p = 0
                          , w = 0
                          , S = 0 < i.length ? i[0] : null
                          , F = 0 < o.length ? o[0] : null;
                        for (; null !== S || null !== F; ) {
                            const $ = p < i.length ? i[p + 1] : void 0
                              , J = w < o.length ? o[w + 1] : void 0;
                            let Fe, we = null;
                            S === F ? (p += 2,
                            w += 2,
                            $ !== J && (we = F,
                            Fe = J)) : null === F || null !== S && S < F ? (p += 2,
                            we = S) : (w += 2,
                            we = F,
                            Fe = J),
                            null !== we && Kh(e, t, n, r, we, Fe, s, h),
                            S = p < i.length ? i[p] : null,
                            F = w < o.length ? o[w] : null
                        }
                    }(i, h, s, s[11], s[o + 1], s[o + 1] = function SD(e, t, n) {
                        if (null == n || "" === n)
                            return gt;
                        const r = []
                          , i = yo(n);
                        if (Array.isArray(i))
                            for (let o = 0; o < i.length; o++)
                                e(r, i[o], !0);
                        else if ("object" == typeof i)
                            for (const o in i)
                                i.hasOwnProperty(o) && e(r, o, i[o]);
                        else
                            "string" == typeof i && t(r, i);
                        return r
                    }(e, t, n), r, o)
            }
        }
        function Gh(e, t) {
            return t >= e.expandoStartIndex
        }
        function zh(e, t, n, r) {
            const i = e.data;
            if (null === i[n + 1]) {
                const o = i[ir()]
                  , s = Gh(e, n);
                qh(o, r) && null === t && !s && (t = !1),
                t = function wD(e, t, n, r) {
                    const i = Mo(e);
                    let o = r ? t.residualClasses : t.residualStyles;
                    if (null === i)
                        0 === (r ? t.classBindings : t.styleBindings) && (n = da(n = Yu(null, e, t, n, r), t.attrs, r),
                        o = null);
                    else {
                        const s = t.directiveStylingLast;
                        if (-1 === s || e[s] !== i)
                            if (n = Yu(i, e, t, n, r),
                            null === o) {
                                let p = function bD(e, t, n) {
                                    const r = n ? t.classBindings : t.styleBindings;
                                    if (0 !== _o(r))
                                        return e[ki(r)]
                                }(e, t, r);
                                void 0 !== p && Array.isArray(p) && (p = Yu(null, e, t, p[1], r),
                                p = da(p, t.attrs, r),
                                function MD(e, t, n, r) {
                                    e[ki(n ? t.classBindings : t.styleBindings)] = r
                                }(e, t, r, p))
                            } else
                                o = function TD(e, t, n) {
                                    let r;
                                    const i = t.directiveEnd;
                                    for (let o = 1 + t.directiveStylingLast; o < i; o++)
                                        r = da(r, e[o].hostAttrs, n);
                                    return da(r, t.attrs, n)
                                }(e, t, r)
                    }
                    return void 0 !== o && (r ? t.residualClasses = o : t.residualStyles = o),
                    n
                }(i, o, t, r),
                function hD(e, t, n, r, i, o) {
                    let s = o ? t.classBindings : t.styleBindings
                      , h = ki(s)
                      , p = _o(s);
                    e[r] = n;
                    let S, w = !1;
                    if (Array.isArray(n)) {
                        const F = n;
                        S = F[1],
                        (null === S || ko(F, S) > 0) && (w = !0)
                    } else
                        S = n;
                    if (i)
                        if (0 !== p) {
                            const $ = ki(e[h + 1]);
                            e[r + 1] = Ba($, h),
                            0 !== $ && (e[$ + 1] = fu(e[$ + 1], r)),
                            e[h + 1] = function i_(e, t) {
                                return 131071 & e | t << 17
                            }(e[h + 1], r)
                        } else
                            e[r + 1] = Ba(h, 0),
                            0 !== h && (e[h + 1] = fu(e[h + 1], r)),
                            h = r;
                    else
                        e[r + 1] = Ba(p, 0),
                        0 === h ? h = r : e[p + 1] = fu(e[p + 1], r),
                        p = r;
                    w && (e[r + 1] = du(e[r + 1])),
                    Lh(e, S, r, !0),
                    Lh(e, S, r, !1),
                    function pD(e, t, n, r, i) {
                        const o = i ? e.residualClasses : e.residualStyles;
                        null != o && "string" == typeof t && ko(o, t) >= 0 && (n[r + 1] = hu(n[r + 1]))
                    }(t, S, e, r, o),
                    s = Ba(h, p),
                    o ? t.classBindings = s : t.styleBindings = s
                }(i, o, t, n, s, r)
            }
        }
        function Yu(e, t, n, r, i) {
            let o = null;
            const s = n.directiveEnd;
            let h = n.directiveStylingLast;
            for (-1 === h ? h = n.directiveStart : h++; h < s && (o = t[h],
            r = da(r, o.hostAttrs, i),
            o !== e); )
                h++;
            return null !== e && (n.directiveStylingLast = h),
            r
        }
        function da(e, t, n) {
            const r = n ? 1 : 2;
            let i = -1;
            if (null !== t)
                for (let o = 0; o < t.length; o++) {
                    const s = t[o];
                    "number" == typeof s ? i = s : i === r && (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                    Tr(e, s, !!n || t[++o]))
                }
            return void 0 === e ? null : e
        }
        function Wh(e, t, n) {
            Tr(e, t, yo(n))
        }
        function Kh(e, t, n, r, i, o, s, h) {
            if (!(3 & t.type))
                return;
            const p = e.data
              , w = p[h + 1];
            el(function xf(e) {
                return 1 == (1 & e)
            }(w) ? Yh(p, t, n, i, _o(w), s) : void 0) || (el(o) || function Of(e) {
                return 2 == (2 & e)
            }(w) && (o = Yh(p, null, n, i, h, s)),
            function Av(e, t, n, r, i) {
                if (t)
                    i ? e.addClass(n, r) : e.removeClass(n, r);
                else {
                    let o = -1 === r.indexOf("-") ? void 0 : Ji.DashCase;
                    null == i ? e.removeStyle(n, r, o) : ("string" == typeof i && i.endsWith("!important") && (i = i.slice(0, -10),
                    o |= Ji.Important),
                    e.setStyle(n, r, i, o))
                }
            }(r, s, C(ir(), n), i, o))
        }
        function Yh(e, t, n, r, i, o) {
            const s = null === t;
            let h;
            for (; i > 0; ) {
                const p = e[i]
                  , w = Array.isArray(p)
                  , S = w ? p[1] : p
                  , F = null === S;
                let $ = n[i + 1];
                $ === St && ($ = F ? gt : void 0);
                let J = F ? mo($, r) : S === r ? $ : void 0;
                if (w && !el(J) && (J = mo(p, r)),
                el(J) && (h = J,
                s))
                    return h;
                const we = e[i + 1];
                i = s ? ki(we) : _o(we)
            }
            if (null !== t) {
                let p = o ? t.residualClasses : t.residualStyles;
                null != p && (h = mo(p, r))
            }
            return h
        }
        function el(e) {
            return void 0 !== e
        }
        function qh(e, t) {
            return 0 != (e.flags & (t ? 16 : 32))
        }
        function Qh(e, t="") {
            const n = Ie()
              , r = Pt()
              , i = e + 22
              , o = r.firstCreatePass ? vs(r, i, 1, t, null) : r.data[i]
              , s = n[i] = Xl(n[11], t);
            La(r, n, s, o),
            v(o, !1)
        }
        function qu(e) {
            return tl("", e, ""),
            qu
        }
        function tl(e, t, n) {
            const r = Ie()
              , i = Cs(r, e, t, n);
            return i !== St && Do(r, ir(), i),
            tl
        }
        function Qu(e, t, n, r, i) {
            const o = Ie()
              , s = Es(o, e, t, n, r, i);
            return s !== St && Do(o, ir(), s),
            Qu
        }
        function Zu(e, t, n) {
            const r = Ie();
            return Ar(r, kr(), t) && pi(Pt(), yn(), r, e, t, r[11], n, !0),
            Zu
        }
        function Ju(e, t, n) {
            const r = Ie();
            if (Ar(r, kr(), t)) {
                const o = Pt()
                  , s = yn();
                pi(o, s, r, e, t, function ih(e, t, n) {
                    return (null === e || tn(e)) && (n = function _(e) {
                        for (; Array.isArray(e); ) {
                            if ("object" == typeof e[1])
                                return e;
                            e = e[0]
                        }
                        return null
                    }(n[t.index])),
                    n[11]
                }(Mo(o.data), s, r), n, !0)
            }
            return Ju
        }
        const ts = void 0;
        var qD = ["en", [["a", "p"], ["AM", "PM"], ts], [["AM", "PM"], ts, ts], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], ts, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], ts, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", ts, "{1} 'at' {0}", ts], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function YD(e) {
            const n = Math.floor(Math.abs(e))
              , r = e.toString().replace(/^[^.]*\.?/, "").length;
            return 1 === n && 0 === r ? 1 : 5
        }
        ];
        let Ps = {};
        function Xu(e) {
            const t = function QD(e) {
                return e.toLowerCase().replace(/_/g, "-")
            }(e);
            let n = pp(t);
            if (n)
                return n;
            const r = t.split("-")[0];
            if (n = pp(r),
            n)
                return n;
            if ("en" === r)
                return qD;
            throw new le(701,!1)
        }
        function hp(e) {
            return Xu(e)[_t.PluralCase]
        }
        function pp(e) {
            return e in Ps || (Ps[e] = At.ng && At.ng.common && At.ng.common.locales && At.ng.common.locales[e]),
            Ps[e]
        }
        var _t = ( () => ((_t = _t || {})[_t.LocaleId = 0] = "LocaleId",
        _t[_t.DayPeriodsFormat = 1] = "DayPeriodsFormat",
        _t[_t.DayPeriodsStandalone = 2] = "DayPeriodsStandalone",
        _t[_t.DaysFormat = 3] = "DaysFormat",
        _t[_t.DaysStandalone = 4] = "DaysStandalone",
        _t[_t.MonthsFormat = 5] = "MonthsFormat",
        _t[_t.MonthsStandalone = 6] = "MonthsStandalone",
        _t[_t.Eras = 7] = "Eras",
        _t[_t.FirstDayOfWeek = 8] = "FirstDayOfWeek",
        _t[_t.WeekendRange = 9] = "WeekendRange",
        _t[_t.DateFormat = 10] = "DateFormat",
        _t[_t.TimeFormat = 11] = "TimeFormat",
        _t[_t.DateTimeFormat = 12] = "DateTimeFormat",
        _t[_t.NumberSymbols = 13] = "NumberSymbols",
        _t[_t.NumberFormats = 14] = "NumberFormats",
        _t[_t.CurrencyCode = 15] = "CurrencyCode",
        _t[_t.CurrencySymbol = 16] = "CurrencySymbol",
        _t[_t.CurrencyName = 17] = "CurrencyName",
        _t[_t.Currencies = 18] = "Currencies",
        _t[_t.Directionality = 19] = "Directionality",
        _t[_t.PluralCase = 20] = "PluralCase",
        _t[_t.ExtraData = 21] = "ExtraData",
        _t))();
        const ZD = ["zero", "one", "two", "few", "many"]
          , Os = "en-US"
          , nl = {
            marker: "element"
        }
          , rl = {
            marker: "ICU"
        };
        var Fn = ( () => ((Fn = Fn || {})[Fn.SHIFT = 2] = "SHIFT",
        Fn[Fn.APPEND_EAGERLY = 1] = "APPEND_EAGERLY",
        Fn[Fn.COMMENT = 2] = "COMMENT",
        Fn))();
        let gp = Os;
        function mp(e) {
            (function Ue(e, t) {
                null == e && We(t, e, null, "!=")
            }
            )(e, "Expected localeId to be defined"),
            "string" == typeof e && (gp = e.toLowerCase().replace(/_/g, "-"))
        }
        function yp(e, t, n) {
            const r = t.insertBeforeIndex
              , i = Array.isArray(r) ? r[0] : r;
            return null === i ? nf(e, 0, n) : fn(n[i])
        }
        function vp(e, t, n, r, i) {
            const o = t.insertBeforeIndex;
            if (Array.isArray(o)) {
                let s = r
                  , h = null;
                if (3 & t.type || (h = s,
                s = i),
                null !== s && 0 == (2 & t.flags))
                    for (let p = 1; p < o.length; p++)
                        Zo(e, s, n[o[p]], h, !1)
            }
        }
        function _p(e, t) {
            if (e.push(t),
            e.length > 1)
                for (let n = e.length - 2; n >= 0; n--) {
                    const r = e[n];
                    Dp(r) || tC(r, t) && null === nC(r) && rC(r, t.index)
                }
        }
        function Dp(e) {
            return !(64 & e.type)
        }
        function tC(e, t) {
            return Dp(t) || e.index > t.index
        }
        function nC(e) {
            const t = e.insertBeforeIndex;
            return Array.isArray(t) ? t[0] : t
        }
        function rC(e, t) {
            const n = e.insertBeforeIndex;
            Array.isArray(n) ? n[0] = t : (sf(yp, vp),
            e.insertBeforeIndex = t)
        }
        function fa(e, t) {
            const n = e.data[t];
            return null === n || "string" == typeof n ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value
        }
        function sC(e, t, n) {
            const r = Eu(e, n, 64, null, null);
            return _p(t, r),
            r
        }
        function il(e, t) {
            const n = t[e.currentCaseLViewIndex];
            return null === n ? n : n < 0 ? ~n : n
        }
        function Cp(e) {
            return e >>> 17
        }
        function Ep(e) {
            return (131070 & e) >>> 1
        }
        let ha = 0
          , pa = 0;
        function bp(e, t, n, r) {
            const i = n[11];
            let s, o = null;
            for (let h = 0; h < t.length; h++) {
                const p = t[h];
                if ("string" == typeof p) {
                    const w = t[++h];
                    null === n[w] && (n[w] = Xl(i, p))
                } else if ("number" == typeof p)
                    switch (1 & p) {
                    case 0:
                        const w = Cp(p);
                        let S, F;
                        if (null === o && (o = w,
                        s = Ra(i, r)),
                        w === o ? (S = r,
                        F = s) : (S = null,
                        F = fn(n[w])),
                        null !== F) {
                            const Fe = Ep(p);
                            Zo(i, F, n[Fe], S, !1);
                            const Xe = fa(e, Fe);
                            if (null !== Xe && "object" == typeof Xe) {
                                const ct = il(Xe, n);
                                null !== ct && bp(e, Xe.create[ct], n, n[Xe.anchorIdx])
                            }
                        }
                        break;
                    case 1:
                        const J = t[++h]
                          , we = t[++h];
                        Su(i, C(p >>> 1, n), null, null, J, we, null)
                    }
                else
                    switch (p) {
                    case rl:
                        const w = t[++h]
                          , S = t[++h];
                        null === n[S] && Sr(n[S] = gv(i, w), n);
                        break;
                    case nl:
                        const F = t[++h]
                          , $ = t[++h];
                        null === n[$] && Sr(n[$] = eu(i, F, null), n)
                    }
            }
        }
        function Mp(e, t, n, r, i) {
            for (let o = 0; o < n.length; o++) {
                const s = n[o]
                  , h = n[++o];
                if (s & i) {
                    let p = "";
                    for (let w = o + 1; w <= o + h; w++) {
                        const S = n[w];
                        if ("string" == typeof S)
                            p += S;
                        else if ("number" == typeof S)
                            if (S < 0)
                                p += ye(t[r - S]);
                            else {
                                const F = S >>> 2;
                                switch (3 & S) {
                                case 1:
                                    const $ = n[++w]
                                      , J = n[++w]
                                      , we = e.data[F];
                                    "string" == typeof we ? Su(t[11], t[F], null, we, $, p, J) : pi(e, we, t, $, p, t[11], J, !1);
                                    break;
                                case 0:
                                    const Fe = t[F];
                                    null !== Fe && Yd(t[11], Fe, p);
                                    break;
                                case 2:
                                    dC(e, fa(e, F), t, p);
                                    break;
                                case 3:
                                    Tp(e, fa(e, F), r, t)
                                }
                            }
                    }
                } else {
                    const p = n[o + 1];
                    if (p > 0 && 3 == (3 & p)) {
                        const S = fa(e, p >>> 2);
                        t[S.currentCaseLViewIndex] < 0 && Tp(e, S, r, t)
                    }
                }
                o += h
            }
        }
        function Tp(e, t, n, r) {
            let i = r[t.currentCaseLViewIndex];
            if (null !== i) {
                let o = ha;
                i < 0 && (i = r[t.currentCaseLViewIndex] = ~i,
                o = -1),
                Mp(e, r, t.update[i], n, o)
            }
        }
        function dC(e, t, n, r) {
            const i = function fC(e, t) {
                let n = e.cases.indexOf(t);
                if (-1 === n)
                    switch (e.type) {
                    case 1:
                        {
                            const r = function JD(e, t) {
                                const n = hp(t)(parseInt(e, 10))
                                  , r = ZD[n];
                                return void 0 !== r ? r : "other"
                            }(t, function eC() {
                                return gp
                            }());
                            n = e.cases.indexOf(r),
                            -1 === n && "other" !== r && (n = e.cases.indexOf("other"));
                            break
                        }
                    case 0:
                        n = e.cases.indexOf("other")
                    }
                return -1 === n ? null : n
            }(t, r);
            if (il(t, n) !== i && (Sp(e, t, n),
            n[t.currentCaseLViewIndex] = null === i ? null : ~i,
            null !== i)) {
                const s = n[t.anchorIdx];
                s && bp(e, t.create[i], n, s)
            }
        }
        function Sp(e, t, n) {
            let r = il(t, n);
            if (null !== r) {
                const i = t.remove[r];
                for (let o = 0; o < i.length; o++) {
                    const s = i[o];
                    if (s > 0) {
                        const h = C(s, n);
                        null !== h && lf(n[11], h)
                    } else
                        Sp(e, fa(e, ~s), n)
                }
            }
        }
        function hC() {
            const e = [];
            let n, r, t = -1;
            function o(h, p) {
                t = 0;
                const w = il(h, p);
                r = null !== w ? h.remove[w] : gt
            }
            function s() {
                if (t < r.length) {
                    const h = r[t++];
                    return h > 0 ? n[h] : (e.push(t, r),
                    o(n[1].data[~h], n),
                    s())
                }
                return 0 === e.length ? null : (r = e.pop(),
                t = e.pop(),
                s())
            }
            return function i(h, p) {
                for (n = p; e.length; )
                    e.pop();
                return o(h.value, p),
                s
            }
        }
        const ol = /\ufffd(\d+):?\d*\ufffd/gi
          , gC = /\ufffd(\d+)\ufffd/
          , Ip = /^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/
          , mC = /\ufffd\/?\*(\d+:\d+)\ufffd/gi
          , yC = /\ufffd(\/?[#*]\d+):?\d*\ufffd/gi
          , vC = /\uE500/g;
        function Pp(e, t, n, r, i, o, s) {
            const h = _s(e, r, 1, null);
            let p = h << Fn.SHIFT
              , w = E();
            t === w && (w = null),
            null === w && (p |= Fn.APPEND_EAGERLY),
            s && (p |= Fn.COMMENT,
            function fv(e) {
                void 0 === ql && (ql = e())
            }(hC)),
            i.push(p, null === o ? "" : o);
            const S = Eu(e, h, s ? 32 : 1, null === o ? "" : o, null);
            _p(n, S);
            const F = S.index;
            return v(S, !1),
            null !== w && t !== w && function oC(e, t) {
                let n = e.insertBeforeIndex;
                null === n ? (sf(yp, vp),
                n = e.insertBeforeIndex = [null, t]) : (function st(e, t, n) {
                    e != t && We(n, e, t, "==")
                }(Array.isArray(n), !0, "Expecting array here"),
                n.push(t))
            }(w, F),
            S
        }
        function CC(e, t, n, r, i, o, s) {
            const h = s.match(ol)
              , p = Pp(e, t, n, o, r, h ? null : s, !1);
            h && xs(i, s, p.index, null, 0, null)
        }
        function xs(e, t, n, r, i, o) {
            const s = e.length
              , h = s + 1;
            e.push(null, null);
            const p = s + 2
              , w = t.split(ol);
            let S = 0;
            for (let F = 0; F < w.length; F++) {
                const $ = w[F];
                if (1 & F) {
                    const J = i + parseInt($, 10);
                    e.push(-1 - J),
                    S |= Op(J)
                } else
                    "" !== $ && e.push($)
            }
            return e.push(n << 2 | (r ? 1 : 0)),
            r && e.push(r, o),
            e[s] = S,
            e[h] = e.length - p,
            S
        }
        function Op(e) {
            return 1 << Math.min(e, 31)
        }
        function xp(e) {
            let t, o, n = "", r = 0, i = !1;
            for (; null !== (t = mC.exec(e)); )
                i ? t[0] === `\ufffd/*${o}\ufffd` && (r = t.index,
                i = !1) : (n += e.substring(r, t.index + t[0].length),
                o = t[1],
                i = !0);
            return n += e.slice(r),
            n
        }
        function Np(e, t, n, r, i, o) {
            let s = 0;
            const h = {
                type: i.type,
                currentCaseLViewIndex: _s(e, t, 1, null),
                anchorIdx: o,
                cases: [],
                create: [],
                remove: [],
                update: []
            };
            (function IC(e, t, n) {
                e.push(Op(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2)
            }
            )(n, i, o),
            function iC(e, t, n) {
                const r = e.data[t];
                null === r ? e.data[t] = n : r.value = n
            }(e, o, h);
            const p = i.values;
            for (let w = 0; w < p.length; w++) {
                const S = p[w]
                  , F = [];
                for (let $ = 0; $ < S.length; $++) {
                    const J = S[$];
                    if ("string" != typeof J) {
                        const we = F.push(J) - 1;
                        S[$] = `\x3c!--\ufffd${we}\ufffd--\x3e`
                    }
                }
                s = SC(e, h, t, n, r, i.cases[w], S.join(""), F) | s
            }
            s && function PC(e, t, n) {
                e.push(t, 1, n << 2 | 3)
            }(n, s, o)
        }
        function TC(e) {
            const t = []
              , n = [];
            let r = 1
              , i = 0;
            const o = ec(e = e.replace(Ip, function(s, h, p) {
                return r = "select" === p ? 0 : 1,
                i = parseInt(h.slice(1), 10),
                ""
            }));
            for (let s = 0; s < o.length; ) {
                let h = o[s++].trim();
                1 === r && (h = h.replace(/\s*(?:=)?(\w+)\s*/, "$1")),
                h.length && t.push(h);
                const p = ec(o[s++]);
                t.length > n.length && n.push(p)
            }
            return {
                type: r,
                mainBinding: i,
                cases: t,
                values: n
            }
        }
        function ec(e) {
            if (!e)
                return [];
            let t = 0;
            const n = []
              , r = []
              , i = /[{}]/g;
            let o;
            for (i.lastIndex = 0; o = i.exec(e); ) {
                const h = o.index;
                if ("}" == o[0]) {
                    if (n.pop(),
                    0 == n.length) {
                        const p = e.substring(t, h);
                        Ip.test(p) ? r.push(TC(p)) : r.push(p),
                        t = h + 1
                    }
                } else {
                    if (0 == n.length) {
                        const p = e.substring(t, h);
                        r.push(p),
                        t = h + 1
                    }
                    n.push("{")
                }
            }
            const s = e.substring(t);
            return r.push(s),
            r
        }
        function SC(e, t, n, r, i, o, s, h) {
            const p = []
              , w = []
              , S = [];
            t.cases.push(o),
            t.create.push(p),
            t.remove.push(w),
            t.update.push(S);
            const $ = cd(sd()).getInertBodyElement(s)
              , J = Pl($) || $;
            return J ? Fp(e, t, n, r, p, w, S, J, i, h, 0) : 0
        }
        function Fp(e, t, n, r, i, o, s, h, p, w, S) {
            let F = 0
              , $ = h.firstChild;
            for (; $; ) {
                const J = _s(e, n, 1, null);
                switch ($.nodeType) {
                case Node.ELEMENT_NODE:
                    const we = $
                      , Fe = we.tagName.toLowerCase();
                    if (Sl.hasOwnProperty(Fe)) {
                        tc(i, nl, Fe, p, J),
                        e.data[J] = Fe;
                        const Pe = we.attributes;
                        for (let pt = 0; pt < Pe.length; pt++) {
                            const Ut = Pe.item(pt)
                              , Dn = Ut.name.toLowerCase();
                            Ut.value.match(ol) ? gd.hasOwnProperty(Dn) && xs(s, Ut.value, J, Ut.name, 0, Al[Dn] ? Zs : Il[Dn] ? dd : null) : OC(i, J, Ut)
                        }
                        F = Fp(e, t, n, r, i, o, s, $, J, w, S + 1) | F,
                        Rp(o, J, S)
                    }
                    break;
                case Node.TEXT_NODE:
                    const ze = $.textContent || ""
                      , Xe = ze.match(ol);
                    tc(i, null, Xe ? "" : ze, p, J),
                    Rp(o, J, S),
                    Xe && (F = xs(s, ze, J, null, 0, null) | F);
                    break;
                case Node.COMMENT_NODE:
                    const ct = gC.exec($.textContent || "");
                    if (ct) {
                        const pt = w[parseInt(ct[1], 10)];
                        tc(i, rl, "", p, J),
                        Np(e, n, r, p, pt, J),
                        AC(o, J, S)
                    }
                }
                $ = $.nextSibling
            }
            return F
        }
        function Rp(e, t, n) {
            0 === n && e.push(t)
        }
        function AC(e, t, n) {
            0 === n && (e.push(~t),
            e.push(t))
        }
        function tc(e, t, n, r, i) {
            null !== t && e.push(t),
            e.push(n, i, function aC(e, t, n) {
                return e | t << 17 | n << 1
            }(0, r, i))
        }
        function OC(e, t, n) {
            e.push(t << 1 | 1, n.name, n.value)
        }
        function kp(e, t, n=-1) {
            const r = Pt()
              , i = Ie()
              , o = 22 + e
              , s = Dt(r.consts, t)
              , h = E();
            r.firstCreatePass && function DC(e, t, n, r, i, o) {
                const s = E()
                  , h = []
                  , p = []
                  , w = [[]];
                i = function MC(e, t) {
                    if (function bC(e) {
                        return -1 === e
                    }(t))
                        return xp(e);
                    {
                        const n = e.indexOf(`:${t}\ufffd`) + 2 + t.toString().length
                          , r = e.search(new RegExp(`\ufffd\\/\\*\\d+:${t}\ufffd`));
                        return xp(e.substring(n, r))
                    }
                }(i, o);
                const S = function _C(e) {
                    return e.replace(vC, " ")
                }(i).split(yC);
                for (let F = 0; F < S.length; F++) {
                    let $ = S[F];
                    if (0 == (1 & F)) {
                        const J = ec($);
                        for (let we = 0; we < J.length; we++) {
                            let Fe = J[we];
                            if (0 == (1 & we)) {
                                const ze = Fe;
                                "" !== ze && CC(e, s, w[0], h, p, n, ze)
                            } else {
                                const ze = Fe;
                                if ("object" != typeof ze)
                                    throw new Error(`Unable to parse ICU expression in "${i}" message.`);
                                Np(e, n, p, t, ze, Pp(e, s, w[0], n, h, "", !0).index)
                            }
                        }
                    } else {
                        const J = 47 === $.charCodeAt(0)
                          , Fe = ($.charCodeAt(J ? 1 : 0),
                        22 + Number.parseInt($.substring(J ? 2 : 1)));
                        if (J)
                            w.shift(),
                            v(E(), !1);
                        else {
                            const ze = sC(e, w[0], Fe);
                            w.unshift([]),
                            v(ze, !0)
                        }
                    }
                }
                e.data[r] = {
                    create: h,
                    update: p
                }
            }(r, null === h ? 0 : h.index, i, o, s, n);
            const p = r.data[o]
              , S = Jd(r, h === i[6] ? null : h, i);
            (function cC(e, t, n, r) {
                const i = e[11];
                for (let o = 0; o < t.length; o++) {
                    const s = t[o++]
                      , h = t[o]
                      , p = (s & Fn.COMMENT) === Fn.COMMENT
                      , w = (s & Fn.APPEND_EAGERLY) === Fn.APPEND_EAGERLY
                      , S = s >>> Fn.SHIFT;
                    let F = e[S];
                    null === F && (F = e[S] = p ? i.createComment(h) : Xl(i, h)),
                    w && null !== n && Zo(i, n, F, r, !1)
                }
            }
            )(i, p.create, S, h && 8 & h.type ? i[h.index] : null),
            bo(!0)
        }
        function Bp(e, t, n) {
            kp(e, t, n),
            function Vp() {
                bo(!1)
            }()
        }
        function nc(e) {
            return function lC(e) {
                e && (ha |= 1 << Math.min(pa, 31)),
                pa++
            }(Ar(Ie(), kr(), e)),
            nc
        }
        function Hp(e) {
            !function uC(e, t, n) {
                if (pa > 0) {
                    const r = e.data[n];
                    Mp(e, t, Array.isArray(r) ? r : r.update, Ln() - pa - 1, ha)
                }
                ha = 0,
                pa = 0
            }(Pt(), Ie(), e + 22)
        }
        function rc(e, t, n, r, i) {
            if (e = Be(e),
            Array.isArray(e))
                for (let o = 0; o < e.length; o++)
                    rc(e[o], t, n, r, i);
            else {
                const o = Pt()
                  , s = Ie();
                let h = qo(e) ? e : Be(e.provide)
                  , p = Ad(e);
                const w = an()
                  , S = 1048575 & w.providerIndexes
                  , F = w.directiveStart
                  , $ = w.providerIndexes >> 20;
                if (qo(e) || !e.multi) {
                    const J = new U(p,i,ys)
                      , we = oc(h, t, i ? S : S + $, F);
                    -1 === we ? (Rt(et(w, s), o, h),
                    ic(o, e, t.length),
                    t.push(h),
                    w.directiveStart++,
                    w.directiveEnd++,
                    i && (w.providerIndexes += 1048576),
                    n.push(J),
                    s.push(J)) : (n[we] = J,
                    s[we] = J)
                } else {
                    const J = oc(h, t, S + $, F)
                      , we = oc(h, t, S, S + $)
                      , Fe = J >= 0 && n[J]
                      , ze = we >= 0 && n[we];
                    if (i && !ze || !i && !Fe) {
                        Rt(et(w, s), o, h);
                        const Xe = function zC(e, t, n, r, i) {
                            const o = new U(e,n,ys);
                            return o.multi = [],
                            o.index = t,
                            o.componentProviders = 0,
                            Up(o, i, r && !n),
                            o
                        }(i ? GC : $C, n.length, i, r, p);
                        !i && ze && (n[we].providerFactory = Xe),
                        ic(o, e, t.length, 0),
                        t.push(h),
                        w.directiveStart++,
                        w.directiveEnd++,
                        i && (w.providerIndexes += 1048576),
                        n.push(Xe),
                        s.push(Xe)
                    } else
                        ic(o, e, J > -1 ? J : we, Up(n[i ? we : J], p, !i && r));
                    !i && r && ze && n[we].componentProviders++
                }
            }
        }
        function ic(e, t, n, r) {
            const i = qo(t)
              , o = function Ey(e) {
                return !!e.useClass
            }(t);
            if (i || o) {
                const p = (o ? Be(t.useClass) : t).prototype.ngOnDestroy;
                if (p) {
                    const w = e.destroyHooks || (e.destroyHooks = []);
                    if (!i && t.multi) {
                        const S = w.indexOf(n);
                        -1 === S ? w.push(n, [r, p]) : w[S + 1].push(r, p)
                    } else
                        w.push(n, p)
                }
            }
        }
        function Up(e, t, n) {
            return n && e.componentProviders++,
            e.multi.push(t) - 1
        }
        function oc(e, t, n, r) {
            for (let i = n; i < r; i++)
                if (t[i] === e)
                    return i;
            return -1
        }
        function $C(e, t, n, r) {
            return sc(this.multi, [])
        }
        function GC(e, t, n, r) {
            const i = this.multi;
            let o;
            if (this.providerFactory) {
                const s = this.providerFactory.componentProviders
                  , h = ti(n, n[1], this.providerFactory.index, r);
                o = h.slice(0, s),
                sc(i, o);
                for (let p = s; p < h.length; p++)
                    o.push(h[p])
            } else
                o = [],
                sc(i, o);
            return o
        }
        function sc(e, t) {
            for (let n = 0; n < e.length; n++)
                t.push((0,
                e[n])());
            return t
        }
        function jp(e, t=[]) {
            return n => {
                n.providersResolver = (r, i) => function jC(e, t, n) {
                    const r = Pt();
                    if (r.firstCreatePass) {
                        const i = tn(e);
                        rc(n, r.data, r.blueprint, i, !0),
                        rc(t, r.data, r.blueprint, i, !1)
                    }
                }(r, i ? i(e) : e, t)
            }
        }
        class Ns {
        }
        class $p {
        }
        function WC(e, t) {
            return new Gp(e,t ?? null)
        }
        class Gp extends Ns {
            constructor(t, n) {
                super(),
                this._parent = n,
                this._bootstrapComponents = [],
                this.destroyCbs = [],
                this.componentFactoryResolver = new Nu(this);
                const r = Y(t);
                this._bootstrapComponents = vo(r.bootstrap),
                this._r3Injector = Ef(t, n, [{
                    provide: Ns,
                    useValue: this
                }, {
                    provide: ea,
                    useValue: this.componentFactoryResolver
                }], je(t), new Set(["environment"])),
                this._r3Injector.resolveInjectorInitializers(),
                this.instance = this._r3Injector.get(t)
            }
            get injector() {
                return this._r3Injector
            }
            destroy() {
                const t = this._r3Injector;
                !t.destroyed && t.destroy(),
                this.destroyCbs.forEach(n => n()),
                this.destroyCbs = null
            }
            onDestroy(t) {
                this.destroyCbs.push(t)
            }
        }
        class ac extends $p {
            constructor(t) {
                super(),
                this.moduleType = t
            }
            create(t) {
                return new Gp(this.moduleType,t)
            }
        }
        class KC extends Ns {
            constructor(t, n, r) {
                super(),
                this.componentFactoryResolver = new Nu(this),
                this.instance = null;
                const i = new Sd([...t, {
                    provide: Ns,
                    useValue: this
                }, {
                    provide: ea,
                    useValue: this.componentFactoryResolver
                }],n || Fa(),r,new Set(["environment"]));
                this.injector = i,
                i.resolveInjectorInitializers()
            }
            destroy() {
                this.injector.destroy()
            }
            onDestroy(t) {
                this.injector.onDestroy(t)
            }
        }
        function lc(e, t, n=null) {
            return new KC(e,t,n).injector
        }
        function Zp(e, t, n) {
            const r = hn() + e
              , i = Ie();
            return i[r] === St ? eo(i, r, n ? t.call(n) : t()) : ca(i, r)
        }
        function Jp(e, t, n, r) {
            return ig(Ie(), hn(), e, t, n, r)
        }
        function Xp(e, t, n, r, i) {
            return og(Ie(), hn(), e, t, n, r, i)
        }
        function eg(e, t, n, r, i, o) {
            return function sg(e, t, n, r, i, o, s, h) {
                const p = t + n;
                return Ya(e, p, i, o, s) ? eo(e, p + 3, h ? r.call(h, i, o, s) : r(i, o, s)) : ma(e, p + 3)
            }(Ie(), hn(), e, t, n, r, i, o)
        }
        function tg(e, t, n, r, i, o, s) {
            return function ag(e, t, n, r, i, o, s, h, p) {
                const w = t + n;
                return wi(e, w, i, o, s, h) ? eo(e, w + 4, p ? r.call(p, i, o, s, h) : r(i, o, s, h)) : ma(e, w + 4)
            }(Ie(), hn(), e, t, n, r, i, o, s)
        }
        function ng(e, t, n, r, i, o, s, h, p, w) {
            const S = hn() + e
              , F = Ie();
            let $ = wi(F, S, n, r, i, o);
            return Ya(F, S + 4, s, h, p) || $ ? eo(F, S + 7, w ? t.call(w, n, r, i, o, s, h, p) : t(n, r, i, o, s, h, p)) : ca(F, S + 7)
        }
        function rg(e, t, n, r) {
            return function lg(e, t, n, r, i, o) {
                let s = t + n
                  , h = !1;
                for (let p = 0; p < i.length; p++)
                    Ar(e, s++, i[p]) && (h = !0);
                return h ? eo(e, s, r.apply(o, i)) : ma(e, s)
            }(Ie(), hn(), e, t, n, r)
        }
        function ma(e, t) {
            const n = e[t];
            return n === St ? void 0 : n
        }
        function ig(e, t, n, r, i, o) {
            const s = t + n;
            return Ar(e, s, i) ? eo(e, s + 1, o ? r.call(o, i) : r(i)) : ma(e, s + 1)
        }
        function og(e, t, n, r, i, o, s) {
            const h = t + n;
            return es(e, h, i, o) ? eo(e, h + 2, s ? r.call(s, i, o) : r(i, o)) : ma(e, h + 2)
        }
        function ug(e, t) {
            const n = Pt();
            let r;
            const i = e + 22;
            n.firstCreatePass ? (r = function aE(e, t) {
                if (t)
                    for (let n = t.length - 1; n >= 0; n--) {
                        const r = t[n];
                        if (e === r.name)
                            return r
                    }
            }(t, n.pipeRegistry),
            n.data[i] = r,
            r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(i, r.onDestroy)) : r = n.data[i];
            const o = r.factory || (r.factory = Er(r.type))
              , s = se(ys);
            try {
                const h = or(!1)
                  , p = o();
                return or(h),
                function lD(e, t, n, r) {
                    n >= e.data.length && (e.data[n] = null,
                    e.blueprint[n] = null),
                    t[n] = r
                }(n, Ie(), i, p),
                p
            } finally {
                se(s)
            }
        }
        function cg(e, t, n) {
            const r = e + 22
              , i = Ie()
              , o = Te(i, r);
            return ya(i, r) ? ig(i, hn(), t, o.transform, n, o) : o.transform(n)
        }
        function dg(e, t, n, r) {
            const i = e + 22
              , o = Ie()
              , s = Te(o, i);
            return ya(o, i) ? og(o, hn(), t, s.transform, n, r, s) : s.transform(n, r)
        }
        function ya(e, t) {
            return e[1].data[t].pure
        }
        function cc(e) {
            return t => {
                setTimeout(e, void 0, t)
            }
        }
        const no = class dE extends Ce.x {
            constructor(t=!1) {
                super(),
                this.__isAsync = t
            }
            emit(t) {
                super.next(t)
            }
            subscribe(t, n, r) {
                let i = t
                  , o = n || ( () => null)
                  , s = r;
                if (t && "object" == typeof t) {
                    const p = t;
                    i = p.next?.bind(p),
                    o = p.error?.bind(p),
                    s = p.complete?.bind(p)
                }
                this.__isAsync && (o = cc(o),
                i && (i = cc(i)),
                s && (s = cc(s)));
                const h = super.subscribe({
                    next: i,
                    error: o,
                    complete: s
                });
                return t instanceof Oe.w0 && t.add(h),
                h
            }
        }
        ;
        function fE() {
            return this._results[Xo()]()
        }
        class dc {
            constructor(t=!1) {
                this._emitDistinctChangesOnly = t,
                this.dirty = !0,
                this._results = [],
                this._changesDetected = !1,
                this._changes = null,
                this.length = 0,
                this.first = void 0,
                this.last = void 0;
                const n = Xo()
                  , r = dc.prototype;
                r[n] || (r[n] = fE)
            }
            get changes() {
                return this._changes || (this._changes = new no)
            }
            get(t) {
                return this._results[t]
            }
            map(t) {
                return this._results.map(t)
            }
            filter(t) {
                return this._results.filter(t)
            }
            find(t) {
                return this._results.find(t)
            }
            reduce(t, n) {
                return this._results.reduce(t, n)
            }
            forEach(t) {
                this._results.forEach(t)
            }
            some(t) {
                return this._results.some(t)
            }
            toArray() {
                return this._results.slice()
            }
            toString() {
                return this._results.toString()
            }
            reset(t, n) {
                const r = this;
                r.dirty = !1;
                const i = R(t);
                (this._changesDetected = !function A(e, t, n) {
                    if (e.length !== t.length)
                        return !1;
                    for (let r = 0; r < e.length; r++) {
                        let i = e[r]
                          , o = t[r];
                        if (n && (i = n(i),
                        o = n(o)),
                        o !== i)
                            return !1
                    }
                    return !0
                }(r._results, i, n)) && (r._results = i,
                r.length = i.length,
                r.last = i[this.length - 1],
                r.first = i[0])
            }
            notifyOnChanges() {
                this._changes && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this)
            }
            setDirty() {
                this.dirty = !0
            }
            destroy() {
                this.changes.complete(),
                this.changes.unsubscribe()
            }
        }
        let va = ( () => {
            class e {
            }
            return e.__NG_ELEMENT_ID__ = gE,
            e
        }
        )();
        const hE = va
          , pE = class extends hE {
            constructor(t, n, r) {
                super(),
                this._declarationLView = t,
                this._declarationTContainer = n,
                this.elementRef = r
            }
            createEmbeddedView(t, n) {
                const r = this._declarationTContainer.tViews
                  , i = ja(this._declarationLView, r, t, 16, null, r.declTNode, null, null, null, null, n || null);
                i[17] = this._declarationLView[this._declarationTContainer.index];
                const s = this._declarationLView[19];
                return null !== s && (i[19] = s.createEmbeddedView(r)),
                $a(r, i, t),
                new aa(i)
            }
        }
        ;
        function gE() {
            return sl(an(), Ie())
        }
        function sl(e, t) {
            return 4 & e.type ? new pE(t,e,hs(e, t)) : null
        }
        let al = ( () => {
            class e {
            }
            return e.__NG_ELEMENT_ID__ = mE,
            e
        }
        )();
        function mE() {
            return pg(an(), Ie())
        }
        const yE = al
          , fg = class extends yE {
            constructor(t, n, r) {
                super(),
                this._lContainer = t,
                this._hostTNode = n,
                this._hostLView = r
            }
            get element() {
                return hs(this._hostTNode, this._hostLView)
            }
            get injector() {
                return new Oo(this._hostTNode,this._hostLView)
            }
            get parentInjector() {
                const t = Nt(this._hostTNode, this._hostLView);
                if (Nn(t)) {
                    const n = _n(t, this._hostLView)
                      , r = Br(t);
                    return new Oo(n[1].data[r + 8],n)
                }
                return new Oo(null,this._hostLView)
            }
            clear() {
                for (; this.length > 0; )
                    this.remove(this.length - 1)
            }
            get(t) {
                const n = hg(this._lContainer);
                return null !== n && n[t] || null
            }
            get length() {
                return this._lContainer.length - 10
            }
            createEmbeddedView(t, n, r) {
                let i, o;
                "number" == typeof r ? i = r : null != r && (i = r.index,
                o = r.injector);
                const s = t.createEmbeddedView(n || {}, o);
                return this.insert(s, i),
                s
            }
            createComponent(t, n, r, i, o) {
                const s = t && !function g(e) {
                    return "function" == typeof e
                }(t);
                let h;
                if (s)
                    h = n;
                else {
                    const F = n || {};
                    h = F.index,
                    r = F.injector,
                    i = F.projectableNodes,
                    o = F.environmentInjector || F.ngModuleRef
                }
                const p = s ? t : new la(W(t))
                  , w = r || this.parentInjector;
                if (!o && null == p.ngModule) {
                    const $ = (s ? w : this.parentInjector).get(Qo, null);
                    $ && (o = $)
                }
                const S = p.create(w, i, void 0, o);
                return this.insert(S.hostView, h),
                S
            }
            insert(t, n) {
                const r = t._lView
                  , i = r[1];
                if (function zt(e) {
                    return rr(e[3])
                }(r)) {
                    const S = this.indexOf(t);
                    if (-1 !== S)
                        this.detach(S);
                    else {
                        const F = r[3]
                          , $ = new fg(F,F[6],F[3]);
                        $.detach($.indexOf(t))
                    }
                }
                const o = this._adjustIndex(n)
                  , s = this._lContainer;
                !function Dv(e, t, n, r) {
                    const i = 10 + r
                      , o = n.length;
                    r > 0 && (n[i - 1][4] = t),
                    r < o - 10 ? (t[4] = n[i],
                    ge(n, 10 + r, t)) : (n.push(t),
                    t[4] = null),
                    t[3] = n;
                    const s = t[17];
                    null !== s && n !== s && function Cv(e, t) {
                        const n = e[9];
                        t[16] !== t[3][3][16] && (e[2] = !0),
                        null === n ? e[9] = [t] : n.push(t)
                    }(s, t);
                    const h = t[19];
                    null !== h && h.insertView(e),
                    t[2] |= 64
                }(i, r, s, o);
                const h = iu(o, s)
                  , p = r[11]
                  , w = Ra(p, s[7]);
                return null !== w && function yv(e, t, n, r, i, o) {
                    r[0] = i,
                    r[6] = t,
                    oa(e, r, n, 1, i, o)
                }(i, s[6], p, r, w, h),
                t.attachToViewContainerRef(),
                ge(fc(s), o, t),
                t
            }
            move(t, n) {
                return this.insert(t, n)
            }
            indexOf(t) {
                const n = hg(this._lContainer);
                return null !== n ? n.indexOf(t) : -1
            }
            remove(t) {
                const n = this._adjustIndex(t, -1)
                  , r = tu(this._lContainer, n);
                r && (Ge(fc(this._lContainer), n),
                Qd(r[1], r))
            }
            detach(t) {
                const n = this._adjustIndex(t, -1)
                  , r = tu(this._lContainer, n);
                return r && null != Ge(fc(this._lContainer), n) ? new aa(r) : null
            }
            _adjustIndex(t, n=0) {
                return t ?? this.length + n
            }
        }
        ;
        function hg(e) {
            return e[8]
        }
        function fc(e) {
            return e[8] || (e[8] = [])
        }
        function pg(e, t) {
            let n;
            const r = t[e.index];
            if (rr(r))
                n = r;
            else {
                let i;
                if (8 & e.type)
                    i = fn(r);
                else {
                    const o = t[11];
                    i = o.createComment("");
                    const s = x(e, t);
                    Zo(o, Ra(o, s), i, function Mv(e, t) {
                        return e.nextSibling(t)
                    }(o, s), !1)
                }
                t[e.index] = n = Xf(r, t, i, e),
                Ga(t, n)
            }
            return new fg(n,e,t)
        }
        class hc {
            constructor(t) {
                this.queryList = t,
                this.matches = null
            }
            clone() {
                return new hc(this.queryList)
            }
            setDirty() {
                this.queryList.setDirty()
            }
        }
        class pc {
            constructor(t=[]) {
                this.queries = t
            }
            createEmbeddedView(t) {
                const n = t.queries;
                if (null !== n) {
                    const r = null !== t.contentQueries ? t.contentQueries[0] : n.length
                      , i = [];
                    for (let o = 0; o < r; o++) {
                        const s = n.getByIndex(o);
                        i.push(this.queries[s.indexInDeclarationView].clone())
                    }
                    return new pc(i)
                }
                return null
            }
            insertView(t) {
                this.dirtyQueriesWithMatches(t)
            }
            detachView(t) {
                this.dirtyQueriesWithMatches(t)
            }
            dirtyQueriesWithMatches(t) {
                for (let n = 0; n < this.queries.length; n++)
                    null !== wg(t, n).matches && this.queries[n].setDirty()
            }
        }
        class gg {
            constructor(t, n, r=null) {
                this.predicate = t,
                this.flags = n,
                this.read = r
            }
        }
        class gc {
            constructor(t=[]) {
                this.queries = t
            }
            elementStart(t, n) {
                for (let r = 0; r < this.queries.length; r++)
                    this.queries[r].elementStart(t, n)
            }
            elementEnd(t) {
                for (let n = 0; n < this.queries.length; n++)
                    this.queries[n].elementEnd(t)
            }
            embeddedTView(t) {
                let n = null;
                for (let r = 0; r < this.length; r++) {
                    const i = null !== n ? n.length : 0
                      , o = this.getByIndex(r).embeddedTView(t, i);
                    o && (o.indexInDeclarationView = r,
                    null !== n ? n.push(o) : n = [o])
                }
                return null !== n ? new gc(n) : null
            }
            template(t, n) {
                for (let r = 0; r < this.queries.length; r++)
                    this.queries[r].template(t, n)
            }
            getByIndex(t) {
                return this.queries[t]
            }
            get length() {
                return this.queries.length
            }
            track(t) {
                this.queries.push(t)
            }
        }
        class mc {
            constructor(t, n=-1) {
                this.metadata = t,
                this.matches = null,
                this.indexInDeclarationView = -1,
                this.crossesNgTemplate = !1,
                this._appliesToNextNode = !0,
                this._declarationNodeIndex = n
            }
            elementStart(t, n) {
                this.isApplyingToNode(n) && this.matchTNode(t, n)
            }
            elementEnd(t) {
                this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
            }
            template(t, n) {
                this.elementStart(t, n)
            }
            embeddedTView(t, n) {
                return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0,
                this.addMatch(-t.index, n),
                new mc(this.metadata)) : null
            }
            isApplyingToNode(t) {
                if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
                    const n = this._declarationNodeIndex;
                    let r = t.parent;
                    for (; null !== r && 8 & r.type && r.index !== n; )
                        r = r.parent;
                    return n === (null !== r ? r.index : -1)
                }
                return this._appliesToNextNode
            }
            matchTNode(t, n) {
                const r = this.metadata.predicate;
                if (Array.isArray(r))
                    for (let i = 0; i < r.length; i++) {
                        const o = r[i];
                        this.matchTNodeWithReadOption(t, n, DE(n, o)),
                        this.matchTNodeWithReadOption(t, n, Mn(n, t, o, !1, !1))
                    }
                else
                    r === va ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Mn(n, t, r, !1, !1))
            }
            matchTNodeWithReadOption(t, n, r) {
                if (null !== r) {
                    const i = this.metadata.read;
                    if (null !== i)
                        if (i === ta || i === al || i === va && 4 & n.type)
                            this.addMatch(n.index, -2);
                        else {
                            const o = Mn(n, t, i, !1, !1);
                            null !== o && this.addMatch(n.index, o)
                        }
                    else
                        this.addMatch(n.index, r)
                }
            }
            addMatch(t, n) {
                null === this.matches ? this.matches = [t, n] : this.matches.push(t, n)
            }
        }
        function DE(e, t) {
            const n = e.localNames;
            if (null !== n)
                for (let r = 0; r < n.length; r += 2)
                    if (n[r] === t)
                        return n[r + 1];
            return null
        }
        function EE(e, t, n, r) {
            return -1 === n ? function CE(e, t) {
                return 11 & e.type ? hs(e, t) : 4 & e.type ? sl(e, t) : null
            }(t, e) : -2 === n ? function wE(e, t, n) {
                return n === ta ? hs(t, e) : n === va ? sl(t, e) : n === al ? pg(t, e) : void 0
            }(e, t, r) : ti(e, e[1], n, t)
        }
        function mg(e, t, n, r) {
            const i = t[19].queries[r];
            if (null === i.matches) {
                const o = e.data
                  , s = n.matches
                  , h = [];
                for (let p = 0; p < s.length; p += 2) {
                    const w = s[p];
                    h.push(w < 0 ? null : EE(t, o[w], s[p + 1], n.metadata.read))
                }
                i.matches = h
            }
            return i.matches
        }
        function yc(e, t, n, r) {
            const i = e.queries.getByIndex(n)
              , o = i.matches;
            if (null !== o) {
                const s = mg(e, t, i, n);
                for (let h = 0; h < o.length; h += 2) {
                    const p = o[h];
                    if (p > 0)
                        r.push(s[h / 2]);
                    else {
                        const w = o[h + 1]
                          , S = t[-p];
                        for (let F = 10; F < S.length; F++) {
                            const $ = S[F];
                            $[17] === $[3] && yc($[1], $, w, r)
                        }
                        if (null !== S[9]) {
                            const F = S[9];
                            for (let $ = 0; $ < F.length; $++) {
                                const J = F[$];
                                yc(J[1], J, w, r)
                            }
                        }
                    }
                }
            }
            return r
        }
        function yg(e) {
            const t = Ie()
              , n = Pt()
              , r = os();
            $o(r + 1);
            const i = wg(n, r);
            if (e.dirty && Yt(t) === (2 == (2 & i.metadata.flags))) {
                if (null === i.matches)
                    e.reset([]);
                else {
                    const o = i.crossesNgTemplate ? yc(n, t, r, []) : mg(n, t, i, r);
                    e.reset(o, Fy),
                    e.notifyOnChanges()
                }
                return !0
            }
            return !1
        }
        function vg(e, t, n) {
            const r = Pt();
            r.firstCreatePass && (Eg(r, new gg(e,t,n), -1),
            2 == (2 & t) && (r.staticViewQueries = !0)),
            Cg(r, Ie(), t)
        }
        function _g(e, t, n, r) {
            const i = Pt();
            if (i.firstCreatePass) {
                const o = an();
                Eg(i, new gg(t,n,r), o.index),
                function ME(e, t) {
                    const n = e.contentQueries || (e.contentQueries = []);
                    t !== (n.length ? n[n.length - 1] : -1) && n.push(e.queries.length - 1, t)
                }(i, e),
                2 == (2 & n) && (i.staticContentQueries = !0)
            }
            Cg(i, Ie(), n)
        }
        function Dg() {
            return function bE(e, t) {
                return e[19].queries[t].queryList
            }(Ie(), os())
        }
        function Cg(e, t, n) {
            const r = new dc(4 == (4 & n));
            Gf(e, t, r, r.destroy),
            null === t[19] && (t[19] = new pc),
            t[19].queries.push(new hc(r))
        }
        function Eg(e, t, n) {
            null === e.queries && (e.queries = new gc),
            e.queries.track(new mc(t,n))
        }
        function wg(e, t) {
            return e.queries.getByIndex(t)
        }
        function bg(e, t) {
            return sl(e, t)
        }
        function Rs(e) {
            const t = W(e) || H(e) || L(e);
            return null !== t && t.standalone
        }
        function ul(...e) {}
        const $g = new rn("Application Initializer");
        let cl = ( () => {
            class e {
                constructor(n) {
                    this.appInits = n,
                    this.resolve = ul,
                    this.reject = ul,
                    this.initialized = !1,
                    this.done = !1,
                    this.donePromise = new Promise( (r, i) => {
                        this.resolve = r,
                        this.reject = i
                    }
                    )
                }
                runInitializers() {
                    if (this.initialized)
                        return;
                    const n = []
                      , r = () => {
                        this.done = !0,
                        this.resolve()
                    }
                    ;
                    if (this.appInits)
                        for (let i = 0; i < this.appInits.length; i++) {
                            const o = this.appInits[i]();
                            if (ju(o))
                                n.push(o);
                            else if (Ch(o)) {
                                const s = new Promise( (h, p) => {
                                    o.subscribe({
                                        complete: h,
                                        error: p
                                    })
                                }
                                );
                                n.push(s)
                            }
                        }
                    Promise.all(n).then( () => {
                        r()
                    }
                    ).catch(i => {
                        this.reject(i)
                    }
                    ),
                    0 === n.length && r(),
                    this.initialized = !0
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(zn($g, 8))
            }
            ,
            e.\u0275prov = jt({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        const Gg = new rn("AppId",{
            providedIn: "root",
            factory: function zg() {
                return `${Ec()}${Ec()}${Ec()}`
            }
        });
        function Ec() {
            return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }
        const Wg = new rn("Platform Initializer")
          , zE = new rn("Platform ID",{
            providedIn: "platform",
            factory: () => "unknown"
        })
          , Kg = new rn("appBootstrapListener")
          , WE = new rn("AnimationModuleType");
        let KE = ( () => {
            class e {
                log(n) {
                    console.log(n)
                }
                warn(n) {
                    console.warn(n)
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275prov = jt({
                token: e,
                factory: e.\u0275fac,
                providedIn: "platform"
            }),
            e
        }
        )();
        const dl = new rn("LocaleId",{
            providedIn: "root",
            factory: () => Jc(dl, ee.Optional | ee.SkipSelf) || function YE() {
                return typeof $localize < "u" && $localize.locale || Os
            }()
        })
          , qE = new rn("DefaultCurrencyCode",{
            providedIn: "root",
            factory: () => "USD"
        });
        class QE {
            constructor(t, n) {
                this.ngModuleFactory = t,
                this.componentFactories = n
            }
        }
        let ZE = ( () => {
            class e {
                compileModuleSync(n) {
                    return new ac(n)
                }
                compileModuleAsync(n) {
                    return Promise.resolve(this.compileModuleSync(n))
                }
                compileModuleAndAllComponentsSync(n) {
                    const r = this.compileModuleSync(n)
                      , o = vo(Y(n).declarations).reduce( (s, h) => {
                        const p = W(h);
                        return p && s.push(new la(p)),
                        s
                    }
                    , []);
                    return new QE(r,o)
                }
                compileModuleAndAllComponentsAsync(n) {
                    return Promise.resolve(this.compileModuleAndAllComponentsSync(n))
                }
                clearCache() {}
                clearCacheFor(n) {}
                getModuleId(n) {}
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275prov = jt({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        const e0 = ( () => Promise.resolve(0))();
        function wc(e) {
            typeof Zone > "u" ? e0.then( () => {
                e && e.apply(null, null)
            }
            ) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
        }
        class gi {
            constructor({enableLongStackTrace: t=!1, shouldCoalesceEventChangeDetection: n=!1, shouldCoalesceRunChangeDetection: r=!1}) {
                if (this.hasPendingMacrotasks = !1,
                this.hasPendingMicrotasks = !1,
                this.isStable = !0,
                this.onUnstable = new no(!1),
                this.onMicrotaskEmpty = new no(!1),
                this.onStable = new no(!1),
                this.onError = new no(!1),
                typeof Zone > "u")
                    throw new le(908,!1);
                Zone.assertZonePatched();
                const i = this;
                if (i._nesting = 0,
                i._outer = i._inner = Zone.current,
                Zone.AsyncStackTaggingZoneSpec) {
                    const o = Zone.AsyncStackTaggingZoneSpec;
                    i._inner = i._inner.fork(new o("Angular"))
                }
                Zone.TaskTrackingZoneSpec && (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec)),
                t && Zone.longStackTraceZoneSpec && (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)),
                i.shouldCoalesceEventChangeDetection = !r && n,
                i.shouldCoalesceRunChangeDetection = r,
                i.lastRequestAnimationFrameId = -1,
                i.nativeRequestAnimationFrame = function t0() {
                    let e = At.requestAnimationFrame
                      , t = At.cancelAnimationFrame;
                    if (typeof Zone < "u" && e && t) {
                        const n = e[Zone.__symbol__("OriginalDelegate")];
                        n && (e = n);
                        const r = t[Zone.__symbol__("OriginalDelegate")];
                        r && (t = r)
                    }
                    return {
                        nativeRequestAnimationFrame: e,
                        nativeCancelAnimationFrame: t
                    }
                }().nativeRequestAnimationFrame,
                function o0(e) {
                    const t = () => {
                        !function r0(e) {
                            e.isCheckStableRunning || -1 !== e.lastRequestAnimationFrameId || (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(At, () => {
                                e.fakeTopEventTask || (e.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
                                    e.lastRequestAnimationFrameId = -1,
                                    Mc(e),
                                    e.isCheckStableRunning = !0,
                                    bc(e),
                                    e.isCheckStableRunning = !1
                                }
                                , void 0, () => {}
                                , () => {}
                                )),
                                e.fakeTopEventTask.invoke()
                            }
                            ),
                            Mc(e))
                        }(e)
                    }
                    ;
                    e._inner = e._inner.fork({
                        name: "angular",
                        properties: {
                            isAngularZone: !0
                        },
                        onInvokeTask: (n, r, i, o, s, h) => {
                            try {
                                return Qg(e),
                                n.invokeTask(i, o, s, h)
                            } finally {
                                (e.shouldCoalesceEventChangeDetection && "eventTask" === o.type || e.shouldCoalesceRunChangeDetection) && t(),
                                Zg(e)
                            }
                        }
                        ,
                        onInvoke: (n, r, i, o, s, h, p) => {
                            try {
                                return Qg(e),
                                n.invoke(i, o, s, h, p)
                            } finally {
                                e.shouldCoalesceRunChangeDetection && t(),
                                Zg(e)
                            }
                        }
                        ,
                        onHasTask: (n, r, i, o) => {
                            n.hasTask(i, o),
                            r === i && ("microTask" == o.change ? (e._hasPendingMicrotasks = o.microTask,
                            Mc(e),
                            bc(e)) : "macroTask" == o.change && (e.hasPendingMacrotasks = o.macroTask))
                        }
                        ,
                        onHandleError: (n, r, i, o) => (n.handleError(i, o),
                        e.runOutsideAngular( () => e.onError.emit(o)),
                        !1)
                    })
                }(i)
            }
            static isInAngularZone() {
                return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone")
            }
            static assertInAngularZone() {
                if (!gi.isInAngularZone())
                    throw new le(909,!1)
            }
            static assertNotInAngularZone() {
                if (gi.isInAngularZone())
                    throw new le(909,!1)
            }
            run(t, n, r) {
                return this._inner.run(t, n, r)
            }
            runTask(t, n, r, i) {
                const o = this._inner
                  , s = o.scheduleEventTask("NgZoneEvent: " + i, t, n0, ul, ul);
                try {
                    return o.runTask(s, n, r)
                } finally {
                    o.cancelTask(s)
                }
            }
            runGuarded(t, n, r) {
                return this._inner.runGuarded(t, n, r)
            }
            runOutsideAngular(t) {
                return this._outer.run(t)
            }
        }
        const n0 = {};
        function bc(e) {
            if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
                try {
                    e._nesting++,
                    e.onMicrotaskEmpty.emit(null)
                } finally {
                    if (e._nesting--,
                    !e.hasPendingMicrotasks)
                        try {
                            e.runOutsideAngular( () => e.onStable.emit(null))
                        } finally {
                            e.isStable = !0
                        }
                }
        }
        function Mc(e) {
            e.hasPendingMicrotasks = !!(e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && -1 !== e.lastRequestAnimationFrameId)
        }
        function Qg(e) {
            e._nesting++,
            e.isStable && (e.isStable = !1,
            e.onUnstable.emit(null))
        }
        function Zg(e) {
            e._nesting--,
            bc(e)
        }
        class s0 {
            constructor() {
                this.hasPendingMicrotasks = !1,
                this.hasPendingMacrotasks = !1,
                this.isStable = !0,
                this.onUnstable = new no,
                this.onMicrotaskEmpty = new no,
                this.onStable = new no,
                this.onError = new no
            }
            run(t, n, r) {
                return t.apply(n, r)
            }
            runGuarded(t, n, r) {
                return t.apply(n, r)
            }
            runOutsideAngular(t) {
                return t()
            }
            runTask(t, n, r, i) {
                return t.apply(n, r)
            }
        }
        const Jg = new rn("")
          , Xg = new rn("");
        let Tc, a0 = ( () => {
            class e {
                constructor(n, r, i) {
                    this._ngZone = n,
                    this.registry = r,
                    this._pendingCount = 0,
                    this._isZoneStable = !0,
                    this._didWork = !1,
                    this._callbacks = [],
                    this.taskTrackingZone = null,
                    Tc || (function l0(e) {
                        Tc = e
                    }(i),
                    i.addToWindow(r)),
                    this._watchAngularEvents(),
                    n.run( () => {
                        this.taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone")
                    }
                    )
                }
                _watchAngularEvents() {
                    this._ngZone.onUnstable.subscribe({
                        next: () => {
                            this._didWork = !0,
                            this._isZoneStable = !1
                        }
                    }),
                    this._ngZone.runOutsideAngular( () => {
                        this._ngZone.onStable.subscribe({
                            next: () => {
                                gi.assertNotInAngularZone(),
                                wc( () => {
                                    this._isZoneStable = !0,
                                    this._runCallbacksIfReady()
                                }
                                )
                            }
                        })
                    }
                    )
                }
                increasePendingRequestCount() {
                    return this._pendingCount += 1,
                    this._didWork = !0,
                    this._pendingCount
                }
                decreasePendingRequestCount() {
                    if (this._pendingCount -= 1,
                    this._pendingCount < 0)
                        throw new Error("pending async requests below zero");
                    return this._runCallbacksIfReady(),
                    this._pendingCount
                }
                isStable() {
                    return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                }
                _runCallbacksIfReady() {
                    if (this.isStable())
                        wc( () => {
                            for (; 0 !== this._callbacks.length; ) {
                                let n = this._callbacks.pop();
                                clearTimeout(n.timeoutId),
                                n.doneCb(this._didWork)
                            }
                            this._didWork = !1
                        }
                        );
                    else {
                        let n = this.getPendingTasks();
                        this._callbacks = this._callbacks.filter(r => !r.updateCb || !r.updateCb(n) || (clearTimeout(r.timeoutId),
                        !1)),
                        this._didWork = !0
                    }
                }
                getPendingTasks() {
                    return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(n => ({
                        source: n.source,
                        creationLocation: n.creationLocation,
                        data: n.data
                    })) : []
                }
                addCallback(n, r, i) {
                    let o = -1;
                    r && r > 0 && (o = setTimeout( () => {
                        this._callbacks = this._callbacks.filter(s => s.timeoutId !== o),
                        n(this._didWork, this.getPendingTasks())
                    }
                    , r)),
                    this._callbacks.push({
                        doneCb: n,
                        timeoutId: o,
                        updateCb: i
                    })
                }
                whenStable(n, r, i) {
                    if (i && !this.taskTrackingZone)
                        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
                    this.addCallback(n, r, i),
                    this._runCallbacksIfReady()
                }
                getPendingRequestCount() {
                    return this._pendingCount
                }
                registerApplication(n) {
                    this.registry.registerApplication(n, this)
                }
                unregisterApplication(n) {
                    this.registry.unregisterApplication(n)
                }
                findProviders(n, r, i) {
                    return []
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(zn(gi),zn(em),zn(Xg))
            }
            ,
            e.\u0275prov = jt({
                token: e,
                factory: e.\u0275fac
            }),
            e
        }
        )(), em = ( () => {
            class e {
                constructor() {
                    this._applications = new Map
                }
                registerApplication(n, r) {
                    this._applications.set(n, r)
                }
                unregisterApplication(n) {
                    this._applications.delete(n)
                }
                unregisterAllApplications() {
                    this._applications.clear()
                }
                getTestability(n) {
                    return this._applications.get(n) || null
                }
                getAllTestabilities() {
                    return Array.from(this._applications.values())
                }
                getAllRootElements() {
                    return Array.from(this._applications.keys())
                }
                findTestabilityInTree(n, r=!0) {
                    return Tc?.findTestabilityInTree(this, n, r) ?? null
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)
            }
            ,
            e.\u0275prov = jt({
                token: e,
                factory: e.\u0275fac,
                providedIn: "platform"
            }),
            e
        }
        )(), Ho = null;
        const tm = new rn("AllowMultipleToken")
          , Sc = new rn("PlatformDestroyListeners");
        class d0 {
            constructor(t, n) {
                this.name = t,
                this.token = n
            }
        }
        function rm(e, t, n=[]) {
            const r = `Platform: ${t}`
              , i = new rn(r);
            return (o=[]) => {
                let s = Ac();
                if (!s || s.injector.get(tm, !1)) {
                    const h = [...n, ...o, {
                        provide: i,
                        useValue: !0
                    }];
                    e ? e(h) : function f0(e) {
                        if (Ho && !Ho.get(tm, !1))
                            throw new le(400,!1);
                        Ho = e;
                        const t = e.get(om);
                        (function nm(e) {
                            const t = e.get(Wg, null);
                            t && t.forEach(n => n())
                        }
                        )(e)
                    }(function im(e=[], t) {
                        return Jo.create({
                            name: t,
                            providers: [{
                                provide: Rl,
                                useValue: "platform"
                            }, {
                                provide: Sc,
                                useValue: new Set([ () => Ho = null])
                            }, ...e]
                        })
                    }(h, r))
                }
                return function p0(e) {
                    const t = Ac();
                    if (!t)
                        throw new le(401,!1);
                    return t
                }()
            }
        }
        function Ac() {
            return Ho?.get(om) ?? null
        }
        let om = ( () => {
            class e {
                constructor(n) {
                    this._injector = n,
                    this._modules = [],
                    this._destroyListeners = [],
                    this._destroyed = !1
                }
                bootstrapModuleFactory(n, r) {
                    const i = function g0(e, t) {
                        let n;
                        return n = "noop" === e ? new s0 : ("zone.js" === e ? void 0 : e) || new gi(t),
                        n
                    }(r?.ngZone, function sm(e) {
                        return {
                            enableLongStackTrace: !1,
                            shouldCoalesceEventChangeDetection: !(!e || !e.ngZoneEventCoalescing) || !1,
                            shouldCoalesceRunChangeDetection: !(!e || !e.ngZoneRunCoalescing) || !1
                        }
                    }(r))
                      , o = [{
                        provide: gi,
                        useValue: i
                    }];
                    return i.run( () => {
                        const s = Jo.create({
                            providers: o,
                            parent: this.injector,
                            name: n.moduleType.name
                        })
                          , h = n.create(s)
                          , p = h.injector.get(na, null);
                        if (!p)
                            throw new le(402,!1);
                        return i.runOutsideAngular( () => {
                            const w = i.onError.subscribe({
                                next: S => {
                                    p.handleError(S)
                                }
                            });
                            h.onDestroy( () => {
                                hl(this._modules, h),
                                w.unsubscribe()
                            }
                            )
                        }
                        ),
                        function am(e, t, n) {
                            try {
                                const r = n();
                                return ju(r) ? r.catch(i => {
                                    throw t.runOutsideAngular( () => e.handleError(i)),
                                    i
                                }
                                ) : r
                            } catch (r) {
                                throw t.runOutsideAngular( () => e.handleError(r)),
                                r
                            }
                        }(p, i, () => {
                            const w = h.injector.get(cl);
                            return w.runInitializers(),
                            w.donePromise.then( () => (mp(h.injector.get(dl, Os) || Os),
                            this._moduleDoBootstrap(h),
                            h))
                        }
                        )
                    }
                    )
                }
                bootstrapModule(n, r=[]) {
                    const i = lm({}, r);
                    return function u0(e, t, n) {
                        const r = new ac(n);
                        return Promise.resolve(r)
                    }(0, 0, n).then(o => this.bootstrapModuleFactory(o, i))
                }
                _moduleDoBootstrap(n) {
                    const r = n.injector.get(fl);
                    if (n._bootstrapComponents.length > 0)
                        n._bootstrapComponents.forEach(i => r.bootstrap(i));
                    else {
                        if (!n.instance.ngDoBootstrap)
                            throw new le(403,!1);
                        n.instance.ngDoBootstrap(r)
                    }
                    this._modules.push(n)
                }
                onDestroy(n) {
                    this._destroyListeners.push(n)
                }
                get injector() {
                    return this._injector
                }
                destroy() {
                    if (this._destroyed)
                        throw new le(404,!1);
                    this._modules.slice().forEach(r => r.destroy()),
                    this._destroyListeners.forEach(r => r());
                    const n = this._injector.get(Sc, null);
                    n && (n.forEach(r => r()),
                    n.clear()),
                    this._destroyed = !0
                }
                get destroyed() {
                    return this._destroyed
                }
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(zn(Jo))
            }
            ,
            e.\u0275prov = jt({
                token: e,
                factory: e.\u0275fac,
                providedIn: "platform"
            }),
            e
        }
        )();
        function lm(e, t) {
            return Array.isArray(t) ? t.reduce(lm, e) : {
                ...e,
                ...t
            }
        }
        let fl = ( () => {
            class e {
                constructor(n, r, i) {
                    this._zone = n,
                    this._injector = r,
                    this._exceptionHandler = i,
                    this._bootstrapListeners = [],
                    this._views = [],
                    this._runningTick = !1,
                    this._stable = !0,
                    this._destroyed = !1,
                    this._destroyListeners = [],
                    this.componentTypes = [],
                    this.components = [],
                    this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                        next: () => {
                            this._zone.run( () => {
                                this.tick()
                            }
                            )
                        }
                    });
                    const o = new Se.y(h => {
                        this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks,
                        this._zone.runOutsideAngular( () => {
                            h.next(this._stable),
                            h.complete()
                        }
                        )
                    }
                    )
                      , s = new Se.y(h => {
                        let p;
                        this._zone.runOutsideAngular( () => {
                            p = this._zone.onStable.subscribe( () => {
                                gi.assertNotInAngularZone(),
                                wc( () => {
                                    !this._stable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks && (this._stable = !0,
                                    h.next(!0))
                                }
                                )
                            }
                            )
                        }
                        );
                        const w = this._zone.onUnstable.subscribe( () => {
                            gi.assertInAngularZone(),
                            this._stable && (this._stable = !1,
                            this._zone.runOutsideAngular( () => {
                                h.next(!1)
                            }
                            ))
                        }
                        );
                        return () => {
                            p.unsubscribe(),
                            w.unsubscribe()
                        }
                    }
                    );
                    this.isStable = function be(...e) {
                        const t = (0,
                        te.yG)(e)
                          , n = (0,
                        te._6)(e, 1 / 0)
                          , r = e;
                        return r.length ? 1 === r.length ? (0,
                        b.Xf)(r[0]) : (0,
                        a.J)(n)((0,
                        ie.D)(r, t)) : oe.E
                    }(o, s.pipe(function _e(e={}) {
                        const {connector: t=( () => new Ce.x), resetOnError: n=!0, resetOnComplete: r=!0, resetOnRefCountZero: i=!0} = e;
                        return o => {
                            let s, h, p, w = 0, S = !1, F = !1;
                            const $ = () => {
                                h?.unsubscribe(),
                                h = void 0
                            }
                              , J = () => {
                                $(),
                                s = p = void 0,
                                S = F = !1
                            }
                              , we = () => {
                                const Fe = s;
                                J(),
                                Fe?.unsubscribe()
                            }
                            ;
                            return (0,
                            z.e)( (Fe, ze) => {
                                w++,
                                !F && !S && $();
                                const Xe = p = p ?? t();
                                ze.add( () => {
                                    w--,
                                    0 === w && !F && !S && (h = xe(we, i))
                                }
                                ),
                                Xe.subscribe(ze),
                                !s && w > 0 && (s = new de.Hp({
                                    next: ct => Xe.next(ct),
                                    error: ct => {
                                        F = !0,
                                        $(),
                                        h = xe(J, n, ct),
                                        Xe.error(ct)
                                    }
                                    ,
                                    complete: () => {
                                        S = !0,
                                        $(),
                                        h = xe(J, r),
                                        Xe.complete()
                                    }
                                }),
                                (0,
                                b.Xf)(Fe).subscribe(s))
                            }
                            )(o)
                        }
                    }()))
                }
                get destroyed() {
                    return this._destroyed
                }
                get injector() {
                    return this._injector
                }
                bootstrap(n, r) {
                    const i = n instanceof Id;
                    if (!this._injector.get(cl).done)
                        throw !i && Rs(n),
                        new le(405,false);
                    let s;
                    s = i ? n : this._injector.get(ea).resolveComponentFactory(n),
                    this.componentTypes.push(s.componentType);
                    const h = function c0(e) {
                        return e.isBoundToModule
                    }(s) ? void 0 : this._injector.get(Ns)
                      , w = s.create(Jo.NULL, [], r || s.selector, h)
                      , S = w.location.nativeElement
                      , F = w.injector.get(Jg, null);
                    return F?.registerApplication(S),
                    w.onDestroy( () => {
                        this.detachView(w.hostView),
                        hl(this.components, w),
                        F?.unregisterApplication(S)
                    }
                    ),
                    this._loadComponent(w),
                    w
                }
                tick() {
                    if (this._runningTick)
                        throw new le(101,!1);
                    try {
                        this._runningTick = !0;
                        for (let n of this._views)
                            n.detectChanges()
                    } catch (n) {
                        this._zone.runOutsideAngular( () => this._exceptionHandler.handleError(n))
                    } finally {
                        this._runningTick = !1
                    }
                }
                attachView(n) {
                    const r = n;
                    this._views.push(r),
                    r.attachToAppRef(this)
                }
                detachView(n) {
                    const r = n;
                    hl(this._views, r),
                    r.detachFromAppRef()
                }
                _loadComponent(n) {
                    this.attachView(n.hostView),
                    this.tick(),
                    this.components.push(n),
                    this._injector.get(Kg, []).concat(this._bootstrapListeners).forEach(i => i(n))
                }
                ngOnDestroy() {
                    if (!this._destroyed)
                        try {
                            this._destroyListeners.forEach(n => n()),
                            this._views.slice().forEach(n => n.destroy()),
                            this._onMicrotaskEmptySubscription.unsubscribe()
                        } finally {
                            this._destroyed = !0,
                            this._views = [],
                            this._bootstrapListeners = [],
                            this._destroyListeners = []
                        }
                }
                onDestroy(n) {
                    return this._destroyListeners.push(n),
                    () => hl(this._destroyListeners, n)
                }
                destroy() {
                    if (this._destroyed)
                        throw new le(406,!1);
                    const n = this._injector;
                    n.destroy && !n.destroyed && n.destroy()
                }
                get viewCount() {
                    return this._views.length
                }
                warnIfDestroyed() {}
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(zn(gi),zn(Qo),zn(na))
            }
            ,
            e.\u0275prov = jt({
                token: e,
                factory: e.\u0275fac,
                providedIn: "root"
            }),
            e
        }
        )();
        function hl(e, t) {
            const n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }
        let cm = !0;
        function y0() {
            cm = !1
        }
        let v0 = ( () => {
            class e {
            }
            return e.__NG_ELEMENT_ID__ = _0,
            e
        }
        )();
        function _0(e) {
            return function D0(e, t, n) {
                if (Nr(e) && !n) {
                    const r = Ye(e.index, t);
                    return new aa(r,r)
                }
                return 47 & e.type ? new aa(t[16],t) : null
            }(an(), Ie(), 16 == (16 & e))
        }
        class gm {
            constructor() {}
            supports(t) {
                return ua(t)
            }
            create(t) {
                return new T0(t)
            }
        }
        const M0 = (e, t) => t;
        class T0 {
            constructor(t) {
                this.length = 0,
                this._linkedRecords = null,
                this._unlinkedRecords = null,
                this._previousItHead = null,
                this._itHead = null,
                this._itTail = null,
                this._additionsHead = null,
                this._additionsTail = null,
                this._movesHead = null,
                this._movesTail = null,
                this._removalsHead = null,
                this._removalsTail = null,
                this._identityChangesHead = null,
                this._identityChangesTail = null,
                this._trackByFn = t || M0
            }
            forEachItem(t) {
                let n;
                for (n = this._itHead; null !== n; n = n._next)
                    t(n)
            }
            forEachOperation(t) {
                let n = this._itHead
                  , r = this._removalsHead
                  , i = 0
                  , o = null;
                for (; n || r; ) {
                    const s = !r || n && n.currentIndex < ym(r, i, o) ? n : r
                      , h = ym(s, i, o)
                      , p = s.currentIndex;
                    if (s === r)
                        i--,
                        r = r._nextRemoved;
                    else if (n = n._next,
                    null == s.previousIndex)
                        i++;
                    else {
                        o || (o = []);
                        const w = h - i
                          , S = p - i;
                        if (w != S) {
                            for (let $ = 0; $ < w; $++) {
                                const J = $ < o.length ? o[$] : o[$] = 0
                                  , we = J + $;
                                S <= we && we < w && (o[$] = J + 1)
                            }
                            o[s.previousIndex] = S - w
                        }
                    }
                    h !== p && t(s, h, p)
                }
            }
            forEachPreviousItem(t) {
                let n;
                for (n = this._previousItHead; null !== n; n = n._nextPrevious)
                    t(n)
            }
            forEachAddedItem(t) {
                let n;
                for (n = this._additionsHead; null !== n; n = n._nextAdded)
                    t(n)
            }
            forEachMovedItem(t) {
                let n;
                for (n = this._movesHead; null !== n; n = n._nextMoved)
                    t(n)
            }
            forEachRemovedItem(t) {
                let n;
                for (n = this._removalsHead; null !== n; n = n._nextRemoved)
                    t(n)
            }
            forEachIdentityChange(t) {
                let n;
                for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange)
                    t(n)
            }
            diff(t) {
                if (null == t && (t = []),
                !ua(t))
                    throw new le(900,!1);
                return this.check(t) ? this : null
            }
            onDestroy() {}
            check(t) {
                this._reset();
                let i, o, s, n = this._itHead, r = !1;
                if (Array.isArray(t)) {
                    this.length = t.length;
                    for (let h = 0; h < this.length; h++)
                        o = t[h],
                        s = this._trackByFn(h, o),
                        null !== n && Object.is(n.trackById, s) ? (r && (n = this._verifyReinsertion(n, o, s, h)),
                        Object.is(n.item, o) || this._addIdentityChange(n, o)) : (n = this._mismatch(n, o, s, h),
                        r = !0),
                        n = n._next
                } else
                    i = 0,
                    function rD(e, t) {
                        if (Array.isArray(e))
                            for (let n = 0; n < e.length; n++)
                                t(e[n]);
                        else {
                            const n = e[Xo()]();
                            let r;
                            for (; !(r = n.next()).done; )
                                t(r.value)
                        }
                    }(t, h => {
                        s = this._trackByFn(i, h),
                        null !== n && Object.is(n.trackById, s) ? (r && (n = this._verifyReinsertion(n, h, s, i)),
                        Object.is(n.item, h) || this._addIdentityChange(n, h)) : (n = this._mismatch(n, h, s, i),
                        r = !0),
                        n = n._next,
                        i++
                    }
                    ),
                    this.length = i;
                return this._truncate(n),
                this.collection = t,
                this.isDirty
            }
            get isDirty() {
                return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
            }
            _reset() {
                if (this.isDirty) {
                    let t;
                    for (t = this._previousItHead = this._itHead; null !== t; t = t._next)
                        t._nextPrevious = t._next;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded)
                        t.previousIndex = t.currentIndex;
                    for (this._additionsHead = this._additionsTail = null,
                    t = this._movesHead; null !== t; t = t._nextMoved)
                        t.previousIndex = t.currentIndex;
                    this._movesHead = this._movesTail = null,
                    this._removalsHead = this._removalsTail = null,
                    this._identityChangesHead = this._identityChangesTail = null
                }
            }
            _mismatch(t, n, r, i) {
                let o;
                return null === t ? o = this._itTail : (o = t._prev,
                this._remove(t)),
                null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null)) ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, o, i)) : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(r, i)) ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, o, i)) : t = this._addAfter(new S0(n,r), o, i),
                t
            }
            _verifyReinsertion(t, n, r, i) {
                let o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null);
                return null !== o ? t = this._reinsertAfter(o, t._prev, i) : t.currentIndex != i && (t.currentIndex = i,
                this._addToMoves(t, i)),
                t
            }
            _truncate(t) {
                for (; null !== t; ) {
                    const n = t._next;
                    this._addToRemovals(this._unlink(t)),
                    t = n
                }
                null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
                null !== this._additionsTail && (this._additionsTail._nextAdded = null),
                null !== this._movesTail && (this._movesTail._nextMoved = null),
                null !== this._itTail && (this._itTail._next = null),
                null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
                null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
            }
            _reinsertAfter(t, n, r) {
                null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                const i = t._prevRemoved
                  , o = t._nextRemoved;
                return null === i ? this._removalsHead = o : i._nextRemoved = o,
                null === o ? this._removalsTail = i : o._prevRemoved = i,
                this._insertAfter(t, n, r),
                this._addToMoves(t, r),
                t
            }
            _moveAfter(t, n, r) {
                return this._unlink(t),
                this._insertAfter(t, n, r),
                this._addToMoves(t, r),
                t
            }
            _addAfter(t, n, r) {
                return this._insertAfter(t, n, r),
                this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t,
                t
            }
            _insertAfter(t, n, r) {
                const i = null === n ? this._itHead : n._next;
                return t._next = i,
                t._prev = n,
                null === i ? this._itTail = t : i._prev = t,
                null === n ? this._itHead = t : n._next = t,
                null === this._linkedRecords && (this._linkedRecords = new mm),
                this._linkedRecords.put(t),
                t.currentIndex = r,
                t
            }
            _remove(t) {
                return this._addToRemovals(this._unlink(t))
            }
            _unlink(t) {
                null !== this._linkedRecords && this._linkedRecords.remove(t);
                const n = t._prev
                  , r = t._next;
                return null === n ? this._itHead = r : n._next = r,
                null === r ? this._itTail = n : r._prev = n,
                t
            }
            _addToMoves(t, n) {
                return t.previousIndex === n || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t),
                t
            }
            _addToRemovals(t) {
                return null === this._unlinkedRecords && (this._unlinkedRecords = new mm),
                this._unlinkedRecords.put(t),
                t.currentIndex = null,
                t._nextRemoved = null,
                null === this._removalsTail ? (this._removalsTail = this._removalsHead = t,
                t._prevRemoved = null) : (t._prevRemoved = this._removalsTail,
                this._removalsTail = this._removalsTail._nextRemoved = t),
                t
            }
            _addIdentityChange(t, n) {
                return t.item = n,
                this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t,
                t
            }
        }
        class S0 {
            constructor(t, n) {
                this.item = t,
                this.trackById = n,
                this.currentIndex = null,
                this.previousIndex = null,
                this._nextPrevious = null,
                this._prev = null,
                this._next = null,
                this._prevDup = null,
                this._nextDup = null,
                this._prevRemoved = null,
                this._nextRemoved = null,
                this._nextAdded = null,
                this._nextMoved = null,
                this._nextIdentityChange = null
            }
        }
        class A0 {
            constructor() {
                this._head = null,
                this._tail = null
            }
            add(t) {
                null === this._head ? (this._head = this._tail = t,
                t._nextDup = null,
                t._prevDup = null) : (this._tail._nextDup = t,
                t._prevDup = this._tail,
                t._nextDup = null,
                this._tail = t)
            }
            get(t, n) {
                let r;
                for (r = this._head; null !== r; r = r._nextDup)
                    if ((null === n || n <= r.currentIndex) && Object.is(r.trackById, t))
                        return r;
                return null
            }
            remove(t) {
                const n = t._prevDup
                  , r = t._nextDup;
                return null === n ? this._head = r : n._nextDup = r,
                null === r ? this._tail = n : r._prevDup = n,
                null === this._head
            }
        }
        class mm {
            constructor() {
                this.map = new Map
            }
            put(t) {
                const n = t.trackById;
                let r = this.map.get(n);
                r || (r = new A0,
                this.map.set(n, r)),
                r.add(t)
            }
            get(t, n) {
                const i = this.map.get(t);
                return i ? i.get(t, n) : null
            }
            remove(t) {
                const n = t.trackById;
                return this.map.get(n).remove(t) && this.map.delete(n),
                t
            }
            get isEmpty() {
                return 0 === this.map.size
            }
            clear() {
                this.map.clear()
            }
        }
        function ym(e, t, n) {
            const r = e.previousIndex;
            if (null === r)
                return r;
            let i = 0;
            return n && r < n.length && (i = n[r]),
            r + t + i
        }
        class vm {
            constructor() {}
            supports(t) {
                return t instanceof Map || Lu(t)
            }
            create() {
                return new I0
            }
        }
        class I0 {
            constructor() {
                this._records = new Map,
                this._mapHead = null,
                this._appendAfter = null,
                this._previousMapHead = null,
                this._changesHead = null,
                this._changesTail = null,
                this._additionsHead = null,
                this._additionsTail = null,
                this._removalsHead = null,
                this._removalsTail = null
            }
            get isDirty() {
                return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
            }
            forEachItem(t) {
                let n;
                for (n = this._mapHead; null !== n; n = n._next)
                    t(n)
            }
            forEachPreviousItem(t) {
                let n;
                for (n = this._previousMapHead; null !== n; n = n._nextPrevious)
                    t(n)
            }
            forEachChangedItem(t) {
                let n;
                for (n = this._changesHead; null !== n; n = n._nextChanged)
                    t(n)
            }
            forEachAddedItem(t) {
                let n;
                for (n = this._additionsHead; null !== n; n = n._nextAdded)
                    t(n)
            }
            forEachRemovedItem(t) {
                let n;
                for (n = this._removalsHead; null !== n; n = n._nextRemoved)
                    t(n)
            }
            diff(t) {
                if (t) {
                    if (!(t instanceof Map || Lu(t)))
                        throw new le(900,!1)
                } else
                    t = new Map;
                return this.check(t) ? this : null
            }
            onDestroy() {}
            check(t) {
                this._reset();
                let n = this._mapHead;
                if (this._appendAfter = null,
                this._forEach(t, (r, i) => {
                    if (n && n.key === i)
                        this._maybeAddToChanges(n, r),
                        this._appendAfter = n,
                        n = n._next;
                    else {
                        const o = this._getOrCreateRecordForKey(i, r);
                        n = this._insertBeforeOrAppend(n, o)
                    }
                }
                ),
                n) {
                    n._prev && (n._prev._next = null),
                    this._removalsHead = n;
                    for (let r = n; null !== r; r = r._nextRemoved)
                        r === this._mapHead && (this._mapHead = null),
                        this._records.delete(r.key),
                        r._nextRemoved = r._next,
                        r.previousValue = r.currentValue,
                        r.currentValue = null,
                        r._prev = null,
                        r._next = null
                }
                return this._changesTail && (this._changesTail._nextChanged = null),
                this._additionsTail && (this._additionsTail._nextAdded = null),
                this.isDirty
            }
            _insertBeforeOrAppend(t, n) {
                if (t) {
                    const r = t._prev;
                    return n._next = t,
                    n._prev = r,
                    t._prev = n,
                    r && (r._next = n),
                    t === this._mapHead && (this._mapHead = n),
                    this._appendAfter = t,
                    t
                }
                return this._appendAfter ? (this._appendAfter._next = n,
                n._prev = this._appendAfter) : this._mapHead = n,
                this._appendAfter = n,
                null
            }
            _getOrCreateRecordForKey(t, n) {
                if (this._records.has(t)) {
                    const i = this._records.get(t);
                    this._maybeAddToChanges(i, n);
                    const o = i._prev
                      , s = i._next;
                    return o && (o._next = s),
                    s && (s._prev = o),
                    i._next = null,
                    i._prev = null,
                    i
                }
                const r = new P0(t);
                return this._records.set(t, r),
                r.currentValue = n,
                this._addToAdditions(r),
                r
            }
            _reset() {
                if (this.isDirty) {
                    let t;
                    for (this._previousMapHead = this._mapHead,
                    t = this._previousMapHead; null !== t; t = t._next)
                        t._nextPrevious = t._next;
                    for (t = this._changesHead; null !== t; t = t._nextChanged)
                        t.previousValue = t.currentValue;
                    for (t = this._additionsHead; null != t; t = t._nextAdded)
                        t.previousValue = t.currentValue;
                    this._changesHead = this._changesTail = null,
                    this._additionsHead = this._additionsTail = null,
                    this._removalsHead = null
                }
            }
            _maybeAddToChanges(t, n) {
                Object.is(n, t.currentValue) || (t.previousValue = t.currentValue,
                t.currentValue = n,
                this._addToChanges(t))
            }
            _addToAdditions(t) {
                null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t,
                this._additionsTail = t)
            }
            _addToChanges(t) {
                null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t,
                this._changesTail = t)
            }
            _forEach(t, n) {
                t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(r => n(t[r], r))
            }
        }
        class P0 {
            constructor(t) {
                this.key = t,
                this.previousValue = null,
                this.currentValue = null,
                this._nextPrevious = null,
                this._next = null,
                this._prev = null,
                this._nextAdded = null,
                this._nextRemoved = null,
                this._nextChanged = null
            }
        }
        function _m() {
            return new Nc([new gm])
        }
        let Nc = ( () => {
            class e {
                constructor(n) {
                    this.factories = n
                }
                static create(n, r) {
                    if (null != r) {
                        const i = r.factories.slice();
                        n = n.concat(i)
                    }
                    return new e(n)
                }
                static extend(n) {
                    return {
                        provide: e,
                        useFactory: r => e.create(n, r || _m()),
                        deps: [[e, new Ys, new Ks]]
                    }
                }
                find(n) {
                    const r = this.factories.find(i => i.supports(n));
                    if (null != r)
                        return r;
                    throw new le(901,!1)
                }
            }
            return e.\u0275prov = jt({
                token: e,
                providedIn: "root",
                factory: _m
            }),
            e
        }
        )();
        function Dm() {
            return new Fc([new vm])
        }
        let Fc = ( () => {
            class e {
                constructor(n) {
                    this.factories = n
                }
                static create(n, r) {
                    if (r) {
                        const i = r.factories.slice();
                        n = n.concat(i)
                    }
                    return new e(n)
                }
                static extend(n) {
                    return {
                        provide: e,
                        useFactory: r => e.create(n, r || Dm()),
                        deps: [[e, new Ys, new Ks]]
                    }
                }
                find(n) {
                    const r = this.factories.find(i => i.supports(n));
                    if (r)
                        return r;
                    throw new le(901,!1)
                }
            }
            return e.\u0275prov = jt({
                token: e,
                providedIn: "root",
                factory: Dm
            }),
            e
        }
        )();
        const N0 = rm(null, "core", []);
        let F0 = ( () => {
            class e {
                constructor(n) {}
            }
            return e.\u0275fac = function(n) {
                return new (n || e)(zn(fl))
            }
            ,
            e.\u0275mod = Ir({
                type: e
            }),
            e.\u0275inj = En({}),
            e
        }
        )();
        function R0(e) {
            return "boolean" == typeof e ? e : null != e && "false" !== e
        }
        function k0(e, t) {
            const n = W(e)
              , r = t.elementInjector || Fa();
            return new la(n).create(r, t.projectableNodes, t.hostElement, t.environmentInjector)
        }
    }
    ,
    433: (Je, pe, I) => {
        I.d(pe, {
            Wl: () => Qe,
            Fj: () => fe,
            qu: () => lo,
            NI: () => qn,
            u: () => Kr,
            sg: () => hr,
            u5: () => qr,
            JU: () => Ne,
            JJ: () => ee,
            JL: () => B,
            On: () => yi,
            YN: () => Rr,
            UX: () => hi,
            EJ: () => di,
            kI: () => Z,
            _Y: () => Si,
            Kr: () => xi
        });
        var a = I(8256)
          , b = I(6895)
          , oe = I(9751)
          , te = I(4742)
          , ie = I(8421)
          , be = I(3269)
          , Ce = I(5403)
          , Oe = I(3268)
          , Se = I(1810)
          , z = I(2076)
          , _e = I(4004);
        let xe = ( () => {
            class E {
                constructor(m, O) {
                    this._renderer = m,
                    this._elementRef = O,
                    this.onChange = ue => {}
                    ,
                    this.onTouched = () => {}
                }
                setProperty(m, O) {
                    this._renderer.setProperty(this._elementRef.nativeElement, m, O)
                }
                registerOnTouched(m) {
                    this.onTouched = m
                }
                registerOnChange(m) {
                    this.onChange = m
                }
                setDisabledState(m) {
                    this.setProperty("disabled", m)
                }
            }
            return E.\u0275fac = function(m) {
                return new (m || E)(a.Y36(a.Qsj),a.Y36(a.SBq))
            }
            ,
            E.\u0275dir = a.lG2({
                type: E
            }),
            E
        }
        )()
          , ce = ( () => {
            class E extends xe {
            }
            return E.\u0275fac = function() {
                let v;
                return function(O) {
                    return (v || (v = a.n5z(E)))(O || E)
                }
            }(),
            E.\u0275dir = a.lG2({
                type: E,
                features: [a.qOj]
            }),
            E
        }
        )();
        const Ne = new a.OlP("NgValueAccessor")
          , je = {
            provide: Ne,
            useExisting: (0,
            a.Gpc)( () => Qe),
            multi: !0
        };
        let Qe = ( () => {
            class E extends ce {
                writeValue(m) {
                    this.setProperty("checked", m)
                }
            }
            return E.\u0275fac = function() {
                let v;
                return function(O) {
                    return (v || (v = a.n5z(E)))(O || E)
                }
            }(),
            E.\u0275dir = a.lG2({
                type: E,
                selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
                hostBindings: function(m, O) {
                    1 & m && a.NdJ("change", function(Ze) {
                        return O.onChange(Ze.target.checked)
                    })("blur", function() {
                        return O.onTouched()
                    })
                },
                features: [a._Bn([je]), a.qOj]
            }),
            E
        }
        )();
        const it = {
            provide: Ne,
            useExisting: (0,
            a.Gpc)( () => fe),
            multi: !0
        }
          , Be = new a.OlP("CompositionEventMode");
        let fe = ( () => {
            class E extends xe {
                constructor(m, O, ue) {
                    super(m, O),
                    this._compositionMode = ue,
                    this._composing = !1,
                    null == this._compositionMode && (this._compositionMode = !function Mt() {
                        const E = (0,
                        b.q)() ? (0,
                        b.q)().getUserAgent() : "";
                        return /android (\d+)/.test(E.toLowerCase())
                    }())
                }
                writeValue(m) {
                    this.setProperty("value", m ?? "")
                }
                _handleInput(m) {
                    (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(m)
                }
                _compositionStart() {
                    this._composing = !0
                }
                _compositionEnd(m) {
                    this._composing = !1,
                    this._compositionMode && this.onChange(m)
                }
            }
            return E.\u0275fac = function(m) {
                return new (m || E)(a.Y36(a.Qsj),a.Y36(a.SBq),a.Y36(Be, 8))
            }
            ,
            E.\u0275dir = a.lG2({
                type: E,
                selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
                hostBindings: function(m, O) {
                    1 & m && a.NdJ("input", function(Ze) {
                        return O._handleInput(Ze.target.value)
                    })("blur", function() {
                        return O.onTouched()
                    })("compositionstart", function() {
                        return O._compositionStart()
                    })("compositionend", function(Ze) {
                        return O._compositionEnd(Ze.target.value)
                    })
                },
                features: [a._Bn([it]), a.qOj]
            }),
            E
        }
        )();
        function le(E) {
            return null == E || ("string" == typeof E || Array.isArray(E)) && 0 === E.length
        }
        function ot(E) {
            return null != E && "number" == typeof E.length
        }
        const ye = new a.OlP("NgValidators")
          , De = new a.OlP("NgAsyncValidators")
          , $e = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        class Z {
            static min(v) {
                return function ne(E) {
                    return v => {
                        if (le(v.value) || le(E))
                            return null;
                        const m = parseFloat(v.value);
                        return !isNaN(m) && m < E ? {
                            min: {
                                min: E,
                                actual: v.value
                            }
                        } : null
                    }
                }(v)
            }
            static max(v) {
                return function he(E) {
                    return v => {
                        if (le(v.value) || le(E))
                            return null;
                        const m = parseFloat(v.value);
                        return !isNaN(m) && m > E ? {
                            max: {
                                max: E,
                                actual: v.value
                            }
                        } : null
                    }
                }(v)
            }
            static required(v) {
                return function K(E) {
                    return le(E.value) ? {
                        required: !0
                    } : null
                }(v)
            }
            static requiredTrue(v) {
                return function ke(E) {
                    return !0 === E.value ? null : {
                        required: !0
                    }
                }(v)
            }
            static email(v) {
                return function Ve(E) {
                    return le(E.value) || $e.test(E.value) ? null : {
                        email: !0
                    }
                }(v)
            }
            static minLength(v) {
                return function mt(E) {
                    return v => le(v.value) || !ot(v.value) ? null : v.value.length < E ? {
                        minlength: {
                            requiredLength: E,
                            actualLength: v.value.length
                        }
                    } : null
                }(v)
            }
            static maxLength(v) {
                return function st(E) {
                    return v => ot(v.value) && v.value.length > E ? {
                        maxlength: {
                            requiredLength: E,
                            actualLength: v.value.length
                        }
                    } : null
                }(v)
            }
            static pattern(v) {
                return function Zt(E) {
                    if (!E)
                        return lt;
                    let v, m;
                    return "string" == typeof E ? (m = "",
                    "^" !== E.charAt(0) && (m += "^"),
                    m += E,
                    "$" !== E.charAt(E.length - 1) && (m += "$"),
                    v = new RegExp(m)) : (m = E.toString(),
                    v = E),
                    O => {
                        if (le(O.value))
                            return null;
                        const ue = O.value;
                        return v.test(ue) ? null : {
                            pattern: {
                                requiredPattern: m,
                                actualValue: ue
                            }
                        }
                    }
                }(v)
            }
            static nullValidator(v) {
                return null
            }
            static compose(v) {
                return Ue(v)
            }
            static composeAsync(v) {
                return Cn(v)
            }
        }
        function lt(E) {
            return null
        }
        function Ot(E) {
            return null != E
        }
        function pn(E) {
            return (0,
            a.QGY)(E) ? (0,
            z.D)(E) : E
        }
        function Me(E) {
            let v = {};
            return E.forEach(m => {
                v = null != m ? {
                    ...v,
                    ...m
                } : v
            }
            ),
            0 === Object.keys(v).length ? null : v
        }
        function Le(E, v) {
            return v.map(m => m(E))
        }
        function q(E) {
            return E.map(v => function Q(E) {
                return !E.validate
            }(v) ? v : m => v.validate(m))
        }
        function Ue(E) {
            if (!E)
                return null;
            const v = E.filter(Ot);
            return 0 == v.length ? null : function(m) {
                return Me(Le(m, v))
            }
        }
        function We(E) {
            return null != E ? Ue(q(E)) : null
        }
        function Cn(E) {
            if (!E)
                return null;
            const v = E.filter(Ot);
            return 0 == v.length ? null : function(m) {
                return function de(...E) {
                    const v = (0,
                    be.jO)(E)
                      , {args: m, keys: O} = (0,
                    te.D)(E)
                      , ue = new oe.y(Ze => {
                        const {length: cn} = m;
                        if (!cn)
                            return void Ze.complete();
                        const xn = new Array(cn);
                        let hn = cn
                          , Ln = cn;
                        for (let Fi = 0; Fi < cn; Fi++) {
                            let kr = !1;
                            (0,
                            ie.Xf)(m[Fi]).subscribe((0,
                            Ce.x)(Ze, Vr => {
                                kr || (kr = !0,
                                Ln--),
                                xn[Fi] = Vr
                            }
                            , () => hn--, void 0, () => {
                                (!hn || !kr) && (Ln || Ze.next(O ? (0,
                                Se.n)(O, xn) : xn),
                                Ze.complete())
                            }
                            ))
                        }
                    }
                    );
                    return v ? ue.pipe((0,
                    Oe.Z)(v)) : ue
                }(Le(m, v).map(pn)).pipe((0,
                _e.U)(Me))
            }
        }
        function Vn(E) {
            return null != E ? Cn(q(E)) : null
        }
        function dn(E, v) {
            return null === E ? [v] : Array.isArray(E) ? [...E, v] : [E, v]
        }
        function jt(E) {
            return E._rawValidators
        }
        function Tn(E) {
            return E._rawAsyncValidators
        }
        function En(E) {
            return E ? Array.isArray(E) ? E : [E] : []
        }
        function Bn(E, v) {
            return Array.isArray(E) ? E.includes(v) : E === v
        }
        function Kt(E, v) {
            const m = En(v);
            return En(E).forEach(ue => {
                Bn(m, ue) || m.push(ue)
            }
            ),
            m
        }
        function Lt(E, v) {
            return En(v).filter(m => !Bn(E, m))
        }
        class Sn {
            constructor() {
                this._rawValidators = [],
                this._rawAsyncValidators = [],
                this._onDestroyCallbacks = []
            }
            get value() {
                return this.control ? this.control.value : null
            }
            get valid() {
                return this.control ? this.control.valid : null
            }
            get invalid() {
                return this.control ? this.control.invalid : null
            }
            get pending() {
                return this.control ? this.control.pending : null
            }
            get disabled() {
                return this.control ? this.control.disabled : null
            }
            get enabled() {
                return this.control ? this.control.enabled : null
            }
            get errors() {
                return this.control ? this.control.errors : null
            }
            get pristine() {
                return this.control ? this.control.pristine : null
            }
            get dirty() {
                return this.control ? this.control.dirty : null
            }
            get touched() {
                return this.control ? this.control.touched : null
            }
            get status() {
                return this.control ? this.control.status : null
            }
            get untouched() {
                return this.control ? this.control.untouched : null
            }
            get statusChanges() {
                return this.control ? this.control.statusChanges : null
            }
            get valueChanges() {
                return this.control ? this.control.valueChanges : null
            }
            get path() {
                return null
            }
            _setValidators(v) {
                this._rawValidators = v || [],
                this._composedValidatorFn = We(this._rawValidators)
            }
            _setAsyncValidators(v) {
                this._rawAsyncValidators = v || [],
                this._composedAsyncValidatorFn = Vn(this._rawAsyncValidators)
            }
            get validator() {
                return this._composedValidatorFn || null
            }
            get asyncValidator() {
                return this._composedAsyncValidatorFn || null
            }
            _registerOnDestroy(v) {
                this._onDestroyCallbacks.push(v)
            }
            _invokeOnDestroyCallbacks() {
                this._onDestroyCallbacks.forEach(v => v()),
                this._onDestroyCallbacks = []
            }
            reset(v) {
                this.control && this.control.reset(v)
            }
            hasError(v, m) {
                return !!this.control && this.control.hasError(v, m)
            }
            getError(v, m) {
                return this.control ? this.control.getError(v, m) : null
            }
        }
        class ln extends Sn {
            get formDirective() {
                return null
            }
            get path() {
                return null
            }
        }
        class An extends Sn {
            constructor() {
                super(...arguments),
                this._parent = null,
                this.name = null,
                this.valueAccessor = null
            }
        }
        class mr {
            constructor(v) {
                this._cd = v
            }
            get isTouched() {
                return !!this._cd?.control?.touched
            }
            get isUntouched() {
                return !!this._cd?.control?.untouched
            }
            get isPristine() {
                return !!this._cd?.control?.pristine
            }
            get isDirty() {
                return !!this._cd?.control?.dirty
            }
            get isValid() {
                return !!this._cd?.control?.valid
            }
            get isInvalid() {
                return !!this._cd?.control?.invalid
            }
            get isPending() {
                return !!this._cd?.control?.pending
            }
            get isSubmitted() {
                return !!this._cd?.submitted
            }
        }
        let ee = ( () => {
            class E extends mr {
                constructor(m) {
                    super(m)
                }
            }
            return E.\u0275fac = function(m) {
                return new (m || E)(a.Y36(An, 2))
            }
            ,
            E.\u0275dir = a.lG2({
                type: E,
                selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
                hostVars: 14,
                hostBindings: function(m, O) {
                    2 & m && a.ekj("ng-untouched", O.isUntouched)("ng-touched", O.isTouched)("ng-pristine", O.isPristine)("ng-dirty", O.isDirty)("ng-valid", O.isValid)("ng-invalid", O.isInvalid)("ng-pending", O.isPending)
                },
                features: [a.qOj]
            }),
            E
        }
        )()
          , B = ( () => {
            class E extends mr {
                constructor(m) {
                    super(m)
                }
            }
            return E.\u0275fac = function(m) {
                return new (m || E)(a.Y36(ln, 10))
            }
            ,
            E.\u0275dir = a.lG2({
                type: E,
                selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
                hostVars: 16,
                hostBindings: function(m, O) {
                    2 & m && a.ekj("ng-untouched", O.isUntouched)("ng-touched", O.isTouched)("ng-pristine", O.isPristine)("ng-dirty", O.isDirty)("ng-valid", O.isValid)("ng-invalid", O.isInvalid)("ng-pending", O.isPending)("ng-submitted", O.isSubmitted)
                },
                features: [a.qOj]
            }),
            E
        }
        )();
        const Xt = "VALID"
          , jn = "INVALID"
          , ar = "PENDING"
          , Wn = "DISABLED";
        function mi(E) {
            return (Kn(E) ? E.validators : E) || null
        }
        function ii(E) {
            return Array.isArray(E) ? We(E) : E || null
        }
        function yr(E, v) {
            return (Kn(v) ? v.asyncValidators : E) || null
        }
        function Ir(E) {
            return Array.isArray(E) ? Vn(E) : E || null
        }
        function Kn(E) {
            return null != E && !Array.isArray(E) && "object" == typeof E
        }
        function vr(E, v, m) {
            const O = E.controls;
            if (!(v ? Object.keys(O) : O).length)
                throw new a.vHH(1e3,"");
            if (!O[m])
                throw new a.vHH(1001,"")
        }
        function Xn(E, v, m) {
            E._forEachChild( (O, ue) => {
                if (void 0 === m[ue])
                    throw new a.vHH(1002,"")
            }
            )
        }
        class er {
            constructor(v, m) {
                this._pendingDirty = !1,
                this._hasOwnPendingAsyncValidator = !1,
                this._pendingTouched = !1,
                this._onCollectionChange = () => {}
                ,
                this._parent = null,
                this.pristine = !0,
                this.touched = !1,
                this._onDisabledChange = [],
                this._rawValidators = v,
                this._rawAsyncValidators = m,
                this._composedValidatorFn = ii(this._rawValidators),
                this._composedAsyncValidatorFn = Ir(this._rawAsyncValidators)
            }
            get validator() {
                return this._composedValidatorFn
            }
            set validator(v) {
                this._rawValidators = this._composedValidatorFn = v
            }
            get asyncValidator() {
                return this._composedAsyncValidatorFn
            }
            set asyncValidator(v) {
                this._rawAsyncValidators = this._composedAsyncValidatorFn = v
            }
            get parent() {
                return this._parent
            }
            get valid() {
                return this.status === Xt
            }
            get invalid() {
                return this.status === jn
            }
            get pending() {
                return this.status == ar
            }
            get disabled() {
                return this.status === Wn
            }
            get enabled() {
                return this.status !== Wn
            }
            get dirty() {
                return !this.pristine
            }
            get untouched() {
                return !this.touched
            }
            get updateOn() {
                return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change"
            }
            setValidators(v) {
                this._rawValidators = v,
                this._composedValidatorFn = ii(v)
            }
            setAsyncValidators(v) {
                this._rawAsyncValidators = v,
                this._composedAsyncValidatorFn = Ir(v)
            }
            addValidators(v) {
                this.setValidators(Kt(v, this._rawValidators))
            }
            addAsyncValidators(v) {
                this.setAsyncValidators(Kt(v, this._rawAsyncValidators))
            }
            removeValidators(v) {
                this.setValidators(Lt(v, this._rawValidators))
            }
            removeAsyncValidators(v) {
                this.setAsyncValidators(Lt(v, this._rawAsyncValidators))
            }
            hasValidator(v) {
                return Bn(this._rawValidators, v)
            }
            hasAsyncValidator(v) {
                return Bn(this._rawAsyncValidators, v)
            }
            clearValidators() {
                this.validator = null
            }
            clearAsyncValidators() {
                this.asyncValidator = null
            }
            markAsTouched(v={}) {
                this.touched = !0,
                this._parent && !v.onlySelf && this._parent.markAsTouched(v)
            }
            markAllAsTouched() {
                this.markAsTouched({
                    onlySelf: !0
                }),
                this._forEachChild(v => v.markAllAsTouched())
            }
            markAsUntouched(v={}) {
                this.touched = !1,
                this._pendingTouched = !1,
                this._forEachChild(m => {
                    m.markAsUntouched({
                        onlySelf: !0
                    })
                }
                ),
                this._parent && !v.onlySelf && this._parent._updateTouched(v)
            }
            markAsDirty(v={}) {
                this.pristine = !1,
                this._parent && !v.onlySelf && this._parent.markAsDirty(v)
            }
            markAsPristine(v={}) {
                this.pristine = !0,
                this._pendingDirty = !1,
                this._forEachChild(m => {
                    m.markAsPristine({
                        onlySelf: !0
                    })
                }
                ),
                this._parent && !v.onlySelf && this._parent._updatePristine(v)
            }
            markAsPending(v={}) {
                this.status = ar,
                !1 !== v.emitEvent && this.statusChanges.emit(this.status),
                this._parent && !v.onlySelf && this._parent.markAsPending(v)
            }
            disable(v={}) {
                const m = this._parentMarkedDirty(v.onlySelf);
                this.status = Wn,
                this.errors = null,
                this._forEachChild(O => {
                    O.disable({
                        ...v,
                        onlySelf: !0
                    })
                }
                ),
                this._updateValue(),
                !1 !== v.emitEvent && (this.valueChanges.emit(this.value),
                this.statusChanges.emit(this.status)),
                this._updateAncestors({
                    ...v,
                    skipPristineCheck: m
                }),
                this._onDisabledChange.forEach(O => O(!0))
            }
            enable(v={}) {
                const m = this._parentMarkedDirty(v.onlySelf);
                this.status = Xt,
                this._forEachChild(O => {
                    O.enable({
                        ...v,
                        onlySelf: !0
                    })
                }
                ),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: v.emitEvent
                }),
                this._updateAncestors({
                    ...v,
                    skipPristineCheck: m
                }),
                this._onDisabledChange.forEach(O => O(!1))
            }
            _updateAncestors(v) {
                this._parent && !v.onlySelf && (this._parent.updateValueAndValidity(v),
                v.skipPristineCheck || this._parent._updatePristine(),
                this._parent._updateTouched())
            }
            setParent(v) {
                this._parent = v
            }
            getRawValue() {
                return this.value
            }
            updateValueAndValidity(v={}) {
                this._setInitialStatus(),
                this._updateValue(),
                this.enabled && (this._cancelExistingSubscription(),
                this.errors = this._runValidator(),
                this.status = this._calculateStatus(),
                (this.status === Xt || this.status === ar) && this._runAsyncValidator(v.emitEvent)),
                !1 !== v.emitEvent && (this.valueChanges.emit(this.value),
                this.statusChanges.emit(this.status)),
                this._parent && !v.onlySelf && this._parent.updateValueAndValidity(v)
            }
            _updateTreeValidity(v={
                emitEvent: !0
            }) {
                this._forEachChild(m => m._updateTreeValidity(v)),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: v.emitEvent
                })
            }
            _setInitialStatus() {
                this.status = this._allControlsDisabled() ? Wn : Xt
            }
            _runValidator() {
                return this.validator ? this.validator(this) : null
            }
            _runAsyncValidator(v) {
                if (this.asyncValidator) {
                    this.status = ar,
                    this._hasOwnPendingAsyncValidator = !0;
                    const m = pn(this.asyncValidator(this));
                    this._asyncValidationSubscription = m.subscribe(O => {
                        this._hasOwnPendingAsyncValidator = !1,
                        this.setErrors(O, {
                            emitEvent: v
                        })
                    }
                    )
                }
            }
            _cancelExistingSubscription() {
                this._asyncValidationSubscription && (this._asyncValidationSubscription.unsubscribe(),
                this._hasOwnPendingAsyncValidator = !1)
            }
            setErrors(v, m={}) {
                this.errors = v,
                this._updateControlsErrors(!1 !== m.emitEvent)
            }
            get(v) {
                let m = v;
                return null == m || (Array.isArray(m) || (m = m.split(".")),
                0 === m.length) ? null : m.reduce( (O, ue) => O && O._find(ue), this)
            }
            getError(v, m) {
                const O = m ? this.get(m) : this;
                return O && O.errors ? O.errors[v] : null
            }
            hasError(v, m) {
                return !!this.getError(v, m)
            }
            get root() {
                let v = this;
                for (; v._parent; )
                    v = v._parent;
                return v
            }
            _updateControlsErrors(v) {
                this.status = this._calculateStatus(),
                v && this.statusChanges.emit(this.status),
                this._parent && this._parent._updateControlsErrors(v)
            }
            _initObservables() {
                this.valueChanges = new a.vpe,
                this.statusChanges = new a.vpe
            }
            _calculateStatus() {
                return this._allControlsDisabled() ? Wn : this.errors ? jn : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(ar) ? ar : this._anyControlsHaveStatus(jn) ? jn : Xt
            }
            _anyControlsHaveStatus(v) {
                return this._anyControls(m => m.status === v)
            }
            _anyControlsDirty() {
                return this._anyControls(v => v.dirty)
            }
            _anyControlsTouched() {
                return this._anyControls(v => v.touched)
            }
            _updatePristine(v={}) {
                this.pristine = !this._anyControlsDirty(),
                this._parent && !v.onlySelf && this._parent._updatePristine(v)
            }
            _updateTouched(v={}) {
                this.touched = this._anyControlsTouched(),
                this._parent && !v.onlySelf && this._parent._updateTouched(v)
            }
            _registerOnCollectionChange(v) {
                this._onCollectionChange = v
            }
            _setUpdateStrategy(v) {
                Kn(v) && null != v.updateOn && (this._updateOn = v.updateOn)
            }
            _parentMarkedDirty(v) {
                return !v && !(!this._parent || !this._parent.dirty) && !this._parent._anyControlsDirty()
            }
            _find(v) {
                return null
            }
        }
        class W extends er {
            constructor(v, m, O) {
                super(mi(m), yr(O, m)),
                this.controls = v,
                this._initObservables(),
                this._setUpdateStrategy(m),
                this._setUpControls(),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !!this.asyncValidator
                })
            }
            registerControl(v, m) {
                return this.controls[v] ? this.controls[v] : (this.controls[v] = m,
                m.setParent(this),
                m._registerOnCollectionChange(this._onCollectionChange),
                m)
            }
            addControl(v, m, O={}) {
                this.registerControl(v, m),
                this.updateValueAndValidity({
                    emitEvent: O.emitEvent
                }),
                this._onCollectionChange()
            }
            removeControl(v, m={}) {
                this.controls[v] && this.controls[v]._registerOnCollectionChange( () => {}
                ),
                delete this.controls[v],
                this.updateValueAndValidity({
                    emitEvent: m.emitEvent
                }),
                this._onCollectionChange()
            }
            setControl(v, m, O={}) {
                this.controls[v] && this.controls[v]._registerOnCollectionChange( () => {}
                ),
                delete this.controls[v],
                m && this.registerControl(v, m),
                this.updateValueAndValidity({
                    emitEvent: O.emitEvent
                }),
                this._onCollectionChange()
            }
            contains(v) {
                return this.controls.hasOwnProperty(v) && this.controls[v].enabled
            }
            setValue(v, m={}) {
                Xn(this, 0, v),
                Object.keys(v).forEach(O => {
                    vr(this, !0, O),
                    this.controls[O].setValue(v[O], {
                        onlySelf: !0,
                        emitEvent: m.emitEvent
                    })
                }
                ),
                this.updateValueAndValidity(m)
            }
            patchValue(v, m={}) {
                null != v && (Object.keys(v).forEach(O => {
                    const ue = this.controls[O];
                    ue && ue.patchValue(v[O], {
                        onlySelf: !0,
                        emitEvent: m.emitEvent
                    })
                }
                ),
                this.updateValueAndValidity(m))
            }
            reset(v={}, m={}) {
                this._forEachChild( (O, ue) => {
                    O.reset(v[ue], {
                        onlySelf: !0,
                        emitEvent: m.emitEvent
                    })
                }
                ),
                this._updatePristine(m),
                this._updateTouched(m),
                this.updateValueAndValidity(m)
            }
            getRawValue() {
                return this._reduceChildren({}, (v, m, O) => (v[O] = m.getRawValue(),
                v))
            }
            _syncPendingControls() {
                let v = this._reduceChildren(!1, (m, O) => !!O._syncPendingControls() || m);
                return v && this.updateValueAndValidity({
                    onlySelf: !0
                }),
                v
            }
            _forEachChild(v) {
                Object.keys(this.controls).forEach(m => {
                    const O = this.controls[m];
                    O && v(O, m)
                }
                )
            }
            _setUpControls() {
                this._forEachChild(v => {
                    v.setParent(this),
                    v._registerOnCollectionChange(this._onCollectionChange)
                }
                )
            }
            _updateValue() {
                this.value = this._reduceValue()
            }
            _anyControls(v) {
                for (const [m,O] of Object.entries(this.controls))
                    if (this.contains(m) && v(O))
                        return !0;
                return !1
            }
            _reduceValue() {
                return this._reduceChildren({}, (m, O, ue) => ((O.enabled || this.disabled) && (m[ue] = O.value),
                m))
            }
            _reduceChildren(v, m) {
                let O = v;
                return this._forEachChild( (ue, Ze) => {
                    O = m(O, ue, Ze)
                }
                ),
                O
            }
            _allControlsDisabled() {
                for (const v of Object.keys(this.controls))
                    if (this.controls[v].enabled)
                        return !1;
                return Object.keys(this.controls).length > 0 || this.disabled
            }
            _find(v) {
                return this.controls.hasOwnProperty(v) ? this.controls[v] : null
            }
        }
        function me(E, v) {
            return [...v.path, E]
        }
        function He(E, v) {
            $t(E, v),
            v.valueAccessor.writeValue(E.value),
            E.disabled && v.valueAccessor.setDisabledState?.(!0),
            function Ft(E, v) {
                v.valueAccessor.registerOnChange(m => {
                    E._pendingValue = m,
                    E._pendingChange = !0,
                    E._pendingDirty = !0,
                    "change" === E.updateOn && In(E, v)
                }
                )
            }(E, v),
            function ft(E, v) {
                const m = (O, ue) => {
                    v.valueAccessor.writeValue(O),
                    ue && v.viewToModelUpdate(O)
                }
                ;
                E.registerOnChange(m),
                v._registerOnDestroy( () => {
                    E._unregisterOnChange(m)
                }
                )
            }(E, v),
            function $n(E, v) {
                v.valueAccessor.registerOnTouched( () => {
                    E._pendingTouched = !0,
                    "blur" === E.updateOn && E._pendingChange && In(E, v),
                    "submit" !== E.updateOn && E.markAsTouched()
                }
                )
            }(E, v),
            function sn(E, v) {
                if (v.valueAccessor.setDisabledState) {
                    const m = O => {
                        v.valueAccessor.setDisabledState(O)
                    }
                    ;
                    E.registerOnDisabledChange(m),
                    v._registerOnDestroy( () => {
                        E._unregisterOnDisabledChange(m)
                    }
                    )
                }
            }(E, v)
        }
        function Ct(E, v, m=!0) {
            const O = () => {}
            ;
            v.valueAccessor && (v.valueAccessor.registerOnChange(O),
            v.valueAccessor.registerOnTouched(O)),
            wn(E, v),
            E && (v._invokeOnDestroyCallbacks(),
            E._registerOnCollectionChange( () => {}
            ))
        }
        function kt(E, v) {
            E.forEach(m => {
                m.registerOnValidatorChange && m.registerOnValidatorChange(v)
            }
            )
        }
        function $t(E, v) {
            const m = jt(E);
            null !== v.validator ? E.setValidators(dn(m, v.validator)) : "function" == typeof m && E.setValidators([m]);
            const O = Tn(E);
            null !== v.asyncValidator ? E.setAsyncValidators(dn(O, v.asyncValidator)) : "function" == typeof O && E.setAsyncValidators([O]);
            const ue = () => E.updateValueAndValidity();
            kt(v._rawValidators, ue),
            kt(v._rawAsyncValidators, ue)
        }
        function wn(E, v) {
            let m = !1;
            if (null !== E) {
                if (null !== v.validator) {
                    const ue = jt(E);
                    if (Array.isArray(ue) && ue.length > 0) {
                        const Ze = ue.filter(cn => cn !== v.validator);
                        Ze.length !== ue.length && (m = !0,
                        E.setValidators(Ze))
                    }
                }
                if (null !== v.asyncValidator) {
                    const ue = Tn(E);
                    if (Array.isArray(ue) && ue.length > 0) {
                        const Ze = ue.filter(cn => cn !== v.asyncValidator);
                        Ze.length !== ue.length && (m = !0,
                        E.setAsyncValidators(Ze))
                    }
                }
            }
            const O = () => {}
            ;
            return kt(v._rawValidators, O),
            kt(v._rawAsyncValidators, O),
            m
        }
        function In(E, v) {
            E._pendingDirty && E.markAsDirty(),
            E.setValue(E._pendingValue, {
                emitModelToViewChange: !1
            }),
            v.viewToModelUpdate(E._pendingValue),
            E._pendingChange = !1
        }
        function lr(E, v) {
            if (!E.hasOwnProperty("model"))
                return !1;
            const m = E.model;
            return !!m.isFirstChange() || !Object.is(v, m.currentValue)
        }
        function gn(E, v) {
            if (!v)
                return null;
            let m, O, ue;
            return Array.isArray(v),
            v.forEach(Ze => {
                Ze.constructor === fe ? m = Ze : function Pn(E) {
                    return Object.getPrototypeOf(E.constructor) === ce
                }(Ze) ? O = Ze : ue = Ze
            }
            ),
            ue || O || m || null
        }
        function cr(E, v) {
            const m = E.indexOf(v);
            m > -1 && E.splice(m, 1)
        }
        function zr(E) {
            return "object" == typeof E && null !== E && 2 === Object.keys(E).length && "value"in E && "disabled"in E
        }
        const qn = class extends er {
            constructor(v=null, m, O) {
                super(mi(m), yr(O, m)),
                this.defaultValue = null,
                this._onChange = [],
                this._pendingChange = !1,
                this._applyFormState(v),
                this._setUpdateStrategy(m),
                this._initObservables(),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !!this.asyncValidator
                }),
                Kn(m) && (m.nonNullable || m.initialValueIsDefault) && (this.defaultValue = zr(v) ? v.value : v)
            }
            setValue(v, m={}) {
                this.value = this._pendingValue = v,
                this._onChange.length && !1 !== m.emitModelToViewChange && this._onChange.forEach(O => O(this.value, !1 !== m.emitViewToModelChange)),
                this.updateValueAndValidity(m)
            }
            patchValue(v, m={}) {
                this.setValue(v, m)
            }
            reset(v=this.defaultValue, m={}) {
                this._applyFormState(v),
                this.markAsPristine(m),
                this.markAsUntouched(m),
                this.setValue(this.value, m),
                this._pendingChange = !1
            }
            _updateValue() {}
            _anyControls(v) {
                return !1
            }
            _allControlsDisabled() {
                return this.disabled
            }
            registerOnChange(v) {
                this._onChange.push(v)
            }
            _unregisterOnChange(v) {
                cr(this._onChange, v)
            }
            registerOnDisabledChange(v) {
                this._onDisabledChange.push(v)
            }
            _unregisterOnDisabledChange(v) {
                cr(this._onDisabledChange, v)
            }
            _forEachChild(v) {}
            _syncPendingControls() {
                return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(),
                this._pendingTouched && this.markAsTouched(),
                !this._pendingChange) || (this.setValue(this._pendingValue, {
                    onlySelf: !0,
                    emitModelToViewChange: !1
                }),
                0))
            }
            _applyFormState(v) {
                zr(v) ? (this.value = this._pendingValue = v.value,
                v.disabled ? this.disable({
                    onlySelf: !0,
                    emitEvent: !1
                }) : this.enable({
                    onlySelf: !0,
                    emitEvent: !1
                })) : this.value = this._pendingValue = v
            }
        }
          , Mi = {
            provide: An,
            useExisting: (0,
            a.Gpc)( () => yi)
        }
          , Ti = ( () => Promise.resolve(null))();
        let yi = ( () => {
            class E extends An {
                constructor(m, O, ue, Ze, cn) {
                    super(),
                    this._changeDetectorRef = cn,
                    this.control = new qn,
                    this._registered = !1,
                    this.update = new a.vpe,
                    this._parent = m,
                    this._setValidators(O),
                    this._setAsyncValidators(ue),
                    this.valueAccessor = gn(0, Ze)
                }
                ngOnChanges(m) {
                    if (this._checkForErrors(),
                    !this._registered || "name"in m) {
                        if (this._registered && (this._checkName(),
                        this.formDirective)) {
                            const O = m.name.previousValue;
                            this.formDirective.removeControl({
                                name: O,
                                path: this._getPath(O)
                            })
                        }
                        this._setUpControl()
                    }
                    "isDisabled"in m && this._updateDisabled(m),
                    lr(m, this.viewModel) && (this._updateValue(this.model),
                    this.viewModel = this.model)
                }
                ngOnDestroy() {
                    this.formDirective && this.formDirective.removeControl(this)
                }
                get path() {
                    return this._getPath(this.name)
                }
                get formDirective() {
                    return this._parent ? this._parent.formDirective : null
                }
                viewToModelUpdate(m) {
                    this.viewModel = m,
                    this.update.emit(m)
                }
                _setUpControl() {
                    this._setUpdateStrategy(),
                    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this),
                    this._registered = !0
                }
                _setUpdateStrategy() {
                    this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn)
                }
                _isStandalone() {
                    return !this._parent || !(!this.options || !this.options.standalone)
                }
                _setUpStandalone() {
                    He(this.control, this),
                    this.control.updateValueAndValidity({
                        emitEvent: !1
                    })
                }
                _checkForErrors() {
                    this._isStandalone() || this._checkParentType(),
                    this._checkName()
                }
                _checkParentType() {}
                _checkName() {
                    this.options && this.options.name && (this.name = this.options.name),
                    this._isStandalone()
                }
                _updateValue(m) {
                    Ti.then( () => {
                        this.control.setValue(m, {
                            emitViewToModelChange: !1
                        }),
                        this._changeDetectorRef?.markForCheck()
                    }
                    )
                }
                _updateDisabled(m) {
                    const O = m.isDisabled.currentValue
                      , ue = 0 !== O && (0,
                    a.D6c)(O);
                    Ti.then( () => {
                        ue && !this.control.disabled ? this.control.disable() : !ue && this.control.disabled && this.control.enable(),
                        this._changeDetectorRef?.markForCheck()
                    }
                    )
                }
                _getPath(m) {
                    return this._parent ? me(m, this._parent) : [m]
                }
            }
            return E.\u0275fac = function(m) {
                return new (m || E)(a.Y36(ln, 9),a.Y36(ye, 10),a.Y36(De, 10),a.Y36(Ne, 10),a.Y36(a.sBO, 8))
            }
            ,
            E.\u0275dir = a.lG2({
                type: E,
                selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
                inputs: {
                    name: "name",
                    isDisabled: ["disabled", "isDisabled"],
                    model: ["ngModel", "model"],
                    options: ["ngModelOptions", "options"]
                },
                outputs: {
                    update: "ngModelChange"
                },
                exportAs: ["ngModel"],
                features: [a._Bn([Mi]), a.qOj, a.TTD]
            }),
            E
        }
        )()
          , Si = ( () => {
            class E {
            }
            return E.\u0275fac = function(m) {
                return new (m || E)
            }
            ,
            E.\u0275dir = a.lG2({
                type: E,
                selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
                hostAttrs: ["novalidate", ""]
            }),
            E
        }
        )()
          , Dr = ( () => {
            class E {
            }
            return E.\u0275fac = function(m) {
                return new (m || E)
            }
            ,
            E.\u0275mod = a.oAB({
                type: E
            }),
            E.\u0275inj = a.cJS({}),
            E
        }
        )();
        const ai = new a.OlP("NgModelWithFormControlWarning")
          , Gi = {
            provide: ln,
            useExisting: (0,
            a.Gpc)( () => hr)
        };
        let hr = ( () => {
            class E extends ln {
                constructor(m, O) {
                    super(),
                    this.validators = m,
                    this.asyncValidators = O,
                    this.submitted = !1,
                    this._onCollectionChange = () => this._updateDomValue(),
                    this.directives = [],
                    this.form = null,
                    this.ngSubmit = new a.vpe,
                    this._setValidators(m),
                    this._setAsyncValidators(O)
                }
                ngOnChanges(m) {
                    this._checkFormPresent(),
                    m.hasOwnProperty("form") && (this._updateValidators(),
                    this._updateDomValue(),
                    this._updateRegistrations(),
                    this._oldForm = this.form)
                }
                ngOnDestroy() {
                    this.form && (wn(this.form, this),
                    this.form._onCollectionChange === this._onCollectionChange && this.form._registerOnCollectionChange( () => {}
                    ))
                }
                get formDirective() {
                    return this
                }
                get control() {
                    return this.form
                }
                get path() {
                    return []
                }
                addControl(m) {
                    const O = this.form.get(m.path);
                    return He(O, m),
                    O.updateValueAndValidity({
                        emitEvent: !1
                    }),
                    this.directives.push(m),
                    O
                }
                getControl(m) {
                    return this.form.get(m.path)
                }
                removeControl(m) {
                    Ct(m.control || null, m, !1),
                    function Vt(E, v) {
                        const m = E.indexOf(v);
                        m > -1 && E.splice(m, 1)
                    }(this.directives, m)
                }
                addFormGroup(m) {
                    this._setUpFormContainer(m)
                }
                removeFormGroup(m) {
                    this._cleanUpFormContainer(m)
                }
                getFormGroup(m) {
                    return this.form.get(m.path)
                }
                addFormArray(m) {
                    this._setUpFormContainer(m)
                }
                removeFormArray(m) {
                    this._cleanUpFormContainer(m)
                }
                getFormArray(m) {
                    return this.form.get(m.path)
                }
                updateModel(m, O) {
                    this.form.get(m.path).setValue(O)
                }
                onSubmit(m) {
                    return this.submitted = !0,
                    function Or(E, v) {
                        E._syncPendingControls(),
                        v.forEach(m => {
                            const O = m.control;
                            "submit" === O.updateOn && O._pendingChange && (m.viewToModelUpdate(O._pendingValue),
                            O._pendingChange = !1)
                        }
                        )
                    }(this.form, this.directives),
                    this.ngSubmit.emit(m),
                    !1
                }
                onReset() {
                    this.resetForm()
                }
                resetForm(m) {
                    this.form.reset(m),
                    this.submitted = !1
                }
                _updateDomValue() {
                    this.directives.forEach(m => {
                        const O = m.control
                          , ue = this.form.get(m.path);
                        O !== ue && (Ct(O || null, m),
                        (E => E instanceof qn)(ue) && (He(ue, m),
                        m.control = ue))
                    }
                    ),
                    this.form._updateTreeValidity({
                        emitEvent: !1
                    })
                }
                _setUpFormContainer(m) {
                    const O = this.form.get(m.path);
                    (function _r(E, v) {
                        $t(E, v)
                    }
                    )(O, m),
                    O.updateValueAndValidity({
                        emitEvent: !1
                    })
                }
                _cleanUpFormContainer(m) {
                    if (this.form) {
                        const O = this.form.get(m.path);
                        O && function Pr(E, v) {
                            return wn(E, v)
                        }(O, m) && O.updateValueAndValidity({
                            emitEvent: !1
                        })
                    }
                }
                _updateRegistrations() {
                    this.form._registerOnCollectionChange(this._onCollectionChange),
                    this._oldForm && this._oldForm._registerOnCollectionChange( () => {}
                    )
                }
                _updateValidators() {
                    $t(this.form, this),
                    this._oldForm && wn(this._oldForm, this)
                }
                _checkFormPresent() {}
            }
            return E.\u0275fac = function(m) {
                return new (m || E)(a.Y36(ye, 10),a.Y36(De, 10))
            }
            ,
            E.\u0275dir = a.lG2({
                type: E,
                selectors: [["", "formGroup", ""]],
                hostBindings: function(m, O) {
                    1 & m && a.NdJ("submit", function(Ze) {
                        return O.onSubmit(Ze)
                    })("reset", function() {
                        return O.onReset()
                    })
                },
                inputs: {
                    form: ["formGroup", "form"]
                },
                outputs: {
                    ngSubmit: "ngSubmit"
                },
                exportAs: ["ngForm"],
                features: [a._Bn([Gi]), a.qOj, a.TTD]
            }),
            E
        }
        )();
        const Pi = {
            provide: An,
            useExisting: (0,
            a.Gpc)( () => Kr)
        };
        let Kr = ( () => {
            class E extends An {
                constructor(m, O, ue, Ze, cn) {
                    super(),
                    this._ngModelWarningConfig = cn,
                    this._added = !1,
                    this.update = new a.vpe,
                    this._ngModelWarningSent = !1,
                    this._parent = m,
                    this._setValidators(O),
                    this._setAsyncValidators(ue),
                    this.valueAccessor = gn(0, Ze)
                }
                set isDisabled(m) {}
                ngOnChanges(m) {
                    this._added || this._setUpControl(),
                    lr(m, this.viewModel) && (this.viewModel = this.model,
                    this.formDirective.updateModel(this, this.model))
                }
                ngOnDestroy() {
                    this.formDirective && this.formDirective.removeControl(this)
                }
                viewToModelUpdate(m) {
                    this.viewModel = m,
                    this.update.emit(m)
                }
                get path() {
                    return me(null == this.name ? this.name : this.name.toString(), this._parent)
                }
                get formDirective() {
                    return this._parent ? this._parent.formDirective : null
                }
                _checkParentType() {}
                _setUpControl() {
                    this._checkParentType(),
                    this.control = this.formDirective.addControl(this),
                    this._added = !0
                }
            }
            return E._ngModelWarningSentOnce = !1,
            E.\u0275fac = function(m) {
                return new (m || E)(a.Y36(ln, 13),a.Y36(ye, 10),a.Y36(De, 10),a.Y36(Ne, 10),a.Y36(ai, 8))
            }
            ,
            E.\u0275dir = a.lG2({
                type: E,
                selectors: [["", "formControlName", ""]],
                inputs: {
                    name: ["formControlName", "name"],
                    isDisabled: ["disabled", "isDisabled"],
                    model: ["ngModel", "model"]
                },
                outputs: {
                    update: "ngModelChange"
                },
                features: [a._Bn([Pi]), a.qOj, a.TTD]
            }),
            E
        }
        )();
        const Oi = {
            provide: Ne,
            useExisting: (0,
            a.Gpc)( () => di),
            multi: !0
        };
        function ci(E, v) {
            return null == E ? `${v}` : (v && "object" == typeof v && (v = "Object"),
            `${E}: ${v}`.slice(0, 50))
        }
        let di = ( () => {
            class E extends ce {
                constructor() {
                    super(...arguments),
                    this._optionMap = new Map,
                    this._idCounter = 0,
                    this._compareWith = Object.is
                }
                set compareWith(m) {
                    this._compareWith = m
                }
                writeValue(m) {
                    this.value = m;
                    const ue = ci(this._getOptionId(m), m);
                    this.setProperty("value", ue)
                }
                registerOnChange(m) {
                    this.onChange = O => {
                        this.value = this._getOptionValue(O),
                        m(this.value)
                    }
                }
                _registerOption() {
                    return (this._idCounter++).toString()
                }
                _getOptionId(m) {
                    for (const O of Array.from(this._optionMap.keys()))
                        if (this._compareWith(this._optionMap.get(O), m))
                            return O;
                    return null
                }
                _getOptionValue(m) {
                    const O = function oo(E) {
                        return E.split(":")[0]
                    }(m);
                    return this._optionMap.has(O) ? this._optionMap.get(O) : m
                }
            }
            return E.\u0275fac = function() {
                let v;
                return function(O) {
                    return (v || (v = a.n5z(E)))(O || E)
                }
            }(),
            E.\u0275dir = a.lG2({
                type: E,
                selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
                hostBindings: function(m, O) {
                    1 & m && a.NdJ("change", function(Ze) {
                        return O.onChange(Ze.target.value)
                    })("blur", function() {
                        return O.onTouched()
                    })
                },
                inputs: {
                    compareWith: "compareWith"
                },
                features: [a._Bn([Oi]), a.qOj]
            }),
            E
        }
        )()
          , Rr = ( () => {
            class E {
                constructor(m, O, ue) {
                    this._element = m,
                    this._renderer = O,
                    this._select = ue,
                    this._select && (this.id = this._select._registerOption())
                }
                set ngValue(m) {
                    null != this._select && (this._select._optionMap.set(this.id, m),
                    this._setElementValue(ci(this.id, m)),
                    this._select.writeValue(this._select.value))
                }
                set value(m) {
                    this._setElementValue(m),
                    this._select && this._select.writeValue(this._select.value)
                }
                _setElementValue(m) {
                    this._renderer.setProperty(this._element.nativeElement, "value", m)
                }
                ngOnDestroy() {
                    this._select && (this._select._optionMap.delete(this.id),
                    this._select.writeValue(this._select.value))
                }
            }
            return E.\u0275fac = function(m) {
                return new (m || E)(a.Y36(a.SBq),a.Y36(a.Qsj),a.Y36(di, 9))
            }
            ,
            E.\u0275dir = a.lG2({
                type: E,
                selectors: [["option"]],
                inputs: {
                    ngValue: "ngValue",
                    value: "value"
                }
            }),
            E
        }
        )();
        const _i = {
            provide: Ne,
            useExisting: (0,
            a.Gpc)( () => Yr),
            multi: !0
        };
        function Lr(E, v) {
            return null == E ? `${v}` : ("string" == typeof v && (v = `'${v}'`),
            v && "object" == typeof v && (v = "Object"),
            `${E}: ${v}`.slice(0, 50))
        }
        let Yr = ( () => {
            class E extends ce {
                constructor() {
                    super(...arguments),
                    this._optionMap = new Map,
                    this._idCounter = 0,
                    this._compareWith = Object.is
                }
                set compareWith(m) {
                    this._compareWith = m
                }
                writeValue(m) {
                    let O;
                    if (this.value = m,
                    Array.isArray(m)) {
                        const ue = m.map(Ze => this._getOptionId(Ze));
                        O = (Ze, cn) => {
                            Ze._setSelected(ue.indexOf(cn.toString()) > -1)
                        }
                    } else
                        O = (ue, Ze) => {
                            ue._setSelected(!1)
                        }
                        ;
                    this._optionMap.forEach(O)
                }
                registerOnChange(m) {
                    this.onChange = O => {
                        const ue = []
                          , Ze = O.selectedOptions;
                        if (void 0 !== Ze) {
                            const cn = Ze;
                            for (let xn = 0; xn < cn.length; xn++) {
                                const Ln = this._getOptionValue(cn[xn].value);
                                ue.push(Ln)
                            }
                        } else {
                            const cn = O.options;
                            for (let xn = 0; xn < cn.length; xn++) {
                                const hn = cn[xn];
                                if (hn.selected) {
                                    const Ln = this._getOptionValue(hn.value);
                                    ue.push(Ln)
                                }
                            }
                        }
                        this.value = ue,
                        m(ue)
                    }
                }
                _registerOption(m) {
                    const O = (this._idCounter++).toString();
                    return this._optionMap.set(O, m),
                    O
                }
                _getOptionId(m) {
                    for (const O of Array.from(this._optionMap.keys()))
                        if (this._compareWith(this._optionMap.get(O)._value, m))
                            return O;
                    return null
                }
                _getOptionValue(m) {
                    const O = function so(E) {
                        return E.split(":")[0]
                    }(m);
                    return this._optionMap.has(O) ? this._optionMap.get(O)._value : m
                }
            }
            return E.\u0275fac = function() {
                let v;
                return function(O) {
                    return (v || (v = a.n5z(E)))(O || E)
                }
            }(),
            E.\u0275dir = a.lG2({
                type: E,
                selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
                hostBindings: function(m, O) {
                    1 & m && a.NdJ("change", function(Ze) {
                        return O.onChange(Ze.target)
                    })("blur", function() {
                        return O.onTouched()
                    })
                },
                inputs: {
                    compareWith: "compareWith"
                },
                features: [a._Bn([_i]), a.qOj]
            }),
            E
        }
        )()
          , xi = ( () => {
            class E {
                constructor(m, O, ue) {
                    this._element = m,
                    this._renderer = O,
                    this._select = ue,
                    this._select && (this.id = this._select._registerOption(this))
                }
                set ngValue(m) {
                    null != this._select && (this._value = m,
                    this._setElementValue(Lr(this.id, m)),
                    this._select.writeValue(this._select.value))
                }
                set value(m) {
                    this._select ? (this._value = m,
                    this._setElementValue(Lr(this.id, m)),
                    this._select.writeValue(this._select.value)) : this._setElementValue(m)
                }
                _setElementValue(m) {
                    this._renderer.setProperty(this._element.nativeElement, "value", m)
                }
                _setSelected(m) {
                    this._renderer.setProperty(this._element.nativeElement, "selected", m)
                }
                ngOnDestroy() {
                    this._select && (this._select._optionMap.delete(this.id),
                    this._select.writeValue(this._select.value))
                }
            }
            return E.\u0275fac = function(m) {
                return new (m || E)(a.Y36(a.SBq),a.Y36(a.Qsj),a.Y36(Yr, 9))
            }
            ,
            E.\u0275dir = a.lG2({
                type: E,
                selectors: [["option"]],
                inputs: {
                    ngValue: "ngValue",
                    value: "value"
                }
            }),
            E
        }
        )()
          , Rn = ( () => {
            class E {
            }
            return E.\u0275fac = function(m) {
                return new (m || E)
            }
            ,
            E.\u0275mod = a.oAB({
                type: E
            }),
            E.\u0275inj = a.cJS({
                imports: [Dr]
            }),
            E
        }
        )()
          , qr = ( () => {
            class E {
            }
            return E.\u0275fac = function(m) {
                return new (m || E)
            }
            ,
            E.\u0275mod = a.oAB({
                type: E
            }),
            E.\u0275inj = a.cJS({
                imports: [Rn]
            }),
            E
        }
        )()
          , hi = ( () => {
            class E {
                static withConfig(m) {
                    return {
                        ngModule: E,
                        providers: [{
                            provide: ai,
                            useValue: m.warnOnNgModelWithFormControl
                        }]
                    }
                }
            }
            return E.\u0275fac = function(m) {
                return new (m || E)
            }
            ,
            E.\u0275mod = a.oAB({
                type: E
            }),
            E.\u0275inj = a.cJS({
                imports: [Rn]
            }),
            E
        }
        )();
        class Qr extends er {
            constructor(v, m, O) {
                super(mi(m), yr(O, m)),
                this.controls = v,
                this._initObservables(),
                this._setUpdateStrategy(m),
                this._setUpControls(),
                this.updateValueAndValidity({
                    onlySelf: !0,
                    emitEvent: !!this.asyncValidator
                })
            }
            at(v) {
                return this.controls[this._adjustIndex(v)]
            }
            push(v, m={}) {
                this.controls.push(v),
                this._registerControl(v),
                this.updateValueAndValidity({
                    emitEvent: m.emitEvent
                }),
                this._onCollectionChange()
            }
            insert(v, m, O={}) {
                this.controls.splice(v, 0, m),
                this._registerControl(m),
                this.updateValueAndValidity({
                    emitEvent: O.emitEvent
                })
            }
            removeAt(v, m={}) {
                let O = this._adjustIndex(v);
                O < 0 && (O = 0),
                this.controls[O] && this.controls[O]._registerOnCollectionChange( () => {}
                ),
                this.controls.splice(O, 1),
                this.updateValueAndValidity({
                    emitEvent: m.emitEvent
                })
            }
            setControl(v, m, O={}) {
                let ue = this._adjustIndex(v);
                ue < 0 && (ue = 0),
                this.controls[ue] && this.controls[ue]._registerOnCollectionChange( () => {}
                ),
                this.controls.splice(ue, 1),
                m && (this.controls.splice(ue, 0, m),
                this._registerControl(m)),
                this.updateValueAndValidity({
                    emitEvent: O.emitEvent
                }),
                this._onCollectionChange()
            }
            get length() {
                return this.controls.length
            }
            setValue(v, m={}) {
                Xn(this, 0, v),
                v.forEach( (O, ue) => {
                    vr(this, !1, ue),
                    this.at(ue).setValue(O, {
                        onlySelf: !0,
                        emitEvent: m.emitEvent
                    })
                }
                ),
                this.updateValueAndValidity(m)
            }
            patchValue(v, m={}) {
                null != v && (v.forEach( (O, ue) => {
                    this.at(ue) && this.at(ue).patchValue(O, {
                        onlySelf: !0,
                        emitEvent: m.emitEvent
                    })
                }
                ),
                this.updateValueAndValidity(m))
            }
            reset(v=[], m={}) {
                this._forEachChild( (O, ue) => {
                    O.reset(v[ue], {
                        onlySelf: !0,
                        emitEvent: m.emitEvent
                    })
                }
                ),
                this._updatePristine(m),
                this._updateTouched(m),
                this.updateValueAndValidity(m)
            }
            getRawValue() {
                return this.controls.map(v => v.getRawValue())
            }
            clear(v={}) {
                this.controls.length < 1 || (this._forEachChild(m => m._registerOnCollectionChange( () => {}
                )),
                this.controls.splice(0),
                this.updateValueAndValidity({
                    emitEvent: v.emitEvent
                }))
            }
            _adjustIndex(v) {
                return v < 0 ? v + this.length : v
            }
            _syncPendingControls() {
                let v = this.controls.reduce( (m, O) => !!O._syncPendingControls() || m, !1);
                return v && this.updateValueAndValidity({
                    onlySelf: !0
                }),
                v
            }
            _forEachChild(v) {
                this.controls.forEach( (m, O) => {
                    v(m, O)
                }
                )
            }
            _updateValue() {
                this.value = this.controls.filter(v => v.enabled || this.disabled).map(v => v.value)
            }
            _anyControls(v) {
                return this.controls.some(m => m.enabled && v(m))
            }
            _setUpControls() {
                this._forEachChild(v => this._registerControl(v))
            }
            _allControlsDisabled() {
                for (const v of this.controls)
                    if (v.enabled)
                        return !1;
                return this.controls.length > 0 || this.disabled
            }
            _registerControl(v) {
                v.setParent(this),
                v._registerOnCollectionChange(this._onCollectionChange)
            }
            _find(v) {
                return this.at(v) ?? null
            }
        }
        function Pt(E) {
            return !!E && (void 0 !== E.asyncValidators || void 0 !== E.validators || void 0 !== E.updateOn)
        }
        let lo = ( () => {
            class E {
                constructor() {
                    this.useNonNullable = !1
                }
                get nonNullable() {
                    const m = new E;
                    return m.useNonNullable = !0,
                    m
                }
                group(m, O=null) {
                    const ue = this._reduceControls(m);
                    let Ze = {};
                    return Pt(O) ? Ze = O : null !== O && (Ze.validators = O.validator,
                    Ze.asyncValidators = O.asyncValidator),
                    new W(ue,Ze)
                }
                control(m, O, ue) {
                    let Ze = {};
                    return this.useNonNullable ? (Pt(O) ? Ze = O : (Ze.validators = O,
                    Ze.asyncValidators = ue),
                    new qn(m,{
                        ...Ze,
                        nonNullable: !0
                    })) : new qn(m,O,ue)
                }
                array(m, O, ue) {
                    const Ze = m.map(cn => this._createControl(cn));
                    return new Qr(Ze,O,ue)
                }
                _reduceControls(m) {
                    const O = {};
                    return Object.keys(m).forEach(ue => {
                        O[ue] = this._createControl(m[ue])
                    }
                    ),
                    O
                }
                _createControl(m) {
                    return m instanceof qn || m instanceof er ? m : Array.isArray(m) ? this.control(m[0], m.length > 1 ? m[1] : null, m.length > 2 ? m[2] : null) : this.control(m)
                }
            }
            return E.\u0275fac = function(m) {
                return new (m || E)
            }
            ,
            E.\u0275prov = a.Yz7({
                token: E,
                factory: E.\u0275fac,
                providedIn: hi
            }),
            E
        }
        )()
    }
    ,
    1481: (Je, pe, I) => {
        I.d(pe, {
            Dx: () => B,
            H7: () => Kn,
            b2: () => An,
            q6: () => Kt,
            se: () => K
        });
        var a = I(6895)
          , b = I(8256);
        class oe extends a.w_ {
            constructor() {
                super(...arguments),
                this.supportsDOMEvents = !0
            }
        }
        class te extends oe {
            static makeCurrent() {
                (0,
                a.HT)(new te)
            }
            onAndCancel(H, L, Y) {
                return H.addEventListener(L, Y, !1),
                () => {
                    H.removeEventListener(L, Y, !1)
                }
            }
            dispatchEvent(H, L) {
                H.dispatchEvent(L)
            }
            remove(H) {
                H.parentNode && H.parentNode.removeChild(H)
            }
            createElement(H, L) {
                return (L = L || this.getDefaultDocument()).createElement(H)
            }
            createHtmlDocument() {
                return document.implementation.createHTMLDocument("fakeTitle")
            }
            getDefaultDocument() {
                return document
            }
            isElementNode(H) {
                return H.nodeType === Node.ELEMENT_NODE
            }
            isShadowRoot(H) {
                return H instanceof DocumentFragment
            }
            getGlobalEventTarget(H, L) {
                return "window" === L ? window : "document" === L ? H : "body" === L ? H.body : null
            }
            getBaseHref(H) {
                const L = function be() {
                    return ie = ie || document.querySelector("base"),
                    ie ? ie.getAttribute("href") : null
                }();
                return null == L ? null : function Oe(W) {
                    Ce = Ce || document.createElement("a"),
                    Ce.setAttribute("href", W);
                    const H = Ce.pathname;
                    return "/" === H.charAt(0) ? H : `/${H}`
                }(L)
            }
            resetBaseElement() {
                ie = null
            }
            getUserAgent() {
                return window.navigator.userAgent
            }
            getCookie(H) {
                return (0,
                a.Mx)(document.cookie, H)
            }
        }
        let Ce, ie = null;
        const Se = new b.OlP("TRANSITION_ID")
          , z = [{
            provide: b.ip1,
            useFactory: function de(W, H, L) {
                return () => {
                    L.get(b.CZH).donePromise.then( () => {
                        const Y = (0,
                        a.q)()
                          , Ee = H.querySelectorAll(`style[ng-transition="${W}"]`);
                        for (let me = 0; me < Ee.length; me++)
                            Y.remove(Ee[me])
                    }
                    )
                }
            },
            deps: [Se, a.K0, b.zs3],
            multi: !0
        }];
        let xe = ( () => {
            class W {
                build() {
                    return new XMLHttpRequest
                }
            }
            return W.\u0275fac = function(L) {
                return new (L || W)
            }
            ,
            W.\u0275prov = b.Yz7({
                token: W,
                factory: W.\u0275fac
            }),
            W
        }
        )();
        const ce = new b.OlP("EventManagerPlugins");
        let Ne = ( () => {
            class W {
                constructor(L, Y) {
                    this._zone = Y,
                    this._eventNameToPlugin = new Map,
                    L.forEach(Ee => Ee.manager = this),
                    this._plugins = L.slice().reverse()
                }
                addEventListener(L, Y, Ee) {
                    return this._findPluginFor(Y).addEventListener(L, Y, Ee)
                }
                addGlobalEventListener(L, Y, Ee) {
                    return this._findPluginFor(Y).addGlobalEventListener(L, Y, Ee)
                }
                getZone() {
                    return this._zone
                }
                _findPluginFor(L) {
                    const Y = this._eventNameToPlugin.get(L);
                    if (Y)
                        return Y;
                    const Ee = this._plugins;
                    for (let me = 0; me < Ee.length; me++) {
                        const He = Ee[me];
                        if (He.supports(L))
                            return this._eventNameToPlugin.set(L, He),
                            He
                    }
                    throw new Error(`No event manager plugin found for event ${L}`)
                }
            }
            return W.\u0275fac = function(L) {
                return new (L || W)(b.LFG(ce),b.LFG(b.R0b))
            }
            ,
            W.\u0275prov = b.Yz7({
                token: W,
                factory: W.\u0275fac
            }),
            W
        }
        )();
        class je {
            constructor(H) {
                this._doc = H
            }
            addGlobalEventListener(H, L, Y) {
                const Ee = (0,
                a.q)().getGlobalEventTarget(this._doc, H);
                if (!Ee)
                    throw new Error(`Unsupported event target ${Ee} for event ${L}`);
                return this.addEventListener(Ee, L, Y)
            }
        }
        let Qe = ( () => {
            class W {
                constructor() {
                    this._stylesSet = new Set
                }
                addStyles(L) {
                    const Y = new Set;
                    L.forEach(Ee => {
                        this._stylesSet.has(Ee) || (this._stylesSet.add(Ee),
                        Y.add(Ee))
                    }
                    ),
                    this.onStylesAdded(Y)
                }
                onStylesAdded(L) {}
                getAllStyles() {
                    return Array.from(this._stylesSet)
                }
            }
            return W.\u0275fac = function(L) {
                return new (L || W)
            }
            ,
            W.\u0275prov = b.Yz7({
                token: W,
                factory: W.\u0275fac
            }),
            W
        }
        )()
          , it = ( () => {
            class W extends Qe {
                constructor(L) {
                    super(),
                    this._doc = L,
                    this._hostNodes = new Map,
                    this._hostNodes.set(L.head, [])
                }
                _addStylesToHost(L, Y, Ee) {
                    L.forEach(me => {
                        const He = this._doc.createElement("style");
                        He.textContent = me,
                        Ee.push(Y.appendChild(He))
                    }
                    )
                }
                addHost(L) {
                    const Y = [];
                    this._addStylesToHost(this._stylesSet, L, Y),
                    this._hostNodes.set(L, Y)
                }
                removeHost(L) {
                    const Y = this._hostNodes.get(L);
                    Y && Y.forEach(Mt),
                    this._hostNodes.delete(L)
                }
                onStylesAdded(L) {
                    this._hostNodes.forEach( (Y, Ee) => {
                        this._addStylesToHost(L, Ee, Y)
                    }
                    )
                }
                ngOnDestroy() {
                    this._hostNodes.forEach(L => L.forEach(Mt))
                }
            }
            return W.\u0275fac = function(L) {
                return new (L || W)(b.LFG(a.K0))
            }
            ,
            W.\u0275prov = b.Yz7({
                token: W,
                factory: W.\u0275fac
            }),
            W
        }
        )();
        function Mt(W) {
            (0,
            a.q)().remove(W)
        }
        const Be = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/",
            math: "http://www.w3.org/1998/MathML/"
        }
          , fe = /%COMP%/g;
        function Z(W, H, L) {
            for (let Y = 0; Y < H.length; Y++) {
                let Ee = H[Y];
                Array.isArray(Ee) ? Z(W, Ee, L) : (Ee = Ee.replace(fe, W),
                L.push(Ee))
            }
            return L
        }
        function ne(W) {
            return H => {
                if ("__ngUnwrap__" === H)
                    return W;
                !1 === W(H) && (H.preventDefault(),
                H.returnValue = !1)
            }
        }
        let K = ( () => {
            class W {
                constructor(L, Y, Ee) {
                    this.eventManager = L,
                    this.sharedStylesHost = Y,
                    this.appId = Ee,
                    this.rendererByCompId = new Map,
                    this.defaultRenderer = new ke(L)
                }
                createRenderer(L, Y) {
                    if (!L || !Y)
                        return this.defaultRenderer;
                    switch (Y.encapsulation) {
                    case b.ifc.Emulated:
                        {
                            let Ee = this.rendererByCompId.get(Y.id);
                            return Ee || (Ee = new Zt(this.eventManager,this.sharedStylesHost,Y,this.appId),
                            this.rendererByCompId.set(Y.id, Ee)),
                            Ee.applyToHost(L),
                            Ee
                        }
                    case 1:
                    case b.ifc.ShadowDom:
                        return new lt(this.eventManager,this.sharedStylesHost,L,Y);
                    default:
                        if (!this.rendererByCompId.has(Y.id)) {
                            const Ee = Z(Y.id, Y.styles, []);
                            this.sharedStylesHost.addStyles(Ee),
                            this.rendererByCompId.set(Y.id, this.defaultRenderer)
                        }
                        return this.defaultRenderer
                    }
                }
                begin() {}
                end() {}
            }
            return W.\u0275fac = function(L) {
                return new (L || W)(b.LFG(Ne),b.LFG(it),b.LFG(b.AFp))
            }
            ,
            W.\u0275prov = b.Yz7({
                token: W,
                factory: W.\u0275fac
            }),
            W
        }
        )();
        class ke {
            constructor(H) {
                this.eventManager = H,
                this.data = Object.create(null),
                this.destroyNode = null
            }
            destroy() {}
            createElement(H, L) {
                return L ? document.createElementNS(Be[L] || L, H) : document.createElement(H)
            }
            createComment(H) {
                return document.createComment(H)
            }
            createText(H) {
                return document.createTextNode(H)
            }
            appendChild(H, L) {
                (st(H) ? H.content : H).appendChild(L)
            }
            insertBefore(H, L, Y) {
                H && (st(H) ? H.content : H).insertBefore(L, Y)
            }
            removeChild(H, L) {
                H && H.removeChild(L)
            }
            selectRootElement(H, L) {
                let Y = "string" == typeof H ? document.querySelector(H) : H;
                if (!Y)
                    throw new Error(`The selector "${H}" did not match any elements`);
                return L || (Y.textContent = ""),
                Y
            }
            parentNode(H) {
                return H.parentNode
            }
            nextSibling(H) {
                return H.nextSibling
            }
            setAttribute(H, L, Y, Ee) {
                if (Ee) {
                    L = Ee + ":" + L;
                    const me = Be[Ee];
                    me ? H.setAttributeNS(me, L, Y) : H.setAttribute(L, Y)
                } else
                    H.setAttribute(L, Y)
            }
            removeAttribute(H, L, Y) {
                if (Y) {
                    const Ee = Be[Y];
                    Ee ? H.removeAttributeNS(Ee, L) : H.removeAttribute(`${Y}:${L}`)
                } else
                    H.removeAttribute(L)
            }
            addClass(H, L) {
                H.classList.add(L)
            }
            removeClass(H, L) {
                H.classList.remove(L)
            }
            setStyle(H, L, Y, Ee) {
                Ee & (b.JOm.DashCase | b.JOm.Important) ? H.style.setProperty(L, Y, Ee & b.JOm.Important ? "important" : "") : H.style[L] = Y
            }
            removeStyle(H, L, Y) {
                Y & b.JOm.DashCase ? H.style.removeProperty(L) : H.style[L] = ""
            }
            setProperty(H, L, Y) {
                H[L] = Y
            }
            setValue(H, L) {
                H.nodeValue = L
            }
            listen(H, L, Y) {
                return "string" == typeof H ? this.eventManager.addGlobalEventListener(H, L, ne(Y)) : this.eventManager.addEventListener(H, L, ne(Y))
            }
        }
        function st(W) {
            return "TEMPLATE" === W.tagName && void 0 !== W.content
        }
        class Zt extends ke {
            constructor(H, L, Y, Ee) {
                super(H),
                this.component = Y;
                const me = Z(Ee + "-" + Y.id, Y.styles, []);
                L.addStyles(me),
                this.contentAttr = function De(W) {
                    return "_ngcontent-%COMP%".replace(fe, W)
                }(Ee + "-" + Y.id),
                this.hostAttr = function $e(W) {
                    return "_nghost-%COMP%".replace(fe, W)
                }(Ee + "-" + Y.id)
            }
            applyToHost(H) {
                super.setAttribute(H, this.hostAttr, "")
            }
            createElement(H, L) {
                const Y = super.createElement(H, L);
                return super.setAttribute(Y, this.contentAttr, ""),
                Y
            }
        }
        class lt extends ke {
            constructor(H, L, Y, Ee) {
                super(H),
                this.sharedStylesHost = L,
                this.hostEl = Y,
                this.shadowRoot = Y.attachShadow({
                    mode: "open"
                }),
                this.sharedStylesHost.addHost(this.shadowRoot);
                const me = Z(Ee.id, Ee.styles, []);
                for (let He = 0; He < me.length; He++) {
                    const Ct = document.createElement("style");
                    Ct.textContent = me[He],
                    this.shadowRoot.appendChild(Ct)
                }
            }
            nodeOrShadowRoot(H) {
                return H === this.hostEl ? this.shadowRoot : H
            }
            destroy() {
                this.sharedStylesHost.removeHost(this.shadowRoot)
            }
            appendChild(H, L) {
                return super.appendChild(this.nodeOrShadowRoot(H), L)
            }
            insertBefore(H, L, Y) {
                return super.insertBefore(this.nodeOrShadowRoot(H), L, Y)
            }
            removeChild(H, L) {
                return super.removeChild(this.nodeOrShadowRoot(H), L)
            }
            parentNode(H) {
                return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(H)))
            }
        }
        let Ot = ( () => {
            class W extends je {
                constructor(L) {
                    super(L)
                }
                supports(L) {
                    return !0
                }
                addEventListener(L, Y, Ee) {
                    return L.addEventListener(Y, Ee, !1),
                    () => this.removeEventListener(L, Y, Ee)
                }
                removeEventListener(L, Y, Ee) {
                    return L.removeEventListener(Y, Ee)
                }
            }
            return W.\u0275fac = function(L) {
                return new (L || W)(b.LFG(a.K0))
            }
            ,
            W.\u0275prov = b.Yz7({
                token: W,
                factory: W.\u0275fac
            }),
            W
        }
        )();
        const pn = ["alt", "control", "meta", "shift"]
          , Le = {
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS"
        }
          , Q = {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5",
            F: "6",
            G: "7",
            H: "8",
            I: "9",
            J: "*",
            K: "+",
            M: "-",
            N: ".",
            O: "/",
            "`": "0",
            "\x90": "NumLock"
        }
          , q = {
            alt: W => W.altKey,
            control: W => W.ctrlKey,
            meta: W => W.metaKey,
            shift: W => W.shiftKey
        };
        let Ue = ( () => {
            class W extends je {
                constructor(L) {
                    super(L)
                }
                supports(L) {
                    return null != W.parseEventName(L)
                }
                addEventListener(L, Y, Ee) {
                    const me = W.parseEventName(Y)
                      , He = W.eventCallback(me.fullKey, Ee, this.manager.getZone());
                    return this.manager.getZone().runOutsideAngular( () => (0,
                    a.q)().onAndCancel(L, me.domEventName, He))
                }
                static parseEventName(L) {
                    const Y = L.toLowerCase().split(".")
                      , Ee = Y.shift();
                    if (0 === Y.length || "keydown" !== Ee && "keyup" !== Ee)
                        return null;
                    const me = W._normalizeKey(Y.pop());
                    let He = "";
                    if (pn.forEach(kt => {
                        const sn = Y.indexOf(kt);
                        sn > -1 && (Y.splice(sn, 1),
                        He += kt + ".")
                    }
                    ),
                    He += me,
                    0 != Y.length || 0 === me.length)
                        return null;
                    const Ct = {};
                    return Ct.domEventName = Ee,
                    Ct.fullKey = He,
                    Ct
                }
                static getEventFullKey(L) {
                    let Y = ""
                      , Ee = function We(W) {
                        let H = W.key;
                        if (null == H) {
                            if (H = W.keyIdentifier,
                            null == H)
                                return "Unidentified";
                            H.startsWith("U+") && (H = String.fromCharCode(parseInt(H.substring(2), 16)),
                            3 === W.location && Q.hasOwnProperty(H) && (H = Q[H]))
                        }
                        return Le[H] || H
                    }(L);
                    return Ee = Ee.toLowerCase(),
                    " " === Ee ? Ee = "space" : "." === Ee && (Ee = "dot"),
                    pn.forEach(me => {
                        me != Ee && (0,
                        q[me])(L) && (Y += me + ".")
                    }
                    ),
                    Y += Ee,
                    Y
                }
                static eventCallback(L, Y, Ee) {
                    return me => {
                        W.getEventFullKey(me) === L && Ee.runGuarded( () => Y(me))
                    }
                }
                static _normalizeKey(L) {
                    return "esc" === L ? "escape" : L
                }
            }
            return W.\u0275fac = function(L) {
                return new (L || W)(b.LFG(a.K0))
            }
            ,
            W.\u0275prov = b.Yz7({
                token: W,
                factory: W.\u0275fac
            }),
            W
        }
        )();
        const Kt = (0,
        b.eFA)(b._c5, "browser", [{
            provide: b.Lbi,
            useValue: a.bD
        }, {
            provide: b.g9A,
            useValue: function jt() {
                te.makeCurrent()
            },
            multi: !0
        }, {
            provide: a.K0,
            useFactory: function En() {
                return (0,
                b.RDi)(document),
                document
            },
            deps: []
        }])
          , Lt = new b.OlP("")
          , Sn = [{
            provide: b.rWj,
            useClass: class _e {
                addToWindow(H) {
                    b.dqk.getAngularTestability = (Y, Ee=!0) => {
                        const me = H.findTestabilityInTree(Y, Ee);
                        if (null == me)
                            throw new Error("Could not find testability for element.");
                        return me
                    }
                    ,
                    b.dqk.getAllAngularTestabilities = () => H.getAllTestabilities(),
                    b.dqk.getAllAngularRootElements = () => H.getAllRootElements(),
                    b.dqk.frameworkStabilizers || (b.dqk.frameworkStabilizers = []),
                    b.dqk.frameworkStabilizers.push(Y => {
                        const Ee = b.dqk.getAllAngularTestabilities();
                        let me = Ee.length
                          , He = !1;
                        const Ct = function(kt) {
                            He = He || kt,
                            me--,
                            0 == me && Y(He)
                        };
                        Ee.forEach(function(kt) {
                            kt.whenStable(Ct)
                        })
                    }
                    )
                }
                findTestabilityInTree(H, L, Y) {
                    return null == L ? null : H.getTestability(L) ?? (Y ? (0,
                    a.q)().isShadowRoot(L) ? this.findTestabilityInTree(H, L.host, !0) : this.findTestabilityInTree(H, L.parentElement, !0) : null)
                }
            }
            ,
            deps: []
        }, {
            provide: b.lri,
            useClass: b.dDg,
            deps: [b.R0b, b.eoX, b.rWj]
        }, {
            provide: b.dDg,
            useClass: b.dDg,
            deps: [b.R0b, b.eoX, b.rWj]
        }]
          , ln = [{
            provide: b.zSh,
            useValue: "root"
        }, {
            provide: b.qLn,
            useFactory: function Tn() {
                return new b.qLn
            },
            deps: []
        }, {
            provide: ce,
            useClass: Ot,
            multi: !0,
            deps: [a.K0, b.R0b, b.Lbi]
        }, {
            provide: ce,
            useClass: Ue,
            multi: !0,
            deps: [a.K0]
        }, {
            provide: K,
            useClass: K,
            deps: [Ne, it, b.AFp]
        }, {
            provide: b.FYo,
            useExisting: K
        }, {
            provide: Qe,
            useExisting: it
        }, {
            provide: it,
            useClass: it,
            deps: [a.K0]
        }, {
            provide: Ne,
            useClass: Ne,
            deps: [ce, b.R0b]
        }, {
            provide: a.JF,
            useClass: xe,
            deps: []
        }, []];
        let An = ( () => {
            class W {
                constructor(L) {}
                static withServerTransition(L) {
                    return {
                        ngModule: W,
                        providers: [{
                            provide: b.AFp,
                            useValue: L.appId
                        }, {
                            provide: Se,
                            useExisting: b.AFp
                        }, z]
                    }
                }
            }
            return W.\u0275fac = function(L) {
                return new (L || W)(b.LFG(Lt, 12))
            }
            ,
            W.\u0275mod = b.oAB({
                type: W
            }),
            W.\u0275inj = b.cJS({
                providers: [...ln, ...Sn],
                imports: [a.ez, b.hGG]
            }),
            W
        }
        )()
          , B = ( () => {
            class W {
                constructor(L) {
                    this._doc = L
                }
                getTitle() {
                    return this._doc.title
                }
                setTitle(L) {
                    this._doc.title = L || ""
                }
            }
            return W.\u0275fac = function(L) {
                return new (L || W)(b.LFG(a.K0))
            }
            ,
            W.\u0275prov = b.Yz7({
                token: W,
                factory: function(L) {
                    let Y = null;
                    return Y = L ? new L : function ee() {
                        return new B((0,
                        b.LFG)(a.K0))
                    }(),
                    Y
                },
                providedIn: "root"
            }),
            W
        }
        )();
        typeof window < "u" && window;
        let Kn = ( () => {
            class W {
            }
            return W.\u0275fac = function(L) {
                return new (L || W)
            }
            ,
            W.\u0275prov = b.Yz7({
                token: W,
                factory: function(L) {
                    let Y = null;
                    return Y = L ? new (L || W) : b.LFG(Xn),
                    Y
                },
                providedIn: "root"
            }),
            W
        }
        )()
          , Xn = ( () => {
            class W extends Kn {
                constructor(L) {
                    super(),
                    this._doc = L
                }
                sanitize(L, Y) {
                    if (null == Y)
                        return null;
                    switch (L) {
                    case b.q3G.NONE:
                        return Y;
                    case b.q3G.HTML:
                        return (0,
                        b.qzn)(Y, "HTML") ? (0,
                        b.z3N)(Y) : (0,
                        b.EiD)(this._doc, String(Y)).toString();
                    case b.q3G.STYLE:
                        return (0,
                        b.qzn)(Y, "Style") ? (0,
                        b.z3N)(Y) : Y;
                    case b.q3G.SCRIPT:
                        if ((0,
                        b.qzn)(Y, "Script"))
                            return (0,
                            b.z3N)(Y);
                        throw new Error("unsafe value used in a script context");
                    case b.q3G.URL:
                        return (0,
                        b.qzn)(Y, "URL") ? (0,
                        b.z3N)(Y) : (0,
                        b.mCW)(String(Y));
                    case b.q3G.RESOURCE_URL:
                        if ((0,
                        b.qzn)(Y, "ResourceURL"))
                            return (0,
                            b.z3N)(Y);
                        throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");
                    default:
                        throw new Error(`Unexpected SecurityContext ${L} (see https://g.co/ng/security#xss)`)
                    }
                }
                bypassSecurityTrustHtml(L) {
                    return (0,
                    b.JVY)(L)
                }
                bypassSecurityTrustStyle(L) {
                    return (0,
                    b.L6k)(L)
                }
                bypassSecurityTrustScript(L) {
                    return (0,
                    b.eBb)(L)
                }
                bypassSecurityTrustUrl(L) {
                    return (0,
                    b.LAX)(L)
                }
                bypassSecurityTrustResourceUrl(L) {
                    return (0,
                    b.pB0)(L)
                }
            }
            return W.\u0275fac = function(L) {
                return new (L || W)(b.LFG(a.K0))
            }
            ,
            W.\u0275prov = b.Yz7({
                token: W,
                factory: function(L) {
                    let Y = null;
                    return Y = L ? new L : function vr(W) {
                        return new Xn(W.get(a.K0))
                    }(b.LFG(b.zs3)),
                    Y
                },
                providedIn: "root"
            }),
            W
        }
        )()
    }
    ,
    6123: (Je, pe, I) => {
        I.d(pe, {
            gz: () => fr,
            F0: () => Rt,
            rH: () => br,
            Od: () => Po,
            Bz: () => No,
            lC: () => Lr
        });
        var a = I(8256)
          , b = I(9751)
          , oe = I(8421);
        function te(d) {
            return new b.y(f => {
                (0,
                oe.Xf)(d()).subscribe(f)
            }
            )
        }
        var ie = I(727)
          , be = I(4482)
          , Ce = I(5403);
        function Oe() {
            return (0,
            be.e)( (d, f) => {
                let c = null;
                d._refCount++;
                const g = (0,
                Ce.x)(f, void 0, void 0, void 0, () => {
                    if (!d || d._refCount <= 0 || 0 < --d._refCount)
                        return void (c = null);
                    const D = d._connection
                      , A = c;
                    c = null,
                    D && (!A || D === A) && D.unsubscribe(),
                    f.unsubscribe()
                }
                );
                d.subscribe(g),
                g.closed || (c = d.connect())
            }
            )
        }
        class Se extends b.y {
            constructor(f, c) {
                super(),
                this.source = f,
                this.subjectFactory = c,
                this._subject = null,
                this._refCount = 0,
                this._connection = null,
                (0,
                be.A)(f) && (this.lift = f.lift)
            }
            _subscribe(f) {
                return this.getSubject().subscribe(f)
            }
            getSubject() {
                const f = this._subject;
                return (!f || f.isStopped) && (this._subject = this.subjectFactory()),
                this._subject
            }
            _teardown() {
                this._refCount = 0;
                const {_connection: f} = this;
                this._subject = this._connection = null,
                f?.unsubscribe()
            }
            connect() {
                let f = this._connection;
                if (!f) {
                    f = this._connection = new ie.w0;
                    const c = this.getSubject();
                    f.add(this.source.subscribe((0,
                    Ce.x)(c, void 0, () => {
                        this._teardown(),
                        c.complete()
                    }
                    , g => {
                        this._teardown(),
                        c.error(g)
                    }
                    , () => this._teardown()))),
                    f.closed && (this._connection = null,
                    f = ie.w0.EMPTY)
                }
                return f
            }
            refCount() {
                return Oe()(this)
            }
        }
        var de = I(2076)
          , z = I(9646)
          , _e = I(1135)
          , xe = I(6805)
          , ce = I(9841)
          , Ne = I(7272)
          , je = I(9635)
          , Qe = I(2843)
          , it = I(515)
          , Mt = I(7579)
          , Be = I(6895);
        function fe(d, f, c, g, D) {
            return (A, R) => {
                let V = c
                  , ge = f
                  , Ge = 0;
                A.subscribe((0,
                Ce.x)(R, Tt => {
                    const nt = Ge++;
                    ge = V ? d(ge, Tt, nt) : (V = !0,
                    Tt),
                    g && R.next(ge)
                }
                , D && ( () => {
                    V && R.next(ge),
                    R.complete()
                }
                )))
            }
        }
        function X(d, f) {
            return (0,
            be.e)(fe(d, f, arguments.length >= 2, !0))
        }
        var le = I(9300);
        function ot(d) {
            return d <= 0 ? () => it.E : (0,
            be.e)( (f, c) => {
                let g = [];
                f.subscribe((0,
                Ce.x)(c, D => {
                    g.push(D),
                    d < g.length && g.shift()
                }
                , () => {
                    for (const D of g)
                        c.next(D);
                    c.complete()
                }
                , void 0, () => {
                    g = null
                }
                ))
            }
            )
        }
        var ye = I(8068)
          , De = I(6590)
          , $e = I(4671);
        function Z(d, f) {
            const c = arguments.length >= 2;
            return g => g.pipe(d ? (0,
            le.h)( (D, A) => d(D, A, g)) : $e.y, ot(1), c ? (0,
            De.d)(f) : (0,
            ye.T)( () => new xe.K))
        }
        function he(d) {
            return (0,
            be.e)( (f, c) => {
                try {
                    f.subscribe(c)
                } finally {
                    c.add(d)
                }
            }
            )
        }
        var K = I(4004)
          , ke = I(3900)
          , Ve = I(5698)
          , mt = I(8675)
          , st = I(5577)
          , Zt = I(590)
          , lt = I(4351)
          , Ot = I(8505)
          , pn = I(262)
          , Me = I(9718)
          , Le = I(8189)
          , Q = I(1481);
        const q = "primary";
        class Ue {
            constructor(f) {
                this.params = f || {}
            }
            has(f) {
                return Object.prototype.hasOwnProperty.call(this.params, f)
            }
            get(f) {
                if (this.has(f)) {
                    const c = this.params[f];
                    return Array.isArray(c) ? c[0] : c
                }
                return null
            }
            getAll(f) {
                if (this.has(f)) {
                    const c = this.params[f];
                    return Array.isArray(c) ? c : [c]
                }
                return []
            }
            get keys() {
                return Object.keys(this.params)
            }
        }
        function We(d) {
            return new Ue(d)
        }
        function Cn(d, f, c) {
            const g = c.path.split("/");
            if (g.length > d.length || "full" === c.pathMatch && (f.hasChildren() || g.length < d.length))
                return null;
            const D = {};
            for (let A = 0; A < g.length; A++) {
                const R = g[A]
                  , V = d[A];
                if (R.startsWith(":"))
                    D[R.substring(1)] = V;
                else if (R !== V.path)
                    return null
            }
            return {
                consumed: d.slice(0, g.length),
                posParams: D
            }
        }
        function dn(d, f) {
            const c = d ? Object.keys(d) : void 0
              , g = f ? Object.keys(f) : void 0;
            if (!c || !g || c.length != g.length)
                return !1;
            let D;
            for (let A = 0; A < c.length; A++)
                if (D = c[A],
                !jt(d[D], f[D]))
                    return !1;
            return !0
        }
        function jt(d, f) {
            if (Array.isArray(d) && Array.isArray(f)) {
                if (d.length !== f.length)
                    return !1;
                const c = [...d].sort()
                  , g = [...f].sort();
                return c.every( (D, A) => g[A] === D)
            }
            return d === f
        }
        function Tn(d) {
            return Array.prototype.concat.apply([], d)
        }
        function En(d) {
            return d.length > 0 ? d[d.length - 1] : null
        }
        function Kt(d, f) {
            for (const c in d)
                d.hasOwnProperty(c) && f(d[c], c)
        }
        function Lt(d) {
            return (0,
            a.CqO)(d) ? d : (0,
            a.QGY)(d) ? (0,
            de.D)(Promise.resolve(d)) : (0,
            z.of)(d)
        }
        const An = {
            exact: function ee(d, f, c) {
                if (!qt(d.segments, f.segments) || !Ae(d.segments, f.segments, c) || d.numberOfChildren !== f.numberOfChildren)
                    return !1;
                for (const g in f.children)
                    if (!d.children[g] || !ee(d.children[g], f.children[g], c))
                        return !1;
                return !0
            },
            subset: k
        }
          , mr = {
            exact: function Gr(d, f) {
                return dn(d, f)
            },
            subset: function B(d, f) {
                return Object.keys(f).length <= Object.keys(d).length && Object.keys(f).every(c => jt(d[c], f[c]))
            },
            ignored: () => !0
        };
        function ri(d, f, c) {
            return An[c.paths](d.root, f.root, c.matrixParams) && mr[c.queryParams](d.queryParams, f.queryParams) && !("exact" === c.fragment && d.fragment !== f.fragment)
        }
        function k(d, f, c) {
            return se(d, f, f.segments, c)
        }
        function se(d, f, c, g) {
            if (d.segments.length > c.length) {
                const D = d.segments.slice(0, c.length);
                return !(!qt(D, c) || f.hasChildren() || !Ae(D, c, g))
            }
            if (d.segments.length === c.length) {
                if (!qt(d.segments, c) || !Ae(d.segments, c, g))
                    return !1;
                for (const D in f.children)
                    if (!d.children[D] || !k(d.children[D], f.children[D], g))
                        return !1;
                return !0
            }
            {
                const D = c.slice(0, d.segments.length)
                  , A = c.slice(d.segments.length);
                return !!(qt(d.segments, D) && Ae(d.segments, D, g) && d.children[q]) && se(d.children[q], f, A, g)
            }
        }
        function Ae(d, f, c) {
            return f.every( (g, D) => mr[c](d[D].parameters, g.parameters))
        }
        class rt {
            constructor(f, c, g) {
                this.root = f,
                this.queryParams = c,
                this.fragment = g
            }
            get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = We(this.queryParams)),
                this._queryParamMap
            }
            toString() {
                return Jt.serialize(this)
            }
        }
        class Re {
            constructor(f, c) {
                this.segments = f,
                this.children = c,
                this.parent = null,
                Kt(c, (g, D) => g.parent = this)
            }
            hasChildren() {
                return this.numberOfChildren > 0
            }
            get numberOfChildren() {
                return Object.keys(this.children).length
            }
            toString() {
                return Et(this)
            }
        }
        class dt {
            constructor(f, c) {
                this.path = f,
                this.parameters = c
            }
            get parameterMap() {
                return this._parameterMap || (this._parameterMap = We(this.parameters)),
                this._parameterMap
            }
            toString() {
                return ar(this)
            }
        }
        function qt(d, f) {
            return d.length === f.length && d.every( (c, g) => c.path === f[g].path)
        }
        let At = ( () => {
            class d {
            }
            return d.\u0275fac = function(c) {
                return new (c || d)
            }
            ,
            d.\u0275prov = a.Yz7({
                token: d,
                factory: function() {
                    return new bt
                },
                providedIn: "root"
            }),
            d
        }
        )();
        class bt {
            parse(f) {
                const c = new er(f);
                return new rt(c.parseRootSegment(),c.parseQueryParams(),c.parseFragment())
            }
            serialize(f) {
                const c = `/${gt(f.root, !0)}`
                  , g = function mi(d) {
                    const f = Object.keys(d).map(c => {
                        const g = d[c];
                        return Array.isArray(g) ? g.map(D => `${on(c)}=${on(D)}`).join("&") : `${on(c)}=${on(g)}`
                    }
                    ).filter(c => !!c);
                    return f.length ? `?${f.join("&")}` : ""
                }(f.queryParams);
                return `${c}${g}${"string" == typeof f.fragment ? `#${function sr(d) {
                    return encodeURI(d)
                }(f.fragment)}` : ""}`
            }
        }
        const Jt = new bt;
        function Et(d) {
            return d.segments.map(f => ar(f)).join("/")
        }
        function gt(d, f) {
            if (!d.hasChildren())
                return Et(d);
            if (f) {
                const c = d.children[q] ? gt(d.children[q], !1) : ""
                  , g = [];
                return Kt(d.children, (D, A) => {
                    A !== q && g.push(`${A}:${gt(D, !1)}`)
                }
                ),
                g.length > 0 ? `${c}(${g.join("//")})` : c
            }
            {
                const c = function wt(d, f) {
                    let c = [];
                    return Kt(d.children, (g, D) => {
                        D === q && (c = c.concat(f(g, D)))
                    }
                    ),
                    Kt(d.children, (g, D) => {
                        D !== q && (c = c.concat(f(g, D)))
                    }
                    ),
                    c
                }(d, (g, D) => D === q ? [gt(d.children[q], !1)] : [`${D}:${gt(g, !1)}`]);
                return 1 === Object.keys(d.children).length && null != d.children[q] ? `${Et(d)}/${c[0]}` : `${Et(d)}/(${c.join("//")})`
            }
        }
        function Hn(d) {
            return encodeURIComponent(d).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
        }
        function on(d) {
            return Hn(d).replace(/%3B/gi, ";")
        }
        function Un(d) {
            return Hn(d).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
        }
        function Xt(d) {
            return decodeURIComponent(d)
        }
        function jn(d) {
            return Xt(d.replace(/\+/g, "%20"))
        }
        function ar(d) {
            return `${Un(d.path)}${function Wn(d) {
                return Object.keys(d).map(f => `;${Un(f)}=${Un(d[f])}`).join("")
            }(d.parameters)}`
        }
        const ii = /^[^\/()?;=#]+/;
        function yr(d) {
            const f = d.match(ii);
            return f ? f[0] : ""
        }
        const Ir = /^[^=?&#]+/
          , vr = /^[^&#]+/;
        class er {
            constructor(f) {
                this.url = f,
                this.remaining = f
            }
            parseRootSegment() {
                return this.consumeOptional("/"),
                "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Re([],{}) : new Re([],this.parseChildren())
            }
            parseQueryParams() {
                const f = {};
                if (this.consumeOptional("?"))
                    do {
                        this.parseQueryParam(f)
                    } while (this.consumeOptional("&"));
                return f
            }
            parseFragment() {
                return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
            }
            parseChildren() {
                if ("" === this.remaining)
                    return {};
                this.consumeOptional("/");
                const f = [];
                for (this.peekStartsWith("(") || f.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/("); )
                    this.capture("/"),
                    f.push(this.parseSegment());
                let c = {};
                this.peekStartsWith("/(") && (this.capture("/"),
                c = this.parseParens(!0));
                let g = {};
                return this.peekStartsWith("(") && (g = this.parseParens(!1)),
                (f.length > 0 || Object.keys(c).length > 0) && (g[q] = new Re(f,c)),
                g
            }
            parseSegment() {
                const f = yr(this.remaining);
                if ("" === f && this.peekStartsWith(";"))
                    throw new a.vHH(4009,!1);
                return this.capture(f),
                new dt(Xt(f),this.parseMatrixParams())
            }
            parseMatrixParams() {
                const f = {};
                for (; this.consumeOptional(";"); )
                    this.parseParam(f);
                return f
            }
            parseParam(f) {
                const c = yr(this.remaining);
                if (!c)
                    return;
                this.capture(c);
                let g = "";
                if (this.consumeOptional("=")) {
                    const D = yr(this.remaining);
                    D && (g = D,
                    this.capture(g))
                }
                f[Xt(c)] = Xt(g)
            }
            parseQueryParam(f) {
                const c = function Kn(d) {
                    const f = d.match(Ir);
                    return f ? f[0] : ""
                }(this.remaining);
                if (!c)
                    return;
                this.capture(c);
                let g = "";
                if (this.consumeOptional("=")) {
                    const R = function Xn(d) {
                        const f = d.match(vr);
                        return f ? f[0] : ""
                    }(this.remaining);
                    R && (g = R,
                    this.capture(g))
                }
                const D = jn(c)
                  , A = jn(g);
                if (f.hasOwnProperty(D)) {
                    let R = f[D];
                    Array.isArray(R) || (R = [R],
                    f[D] = R),
                    R.push(A)
                } else
                    f[D] = A
            }
            parseParens(f) {
                const c = {};
                for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0; ) {
                    const g = yr(this.remaining)
                      , D = this.remaining[g.length];
                    if ("/" !== D && ")" !== D && ";" !== D)
                        throw new a.vHH(4010,!1);
                    let A;
                    g.indexOf(":") > -1 ? (A = g.slice(0, g.indexOf(":")),
                    this.capture(A),
                    this.capture(":")) : f && (A = q);
                    const R = this.parseChildren();
                    c[A] = 1 === Object.keys(R).length ? R[q] : new Re([],R),
                    this.consumeOptional("//")
                }
                return c
            }
            peekStartsWith(f) {
                return this.remaining.startsWith(f)
            }
            consumeOptional(f) {
                return !!this.peekStartsWith(f) && (this.remaining = this.remaining.substring(f.length),
                !0)
            }
            capture(f) {
                if (!this.consumeOptional(f))
                    throw new a.vHH(4011,!1)
            }
        }
        function W(d) {
            return d.segments.length > 0 ? new Re([],{
                [q]: d
            }) : d
        }
        function H(d) {
            const f = {};
            for (const g of Object.keys(d.children)) {
                const A = H(d.children[g]);
                (A.segments.length > 0 || A.hasChildren()) && (f[g] = A)
            }
            return function L(d) {
                if (1 === d.numberOfChildren && d.children[q]) {
                    const f = d.children[q];
                    return new Re(d.segments.concat(f.segments),f.children)
                }
                return d
            }(new Re(d.segments,f))
        }
        function Y(d) {
            return d instanceof rt
        }
        function kt(d, f, c, g, D) {
            if (0 === c.length)
                return wn(f.root, f.root, f.root, g, D);
            const A = function In(d) {
                if ("string" == typeof d[0] && 1 === d.length && "/" === d[0])
                    return new $n(!0,0,d);
                let f = 0
                  , c = !1;
                const g = d.reduce( (D, A, R) => {
                    if ("object" == typeof A && null != A) {
                        if (A.outlets) {
                            const V = {};
                            return Kt(A.outlets, (ge, Ge) => {
                                V[Ge] = "string" == typeof ge ? ge.split("/") : ge
                            }
                            ),
                            [...D, {
                                outlets: V
                            }]
                        }
                        if (A.segmentPath)
                            return [...D, A.segmentPath]
                    }
                    return "string" != typeof A ? [...D, A] : 0 === R ? (A.split("/").forEach( (V, ge) => {
                        0 == ge && "." === V || (0 == ge && "" === V ? c = !0 : ".." === V ? f++ : "" != V && D.push(V))
                    }
                    ),
                    D) : [...D, A]
                }
                , []);
                return new $n(c,f,g)
            }(c);
            return A.toRoot() ? wn(f.root, f.root, new Re([],{}), g, D) : function R(ge) {
                const Ge = function Pr(d, f, c, g) {
                    if (d.isAbsolute)
                        return new ft(f.root,!0,0);
                    if (-1 === g)
                        return new ft(c,c === f.root,0);
                    return function oi(d, f, c) {
                        let g = d
                          , D = f
                          , A = c;
                        for (; A > D; ) {
                            if (A -= D,
                            g = g.parent,
                            !g)
                                throw new a.vHH(4005,!1);
                            D = g.segments.length
                        }
                        return new ft(g,!1,D - A)
                    }(c, g + (sn(d.commands[0]) ? 0 : 1), d.numberOfDoubleDots)
                }(A, f, d.snapshot?._urlSegment, ge)
                  , Tt = Ge.processChildren ? nr(Ge.segmentGroup, Ge.index, A.commands) : un(Ge.segmentGroup, Ge.index, A.commands);
                return wn(f.root, Ge.segmentGroup, Tt, g, D)
            }(d.snapshot?._lastPathIndex)
        }
        function sn(d) {
            return "object" == typeof d && null != d && !d.outlets && !d.segmentPath
        }
        function $t(d) {
            return "object" == typeof d && null != d && d.outlets
        }
        function wn(d, f, c, g, D) {
            let R, A = {};
            g && Kt(g, (ge, Ge) => {
                A[Ge] = Array.isArray(ge) ? ge.map(Tt => `${Tt}`) : `${ge}`
            }
            ),
            R = d === f ? c : Ft(d, f, c);
            const V = W(H(R));
            return new rt(V,A,D)
        }
        function Ft(d, f, c) {
            const g = {};
            return Kt(d.children, (D, A) => {
                g[A] = D === f ? c : Ft(D, f, c)
            }
            ),
            new Re(d.segments,g)
        }
        class $n {
            constructor(f, c, g) {
                if (this.isAbsolute = f,
                this.numberOfDoubleDots = c,
                this.commands = g,
                f && g.length > 0 && sn(g[0]))
                    throw new a.vHH(4003,!1);
                const D = g.find($t);
                if (D && D !== En(g))
                    throw new a.vHH(4004,!1)
            }
            toRoot() {
                return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
            }
        }
        class ft {
            constructor(f, c, g) {
                this.segmentGroup = f,
                this.processChildren = c,
                this.index = g
            }
        }
        function un(d, f, c) {
            if (d || (d = new Re([],{})),
            0 === d.segments.length && d.hasChildren())
                return nr(d, f, c);
            const g = function lr(d, f, c) {
                let g = 0
                  , D = f;
                const A = {
                    match: !1,
                    pathIndex: 0,
                    commandIndex: 0
                };
                for (; D < d.segments.length; ) {
                    if (g >= c.length)
                        return A;
                    const R = d.segments[D]
                      , V = c[g];
                    if ($t(V))
                        break;
                    const ge = `${V}`
                      , Ge = g < c.length - 1 ? c[g + 1] : null;
                    if (D > 0 && void 0 === ge)
                        break;
                    if (ge && Ge && "object" == typeof Ge && void 0 === Ge.outlets) {
                        if (!Vt(ge, Ge, R))
                            return A;
                        g += 2
                    } else {
                        if (!Vt(ge, {}, R))
                            return A;
                        g++
                    }
                    D++
                }
                return {
                    match: !0,
                    pathIndex: D,
                    commandIndex: g
                }
            }(d, f, c)
              , D = c.slice(g.commandIndex);
            if (g.match && g.pathIndex < d.segments.length) {
                const A = new Re(d.segments.slice(0, g.pathIndex),{});
                return A.children[q] = new Re(d.segments.slice(g.pathIndex),d.children),
                nr(A, 0, D)
            }
            return g.match && 0 === D.length ? new Re(d.segments,{}) : g.match && !d.hasChildren() ? Pn(d, f, c) : g.match ? nr(d, 0, D) : Pn(d, f, c)
        }
        function nr(d, f, c) {
            if (0 === c.length)
                return new Re(d.segments,{});
            {
                const g = function tr(d) {
                    return $t(d[0]) ? d[0].outlets : {
                        [q]: d
                    }
                }(c)
                  , D = {};
                return Kt(g, (A, R) => {
                    "string" == typeof A && (A = [A]),
                    null !== A && (D[R] = un(d.children[R], f, A))
                }
                ),
                Kt(d.children, (A, R) => {
                    void 0 === g[R] && (D[R] = A)
                }
                ),
                new Re(d.segments,D)
            }
        }
        function Pn(d, f, c) {
            const g = d.segments.slice(0, f);
            let D = 0;
            for (; D < c.length; ) {
                const A = c[D];
                if ($t(A)) {
                    const ge = Or(A.outlets);
                    return new Re(g,ge)
                }
                if (0 === D && sn(c[0])) {
                    g.push(new dt(d.segments[f].path,gn(c[0]))),
                    D++;
                    continue
                }
                const R = $t(A) ? A.outlets[q] : `${A}`
                  , V = D < c.length - 1 ? c[D + 1] : null;
                R && V && sn(V) ? (g.push(new dt(R,gn(V))),
                D += 2) : (g.push(new dt(R,{})),
                D++)
            }
            return new Re(g,{})
        }
        function Or(d) {
            const f = {};
            return Kt(d, (c, g) => {
                "string" == typeof c && (c = [c]),
                null !== c && (f[g] = Pn(new Re([],{}), 0, c))
            }
            ),
            f
        }
        function gn(d) {
            const f = {};
            return Kt(d, (c, g) => f[g] = `${c}`),
            f
        }
        function Vt(d, f, c) {
            return d == c.path && dn(f, c.parameters)
        }
        class Yn {
            constructor(f, c) {
                this.id = f,
                this.url = c
            }
        }
        class xr extends Yn {
            constructor(f, c, g="imperative", D=null) {
                super(f, c),
                this.type = 0,
                this.navigationTrigger = g,
                this.restoredState = D
            }
            toString() {
                return `NavigationStart(id: ${this.id}, url: '${this.url}')`
            }
        }
        class On extends Yn {
            constructor(f, c, g) {
                super(f, c),
                this.urlAfterRedirects = g,
                this.type = 1
            }
            toString() {
                return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
            }
        }
        class ur extends Yn {
            constructor(f, c, g, D) {
                super(f, c),
                this.reason = g,
                this.code = D,
                this.type = 2
            }
            toString() {
                return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
            }
        }
        class cr extends Yn {
            constructor(f, c, g, D) {
                super(f, c),
                this.error = g,
                this.target = D,
                this.type = 3
            }
            toString() {
                return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
            }
        }
        class zr extends Yn {
            constructor(f, c, g, D) {
                super(f, c),
                this.urlAfterRedirects = g,
                this.state = D,
                this.type = 4
            }
            toString() {
                return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }
        class qn extends Yn {
            constructor(f, c, g, D) {
                super(f, c),
                this.urlAfterRedirects = g,
                this.state = D,
                this.type = 7
            }
            toString() {
                return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }
        class mn extends Yn {
            constructor(f, c, g, D, A) {
                super(f, c),
                this.urlAfterRedirects = g,
                this.state = D,
                this.shouldActivate = A,
                this.type = 8
            }
            toString() {
                return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
            }
        }
        class Eo extends Yn {
            constructor(f, c, g, D) {
                super(f, c),
                this.urlAfterRedirects = g,
                this.state = D,
                this.type = 5
            }
            toString() {
                return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }
        class bn extends Yn {
            constructor(f, c, g, D) {
                super(f, c),
                this.urlAfterRedirects = g,
                this.state = D,
                this.type = 6
            }
            toString() {
                return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
            }
        }
        class rr {
            constructor(f) {
                this.route = f,
                this.type = 9
            }
            toString() {
                return `RouteConfigLoadStart(path: ${this.route.path})`
            }
        }
        class Wr {
            constructor(f) {
                this.route = f,
                this.type = 10
            }
            toString() {
                return `RouteConfigLoadEnd(path: ${this.route.path})`
            }
        }
        class Nr {
            constructor(f) {
                this.snapshot = f,
                this.type = 11
            }
            toString() {
                return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }
        class bi {
            constructor(f) {
                this.snapshot = f,
                this.type = 12
            }
            toString() {
                return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }
        class tn {
            constructor(f) {
                this.snapshot = f,
                this.type = 13
            }
            toString() {
                return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }
        class ji {
            constructor(f) {
                this.snapshot = f,
                this.type = 14
            }
            toString() {
                return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`
            }
        }
        class Mi {
            constructor(f, c, g) {
                this.routerEvent = f,
                this.position = c,
                this.anchor = g,
                this.type = 15
            }
            toString() {
                return `Scroll(anchor: '${this.anchor}', position: '${this.position ? `${this.position[0]}, ${this.position[1]}` : null}')`
            }
        }
        class yi {
            constructor(f) {
                this._root = f
            }
            get root() {
                return this._root.value
            }
            parent(f) {
                const c = this.pathFromRoot(f);
                return c.length > 1 ? c[c.length - 2] : null
            }
            children(f) {
                const c = Si(f, this._root);
                return c ? c.children.map(g => g.value) : []
            }
            firstChild(f) {
                const c = Si(f, this._root);
                return c && c.children.length > 0 ? c.children[0].value : null
            }
            siblings(f) {
                const c = $i(f, this._root);
                return c.length < 2 ? [] : c[c.length - 2].children.map(D => D.value).filter(D => D !== f)
            }
            pathFromRoot(f) {
                return $i(f, this._root).map(c => c.value)
            }
        }
        function Si(d, f) {
            if (d === f.value)
                return f;
            for (const c of f.children) {
                const g = Si(d, c);
                if (g)
                    return g
            }
            return null
        }
        function $i(d, f) {
            if (d === f.value)
                return [f];
            for (const c of f.children) {
                const g = $i(d, c);
                if (g.length)
                    return g.unshift(f),
                    g
            }
            return []
        }
        class dr {
            constructor(f, c) {
                this.value = f,
                this.children = c
            }
            toString() {
                return `TreeNode(${this.value})`
            }
        }
        function si(d) {
            const f = {};
            return d && d.children.forEach(c => f[c.value.outlet] = c),
            f
        }
        class wo extends yi {
            constructor(f, c) {
                super(f),
                this.snapshot = c,
                Ii(this, f)
            }
            toString() {
                return this.snapshot.toString()
            }
        }
        function Dr(d, f) {
            const c = function Ai(d, f) {
                const R = new ai([],{},{},"",{},q,f,null,d.root,-1,{});
                return new io("",new dr(R,[]))
            }(d, f)
              , g = new _e.X([new dt("",{})])
              , D = new _e.X({})
              , A = new _e.X({})
              , R = new _e.X({})
              , V = new _e.X("")
              , ge = new fr(g,D,R,V,A,q,f,c.root);
            return ge.snapshot = c.root,
            new wo(new dr(ge,[]),c)
        }
        class fr {
            constructor(f, c, g, D, A, R, V, ge) {
                this.url = f,
                this.params = c,
                this.queryParams = g,
                this.fragment = D,
                this.data = A,
                this.outlet = R,
                this.component = V,
                this._futureSnapshot = ge
            }
            get routeConfig() {
                return this._futureSnapshot.routeConfig
            }
            get root() {
                return this._routerState.root
            }
            get parent() {
                return this._routerState.parent(this)
            }
            get firstChild() {
                return this._routerState.firstChild(this)
            }
            get children() {
                return this._routerState.children(this)
            }
            get pathFromRoot() {
                return this._routerState.pathFromRoot(this)
            }
            get paramMap() {
                return this._paramMap || (this._paramMap = this.params.pipe((0,
                K.U)(f => We(f)))),
                this._paramMap
            }
            get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe((0,
                K.U)(f => We(f)))),
                this._queryParamMap
            }
            toString() {
                return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
            }
        }
        function vi(d, f="emptyOnly") {
            const c = d.pathFromRoot;
            let g = 0;
            if ("always" !== f)
                for (g = c.length - 1; g >= 1; ) {
                    const D = c[g]
                      , A = c[g - 1];
                    if (D.routeConfig && "" === D.routeConfig.path)
                        g--;
                    else {
                        if (A.component)
                            break;
                        g--
                    }
                }
            return function ro(d) {
                return d.reduce( (f, c) => ({
                    params: {
                        ...f.params,
                        ...c.params
                    },
                    data: {
                        ...f.data,
                        ...c.data
                    },
                    resolve: {
                        ...c.data,
                        ...f.resolve,
                        ...c.routeConfig?.data,
                        ...c._resolvedData
                    }
                }), {
                    params: {},
                    data: {},
                    resolve: {}
                })
            }(c.slice(g))
        }
        class ai {
            constructor(f, c, g, D, A, R, V, ge, Ge, Tt, nt, en) {
                this.url = f,
                this.params = c,
                this.queryParams = g,
                this.fragment = D,
                this.data = A,
                this.outlet = R,
                this.component = V,
                this.routeConfig = ge,
                this._urlSegment = Ge,
                this._lastPathIndex = Tt,
                this._correctedLastPathIndex = en ?? Tt,
                this._resolve = nt
            }
            get root() {
                return this._routerState.root
            }
            get parent() {
                return this._routerState.parent(this)
            }
            get firstChild() {
                return this._routerState.firstChild(this)
            }
            get children() {
                return this._routerState.children(this)
            }
            get pathFromRoot() {
                return this._routerState.pathFromRoot(this)
            }
            get paramMap() {
                return this._paramMap || (this._paramMap = We(this.params)),
                this._paramMap
            }
            get queryParamMap() {
                return this._queryParamMap || (this._queryParamMap = We(this.queryParams)),
                this._queryParamMap
            }
            toString() {
                return `Route(url:'${this.url.map(g => g.toString()).join("/")}', path:'${this.routeConfig ? this.routeConfig.path : ""}')`
            }
        }
        class io extends yi {
            constructor(f, c) {
                super(c),
                this.url = f,
                Ii(this, c)
            }
            toString() {
                return Gi(this._root)
            }
        }
        function Ii(d, f) {
            f.value._routerState = d,
            f.children.forEach(c => Ii(d, c))
        }
        function Gi(d) {
            const f = d.children.length > 0 ? ` { ${d.children.map(Gi).join(", ")} } ` : "";
            return `${d.value}${f}`
        }
        function hr(d) {
            if (d.snapshot) {
                const f = d.snapshot
                  , c = d._futureSnapshot;
                d.snapshot = c,
                dn(f.queryParams, c.queryParams) || d.queryParams.next(c.queryParams),
                f.fragment !== c.fragment && d.fragment.next(c.fragment),
                dn(f.params, c.params) || d.params.next(c.params),
                function Vn(d, f) {
                    if (d.length !== f.length)
                        return !1;
                    for (let c = 0; c < d.length; ++c)
                        if (!dn(d[c], f[c]))
                            return !1;
                    return !0
                }(f.url, c.url) || d.url.next(c.url),
                dn(f.data, c.data) || d.data.next(c.data)
            } else
                d.snapshot = d._futureSnapshot,
                d.data.next(d._futureSnapshot.data)
        }
        function li(d, f) {
            const c = dn(d.params, f.params) && function ut(d, f) {
                return qt(d, f) && d.every( (c, g) => dn(c.parameters, f[g].parameters))
            }(d.url, f.url);
            return c && !(!d.parent != !f.parent) && (!d.parent || li(d.parent, f.parent))
        }
        function Cr(d, f, c) {
            if (c && d.shouldReuseRoute(f.value, c.value.snapshot)) {
                const g = c.value;
                g._futureSnapshot = f.value;
                const D = function Fr(d, f, c) {
                    return f.children.map(g => {
                        for (const D of c.children)
                            if (d.shouldReuseRoute(g.value, D.value.snapshot))
                                return Cr(d, g, D);
                        return Cr(d, g)
                    }
                    )
                }(d, f, c);
                return new dr(g,D)
            }
            {
                if (d.shouldAttach(f.value)) {
                    const A = d.retrieve(f.value);
                    if (null !== A) {
                        const R = A.route;
                        return R.value._futureSnapshot = f.value,
                        R.children = f.children.map(V => Cr(d, V)),
                        R
                    }
                }
                const g = function Er(d) {
                    return new fr(new _e.X(d.url),new _e.X(d.params),new _e.X(d.queryParams),new _e.X(d.fragment),new _e.X(d.data),d.outlet,d.component,d)
                }(f.value)
                  , D = f.children.map(A => Cr(d, A));
                return new dr(g,D)
            }
        }
        const Pi = "ngNavigationCancelingError";
        function Kr(d, f) {
            const {redirectTo: c, navigationBehaviorOptions: g} = Y(f) ? {
                redirectTo: f,
                navigationBehaviorOptions: void 0
            } : f
              , D = Oi(!1, 0, f);
            return D.url = c,
            D.navigationBehaviorOptions = g,
            D
        }
        function Oi(d, f, c) {
            const g = new Error("NavigationCancelingError: " + (d || ""));
            return g[Pi] = !0,
            g.cancellationCode = f,
            c && (g.url = c),
            g
        }
        function ci(d) {
            return oo(d) && Y(d.url)
        }
        function oo(d) {
            return d && d[Pi]
        }
        class di {
            constructor() {
                this.outlet = null,
                this.route = null,
                this.resolver = null,
                this.injector = null,
                this.children = new Rr,
                this.attachRef = null
            }
        }
        let Rr = ( () => {
            class d {
                constructor() {
                    this.contexts = new Map
                }
                onChildOutletCreated(c, g) {
                    const D = this.getOrCreateContext(c);
                    D.outlet = g,
                    this.contexts.set(c, D)
                }
                onChildOutletDestroyed(c) {
                    const g = this.getContext(c);
                    g && (g.outlet = null,
                    g.attachRef = null)
                }
                onOutletDeactivated() {
                    const c = this.contexts;
                    return this.contexts = new Map,
                    c
                }
                onOutletReAttached(c) {
                    this.contexts = c
                }
                getOrCreateContext(c) {
                    let g = this.getContext(c);
                    return g || (g = new di,
                    this.contexts.set(c, g)),
                    g
                }
                getContext(c) {
                    return this.contexts.get(c) || null
                }
            }
            return d.\u0275fac = function(c) {
                return new (c || d)
            }
            ,
            d.\u0275prov = a.Yz7({
                token: d,
                factory: d.\u0275fac,
                providedIn: "root"
            }),
            d
        }
        )();
        const _i = !1;
        let Lr = ( () => {
            class d {
                constructor(c, g, D, A, R) {
                    this.parentContexts = c,
                    this.location = g,
                    this.changeDetector = A,
                    this.environmentInjector = R,
                    this.activated = null,
                    this._activatedRoute = null,
                    this.activateEvents = new a.vpe,
                    this.deactivateEvents = new a.vpe,
                    this.attachEvents = new a.vpe,
                    this.detachEvents = new a.vpe,
                    this.name = D || q,
                    c.onChildOutletCreated(this.name, this)
                }
                ngOnDestroy() {
                    this.parentContexts.getContext(this.name)?.outlet === this && this.parentContexts.onChildOutletDestroyed(this.name)
                }
                ngOnInit() {
                    if (!this.activated) {
                        const c = this.parentContexts.getContext(this.name);
                        c && c.route && (c.attachRef ? this.attach(c.attachRef, c.route) : this.activateWith(c.route, c.injector))
                    }
                }
                get isActivated() {
                    return !!this.activated
                }
                get component() {
                    if (!this.activated)
                        throw new a.vHH(4012,_i);
                    return this.activated.instance
                }
                get activatedRoute() {
                    if (!this.activated)
                        throw new a.vHH(4012,_i);
                    return this._activatedRoute
                }
                get activatedRouteData() {
                    return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                }
                detach() {
                    if (!this.activated)
                        throw new a.vHH(4012,_i);
                    this.location.detach();
                    const c = this.activated;
                    return this.activated = null,
                    this._activatedRoute = null,
                    this.detachEvents.emit(c.instance),
                    c
                }
                attach(c, g) {
                    this.activated = c,
                    this._activatedRoute = g,
                    this.location.insert(c.hostView),
                    this.attachEvents.emit(c.instance)
                }
                deactivate() {
                    if (this.activated) {
                        const c = this.component;
                        this.activated.destroy(),
                        this.activated = null,
                        this._activatedRoute = null,
                        this.deactivateEvents.emit(c)
                    }
                }
                activateWith(c, g) {
                    if (this.isActivated)
                        throw new a.vHH(4013,_i);
                    this._activatedRoute = c;
                    const D = this.location
                      , R = c._futureSnapshot.component
                      , V = this.parentContexts.getOrCreateContext(this.name).children
                      , ge = new so(c,V,D.injector);
                    if (g && function pr(d) {
                        return !!d.resolveComponentFactory
                    }(g)) {
                        const Ge = g.resolveComponentFactory(R);
                        this.activated = D.createComponent(Ge, D.length, ge)
                    } else
                        this.activated = D.createComponent(R, {
                            index: D.length,
                            injector: ge,
                            environmentInjector: g ?? this.environmentInjector
                        });
                    this.changeDetector.markForCheck(),
                    this.activateEvents.emit(this.activated.instance)
                }
            }
            return d.\u0275fac = function(c) {
                return new (c || d)(a.Y36(Rr),a.Y36(a.s_b),a.$8M("name"),a.Y36(a.sBO),a.Y36(a.lqb))
            }
            ,
            d.\u0275dir = a.lG2({
                type: d,
                selectors: [["router-outlet"]],
                outputs: {
                    activateEvents: "activate",
                    deactivateEvents: "deactivate",
                    attachEvents: "attach",
                    detachEvents: "detach"
                },
                exportAs: ["outlet"]
            }),
            d
        }
        )();
        class so {
            constructor(f, c, g) {
                this.route = f,
                this.childContexts = c,
                this.parent = g
            }
            get(f, c) {
                return f === fr ? this.route : f === Rr ? this.childContexts : this.parent.get(f, c)
            }
        }
        let Yr = ( () => {
            class d {
            }
            return d.\u0275fac = function(c) {
                return new (c || d)
            }
            ,
            d.\u0275cmp = a.Xpm({
                type: d,
                selectors: [["ng-component"]],
                decls: 1,
                vars: 0,
                template: function(c, g) {
                    1 & c && a._UZ(0, "router-outlet")
                },
                dependencies: [Lr],
                encapsulation: 2
            }),
            d
        }
        )();
        function xi(d, f) {
            return d.providers && !d._injector && (d._injector = (0,
            a.MMx)(d.providers, f, `Route: ${d.path}`)),
            d._injector ?? f
        }
        function G(d) {
            const f = d.children && d.children.map(G)
              , c = f ? {
                ...d,
                children: f
            } : {
                ...d
            };
            return !c.component && !c.loadComponent && (f || c.loadChildren) && c.outlet && c.outlet !== q && (c.component = Yr),
            c
        }
        function ae(d) {
            return d.outlet || q
        }
        function Te(d, f) {
            const c = d.filter(g => ae(g) === f);
            return c.push(...d.filter(g => ae(g) !== f)),
            c
        }
        function Ye(d) {
            if (!d)
                return null;
            if (d.routeConfig?._injector)
                return d.routeConfig._injector;
            for (let f = d.parent; f; f = f.parent) {
                const c = f.routeConfig;
                if (c?._loadedInjector)
                    return c._loadedInjector;
                if (c?._injector)
                    return c._injector
            }
            return null
        }
        class Gt {
            constructor(f, c, g, D) {
                this.routeReuseStrategy = f,
                this.futureState = c,
                this.currState = g,
                this.forwardEvent = D
            }
            activate(f) {
                const c = this.futureState._root
                  , g = this.currState ? this.currState._root : null;
                this.deactivateChildRoutes(c, g, f),
                hr(this.futureState.root),
                this.activateChildRoutes(c, g, f)
            }
            deactivateChildRoutes(f, c, g) {
                const D = si(c);
                f.children.forEach(A => {
                    const R = A.value.outlet;
                    this.deactivateRoutes(A, D[R], g),
                    delete D[R]
                }
                ),
                Kt(D, (A, R) => {
                    this.deactivateRouteAndItsChildren(A, g)
                }
                )
            }
            deactivateRoutes(f, c, g) {
                const D = f.value
                  , A = c ? c.value : null;
                if (D === A)
                    if (D.component) {
                        const R = g.getContext(D.outlet);
                        R && this.deactivateChildRoutes(f, c, R.children)
                    } else
                        this.deactivateChildRoutes(f, c, g);
                else
                    A && this.deactivateRouteAndItsChildren(c, g)
            }
            deactivateRouteAndItsChildren(f, c) {
                f.value.component && this.routeReuseStrategy.shouldDetach(f.value.snapshot) ? this.detachAndStoreRouteSubtree(f, c) : this.deactivateRouteAndOutlet(f, c)
            }
            detachAndStoreRouteSubtree(f, c) {
                const g = c.getContext(f.value.outlet)
                  , D = g && f.value.component ? g.children : c
                  , A = si(f);
                for (const R of Object.keys(A))
                    this.deactivateRouteAndItsChildren(A[R], D);
                if (g && g.outlet) {
                    const R = g.outlet.detach()
                      , V = g.children.onOutletDeactivated();
                    this.routeReuseStrategy.store(f.value.snapshot, {
                        componentRef: R,
                        route: f,
                        contexts: V
                    })
                }
            }
            deactivateRouteAndOutlet(f, c) {
                const g = c.getContext(f.value.outlet)
                  , D = g && f.value.component ? g.children : c
                  , A = si(f);
                for (const R of Object.keys(A))
                    this.deactivateRouteAndItsChildren(A[R], D);
                g && g.outlet && (g.outlet.deactivate(),
                g.children.onOutletDeactivated(),
                g.attachRef = null,
                g.resolver = null,
                g.route = null)
            }
            activateChildRoutes(f, c, g) {
                const D = si(c);
                f.children.forEach(A => {
                    this.activateRoutes(A, D[A.value.outlet], g),
                    this.forwardEvent(new ji(A.value.snapshot))
                }
                ),
                f.children.length && this.forwardEvent(new bi(f.value.snapshot))
            }
            activateRoutes(f, c, g) {
                const D = f.value
                  , A = c ? c.value : null;
                if (hr(D),
                D === A)
                    if (D.component) {
                        const R = g.getOrCreateContext(D.outlet);
                        this.activateChildRoutes(f, c, R.children)
                    } else
                        this.activateChildRoutes(f, c, g);
                else if (D.component) {
                    const R = g.getOrCreateContext(D.outlet);
                    if (this.routeReuseStrategy.shouldAttach(D.snapshot)) {
                        const V = this.routeReuseStrategy.retrieve(D.snapshot);
                        this.routeReuseStrategy.store(D.snapshot, null),
                        R.children.onOutletReAttached(V.contexts),
                        R.attachRef = V.componentRef,
                        R.route = V.route.value,
                        R.outlet && R.outlet.attach(V.componentRef, V.route.value),
                        hr(V.route.value),
                        this.activateChildRoutes(f, null, R.children)
                    } else {
                        const V = Ye(D.snapshot)
                          , ge = V?.get(a._Vd) ?? null;
                        R.attachRef = null,
                        R.route = D,
                        R.resolver = ge,
                        R.injector = V,
                        R.outlet && R.outlet.activateWith(D, R.injector),
                        this.activateChildRoutes(f, null, R.children)
                    }
                } else
                    this.activateChildRoutes(f, null, g)
            }
        }
        class zt {
            constructor(f) {
                this.path = f,
                this.route = this.path[this.path.length - 1]
            }
        }
        class Dt {
            constructor(f, c) {
                this.component = f,
                this.route = c
            }
        }
        function Bt(d, f, c) {
            const g = d._root;
            return Qn(g, f ? f._root : null, c, [g.value])
        }
        function qe(d, f, c) {
            return (Ye(f) ?? c).get(d)
        }
        function Qn(d, f, c, g, D={
            canDeactivateChecks: [],
            canActivateChecks: []
        }) {
            const A = si(f);
            return d.children.forEach(R => {
                (function fi(d, f, c, g, D={
                    canDeactivateChecks: [],
                    canActivateChecks: []
                }) {
                    const A = d.value
                      , R = f ? f.value : null
                      , V = c ? c.getContext(d.value.outlet) : null;
                    if (R && A.routeConfig === R.routeConfig) {
                        const ge = function Ni(d, f, c) {
                            if ("function" == typeof c)
                                return c(d, f);
                            switch (c) {
                            case "pathParamsChange":
                                return !qt(d.url, f.url);
                            case "pathParamsOrQueryParamsChange":
                                return !qt(d.url, f.url) || !dn(d.queryParams, f.queryParams);
                            case "always":
                                return !0;
                            case "paramsOrQueryParamsChange":
                                return !li(d, f) || !dn(d.queryParams, f.queryParams);
                            default:
                                return !li(d, f)
                            }
                        }(R, A, A.routeConfig.runGuardsAndResolvers);
                        ge ? D.canActivateChecks.push(new zt(g)) : (A.data = R.data,
                        A._resolvedData = R._resolvedData),
                        Qn(d, f, A.component ? V ? V.children : null : c, g, D),
                        ge && V && V.outlet && V.outlet.isActivated && D.canDeactivateChecks.push(new Dt(V.outlet.component,R))
                    } else
                        R && Rn(f, V, D),
                        D.canActivateChecks.push(new zt(g)),
                        Qn(d, null, A.component ? V ? V.children : null : c, g, D)
                }
                )(R, A[R.value.outlet], c, g.concat([R.value]), D),
                delete A[R.value.outlet]
            }
            ),
            Kt(A, (R, V) => Rn(R, c.getContext(V), D)),
            D
        }
        function Rn(d, f, c) {
            const g = si(d)
              , D = d.value;
            Kt(g, (A, R) => {
                Rn(A, D.component ? f ? f.children.getContext(R) : null : f, c)
            }
            ),
            c.canDeactivateChecks.push(new Dt(D.component && f && f.outlet && f.outlet.isActivated ? f.outlet.component : null,D))
        }
        function qr(d) {
            return "function" == typeof d
        }
        function uo(d) {
            return d instanceof xe.K || "EmptyError" === d?.name
        }
        const E = Symbol("INITIAL_VALUE");
        function v() {
            return (0,
            ke.w)(d => (0,
            ce.a)(d.map(f => f.pipe((0,
            Ve.q)(1), (0,
            mt.O)(E)))).pipe((0,
            K.U)(f => {
                for (const c of f)
                    if (!0 !== c) {
                        if (c === E)
                            return E;
                        if (!1 === c || c instanceof rt)
                            return c
                    }
                return !0
            }
            ), (0,
            le.h)(f => f !== E), (0,
            Ve.q)(1)))
        }
        function kr(d) {
            return (0,
            je.z)((0,
            Ot.b)(f => {
                if (Y(f))
                    throw Kr(0, f)
            }
            ), (0,
            K.U)(f => !0 === f))
        }
        const Uo = {
            matched: !1,
            consumedSegments: [],
            remainingSegments: [],
            parameters: {},
            positionalParamSegments: {}
        };
        function bo(d, f, c, g, D) {
            const A = zi(d, f, c);
            return A.matched ? function Vr(d, f, c, g) {
                const D = f.canMatch;
                if (!D || 0 === D.length)
                    return (0,
                    z.of)(!0);
                const A = D.map(R => {
                    const V = d.get(R)
                      , ge = function lo(d) {
                        return d && qr(d.canMatch)
                    }(V) ? V.canMatch(f, c) : V(f, c);
                    return Lt(ge)
                }
                );
                return (0,
                z.of)(A).pipe(v(), kr())
            }(g = xi(f, g), f, c).pipe((0,
            K.U)(R => !0 === R ? A : {
                ...Uo
            })) : (0,
            z.of)(A)
        }
        function zi(d, f, c) {
            if ("" === f.path)
                return "full" === f.pathMatch && (d.hasChildren() || c.length > 0) ? {
                    ...Uo
                } : {
                    matched: !0,
                    consumedSegments: [],
                    remainingSegments: c,
                    parameters: {},
                    positionalParamSegments: {}
                };
            const D = (f.matcher || Cn)(c, d, f);
            if (!D)
                return {
                    ...Uo
                };
            const A = {};
            Kt(D.posParams, (V, ge) => {
                A[ge] = V.path
            }
            );
            const R = D.consumed.length > 0 ? {
                ...A,
                ...D.consumed[D.consumed.length - 1].parameters
            } : A;
            return {
                matched: !0,
                consumedSegments: D.consumed,
                remainingSegments: c.slice(D.consumed.length),
                parameters: R,
                positionalParamSegments: D.posParams ?? {}
            }
        }
        function co(d, f, c, g, D="corrected") {
            if (c.length > 0 && function os(d, f, c) {
                return c.some(g => To(d, f, g) && ae(g) !== q)
            }(d, c, g)) {
                const R = new Re(f,function Mo(d, f, c, g) {
                    const D = {};
                    D[q] = g,
                    g._sourceSegment = d,
                    g._segmentIndexShift = f.length;
                    for (const A of c)
                        if ("" === A.path && ae(A) !== q) {
                            const R = new Re([],{});
                            R._sourceSegment = d,
                            R._segmentIndexShift = f.length,
                            D[ae(A)] = R
                        }
                    return D
                }(d, f, g, new Re(c,d.children)));
                return R._sourceSegment = d,
                R._segmentIndexShift = f.length,
                {
                    segmentGroup: R,
                    slicedSegments: []
                }
            }
            if (0 === c.length && function $o(d, f, c) {
                return c.some(g => To(d, f, g))
            }(d, c, g)) {
                const R = new Re(d.segments,function jo(d, f, c, g, D, A) {
                    const R = {};
                    for (const V of g)
                        if (To(d, c, V) && !D[ae(V)]) {
                            const ge = new Re([],{});
                            ge._sourceSegment = d,
                            ge._segmentIndexShift = "legacy" === A ? d.segments.length : f.length,
                            R[ae(V)] = ge
                        }
                    return {
                        ...D,
                        ...R
                    }
                }(d, f, c, g, d.children, D));
                return R._sourceSegment = d,
                R._segmentIndexShift = f.length,
                {
                    segmentGroup: R,
                    slicedSegments: c
                }
            }
            const A = new Re(d.segments,d.children);
            return A._sourceSegment = d,
            A._segmentIndexShift = f.length,
            {
                segmentGroup: A,
                slicedSegments: c
            }
        }
        function To(d, f, c) {
            return (!(d.hasChildren() || f.length > 0) || "full" !== c.pathMatch) && "" === c.path
        }
        function Go(d, f, c, g) {
            return !!(ae(d) === g || g !== q && To(f, c, d)) && ("**" === d.path || zi(f, d, c).matched)
        }
        function So(d, f, c) {
            return 0 === f.length && !d.children[c]
        }
        const fo = !1;
        class Wi {
            constructor(f) {
                this.segmentGroup = f || null
            }
        }
        class ho {
            constructor(f) {
                this.urlTree = f
            }
        }
        function Ri(d) {
            return (0,
            Qe._)(new Wi(d))
        }
        function Ao(d) {
            return (0,
            Qe._)(new ho(d))
        }
        class Ei {
            constructor(f, c, g, D, A) {
                this.injector = f,
                this.configLoader = c,
                this.urlSerializer = g,
                this.urlTree = D,
                this.config = A,
                this.allowRedirects = !0
            }
            apply() {
                const f = co(this.urlTree.root, [], [], this.config).segmentGroup
                  , c = new Re(f.segments,f.children);
                return this.expandSegmentGroup(this.injector, this.config, c, q).pipe((0,
                K.U)(A => this.createUrlTree(H(A), this.urlTree.queryParams, this.urlTree.fragment))).pipe((0,
                pn.K)(A => {
                    if (A instanceof ho)
                        return this.allowRedirects = !1,
                        this.match(A.urlTree);
                    throw A instanceof Wi ? this.noMatchError(A) : A
                }
                ))
            }
            match(f) {
                return this.expandSegmentGroup(this.injector, this.config, f.root, q).pipe((0,
                K.U)(D => this.createUrlTree(H(D), f.queryParams, f.fragment))).pipe((0,
                pn.K)(D => {
                    throw D instanceof Wi ? this.noMatchError(D) : D
                }
                ))
            }
            noMatchError(f) {
                return new a.vHH(4002,fo)
            }
            createUrlTree(f, c, g) {
                const D = W(f);
                return new rt(D,c,g)
            }
            expandSegmentGroup(f, c, g, D) {
                return 0 === g.segments.length && g.hasChildren() ? this.expandChildren(f, c, g).pipe((0,
                K.U)(A => new Re([],A))) : this.expandSegment(f, g, c, g.segments, D, !0)
            }
            expandChildren(f, c, g) {
                const D = [];
                for (const A of Object.keys(g.children))
                    "primary" === A ? D.unshift(A) : D.push(A);
                return (0,
                de.D)(D).pipe((0,
                lt.b)(A => {
                    const R = g.children[A]
                      , V = Te(c, A);
                    return this.expandSegmentGroup(f, V, R, A).pipe((0,
                    K.U)(ge => ({
                        segment: ge,
                        outlet: A
                    })))
                }
                ), X( (A, R) => (A[R.outlet] = R.segment,
                A), {}), Z())
            }
            expandSegment(f, c, g, D, A, R) {
                return (0,
                de.D)(g).pipe((0,
                lt.b)(V => this.expandSegmentAgainstRoute(f, c, g, V, D, A, R).pipe((0,
                pn.K)(Ge => {
                    if (Ge instanceof Wi)
                        return (0,
                        z.of)(null);
                    throw Ge
                }
                ))), (0,
                Zt.P)(V => !!V), (0,
                pn.K)( (V, ge) => {
                    if (uo(V))
                        return So(c, D, A) ? (0,
                        z.of)(new Re([],{})) : Ri(c);
                    throw V
                }
                ))
            }
            expandSegmentAgainstRoute(f, c, g, D, A, R, V) {
                return Go(D, c, A, R) ? void 0 === D.redirectTo ? this.matchSegmentAgainstRoute(f, c, D, A, R) : V && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(f, c, g, D, A, R) : Ri(c) : Ri(c)
            }
            expandSegmentAgainstRouteUsingRedirect(f, c, g, D, A, R) {
                return "**" === D.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(f, g, D, R) : this.expandRegularSegmentAgainstRouteUsingRedirect(f, c, g, D, A, R)
            }
            expandWildCardWithParamsAgainstRouteUsingRedirect(f, c, g, D) {
                const A = this.applyRedirectCommands([], g.redirectTo, {});
                return g.redirectTo.startsWith("/") ? Ao(A) : this.lineralizeSegments(g, A).pipe((0,
                st.z)(R => {
                    const V = new Re(R,{});
                    return this.expandSegment(f, V, c, R, D, !1)
                }
                ))
            }
            expandRegularSegmentAgainstRouteUsingRedirect(f, c, g, D, A, R) {
                const {matched: V, consumedSegments: ge, remainingSegments: Ge, positionalParamSegments: Tt} = zi(c, D, A);
                if (!V)
                    return Ri(c);
                const nt = this.applyRedirectCommands(ge, D.redirectTo, Tt);
                return D.redirectTo.startsWith("/") ? Ao(nt) : this.lineralizeSegments(D, nt).pipe((0,
                st.z)(en => this.expandSegment(f, c, g, en.concat(Ge), R, !1)))
            }
            matchSegmentAgainstRoute(f, c, g, D, A) {
                return "**" === g.path ? (f = xi(g, f),
                g.loadChildren ? (g._loadedRoutes ? (0,
                z.of)({
                    routes: g._loadedRoutes,
                    injector: g._loadedInjector
                }) : this.configLoader.loadChildren(f, g)).pipe((0,
                K.U)(V => (g._loadedRoutes = V.routes,
                g._loadedInjector = V.injector,
                new Re(D,{})))) : (0,
                z.of)(new Re(D,{}))) : bo(c, g, D, f).pipe((0,
                ke.w)( ({matched: R, consumedSegments: V, remainingSegments: ge}) => R ? this.getChildConfig(f = g._injector ?? f, g, D).pipe((0,
                st.z)(Tt => {
                    const nt = Tt.injector ?? f
                      , en = Tt.routes
                      , {segmentGroup: Mr, slicedSegments: Qi} = co(c, V, ge, en)
                      , Lo = new Re(Mr.segments,Mr.children);
                    if (0 === Qi.length && Lo.hasChildren())
                        return this.expandChildren(nt, en, Lo).pipe((0,
                        K.U)(ko => new Re(V,ko)));
                    if (0 === en.length && 0 === Qi.length)
                        return (0,
                        z.of)(new Re(V,{}));
                    const ni = ae(g) === A;
                    return this.expandSegment(nt, Lo, en, Qi, ni ? q : A, !0).pipe((0,
                    K.U)(mo => new Re(V.concat(mo.segments),mo.children)))
                }
                )) : Ri(c)))
            }
            getChildConfig(f, c, g) {
                return c.children ? (0,
                z.of)({
                    routes: c.children,
                    injector: f
                }) : c.loadChildren ? void 0 !== c._loadedRoutes ? (0,
                z.of)({
                    routes: c._loadedRoutes,
                    injector: c._loadedInjector
                }) : function Fi(d, f, c, g) {
                    const D = f.canLoad;
                    if (void 0 === D || 0 === D.length)
                        return (0,
                        z.of)(!0);
                    const A = D.map(R => {
                        const V = d.get(R)
                          , ge = function Qr(d) {
                            return d && qr(d.canLoad)
                        }(V) ? V.canLoad(f, c) : V(f, c);
                        return Lt(ge)
                    }
                    );
                    return (0,
                    z.of)(A).pipe(v(), kr())
                }(f, c, g).pipe((0,
                st.z)(D => D ? this.configLoader.loadChildren(f, c).pipe((0,
                Ot.b)(A => {
                    c._loadedRoutes = A.routes,
                    c._loadedInjector = A.injector
                }
                )) : function Ca(d) {
                    return (0,
                    Qe._)(Oi(fo, 3))
                }())) : (0,
                z.of)({
                    routes: [],
                    injector: f
                })
            }
            lineralizeSegments(f, c) {
                let g = []
                  , D = c.root;
                for (; ; ) {
                    if (g = g.concat(D.segments),
                    0 === D.numberOfChildren)
                        return (0,
                        z.of)(g);
                    if (D.numberOfChildren > 1 || !D.children[q])
                        return (0,
                        Qe._)(new a.vHH(4e3,fo));
                    D = D.children[q]
                }
            }
            applyRedirectCommands(f, c, g) {
                return this.applyRedirectCreateUrlTree(c, this.urlSerializer.parse(c), f, g)
            }
            applyRedirectCreateUrlTree(f, c, g, D) {
                const A = this.createSegmentGroup(f, c.root, g, D);
                return new rt(A,this.createQueryParams(c.queryParams, this.urlTree.queryParams),c.fragment)
            }
            createQueryParams(f, c) {
                const g = {};
                return Kt(f, (D, A) => {
                    if ("string" == typeof D && D.startsWith(":")) {
                        const V = D.substring(1);
                        g[A] = c[V]
                    } else
                        g[A] = D
                }
                ),
                g
            }
            createSegmentGroup(f, c, g, D) {
                const A = this.createSegments(f, c.segments, g, D);
                let R = {};
                return Kt(c.children, (V, ge) => {
                    R[ge] = this.createSegmentGroup(f, V, g, D)
                }
                ),
                new Re(A,R)
            }
            createSegments(f, c, g, D) {
                return c.map(A => A.path.startsWith(":") ? this.findPosParam(f, A, D) : this.findOrReturn(A, g))
            }
            findPosParam(f, c, g) {
                const D = g[c.path.substring(1)];
                if (!D)
                    throw new a.vHH(4001,fo);
                return D
            }
            findOrReturn(f, c) {
                let g = 0;
                for (const D of c) {
                    if (D.path === f.path)
                        return c.splice(g),
                        D;
                    g++
                }
                return f
            }
        }
        class ks {
        }
        class Bs {
            constructor(f, c, g, D, A, R, V, ge) {
                this.injector = f,
                this.rootComponentType = c,
                this.config = g,
                this.urlTree = D,
                this.url = A,
                this.paramsInheritanceStrategy = R,
                this.relativeLinkResolution = V,
                this.urlSerializer = ge
            }
            recognize() {
                const f = co(this.urlTree.root, [], [], this.config.filter(c => void 0 === c.redirectTo), this.relativeLinkResolution).segmentGroup;
                return this.processSegmentGroup(this.injector, this.config, f, q).pipe((0,
                K.U)(c => {
                    if (null === c)
                        return null;
                    const g = new ai([],Object.freeze({}),Object.freeze({
                        ...this.urlTree.queryParams
                    }),this.urlTree.fragment,{},q,this.rootComponentType,null,this.urlTree.root,-1,{})
                      , D = new dr(g,c)
                      , A = new io(this.url,D);
                    return this.inheritParamsAndData(A._root),
                    A
                }
                ))
            }
            inheritParamsAndData(f) {
                const c = f.value
                  , g = vi(c, this.paramsInheritanceStrategy);
                c.params = Object.freeze(g.params),
                c.data = Object.freeze(g.data),
                f.children.forEach(D => this.inheritParamsAndData(D))
            }
            processSegmentGroup(f, c, g, D) {
                return 0 === g.segments.length && g.hasChildren() ? this.processChildren(f, c, g) : this.processSegment(f, c, g, g.segments, D)
            }
            processChildren(f, c, g) {
                return (0,
                de.D)(Object.keys(g.children)).pipe((0,
                lt.b)(D => {
                    const A = g.children[D]
                      , R = Te(c, D);
                    return this.processSegmentGroup(f, R, A, D)
                }
                ), X( (D, A) => D && A ? (D.push(...A),
                D) : null), function ne(d, f=!1) {
                    return (0,
                    be.e)( (c, g) => {
                        let D = 0;
                        c.subscribe((0,
                        Ce.x)(g, A => {
                            const R = d(A, D++);
                            (R || f) && g.next(A),
                            !R && g.complete()
                        }
                        ))
                    }
                    )
                }(D => null !== D), (0,
                De.d)(null), Z(), (0,
                K.U)(D => {
                    if (null === D)
                        return null;
                    const A = l(D);
                    return function Hs(d) {
                        d.sort( (f, c) => f.value.outlet === q ? -1 : c.value.outlet === q ? 1 : f.value.outlet.localeCompare(c.value.outlet))
                    }(A),
                    A
                }
                ))
            }
            processSegment(f, c, g, D, A) {
                return (0,
                de.D)(c).pipe((0,
                lt.b)(R => this.processSegmentAgainstRoute(R._injector ?? f, R, g, D, A)), (0,
                Zt.P)(R => !!R), (0,
                pn.K)(R => {
                    if (uo(R))
                        return So(g, D, A) ? (0,
                        z.of)([]) : (0,
                        z.of)(null);
                    throw R
                }
                ))
            }
            processSegmentAgainstRoute(f, c, g, D, A) {
                if (c.redirectTo || !Go(c, g, D, A))
                    return (0,
                    z.of)(null);
                let R;
                if ("**" === c.path) {
                    const V = D.length > 0 ? En(D).parameters : {}
                      , ge = T(g) + D.length
                      , Ge = new ai(D,V,Object.freeze({
                        ...this.urlTree.queryParams
                    }),this.urlTree.fragment,U(c),ae(c),c.component ?? c._loadedComponent ?? null,c,y(g),ge,j(c),ge);
                    R = (0,
                    z.of)({
                        snapshot: Ge,
                        consumedSegments: [],
                        remainingSegments: []
                    })
                } else
                    R = bo(g, c, D, f).pipe((0,
                    K.U)( ({matched: V, consumedSegments: ge, remainingSegments: Ge, parameters: Tt}) => {
                        if (!V)
                            return null;
                        const nt = T(g) + ge.length;
                        return {
                            snapshot: new ai(ge,Tt,Object.freeze({
                                ...this.urlTree.queryParams
                            }),this.urlTree.fragment,U(c),ae(c),c.component ?? c._loadedComponent ?? null,c,y(g),nt,j(c),nt),
                            consumedSegments: ge,
                            remainingSegments: Ge
                        }
                    }
                    ));
                return R.pipe((0,
                ke.w)(V => {
                    if (null === V)
                        return (0,
                        z.of)(null);
                    const {snapshot: ge, consumedSegments: Ge, remainingSegments: Tt} = V;
                    f = c._injector ?? f;
                    const nt = c._loadedInjector ?? f
                      , en = function zo(d) {
                        return d.children ? d.children : d.loadChildren ? d._loadedRoutes : []
                    }(c)
                      , {segmentGroup: Mr, slicedSegments: Qi} = co(g, Ge, Tt, en.filter(ni => void 0 === ni.redirectTo), this.relativeLinkResolution);
                    if (0 === Qi.length && Mr.hasChildren())
                        return this.processChildren(nt, en, Mr).pipe((0,
                        K.U)(ni => null === ni ? null : [new dr(ge,ni)]));
                    if (0 === en.length && 0 === Qi.length)
                        return (0,
                        z.of)([new dr(ge,[])]);
                    const Lo = ae(c) === A;
                    return this.processSegment(nt, en, Mr, Qi, Lo ? q : A).pipe((0,
                    K.U)(ni => null === ni ? null : [new dr(ge,ni)]))
                }
                ))
            }
        }
        function M(d) {
            const f = d.value.routeConfig;
            return f && "" === f.path && void 0 === f.redirectTo
        }
        function l(d) {
            const f = []
              , c = new Set;
            for (const g of d) {
                if (!M(g)) {
                    f.push(g);
                    continue
                }
                const D = f.find(A => g.value.routeConfig === A.value.routeConfig);
                void 0 !== D ? (D.children.push(...g.children),
                c.add(D)) : f.push(g)
            }
            for (const g of c) {
                const D = l(g.children);
                f.push(new dr(g.value,D))
            }
            return f.filter(g => !c.has(g))
        }
        function y(d) {
            let f = d;
            for (; f._sourceSegment; )
                f = f._sourceSegment;
            return f
        }
        function T(d) {
            let f = d
              , c = f._segmentIndexShift ?? 0;
            for (; f._sourceSegment; )
                f = f._sourceSegment,
                c += f._segmentIndexShift ?? 0;
            return c - 1
        }
        function U(d) {
            return d.data || {}
        }
        function j(d) {
            return d.resolve || {}
        }
        const ve = Symbol("RouteTitle");
        function vt(d) {
            return "string" == typeof d.title || null === d.title
        }
        function Ht(d) {
            return (0,
            ke.w)(f => {
                const c = d(f);
                return c ? (0,
                de.D)(c).pipe((0,
                K.U)( () => f)) : (0,
                z.of)(f)
            }
            )
        }
        let Qt = ( () => {
            class d {
                buildTitle(c) {
                    let g, D = c.root;
                    for (; void 0 !== D; )
                        g = this.getResolvedTitleForRoute(D) ?? g,
                        D = D.children.find(A => A.outlet === q);
                    return g
                }
                getResolvedTitleForRoute(c) {
                    return c.data[ve]
                }
            }
            return d.\u0275fac = function(c) {
                return new (c || d)
            }
            ,
            d.\u0275prov = a.Yz7({
                token: d,
                factory: function() {
                    return (0,
                    a.f3M)(vn)
                },
                providedIn: "root"
            }),
            d
        }
        )()
          , vn = ( () => {
            class d extends Qt {
                constructor(c) {
                    super(),
                    this.title = c
                }
                updateTitle(c) {
                    const g = this.buildTitle(c);
                    void 0 !== g && this.title.setTitle(g)
                }
            }
            return d.\u0275fac = function(c) {
                return new (c || d)(a.LFG(Q.Dx))
            }
            ,
            d.\u0275prov = a.Yz7({
                token: d,
                factory: d.\u0275fac,
                providedIn: "root"
            }),
            d
        }
        )();
        class Gn {
        }
        class Br extends class Nn {
            shouldDetach(f) {
                return !1
            }
            store(f, c) {}
            shouldAttach(f) {
                return !1
            }
            retrieve(f) {
                return null
            }
            shouldReuseRoute(f, c) {
                return f.routeConfig === c.routeConfig
            }
        }
        {
        }
        const _n = new a.OlP("",{
            providedIn: "root",
            factory: () => ({})
        })
          , or = new a.OlP("ROUTES");
        let Jr = ( () => {
            class d {
                constructor(c, g) {
                    this.injector = c,
                    this.compiler = g,
                    this.componentLoaders = new WeakMap,
                    this.childrenLoaders = new WeakMap
                }
                loadComponent(c) {
                    if (this.componentLoaders.get(c))
                        return this.componentLoaders.get(c);
                    if (c._loadedComponent)
                        return (0,
                        z.of)(c._loadedComponent);
                    this.onLoadStartListener && this.onLoadStartListener(c);
                    const g = Lt(c.loadComponent()).pipe((0,
                    Ot.b)(A => {
                        this.onLoadEndListener && this.onLoadEndListener(c),
                        c._loadedComponent = A
                    }
                    ), he( () => {
                        this.componentLoaders.delete(c)
                    }
                    ))
                      , D = new Se(g, () => new Mt.x).pipe(Oe());
                    return this.componentLoaders.set(c, D),
                    D
                }
                loadChildren(c, g) {
                    if (this.childrenLoaders.get(g))
                        return this.childrenLoaders.get(g);
                    if (g._loadedRoutes)
                        return (0,
                        z.of)({
                            routes: g._loadedRoutes,
                            injector: g._loadedInjector
                        });
                    this.onLoadStartListener && this.onLoadStartListener(g);
                    const A = this.loadModuleFactoryOrRoutes(g.loadChildren).pipe((0,
                    K.U)(V => {
                        this.onLoadEndListener && this.onLoadEndListener(g);
                        let ge, Ge, Tt = !1;
                        Array.isArray(V) ? Ge = V : (ge = V.create(c).injector,
                        Ge = Tn(ge.get(or, [], a.XFs.Self | a.XFs.Optional)));
                        return {
                            routes: Ge.map(G),
                            injector: ge
                        }
                    }
                    ), he( () => {
                        this.childrenLoaders.delete(g)
                    }
                    ))
                      , R = new Se(A, () => new Mt.x).pipe(Oe());
                    return this.childrenLoaders.set(g, R),
                    R
                }
                loadModuleFactoryOrRoutes(c) {
                    return Lt(c()).pipe((0,
                    st.z)(g => g instanceof a.YKP || Array.isArray(g) ? (0,
                    z.of)(g) : (0,
                    de.D)(this.compiler.compileModuleAsync(g))))
                }
            }
            return d.\u0275fac = function(c) {
                return new (c || d)(a.LFG(a.zs3),a.LFG(a.Sil))
            }
            ,
            d.\u0275prov = a.Yz7({
                token: d,
                factory: d.\u0275fac,
                providedIn: "root"
            }),
            d
        }
        )();
        class Wo {
        }
        class Ki {
            shouldProcessUrl(f) {
                return !0
            }
            extract(f) {
                return f
            }
            merge(f, c) {
                return f
            }
        }
        function Hr(d) {
            throw d
        }
        function ss(d, f, c) {
            return f.parse("/")
        }
        const et = {
            paths: "exact",
            fragment: "ignored",
            matrixParams: "ignored",
            queryParams: "exact"
        }
          , at = {
            paths: "subset",
            fragment: "ignored",
            matrixParams: "ignored",
            queryParams: "subset"
        };
        function Nt() {
            const d = (0,
            a.f3M)(At)
              , f = (0,
            a.f3M)(Rr)
              , c = (0,
            a.f3M)(Be.Ye)
              , g = (0,
            a.f3M)(a.zs3)
              , D = (0,
            a.f3M)(a.Sil)
              , A = (0,
            a.f3M)(or, {
                optional: !0
            }) ?? []
              , R = (0,
            a.f3M)(_n, {
                optional: !0
            }) ?? {}
              , V = (0,
            a.f3M)(vn)
              , ge = (0,
            a.f3M)(Qt, {
                optional: !0
            })
              , Ge = (0,
            a.f3M)(Wo, {
                optional: !0
            })
              , Tt = (0,
            a.f3M)(Gn, {
                optional: !0
            })
              , nt = new Rt(null,d,f,c,g,D,Tn(A));
            return Ge && (nt.urlHandlingStrategy = Ge),
            Tt && (nt.routeReuseStrategy = Tt),
            nt.titleStrategy = ge ?? V,
            function ht(d, f) {
                d.errorHandler && (f.errorHandler = d.errorHandler),
                d.malformedUriErrorHandler && (f.malformedUriErrorHandler = d.malformedUriErrorHandler),
                d.onSameUrlNavigation && (f.onSameUrlNavigation = d.onSameUrlNavigation),
                d.paramsInheritanceStrategy && (f.paramsInheritanceStrategy = d.paramsInheritanceStrategy),
                d.relativeLinkResolution && (f.relativeLinkResolution = d.relativeLinkResolution),
                d.urlUpdateStrategy && (f.urlUpdateStrategy = d.urlUpdateStrategy),
                d.canceledNavigationResolution && (f.canceledNavigationResolution = d.canceledNavigationResolution)
            }(R, nt),
            nt
        }
        let Rt = ( () => {
            class d {
                constructor(c, g, D, A, R, V, ge) {
                    this.rootComponentType = c,
                    this.urlSerializer = g,
                    this.rootContexts = D,
                    this.location = A,
                    this.config = ge,
                    this.lastSuccessfulNavigation = null,
                    this.currentNavigation = null,
                    this.disposed = !1,
                    this.navigationId = 0,
                    this.currentPageId = 0,
                    this.isNgZoneEnabled = !1,
                    this.events = new Mt.x,
                    this.errorHandler = Hr,
                    this.malformedUriErrorHandler = ss,
                    this.navigated = !1,
                    this.lastSuccessfulId = -1,
                    this.afterPreactivation = () => (0,
                    z.of)(void 0),
                    this.urlHandlingStrategy = new Ki,
                    this.routeReuseStrategy = new Br,
                    this.onSameUrlNavigation = "ignore",
                    this.paramsInheritanceStrategy = "emptyOnly",
                    this.urlUpdateStrategy = "deferred",
                    this.relativeLinkResolution = "corrected",
                    this.canceledNavigationResolution = "replace",
                    this.configLoader = R.get(Jr),
                    this.configLoader.onLoadEndListener = en => this.triggerEvent(new Wr(en)),
                    this.configLoader.onLoadStartListener = en => this.triggerEvent(new rr(en)),
                    this.ngModule = R.get(a.h0i),
                    this.console = R.get(a.c2e);
                    const nt = R.get(a.R0b);
                    this.isNgZoneEnabled = nt instanceof a.R0b && a.R0b.isInAngularZone(),
                    this.resetConfig(ge),
                    this.currentUrlTree = function ln() {
                        return new rt(new Re([],{}),{},null)
                    }(),
                    this.rawUrlTree = this.currentUrlTree,
                    this.browserUrlTree = this.currentUrlTree,
                    this.routerState = Dr(this.currentUrlTree, this.rootComponentType),
                    this.transitions = new _e.X({
                        id: 0,
                        targetPageId: 0,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.currentUrlTree,
                        extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                        rawUrl: this.currentUrlTree,
                        extras: {},
                        resolve: null,
                        reject: null,
                        promise: Promise.resolve(!0),
                        source: "imperative",
                        restoredState: null,
                        currentSnapshot: this.routerState.snapshot,
                        targetSnapshot: null,
                        currentRouterState: this.routerState,
                        targetRouterState: null,
                        guards: {
                            canActivateChecks: [],
                            canDeactivateChecks: []
                        },
                        guardsResult: null
                    }),
                    this.navigations = this.setupNavigations(this.transitions),
                    this.processNavigations()
                }
                get browserPageId() {
                    return this.location.getState()?.\u0275routerPageId
                }
                setupNavigations(c) {
                    const g = this.events;
                    return c.pipe((0,
                    le.h)(D => 0 !== D.id), (0,
                    K.U)(D => ({
                        ...D,
                        extractedUrl: this.urlHandlingStrategy.extract(D.rawUrl)
                    })), (0,
                    ke.w)(D => {
                        let A = !1
                          , R = !1;
                        return (0,
                        z.of)(D).pipe((0,
                        Ot.b)(V => {
                            this.currentNavigation = {
                                id: V.id,
                                initialUrl: V.rawUrl,
                                extractedUrl: V.extractedUrl,
                                trigger: V.source,
                                extras: V.extras,
                                previousNavigation: this.lastSuccessfulNavigation ? {
                                    ...this.lastSuccessfulNavigation,
                                    previousNavigation: null
                                } : null
                            }
                        }
                        ), (0,
                        ke.w)(V => {
                            const ge = this.browserUrlTree.toString()
                              , Ge = !this.navigated || V.extractedUrl.toString() !== ge || ge !== this.currentUrlTree.toString();
                            if (("reload" === this.onSameUrlNavigation || Ge) && this.urlHandlingStrategy.shouldProcessUrl(V.rawUrl))
                                return Zn(V.source) && (this.browserUrlTree = V.extractedUrl),
                                (0,
                                z.of)(V).pipe((0,
                                ke.w)(nt => {
                                    const en = this.transitions.getValue();
                                    return g.next(new xr(nt.id,this.serializeUrl(nt.extractedUrl),nt.source,nt.restoredState)),
                                    en !== this.transitions.getValue() ? it.E : Promise.resolve(nt)
                                }
                                ), function yn(d, f, c, g) {
                                    return (0,
                                    ke.w)(D => function ir(d, f, c, g, D) {
                                        return new Ei(d,f,c,g,D).apply()
                                    }(d, f, c, D.extractedUrl, g).pipe((0,
                                    K.U)(A => ({
                                        ...D,
                                        urlAfterRedirects: A
                                    }))))
                                }(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config), (0,
                                Ot.b)(nt => {
                                    this.currentNavigation = {
                                        ...this.currentNavigation,
                                        finalUrl: nt.urlAfterRedirects
                                    },
                                    D.urlAfterRedirects = nt.urlAfterRedirects
                                }
                                ), function re(d, f, c, g, D, A) {
                                    return (0,
                                    st.z)(R => function Vs(d, f, c, g, D, A, R="emptyOnly", V="legacy") {
                                        return new Bs(d,f,c,g,D,R,V,A).recognize().pipe((0,
                                        ke.w)(ge => null === ge ? function Io(d) {
                                            return new b.y(f => f.error(d))
                                        }(new ks) : (0,
                                        z.of)(ge)))
                                    }(d, f, c, R.urlAfterRedirects, g.serialize(R.urlAfterRedirects), g, D, A).pipe((0,
                                    K.U)(V => ({
                                        ...R,
                                        targetSnapshot: V
                                    }))))
                                }(this.ngModule.injector, this.rootComponentType, this.config, this.urlSerializer, this.paramsInheritanceStrategy, this.relativeLinkResolution), (0,
                                Ot.b)(nt => {
                                    if (D.targetSnapshot = nt.targetSnapshot,
                                    "eager" === this.urlUpdateStrategy) {
                                        if (!nt.extras.skipLocationChange) {
                                            const Mr = this.urlHandlingStrategy.merge(nt.urlAfterRedirects, nt.rawUrl);
                                            this.setBrowserUrl(Mr, nt)
                                        }
                                        this.browserUrlTree = nt.urlAfterRedirects
                                    }
                                    const en = new zr(nt.id,this.serializeUrl(nt.extractedUrl),this.serializeUrl(nt.urlAfterRedirects),nt.targetSnapshot);
                                    g.next(en)
                                }
                                ));
                            if (Ge && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                                const {id: en, extractedUrl: Mr, source: Qi, restoredState: Lo, extras: ni} = V
                                  , Tr = new xr(en,this.serializeUrl(Mr),Qi,Lo);
                                g.next(Tr);
                                const mo = Dr(Mr, this.rootComponentType).snapshot;
                                return D = {
                                    ...V,
                                    targetSnapshot: mo,
                                    urlAfterRedirects: Mr,
                                    extras: {
                                        ...ni,
                                        skipLocationChange: !1,
                                        replaceUrl: !1
                                    }
                                },
                                (0,
                                z.of)(D)
                            }
                            return this.rawUrlTree = V.rawUrl,
                            V.resolve(null),
                            it.E
                        }
                        ), (0,
                        Ot.b)(V => {
                            const ge = new qn(V.id,this.serializeUrl(V.extractedUrl),this.serializeUrl(V.urlAfterRedirects),V.targetSnapshot);
                            this.triggerEvent(ge)
                        }
                        ), (0,
                        K.U)(V => D = {
                            ...V,
                            guards: Bt(V.targetSnapshot, V.currentSnapshot, this.rootContexts)
                        }), function m(d, f) {
                            return (0,
                            st.z)(c => {
                                const {targetSnapshot: g, currentSnapshot: D, guards: {canActivateChecks: A, canDeactivateChecks: R}} = c;
                                return 0 === R.length && 0 === A.length ? (0,
                                z.of)({
                                    ...c,
                                    guardsResult: !0
                                }) : function O(d, f, c, g) {
                                    return (0,
                                    de.D)(d).pipe((0,
                                    st.z)(D => function Ln(d, f, c, g, D) {
                                        const A = f && f.routeConfig ? f.routeConfig.canDeactivate : null;
                                        if (!A || 0 === A.length)
                                            return (0,
                                            z.of)(!0);
                                        const R = A.map(V => {
                                            const ge = qe(V, f, D);
                                            return Lt(function Pt(d) {
                                                return d && qr(d.canDeactivate)
                                            }(ge) ? ge.canDeactivate(d, f, c, g) : ge(d, f, c, g)).pipe((0,
                                            Zt.P)())
                                        }
                                        );
                                        return (0,
                                        z.of)(R).pipe(v())
                                    }(D.component, D.route, c, f, g)), (0,
                                    Zt.P)(D => !0 !== D, !0))
                                }(R, g, D, d).pipe((0,
                                st.z)(V => V && function hi(d) {
                                    return "boolean" == typeof d
                                }(V) ? function ue(d, f, c, g) {
                                    return (0,
                                    de.D)(f).pipe((0,
                                    lt.b)(D => (0,
                                    Ne.z)(function cn(d, f) {
                                        return null !== d && f && f(new Nr(d)),
                                        (0,
                                        z.of)(!0)
                                    }(D.route.parent, g), function Ze(d, f) {
                                        return null !== d && f && f(new tn(d)),
                                        (0,
                                        z.of)(!0)
                                    }(D.route, g), function hn(d, f, c) {
                                        const g = f[f.length - 1]
                                          , A = f.slice(0, f.length - 1).reverse().map(R => function Wt(d) {
                                            const f = d.routeConfig ? d.routeConfig.canActivateChild : null;
                                            return f && 0 !== f.length ? {
                                                node: d,
                                                guards: f
                                            } : null
                                        }(R)).filter(R => null !== R).map(R => te( () => {
                                            const V = R.guards.map(ge => {
                                                const Ge = qe(ge, R.node, c);
                                                return Lt(function Ie(d) {
                                                    return d && qr(d.canActivateChild)
                                                }(Ge) ? Ge.canActivateChild(g, d) : Ge(g, d)).pipe((0,
                                                Zt.P)())
                                            }
                                            );
                                            return (0,
                                            z.of)(V).pipe(v())
                                        }
                                        ));
                                        return (0,
                                        z.of)(A).pipe(v())
                                    }(d, D.path, c), function xn(d, f, c) {
                                        const g = f.routeConfig ? f.routeConfig.canActivate : null;
                                        if (!g || 0 === g.length)
                                            return (0,
                                            z.of)(!0);
                                        const D = g.map(A => te( () => {
                                            const R = qe(A, f, c);
                                            return Lt(function is(d) {
                                                return d && qr(d.canActivate)
                                            }(R) ? R.canActivate(f, d) : R(f, d)).pipe((0,
                                            Zt.P)())
                                        }
                                        ));
                                        return (0,
                                        z.of)(D).pipe(v())
                                    }(d, D.route, c))), (0,
                                    Zt.P)(D => !0 !== D, !0))
                                }(g, A, d, f) : (0,
                                z.of)(V)), (0,
                                K.U)(V => ({
                                    ...c,
                                    guardsResult: V
                                })))
                            }
                            )
                        }(this.ngModule.injector, V => this.triggerEvent(V)), (0,
                        Ot.b)(V => {
                            if (D.guardsResult = V.guardsResult,
                            Y(V.guardsResult))
                                throw Kr(0, V.guardsResult);
                            const ge = new mn(V.id,this.serializeUrl(V.extractedUrl),this.serializeUrl(V.urlAfterRedirects),V.targetSnapshot,!!V.guardsResult);
                            this.triggerEvent(ge)
                        }
                        ), (0,
                        le.h)(V => !!V.guardsResult || (this.restoreHistory(V),
                        this.cancelNavigationTransition(V, "", 3),
                        !1)), Ht(V => {
                            if (V.guards.canActivateChecks.length)
                                return (0,
                                z.of)(V).pipe((0,
                                Ot.b)(ge => {
                                    const Ge = new Eo(ge.id,this.serializeUrl(ge.extractedUrl),this.serializeUrl(ge.urlAfterRedirects),ge.targetSnapshot);
                                    this.triggerEvent(Ge)
                                }
                                ), (0,
                                ke.w)(ge => {
                                    let Ge = !1;
                                    return (0,
                                    z.of)(ge).pipe(function Ke(d, f) {
                                        return (0,
                                        st.z)(c => {
                                            const {targetSnapshot: g, guards: {canActivateChecks: D}} = c;
                                            if (!D.length)
                                                return (0,
                                                z.of)(c);
                                            let A = 0;
                                            return (0,
                                            de.D)(D).pipe((0,
                                            lt.b)(R => function tt(d, f, c, g) {
                                                const D = d.routeConfig
                                                  , A = d._resolve;
                                                return void 0 !== D?.title && !vt(D) && (A[ve] = D.title),
                                                function xt(d, f, c, g) {
                                                    const D = function It(d) {
                                                        return [...Object.keys(d), ...Object.getOwnPropertySymbols(d)]
                                                    }(d);
                                                    if (0 === D.length)
                                                        return (0,
                                                        z.of)({});
                                                    const A = {};
                                                    return (0,
                                                    de.D)(D).pipe((0,
                                                    st.z)(R => function yt(d, f, c, g) {
                                                        const D = qe(d, f, g);
                                                        return Lt(D.resolve ? D.resolve(f, c) : D(f, c))
                                                    }(d[R], f, c, g).pipe((0,
                                                    Zt.P)(), (0,
                                                    Ot.b)(V => {
                                                        A[R] = V
                                                    }
                                                    ))), ot(1), (0,
                                                    Me.h)(A), (0,
                                                    pn.K)(R => uo(R) ? it.E : (0,
                                                    Qe._)(R)))
                                                }(A, d, f, g).pipe((0,
                                                K.U)(R => (d._resolvedData = R,
                                                d.data = vi(d, c).resolve,
                                                D && vt(D) && (d.data[ve] = D.title),
                                                null)))
                                            }(R.route, g, d, f)), (0,
                                            Ot.b)( () => A++), ot(1), (0,
                                            st.z)(R => A === D.length ? (0,
                                            z.of)(c) : it.E))
                                        }
                                        )
                                    }(this.paramsInheritanceStrategy, this.ngModule.injector), (0,
                                    Ot.b)({
                                        next: () => Ge = !0,
                                        complete: () => {
                                            Ge || (this.restoreHistory(ge),
                                            this.cancelNavigationTransition(ge, "", 2))
                                        }
                                    }))
                                }
                                ), (0,
                                Ot.b)(ge => {
                                    const Ge = new bn(ge.id,this.serializeUrl(ge.extractedUrl),this.serializeUrl(ge.urlAfterRedirects),ge.targetSnapshot);
                                    this.triggerEvent(Ge)
                                }
                                ))
                        }
                        ), Ht(V => {
                            const ge = Ge => {
                                const Tt = [];
                                Ge.routeConfig?.loadComponent && !Ge.routeConfig._loadedComponent && Tt.push(this.configLoader.loadComponent(Ge.routeConfig).pipe((0,
                                Ot.b)(nt => {
                                    Ge.component = nt
                                }
                                ), (0,
                                K.U)( () => {}
                                )));
                                for (const nt of Ge.children)
                                    Tt.push(...ge(nt));
                                return Tt
                            }
                            ;
                            return (0,
                            ce.a)(ge(V.targetSnapshot.root)).pipe((0,
                            De.d)(), (0,
                            Ve.q)(1))
                        }
                        ), Ht( () => this.afterPreactivation()), (0,
                        K.U)(V => {
                            const ge = function ui(d, f, c) {
                                const g = Cr(d, f._root, c ? c._root : void 0);
                                return new wo(g,f)
                            }(this.routeReuseStrategy, V.targetSnapshot, V.currentRouterState);
                            return D = {
                                ...V,
                                targetRouterState: ge
                            }
                        }
                        ), (0,
                        Ot.b)(V => {
                            this.currentUrlTree = V.urlAfterRedirects,
                            this.rawUrlTree = this.urlHandlingStrategy.merge(V.urlAfterRedirects, V.rawUrl),
                            this.routerState = V.targetRouterState,
                            "deferred" === this.urlUpdateStrategy && (V.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, V),
                            this.browserUrlTree = V.urlAfterRedirects)
                        }
                        ), ( (d, f, c) => (0,
                        K.U)(g => (new Gt(f,g.targetRouterState,g.currentRouterState,c).activate(d),
                        g)))(this.rootContexts, this.routeReuseStrategy, V => this.triggerEvent(V)), (0,
                        Ot.b)({
                            next() {
                                A = !0
                            },
                            complete() {
                                A = !0
                            }
                        }), he( () => {
                            A || R || this.cancelNavigationTransition(D, "", 1),
                            this.currentNavigation?.id === D.id && (this.currentNavigation = null)
                        }
                        ), (0,
                        pn.K)(V => {
                            if (R = !0,
                            oo(V)) {
                                ci(V) || (this.navigated = !0,
                                this.restoreHistory(D, !0));
                                const ge = new ur(D.id,this.serializeUrl(D.extractedUrl),V.message,V.cancellationCode);
                                if (g.next(ge),
                                ci(V)) {
                                    const Ge = this.urlHandlingStrategy.merge(V.url, this.rawUrlTree)
                                      , Tt = {
                                        skipLocationChange: D.extras.skipLocationChange,
                                        replaceUrl: "eager" === this.urlUpdateStrategy || Zn(D.source)
                                    };
                                    this.scheduleNavigation(Ge, "imperative", null, Tt, {
                                        resolve: D.resolve,
                                        reject: D.reject,
                                        promise: D.promise
                                    })
                                } else
                                    D.resolve(!1)
                            } else {
                                this.restoreHistory(D, !0);
                                const ge = new cr(D.id,this.serializeUrl(D.extractedUrl),V,D.targetSnapshot ?? void 0);
                                g.next(ge);
                                try {
                                    D.resolve(this.errorHandler(V))
                                } catch (Ge) {
                                    D.reject(Ge)
                                }
                            }
                            return it.E
                        }
                        ))
                    }
                    ))
                }
                resetRootComponentType(c) {
                    this.rootComponentType = c,
                    this.routerState.root.component = this.rootComponentType
                }
                setTransition(c) {
                    this.transitions.next({
                        ...this.transitions.value,
                        ...c
                    })
                }
                initialNavigation() {
                    this.setUpLocationChangeListener(),
                    0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
                        replaceUrl: !0
                    })
                }
                setUpLocationChangeListener() {
                    this.locationSubscription || (this.locationSubscription = this.location.subscribe(c => {
                        const g = "popstate" === c.type ? "popstate" : "hashchange";
                        "popstate" === g && setTimeout( () => {
                            const D = {
                                replaceUrl: !0
                            }
                              , A = c.state?.navigationId ? c.state : null;
                            if (A) {
                                const V = {
                                    ...A
                                };
                                delete V.navigationId,
                                delete V.\u0275routerPageId,
                                0 !== Object.keys(V).length && (D.state = V)
                            }
                            const R = this.parseUrl(c.url);
                            this.scheduleNavigation(R, g, A, D)
                        }
                        , 0)
                    }
                    ))
                }
                get url() {
                    return this.serializeUrl(this.currentUrlTree)
                }
                getCurrentNavigation() {
                    return this.currentNavigation
                }
                triggerEvent(c) {
                    this.events.next(c)
                }
                resetConfig(c) {
                    this.config = c.map(G),
                    this.navigated = !1,
                    this.lastSuccessfulId = -1
                }
                ngOnDestroy() {
                    this.dispose()
                }
                dispose() {
                    this.transitions.complete(),
                    this.locationSubscription && (this.locationSubscription.unsubscribe(),
                    this.locationSubscription = void 0),
                    this.disposed = !0
                }
                createUrlTree(c, g={}) {
                    const {relativeTo: D, queryParams: A, fragment: R, queryParamsHandling: V, preserveFragment: ge} = g
                      , Ge = D || this.routerState.root
                      , Tt = ge ? this.currentUrlTree.fragment : R;
                    let nt = null;
                    switch (V) {
                    case "merge":
                        nt = {
                            ...this.currentUrlTree.queryParams,
                            ...A
                        };
                        break;
                    case "preserve":
                        nt = this.currentUrlTree.queryParams;
                        break;
                    default:
                        nt = A || null
                    }
                    return null !== nt && (nt = this.removeEmptyProps(nt)),
                    kt(Ge, this.currentUrlTree, c, nt, Tt ?? null)
                }
                navigateByUrl(c, g={
                    skipLocationChange: !1
                }) {
                    const D = Y(c) ? c : this.parseUrl(c)
                      , A = this.urlHandlingStrategy.merge(D, this.rawUrlTree);
                    return this.scheduleNavigation(A, "imperative", null, g)
                }
                navigate(c, g={
                    skipLocationChange: !1
                }) {
                    return function ei(d) {
                        for (let f = 0; f < d.length; f++) {
                            if (null == d[f])
                                throw new a.vHH(4008,false)
                        }
                    }(c),
                    this.navigateByUrl(this.createUrlTree(c, g), g)
                }
                serializeUrl(c) {
                    return this.urlSerializer.serialize(c)
                }
                parseUrl(c) {
                    let g;
                    try {
                        g = this.urlSerializer.parse(c)
                    } catch (D) {
                        g = this.malformedUriErrorHandler(D, this.urlSerializer, c)
                    }
                    return g
                }
                isActive(c, g) {
                    let D;
                    if (D = !0 === g ? {
                        ...et
                    } : !1 === g ? {
                        ...at
                    } : g,
                    Y(c))
                        return ri(this.currentUrlTree, c, D);
                    const A = this.parseUrl(c);
                    return ri(this.currentUrlTree, A, D)
                }
                removeEmptyProps(c) {
                    return Object.keys(c).reduce( (g, D) => {
                        const A = c[D];
                        return null != A && (g[D] = A),
                        g
                    }
                    , {})
                }
                processNavigations() {
                    this.navigations.subscribe(c => {
                        this.navigated = !0,
                        this.lastSuccessfulId = c.id,
                        this.currentPageId = c.targetPageId,
                        this.events.next(new On(c.id,this.serializeUrl(c.extractedUrl),this.serializeUrl(this.currentUrlTree))),
                        this.lastSuccessfulNavigation = this.currentNavigation,
                        this.titleStrategy?.updateTitle(this.routerState.snapshot),
                        c.resolve(!0)
                    }
                    , c => {
                        this.console.warn(`Unhandled Navigation Error: ${c}`)
                    }
                    )
                }
                scheduleNavigation(c, g, D, A, R) {
                    if (this.disposed)
                        return Promise.resolve(!1);
                    let V, ge, Ge;
                    R ? (V = R.resolve,
                    ge = R.reject,
                    Ge = R.promise) : Ge = new Promise( (en, Mr) => {
                        V = en,
                        ge = Mr
                    }
                    );
                    const Tt = ++this.navigationId;
                    let nt;
                    return "computed" === this.canceledNavigationResolution ? (0 === this.currentPageId && (D = this.location.getState()),
                    nt = D && D.\u0275routerPageId ? D.\u0275routerPageId : A.replaceUrl || A.skipLocationChange ? this.browserPageId ?? 0 : (this.browserPageId ?? 0) + 1) : nt = 0,
                    this.setTransition({
                        id: Tt,
                        targetPageId: nt,
                        source: g,
                        restoredState: D,
                        currentUrlTree: this.currentUrlTree,
                        currentRawUrl: this.rawUrlTree,
                        rawUrl: c,
                        extras: A,
                        resolve: V,
                        reject: ge,
                        promise: Ge,
                        currentSnapshot: this.routerState.snapshot,
                        currentRouterState: this.routerState
                    }),
                    Ge.catch(en => Promise.reject(en))
                }
                setBrowserUrl(c, g) {
                    const D = this.urlSerializer.serialize(c)
                      , A = {
                        ...g.extras.state,
                        ...this.generateNgRouterState(g.id, g.targetPageId)
                    };
                    this.location.isCurrentPathEqualTo(D) || g.extras.replaceUrl ? this.location.replaceState(D, "", A) : this.location.go(D, "", A)
                }
                restoreHistory(c, g=!1) {
                    if ("computed" === this.canceledNavigationResolution) {
                        const D = this.currentPageId - c.targetPageId;
                        "popstate" !== c.source && "eager" !== this.urlUpdateStrategy && this.currentUrlTree !== this.currentNavigation?.finalUrl || 0 === D ? this.currentUrlTree === this.currentNavigation?.finalUrl && 0 === D && (this.resetState(c),
                        this.browserUrlTree = c.currentUrlTree,
                        this.resetUrlToCurrentUrlTree()) : this.location.historyGo(D)
                    } else
                        "replace" === this.canceledNavigationResolution && (g && this.resetState(c),
                        this.resetUrlToCurrentUrlTree())
                }
                resetState(c) {
                    this.routerState = c.currentRouterState,
                    this.currentUrlTree = c.currentUrlTree,
                    this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, c.rawUrl)
                }
                resetUrlToCurrentUrlTree() {
                    this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
                }
                cancelNavigationTransition(c, g, D) {
                    const A = new ur(c.id,this.serializeUrl(c.extractedUrl),g,D);
                    this.triggerEvent(A),
                    c.resolve(!1)
                }
                generateNgRouterState(c, g) {
                    return "computed" === this.canceledNavigationResolution ? {
                        navigationId: c,
                        \u0275routerPageId: g
                    } : {
                        navigationId: c
                    }
                }
            }
            return d.\u0275fac = function(c) {
                a.$Z()
            }
            ,
            d.\u0275prov = a.Yz7({
                token: d,
                factory: function() {
                    return Nt()
                },
                providedIn: "root"
            }),
            d
        }
        )();
        function Zn(d) {
            return "imperative" !== d
        }
        let br = ( () => {
            class d {
                constructor(c, g, D, A, R) {
                    this.router = c,
                    this.route = g,
                    this.tabIndexAttribute = D,
                    this.renderer = A,
                    this.el = R,
                    this.commands = null,
                    this.onChanges = new Mt.x,
                    this.setTabIndexIfNotOnNativeEl("0")
                }
                setTabIndexIfNotOnNativeEl(c) {
                    if (null != this.tabIndexAttribute)
                        return;
                    const g = this.renderer
                      , D = this.el.nativeElement;
                    null !== c ? g.setAttribute(D, "tabindex", c) : g.removeAttribute(D, "tabindex")
                }
                ngOnChanges(c) {
                    this.onChanges.next(this)
                }
                set routerLink(c) {
                    null != c ? (this.commands = Array.isArray(c) ? c : [c],
                    this.setTabIndexIfNotOnNativeEl("0")) : (this.commands = null,
                    this.setTabIndexIfNotOnNativeEl(null))
                }
                onClick() {
                    if (null === this.urlTree)
                        return !0;
                    const c = {
                        skipLocationChange: (0,
                        a.D6c)(this.skipLocationChange),
                        replaceUrl: (0,
                        a.D6c)(this.replaceUrl),
                        state: this.state
                    };
                    return this.router.navigateByUrl(this.urlTree, c),
                    !0
                }
                get urlTree() {
                    return null === this.commands ? null : this.router.createUrlTree(this.commands, {
                        relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                        queryParams: this.queryParams,
                        fragment: this.fragment,
                        queryParamsHandling: this.queryParamsHandling,
                        preserveFragment: (0,
                        a.D6c)(this.preserveFragment)
                    })
                }
            }
            return d.\u0275fac = function(c) {
                return new (c || d)(a.Y36(Rt),a.Y36(fr),a.$8M("tabindex"),a.Y36(a.Qsj),a.Y36(a.SBq))
            }
            ,
            d.\u0275dir = a.lG2({
                type: d,
                selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
                hostBindings: function(c, g) {
                    1 & c && a.NdJ("click", function() {
                        return g.onClick()
                    })
                },
                inputs: {
                    queryParams: "queryParams",
                    fragment: "fragment",
                    queryParamsHandling: "queryParamsHandling",
                    preserveFragment: "preserveFragment",
                    skipLocationChange: "skipLocationChange",
                    replaceUrl: "replaceUrl",
                    state: "state",
                    relativeTo: "relativeTo",
                    routerLink: "routerLink"
                },
                features: [a.TTD]
            }),
            d
        }
        )()
          , nn = ( () => {
            class d {
                constructor(c, g, D) {
                    this.router = c,
                    this.route = g,
                    this.locationStrategy = D,
                    this.commands = null,
                    this.href = null,
                    this.onChanges = new Mt.x,
                    this.subscription = c.events.subscribe(A => {
                        A instanceof On && this.updateTargetUrlAndHref()
                    }
                    )
                }
                set routerLink(c) {
                    this.commands = null != c ? Array.isArray(c) ? c : [c] : null
                }
                ngOnChanges(c) {
                    this.updateTargetUrlAndHref(),
                    this.onChanges.next(this)
                }
                ngOnDestroy() {
                    this.subscription.unsubscribe()
                }
                onClick(c, g, D, A, R) {
                    if (0 !== c || g || D || A || R || "string" == typeof this.target && "_self" != this.target || null === this.urlTree)
                        return !0;
                    const V = {
                        skipLocationChange: (0,
                        a.D6c)(this.skipLocationChange),
                        replaceUrl: (0,
                        a.D6c)(this.replaceUrl),
                        state: this.state
                    };
                    return this.router.navigateByUrl(this.urlTree, V),
                    !1
                }
                updateTargetUrlAndHref() {
                    this.href = null !== this.urlTree ? this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)) : null
                }
                get urlTree() {
                    return null === this.commands ? null : this.router.createUrlTree(this.commands, {
                        relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                        queryParams: this.queryParams,
                        fragment: this.fragment,
                        queryParamsHandling: this.queryParamsHandling,
                        preserveFragment: (0,
                        a.D6c)(this.preserveFragment)
                    })
                }
            }
            return d.\u0275fac = function(c) {
                return new (c || d)(a.Y36(Rt),a.Y36(fr),a.Y36(Be.S$))
            }
            ,
            d.\u0275dir = a.lG2({
                type: d,
                selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
                hostVars: 2,
                hostBindings: function(c, g) {
                    1 & c && a.NdJ("click", function(A) {
                        return g.onClick(A.button, A.ctrlKey, A.shiftKey, A.altKey, A.metaKey)
                    }),
                    2 & c && a.uIk("target", g.target)("href", g.href, a.LSH)
                },
                inputs: {
                    target: "target",
                    queryParams: "queryParams",
                    fragment: "fragment",
                    queryParamsHandling: "queryParamsHandling",
                    preserveFragment: "preserveFragment",
                    skipLocationChange: "skipLocationChange",
                    replaceUrl: "replaceUrl",
                    state: "state",
                    relativeTo: "relativeTo",
                    routerLink: "routerLink"
                },
                features: [a.TTD]
            }),
            d
        }
        )()
          , Po = ( () => {
            class d {
                constructor(c, g, D, A, R, V) {
                    this.router = c,
                    this.element = g,
                    this.renderer = D,
                    this.cdr = A,
                    this.link = R,
                    this.linkWithHref = V,
                    this.classes = [],
                    this.isActive = !1,
                    this.routerLinkActiveOptions = {
                        exact: !1
                    },
                    this.isActiveChange = new a.vpe,
                    this.routerEventsSubscription = c.events.subscribe(ge => {
                        ge instanceof On && this.update()
                    }
                    )
                }
                ngAfterContentInit() {
                    (0,
                    z.of)(this.links.changes, this.linksWithHrefs.changes, (0,
                    z.of)(null)).pipe((0,
                    Le.J)()).subscribe(c => {
                        this.update(),
                        this.subscribeToEachLinkOnChanges()
                    }
                    )
                }
                subscribeToEachLinkOnChanges() {
                    this.linkInputChangesSubscription?.unsubscribe();
                    const c = [...this.links.toArray(), ...this.linksWithHrefs.toArray(), this.link, this.linkWithHref].filter(g => !!g).map(g => g.onChanges);
                    this.linkInputChangesSubscription = (0,
                    de.D)(c).pipe((0,
                    Le.J)()).subscribe(g => {
                        this.isActive !== this.isLinkActive(this.router)(g) && this.update()
                    }
                    )
                }
                set routerLinkActive(c) {
                    const g = Array.isArray(c) ? c : c.split(" ");
                    this.classes = g.filter(D => !!D)
                }
                ngOnChanges(c) {
                    this.update()
                }
                ngOnDestroy() {
                    this.routerEventsSubscription.unsubscribe(),
                    this.linkInputChangesSubscription?.unsubscribe()
                }
                update() {
                    !this.links || !this.linksWithHrefs || !this.router.navigated || Promise.resolve().then( () => {
                        const c = this.hasActiveLinks();
                        this.isActive !== c && (this.isActive = c,
                        this.cdr.markForCheck(),
                        this.classes.forEach(g => {
                            c ? this.renderer.addClass(this.element.nativeElement, g) : this.renderer.removeClass(this.element.nativeElement, g)
                        }
                        ),
                        c && void 0 !== this.ariaCurrentWhenActive ? this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString()) : this.renderer.removeAttribute(this.element.nativeElement, "aria-current"),
                        this.isActiveChange.emit(c))
                    }
                    )
                }
                isLinkActive(c) {
                    const g = function Us(d) {
                        return !!d.paths
                    }(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact || !1;
                    return D => !!D.urlTree && c.isActive(D.urlTree, g)
                }
                hasActiveLinks() {
                    const c = this.isLinkActive(this.router);
                    return this.link && c(this.link) || this.linkWithHref && c(this.linkWithHref) || this.links.some(c) || this.linksWithHrefs.some(c)
                }
            }
            return d.\u0275fac = function(c) {
                return new (c || d)(a.Y36(Rt),a.Y36(a.SBq),a.Y36(a.Qsj),a.Y36(a.sBO),a.Y36(br, 8),a.Y36(nn, 8))
            }
            ,
            d.\u0275dir = a.lG2({
                type: d,
                selectors: [["", "routerLinkActive", ""]],
                contentQueries: function(c, g, D) {
                    if (1 & c && (a.Suo(D, br, 5),
                    a.Suo(D, nn, 5)),
                    2 & c) {
                        let A;
                        a.iGM(A = a.CRH()) && (g.links = A),
                        a.iGM(A = a.CRH()) && (g.linksWithHrefs = A)
                    }
                },
                inputs: {
                    routerLinkActiveOptions: "routerLinkActiveOptions",
                    ariaCurrentWhenActive: "ariaCurrentWhenActive",
                    routerLinkActive: "routerLinkActive"
                },
                outputs: {
                    isActiveChange: "isActiveChange"
                },
                exportAs: ["routerLinkActive"],
                features: [a.TTD]
            }),
            d
        }
        )();
        class Mn {
        }
        let Yi = ( () => {
            class d {
                constructor(c, g, D, A, R) {
                    this.router = c,
                    this.injector = D,
                    this.preloadingStrategy = A,
                    this.loader = R
                }
                setUpPreloading() {
                    this.subscription = this.router.events.pipe((0,
                    le.h)(c => c instanceof On), (0,
                    lt.b)( () => this.preload())).subscribe( () => {}
                    )
                }
                preload() {
                    return this.processRoutes(this.injector, this.router.config)
                }
                ngOnDestroy() {
                    this.subscription && this.subscription.unsubscribe()
                }
                processRoutes(c, g) {
                    const D = [];
                    for (const A of g) {
                        A.providers && !A._injector && (A._injector = (0,
                        a.MMx)(A.providers, c, `Route: ${A.path}`));
                        const R = A._injector ?? c
                          , V = A._loadedInjector ?? R;
                        A.loadChildren && !A._loadedRoutes && void 0 === A.canLoad || A.loadComponent && !A._loadedComponent ? D.push(this.preloadConfig(R, A)) : (A.children || A._loadedRoutes) && D.push(this.processRoutes(V, A.children ?? A._loadedRoutes))
                    }
                    return (0,
                    de.D)(D).pipe((0,
                    Le.J)())
                }
                preloadConfig(c, g) {
                    return this.preloadingStrategy.preload(g, () => {
                        let D;
                        D = g.loadChildren && void 0 === g.canLoad ? this.loader.loadChildren(c, g) : (0,
                        z.of)(null);
                        const A = D.pipe((0,
                        st.z)(R => null === R ? (0,
                        z.of)(void 0) : (g._loadedRoutes = R.routes,
                        g._loadedInjector = R.injector,
                        this.processRoutes(R.injector ?? c, R.routes))));
                        if (g.loadComponent && !g._loadedComponent) {
                            const R = this.loader.loadComponent(g);
                            return (0,
                            de.D)([A, R]).pipe((0,
                            Le.J)())
                        }
                        return A
                    }
                    )
                }
            }
            return d.\u0275fac = function(c) {
                return new (c || d)(a.LFG(Rt),a.LFG(a.Sil),a.LFG(a.lqb),a.LFG(Mn),a.LFG(Jr))
            }
            ,
            d.\u0275prov = a.Yz7({
                token: d,
                factory: d.\u0275fac
            }),
            d
        }
        )();
        const go = new a.OlP("");
        let Oo = ( () => {
            class d {
                constructor(c, g, D={}) {
                    this.router = c,
                    this.viewportScroller = g,
                    this.options = D,
                    this.lastId = 0,
                    this.lastSource = "imperative",
                    this.restoredId = 0,
                    this.store = {},
                    D.scrollPositionRestoration = D.scrollPositionRestoration || "disabled",
                    D.anchorScrolling = D.anchorScrolling || "disabled"
                }
                init() {
                    "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"),
                    this.routerEventsSubscription = this.createScrollEvents(),
                    this.scrollEventsSubscription = this.consumeScrollEvents()
                }
                createScrollEvents() {
                    return this.router.events.subscribe(c => {
                        c instanceof xr ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(),
                        this.lastSource = c.navigationTrigger,
                        this.restoredId = c.restoredState ? c.restoredState.navigationId : 0) : c instanceof On && (this.lastId = c.id,
                        this.scheduleScrollEvent(c, this.router.parseUrl(c.urlAfterRedirects).fragment))
                    }
                    )
                }
                consumeScrollEvents() {
                    return this.router.events.subscribe(c => {
                        c instanceof Mi && (c.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(c.position) : c.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(c.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
                    }
                    )
                }
                scheduleScrollEvent(c, g) {
                    this.router.triggerEvent(new Mi(c,"popstate" === this.lastSource ? this.store[this.restoredId] : null,g))
                }
                ngOnDestroy() {
                    this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
                    this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                }
            }
            return d.\u0275fac = function(c) {
                a.$Z()
            }
            ,
            d.\u0275prov = a.Yz7({
                token: d,
                factory: d.\u0275fac
            }),
            d
        }
        )();
        const as = new a.OlP("ROUTER_FORROOT_GUARD")
          , Ea = new a.OlP("")
          , wa = [Be.Ye, {
            provide: At,
            useClass: bt
        }, {
            provide: Rt,
            useFactory: Nt
        }, Rr, {
            provide: fr,
            useFactory: function js(d) {
                return d.routerState.root
            },
            deps: [Rt]
        }, Jr];
        function xo() {
            return new a.PXZ("Router",Rt)
        }
        let No = ( () => {
            class d {
                constructor(c) {}
                static forRoot(c, g) {
                    return {
                        ngModule: d,
                        providers: [wa, [], yl(c), {
                            provide: as,
                            useFactory: Ro,
                            deps: [[Rt, new a.FiY, new a.tp0]]
                        }, {
                            provide: _n,
                            useValue: g || {}
                        }, g?.useHash ? {
                            provide: Be.S$,
                            useClass: Be.Do
                        } : {
                            provide: Be.S$,
                            useClass: Be.b0
                        }, {
                            provide: go,
                            useFactory: () => {
                                const d = (0,
                                a.f3M)(Rt)
                                  , f = (0,
                                a.f3M)(Be.EM)
                                  , c = (0,
                                a.f3M)(_n);
                                return c.scrollOffset && f.setOffset(c.scrollOffset),
                                new Oo(d,f,c)
                            }
                        }, g?.preloadingStrategy ? Ko(g.preloadingStrategy) : [], {
                            provide: a.PXZ,
                            multi: !0,
                            useFactory: xo
                        }, g?.initialNavigation ? Gc(g) : [], [{
                            provide: rn,
                            useFactory: vl
                        }, {
                            provide: a.tb,
                            multi: !0,
                            useExisting: rn
                        }]]
                    }
                }
                static forChild(c) {
                    return {
                        ngModule: d,
                        providers: [yl(c)]
                    }
                }
            }
            return d.\u0275fac = function(c) {
                return new (c || d)(a.LFG(as, 8))
            }
            ,
            d.\u0275mod = a.oAB({
                type: d
            }),
            d.\u0275inj = a.cJS({}),
            d
        }
        )();
        function Ro(d) {
            return "guarded"
        }
        function yl(d) {
            return [{
                provide: or,
                multi: !0,
                useValue: d
            }]
        }
        function vl() {
            const d = (0,
            a.f3M)(a.zs3);
            return f => {
                const c = d.get(a.z2F);
                if (f !== c.components[0])
                    return;
                const g = d.get(Rt)
                  , D = d.get(_l);
                1 === d.get(Ma) && g.initialNavigation(),
                d.get(Ea, null, a.XFs.Optional)?.setUpPreloading(),
                d.get(go, null, a.XFs.Optional)?.init(),
                g.resetRootComponentType(c.componentTypes[0]),
                D.next(),
                D.complete()
            }
        }
        const rn = new a.OlP("");
        function Gc(d) {
            return ["disabled" === d.initialNavigation ? [{
                provide: a.ip1,
                multi: !0,
                useFactory: () => {
                    const d = (0,
                    a.f3M)(Rt);
                    return () => {
                        d.setUpLocationChangeListener()
                    }
                }
            }, {
                provide: Ma,
                useValue: 2
            }] : [], "enabledBlocking" === d.initialNavigation ? [{
                provide: Ma,
                useValue: 0
            }, {
                provide: a.ip1,
                multi: !0,
                deps: [a.zs3],
                useFactory: d => {
                    const f = d.get(Be.V_, Promise.resolve(null));
                    let c = !1;
                    return () => f.then( () => new Promise(D => {
                        const A = d.get(Rt)
                          , R = d.get(_l);
                        (function g(D) {
                            d.get(Rt).events.pipe((0,
                            le.h)(R => R instanceof On || R instanceof ur || R instanceof cr), (0,
                            K.U)(R => R instanceof On || R instanceof ur && (0 === R.code || 1 === R.code) && null), (0,
                            le.h)(R => null !== R), (0,
                            Ve.q)(1)).subscribe( () => {
                                D()
                            }
                            )
                        }
                        )( () => {
                            D(!0),
                            c = !0
                        }
                        ),
                        A.afterPreactivation = () => (D(!0),
                        c || R.closed ? (0,
                        z.of)(void 0) : R),
                        A.initialNavigation()
                    }
                    ))
                }
            }] : []]
        }
        const _l = new a.OlP("",{
            factory: () => new Mt.x
        })
          , Ma = new a.OlP("",{
            providedIn: "root",
            factory: () => 1
        });
        function Ko(d) {
            return [Yi, {
                provide: Ea,
                useExisting: Yi
            }, {
                provide: Mn,
                useExisting: d
            }]
        }
    }
    ,
    7185: (Je, pe, I) => {
        I.d(pe, {
            Rh: () => st,
            _W: () => ke
        });
        var a = I(8256)
          , b = I(7340)
          , oe = I(7579)
          , te = I(6895)
          , ie = I(1481);
        const be = ["toast-component", ""];
        function Ce(Me, Le) {
            if (1 & Me) {
                const Q = a.EpF();
                a.TgZ(0, "button", 5),
                a.NdJ("click", function() {
                    a.CHM(Q);
                    const Ue = a.oxw();
                    return a.KtG(Ue.remove())
                }),
                a.TgZ(1, "span", 6),
                a._uU(2, "\xd7"),
                a.qZA()()
            }
        }
        function Oe(Me, Le) {
            if (1 & Me && (a.ynx(0),
            a._uU(1),
            a.BQk()),
            2 & Me) {
                const Q = a.oxw(2);
                a.xp6(1),
                a.hij("[", Q.duplicatesCount + 1, "]")
            }
        }
        function Se(Me, Le) {
            if (1 & Me && (a.TgZ(0, "div"),
            a._uU(1),
            a.YNc(2, Oe, 2, 1, "ng-container", 4),
            a.qZA()),
            2 & Me) {
                const Q = a.oxw();
                a.Tol(Q.options.titleClass),
                a.uIk("aria-label", Q.title),
                a.xp6(1),
                a.hij(" ", Q.title, " "),
                a.xp6(1),
                a.Q6J("ngIf", Q.duplicatesCount)
            }
        }
        function de(Me, Le) {
            if (1 & Me && a._UZ(0, "div", 7),
            2 & Me) {
                const Q = a.oxw();
                a.Tol(Q.options.messageClass),
                a.Q6J("innerHTML", Q.message, a.oJD)
            }
        }
        function z(Me, Le) {
            if (1 & Me && (a.TgZ(0, "div", 8),
            a._uU(1),
            a.qZA()),
            2 & Me) {
                const Q = a.oxw();
                a.Tol(Q.options.messageClass),
                a.uIk("aria-label", Q.message),
                a.xp6(1),
                a.hij(" ", Q.message, " ")
            }
        }
        function _e(Me, Le) {
            if (1 & Me && (a.TgZ(0, "div"),
            a._UZ(1, "div", 9),
            a.qZA()),
            2 & Me) {
                const Q = a.oxw();
                a.xp6(1),
                a.Udp("width", Q.width + "%")
            }
        }
        class fe {
            constructor(Le, Q) {
                this.component = Le,
                this.injector = Q
            }
            attach(Le, Q) {
                return this._attachedHost = Le,
                Le.attach(this, Q)
            }
            detach() {
                const Le = this._attachedHost;
                if (Le)
                    return this._attachedHost = void 0,
                    Le.detach()
            }
            get isAttached() {
                return null != this._attachedHost
            }
            setAttachedHost(Le) {
                this._attachedHost = Le
            }
        }
        class le {
            constructor(Le, Q, q, Ue, We, Cn) {
                this.toastId = Le,
                this.config = Q,
                this.message = q,
                this.title = Ue,
                this.toastType = We,
                this.toastRef = Cn,
                this._onTap = new oe.x,
                this._onAction = new oe.x,
                this.toastRef.afterClosed().subscribe( () => {
                    this._onAction.complete(),
                    this._onTap.complete()
                }
                )
            }
            triggerTap() {
                this._onTap.next(),
                this.config.tapToDismiss && this._onTap.complete()
            }
            onTap() {
                return this._onTap.asObservable()
            }
            triggerAction(Le) {
                this._onAction.next(Le)
            }
            onAction() {
                return this._onAction.asObservable()
            }
        }
        const ye = new a.OlP("ToastConfig");
        class De {
            constructor(Le) {
                this._overlayRef = Le,
                this.duplicatesCount = 0,
                this._afterClosed = new oe.x,
                this._activate = new oe.x,
                this._manualClose = new oe.x,
                this._resetTimeout = new oe.x,
                this._countDuplicate = new oe.x
            }
            manualClose() {
                this._manualClose.next(),
                this._manualClose.complete()
            }
            manualClosed() {
                return this._manualClose.asObservable()
            }
            timeoutReset() {
                return this._resetTimeout.asObservable()
            }
            countDuplicate() {
                return this._countDuplicate.asObservable()
            }
            close() {
                this._overlayRef.detach(),
                this._afterClosed.next(),
                this._manualClose.next(),
                this._afterClosed.complete(),
                this._manualClose.complete(),
                this._activate.complete(),
                this._resetTimeout.complete(),
                this._countDuplicate.complete()
            }
            afterClosed() {
                return this._afterClosed.asObservable()
            }
            isInactive() {
                return this._activate.isStopped
            }
            activate() {
                this._activate.next(),
                this._activate.complete()
            }
            afterActivate() {
                return this._activate.asObservable()
            }
            onDuplicate(Le, Q) {
                Le && this._resetTimeout.next(),
                Q && this._countDuplicate.next(++this.duplicatesCount)
            }
        }
        class $e {
            constructor(Le, Q) {
                this._toastPackage = Le,
                this._parentInjector = Q
            }
            get(Le, Q, q) {
                return Le === le ? this._toastPackage : this._parentInjector.get(Le, Q, q)
            }
        }
        class Z extends class X {
            attach(Le, Q) {
                return this._attachedPortal = Le,
                this.attachComponentPortal(Le, Q)
            }
            detach() {
                this._attachedPortal && this._attachedPortal.setAttachedHost(),
                this._attachedPortal = void 0,
                this._disposeFn && (this._disposeFn(),
                this._disposeFn = void 0)
            }
            setDisposeFn(Le) {
                this._disposeFn = Le
            }
        }
        {
            constructor(Le, Q, q) {
                super(),
                this._hostDomElement = Le,
                this._componentFactoryResolver = Q,
                this._appRef = q
            }
            attachComponentPortal(Le, Q) {
                const q = this._componentFactoryResolver.resolveComponentFactory(Le.component);
                let Ue;
                return Ue = q.create(Le.injector),
                this._appRef.attachView(Ue.hostView),
                this.setDisposeFn( () => {
                    this._appRef.detachView(Ue.hostView),
                    Ue.destroy()
                }
                ),
                Q ? this._hostDomElement.insertBefore(this._getComponentRootNode(Ue), this._hostDomElement.firstChild) : this._hostDomElement.appendChild(this._getComponentRootNode(Ue)),
                Ue
            }
            _getComponentRootNode(Le) {
                return Le.hostView.rootNodes[0]
            }
        }
        class ne {
            constructor(Le) {
                this._portalHost = Le
            }
            attach(Le, Q=!0) {
                return this._portalHost.attach(Le, Q)
            }
            detach() {
                return this._portalHost.detach()
            }
        }
        let he = ( () => {
            class Me {
                constructor(Q) {
                    this._document = Q
                }
                ngOnDestroy() {
                    this._containerElement && this._containerElement.parentNode && this._containerElement.parentNode.removeChild(this._containerElement)
                }
                getContainerElement() {
                    return this._containerElement || this._createContainer(),
                    this._containerElement
                }
                _createContainer() {
                    const Q = this._document.createElement("div");
                    Q.classList.add("overlay-container"),
                    Q.setAttribute("aria-live", "polite"),
                    this._document.body.appendChild(Q),
                    this._containerElement = Q
                }
            }
            return Me.\u0275fac = function(Q) {
                return new (Q || Me)(a.LFG(te.K0))
            }
            ,
            Me.\u0275prov = a.Yz7({
                token: Me,
                factory: Me.\u0275fac,
                providedIn: "root"
            }),
            Me
        }
        )()
          , K = ( () => {
            class Me {
                constructor(Q, q, Ue, We) {
                    this._overlayContainer = Q,
                    this._componentFactoryResolver = q,
                    this._appRef = Ue,
                    this._document = We,
                    this._paneElements = new Map
                }
                create(Q, q) {
                    return this._createOverlayRef(this.getPaneElement(Q, q))
                }
                getPaneElement(Q="", q) {
                    return this._paneElements.get(q) || this._paneElements.set(q, {}),
                    this._paneElements.get(q)[Q] || (this._paneElements.get(q)[Q] = this._createPaneElement(Q, q)),
                    this._paneElements.get(q)[Q]
                }
                _createPaneElement(Q, q) {
                    const Ue = this._document.createElement("div");
                    return Ue.id = "toast-container",
                    Ue.classList.add(Q),
                    Ue.classList.add("toast-container"),
                    q ? q.getContainerElement().appendChild(Ue) : this._overlayContainer.getContainerElement().appendChild(Ue),
                    Ue
                }
                _createPortalHost(Q) {
                    return new Z(Q,this._componentFactoryResolver,this._appRef)
                }
                _createOverlayRef(Q) {
                    return new ne(this._createPortalHost(Q))
                }
            }
            return Me.\u0275fac = function(Q) {
                return new (Q || Me)(a.LFG(he),a.LFG(a._Vd),a.LFG(a.z2F),a.LFG(te.K0))
            }
            ,
            Me.\u0275prov = a.Yz7({
                token: Me,
                factory: Me.\u0275fac,
                providedIn: "root"
            }),
            Me
        }
        )()
          , ke = ( () => {
            class Me {
                constructor(Q, q, Ue, We, Cn) {
                    this.overlay = q,
                    this._injector = Ue,
                    this.sanitizer = We,
                    this.ngZone = Cn,
                    this.currentlyActive = 0,
                    this.toasts = [],
                    this.index = 0,
                    this.toastrConfig = {
                        ...Q.default,
                        ...Q.config
                    },
                    Q.config.iconClasses && (this.toastrConfig.iconClasses = {
                        ...Q.default.iconClasses,
                        ...Q.config.iconClasses
                    })
                }
                show(Q, q, Ue={}, We="") {
                    return this._preBuildNotification(We, Q, q, this.applyConfig(Ue))
                }
                success(Q, q, Ue={}) {
                    return this._preBuildNotification(this.toastrConfig.iconClasses.success || "", Q, q, this.applyConfig(Ue))
                }
                error(Q, q, Ue={}) {
                    return this._preBuildNotification(this.toastrConfig.iconClasses.error || "", Q, q, this.applyConfig(Ue))
                }
                info(Q, q, Ue={}) {
                    return this._preBuildNotification(this.toastrConfig.iconClasses.info || "", Q, q, this.applyConfig(Ue))
                }
                warning(Q, q, Ue={}) {
                    return this._preBuildNotification(this.toastrConfig.iconClasses.warning || "", Q, q, this.applyConfig(Ue))
                }
                clear(Q) {
                    for (const q of this.toasts)
                        if (void 0 !== Q) {
                            if (q.toastId === Q)
                                return void q.toastRef.manualClose()
                        } else
                            q.toastRef.manualClose()
                }
                remove(Q) {
                    const q = this._findToast(Q);
                    if (!q || (q.activeToast.toastRef.close(),
                    this.toasts.splice(q.index, 1),
                    this.currentlyActive = this.currentlyActive - 1,
                    !this.toastrConfig.maxOpened || !this.toasts.length))
                        return !1;
                    if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
                        const Ue = this.toasts[this.currentlyActive].toastRef;
                        Ue.isInactive() || (this.currentlyActive = this.currentlyActive + 1,
                        Ue.activate())
                    }
                    return !0
                }
                findDuplicate(Q="", q="", Ue, We) {
                    const {includeTitleDuplicates: Cn} = this.toastrConfig;
                    for (const Vn of this.toasts) {
                        const dn = Cn && Vn.title === Q;
                        if ((!Cn || dn) && Vn.message === q)
                            return Vn.toastRef.onDuplicate(Ue, We),
                            Vn
                    }
                    return null
                }
                applyConfig(Q={}) {
                    return {
                        ...this.toastrConfig,
                        ...Q
                    }
                }
                _findToast(Q) {
                    for (let q = 0; q < this.toasts.length; q++)
                        if (this.toasts[q].toastId === Q)
                            return {
                                index: q,
                                activeToast: this.toasts[q]
                            };
                    return null
                }
                _preBuildNotification(Q, q, Ue, We) {
                    return We.onActivateTick ? this.ngZone.run( () => this._buildNotification(Q, q, Ue, We)) : this._buildNotification(Q, q, Ue, We)
                }
                _buildNotification(Q, q, Ue, We) {
                    if (!We.toastComponent)
                        throw new Error("toastComponent required");
                    const Cn = this.findDuplicate(Ue, q, this.toastrConfig.resetTimeoutOnDuplicate && We.timeOut > 0, this.toastrConfig.countDuplicates);
                    if ((this.toastrConfig.includeTitleDuplicates && Ue || q) && this.toastrConfig.preventDuplicates && null !== Cn)
                        return Cn;
                    this.previousToastMessage = q;
                    let Vn = !1;
                    this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened && (Vn = !0,
                    this.toastrConfig.autoDismiss && this.clear(this.toasts[0].toastId));
                    const dn = this.overlay.create(We.positionClass, this.overlayContainer);
                    this.index = this.index + 1;
                    let jt = q;
                    q && We.enableHtml && (jt = this.sanitizer.sanitize(a.q3G.HTML, q));
                    const Tn = new De(dn)
                      , En = new le(this.index,We,jt,Ue,Q,Tn)
                      , Bn = new $e(En,this._injector)
                      , Kt = new fe(We.toastComponent,Bn)
                      , Lt = dn.attach(Kt, this.toastrConfig.newestOnTop);
                    Tn.componentInstance = Lt.instance;
                    const Sn = {
                        toastId: this.index,
                        title: Ue || "",
                        message: q || "",
                        toastRef: Tn,
                        onShown: Tn.afterActivate(),
                        onHidden: Tn.afterClosed(),
                        onTap: En.onTap(),
                        onAction: En.onAction(),
                        portal: Lt
                    };
                    return Vn || (this.currentlyActive = this.currentlyActive + 1,
                    setTimeout( () => {
                        Sn.toastRef.activate()
                    }
                    )),
                    this.toasts.push(Sn),
                    Sn
                }
            }
            return Me.\u0275fac = function(Q) {
                return new (Q || Me)(a.LFG(ye),a.LFG(K),a.LFG(a.zs3),a.LFG(ie.H7),a.LFG(a.R0b))
            }
            ,
            Me.\u0275prov = a.Yz7({
                token: Me,
                factory: Me.\u0275fac,
                providedIn: "root"
            }),
            Me
        }
        )();
        const mt = {
            maxOpened: 0,
            autoDismiss: !1,
            newestOnTop: !0,
            preventDuplicates: !1,
            countDuplicates: !1,
            resetTimeoutOnDuplicate: !1,
            includeTitleDuplicates: !1,
            iconClasses: {
                error: "toast-error",
                info: "toast-info",
                success: "toast-success",
                warning: "toast-warning"
            },
            closeButton: !1,
            disableTimeOut: !1,
            timeOut: 5e3,
            extendedTimeOut: 1e3,
            enableHtml: !1,
            progressBar: !1,
            toastClass: "ngx-toastr",
            positionClass: "toast-top-right",
            titleClass: "toast-title",
            messageClass: "toast-message",
            easing: "ease-in",
            easeTime: 300,
            tapToDismiss: !0,
            onActivateTick: !1,
            progressAnimation: "decreasing",
            payload: null,
            toastComponent: ( () => {
                class Me {
                    constructor(Q, q, Ue) {
                        this.toastrService = Q,
                        this.toastPackage = q,
                        this.ngZone = Ue,
                        this.width = -1,
                        this.toastClasses = "",
                        this.state = {
                            value: "inactive",
                            params: {
                                easeTime: this.toastPackage.config.easeTime,
                                easing: "ease-in"
                            }
                        },
                        this.message = q.message,
                        this.title = q.title,
                        this.options = q.config,
                        this.originalTimeout = q.config.timeOut,
                        this.toastClasses = `${q.toastType} ${q.config.toastClass}`,
                        this.sub = q.toastRef.afterActivate().subscribe( () => {
                            this.activateToast()
                        }
                        ),
                        this.sub1 = q.toastRef.manualClosed().subscribe( () => {
                            this.remove()
                        }
                        ),
                        this.sub2 = q.toastRef.timeoutReset().subscribe( () => {
                            this.resetTimeout()
                        }
                        ),
                        this.sub3 = q.toastRef.countDuplicate().subscribe(We => {
                            this.duplicatesCount = We
                        }
                        )
                    }
                    get displayStyle() {
                        if ("inactive" === this.state.value)
                            return "none"
                    }
                    ngOnDestroy() {
                        this.sub.unsubscribe(),
                        this.sub1.unsubscribe(),
                        this.sub2.unsubscribe(),
                        this.sub3.unsubscribe(),
                        clearInterval(this.intervalId),
                        clearTimeout(this.timeout)
                    }
                    activateToast() {
                        this.state = {
                            ...this.state,
                            value: "active"
                        },
                        !0 !== this.options.disableTimeOut && "timeOut" !== this.options.disableTimeOut && this.options.timeOut && (this.outsideTimeout( () => this.remove(), this.options.timeOut),
                        this.hideTime = (new Date).getTime() + this.options.timeOut,
                        this.options.progressBar && this.outsideInterval( () => this.updateProgress(), 10))
                    }
                    updateProgress() {
                        if (0 === this.width || 100 === this.width || !this.options.timeOut)
                            return;
                        const Q = (new Date).getTime();
                        this.width = (this.hideTime - Q) / this.options.timeOut * 100,
                        "increasing" === this.options.progressAnimation && (this.width = 100 - this.width),
                        this.width <= 0 && (this.width = 0),
                        this.width >= 100 && (this.width = 100)
                    }
                    resetTimeout() {
                        clearTimeout(this.timeout),
                        clearInterval(this.intervalId),
                        this.state = {
                            ...this.state,
                            value: "active"
                        },
                        this.outsideTimeout( () => this.remove(), this.originalTimeout),
                        this.options.timeOut = this.originalTimeout,
                        this.hideTime = (new Date).getTime() + (this.options.timeOut || 0),
                        this.width = -1,
                        this.options.progressBar && this.outsideInterval( () => this.updateProgress(), 10)
                    }
                    remove() {
                        "removed" !== this.state.value && (clearTimeout(this.timeout),
                        this.state = {
                            ...this.state,
                            value: "removed"
                        },
                        this.outsideTimeout( () => this.toastrService.remove(this.toastPackage.toastId), +this.toastPackage.config.easeTime))
                    }
                    tapToast() {
                        "removed" !== this.state.value && (this.toastPackage.triggerTap(),
                        this.options.tapToDismiss && this.remove())
                    }
                    stickAround() {
                        "removed" !== this.state.value && (clearTimeout(this.timeout),
                        this.options.timeOut = 0,
                        this.hideTime = 0,
                        clearInterval(this.intervalId),
                        this.width = 0)
                    }
                    delayedHideToast() {
                        !0 === this.options.disableTimeOut || "extendedTimeOut" === this.options.disableTimeOut || 0 === this.options.extendedTimeOut || "removed" === this.state.value || (this.outsideTimeout( () => this.remove(), this.options.extendedTimeOut),
                        this.options.timeOut = this.options.extendedTimeOut,
                        this.hideTime = (new Date).getTime() + (this.options.timeOut || 0),
                        this.width = -1,
                        this.options.progressBar && this.outsideInterval( () => this.updateProgress(), 10))
                    }
                    outsideTimeout(Q, q) {
                        this.ngZone ? this.ngZone.runOutsideAngular( () => this.timeout = setTimeout( () => this.runInsideAngular(Q), q)) : this.timeout = setTimeout( () => Q(), q)
                    }
                    outsideInterval(Q, q) {
                        this.ngZone ? this.ngZone.runOutsideAngular( () => this.intervalId = setInterval( () => this.runInsideAngular(Q), q)) : this.intervalId = setInterval( () => Q(), q)
                    }
                    runInsideAngular(Q) {
                        this.ngZone ? this.ngZone.run( () => Q()) : Q()
                    }
                }
                return Me.\u0275fac = function(Q) {
                    return new (Q || Me)(a.Y36(ke),a.Y36(le),a.Y36(a.R0b))
                }
                ,
                Me.\u0275cmp = a.Xpm({
                    type: Me,
                    selectors: [["", "toast-component", ""]],
                    hostVars: 5,
                    hostBindings: function(Q, q) {
                        1 & Q && a.NdJ("click", function() {
                            return q.tapToast()
                        })("mouseenter", function() {
                            return q.stickAround()
                        })("mouseleave", function() {
                            return q.delayedHideToast()
                        }),
                        2 & Q && (a.d8E("@flyInOut", q.state),
                        a.Tol(q.toastClasses),
                        a.Udp("display", q.displayStyle))
                    },
                    attrs: be,
                    decls: 5,
                    vars: 5,
                    consts: [["type", "button", "class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", 3, "class", 4, "ngIf"], [4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 3, "innerHTML"], ["role", "alert"], [1, "toast-progress"]],
                    template: function(Q, q) {
                        1 & Q && (a.YNc(0, Ce, 3, 0, "button", 0),
                        a.YNc(1, Se, 3, 5, "div", 1),
                        a.YNc(2, de, 1, 3, "div", 2),
                        a.YNc(3, z, 2, 4, "div", 3),
                        a.YNc(4, _e, 2, 2, "div", 4)),
                        2 & Q && (a.Q6J("ngIf", q.options.closeButton),
                        a.xp6(1),
                        a.Q6J("ngIf", q.title),
                        a.xp6(1),
                        a.Q6J("ngIf", q.message && q.options.enableHtml),
                        a.xp6(1),
                        a.Q6J("ngIf", q.message && !q.options.enableHtml),
                        a.xp6(1),
                        a.Q6J("ngIf", q.options.progressBar))
                    },
                    dependencies: [te.O5],
                    encapsulation: 2,
                    data: {
                        animation: [(0,
                        b.X$)("flyInOut", [(0,
                        b.SB)("inactive", (0,
                        b.oB)({
                            opacity: 0
                        })), (0,
                        b.SB)("active", (0,
                        b.oB)({
                            opacity: 1
                        })), (0,
                        b.SB)("removed", (0,
                        b.oB)({
                            opacity: 0
                        })), (0,
                        b.eR)("inactive => active", (0,
                        b.jt)("{{ easeTime }}ms {{ easing }}")), (0,
                        b.eR)("active => removed", (0,
                        b.jt)("{{ easeTime }}ms {{ easing }}"))])]
                    }
                }),
                Me
            }
            )()
        };
        let st = ( () => {
            class Me {
                static forRoot(Q={}) {
                    return {
                        ngModule: Me,
                        providers: [{
                            provide: ye,
                            useValue: {
                                default: mt,
                                config: Q
                            }
                        }]
                    }
                }
            }
            return Me.\u0275fac = function(Q) {
                return new (Q || Me)
            }
            ,
            Me.\u0275mod = a.oAB({
                type: Me
            }),
            Me.\u0275inj = a.cJS({
                imports: [te.ez]
            }),
            Me
        }
        )()
    }
}, Je => {
    Je(Je.s = 7092)
}
]);

